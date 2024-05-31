import { Briefcase, Home, Phone, UserRound } from "lucide-react";

function App() {
  return (
    <>
      <main className="bg-[#0F103F] max-w-screen text-white">
        {/*header & home page start*/}
        <section className="max-w-screen h-[800px]">
          <nav>
            <ul className="flex justify-center items-center gap-20 py-4">
              <li className="font-semibold">
                <a href="Home">Home</a>
              </li>
              <li className="font-semibold">
                <a href="About-me">About me</a>
              </li>
              <li className="font-semibold">
                <a href="/">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="44"
                      height="44"
                      rx="22"
                      stroke="url(#paint0_linear_1_1589)"
                      strokeWidth="2"
                    />
                    <path
                      d="M27.0086 25.1686C38.18 32.7915 31.9535 44.9486 24.0235 44.9486C19.0049 44.9486 35.6829 43.5029 28.1914 33.4486C25.2945 29.5606 22.0143 28.52 15.7435 24.84C3.4972 17.6533 13.4057 1.05145 23.5307 1.05145C31.3026 1.05146 36.6686 4.99431 34.7629 13.7343C34.1065 16.7447 28.6365 15.7958 29.6372 12.4857C30.4915 9.66002 31.74 7.03145 28.1914 5.32288C24.6429 3.61431 19.6486 7.09717 16.9921 12.3543C13.3713 19.5198 20.8741 20.7868 27.0086 25.1686Z"
                      fill="url(#paint1_linear_1_1589)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_1589"
                        x1="28.75"
                        y1="1.4375"
                        x2="31.05"
                        y2="46"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AB71C6" />
                        <stop offset="0.507276" stopColor="#8A6EE0" />
                        <stop offset="1" stopColor="#6A6CF9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_1589"
                        x1="8.91251"
                        y1="3.7375"
                        x2="37.0875"
                        y2="41.6875"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BA72BA" />
                        <stop offset="1" stopColor="#626BFE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="font-semibold">
                <a href="Work">Work</a>
              </li>
              <li className="font-semibold">
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div>
            <img
              className="absolute top-[180px] left-0 w-[70px]"
              src="/src/assets/Side menu.png"
              alt=""
            />

            <img
              className="absolute top-2  w-[280px] "
              src="/src/assets/Group 1184.svg"
              alt=""
            />
            <div className=" flex flex-col justify-center items-center relative z-10 pt-32">
              <h1 className="text-4xl font-bold pb-10 w-[380px] ">
                Creative UI Designer Sourasith Phomhome Based in Montreal
              </h1>
              <div className="space-x-4 flex justify-center items-center">
                <button className="w-48 h-12 text-white font-semibold rounded-full bg-gray-600 hover:bg-gray-700 ">
                  Hire me
                </button>
                <button className="w-48 h-12 text-white font-semibold rounded-full bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:from-[#9f47b1] hover:to-[#253f70]">
                  Download CV
                </button>
              </div>
            </div>
            <img
              className="absolute w-[780px] -bottom-40 right-0"
              src="/src/assets/Group 1190.svg"
              alt=""
            />
          </div>
        </section>
        <section className=" h-screen flex relative  justify-center items-center">
          <img
            className="w-[900px] absolute"
            src="/src/assets/Background2.png"
            alt=""
          />

          <img
            className="absolute  top-0 w-[460px] h-[520px]"
            src="/src/assets/Frame 2.png"
            alt=""
          />
          <img
            className="absolute right-64 top-60 w-[270px] "
            src="/src/assets/Group 1166 (2).png"
            alt=""
          />
        </section>
        <section className=" py-20  flex justify-center items-center">
          <div>
            <h2 className="font-semibold text-3xl text-center pb-10 ">
              My recent work
            </h2>
            <div className="flex">
              <img
                className="relative left-6"
                src="/src/assets/Designs.svg"
                alt=""
              />
              <img
                className="relative z-30"
                src="/src/assets/UI Design.svg"
                alt=""
              />
              <img
                className="relative -left-6"
                src="/src/assets/Mockups.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="relative pt-80 pb-16">
          <div className="w-3/4 relative m-auto bg-[rgba(47,47,138,0.600)] px-24 py-16 flex gap-8 rounded-lg">
            <div className="flex flex-col gap-6 w-1/2 ">
              <h3 className="font-semibold text-2xl">Get in touch</h3>
              <p className="w-1/2 pb-20">
                I’m very approachable and would love to speak to you. Feel free
                to call, send me an email . Follow me in social media or simply
                complete the enquiry form.
              </p>

              <span className="flex gap-3 items-center">
                <span className="bg-[rgba(255,255,255,0.30)] flex justify-center items-center h-10 w-10 rounded-full">
                  <img src="/src/assets/path.png" alt="" />
                </span>
                <span> 1-514-456-2753</span>
              </span>
              <span className="flex gap-3 items-center">
                <span className="bg-[rgba(255,255,255,0.30)] flex justify-center items-center h-10 w-10 rounded-full">
                  <img src="/src/assets/Exclude.png" alt="" />
                </span>
                <span> 1-514-456-2753</span>
              </span>
            </div>
            <div className="w-1/2 ">
              <form action="" className="flex flex-col gap-6">
                <h3 className="font-semibold text-2xl">Send me a message</h3>
                <input
                  className="bg-[rgba(255,255,255,0.30)] rounded-md p-2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-[rgba(255,255,255,0.30)] rounded-md p-2"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="bg-[rgba(255,255,255,0.3)] rounded-md p-2"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  placeholder="Your Message"
                  className="bg-[rgba(255,255,255,0.30)] rounded-md p-2"
                  cols="30"
                  rows="8"
                ></textarea>
                <input
                  className="text-white font-semibold rounded-md bg-gradient-to-r py-2 px-2 text-left size-fit from-[#C961DE] to-[#2954A3] hover:from-[#9f47b1] hover:to-[#253f70] "
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
          <img
            src="/src/assets/working.svg"
            className="absolute -top-[340px] -left-11 "
            alt=""
          />
        </section>
        <section className="bg-[rgba(47,47,138,0.200)] pt-16 pb-7">
          <footer>
            <div className="flex justify-center gap-16">
              <div>
                <Home className="inline mr-3 mb-1" /> Home
              </div>
              <div>
                <UserRound className="inline mr-3 mb-1" />
                About me
              </div>
              <div>
                <Briefcase className="inline mr-3 mb-1" />
                Work
              </div>
              <div>
                <Phone className="inline mr-3 mb-1" />
                Contact
              </div>
            </div>
            <div className="flex gap-3 py-12 justify-center ">
              <img
                className="w-10 h-10"
                src="/src/assets/Instagram.png"
                alt=""
              />
              <img className="w-10 h-10" src="/src/assets/Twitter.png" alt="" />
              <img
                className="w-10 h-10"
                src="/src/assets/Linkedin.png"
                width={"96px"}
                alt=""
              />
              <img
                className="w-10 h-10"
                src="/src/assets/Facebook.png"
                alt=""
              />
              <img className="w-10 h-10" src="/src/assets/YouTube.png" alt="" />
            </div>
            <span className="bg-white w-[94%] m-auto h-[0.5px] flex justify-center"></span>
            <p className="text-right text-white pt-4 pr-10">
              Terms of Service - Privacy Policy
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
export default App;
