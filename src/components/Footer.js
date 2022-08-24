import { Facebook, Instagram, Mail, Phone, Room, WhatsApp } from "@mui/icons-material";
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile ({flexDirection: "column"})};
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;
    const Logo = styled.h1``;
    const Desc = styled.p`
    margin: 20px 0px;

    `;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile ({display: "none"})};
    `;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List = styled.ul`
    margin:0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile ({backgroundColor: "#eee"})};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const Payment = styled.img`
    width: 30%;
    /* height: 30px; */
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SteelBit</Logo>
            <Desc>
                Ogni individuo ha diritto ad un ordine sociale e internazionale nel quale i diritti e le libertà enunciati in questa Dichiarazione possano essere pienamente realizzati. Nulla nella presente Dichiarazione può essere interpretato nel senso di implicare un diritto di un qualsiasi Stato, gruppo o persona di esercitare un'attività o di compiere un atto mirante alla distruzione di alcuno dei diritti e delle libertà in essa enunciati.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="25D366">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Calle Falsa 123</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+54 9 12345678</ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/>contacto@SteelBit.com</ContactItem>
            <Payment src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp"/>
            
        </Right>
    </Container>
  )
}

export default Footer