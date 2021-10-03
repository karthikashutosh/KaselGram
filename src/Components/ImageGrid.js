import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function ImageGrid() {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs.map((doc) => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.url} alt="images-uploaded" />
        </div>
      ))}
    </div>
  );
}
