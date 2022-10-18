import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { cartDataReq, getCartData } from "../Context/CartContext/action";
import { Box, SimpleGrid, Image,Button,Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Home = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [btndisbl,setBtndisb]=useState(false)


  console.log(cartState.cart_data)
  useEffect(() => {
    cartDispatch(cartDataReq(true));
    axios.get("https://jabz-101-app.herokuapp.com/products").then((res) => {
      // console.log(res.data)
      setData(res.data);
      cartDispatch(getCartData(res.data))
      cartDispatch(cartDataReq(false));
    });
  }, []);

  const handleAddToCart=(id)=>{

    let newData=data.filter((ele,i)=>{
      return ele.id==id
    })
    // console.log()
    cartDispatch(getCartData([...cartState.cart_data,newData]))
    setBtndisb(id)
  }
  

  return (
    <>
    <Navbar/>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}  gap={2}>
          {data &&
            data.map((ele) => {
              return (
                <Box key={ele.id} h="auto" boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} color={"black"}>
                  <Image
                    w="100%"
                    objectFit="cover"
                    src={ele.image}
                    alt={ele.title}
                  />
                  <Text>{ele.title}</Text>
                  <Text>{ele.price}</Text>
                  <Button disabled={btndisbl===ele.id} onClick={()=>handleAddToCart(ele.id)}>Add To Cart</Button>
                </Box>
              );
            })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
