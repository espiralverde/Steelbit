import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #ff431d;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>
        Para publicitar
    </Container>
  )
}

export default Announcement