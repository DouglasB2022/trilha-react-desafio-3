import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  
  const Cadastro = () =>{
    const navegacao = useNavigate();
    navegacao('/Cadastro');
  }
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={Cadastro} >Entrar</Button>
                <Button title="Cadastrar" onClick={Cadastro} >Cadastrar</Button>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
