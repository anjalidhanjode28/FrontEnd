
import React from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};



export default function SingleTask(){


    const { id } = useParams();
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      getData(`http://localhost:8080/todos/${id}`).then((res) =>
    //   console.log(res)
        setData(res)
      );
    }, [id]);
  
    console.log(data);
    return (
      <>
        <p>
          Tasks : {data.title}
        </p>
        <p>Status: {data.status?"Completed" : "Not Completed"}</p>
        <Link to="/">GO BACK</Link>
      </>
    );
  };