"use client"
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

interface ScrollToShowProps {
  children: React.ReactNode;
}

const ScrollToShow: React.FC<ScrollToShowProps> = ({ children }) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}>
      {children}
    </motion.div>
  );
};

export default ScrollToShow;
