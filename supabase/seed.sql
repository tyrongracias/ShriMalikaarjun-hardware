-- Optional starter seed. Run after schema.sql.
-- This inserts the products currently present in lib/catalog.js.

insert into public.products (slug,name,short,brand,range,category,category_slug,subcategory,subcategory_name,description,long_description,image,available,featured)
values ('opus-one-inspire-clear-coat','One Inspire Clear Coat','OPUS','Opus','One','Paints','paints','exterior-paints','Exterior Paints','Protect and elevate your exterior surfaces with our Water-Based Clear Coat for Exterior Textures.','Engineered to resist weathering and algal growth, it keeps surfaces looking fresh with minimal upkeep. Designed to preserve design aesthetics, it maintains the original beauty of textured finishes. With a 5-year performance warranty, it’s the smart choice for lasting protection and clean, enduring appeal.','/images/products/one-inspire-clear-coat-packshot.webp',true,true)
on conflict (slug) do nothing;
