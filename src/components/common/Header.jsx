import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "../../assets/styles/custom-colors.scss";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

const nav__links = [
  {
    display: "Inicio",
    path: "/home",
  },
  {
    display: "Productos",
    path: "/products",
  },
  {
    display: "Carrito",
    path: "/cart",
  },
  {
    display: "Contacto",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <MDBNavbar expand="lg" light bgColor="artelak-lightblue">
        <MDBContainer fluid>
          <MDBNavbarNav>
            {nav__links.map((item, index) => (
              <MDBNavbarItem key={index}>
                <MDBNavbarLink
                  aria-current="page"
                  href={item.path}
                  style={{ color: "#12284C" }}
                >
                  {item.display}
                </MDBNavbarLink>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};

export default Header;
