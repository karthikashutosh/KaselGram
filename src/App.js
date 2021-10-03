import React from 'react';
import ImageGrid from './Components/ImageGrid';
import Title from './Components/Title';
import UploadForm from './Components/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
