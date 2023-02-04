import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../components/Auth';
import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import { Menu } from '../components/Menu';
import UserContext from '../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';
import { CarouselProfile } from '../components/CarouselProfile';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import useUserUpdate from '../hooks/api/useUserUpdate';
import { toast } from 'react-toastify';

export function Profile() {
  const { setUserData, userData: userData } = useContext(UserContext); 
  const [ image, setImage ] = useState([userData.user.image]);
  const [ name, setName ] = useState(userData.user.name);
  const [ email, setEmail ] = useState(userData.user.email);
  const { userUpdateLoading, userUpdate } = useUserUpdate();
  const edited = name !== userData.user.name || email !== userData.user.email || image[0] !== userData.user.image;
  const uploader = Uploader({
    apiKey: 'free'
  });
  
  const products = [];

  async function submit(event) {
    event.preventDefault();

    try {
      const userUpdateData = await userUpdate({ token: userData.token, body: { name: name, email: email, image: image[0] } });
      setUserData(userUpdateData);
      toast('Salvo com sucesso! Faça login para continuar.');
    } catch (error) {
      toast('Não foi possível salvar suas alterações!');
    }
  }

  return (
    <Wrapper>
      <Menu type={'profile'} colored={true} />

      <Row>
        <h2 className='title'>Seu perfil</h2>
      </Row>
      <Row>
        {!image[0] ?
          <UploadButton 
            uploader={uploader}
            onComplete={files => setImage(files.map(x => x.fileUrl))}>
            {({ onClick }) =>
              <button onClick={ onClick }>
                <FaUserCircle size={ 300 }  style={{ color: '#90EE90', marginBottom: '40px' }} /> 
              </button>
            }
          </UploadButton> 
          : 
          <UploadButton 
            uploader={uploader}
            onComplete={files => setImage(files.map(x => x.fileUrl))}>
            {({ onClick }) =>
              <button onClick={ onClick }>
                <img src={image} alt='profilephoto' />
              </button>
            }
          </UploadButton> 
        }
      </Row>
      <Row>
        <form onSubmit={submit}>
          <Input type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
          <Input type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          {edited ? <Button type="submit" style={{ color: 'white', backgroundColor: '#90EE90', margin: '50px 0', height: '56px', fontFamily: 'Rubik Mono One' }} disable={userUpdateLoading.toString()} fullWidth >salvar</Button> : ''}
        </form>
      </Row>
      <Row>
        <h2 className='title'>Seus produtos</h2>
      </Row>
      <Row>
        <CarouselProfile products={ products }/>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,255,240,1) 35%, #b6f2b6 100%);

  .title {
    margin: 82px 0 40px 0;
  }

  h2 {
    font-size: 34px;
    font-family: 'Rubik Mono One', sans-serif;
    color: #90EE90;
  }

  button {
    background: none;
    border: none;

    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 40px;
    }
  }
`;
