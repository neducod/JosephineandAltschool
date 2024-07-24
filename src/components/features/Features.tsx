import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import linkIcon from "@/assets/link_icon.png";
// import { whyChose } from "@/assets/whychose";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="w-full h-full bg-blue-50  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        className=" w-full flex items-center justify-center "
      >
        <div className="itemsContainer flex flex-col w-full ">
          {/* TOP ITEMS */}
          <div className="top-items bg-[#F9FBFD] w-full px-[10%] py-10 flex justify-between  gap-10">
            <div className="text-4xl font-bold p-2 w-[40%]">
              <h3 className="">One Stop.</h3>
              <h3>
                Four <span className="text-secondary-300">Possibilities.</span>
              </h3>
            </div>
            <div>
              {/* <table className="w-full">
                <tr>
                  <th>3M</th>
                  <th>60M</th>
                  <th>1B</th>
                  <th>300K</th>
                </tr>
                <tr>
                  <td className="text-center">Active users</td>
                  <td className="text-center">Links & QR code created</td>
                  <td className="text-center">
                    Clicked and Scanned connections
                  </td>
                  <td className="text-center">App integrations</td>
                </tr>
              </table> */}
              <div className="flex justify-between items-center w-full gap-3 ">
                <div className="flex-1 p-2 text-left h-4">
                  <h3 className="text-3xl font-semibold">3M</h3>
                  <p className="font-bold">Active users</p>
                </div>

                <div className="flex-1 p-2 text-left h-4">
                  <h3 className="text-3xl font-semibold">60M</h3>{" "}
                  <p className="font-bold">Links & QR code created</p>
                </div>

                <div className="flex-1 p-2 text-left h-4">
                  <h3 className="text-3xl font-semibold">1B</h3>{" "}
                  <p className="font-bold">Clicked & Scanned connections</p>
                </div>

                <div className="flex-1 p-2 text-left h-4">
                  <h3 className="text-3xl font-semibold">300K</h3>
                  <p className="font-bold">App integrations</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY CHOSE SCISSOR */}
          <div className="whychosebox flex justify-between items-center gap-5 w-full h-full px-[10%] bg-white">
            <div className="leftbox w-[40%] flex items-start justify-start">
              <div className="pt-0">
                <h3>
                  Why choose <span>Scissors</span>
                </h3>
                <p>
                  Scissors is the hub of everything that has to do with link
                  your management.We shorten your URLs, allow you creating
                  custom ones for your personal, business, event usage. Our
                  swift QR code creation, management and usage tracking with
                  advanced analytics for all of these is second to none.{" "}
                </p>
              </div>
            </div>

            <div className="rightbox w-[60%] flex items-center justify-center">
              <div className="centecarditems flex justify-between items-center flex-wrap">
                {/* {console.log(`&{whyChose: ReactNode}`)} */}
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div className="card w-[50%] p-4 ">
                  <img
                    src={linkIcon}
                    alt="link icon"
                    className="relative  top-0 left-0 pb-5"
                  />
                  <h3 className="font-extrabold text-2xl pb-2">
                    URL Shortening
                  </h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
