

import "./NavCard.css";

export const NavItem = ({label, onClick}) => (
    <li>
        
        <p onClick={onClick}>&#9671; {label}</p>
        
    </li>

);

