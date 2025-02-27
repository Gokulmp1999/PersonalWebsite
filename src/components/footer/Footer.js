import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import footerData from "../data/Footer-josn.json"; // Import the JSON file

function Footer() {
  // Function to render the correct icon based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaFacebook":
        return <FaFacebook />;
      case "FiInstagram":
        return <FiInstagram />;
      case "IoLogoTwitter":
        return <IoLogoTwitter />;
      default:
        return null;
    }
  };

  return (
    <footer>
      <h2>
        <a href="#">{footerData.name}</a>
      </h2>
      <ul className="permalinks">
        {footerData.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="footer__socials">
        {footerData.socials.map((social, index) => (
          <a key={index} href={social.url}>
            {renderIcon(social.icon)}
          </a>
        ))}
      </div>
      <div className="footer__copyright">
        <small dangerouslySetInnerHTML={{ __html: footerData.copyright }}></small>
      </div>
    </footer>
  );
}

export default Footer;