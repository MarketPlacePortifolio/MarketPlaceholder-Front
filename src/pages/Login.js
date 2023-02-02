import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import BigLogo from '../components/Auth/BigLogo';
import { Row } from '../components/Auth';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import useSignIn from '../hooks/api/useSignIn';
import { toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/products');
    } catch (err) {
      toast('Não foi possível fazer o login!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  } 

  return (
    <Wrapper>
      <Row>
        <BigLogo />
      </Row>
      <Row>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" style={{ color: 'white', backgroundColor: '#90EE90' }} fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-up" >Não possui login? Inscreva-se</Link>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,255,240,1) 35%, #b6f2b6 100%);

  a {
    text-decoration: none;
    font-style: bold;
    font-family: sans-serif;
    color: #64d96a;
    margin-top: 60px;
  }
`;
