import Navbar from "../components/navigation/Navbar";
import { Outlet, NavLink } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Navbar />
            <div className="m-4">
               <Outlet />
            </div>
        </>
    )
}