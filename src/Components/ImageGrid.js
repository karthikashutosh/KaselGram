import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function ImageGrid({setSelectedImg}) {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="images-uploaded"></img>
          </div>
        ))}
    </div>
  );
}
