import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Buscador () {

    const navigate = useNavigate();

    const submitFormulario = e => {
        e.preventDefault();
        const palabraClave = e.currentTarget.keyword.value.trim();
        
        if(palabraClave.length === 0){
            swal('Por favor, ingresar datos al campo');
        }else{
            e.currentTarget.keyword.value = '';
            navigate(`/resultado?nombrePelicula=${palabraClave}`);
        }
    }

    return (
        <form onSubmit={submitFormulario} className='d-flex'>
            <input type="text" name="keyword" className="mx-2" placeholder="Buscar..."/>
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;