import { useState } from "react";
import DrawerComponent from "../drawer";
import { CloseIcon, HamburgerMenu, HamburgerMenuDark, LogoBlack } from "@/assets/svg";
import { Link } from "react-router-dom";

type HamburgerMenuProps = {
  theme?: "dark" | "light";
};
const HamburgerMenuComponent = ({ theme }: HamburgerMenuProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={showDrawer}>
        <img src={theme === "dark" ? HamburgerMenu : HamburgerMenuDark} alt="Hamburger menu" />
      </button>

      <DrawerComponent open={open} width={"100%"} onClose={onClose} rootClassName="hamburger-menu">
        <div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={LogoBlack} alt="Oriz logo" />
            </Link>

            <button onClick={onClose}>
              <img src={CloseIcon} alt="cancel icon" />
            </button>
          </div>

          <ul className="flex flex-col gap-y-[18px] py-12 font-jakarta text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <Link to="/tokens">Tokens</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
            <button className="rounded-xl bg-green-100 px-9 py-5 text-base text-white">
              <span className="font-medium">Get Started</span> — For Free!{" "}
            </button>

            <button className="h-[70px] rounded-xl bg-black px-9 text-base text-white">Sign in</button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  );
};

export default HamburgerMenuComponent;
