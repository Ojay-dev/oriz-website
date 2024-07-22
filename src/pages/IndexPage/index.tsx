import {
  AppStore,
  AppStoreBlk,
  BackArrow,
  Bloomberg,
  CrunchBase,
  DownArrowYellow,
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
  Techcrunch,
  Yahoo,
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
  OrizPartners,
} from "@/assets/svg";

import OrizLady2 from "@/assets/image/OrizLady2.webp";
import OrizBanner from "@/assets/image/oriz-banner.webp";
import OrizLadyMobile2 from "@/assets/image/OrizLadyMobile2.webp";
import AppView from "@/assets/image/app-view.webp";
import WebFrame from "@/assets/image/WebFrame.webp";
import OuterFrame from "@/assets/image/outer-frame.webp";
import OuterFrame2 from "@/assets/image/outer-frame2.webp";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import DefaultLayout from "@/layout/DefaultLayout";
import Accordion from "@/components/accordion-menu";

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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const phoneCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef?.current;

    const marqueeWidth = marquee?.scrollWidth ?? 0;

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
    const marqueeWidth = phoneCarousel?.scrollWidth ?? 0;

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
    <DefaultLayout theme="dark">
      <section className="overflow-hidden bg-black">
        <div className="mx-auto mt-16 grid w-11/12 text-white lg:hidden 2xl:max-w-[1440px]">
          <button className="mb-[33px] flex w-fit items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
            <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px] text-xs uppercase lg:text-sm">New</span>{" "}
            <span className="text-xs lg:text-sm">We’re live across all African Countries</span>
            <img src={RightArrowWhite} alt="forward arrow icon" />
          </button>

          {/* <img src={ORIZLady} alt="A smilling lady" className="mb-10 w-full rounded-[50px]" /> */}

          <div className="overflow-hidden rounded-[28px]">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/f2Uw0O2iFJ0"
              title="ORIZ INTERVIEW WITH DAVE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-7">
            <h2 className="font-duplicate-sans text-[35px] leading-none lg:text-[66px]">
              Personalised plans for your unique{" "}
              <span className="relative">
                wellness
                <span className="absolute -bottom-2.5 left-0 hidden lg:block">
                  <img src={SquiglyLine} alt="Squigly line" />
                </span>
              </span>{" "}
              Journey
            </h2>
            <p className="my-8 font-jakarta text-base leading-normal">
              ORIZ is a solution for your health and wellness journey, providing you with personalized tools and benefits to help you lead a
              healthier life.
            </p>

            <div className="flex flex-col gap-x-6 gap-y-3">
              <button className="flex h-[60px] items-center justify-center rounded-xl bg-green-100 px-9 text-base">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="flex h-[60px] items-center justify-center rounded-xl bg-[#252525] px-9 text-base text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 hidden w-11/12 grid-cols-2 items-center text-white lg:grid 2xl:max-w-[1440px]">
          <div>
            <button className="mb-[33px] flex items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
              <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px]">New</span>{" "}
              <span>We’re live across all African Countries</span>
              <img src={RightArrowWhite} alt="forward arrow icon" />
            </button>

            <h2 className="max-w-[600px] font-duplicate-sans text-[66px] leading-tight">
              Personalised plans for your unique{" "}
              <span className="relative">
                wellness
                <span className="absolute -bottom-2.5 left-0">
                  <img src={SquiglyLine} alt="Squigly line" />
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
          <h4 className="mb-7 text-pitch-white">Featured on</h4>
          <div className="flex flex-nowrap justify-between gap-[42px] overflow-x-auto">
            <img src={Yahoo} alt="Yahoo logo" className="w-[40%] lg:w-[unset]" />
            <img src={Bloomberg} alt="Bloomberg logo" className="w-[40%] lg:w-[unset]" />
            <img src={Techcrunch} alt="Techcrunch logo" className="w-[40%] lg:w-[unset]" />
            <img src={CrunchBase} alt="CrunchBase logo" className="w-[40%] lg:w-[unset]" />
          </div>
        </div>

        <div className="flex gap-x-5 py-4" ref={marqueeRef}>
          {scrollablesFeatures.map((feature, index) => (
            <div className="flex items-center gap-x-2 rounded-lg border border-[#ffffff26] bg-[#ffffff26] px-4 py-2.5" key={index}>
              <img src={feature.image} alt={feature.title} />
              <p className="truncate font-jakarta text-sm text-white">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 w-11/12 2xl:max-w-[1440px] 2xl:overflow-hidden">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="">
            <h3 className="font-duplicate-sans text-4xl leading-tight text-pitch-white lg:text-[66px] xl:max-w-[500px]">
              We are trusted by <span className="text-[#ED5E3B]">a community</span> of <br />
              <span className="text-black">1 Million+</span> Africans
            </h3>

            <p className="mt-8 text-xl leading-loose xl:max-w-[480px]">
              We help you build a healthy lifestyle using an incentivised reward called ORIZ tokens — redeemable for discounts and benefits.
            </p>

            <div className="mt-12 flex flex-col gap-x-5 gap-y-4 lg:flex-row">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-5 text-base text-white">
                <img src={AppStore} alt="app store icon" /> Get on App Store
              </button>
            </div>
          </div>

          <div className="mt-16 flex justify-center xl:-mr-[9%]">
            <img src={OrizLady2} alt="Oriz lady" className="hidden xl:block" />
            <img src={OrizLadyMobile2} alt="Oriz lady" className="w-full xl:hidden" />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-[9%] xl:flex-row">
          <img src={OrizBanner} className="-ml-[9%] xl:-mt-96" alt="Oriz banner" />

          <Accordion />
        </div>

        <div className="mt-20 grid items-center lg:grid-cols-[2fr_1fr]">
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

          <div className="mt-6 flex max-h-[750px] flex-col justify-between gap-x-8 overflow-hidden rounded-[49px] border-[4px] border-[#000000] bg-[#195D4C] px-8 py-20 md:px-12 lg:h-[650px] lg:max-h-[1000px] lg:flex-row">
            <div>
              <h3 className="font-duplicate-sans text-4xl leading-tight text-white lg:max-w-[452px] lg:text-[53px]">
                Access to health, Fitness & wellness options
              </h3>

              <p className="my-[33px] font-jakarta text-xl text-white lg:max-w-[455px]">
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

      <section className="mt-8" style={{ background: "linear-gradient(to bottom, white 0%, white 35%, black 35%, black 100%)" }}>
        <div className="mx-auto grid w-11/12 gap-8 xl:grid-cols-2 2xl:max-w-[1440px]">
          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FF884D] px-8 pt-14 lg:px-10">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-4xl text-white lg:text-5xl">Join our Community</h3>
            <p className="max-w-[420px] font-jakarta text-white">
              Connect with like-minded individuals, fitness enthusiasts, and experts in our thriving community.
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
              <img src={OuterFrame2} alt="" />
            </div>
          </div>

          <div className="h-[735px] overflow-hidden rounded-[50px] border-[5px] bg-[#FFF8E4] px-8 pt-14 lg:px-10">
            <h3 className="mb-6 max-w-[254px] font-duplicate-sans text-4xl lg:text-5xl">Tokenized Rewards</h3>
            <p className="max-w-[420px] font-jakarta">Earn ORIZ tokens for healthy activities, redeemable for discounts and benefits.</p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white lg:justify-start">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center justify-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white lg:justify-start">
                <img src={AppStore} alt="app store icon" /> Get on App Store
              </button>
            </div>

            <div className="mx-auto flex w-3/4 justify-center">
              <img src={OuterFrame} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black pb-40 pt-8">
        <div className="relative mx-auto mt-6 flex w-11/12 justify-between rounded-[49px] border-[4px] border-[#2B2B2B] bg-[#218168] px-8 py-20 md:px-12 2xl:max-w-[1440px]">
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
              <p className="max-w-[297px] font-jakarta text-base text-white">
                Up-to 15% exclusive discounts on healthcare services, gym memberships, wearables, and more!
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
        <div className="overflow-hidden bg-black pb-10 pt-4">
          <div className="flex gap-x-5 py-4" ref={phoneCarouselRef}>
            {carouselGroup.map((feature, index) => (
              <img src={feature} alt={`Image carousel ${index}`} key={index} />
            ))}
          </div>

          <div className="mx-auto mt-6 w-11/12 py-20 2xl:max-w-[1440px]">
            <div className="flex items-center justify-between gap-x-2">
              <h3 className="mb-14 font-jakarta text-[27px] text-white lg:text-7xl">Categories of partners</h3>
              <img src={DownArrowYellow} alt="down arrow icon" />
            </div>

            <div className="grid grid-cols-2 gap-5 sm:flex sm:flex-wrap lg:justify-between">
              <div className="flex items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFDFEB] px-[31px] py-[28px] text-base md:w-[195px]">
                <p className="text-center">Gym & Spas’</p>
              </div>
              <div className="flex items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF3ED] px-[31px] py-[28px] text-base md:w-[195px]">
                <p className="text-center">
                  Nutrition
                  <br />
                  Experts
                </p>
              </div>
              <div className="flex items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base md:w-[195px]">
                <p className="text-center">
                  Health
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#DAEFE3] px-[31px] py-[28px] text-base md:w-[195px]">
                <p className="text-center">
                  Fitness
                  <br />
                  Centres
                </p>
              </div>
              <div className="flex items-center justify-center rounded-2xl border-[3px] border-[#FFC501] bg-[#FFF8E4] px-[31px] py-[28px] text-base md:w-[195px]">
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
            <img src={OrizPartners} alt="oriz partners view" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-11/12 lg:w-full 2xl:max-w-[1440px]">
          <div className="flex flex-col justify-between gap-y-5 lg:flex-row lg:items-end">
            <div className="lg:ml-[15%]">
              <h3 className="font-duplicate-sans text-[35px] text-[#BCC1C8] lg:text-[65px]">Join the network</h3>
              <p className="font-jakarta text-base lg:max-w-[518px] lg:text-[24px]">
                We help you build a healthy lifestyle and reward you with blockchain rewards and other incentives.{" "}
              </p>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-4 lg:mr-4 lg:flex-row">
              <button className="rounded-xl bg-[#252525] px-9 py-5 text-base text-white">
                <span className="font-medium">Use Oriz AI</span> — For Free!{" "}
              </button>

              <button className="flex h-[50px] items-center justify-center rounded-xl bg-green-100 px-9 text-base text-white lg:bg-[#F0F0F0] lg:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28 pt-52" style={{ background: "linear-gradient(to bottom, white 0%, white 45%, #0C513F 45%, #0C513F 100%)" }}>
        <div className="mx-auto grid w-11/12 items-center justify-items-center gap-y-20 xl:grid-cols-3 2xl:max-w-[1440px]">
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
    </DefaultLayout>
  );
};

export default IndexPage;
