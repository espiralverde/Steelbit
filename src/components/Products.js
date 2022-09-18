import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try
      {
          const res = await axios.get(
            cat 
            ? `http://localhost:5000/api/products?category=${cat}` 
            : "http://localhost:5000/api/products"
          );
          setProducts(res.data);

      }
      catch(err) {}
    }
    getProducts()
  },[cat]);

  

  useEffect(()=>{
    cat && setFilteredProducts (
      products.filter((item)=> 
      Object.entries(filters).every(([key, value]) => 
      item[key].includes(value)
      )
      )
    )
  }, [products, cat, filters])

  useEffect(()=>{
    if (sort === "Más Nuevo") {
      setFilteredProducts((prev) =>
      [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Asc") {
      setFilteredProducts ((prev)=> 
      [...prev].sort((a,b)=> a.price - b.price)
      );
    }else {
      setFilteredProducts((prev)=>
      [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (

    // De esta forma los saco de la base de datos
    <Container>
      {
        cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
          .slice(0,4) //cantidad de productos máximo a mostrar en la página principal
          .map((item) => <Product item={item} key={item.id} />)}


{/* de esta forma estaba antes */}
        {/* {filteredProducts.map(item =>(
            <Product item={item} key={item.id}/>
        ))} */}


{/* de esta forma los saco del data.js estático */}
        {/* {popularProducts.map(item =>(
            <Product item={item} key={item.id}/>
        ))} */}
    
    </Container>
  )
}

export default Products;