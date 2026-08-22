import "./globals.css";

export const metadata = {
  title: "HR Chat box",
  description:
    "Ask about company policies, benefits, and workplace guidelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
