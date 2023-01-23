import { Link } from "react-router-dom";
import Buscardor from "./Buscador";

function Header() {
    return (
            <header className="bg-grey">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Movies</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listado">Listado</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favoritos">Favoritos</Link>
                                </li>
                            </ul>
                        </div>
                        <Buscardor />
                    </div>
                </nav>
            </header>
    )
}

export default Header;