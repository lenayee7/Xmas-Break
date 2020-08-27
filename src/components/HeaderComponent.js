import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <Navbar className="apple">
                    <div className="container">
                        <NavbarBrand href="/" className="menu-links">Xmas-Break</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        );
    }
  }

  export default Header;