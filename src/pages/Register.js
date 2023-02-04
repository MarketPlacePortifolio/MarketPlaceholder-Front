import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import BigLogo from '../components/Auth/BigLogo';
import { Row } from '../components/Auth';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSignUp from '../hooks/api/useSignUp';

export function Register() {
  const navigate = useNavigate();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const { loadingSignUp, signUp } = useSignUp();
  
  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(name, email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <Wrapper>
      <Row>
        <BigLogo />
      </Row>
      <Row>
        <form onSubmit={submit}>
          <Input label="Nome" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" style={{ color: 'white', backgroundColor: '#90EE90' }} fullWidth disabled={loadingSignUp}>Inscrever</Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in" >Já está inscrito? Faça login</Link>
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
