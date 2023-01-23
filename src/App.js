import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from "./components/Detalle";


import '../src/css/bootstrap.min.css'
import Resultado from "./components/Resultado";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />}/>;
        <Route path='/listado' element={<Listado />}/>;
        <Route path='/detalle' element={<Detalle />}/>;
        <Route path='/resultado' element={<Resultado />}/>;
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
