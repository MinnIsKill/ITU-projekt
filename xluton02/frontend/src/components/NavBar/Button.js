/*
 * Author: Jan Lutonský xluton02
 */
import {NavLink as LINK} from 'react-router-dom';

function NavBarButton( prop ){
    return(<LINK to={ prop.href } >{ prop.text }</LINK>);
}

export default NavBarButton;
