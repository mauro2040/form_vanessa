import React, { useState } from 'react';
import pdf from './pdf.jpg';
import styled from 'styled-components';

const DragDropFieldContainer = styled.div`
   border: 2px dashed #ccc;
   font-size:12px;
  text-align: top;
  padding-top: 15px;
  background-color: white;
  width: 150px;
  height: 120px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
   
    font-size:8px;
  }
`;


const DragDropFieldText = styled.p`
  /* Resto do seu código */
`;

const SelectedFileImage = styled.img`
  width: 40px;
  height: 40px;
  /* Adicione outros estilos desejados */
`;

const DragDropField = ({ onFileDrop, selectedFile }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const files = event.dataTransfer.files;
    onFileDrop(files);
  };

  return (
    <DragDropFieldContainer
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      isDragOver={isDragOver}
    >
      {selectedFile ? (
        <>
          <SelectedFileImage src= {pdf} alt="Ícone do arquivo PDF" />
          <DragDropFieldText>{selectedFile.name}</DragDropFieldText>
        </>
      ) : (
        <DragDropFieldText>
          {isDragOver ? 'Solte o arquivo aqui' : 'Arraste e solte o arquivo aqui'}
        </DragDropFieldText>
      )}
    </DragDropFieldContainer>
  );
};

export default DragDropField;
