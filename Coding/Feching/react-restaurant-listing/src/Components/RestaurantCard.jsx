import { Link } from "react-router-dom";

export const transformTypeToString = (type) => {
  switch(type){
    case "fine_dining":
      return "Fine Dining"
    case "ethnic":
      return "Ethnic"
    case "fast_food":
      return "Fast Food"
    case "cafe":
      return "Cafe"
    case "casual_dining":
      return "Casual Dining"
    default:
      return type
  }
};

export default function RestaurantCard({
  name,
  reting,
  type,
  price_starts_from,
  id
}) {


  return (
    <tr data-testid="item">
      <td>
        <Link 
            data-testid="name"
            to={`/restaurants/${id}`}>
              {name}
        </Link>
      </td>
      <td data-testid="rating"></td>
      <td data-testid="type"></td>
      <td data-testid="price"></td>
    </tr>
  );
}
