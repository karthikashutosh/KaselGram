import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="images-uploaded"></img>
          </motion.div>
        ))}
    </div>
  );
}
