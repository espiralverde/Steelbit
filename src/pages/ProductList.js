import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;


const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile ({margin: "0px 20px", display: "flex", flexDirection: "column"})};
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile ({marginRight: "0px"})};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile ({margin: "10px 0px"})};
`;
const Option = styled.option``;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Más Nuevo");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
        [e.target.name]: value, //acá puedo poner "value.toLowecase" para que tome todo en minúsculas. Para eso tengo que cargarlo de esa forma en la base de datos
        })
    }

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    {/* <Option disabled>Color</Option> */}
                    <Option>Azul</Option>
                    <Option>Amarillo</Option>
                    <Option>Naranja</Option>
                    <Option>Color4</Option>
                    <Option>Color5</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                {/* <Option disabled>Marca</Option> */}
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    {/* <Option>Marca4</Option>
                    <Option>Marca5</Option> */}
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="Más Nuevo">Más Nuevo</Option>
                    <Option value="Asc">Menor Precio</Option>
                    <Option value="Desc">Mayor Precio</Option>
                </Select>
                </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
        

    </Container>
    )   
}

export default ProductList