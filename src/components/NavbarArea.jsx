import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  return (
    <Navbar className="bg-[#002228] w-full md:h-[84px]"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      

      <NavbarContent justify="start">
        <NavbarBrand>
          <img className="w-[91px] h-[20px]" src="Logo.png" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-[16px] font-work text-white" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="text-[16px] font-work text-white" href="#" >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[16px] font-work text-white"  href="#">
            Customers
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-[16px] font-work text-white" href="#">
            Solutions
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="" justify="end">
        <NavbarItem className="hidden md:flex">
          <Link className="bg-primary text-[#002228] text-sm font-work font-medium rounded-full py-[10px] px-4" href="#">Book a Demo</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="hidden text-sm font-work font-medium rounded-full bg-transparent py-[10px] px-4 text-white border border-white md:flex" href="#">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu className="bg-[#002228]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="" key={`${item}-${index}`}>
            <Link
              className="w-full opacity-80 transition-all hover:opacity-100"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarArea;