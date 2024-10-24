"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Footer() {
    

    return (
        
        <footer className=" w-full  bg-blue-400  dark:bg-gray-800">
               <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                  <span className="text-sm text-white sm:text-center dark:text-gray-400">© <a href="https://flowbite.com/" className="hover:underline">Gestão Studio. 2024™</a>. All Rights Reserved.
               </span>
               <ul className="flex flex-wrap items-end ml-20 mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                  
                  
                  <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Instagram</a>
                  </li>
                  <li>
                        <a href="#" className="hover:underline">Email</a>
                  </li>
               </ul>
               </div>
        </footer>


    )
}