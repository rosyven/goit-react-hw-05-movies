import Loading from "components/Loading/Loading";
import React, { Suspense } from "react";
import { Header, Nav } from "./SharedLayout.styled";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                    </ul>
                </Nav>
            </Header>
            <Suspense fallback={<Loading />}>
                <Outlet/>
            </Suspense>
        </div>
    )
}
export default SharedLayout;