import { Link, Navigate } from "react-router-dom";


function Favoritos (props) {

    console.log(props.favoritos);

    const token = sessionStorage.getItem('token');

    // const [peliculasFav, setFav] = useState([]);

    // useEffect(()=> {

    //     let moviesStorage = localStorage.getItem('favs');

    //     if(moviesStorage !== null){
    //         let movieArray = JSON.parse(moviesStorage);
    //         setFav(movieArray);
    //     }
    // }, [])

    return (
        <>
            { !token && <Navigate to='/' /> }

            <h2 align='center' className='mt-3'>Listado de Favortios</h2>

            <div className="row m-5">
            {
                props.favoritos.map((pelicula, key) => {

                    return (
                        <div className="col-3 mt-2" key={key}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500${pelicula.img}`} className="card-img-top" alt="..." />
                                <button className="fav-btn" onClick={ props.addOrRemoveFavs } data-movieid={pelicula.id}> ❤️ </button>
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

export default Favoritos;