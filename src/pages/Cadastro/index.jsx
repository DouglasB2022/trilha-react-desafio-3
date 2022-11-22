import { useForm } from "react-hook-form";
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper } from './styles';

 const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
});

  const onSubmit = async (formData) => {
    try{
        const {data} = await api.get(`/users?name=${formData.name}&email=${formData.email}&senha=${formData.senha}`);
        
        if(data.length && data[0].id){
            navigate('/feed') 
            return
        }

        alert('Usuário ou senha inválido')
    }catch(e){
        //TODO: HOUVE UM ERRO
    }

    
  };
  const handleConect = () => {
    navigate('/login')
}
  return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
             e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
            <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome completo" leftIcon={<MdEmail />} name="Nome completo"  control={control} />
                <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                {errors.senha && <span>Senha é obrigatório</span>}
                <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleConect} />
            </form>
            <Row> Ao clicar em "criar minha conta grátis".declaro que aceito
              as Políticas de Privacidade e Termos de Uso da Dio.
              Já tenho conta.
            </Row>
                <CriarText onClick={handleConect}>Fazer Login</CriarText>
              
                
            </Wrapper>
        </Column>
    </Container>
    </>
  )
}
export  { Cadastro };
