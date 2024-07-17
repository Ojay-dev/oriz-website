import { Link, useLocation } from "react-router-dom";
import { AppStoreBlk, Facebook, FooterLogo, Instagram, Linkedin, Logo, LogoBlack, Playstore, Telegram, Twitter } from "@/assets/svg";
import FooterAppView from "@/assets/image/footer-app-view.webp";
import HamburgerMenuComponent from "@/components/hamburger-menu";
import { useEffect } from "react";

type DefaultLayoutProps = React.PropsWithChildren<{
  theme?: "dark" | "light";
}>;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ theme = "light", children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("pathname: ", pathname);
  }, [pathname]);

  return (
    <>
      <section className={theme === "dark" ? "bg-black" : pathname === "/partners" || pathname === "/company" ? "bg-[#FFF8E4]" : ""}>
        <nav
          className={`mx-auto flex w-11/12 items-center justify-between pt-7 font-jakarta ${theme === "dark" && "text-white"} lg:pt-14 2xl:max-w-[1440px]`}
        >
          <Link to="/">
            <img src={theme === "dark" ? Logo : LogoBlack} alt="Oriz logo" />
          </Link>

          <ul className="hidden gap-8 lg:flex">
            <li className="text-base font-medium">
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li className="text-base font-medium">
              <Link to="/partners">Partners</Link>
            </li>
            <li className="text-base font-medium">
              <Link to="/stories">Stories</Link>
            </li>
          </ul>

          <div className="hidden gap-x-6 lg:flex">
            <a href="#" className={`rounded-xl border-[2px] ${theme === "dark" ? "border-white" : "border-black"} px-9 py-5`}>
              Sign In
            </a>

            <button className="rounded-xl bg-[#252525] px-4 text-white">Get Started— For Free</button>
          </div>

          <HamburgerMenuComponent theme={theme} />
        </nav>
      </section>

      <main>{children}</main>
      <footer className="overflow-hidden">
        <div
          className=""
          style={{
            background:
              pathname === "/products"
                ? "linear-gradient(to bottom, white 0%, white 45%, black 45%, black 100%)"
                : "linear-gradient(to bottom, #0C513F 0%, #0C513F 45%, black 45%, black 100%)",
          }}
        >
          <div className="relative mx-auto flex w-11/12 flex-col-reverse justify-between gap-y-16 pb-20 pt-28 lg:grid lg:grid-cols-[1fr_2fr] lg:items-end 2xl:max-w-[1440px]">
            <div className="mb-10">
              <img src={FooterLogo} alt="Oriz logo" />
              <p className="my-6 max-w-[455px] font-jakarta text-xl text-white">
                Revolutionising health and wellness with cutting-edge technology
              </p>
              <div className="flex flex-col gap-y-2.5 lg:flex-row lg:gap-x-5">
                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
                  <img src={Playstore} alt="Play store icon" />
                  Google Play
                </button>

                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
                  <img src={AppStoreBlk} alt="app store icon" /> App Store
                </button>
              </div>
            </div>

            <div className="relative -right-[10%] top-0 lg:-right-[15%]">
              <img src={FooterAppView} alt="Oriz app preview" />
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="mx-auto grid w-11/12 justify-between gap-y-11 border-y border-[#2D2D2D] py-20 md:grid-cols-2 xl:flex 2xl:max-w-[1440px]">
            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Products</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Fitness Plans</a>
                </li>
                <li>
                  <a href="#">Nutrition Plans</a>
                </li>
                <li>
                  <a href="#">Exclusive discounts</a>
                </li>
                <li>
                  <a href="#">Tokenised Rewards</a>
                </li>
                <li>
                  <a href="#">Resource Library</a>
                </li>
                <li>
                  <a href="#">Marketplace</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Resources</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Marketplace</a>
                </li>
                <li>
                  <a href="#">AI Library</a>
                </li>
                <li>
                  <a href="#">Demo</a>
                </li>
                <li>
                  <a href="#">Join Telegram</a>
                </li>
                <li>
                  <a href="#">Consumers</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Use Cases</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">Employee</a>
                </li>
                <li>
                  <a href="#">Creators</a>
                </li>
                <li>
                  <a href="#">Entreprenuer</a>
                </li>
                <li>
                  <a href="#">Business Owners</a>
                </li>
                <li>
                  <a href="#">Employer</a>
                </li>
                <li>
                  <a href="#">Professionals</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Company</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Press & Media</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-5 font-jakarta text-[#868686]">Legal</h5>
              <ul className="grid gap-y-5 font-jakarta text-white">
                <li>
                  <a href="#">End-User Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Developer Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto flex w-11/12 flex-col items-center justify-between gap-y-6 py-14 lg:flex-row 2xl:max-w-[1440px]">
            <p className="text-white">© Oris technologies Nigeria Limited</p>

            <ul className="flex gap-x-4">
              <li>
                <a href="#">
                  <img src={Facebook} alt="facebook logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Twitter} alt="twitter logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Instagram} alt="instagram logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Linkedin} alt="linkedin logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Telegram} alt="telegram logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
