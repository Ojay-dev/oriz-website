import {
  Bloomberg,
  CrunchBase,
  RightArrowWhite,
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
  GraphIcon,
  MultinationalPlain,
  Dumbell,
  Spa,
  Nutrition,
  HealthCoaching,
  Organic,
  Supplements,
  QuickOnboarding,
  FitnessApparel,
  Technology,
  Partnership,
  Reward,
  Community,
  Coinxy,
  Bittorent,
  Bitmax,
  Brand,
  CurrencyWave,
  Target,
  MordernCryto,
  Classic,
  Upshot,
  GatewayFrame,
  DeclineChart,
  FastBolt,
  SecureEncryption,
  PrivateData,
  UptimeGuarantee,
  Support,
  RegisterDashboard,
  EarnGrowth,
  PurchaseProfile,
} from "@/assets/svg";

import WebFrame from "@/assets/image/WebFrame.webp";
import Iphone from "@/assets/image/iPhones.webp";

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
    <DefaultLayout theme="dark">
      <section className="bg-black">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center pt-16 text-white 2xl:max-w-[1440px]">
          <button className="mb-[33px] flex w-fit items-center gap-x-2 rounded-[333px] border border-[#6C6C6C] bg-[#2A2A2A] px-4 py-3">
            <span className="bg rounded-[166px] bg-green-100 px-[13px] py-[5px] text-xs uppercase lg:text-sm">New</span>{" "}
            <span className="text-xs lg:text-sm">We’re live across all African Countries</span>
            <img src={RightArrowWhite} alt="forward arrow icon" />
          </button>

          <h2 className="max-w-[800px] text-center font-duplicate-sans text-5xl capitalize leading-tight lg:text-[66px]">
            Invest in your <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">well-being.</span>
            <br /> Invest in ORIZ tokens today!
          </h2>
          <p className="my-8 max-w-[600px] text-center font-jakarta text-sm leading-normal md:text-base">
            With ORIZ tokens, the possibilities for enhancing your health and well-being are limitless. Join the wellness revolution today
            and unlock a world of wellness opportunities at your fingertips.
          </p>

          <div className="mt-10 grid w-full gap-6 md:w-fit md:grid-cols-2">
            <button className="rounded-[100px] bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] px-9 py-5 text-base lg:min-w-[282px]">
              Get Started
            </button>

            <button className="relative h-16 min-w-[282px] rounded-[100px] bg-black text-base text-white lg:h-[unset]">
              <div className="absolute inset-0 rounded-[100px] border border-transparent bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[100px] bg-black">Learn More</div>
              </div>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-20 w-11/12 pb-12 2xl:max-w-[1440px]">
          <h4 className="mb-7 text-pitch-white">Featured on</h4>
          <div className="flex flex-wrap justify-between gap-[42px]">
            <img src={Yahoo} alt="Yahoo logo" className="w-[40%] lg:w-[unset]" />
            <img src={Bloomberg} alt="Bloomberg logo" className="w-[40%] lg:w-[unset]" />
            <img src={Techcrunch} alt="Techcrunch logo" className="w-[40%] lg:w-[unset]" />
            <img src={CrunchBase} alt="CrunchBase logo" className="w-[40%] lg:w-[unset]" />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center pt-36 text-white 2xl:max-w-[1440px]">
          <h3 className="max-w-[800px] text-center font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
            Build your crypto{" "}
            <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">Portfolio</span>
          </h3>

          <p className="my-8 mt-4 text-center font-jakarta text-xl leading-normal text-[#C6C2C2] md:max-w-[637px] lg:text-2xl">
            With every transaction, you're not just investing in your own health – you're contributing to a healthier world.
          </p>
        </div>

        <div className="mx-auto mt-16 grid w-11/12 gap-10 pb-12 md:mt-20 md:grid-cols-2 lg:w-9/12 xl:grid-cols-3 2xl:max-w-[1440px]">
          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Exclusive Wellness Products and Services</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              With ORIZ tokens, gain access to a network of wellness centers worldwide. Whether you're traveling for business or leisure,
              enjoy exclusive discounts on gym memberships, spa treatments.
            </p>
          </div>

          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Wellness Games and Challenges</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              Engage in fun and interactive wellness games and challenges designed to motivate and inspire healthy habits. Earn ORIZ rewards
              for completing challenges, reaching fitness milestones, and participating in community events
            </p>
          </div>

          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Staking Rewards for Health Habits</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              Stake your ORIZ tokens to commit to healthy habits and earn rewards for staying on track. Whether it's hitting your daily step
              goal, practicing mindfulness, or maintaining a balanced diet, earn staking rewards.
            </p>
          </div>

          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Exclusive Wellness Products and Services</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              Discover a curated selection of wellness products and services available for purchase using ORIZ tokens. From organic
              supplements and fitness equipment to virtual wellness classes and meditation apps.
            </p>
          </div>

          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Wellness Retreats and Experiences</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              Use ORIZ tokens to book immersive wellness retreats and experiences in idyllic locations around the globe. Retreat into
              nature, rejuvenate your body and mind with holistic therapies, and reconnect with yourself.
            </p>
          </div>

          <div className="rounded-3xl border border-[#303030] bg-[#15151582] p-5 pb-10 text-white">
            <img src={GraphIcon} alt="graph icon" />
            <h3 className="my-6 font-duplicate-sans text-[28px] leading-tight">Personalized Health and Wellness Plans</h3>
            <p className="text-base font-light text-[#C6C2C2]">
              Leverage ORIZ tokens to unlock personalized health and wellness plans tailored to your unique needs and goals. Access virtual
              consultations with wellness experts, receive customized nutrition and exercise plans.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-11/12 justify-center gap-6 pb-36 text-white md:w-fit md:grid-cols-2 2xl:max-w-[1440px]">
          <button className="relative h-16 min-w-[282px] rounded-[100px] bg-black px-9 py-5 text-base text-white">
            <div className="absolute inset-0 rounded-[100px] border border-transparent bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[100px] bg-black">Download App</div>
            </div>
          </button>

          <button className="flex min-w-[282px] items-center justify-center gap-2 rounded-[100px] bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] px-9 py-5 text-base">
            Join Our Community <img src={RightArrowWhite} alt="forward arrow icon" />
          </button>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto mb-40 grid w-11/12 items-center gap-x-[10%] rounded-[61px] border border-[#303030] bg-[#15151582] px-6 py-16 text-white lg:grid-cols-[1.5fr_1fr] lg:px-20 2xl:max-w-[1440px]">
          <div>
            <h3 className="font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
              Powered by{" "}
              <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">blockchain</span>
              <br />
              and <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">AI</span>
            </h3>

            <p className="my-8 mt-4 max-w-[637px] font-jakarta text-lg leading-normal text-[#C6C2C2]">
              With every transaction, you're not just investing in your own health – you're contributing to a healthier world.
            </p>

            <button className="flex min-w-[282px] items-center justify-center gap-2 rounded-[100px] bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] px-9 py-5 text-base">
              About Us
            </button>
          </div>

          <div className="mt-[50px] flex justify-center lg:justify-start">
            <img src={MultinationalPlain} alt="" />
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

      <section className="bg-black">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center pt-36 text-white 2xl:max-w-[1440px]">
          <h3 className="max-w-[800px] text-center font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">Oriz-Token</span>
          </h3>

          <p className="my-8 mt-4 text-center font-jakarta text-xl leading-normal text-[#C6C2C2] md:max-w-[700px] lg:text-2xl">
            With every transaction, you're not just investing in your own health – you're contributing to a healthier world.
          </p>
        </div>

        <div className="mx-auto grid w-9/12 gap-8 pb-12 pt-16 md:grid-cols-[1.5fr_2fr_1.5fr] md:pt-20 lg:w-9/12 2xl:max-w-[1440px]">
          <div className="grid gap-y-8">
            <div className="rounded-3xl border border-[#303030] bg-[#15151582] px-5 py-12 text-white">
              <img src={Technology} alt="graph icon" />
              <h3 className="my-3 font-duplicate-sans text-xl leading-tight">Innovative Technology</h3>
              <p className="text-sm font-light text-[#C6C2C2]">
                Powered by blockchain and AI, ORIZ offers unparalleled security, transparency, and personalization.
              </p>
            </div>

            <div className="rounded-3xl border border-[#303030] bg-[#15151582] px-5 py-12 text-white">
              <img src={Partnership} alt="graph icon" />
              <h3 className="my-3 font-duplicate-sans text-xl leading-tight">Exclusive Partnerships</h3>
              <p className="text-sm font-light text-[#C6C2C2]">
                Benefit from partnerships with leading gyms, spas, and wellness brands, accessing premium services at discounted rates.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl border border-[#303030] bg-[#15151582] px-5 pt-7 text-white">
            <h3 className="my-3 font-duplicate-sans text-xl leading-tight">Available on iOS & Android App</h3>

            <img src={Iphone} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 transform" />
          </div>

          <div className="grid gap-y-8">
            <div className="rounded-3xl border border-[#303030] bg-[#15151582] px-5 py-12 text-white">
              <img src={Community} alt="graph icon" />
              <h3 className="my-3 font-duplicate-sans text-xl leading-tight">Community-Centric Approach</h3>
              <p className="text-sm font-light text-[#C6C2C2]">
                Join a vibrant community of wellness enthusiasts and experts, supporting each other on the journey to better health.
              </p>
            </div>

            <div className="rounded-3xl border border-[#303030] bg-[#15151582] px-5 py-12 text-white">
              <img src={Reward} alt="graph icon" />
              <h3 className="my-3 font-duplicate-sans text-xl leading-tight">Tangible Rewards</h3>
              <p className="text-sm font-light text-[#C6C2C2]">
                for adopting healthy habits and achieving wellness goals, turning your journey to wellness into a rewarding experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-11/12 grid-cols-2 flex-wrap items-center justify-between justify-items-center gap-8 gap-y-10 pb-36 pt-16 lg:grid-cols-5 2xl:max-w-[1440px]">
          <img src={Coinxy} alt="logo icon" />
          <img src={Bittorent} alt="logo icon" />
          <img src={Bitmax} alt="logo icon" />
          <img src={Brand} alt="logo icon" />
          <img src={CurrencyWave} alt="logo icon" />
          <img src={Bitmax} alt="logo icon" />
          <img src={Target} alt="logo icon" />
          <img src={MordernCryto} alt="logo icon" />
          <img src={Classic} alt="logo icon" />
          <img src={Upshot} alt="logo icon" />
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid w-11/12 items-center justify-items-center gap-x-2 gap-y-5 pt-16 lg:grid-cols-2 lg:pb-36 2xl:max-w-[1440px]">
          <img src={GatewayFrame} alt="" />

          <div className="mx-auto flex w-11/12 flex-col pt-36 text-white 2xl:max-w-[1440px]">
            <h3 className="max-w-[800px] font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">Gateway</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">
                of Empowerment
              </span>
            </h3>

            <p className="my-8 mt-4 font-jakarta text-lg leading-normal text-[#C6C2C2] md:max-w-[500px]">
              With every transaction, you're not just investing in your own health – you're contributing to a healthier world.
            </p>

            <ul className="mt-10 grid gap-y-4 text-lg">
              <li className="flex items-center gap-x-4">
                <img src={DeclineChart} alt="icon" /> Lowest fees in market
              </li>
              <li className="flex items-center gap-x-4">
                <img src={FastBolt} alt="icon" /> Fast and secure transactions
              </li>
              <li className="flex items-center gap-x-4">
                <img src={SecureEncryption} alt="icon" /> 256-bit secure encryption
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mx-auto flex w-11/12 flex-col items-center gap-12 pt-16 lg:grid lg:grid-cols-2 lg:pb-36 2xl:max-w-[1440px]">
          <div className="mx-auto flex w-11/12 flex-col pt-36 text-white 2xl:max-w-[1440px]">
            <h3 className="max-w-[800px] font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
              Earn{" "}
              <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">
                Daily Rewards
              </span>{" "}
              on your Idle Tokens
            </h3>

            <p className="my-8 mt-4 font-jakarta text-lg leading-normal text-[#C6C2C2] md:max-w-[500px]">
              Your token produces rewards while you live healthy and grow in both financial and healthy wellness.
            </p>

            <ul className="mt-10 grid gap-y-4 text-lg">
              <li className="flex items-center gap-x-4">
                <img src={PrivateData} alt="icon" /> 100% Private data
              </li>
              <li className="flex items-center gap-x-4">
                <img src={UptimeGuarantee} alt="icon" /> 99.99% Uptime guarantee
              </li>
              <li className="flex items-center gap-x-4">
                <img src={Support} alt="icon" /> 24/7 Dedicated support
              </li>
            </ul>
          </div>

          <div className="">
            <img src={WebFrame} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-center pt-36 text-white 2xl:max-w-[1440px]">
          <h3 className="max-w-[800px] text-center font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
            How to{" "}
            <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">Participate</span>
          </h3>
        </div>

        <div className="mx-auto grid w-11/12 gap-8 pb-40 pt-16 md:w-9/12 md:grid-cols-3 md:pt-20 lg:w-9/12 2xl:max-w-[1440px]">
          <div className="rounded-3xl border border-[#303030] bg-[#15151582] px-8 py-12 text-white md:px-10">
            <h3 className="my-3 font-duplicate-sans text-3xl leading-tight">Register for the token sale on our platform</h3>
            <p className="mb-3 text-lg font-light text-[#C6C2C2]">Easy and fast registration to get you started on earning</p>
            <a href="#" className="text-lg text-[#FF884D]">
              Read More
            </a>

            <div className="my-[60px] border-b border-b-[#E0E0E0]" />

            <img src={RegisterDashboard} alt="dashboard illustration" />
          </div>

          <div className="5 relative rounded-3xl border border-[#303030] bg-[#15151582] px-8 pt-7 text-white md:px-10">
            <img src={PurchaseProfile} alt="dashboard illustration" />

            <div className="my-[60px] border-b border-b-[#E0E0E0]" />

            <h3 className="my-3 font-duplicate-sans text-3xl leading-tight">Available on iOS & Android App</h3>
            <p className="mb-3 text-lg font-light text-[#C6C2C2]">Purchase ORIZ tokens using your preferred payment method.</p>
            <a href="#" className="text-lg text-[#FF884D]">
              Read More
            </a>
          </div>

          <div className="5 rounded-3xl border border-[#303030] bg-[#15151582] px-8 py-12 text-white md:px-10">
            <h3 className="my-3 font-duplicate-sans text-3xl leading-tight">Earn and Grow Wealth</h3>
            <p className="mb-3 text-lg font-light text-[#C6C2C2]">Start unlocking a world of health and wellness benefits</p>
            <a href="#" className="text-lg text-[#FF884D]">
              Read More
            </a>

            <div className="my-[60px] border-b border-b-[#E0E0E0]" />

            <img src={EarnGrowth} alt="dashboard illustration" />
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex w-11/12 justify-center pt-36 text-white 2xl:max-w-[1440px]">
          <h3 className="max-w-[800px] text-center font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">
            Enhance your Health and Wellbeing while{" "}
            <span className="bg-gradient-to-r from-[#218068] via-[#FFC501] to-[#ED5E3B] bg-clip-text text-transparent">
              Growing your Wealth
            </span>
          </h3>
        </div>

        <div className="overflow-hidden pb-10 pt-4">
          <div className="flex gap-x-5 py-4" ref={phoneCarouselRef}>
            {carouselGroup.map((feature, index) => (
              <img src={feature} alt={`Image carousel ${index}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black pt-10 lg:pb-40 lg:pt-32">
        <div className="mx-auto grid w-11/12 items-center gap-x-[10%] rounded-[61px] border border-[#303030] bg-[#15151582] px-6 py-16 text-white lg:grid-cols-[1.5fr_1fr] lg:px-20 2xl:max-w-[1440px]">
          <div>
            <h3 className="font-duplicate-sans text-4xl capitalize leading-tight lg:text-5xl">Join the Movement:</h3>

            <p className="my-8 mt-4 max-w-[637px] font-jakarta text-lg leading-normal text-[#C6C2C2]">
              Don't miss your chance to be part of the future of wellness. Join the ORIZ token sale today and take the first step towards a
              healthier, happier you.
            </p>

            <div className="mt-7 lg:w-[80%]">
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-[50px] border border-white bg-[#1d1c1c4d] px-[28px] py-[18px]"
                />

                <input type="email" placeholder="Email" className="rounded-[50px] border border-white bg-[#1d1c1c4d] px-[28px] py-[18px]" />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-[100px] bg-[linear-gradient(120deg,_#218068,_#FFC501,_#ED5E3B)] px-9 py-5 text-base">
                Join Our Community <img src={RightArrowWhite} alt="forward arrow icon" />
              </button>
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
