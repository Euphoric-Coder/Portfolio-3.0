import { Menu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      {/* Oval Navbar Container */}
      <div className="relative bg-black/80 text-white py-2 px-6 rounded-full shadow-lg backdrop-blur-md border border-gray-700">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-gray-300" />
            <span className="text-lg font-semibold text-gray-300">Sagnik's Portfolio</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-gray-300 transition-all hover:text-white relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-gray-700 text-white hover:bg-gray-600 px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300 hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-gray-800">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white mt-4"
                >
                  Sign Up
                </Button>
                <Button className="bg-gray-700 text-white hover:bg-gray-600 mt-2 rounded-full">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
