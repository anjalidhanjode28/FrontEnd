import { useEffect, useState } from "react";
import AddCity from "./AddCity";
import { addCity, getCities, handleDeleteById, handleToggleById } from "./api";

function Cities() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [status, setStatus] = useState(false);
  // order: DESC | ASC
  useEffect(() => {
    handleGetCity(page);
  }, [page]);

  function handleGetCity(page) {
    getCities({
      page: page,
      limit: 5,
      sort: "name",
      order: "ASC"
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddCity(data) {
    addCity(data).then((res) => {
      console.log(res);
      setLoading(true);
      handleGetCity(page);
    });
  }
  function handleDelete(id) {
    handleDeleteById(id).then((res) => {
      setLoading(true);
      handleGetCity(page);
    });
  }
  function handleToggle(id, status) {
    handleToggleById(id, status).then((res) => {
      setLoading(true);
      handleGetCity(page);
    });
  }

  return (
    <div>
      <AddCity onAddCity={handleAddCity} />
      <div>{loading && "Loading!"}</div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center"
          }}
        >
          <div>{item.name}</div>
          {/* <div>{item.population}</div> */}
          <div>{item.status ? "DONE" : "NOT DONE"}</div>
          <button onClick={() => handleToggle(item.id, !item.status)}>
            Toggle
          </button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button disabled>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}

export default Cities;
