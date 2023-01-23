import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from "./components/Detalle";
import Resultado from "./components/Resultado";
import Favoritos from './components/Favoritos'
import swal from 'sweetalert'
import { useEffect, useState } from "react";


import '../src/css/bootstrap.min.css';
import '../src/css/app.css';



function App() {

  const [favoritos, setFav] = useState([]);

    useEffect(()=> {

        let moviesStorage = localStorage.getItem('favs');

        if(moviesStorage !== null){
            let movieArray = JSON.parse(moviesStorage);
            setFav(movieArray);
        }
    }, [])

  const favMovies = localStorage.getItem('favs');

  let peliculasFav;

  if (favMovies === null) {
    peliculasFav = [];
  } else {
    peliculasFav = JSON.parse(favMovies);
  }

  
  const addOrRemoveFavs = e => {
    const btn = e.currentTarget;
    const parentBtn = btn.parentElement;

    let img = parentBtn.querySelector('img').getAttribute('src')
    let title = parentBtn.querySelector('h5').innerText;
    let overview = parentBtn.querySelector('p').innerText;

    let movieObj = {
      id: btn.dataset.movieid,
      img, title, overview
    };

    let existMovie = peliculasFav.some( pelicula => {
      return pelicula.id === movieObj.id;
    } )

     if(!existMovie){
       peliculasFav.push(movieObj);
       swal('Agregado a favoritos')
       localStorage.setItem('favs', JSON.stringify(peliculasFav));
       setFav(peliculasFav);

     }else{   
        let movieOut = peliculasFav.filter( pelicula => {
          return pelicula.id !== movieObj.id;
        })
        swal('Eliminado de favoritos')
        localStorage.setItem('favs', JSON.stringify(movieOut));
        setFav(movieOut);

     }

  }

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />}/>;
        <Route path='/listado' element={<Listado addOrRemoveFavs={ addOrRemoveFavs } />}/>;
        <Route path='/detalle' element={<Detalle />}/>;
        <Route path='/resultado' element={<Resultado addOrRemoveFavs={ addOrRemoveFavs } />}/>;
        <Route path='/favoritos' element={<Favoritos favoritos={ favoritos } addOrRemoveFavs={ addOrRemoveFavs }/>}/>;
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
