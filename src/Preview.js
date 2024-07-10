import React, { useState } from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  transform: rotate(${props => props.rotation}deg);
  transition: transform 0.3s ease;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const RotateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

const DownloadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

function Preview({ file, rotation, onRotate }) {
  const handleRotate = () => {
    onRotate(rotation + 90);
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 1024;
      canvas.height = 768;

      // Rotate the canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2, canvas.width, canvas.height);

      // Create a download link
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg');
      link.download = 'resized-image.jpg';
      link.click();
    };

    img.src = URL.createObjectURL(file);
  };

  return (
    <PreviewContainer>
      <PreviewImage src={URL.createObjectURL(file)} alt={file.name} rotation={rotation} />
      <ButtonContainer>
        <RotateButton onClick={handleRotate}>Rotate</RotateButton>
        <DownloadButton onClick={handleDownload}>Download</DownloadButton>
      </ButtonContainer>
    </PreviewContainer>
  );
}

export default Preview;
