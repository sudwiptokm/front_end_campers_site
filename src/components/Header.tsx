import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../redux/features/cart/cartSelector";
import { useAppSelector } from "../redux/hooks";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/management", label: "Product Management" },
  { to: "/cart", label: "Cart" },
  { to: "/about-us", label: "About" },
];

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <Link to="/" className={`flex items-center ${className}`}>
    <img src="/images/logo.png" width={96} alt="Camper's Den Logo" />
    <h3>Camper's Den.</h3>
  </Link>
);

const NavLink: React.FC<{
  to: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}> = ({ to, label, onClick, mobile }) => {
  const linkClass =
    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";

  if (mobile) {
    return (
      <Link to={to} className={linkClass} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <NavigationMenuLink asChild>
      <Link to={to} className={linkClass} onClick={onClick}>
        {label}
      </Link>
    </NavigationMenuLink>
  );
};

const MobileNav: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent side="left">
      <Logo className="justify-center flex-col mb-6" />
      <nav className="grid gap-2">
        {navItems.map((item) => (
          <NavLink key={item.to} {...item} onClick={onClose} mobile />
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const totalCart = useAppSelector(selectTotalQuantity);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <Logo className="mr-6 hidden lg:flex" />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Link className="relative" to="/cart">
          <ShoppingCart size={24} />
          <div className="absolute bg-primary px-1 py-0 flex items-center justify-center rounded-full -right-1 -top-1">
            <p className="text-white text-xs">{totalCart}</p>
          </div>
        </Link>

        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
        />
      </Sheet>
    </header>
  );
};

export default Header;
