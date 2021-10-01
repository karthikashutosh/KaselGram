import React from "react";

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
      setError("Please select Png/Jpeg Image file ");
    }
  };

  return (
    <form>
      <input type="file" onChange={handleChange}></input>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
}
