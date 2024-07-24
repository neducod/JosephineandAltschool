import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import PlanCard from "./PlanCard";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  return (
    <section id="pricing">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        className="flex flex-col items-center justify-between"
      >
        <div className="pricing-text flex flex-col items-center mx-auto my-4 p-4 w-[60%]">
          <div className="w-full flex items-center justify-center gap-1">
            <div className="h-10 w-1 bg-gradient-to-b from-black to-transparent"></div>
            <h2 className="font-bold text-3xl p-2 text-center">
              A <span className="text-secondary-300">perfect price</span> for
              all your needs
            </h2>
          </div>
          <div className="w-[70%] p-1">
            <h3 className="text-sm text-center">
              From catering for your personal, business, event, social needs,
              you can be rest assured we have you in mind in our pricing.
            </h3>
          </div>
        </div>

        <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
          <div className="pricing-card-container grid lg:grid-cols-3 gap-12 lg:gap-0 ">
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#78e3fc"
                name="Basic"
                description="Free plan for all users"
                features={[
                  "Unlimited URL Shortening",
                  "Basic Link Analytics",
                  "Customizable Short Links",
                  "Standard Support",
                  "Ad-supported",
                ]}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#fcd638"
                name="Professional"
                description="Ideal for business creators"
                price="15"
                features={[
                  "Enhanced Link Analytics",
                  "Custom Branded Domains",
                  "Advanced Link Customization",
                  "Priority Support",
                  "Ad-free Experience",
                ]}
                featured={true}
              />
            </div>
            <div className="w-full max-w-md mx-auto">
              <PlanCard
                color="#ffb5ba"
                name="Teams"
                description="Share with up to 10 users"
                price="25"
                features={[
                  "Team Collaboration",
                  "User Roles and Permissions",
                  "Enhanced Security",
                  "API Access",
                  "Dedicated Account Manager",
                ]}
              />
            </div>
          </div>
        </div>

        <div
          className="buttons p-10 my-4
        "
        >
          <button className="rounded-full  border border-blue-600 py-2.5 px-8  text-blue-600 focus:outline-none focus:z-10 mr-4 text-sm font-medium hover:bg-blue-600 hover:text-white">
            Get Custom Pricing
          </button>
          <button className="rounded-full  border border-blue-600 py-2.5 px-8  text-white focus:outline-none focus:z-10 bg-blue-600 mr-4 text-sm font-medium hover:text-blue-600 hover:bg-white">
            Select Pricing
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
