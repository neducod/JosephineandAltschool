import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Features from "@/components/features/Features";
import MyUrls from "@/MyURLs/MyUrls";
import Pricing from "@/components/pricing/Pricing";
import Analytics from "@/components/analytics/Analytics";
import Faqs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";
import leftImage from "@/assets/revolutionizing-left.png";
import rightImage from "@/assets/revolutionizing-right.png";

// type Props = {};

const Home = () => {
  // const [username, setUsername] = useState("");

  // const currentUser = (useContext(AuthContext) as AuthContextType).currentUser;

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.MyURLs
  );
  return (
    <div className="">
      <section className="app bg-primary-100 w-screen h-screen overflow-hidden ">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <MyUrls selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {/* <create my url component for the main home component> */}
        <Features
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Pricing
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Analytics
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Faqs selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <section className=" relative w-full h-full flex items-center justify-between flex-col gap-4 bg-background-blue py-10 text-white overflow-hidden">
          <div>
            {/* <img src={leftImage} alt="waves" className="h-3/4 w-3/4" /> */}
            <img
              src={leftImage}
              alt="waves"
              className=" absolute top-0 left-0  h-[90%]"
            />
          </div>

          <div>
            <img
              src={rightImage}
              alt="waves"
              className=" absolute bottom-0 right-0 h-[90%]"
            />
          </div>

          <h2 className="text-4xl pb-6 font-semibold">
            Revolutionizing Link Optimization
          </h2>
          <button className="rounded-full  border border-blue-700 py-2.5 px-8  text-white focus:outline-none focus:z-10 bg-blue-700 mr-4 text-sm font-medium hover:text-blue-500 hover:bg-white transition-all duration-700 ease-in-out">
            Get Started
          </button>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
