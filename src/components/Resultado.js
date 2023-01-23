import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Resultado () {

    const token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);

    let keyword = query.get('nombrePelicula');

    console.log(keyword);
    
    const [ peliculasBuscadas, setBuscador] = useState([]);
    
    useEffect(() => {
        let endPoint = `https://api.themoviedb.org/3/search/movie?api_key=366d34f04e06e342ce3d18fd161f4b14&language=es-ES&page=1&include_adult=false&query=${keyword}`;
        axios.get(endPoint)
        .then( resp => {
            const peliculas = resp.data.results;
            setBuscador(peliculas);
        })
        .catch( err => {
            swal('Hubo un error. Intenta mas tarde')
        })
    });

    return(
        <>
            { !token && <Navigate to='/' /> }

            <p className="m-2" align='center'>Estas buscando: {keyword}</p>

            <div className="row m-5">
                {
                    peliculasBuscadas.map((pelicula, key) => {

                        return (
                            <div className="col-3 mt-2" key={key}>
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{pelicula.title.substring(0, 80)}</h5>
                                        <Link className="btn btn-dark" to={`/detalle?peliculaID=${ pelicula.id }`}>Ver Mas</Link>
                                    </div>
                                </div>
                            </div>

                        )
                        })
                }
            </div>
        </>
    )
}

export default Resultado;