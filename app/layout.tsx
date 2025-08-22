"use client";

import { SessionProvider } from "next-auth/react";
import './globals.css';
import ClientNavBar from "@/components/ClientNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
      <body>
        <SessionProvider>
    
          {children}</SessionProvider>
      </body>
    </html>
  );
}