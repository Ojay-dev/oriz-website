import {
  Dumbell,
  FitnessApparel,
  HealthCoaching,
  Nutrition,
  Organic,
  QuickOnboarding,
  Spa,
  Supplements,
  YahooDark,
  BloombergDark,
  TechcrunchDark,
  CrunchBaseDark,
} from "@/assets/svg";
import StoryImage from "@/assets/image/stories.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import DefaultLayout from "@/layout/DefaultLayout";
import { Link } from "react-router-dom";
import StoryTag from "@/components/story-tag";

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

const IndexPage = () => {
  const marqueeRef = useRef(null);

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

  return (
    <DefaultLayout theme="light">
      <section className="overflow-hidden">
        <div className="mt-20 flex flex-col items-center gap-y-8">
          <h2 className="max-w-4xl text-center font-duplicate-sans text-[35px] leading-tight lg:text-[65px]">
            We’re inspiring a global community to prioritise proactive self-care
          </h2>

          <p className="text-center font-jakarta text-base leading-loose lg:max-w-[700px] lg:text-[20px]">
            Oriz is a technology company on a mission to power health and wellness across Africa, using artificial intelligence and
            blockchain
          </p>
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

      <section className="mt-10 2xl:overflow-hidden">
        <div className="mx-auto w-11/12 2xl:max-w-[1440px]">
          <h3 className="font-duplicate-sans text-[56px]">Lastest stories</h3>

          <Link to="/stories/123" className="mb-12 mt-6 grid items-center gap-8 border-b border-b-[#BCC1C8] pb-20 md:grid-cols-[1.5fr_1fr]">
            <img src={StoryImage} alt="" className="rounded-2xl" />

            <div>
              <StoryTag text="Health & Wellness" color="#BD4355" bgColor="#F5DADE" />

              <h5 className="mt-5 font-duplicate-sans text-5xl leading-none lg:text-[56px]">How AI can help you maintain your Health</h5>

              <p className="mt-8 text-xl font-extralight lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur. Ut dui ultricies turpis eu et tincidunt. Cursus placerat id viverra sit elit semper
                neque lorem. Tempus at semper rutrum tempor tortor tellus. Netus sit tellus at egestas urna purus vestibulum facilisis
                tristique. Cursus rhoncus risus aliquam adipiscing congue.
              </p>

              <div className="mt-4 flex items-center gap-x-2 text-base text-[#8A8F96]">
                <span>October 12</span> <div className="h-1 w-1 rounded-full bg-[#8A8F96]" />
                <span>10 min read</span>
              </div>
            </div>
          </Link>

          <div className="mb-24 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link to="/stories/123" className="grid items-center gap-8" key={index}>
                <img src={StoryImage} alt="" className="rounded-2xl" />

                <div>
                  <StoryTag text="Health & Wellness" color="#BD4355" bgColor="#F5DADE" />

                  <h5 className="mt-5 font-duplicate-sans text-[28px] leading-none">How AI can help you maintain your Health</h5>

                  <p className="mt-5 text-lg font-extralight">
                    Lorem ipsum dolor sit amet consectetur. Ut dui ultricies turpis eu et tincidunt. Cursus placerat id viverra sit elit
                    semper neque lorem. Tempus at semper rutrum tempor tortor tellus. Netus sit tellus at egestas urna purus vestibulum
                    facilisis tristique. Cursus rhoncus risus aliquam adipiscing congue.
                  </p>

                  <div className="mt-4 flex items-center gap-x-2 text-sm text-[#8A8F96]">
                    <span>October 12</span> <div className="h-1 w-1 rounded-full bg-[#8A8F96]" />
                    <span>10 min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-40 w-11/12 items-center rounded-[61px] bg-[#151515] px-6 py-16 text-white lg:px-20 2xl:max-w-[1440px]">
          <h3 className="text-center font-duplicate-sans text-4xl md:text-7xl">Would you like to receive stories in your inbox?</h3>
          <p className="mt-8 text-center">Enter your email to stay in the loop on the latest health, wellness, and fitness stories</p>

          <div className="mx-auto mt-14 lg:mt-20 lg:w-[70%]">
            <div className="mb-6 grid gap-4 md:grid-cols-[2fr_1fr]">
              <input type="email" placeholder="Email address" className="rounded-2xl bg-white px-[28px] py-[18px]" />
              <button className="w-full rounded-xl bg-[#0C513F] px-10 py-6 text-base text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;
