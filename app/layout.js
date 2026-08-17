import "./globals.css";

export const metadata = {
  title: "Shri Malikaarjun Hardware & Paints | Paints, Hardware & Tools",
  description:
    "Your local hardware and paint store in Canacona, Goa. Explore paints, hardware, tools, waterproofing and painting accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
