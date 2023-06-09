import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Higher, Title, Description, Form, Form2,Com,Seletores,FileInputLabel,FileInputWrapper,CustomFileInput, Box_main, Description_2, Anexo, Select,Dados, Field, Botoes, Photo, StyledInput, Rodape, Botao, Des, SocialIcon, SocialContainer, SocialLink } from './Styles';
import DragDropField from './DragDropField.jsx';
import logo from './images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  /* Outros estilos globais aqui */
`;

function App() {
  const [count, setCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilesList, setSelectedFilesList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const handleFileDrop = (files) => {
    setSelectedFile(files[0]);
  };

  const handleChooseFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadFile = () => {
    // Lógica para enviar o arquivo
    if (selectedFile) {
      setSelectedFilesList([...selectedFilesList, selectedFile]); // Adiciona o arquivo selecionado à lista
      // Lógica de envio do arquivo aqui
    } 
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Higher>
        <Title>Certificado Digital</Title>
        <Photo  src={logo} alt="Logo" />
      </Higher>

      <Box_main>
        <div>
        {showForm && (
          <>
            <Form data-aos="fade-up" data-aos-duration="3000">
              <Description>Comentarios</Description>
              <Select placeholder="Nome" />
              <Select placeholder="CPF" />
              <Select placeholder="RG" />
              <Select placeholder="Telefone" />
              <Select placeholder="Endereço" />
              <Select placeholder="Email" />
            </Form>  </>
        )}
        </div> 
        <div>
          <Anexo id="uploadForm" encType="multipart/form-data" data-aos="fade-up" data-aos-duration="3000">
              <Description_2>Arquivo</Description_2>
              <Field>
                <DragDropField onFileDrop={handleFileDrop} selectedFile={selectedFile}/>
                <Botoes>
                <FileInputWrapper>
                    <CustomFileInput type="file" onChange={handleChooseFile} accept=".pdf" />
                    <FileInputLabel>Selecione o arquivo</FileInputLabel>
                    </FileInputWrapper>
                  <Botao type="button" onClick={handleUploadFile} disabled={!selectedFile}>
                    Upload
                  </Botao>
                </Botoes>
              </Field>
              <div>
                {selectedFilesList.map((file, index) => (
                  <div key={index}>
                    <p>{file.name}</p>
                    {file.type === 'application/pdf' ? (
                      <img src="./public/img/pdf.jpg" alt="Ícone do arquivo PDF" />
                    ) : (
                      <img src="caminho-do-icone-padrao.png" alt="Ícone do arquivo" />
                    )}
                  </div>
                ))}
              </div>
        </Anexo>

        </div>
        <div>             
        {showForm2 && (
          <>
            <Form2 data-aos="fade-up" data-aos-duration="3000">
              <Description>Dados envio</Description>
              <Select placeholder="Nome" />
              <Select placeholder="Email" />
            </Form2></>
        )}
        </div> 
      </Box_main>
      <Seletores>
       <Dados onClick={() => setShowForm(!showForm)}>Adicionar dados</Dados>
       <Com onClick={() => setShowForm2(!showForm2)}>Adicionar destinatarios</Com>
      </Seletores>
      <Rodape>
        <Des>Razão Social xxxxx</Des>
        <SocialContainer>
          <SocialLink href="https://mail.google.com/mail/u/0/?hl=pt-BR" target="_blank">
            <SocialIcon src="/public/img/email.jpg" alt="E-mail" />
          </SocialLink>
          <SocialLink href="https://wa.me/5519994149901?text=Olá,%20Obrigado%20pelo%20contato!" target="_blank">
            <SocialIcon src="/public/img/wp.png" alt="WhatsApp" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/" target="_blank">
            <SocialIcon src="/public/img/instagram.jpg" alt="Instagram" />
          </SocialLink>
        </SocialContainer>
      </Rodape>
    </>
    );
  }
export default App;
