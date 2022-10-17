
import { Route ,Routes } from "react-router-dom";
import SingleTask from "./SingleTask";
import Todos from "./Todos";
import Edit from "./EditPage";

export default function AllRoutes(){

    return (
    <Routes>
        <Route path="/tasks/:id" element={<SingleTask />}></Route>
        <Route path="/" element={<Todos />}>Todos</Route>
        <Route path="/edit/:id" element={<Edit />}>Edit Page</Route>
    </Routes>
    );
}