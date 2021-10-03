import React from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an Image file(Png/Jpeg) ");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange}></input>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
