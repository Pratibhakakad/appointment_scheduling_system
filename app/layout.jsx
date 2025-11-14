import "./globals.css";
import "./fonts.css";

export const metadata = {
  title: "Dashboard",
  description: "Doctor scheduling system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
