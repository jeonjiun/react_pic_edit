import React, { useState } from 'react';
import styled from 'styled-components';
import FileSelector from './FileSelector';
import FileList from './FileList';
import Preview from './Preview';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin-top: 20px;
`;

const FileListContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const PreviewContainer = styled.div`
  flex: 2;
`;


export function App(props) {
   const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [rotations, setRotations] = useState([]);

  const handleFilesChange = (selectedFiles) => {
    setFiles(selectedFiles);
    setRotations(new Array(selectedFiles.length).fill(0));
    setSelectedFile(null);
    setSelectedIndex(null);
  };

  const handleFileSelect = (file, index) => {
    setSelectedFile(file);
    setSelectedIndex(index);
  };

  const handleRotate = (newRotation) => {
    const newRotations = [...rotations];
    newRotations[selectedIndex] = newRotation;
    setRotations(newRotations);
  };

  return (
    <AppContainer>
      <h1>Photo Selector</h1>
      <FileSelector onFilesChange={handleFilesChange} />
      <ContentContainer>
        <FileListContainer>
          <FileList files={files} onSelect={handleFileSelect} rotations={rotations} />
        </FileListContainer>
        <PreviewContainer>
          {selectedFile && (
            <Preview file={selectedFile} rotation={rotations[selectedIndex]} onRotate={handleRotate} />
          )}
        </PreviewContainer>
      </ContentContainer>
    </AppContainer>
  );
}

// Log to console
console.log('Hello console')