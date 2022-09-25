import axios from "axios";

export function getCities(params = {}) {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/cities", {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
}

export function addCity(data = {}) {
  return axios.post("https://json-server-mocker-masai.herokuapp.com/cities", {
    name: data.name,
    population: data.population,
    country: data.country
  });
}

export function handleDeleteById(id) {
  return axios({
    baseURL: "https://json-server-mocker-masai.herokuapp.com/cities",
    url: `/${id}`,
    method: "DELETE"
  });
}

// export function handleDeleteById(id) {
//   return axios.delete(
//     `https://json-server-mocker-masai.herokuapp.com/cities/${id}`
//   );
// }

export function handleToggleById(id, status) {
  return axios({
    baseURL: "https://json-server-mocker-masai.herokuapp.com/cities",
    url: `/${id}`,
    data: { status: status },
    method: "PATCH"
  });
}
