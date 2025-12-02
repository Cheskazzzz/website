import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "~/components/ui/navigation-menu";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e8d4c8] shadow-sm">
      <div className="w-full px-6 flex h-16 items-center justify-between">
        {/* Left: Logo and Store Name */}
        <Link className="flex items-center space-x-2 hover:opacity-80 transition-opacity" href="/">
          <Image src="/chiikawa.ico" alt="Chiikawa Logo" width={40} height={40} />
          <span className="hidden font-bold sm:inline-block text-xl text-[#f5a5b8]">Chiikawa Store</span>
        </Link>

        {/* Middle: Plushies Button */}
        <Link
          href="/plushies"
          className="text-lg font-semibold text-white bg-[#f5a5b8] hover:bg-[#f08aad] rounded-full px-6 py-2 transition-colors"
        >
          Plushies
        </Link>

        {/* Right: Navigation Menu */}
        <nav className="flex items-center space-x-2 text-base font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-[#3d2817] hover:text-[#f5a5b8] px-3 py-2 rounded-full transition-colors hover:bg-[#fef0f5]">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-[#3d2817] hover:text-[#f5a5b8] px-3 py-2 rounded-full transition-colors hover:bg-[#fef0f5]">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="text-[#3d2817] hover:text-[#f5a5b8] px-3 py-2 rounded-full transition-colors hover:bg-[#fef0f5]">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Cart Icon (links to /cart) */}
          <Link href="/cart" aria-label="View cart" className="relative flex items-center px-3 py-2 hover:bg-[#fef0f5] rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#f5a5b8]">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
            </svg>
            <span className="sr-only">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
