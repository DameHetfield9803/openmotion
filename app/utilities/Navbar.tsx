"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";
import ThemeSwitch from "../ThemeSwitch";
//import Image from "next/image";
export default function Navbar() {
  return (
    <div className="sticky top-1.5 z-20 mx-auto p-3 max-w-fit rounded-lg backdrop-blur-md dark:bg-black">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem>
            <Link href="/" className="pr-16">Logo</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex flex-col text-center align-text-top">
            <NavigationMenuTrigger>
              Products
              <NavigationMenuContent className="p-2">
                Test...
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeSwitch />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}