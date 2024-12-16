import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

function SigninHeader() {

  const showMenu = () => {
    document.body.classList.toggle("menu-show");
  };

  return (
    <Navbar
      expand="md"
      className="navbar-log position-relative navbar-light ms-0 py-3"
    >
       <div className="navbar-wrap d-flex align-items-center justify-content-between flex-wrap">
        <Navbar.Brand className="" href="#">
          {" "}
          <img src={logo} alt="mob orbitX" className="img-fluid me-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarLog" onClick={showMenu}/>
        <Navbar.Collapse id="navbarLog">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/about-us"><i className="fa fa-user-friends me-2"></i>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us"><i className="fa-solid fa-phone me-2"></i>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default SigninHeader;
