import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

function Detalle () {

    const token = sessionStorage.getItem('token');

    const query = new URLSearchParams(window.location.search);

    let peliculaID = query.get('peliculaID');

    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${peliculaID}?api_key=366d34f04e06e342ce3d18fd161f4b14&language=es-ES`)
        .then( resp => {
            setPelicula(resp.data);
        })
        .catch( () => {
            swal('La pelicula no se encuentra');
        })
       
    }, [peliculaID]);



    return (
        <div className="m-5">
            { !token && <Navigate to='/' /> }

            { pelicula && 
             <>
            <h2 align='center' className="mb-5">Detalle de Pelicula</h2>
            <div className="row">
                <div className="col-3">
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="img-fluid" alt="pelicula" />
                </div>
                <div className="col-6">
                    <h3>{pelicula.title}</h3>
                    <p>
                        {pelicula.overview}
                    </p>
                    <ul>
                        {pelicula.genres.map( (gen) => <li key={gen.id}>{gen.name}</li>)}
                    </ul>
                    <Link className="btn btn-dark mt-5" to='/listado'>Volver</Link>
                </div>
            </div>
             </>

            }

        </div>
    )
}

export default Detalle;