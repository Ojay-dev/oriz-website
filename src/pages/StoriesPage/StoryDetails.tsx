import StoryImage from "@/assets/image/stories.png";

import DefaultLayout from "@/layout/DefaultLayout";
import { Link } from "react-router-dom";
import StoryTag from "@/components/story-tag";

const IndexPage = () => {
  return (
    <DefaultLayout theme="light">
      <section className="mt-10 2xl:overflow-hidden">
        <div className="mx-auto w-11/12 lg:w-9/12 2xl:max-w-[1280px]">
          <h3 className="max-w-4xl font-duplicate-sans text-4xl leading-none lg:text-[56px]">
            Nutritionists take on the benefit of oranges and apple
          </h3>

          <div className="mt-4 flex items-center gap-x-2 text-base text-[#8A8F96]">
            <span>October 12</span> <div className="h-1 w-1 rounded-full bg-[#8A8F96]" />
            <span>10 min read</span>
          </div>

          <div className="mb-5 mt-6 grid items-center justify-center gap-8 pb-20">
            <img src={StoryImage} alt="" className="h-[441px] w-full rounded-2xl object-cover" />

            <p className="mt-4 text-base font-extralight lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur. Turpis aliquet commodo donec nunc dignissim magna felis. Metus nibh amet vestibulum
              consequat. Eget faucibus malesuada ultrices tempus ac a consequat sit ut. Amet consectetur lacinia magnis quis. Turpis
              consequat nunc et vitae nisl vel quam lacus. Odio dignissim quis tellus vitae ultricies. Orci a etiam tristique et. Diam
              facilisi lectus gravida dolor facilisi natoque. Vitae vivamus imperdiet viverra interdum nibh risus. Congue at risus quisque a
              aliquam vitae sit viverra laoreet. Orci nec et aliquet nulla mauris tristique in lacus. Tincidunt quis mi purus neque.
              Vestibulum facilisi mollis sed id vitae viverra eu blandit id. Nunc tortor pretium ut eu dolor. Sed in amet rutrum ridiculus
              tortor enim quis gravida. Varius pretium diam lacus nunc. Pharetra sapien adipiscing ac quam massa fermentum mattis dui porta.
              Non interdum est donec pellentesque aliquam. Volutpat amet varius lobortis arcu aliquam sit. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Turpis aliquet commodo donec nunc dignissim magna felis. Metus nibh amet vestibulum
              consequat. Eget faucibus malesuada ultrices tempus ac a consequat sit ut. Amet consectetur lacinia magnis quis. Turpis
              consequat nunc et vitae nisl vel quam lacus. Odio dignissim quis tellus vitae ultricies. Orci a etiam tristique et. Diam
              facilisi lectus gravida dolor facilisi natoque. Vitae vivamus imperdiet viverra interdum nibh risus. Congue at risus quisque a
              aliquam vitae sit viverra laoreet. Orci nec et aliquet nulla mauris tristique in lacus. Tincidunt quis mi purus neque.
              Vestibulum facilisi mollis sed id vitae viverra eu blandit id. Nunc tortor pretium ut eu dolor. Sed in amet rutrum ridiculus
              tortor enim quis gravida. Varius pretium diam lacus nunc. Pharetra sapien adipiscing ac quam massa fermentum mattis dui porta.
              Non interdum est donec pellentesque aliquam. Volutpat amet varius lobortis arcu aliquam sit.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Turpis aliquet commodo donec nunc dignissim magna felis. Metus nibh amet vestibulum
              consequat. Eget faucibus malesuada ultrices tempus ac a consequat sit ut. Amet consectetur lacinia magnis quis. Turpis
              consequat nunc et vitae nisl vel quam lacus. Odio dignissim quis tellus vitae ultricies. Orci a etiam tristique et. Diam
              facilisi lectus gravida dolor facilisi natoque. Vitae vivamus imperdiet viverra interdum nibh risus. Congue at risus quisque a
              aliquam vitae sit viverra laoreet. Orci nec et aliquet nulla mauris tristique in lacus. Tincidunt quis mi purus neque.
              Vestibulum facilisi mollis sed id vitae viverra eu blandit id. Nunc tortor pretium ut eu dolor. Sed in amet rutrum ridiculus
              tortor enim quis gravida. Varius pretium diam lacus nunc. Pharetra sapien adipiscing ac quam massa fermentum mattis dui porta.
              Non interdum est donec pellentesque aliquam. Volutpat amet varius lobortis arcu aliquam sit.
            </p>
          </div>
        </div>

        <div className="mx-auto w-11/12 border-t border-t-[#BCC1C8] 2xl:max-w-[1440px]">
          <h3 className="mb-6 mt-5 font-duplicate-sans text-[56px]">Related stories</h3>

          <div className="mb-24 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
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
