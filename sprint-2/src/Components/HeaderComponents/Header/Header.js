import React from "react";
import "./Header.scss";

import logoImg from "../../../assets/Logo/Logo-brainflix.svg";
import Upload from "../../../assets/Icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Btn from "../Btn/Btn";
import Avatar from "../Avatar/Avatar";
import Form from "../Form/Form";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <Logo url={logoImg} alt="logo" className="logo" />
        </Link>

        <Form />
        <div className="header--inner">
          <div className="btn__box">
            <Link to="/UploadVideo" className="Btn--noline">
              <Btn
                url={Upload}
                alt="upload button"
                text=" UPLOAD"
                className="Btn "
              />
            </Link>
            <Avatar className="avatar" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
