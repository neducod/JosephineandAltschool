import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { faqs } from "@/assets/dataset";
import SingleFaq from "./SingleFaq";
import faqsleft from "@/assets/faqsLeft.png";
import faqsRight from "@/assets/faqsRight.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Faqs = ({ setSelectedPage }: Props) => {
  return (
    <section id="faqs" className="w-full h-full p-10 relative">
      <div className="absolute bottom-0 right-0  w-1/4 h-1/4">
        <img src={faqsRight} alt="faqs img" />
      </div>
      <div className="absolute top-0 left-0 w-1/4 h-1/4">
        <img src={faqsleft} alt="fAQS IMG" className="relative top-0 left-0" />
      </div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.FAQs)}
        className="w-full h-full flex flex-col items-center justify-center py-10"
      >
        <div className="flex items-center gap-2">
          <div className="h-10 w-1 bg-gradient-to-b from-black to-transparent"></div>
          <h1 className="text-4xl">FAQS</h1>
        </div>
        <div className="max-w-[800px] w-full mx-auto mt-20 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const { question, answer } = faq;
            return (
              <div key={i} className=" pb-3 border-b-[1px] border-b-gray-300">
                <SingleFaq question={question} answer={answer} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
