'use client'
import { usePathname } from "next/navigation";
import "./globals.css";
import Menu from "@/app/components/Menu"
import UserProvider from "@/contexts/UserProvider"
 
export default function RootLayout({Children}) {
  return(
    <html lang='en'>
      <body classname=''>
        <UserProvider>
          {pathName !="/login" ? <Menu />:null}
          {Children}
        </UserProvider>
      </body>

    </html>
  
  );
}
