-- Run this once if you already ran the previous schema.sql.
-- It adds the homepage hero-image manager and removes only the old placeholder products.

create table if not exists public.homepage_slides (
  id uuid primary key default gen_random_uuid(),
  title text,
  subtitle text,
  image text not null,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.homepage_slides enable row level security;

drop policy if exists "Public can read active homepage slides" on public.homepage_slides;
create policy "Public can read active homepage slides" on public.homepage_slides for select using (active = true or exists (select 1 from public.admins a where a.user_id = auth.uid()));
drop policy if exists "Admins can insert homepage slides" on public.homepage_slides;
create policy "Admins can insert homepage slides" on public.homepage_slides for insert to authenticated with check (exists (select 1 from public.admins a where a.user_id = auth.uid()));
drop policy if exists "Admins can update homepage slides" on public.homepage_slides;
create policy "Admins can update homepage slides" on public.homepage_slides for update to authenticated using (exists (select 1 from public.admins a where a.user_id = auth.uid())) with check (exists (select 1 from public.admins a where a.user_id = auth.uid()));
drop policy if exists "Admins can delete homepage slides" on public.homepage_slides;
create policy "Admins can delete homepage slides" on public.homepage_slides for delete to authenticated using (exists (select 1 from public.admins a where a.user_id = auth.uid()));

delete from public.products where slug in ('opus-one-inspire-clear-coat','opus-interior','opus-primer','opus-waterproofing','paint-brush-set','paint-roller','hammer','screwdriver-set');
