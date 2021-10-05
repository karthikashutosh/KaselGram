import React, { useState } from "react";
import ImageGrid from "../Components/ImageGrid";
import Modal from "../Components/Modal";

import UploadForm from "../Components/UploadForm";

function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Home;
