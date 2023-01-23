import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate  } from "react-router-dom";
import swal from "sweetalert";


function Listado ( prop ){

    const token = sessionStorage.getItem('token');

    const api = 'https://api.themoviedb.org/3/discover/movie?api_key=366d34f04e06e342ce3d18fd161f4b14';

    const [ movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get(api)
        .then( resp => {
            const peliculas = resp.data;
            setMovieList(peliculas.results);
        })
        .catch( err => {
            swal('Hubo un error. Intenta mas tarde')
        })
    }, [setMovieList])

    return (
        <>
            { !token && <Navigate to='/' /> }

            <h2 align='center' className='mt-3'>Listado de Peliculas</h2>

            <div className="row m-5">
            {
                movieList.map((pelicula, key) => {

                    return (
                        <div className="col-3 mt-2" key={key}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt="..." />
                                <button className="fav-btn" onClick={ prop.addOrRemoveFavs } data-movieid={pelicula.id}> 🖤 </button>
                                <div className="card-body">
                                    <h5 className="card-title">{pelicula.title.substring(0, 80)}</h5>
                                    <p className="card-text">{pelicula.overview.substring(0, 100)}...</p>
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

export default Listado