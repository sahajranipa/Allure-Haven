import "./globals.css";

export const metadata = {
  title: "Allure Haven",
  description: "A Menace World for Men",
  keywords: "Allure, Menace, World, Men, Made, By, Menace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
