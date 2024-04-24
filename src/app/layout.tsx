import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import user from './assets/user.svg'
import Image from "next/image";
import { Bell, LocateFixed, Settings } from 'lucide-react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full p-4 justify-between">
          <Image
           src={user} 
           alt="user-icon" 
           className="user-profil" 
           width ={30}
           height={30}
           />
           
           <div className="flex justify-between items-center">
            <LocateFixed className=" text-blue-700" />
            <div className="flex flex-col pl-3 justify-center items-center">
              <p>Bobo-Dioulasso</p>
              <p>Burkina Faso</p>
            </div>
           </div>

           <div className="flex justify-between items-center">
            <Bell className=" text-blue-700" />
            <Settings className=" ml-3 text-blue-700" />
           </div>
        </div>
        {children}
        </body>
    </html>
  );
}
