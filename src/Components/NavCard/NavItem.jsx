
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavCard.css";

export const NavItem = ({section, label, onClick}) => (
    <li>
        <AnchorLink className="anchor-link" offset={50} href={`#${section}`}>
            <p onClick={onClick}>&#9671; {label}</p>
        </AnchorLink>
        
        
    </li>

);

