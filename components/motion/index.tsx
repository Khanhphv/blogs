"use client";
import { AnimationProps, motion } from "framer-motion";
interface MotionProps extends AnimationProps {
  children: React.ReactNode;
}
export const Motion = (props: MotionProps) => {
  const { children, ...others } = props;
  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="sm:pl-4"
        {...others}
      >
        {children}
      </motion.div>
    </>
  );
};
