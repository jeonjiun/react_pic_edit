import React from 'react';

function FileSelector({ onFilesChange }) {
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    onFilesChange(selectedFiles);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileSelector;