
import { Kanit, Space_Mono } from "next/font/google";
import "./globals.css";
// import Footer from "@/Components/layout/Footer";
import Nav from "@/Components/layout/Nav";
import MyFullName from "@/Components/common/MyFullName";

// นำเข้าฟอนต์และตั้งค่าตัวแปร CSS
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kanit.variable} ${spaceMono.variable}`}>
      <body className="font-spaceMono bg-[#090C12] min-h-screen flex flex-col ">
        
        <main className="flex-grow">{children}</main>
        
        <div className="fixed top-0 w-full z-20">
          <Nav />
        </div>

        <div className="fixed bottom-0 right-0 m-5">
          <MyFullName />
        </div>
      </body>
    </html>
  );
}
