import { useEffect, useReducer } from "react";
import "./App.css";
import {reducer} from "./reducer";
import { initialState } from "./initialState";
import {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
} from "./actionCreators";
import axios from "axios";
import ProductCard from "./Components/ProductCard";

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = () => {

    dispatch(getProductRequest());

    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    .then((res) => {
      dispatch(getProductSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(getProductFailure());
    });
  };

  useEffect(() => {
    fetchProducts();
  },[]);


  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B20 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */
           reducerState.isLoading && <div data-tesid="loading">Loading...</div>
          }
          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          {reducerState.isError && (
          <div data-testid="error" style={{ color: "red" }}>
            Error in fetching details
          </div>
          )}
          {/* Map through the products data, here, by passing the data to the ProductCards component */
           reducerState.data.length > 0 && (
            <>
              {
                reducerState.data.map((item) => {
                  return (
                      <ProductCard 
                        key={item.id} 
                        item={item}
                      />
                    );
                  })
              }
            </>
           )
          
          }
        </div>
      </div>
    </div>
  );
}

export default App;
