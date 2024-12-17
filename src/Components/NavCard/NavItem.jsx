

import "./NavCard.css";

export const NavItem = ({label, isActive, onClick}) => (
    <li>
        
        <p onClick={onClick}>&#9671; {label}</p>
        {/*isActive ? <img src={underline} alt="" /> : <> </>*/}
    </li>

);