import {
  AppStore,
  AppStoreBlk,
  AppView,
  BackArrow,
  Bloomberg,
  CrunchBase,
  DownArrowYellow,
  Facebook,
  FooterAppView,
  FooterLogo,
  Instagram,
  Linkedin,
  Logo,
  Multinational,
  OrizBanner,
  OrizLady2,
  OrizPartners,
  OuterFrame,
  OuterFrame2,
  Playstore,
  PromoTag,
  RightArrow,
  RightArrowWhite,
  SquiglyLine,
  Techcrunch,
  Telegram,
  Twitter,
  WebFrame,
  Yahoo,
} from "@/assets/svg";
import ORIZLady from "@/assets/image/ORIZ-Lady.png";

const IndexPage = () => {
  return (
    <main>
      <section className="bg-black">
        <nav className="mx-auto flex w-11/12 items-center justify-between pt-14 font-jakarta text-white 2xl:max-w-[1440px]">
          <a href="#">
            <Logo />
          </a>

          <ul className="flex gap-8">
            <li className="text-base font-medium">
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li className="text-base font-medium">
              <a href="#">Partners</a>
            </li>
            <li className="text-base font-medium">
              <a href="#">Stories</a>
            </li>
          </ul>

          <div className="flex gap-x-6">
            <a href="#" className="rounded-xl border-[2px] border-white px-9 py-5">
              Sign In
            </a>

            <button className="rounded-xl bg-[#252525] px-4">Get Started— For Free</button>
          </div>
        </nav>

        <div className="mx-auto mt-16 grid w-11/12 grid-cols-2 items-center text-white 2xl:max-w-[1440px]">
          <div>
            <button className="mb-[33px] flex items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
              <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px]">New</span>{" "}
              <span>We’re live across all African Countries</span>
              <RightArrowWhite />
            </button>

            <h2 className="max-w-[600px] font-duplicate-sans text-[66px] leading-tight">
              Personalised plans for your unique{" "}
              <span className="relative">
                wellness
                <span className="absolute -bottom-2.5 left-0">
                  <SquiglyLine />
                </span>
              </span>{" "}
              Journey
            </h2>
            <p className="my-8 max-w-[400px] font-jakarta text-base leading-10">
              ORIZ is a solution for your health and wellness journey, providing you with personalized tools and benefits to help you lead a
              healthier life.
            </p>

            <div className="flex gap-x-6">
              <button className="rounded-xl bg-green-100 px-9 py-5 text-base">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="rounded-xl bg-white px-9 text-base text-black">Learn More</button>
            </div>
          </div>

          <img src={ORIZLady} alt="A smilling lady" className="ml-auto rounded-[50px]" />
        </div>

        <div className="mx-auto mt-20 w-11/12 pb-12 2xl:max-w-[1440px]">
          <h4 className="mb-7 text-pitch-white">Featured on</h4>
          <div className="flex justify-between">
            <Yahoo />
            <Bloomberg />
            <Techcrunch />
            <CrunchBase />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 w-11/12 2xl:max-w-[1440px]">
        <div className="flex justify-between">
          <div className="">
            <h3 className="max-w-[500px] font-duplicate-sans text-[66px] leading-tight text-pitch-white">
              We are trusted by <span className="text-[#ED5E3B]">a community</span> of <br />
              <span className="text-black">1 Million+</span> Africans
            </h3>

            <p className="mt-8 max-w-[480px] text-xl leading-loose">
              We help you build a healthy lifestyle using an incentivised reward called ORIZ tokens — redeemable for discounts and benefits.
            </p>

            <div className="mt-12 flex gap-x-5">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <Playstore />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <AppStore /> Get on App Store
              </button>
            </div>
          </div>

          <div className="-mr-[9%]">
            <OrizLady2 />
          </div>
        </div>

        <div className="flex gap-[9%]">
          <div className="-ml-[9%] -mt-96">
            <OrizBanner />
          </div>

          <div className="w-full">
            <ol className="font-duplicate-sans text-[41px]">
              <li className="border-b border-[#E9E9E9] p-10">
                <div>
                  <span className="mr-7 text-2xl text-[#ED5E3B]">01</span> Gym plans
                </div>

                <p className="mt-4 max-w-[450px] font-jakarta text-2xl leading-relaxed text-[#575757]">
                  Discounted gym memberships plan across our partners in Africa.
                </p>
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">02</span> Meals Plan
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">03</span> Ai Integration
              </li>

              <li className="border-b border-[#E9E9E9] p-10">
                <span className="mr-7 text-2xl text-[#B9B9B9]">04</span> Tokenize Rewards
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-[2fr_1fr] items-center">
          <div>
            <h3 className="max-w-[650px] font-duplicate-sans text-7xl">We’re your partner for a healthier future. </h3>
            <p className="mt-10 max-w-[565px] font-jakarta text-xl">
              Prioritise proactive self-care, with our affordable, incentivised health and wellness Solutions
            </p>
          </div>

          <Multinational />
        </div>

        <div className="mt-20">
          <div className="flex justify-between">
            <div className="flex items-center gap-6">
              <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#218068] font-duplicate-sans text-3xl text-white">
                01
              </span>{" "}
              <h3 className="font-duplicate-sans text-[44px]">Fitness & Wellness Plans</h3>
            </div>

            <div className="flex items-center gap-6">
              <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-black">
                <BackArrow />
              </button>
              <button className="flex items-center gap-x-2.5 rounded-[49px] bg-[#F5F5F5] px-7 py-6 text-xl">
                Next <RightArrow />
              </button>
            </div>
          </div>

          <div className="mt-6 flex h-[650px] justify-between overflow-hidden rounded-[49px] border-[4px] border-[#000000] bg-[#195D4C] px-12 py-20">
            <div>
              <h3 className="max-w-[452px] font-duplicate-sans text-[53px] leading-tight text-white">
                Access to health, Fitness & wellness options
              </h3>

              <p className="my-[33px] max-w-[455px] font-jakarta text-xl text-white">
                Our  plans allows you to access various gyms, fitness programs, wellness centers, and healthy nutritional options,  all over
                the globe.
              </p>

              <div className="flex items-center gap-x-6">
                <button className="flex items-center gap-x-1 rounded-[13px] bg-white px-9 py-[21px]">
                  Get Started — For Free! <RightArrow />
                </button>

                <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                  Learn More
                </a>
              </div>

              <p className="mt-3 font-jakarta text-base text-white">*Up-to 15% exclusive discounts on any of our Services</p>
            </div>

            <AppView />
          </div>

          <div className="mt-3 flex gap-x-5">
            <div className="h-[31px] w-[31px] rounded-full border-[4px] border-black bg-[#195D4C]"></div>
            <div className="h-[31px] w-[31px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </div>
      </section>

      <section className="mt-8" style={{ background: "linear-gradient(to bottom, white 0%, white 35%, black 35%, black 100%)" }}>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-x-8 2xl:max-w-[1440px]">
          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FF884D] px-10 pt-14">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-5xl text-white">join our Community</h3>
            <p className="max-w-[420px] font-jakarta text-white">
              Connect with like-minded individuals, fitness enthusiasts, and experts in our thriving community.
            </p>

            <div className="mt-8 flex gap-x-5">
              <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base">
                <Playstore />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base">
                <AppStoreBlk /> Get on App Store
              </button>
            </div>

            <OuterFrame2 />
          </div>

          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FFF8E4] px-10 pt-14">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-5xl">Tokenized Rewards</h3>
            <p className="max-w-[420px] font-jakarta">Earn ORIZ tokens for healthy activities, redeemable for discounts and benefits.</p>

            <div className="mt-8 flex gap-x-5">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <Playstore />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <AppStore /> Get on App Store
              </button>
            </div>

            <OuterFrame />
          </div>
        </div>
      </section>

      <section className="bg-black pb-80 pt-8">
        <div className="relative mx-auto mt-6 flex w-11/12 justify-between rounded-[49px] border-[4px] border-[#2B2B2B] bg-[#218168] px-12 py-20 2xl:max-w-[1440px]">
          <div>
            <h3 className="max-w-[452px] font-duplicate-sans text-[53px] leading-tight text-white">Oriz MarketPlace</h3>

            <p className="my-[33px] max-w-[455px] font-jakarta text-xl text-white">
               Take advantage of oriz marketplace to explore and purchase a variety of fitness-related products.
            </p>

            <div className="flex items-center gap-x-6">
              <button className="flex items-center gap-x-2 rounded-[13px] bg-white px-9 py-[21px]">
                Get Started — For Free! <RightArrow />
              </button>

              <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                Learn More
              </a>
            </div>

            <div className="mt-8 flex">
              <PromoTag />
              <p className="max-w-[297px] font-jakarta text-base text-white">
                Up-to 15% exclusive discounts on healthcare services, gym memberships, wearables, and more!
              </p>
            </div>
          </div>

          <div className="absolute -right-32">
            <WebFrame />
          </div>
        </div>

        <div className="mx-auto mt-8 w-8/12 2xl:max-w-[1440px]">
          <h4 className="font-duplicate-sans text-[50px] text-white">Coming Soon on</h4>

          <div className="flex gap-x-5">
            <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
              <Playstore />
              Google Play
            </button>

            <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
              <AppStoreBlk /> App Store
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black pb-10 pt-8">
          <div className="mx-auto mt-6 w-11/12 py-20 2xl:max-w-[1440px]">
            <div className="flex gap-x-2">
              <h3 className="mb-14 font-jakarta text-7xl text-white">Categories of partners</h3> <DownArrowYellow />
            </div>

            <div className="flex justify-between">
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFDFEB] px-[31px] py-[28px] text-base">
                <p className="text-center">Gym & Spas’</p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF3ED] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Nutrition
                  <br />
                  Experts
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Health
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#DAEFE3] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Fitness
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex w-[195px] items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base">
                <p className="text-center">
                  Health
                  <br />
                  Coach
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "linear-gradient(to bottom, black 0%, black 35%, white 35%, white 100%)" }}>
          <div className="mx-auto flex w-11/12 justify-center py-20 pt-6 2xl:max-w-[1440px]">
            <img src="src/assets/svg/oriz-partners.svg" alt="oriz partners view" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto 2xl:max-w-[1440px]">
          <div className="flex items-end justify-between">
            <div className="ml-[15%]">
              <h3 className="font-duplicate-sans text-[65px] text-[#BCC1C8]">Join the network</h3>
              <p className="max-w-[518px] font-jakarta text-[24px]">
                We help you build a healthy lifestyle and reward you with blockchain rewards and other incentives.{" "}
              </p>
            </div>

            <div className="mr-4 flex gap-x-6">
              <button className="rounded-xl bg-[#252525] px-9 py-5 text-base text-white">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="rounded-xl bg-[#F0F0F0] px-9 text-base text-black">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-56 pt-52" style={{ background: "linear-gradient(to bottom, white 0%, white 45%, #0C513F 45%, #0C513F 100%)" }}>
        <div className="mx-auto grid w-11/12 grid-cols-3 items-center justify-items-center 2xl:max-w-[1440px]">
          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Basic Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$19.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Access to basic features and functionalities of the ORIZ platform
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Personalised health and wellness recommendations based on user data
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Integration with fitness trackers and wearables for activity tracking
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Basic access to blockchain rewards and incentives Access to gym once a week
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">5% Discount on all MarketPlace Products</li>
              <li>Health and wellness resources, educational materials, and online tools</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>

          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Premium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$29.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">All features included in the Basic Plan</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Advanced data analytics and insights for deeper understanding of personal health trends
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Enhanced integration with healthcare providers and access to telemedicine services
              </li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Premium access to blockchain rewards and incentives</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">
                Exclusive discounts and offers from partner wellness brands (Create 2 wellness service) Gym 2 times weekly.
              </li>
              <li>10% Discount on all MarketPlace Products.</li>
              <li>Health and wellness resources, educational materials, and online tools</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>

          <div className="relative w-fit rounded-[25px] border-[4px] border-black bg-white px-[50px] pb-[54px] pt-[58px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Platnium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$39.99</h4>

            <ul className="max-w-[278px] font-jakarta text-[13px]">
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">All features included in the Premium Plan</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Insurance cover basic ( Designed by Team )</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Gym 3 times weekly</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">Discounted costs on Spa sessions</li>
              <li className="mb-3 border-b-[0.21px] border-black pb-[10px]">15% Discount on all MarketPlace Products.</li>
              <li>Exclusive discounts and offers from partner wellness brands (Create 4 wellness service)</li>
              <li>Health and wellness resources, educational materials, and online tools.</li>
            </ul>

            <button className="mt-9 h-[59px] w-full rounded-3xl bg-black font-duplicate-sans text-[25px] font-semibold text-white">
              Subscribe — <span className="font-duplicate-sans-regular text-base">Monthly</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto w-11/12 2xl:max-w-[1440px]">
          <div className="relative flex justify-between pb-20 pt-28">
            <div>
              <FooterLogo />
              <p className="my-6 max-w-[455px] font-jakarta text-xl text-white">
                Revolutionising health and wellness with cutting-edge technology
              </p>
              <div className="flex gap-x-5">
                <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
                  <Playstore />
                  Google Play
                </button>

                <button className="flex items-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px]">
                  <AppStoreBlk /> App Store
                </button>
              </div>
            </div>

            <div className="absolute -right-[9%] -top-52">
              <FooterAppView />
            </div>
          </div>

          <div className="flex justify-between border-y border-[#2D2D2D] py-20">
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

          <div className="flex justify-between py-14">
            <p className="text-white">© Oris technologies Nigeria Limited</p>

            <ul className="flex gap-x-4">
              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <Linkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <Telegram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
