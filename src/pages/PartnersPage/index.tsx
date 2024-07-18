import {
  AppStoreBlk,
  AppView,
  BackArrow,
  Dumbell,
  FitnessApparel,
  HealthCoaching,
  Multinational,
  Nutrition,
  Organic,
  Playstore,
  PromoTag,
  QuickOnboarding,
  RightArrow,
  RightArrowWhite,
  Spa,
  SquiglyLine,
  Supplements,
  CarouselGroup1,
  CarouselGroup2,
  CarouselGroup3,
  CarouselGroup4,
  CarouselGroup5,
  CarouselGroup6,
  CarouselGroup7,
  CarouselGroup8,
  CarouselGroup9,
  CarouselGroup10,
  CarouselGroup11,
  CarouselGroup12,
  CarouselGroup13,
  CarouselGroup14,
  YahooDark,
  BloombergDark,
  TechcrunchDark,
  CrunchBaseDark,
  PlayIcon,
  MultinationalPlain,
} from "@/assets/svg";

import VideoImage from "@/assets/image/oseme.png";
import VideoImage2 from "@/assets/image/VidImg.png";
import VideoImage3 from "@/assets/image/VidImg2.png";
import WebFrame from "@/assets/image/WebFrame.webp";
import OuterFrame from "@/assets/image/outer-frame.webp";
import OuterFrame2 from "@/assets/image/outer-frame2.webp";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import DefaultLayout from "@/layout/DefaultLayout";

const scrollablesFeatures = [
  { title: "Fitness Classes & Programs", image: Dumbell },
  { title: "Spa & Wellness Services", image: Spa },
  { title: "Nutrition & Meal Plans", image: Nutrition },
  { title: "Health Coaching & Consultations", image: HealthCoaching },
  { title: "Natural & Organic Products", image: Organic },
  { title: "Wellness Products & Supplement", image: Supplements },
  { title: "Quick and easy onboarding", image: QuickOnboarding },
  { title: "Fitness Apparel & Accessories", image: FitnessApparel },
  { title: "Fitness Classes & Programs", image: Dumbell },
  { title: "Spa & Wellness Services", image: Spa },
  { title: "Nutrition & Meal Plans", image: Nutrition },
  { title: "Health Coaching & Consultations", image: HealthCoaching },
  { title: "Natural & Organic Products", image: Organic },
  { title: "Wellness Products & Supplement", image: Supplements },
  { title: "Quick and easy onboarding", image: QuickOnboarding },
  { title: "Fitness Apparel & Accessories", image: FitnessApparel },
];

const carouselGroup = [
  CarouselGroup1,
  CarouselGroup2,
  CarouselGroup3,
  CarouselGroup4,
  CarouselGroup5,
  CarouselGroup6,
  CarouselGroup7,
  CarouselGroup8,
  CarouselGroup9,
  CarouselGroup10,
  CarouselGroup11,
  CarouselGroup12,
  CarouselGroup13,
  CarouselGroup14,
  CarouselGroup1,
  CarouselGroup2,
  CarouselGroup3,
  CarouselGroup4,
  CarouselGroup5,
  CarouselGroup6,
  CarouselGroup7,
  CarouselGroup8,
  CarouselGroup9,
  CarouselGroup10,
  CarouselGroup11,
  CarouselGroup12,
  CarouselGroup13,
  CarouselGroup14,
];

