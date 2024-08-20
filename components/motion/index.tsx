"use client";
import { MotionProps as MotionPropsCustom, motion } from "framer-motion";
interface MotionProps extends MotionPropsCustom {
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
        {...others}
      >
        {children}
      </motion.div>
    </>
  );
};
