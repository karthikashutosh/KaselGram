import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration:.5 }}
      className="backdrop"
      onClick={handleClick}
    >
      <img src={selectedImg} alt="enlarged_image" />
    </motion.div>
  );
}
