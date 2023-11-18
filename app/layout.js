import FloatIcons from "./components/floatIcons";
import Footer from "./components/footer";
import Nav from "./components/nav";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio/CoderHall",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Nav></Nav>
        {children}
        <FloatIcons></FloatIcons>
        <Footer></Footer>
      </body>
    </html>
  );
}
