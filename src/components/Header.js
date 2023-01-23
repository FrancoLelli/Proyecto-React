import { Link } from "react-router-dom";
import Buscardor from "./Buscador";

function Header() {
    return (
            <header className="bg-grey">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">Movies</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/listado">Listado</Link>
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