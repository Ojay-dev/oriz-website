import {
  AppStore,
  Dumbell,
  FitnessApparel,
  HealthCoaching,
  Nutrition,
  Organic,
  Playstore,
  QuickOnboarding,
  Spa,
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

  const scrollContainerRef = useRef(null);

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // @ts-ignore
      const middlePosition = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
      // @ts-ignore
      scrollContainer.scrollTo({ left: middlePosition, behavior: "smooth" });
    }
  }, []);

  return (
    <DefaultLayout theme="light">
      <section className="overflow-hidden bg-[#FFF8E4]">
        <div className="mt-16 flex gap-x-[43px] overflow-x-auto" ref={scrollContainerRef}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="relative h-[320px] w-[350px] flex-shrink-0 rounded-[63px] bg-[#1A1A1A] lg:h-[640px] lg:w-[534px]" key={index}>
              <button className="absolute bottom-1/2 left-1/2 flex h-[88px] w-[88px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-[#d9d9d924] backdrop-blur-md backdrop-filter">
                <img src={PlayIcon} alt="play icon" />
              </button>
            </div>
          ))}
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

      <section className="mx-auto w-11/12 py-16 lg:py-28 2xl:max-w-[1440px]">
        <div className="flex flex-col items-center gap-y-8">
          <h3 className="max-w-6xl text-center font-duplicate-sans text-[35px] leading-tight lg:text-[65px]">
            We’re inspiring a global community to prioritise proactive self-care
          </h3>

          <p className="text-center font-jakarta text-base leading-loose lg:max-w-[846px] lg:text-[20px]">
            Oriz is a technology company on a mission to power health and wellness across Africa, using artificial intelligence and
            blockchain
          </p>

          <div className="relative h-[320px] w-full flex-shrink-0 rounded-[63px] bg-[#1A1A1A] lg:h-[640px] lg:w-4/5">
            <button className="absolute bottom-1/2 left-1/2 flex h-[88px] w-[88px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-[#d9d9d924] backdrop-blur-md backdrop-filter">
              <img src={PlayIcon} alt="play icon" />
            </button>

            <div className="absolute bottom-10 left-10 md:left-10">
              <span className="font-jakarta text-base font-extrabold text-white lg:text-[45px]">Dave Obada</span>
              <p className="text-sm text-white lg:text-[22px]">CEO, Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 lg:mt-10 2xl:overflow-hidden">
        <div className="mx-auto flex w-11/12 flex-col items-end justify-between gap-x-10 gap-y-5 lg:flex-row 2xl:max-w-[1440px]">
          <h3 className="font-duplicate-sans text-4xl leading-tight text-pitch-white lg:text-[66px] xl:max-w-[500px]">
            We are trusted by <span className="text-[#ED5E3B]">a community</span> of <br />
            <span className="text-black">1 Million+</span> Africans
          </h3>

          <div>
            <p className="max-w-[639px] text-[26px]">
              We help you build a healthy lifestyle using an incentivised reward called ORIZ tokens — redeemable for discounts and benefits.
            </p>

            <div className="mt-8 flex flex-col gap-x-5 gap-y-3 xl:flex-row">
              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <img src={Playstore} alt="Play store icon" />
                Get on Google Play
              </button>

              <button className="flex items-center gap-x-2 rounded-xl bg-black px-8 py-[18px] text-base text-white">
                <img src={AppStore} alt="app store icon" /> Get on App Store
              </button>
            </div>
          </div>
        </div>

        <div className="mb-40 mt-20 flex gap-x-[43px] overflow-x-auto px-[8%]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="h-[303px] w-[300px] flex-shrink-0 rounded-[63px] bg-[#BCC1C8] lg:h-[406px] lg:w-[400px]" key={index} />
          ))}
        </div>

        <div className="mx-auto mb-40 grid w-11/12 items-center gap-x-[10%] rounded-[61px] bg-[#151515] px-6 py-16 text-white lg:grid-cols-[1.5fr_1fr] lg:px-20 2xl:max-w-[1440px]">
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

      <section>
        <div className="overflow-hidden bg-[#0C513F] pb-10 pt-4">
          <div className="flex gap-x-5 py-4" ref={phoneCarouselRef}>
            {carouselGroup.map((feature, index) => (
              <img src={feature} alt={`Image carousel ${index}`} key={index} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;
