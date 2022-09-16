import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Users = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();

  // on component load
  // i want to get a list of users in this page
  // i want to render it to the UI

  useEffect(() => {
    getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setData(res);
    });
  }, [page]);

  // const isAuth = true;

  return (
    <>
      <h1>Users</h1>
      {/* <button onClick={() => navigate("/")}>
        GO TO HOME PAGE USING useNavigate hook
      </button>
      <Link to="/">
        <button>GO TO HOME PAGE USING Link</button>
      </Link> */}

      <div>
        {data?.data?.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img src={user.avatar} alt="prof-pic" />
            <Link to={`/users/${user.id}`}>More Details</Link>
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button disabled={page === 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
};

export default Users;
