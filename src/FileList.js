import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 500px; /* 최대 높이 설정 */
  overflow-y: auto;  /* 세로 스크롤바 추가 */
  border: 1px solid #ddd; /* 스크롤 영역 시각화 */
  padding: 10px;
  border-radius: 5px;
`;

const ListItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
`;

const ListImage = styled.img`
  width: 100%;
  max-height: 50px;
  transform: rotate(${props => props.rotation}deg);
`;

function FileList({ files, onSelect, rotations }) {
  return (
    <ListContainer>
      {files.map((file, index) => (
        <ListItem key={index} onClick={() => onSelect(file, index)}>
          <ListImage src={URL.createObjectURL(file)} alt={file.name} rotation={rotations[index] || 0} />
          <p>{file.name}</p>
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default FileList;
