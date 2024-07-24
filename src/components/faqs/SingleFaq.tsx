// import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const singleFaq = ({ question, answer }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h1 className="text-xl font-medium">{question}</h1>
        {/* <ArrowDownIcon className="w-6 h-6" /> */}
        {show ? (
          <span className="text-3xl">-</span>
        ) : (
          <span className="text-3xl">+</span>
        )}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-clip"
          >
            <p className="text-sm md:text-base leading-loose py-3">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default singleFaq;
