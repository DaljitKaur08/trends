import { NavLink } from "react-router-dom";
function Header (){
    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="header-list">
                        <li>
                            <NavLink className={({isActive}) => (isActive ? 'active': '')} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className ={({isActive}) => (isActive ?'active': '')} to='/product'>Product</NavLink>
                        </li>
                        <li> 
                            <NavLink className={({isActive}) => (isActive ?'active' : '')} to ='/cart'>Cart</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;