import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import analyticsLeft from "@/assets/analyticsLeft.png";
import analyticsRight from "@/assets/analyticsRight.png";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

// const options = [
//   { label: "Lorem Ipsum", id: 1 },
//   { label: "Lorem Ipsum", id: 2 },
// ];

const Analytics = ({ setSelectedPage }: Props) => {
  return (
    <section id="analytics" className="w-full h-fit relative">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Analytics)}
        className="bg-background-blue p-20 relative"
      >
        {/* find solution to the positioning */}
        <div>
          <img
            src={analyticsLeft}
            alt="waves"
            className=" absolute top-0 left-0 h-full w-[70%]"
          />
        </div>

        <div>
          <img
            src={analyticsRight}
            alt="waves"
            className=" absolute bottom-0 right-0 h-[90%] w-[50%] "
          />
        </div>

        <div className="formdiv flex justify-center ">
          <form
            action=""
            className="bg-white w-[40%] rounded-lg p-12 flex flex-col gap-6 z-50"
          >
            <input
              type="text"
              placeholder="Paste URL here..."
              className="border border-blue-500 rounded-lg placeholder:text-blue-500 placeholder:text-sm p-3"
            />

            <div className="flex justify-between w-full gap-2 text-blue-500">
              <select
                name="selct"
                placeholder="Choose Domain"
                className="border border-blue-500 rounded-lg placeholder:text-blue-500 text-sm p-3 w-[50%]"
              >
                <option value="" disabled selected>
                  Choose Domain
                </option>
                <option value="lorem text">lorem text</option>
                <option value="lorem text">lorem text</option>
              </select>
              {/* <Autocomplete
                options={options}
                renderInput={(params) => (
                  <TextField {...params} label="Choose Domain" />
                )}
                sx={{
                  width: 100,
                  border: 0,
                }}
                className="w-full border border-blue-500"
              /> */}

              <input
                type="text "
                placeholder="Type Alias here"
                className="border border-blue-500 rounded-lg placeholder:text-blue-500 placeholder:text-sm p-3 w-[50%]"
              />
            </div>

            <button className="bg-blue-600 text-white rounded-3xl p-3">
              Trim Url
            </button>
            <div>
              <p className="text-blue-500 text-sm">
                By clicking TrimURL, I agree to the{" "}
                <span className="font-bold">
                  Terms of Service, Privacy Policy{" "}
                </span>
                and Use of Cookies
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Analytics;
