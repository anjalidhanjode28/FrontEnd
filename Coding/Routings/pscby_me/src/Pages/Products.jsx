import { Link, useSearchParams } from "react-router-dom";
import React from "react";

const getCurrentPageUrl = (value) => {
    value = Number(value);
    if(typeof value === 'number' && value <= 0){
        value = 1;
    }
    if(!value){
        return 1;
    }
    return value;
};

function getUrl(url,sort,orderBy,filterBy){
    if(sort && orderBy && filterBy){
        url = `${url}&_sort=${sort}&_order=${orderBy}&category=${filterBy}`;
    }
    else if(sort && orderBy){
        url = `${url}&_sort=${sort}&_order=${orderBy}`;
    }
    else if(filterBy){
        url = `${url}&category=${filterBy}`;
    }
  return  url;
}


export const Products = () => {
    
    let [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = React.useState([]);
    const [totalCount, setTotalCount] = React.useState(0);
    const [orderBy, setOrderBy] = React.useState("");
    const [filterBy, setFilterBy] = React.useState("");
    const [page, setPage] = React.useState(
        getCurrentPageUrl(searchParams.get("page")) || 1
        );

    const limit = 6;
    const sort = "price";


    React.useEffect(()=>{
        let apiUrl = getUrl(
            `http://localhost:7070/posts?_page=${page}&_limit=${limit}`,
            sort,
            orderBy,
            filterBy
        );
       
        fetch(apiUrl)
        .then((res) => {
            setTotalCount(Number(res.headers.get("X-Total-Count")));
            return res.json();
        })
        .then((res) => {
            setData(res);
        });
    },[page,orderBy,filterBy]);


    React.useEffect(() => {
        let paramsObj = {page};
        if(orderBy){
            paramsObj.orderBy = orderBy;
        }
        if(filterBy){
            paramsObj.filterBy = filterBy;
        }
        setSearchParams(paramsObj);
    },[page,orderBy,filterBy]);


  return (
  <div style={{
    marginTop: "50px"
  }}>
    <button onClick={()=>setOrderBy("asc")}>Order by Price - ASCENDING</button>
    <button onClick={()=>setOrderBy("desc")}>Order by Price - DESCENDING</button>
    <button onClick={()=>setOrderBy("")}>Order by Price - RESET</button>
    <br/>
    <button onClick={()=>setFilterBy("Perfume")}>Perfume</button>
    <button onClick={()=>setFilterBy("Body-Spray")}>Body Spray</button>
    <button onClick={()=>setFilterBy("Deodorant")}>Deodorant</button>
    <button onClick={()=>setFilterBy("Scrub")}>Scrub</button>
    <button onClick={()=>setFilterBy("Cream")}>Cream</button>
    <button onClick={()=>setFilterBy("Face-serum")}>Face serum</button>
    <button onClick={()=>setFilterBy("Face-Mask")}>Face Mask</button>

    <button onClick={()=>setFilterBy("")}>Reset Filter</button>


    <div 
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "80%",
            margin: "auto",
            gap: "20px"
        }}>
        {data?.map((item) =>(
            <div 
                key={item.id}
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    padding: "2%"
                }}>
                <img src={item.img} height={150} width={150} alt="image"/>
                <p>{item.name}</p>
                <h2>{item.brand}</h2>
                <h3>{item.catagory}</h3>
                <h4>{item.price}</h4>
                <p>{item.rating}</p>
                <Link to={`/products/${item.id}`}><button>More Details</button></Link>
            </div>
        ))}
    </div>

    <div>
        <button disabled={page === 1} onClick={()=>setPage(page-1)}>PREV</button>
        <button>{page}</button>
        <button disabled={page === Math.ceil(totalCount/limit)} onClick={()=>setPage(page+1)}>NEXT</button>

    </div>
  </div>)
}