import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';


const Navigation = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <NavbarBrand href="/"> Mon resto </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Navigation;