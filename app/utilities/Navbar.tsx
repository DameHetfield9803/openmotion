"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeSwitch from "../ThemeSwitch";
import Image from "next/image";
import logo from '.././open-motion-high-resolution-logo-transparent.png'
export default function Navbar() {
  return (
    <div className="sticky top-2 z-20 mx-auto p-3 max-w-fit rounded-lg backdrop-blur-md dark:bg-black">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            <NavigationMenuItem>
                <Link href="/"><Image className="rounded-3xl" src={logo} alt="OpenMotion" width={110} height={50}/></Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeSwitch />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}