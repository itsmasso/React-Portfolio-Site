
import underline from "../../assets/nav_underline.svg";
import "./NavCard.css";

export const NavItem = ({label, isActive, onClick}) => (
    <li>
        <p onClick={onClick}>{label}</p>
        {isActive ? <img src={underline} alt="" /> : <> </>}
    </li>

);