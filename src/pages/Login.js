import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
        url("https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding:  20px;
    background-color: white;
    ${mobile ({width: "75%"})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color:red;
`;


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    };

  return (
    <Container>
        <Wrapper>
            <Title>INICIAR SESIÓN</Title>
            <Form>
                <Input placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input placeholder="password"
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>INGRESAR</Button>
                {error && <Error>Ups! Algo falló...</Error>}
                <Link>Olvidaste la contraseña?</Link>
                <Link>Crear cuenta nueva</Link>
            </Form>
        </Wrapper>
    
    </Container>
  )
}

export default Login