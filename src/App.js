import React, { useState } from "react";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import Title from "./Components/Title";
import UploadForm from "./Components/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
