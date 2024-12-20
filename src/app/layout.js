"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import Navbar from '@/components/Navbar'
import Newfooter from '@/components/Newfooter'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="../Images/favicon.ico"  sizes="64x64"/>
      <body className={inter.className}>
      <main >
         
            <Navbar />
            {children}

            <Newfooter/>
           
          </main>
        </body>
    </html>
  )
}
