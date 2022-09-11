import "./styles.css";
import Button from "./Components/Button";
import Avatar from "./Components/Avatar";

const users = [
  {
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/105616033?v=4",
    name: "Lokesh Patidar"
  }
];

const userDetails = users.map((user) => (
  <Avatar key={user.id} src={user.avatar_url} name={user.name} />
));

export default function App() {
  return (
    <div className="App">
      {userDetails}
      <h1>Hello, Lokesh!</h1>
      <Button text="Lokesh Click me!"></Button>
    </div>
  );
}
