import { easeInOut, motion } from "framer-motion";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTop = () => {
  return (
    <>
      <motion.div
        className="scroll-to-top d-flex align-items-center justify-content-center"
        initial={{
          y: 0,
        }}
        whileHover={{
          y: -5,
        }}
        transition={{
          duration: 0.2,
          ease: easeInOut,
        }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0 });
          console.log("scrollToTop");
        }}
      >
        <IoIosArrowRoundUp
          style={{
            width: "22px",
            height: "22px",
          }}
        />
      </motion.div>
    </>
  );
};

export default ScrollToTop;
