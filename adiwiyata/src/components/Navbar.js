import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  // deklarasi variabel state click
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  //----- method dropdown menu dengan menggunakan react hook
  //deklarasi vairabel state click
  // const [click, setClick] = useState(false);
  // function untuk mengubah nilai state click
  // const toggleClick = () => setClick(!click);

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + "/images/logo-ts.png"} width="130" />
          </Link>
          <div
            className="menu-icon"
            onClick={() => this.setState({ click: !this.state.click })} //method untuk mengubah variabel click
          >
            <i className={this.state.click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => this.setState({ click: false })}
              >
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={() => this.setState({ click: false })}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kalender"
                className="nav-links"
                onClick={() => this.setState({ click: false })}
              >
                Kalender
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
