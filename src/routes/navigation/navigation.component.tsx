import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <Link to="/">
                    <div>Logo</div>
                </Link>
                <ul className="links-container">
                    <li>
                        <Link
                            className="nav-link"
                            to="/">HOME</Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link"
                            to="/signin">SIGN IN</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;