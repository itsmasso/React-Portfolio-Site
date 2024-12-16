import AnchorLink from "react-anchor-link-smooth-scroll";
import underline from "../../assets/nav_underline.svg";
import "./Navbar.css";

export const NavItem = ({section, label, isActive, onClick}) => (
    <li>
        <AnchorLink className="anchor-link" offset={50} href={`#${section}`}>
            <p onClick={onClick}>{label}</p>
        </AnchorLink>
        {isActive ? <img src={underline} alt="" /> : <> </>}
    </li>

);