const IndexPage = () => {
  const marqueeRef = useRef(null);
  const phoneCarouselRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef?.current;
    // @ts-ignore
    const marqueeWidth = marquee?.scrollWidth;

    gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth),
      },
    });
  }, []);

  useEffect(() => {
    const phoneCarousel = phoneCarouselRef?.current;
    // @ts-ignore
    const marqueeWidth = phoneCarousel?.scrollWidth;

    gsap.to(phoneCarousel, {
      x: -marqueeWidth,
      duration: 100,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth),
      },
    });
  }, []);

  return (
    <DefaultLayout theme="light">
      <section className="overflow-hidden bg-[#FFF8E4]">
        <div className="mx-auto mt-16 grid w-11/12 text-white lg:hidden 2xl:max-w-[1440px]">
          <div className="mx-auto w-11/12 2xl:max-w-[1440px]">
            <button className="mb-[33px] flex w-fit items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#F0F0F0] px-4 py-3">
              <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px] text-xs uppercase lg:text-sm">New</span>{" "}
              <span className="text-xs text-black lg:text-sm">We’re live across all African Countries</span>
              <img src={RightArrowWhite} alt="forward arrow icon" />
            </button>
          </div>

          {/* <img src={ORIZLady} alt="A smilling lady" className="mb-10 w-full rounded-[50px]" /> */}

          <div className="overflow-hidden rounded-[60px]">
            <iframe
              width="100%"
              height="680"
              src="https://www.youtube.com/embed/f2Uw0O2iFJ0"
              title="ORIZ INTERVIEW WITH DAVE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mx-auto mt-7 w-11/12 2xl:max-w-[1440px]">
            <h2 className="font-duplicate-sans text-[35px] leading-tight text-[#050505] lg:text-[66px]">
              The Best way to maintain a Healthy{" "}
              <span className="relative">
                lIfestyle
                <span className="absolute -bottom-3 left-0 hidden lg:block">
                  <img src={SquiglyLine} alt="Squigly line" />
                </span>
              </span>{" "}
            </h2>
            <p className="my-8 font-jakarta text-base leading-10 text-[#050505]">
              ORIZ is a solution for your health and wellness journey, providing you with personalized tools and benefits to help you lead a
              healthier life.
            </p>

            <div className="flex flex-col gap-x-6 gap-y-3">
              <button className="rounded-xl bg-green-100 px-9 py-5 text-base">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="flex h-[50px] items-center justify-center rounded-xl bg-[#252525] px-9 text-base text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 hidden w-11/12 grid-cols-2 items-center gap-x-10 text-white lg:grid 2xl:max-w-[1440px]">
          <div>
            <button className="mb-[33px] flex items-center gap-x-2 rounded-[333px] border border-[#218068] bg-[#218068] px-4 py-3">
              <span className="bg rounded-[166px] bg-[#FFC501] px-[13px] py-[5px] uppercase text-black">New</span>{" "}
              <span className="text-white">See what’s new!</span>
              <img src={RightArrowWhite} alt="forward arrow icon" />
            </button>

            <h2 className="max-w-[600px] font-duplicate-sans text-[66px] leading-tight text-[#050505]">
              Revolutionising Wellness through{" "}
              <span className="relative">
                Partnership
                <span className="absolute -bottom-3 left-0">
                  <img src={SquiglyLine} alt="Squigly line" />
                </span>
              </span>
            </h2>
            <p className="my-8 max-w-[400px] font-jakarta text-base leading-7 text-[#050505]">
              Be a part of an ecosystem that covers the kind of customers that you seek.
            </p>

            <div className="flex flex-col gap-x-6 gap-y-4 lg:mr-4 lg:flex-row">
              <button className="rounded-xl bg-[#218068] px-9 py-5 text-base text-white">
                <span className="font-medium">Get Started</span> — For Free!{" "}
              </button>

              <button className="ck flex items-center justify-center rounded-xl bg-black px-9 text-base text-white">Learn More</button>
            </div>
          </div>

          {/* <img src={ORIZLady} alt="A smilling lady" className="ml-auto rounded-[50px]" /> */}

          <div className="overflow-hidden rounded-[60px]">
            <iframe
              width="100%"
              height="680"
              src="https://www.youtube.com/embed/f2Uw0O2iFJ0"
              title="ORIZ INTERVIEW WITH DAVE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mx-auto mt-20 w-11/12 pb-12 2xl:max-w-[1440px]">
          <h4 className="mb-7 text-black">Featured on</h4>
          <div className="flex flex-wrap justify-between gap-[42px]">
            <img src={YahooDark} alt="Yahoo logo" className="w-[40%] lg:w-[unset]" />
            <img src={BloombergDark} alt="Bloomberg logo" className="w-[40%] lg:w-[unset]" />
            <img src={TechcrunchDark} alt="Techcrunch logo" className="w-[40%] lg:w-[unset]" />
            <img src={CrunchBaseDark} alt="CrunchBase logo" className="w-[40%] lg:w-[unset]" />
          </div>
        </div>

        <div className="bg-black">
          <div className="flex gap-x-5 py-4" ref={marqueeRef}>
            {scrollablesFeatures.map((feature, index) => (
              <div className="flex items-center gap-x-2 rounded-lg border border-[#ffffff26] bg-[#ffffff26] px-4 py-2.5" key={index}>
                <img src={feature.image} alt={feature.title} />
                <p className="truncate font-jakarta text-sm text-white">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto w-11/12 2xl:max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-y-5 lg:flex-row lg:items-end">
            <div>
              <h3 className="font-duplicate-sans text-[35px] lg:text-[65px]">Benefits of Choosing Oriz</h3>

              <p className="font-jakarta text-base leading-loose lg:max-w-[518px] lg:text-[20px]">
                Partner with OrizTech to unlock your business to the world, grow and be more visible to your users.
              </p>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-4 lg:mr-4 lg:flex-row">
              <button className="rounded-xl bg-[#218068] px-9 py-5 text-base text-white">
                <span className="font-medium">Get Started</span> — For Free!{" "}
              </button>
            </div>
          </div>

          <div className="relative mt-6 flex max-h-[750px] flex-col justify-between gap-x-8 overflow-hidden rounded-[49px] border-[4px] border-[#000000] bg-[#195D4C] px-8 py-20 md:px-12 lg:h-[650px] lg:max-h-[1000px] lg:flex-row">
            <div>
              <h3 className="font-duplicate-sans text-4xl leading-tight text-white lg:max-w-[452px] lg:text-[53px]">
                Generate extra revenue
              </h3>

              <p className="my-[33px] font-jakarta text-xl text-white lg:max-w-[600px]">
                Leverage our platform to create additional revenue opportunities for your business.
              </p>

              <button className="mt-16 flex items-center gap-x-1 rounded-[13px] bg-black px-9 py-[21px] text-white">
                Get Started — For Free! <img src={RightArrow} alt="forward arrow icon" />
              </button>
            </div>

            <div className="absolute -bottom-56 right-0 w-full xl:w-[unset]">
              <img src={WebFrame} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-11/12 2xl:max-w-[1440px] 2xl:overflow-hidden">
        <div className="mt-20">
          <div className="flex flex-col items-center">
            <h3 className="font-duplicate-sans text-5xl text-[#BCC1C8] lg:text-7xl">Join the network</h3>
            <p className="textxl max-w-[800px] py-3 text-center font-light leading-relaxed lg:text-3xl">
              We help you build a healthy lifestyle and reward you with blockchain rewards and other incentives.
            </p>
          </div>
        </div>

        <div className="mt-5 flex h-[674px] gap-x-12">
          <div className="relative max-w-[633px] overflow-hidden rounded-[20px]">
            <img src={VideoImage} alt="" className="h-full w-full object-cover" />

            <button className="absolute bottom-1/2 left-1/2 flex h-[118px] w-[118px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-[#d9d9d924] backdrop-blur-md backdrop-filter">
              <img src={PlayIcon} alt="play icon" />
            </button>

            <div className="absolute bottom-10 left-5 md:left-10">
              <span className="font-jakarta text-[45px] font-extrabold text-white">Oseme Pearl</span>
              <p className="text-[25px] text-white">CEO The White Pearl</p>
            </div>
          </div>

          <div className="relative hidden max-w-[305px] overflow-hidden rounded-[20px] md:block">
            <img src={VideoImage2} alt="" className="h-full w-full object-cover" />

            {/* <button className="absolute bottom-1/2 left-1/2 flex h-[118px] w-[118px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-[#d9d9d924] backdrop-blur-md backdrop-filter">
              <img src={PlayIcon} alt="play icon" />
            </button>

            <div className="absolute bottom-10 left-10">
              <span className="font-jakarta text-[45px] font-extrabold text-white">Oseme Pearl</span>
              <p className="text-[25px] text-white">CEO The White Pearl</p>
            </div> */}
          </div>

          <div className="relative hidden max-w-[305px] overflow-hidden rounded-[20px] lg:block">
            <img src={VideoImage3} alt="" className="h-full w-full object-cover" />

            {/* <button className="absolute bottom-1/2 left-1/2 flex h-[118px] w-[118px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-[#d9d9d924] backdrop-blur-md backdrop-filter">
              <img src={PlayIcon} alt="play icon" />
            </button>

            <div className="absolute bottom-10 left-10">
              <span className="font-jakarta text-[45px] font-extrabold text-white">Oseme Pearl</span>
              <p className="text-[25px] text-white">CEO The White Pearl</p>
            </div> */}
          </div>
        </div>

        <div className="mt-10 grid items-center lg:mt-[unset] lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="max-w-[650px] font-duplicate-sans text-4xl md:text-7xl">We’re your partner for a healthier future. </h3>
            <p className="mt-10 max-w-[565px] font-jakarta text-xl">
              Prioritise proactive self-care, with our affordable, incentivised health and wellness Solutions
            </p>
          </div>

          <div className="mt-[50px] flex justify-center lg:justify-start">
            <img src={Multinational} alt="" />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between">
            <div className="hidden items-center gap-6 lg:flex">
              <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#218068] font-duplicate-sans text-3xl text-white">
                01
              </span>{" "}
              <h3 className="font-duplicate-sans text-[44px]">Fitness & Wellness Plans</h3>
            </div>

            <div className="ml-auto flex items-center gap-6 lg:ml-[unset]">
              <button className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-black">
                <img src={BackArrow} alt="back arrow icon" />
              </button>
              <button className="flex items-center gap-x-2.5 rounded-[49px] bg-[#F5F5F5] px-7 py-6 text-xl">
                Next <img src={RightArrow} alt="forward arrow icon" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex max-h-[700px] flex-col justify-between gap-x-8 overflow-hidden rounded-[49px] border-[4px] border-[#000000] bg-[#195D4C] px-6 py-20 lg:h-[650px] lg:max-h-[1000px] lg:flex-row lg:px-12">
            <div>
              <h3 className="font-duplicate-sans text-4xl leading-tight text-white lg:max-w-[452px] lg:text-[53px]">
                Access to health, Fitness & wellness options
              </h3>

              <p className="my-[33px] font-jakarta text-base text-white lg:max-w-[455px] lg:text-xl">
                Our  plans allows you to access various gyms, fitness programs, wellness centers, and healthy nutritional options,  all over
                the globe.
              </p>

              <div className="hidden items-center gap-x-6 xl:flex">
                <button className="flex items-center gap-x-1 rounded-[13px] bg-white px-9 py-[21px]">
                  Get Started — For Free! <img src={RightArrow} alt="forward arrow icon" />
                </button>

                <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                  Learn More
                </a>
              </div>

              <p className="mt-3 font-jakarta text-base text-white">*Up-to 15% exclusive discounts on any of our Services</p>
            </div>

            <div className="w-full xl:w-[unset]">
              <img src={AppView} alt="app store icon" />
            </div>
          </div>

          <div className="mt-3 flex gap-x-5">
            <div className="h-[31px] w-[31px] rounded-full border-[4px] border-black bg-[#195D4C]"></div>
            <div className="h-[31px] w-[31px] rounded-full bg-[#D9D9D9]"></div>
          </div>
        </div>
      </section>

      <section className="mt-8" style={{ background: "linear-gradient(to bottom, white 0%, white 35%, #195D4C 35%, #195D4C 100%)" }}>
        <div className="mx-auto grid w-11/12 gap-8 xl:grid-cols-2 2xl:max-w-[1440px]">
          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FFC501] px-6 pt-14 lg:px-10">
            <h3 className="mb-6 font-duplicate-sans text-4xl text-black md:max-w-[254px] lg:text-5xl">join our Community</h3>
            <p className="max-w-[420px] font-jakarta text-black">
              Connect with like-minded individuals, fitness enthusiasts, and experts in our thriving community.
            </p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base md:justify-start">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base md:justify-start">
                <img src={AppStoreBlk} alt="app store icon" /> Get on App Store
              </button>
            </div>

            <div className="mx-auto flex w-3/4 justify-center">
              <img src={OuterFrame2} alt="" />
            </div>
          </div>

          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#BD4355] px-6 pt-14 lg:px-10">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-4xl text-white lg:text-5xl">Tokenized Rewards</h3>
            <p className="max-w-[420px] font-jakarta text-white">
              Earn ORIZ tokens for healthy activities, redeemable for discounts and benefits.
            </p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base lg:justify-start">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-base lg:justify-start">
                <img src={AppStoreBlk} alt="app store icon" /> Get on App Store
              </button>
            </div>

            <div className="mx-auto flex w-3/4 justify-center">
              <img src={OuterFrame} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#195D4C] pb-40 pt-8">
        <div className="relative mx-auto mt-6 flex w-11/12 justify-between rounded-[49px] border-[4px] border-[#2B2B2B] bg-black px-8 py-20 md:px-12 2xl:max-w-[1440px]">
          <div>
            <h3 className="max-w-[452px] font-duplicate-sans text-4xl leading-tight text-white md:text-[53px]">Oriz MarketPlace</h3>

            <p className="my-[33px] max-w-[455px] font-jakarta text-base text-white md:text-xl">
               Take advantage of oriz marketplace to explore and purchase a variety of fitness-related products.
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <button className="flex items-center gap-x-2 rounded-[13px] bg-white px-6 py-[21px] md:px-9">
                Get Started — For Free! <img src={RightArrow} alt="forward arrow icon" />
              </button>

              <a href="#" className="rounded-[13px] bg-[#f5f5f536] px-9 py-[21px] text-white">
                Learn More
              </a>
            </div>

            <div className="mt-8 flex">
              <img src={PromoTag} alt="Promo Tag icon" />
              <p className="max-w-[350px] font-jakarta text-base text-white">
                Up-to <span className="text-[#FFC501]">15% exclusive discounts</span> on healthcare services, gym memberships, wearables,
                and more!
              </p>
            </div>
          </div>

          <div className="absolute -bottom-80 lg:-right-32">
            <img src={WebFrame} alt="" />
          </div>
        </div>

        <div className="mx-auto mt-96 w-8/12 lg:mt-8 2xl:max-w-[1440px]">
          <h4 className="font-duplicate-sans text-4xl text-white lg:text-[50px]">Coming Soon on</h4>

          <div className="mt-4 flex flex-col gap-y-3 lg:mt-0 xl:flex-row xl:gap-x-5">
            <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
              <img src={Playstore} alt="Play store icon" />
              Google Play
            </button>

            <button className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-[18px] text-[13px] lg:justify-start">
              <img src={AppStoreBlk} alt="app store icon" /> App Store
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="overflow-hidden bg-[#195D4C] pb-10 pt-4">
          <div className="flex gap-x-5 py-4" ref={phoneCarouselRef}>
            {carouselGroup.map((feature, index) => (
              <img src={feature} alt={`Image carousel ${index}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-56 pt-44" style={{ background: "linear-gradient(to bottom, #195D4C 0%, #195D4C 45%, white 45%, white 100%)" }}>
        <div className="mx-auto grid w-11/12 items-center justify-items-center gap-y-20 xl:grid-cols-3 2xl:max-w-[1440px]">
          <div className="relative w-[90%] rounded-[25px] border-[4px] border-black bg-white px-9 pb-[54px] pt-[58px] lg:w-fit lg:px-[50px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Basic Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$19.99</h4>

            <ul className="font-jakarta text-[13px] lg:max-w-[278px]">
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

          <div className="relative w-[90%] rounded-[25px] border-[4px] border-black bg-white px-9 pb-[54px] pt-[58px] lg:w-fit lg:px-[50px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Premium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$29.99</h4>

            <ul className="font-jakarta text-[13px] lg:max-w-[278px]">
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

          <div className="relative w-[90%] rounded-[25px] border-[4px] border-black bg-white px-9 pb-[54px] pt-[58px] lg:w-fit lg:px-[50px]">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-[9px] border-[4px] bg-[#FFC501] px-4 py-1.5">
              Platnium Plan
            </span>
            <h4 className="font-duplicate-sans text-[83px] text-[#218068]">$39.99</h4>

            <ul className="font-jakarta text-[13px] lg:max-w-[278px]">
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

      <section className="mx-auto mt-10 w-11/12 2xl:max-w-[1440px] 2xl:overflow-hidden">
        <div className="mb-36 grid items-center gap-x-[10%] rounded-[61px] bg-[#151515] px-6 py-16 text-white lg:grid-cols-[1.5fr_1fr] lg:px-20">
          <div>
            <h3 className="max-w-[650px] font-duplicate-sans text-4xl md:text-7xl">We’re your partner for a healthier future. </h3>

            <div className="mt-7 lg:w-[80%]">
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-2xl border border-white bg-[#1d1c1c4d] px-[28px] py-[18px]"
                />

                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-2xl border border-white bg-[#1d1c1c4d] px-[28px] py-[18px]"
                />
              </div>

              <button className="w-full rounded-xl bg-white px-10 py-6 text-base text-black">Subscribe</button>
            </div>
          </div>

          <div className="mt-[50px] flex justify-center lg:justify-start">
            <img src={MultinationalPlain} alt="" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;
