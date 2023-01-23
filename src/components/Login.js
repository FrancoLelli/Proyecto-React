import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Navigate } from "react-router-dom";

function Login(){
    
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');


    const submitFormulario = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        if(email === '' || password === ''){
            swal('COMPLETAR LOS CAMPOS');
            return;
        }
        
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal('Datos incorrectos');
            return;
        }

        axios
        .post('http://challenge-react.alkemy.org', { email, password })
        .then(resp => {
            swal('Perfecto. Ingresaste correctamente');
            const token = resp.data.token;
            sessionStorage.setItem('token', token);
            navigate('/listado');
        })
    }

    return (
        <div align='center'>

            { token && <Navigate to='/listado' /> }

        <h2>Formulario</h2>
        <form onSubmit={submitFormulario}>
            <span>Correo Electronico</span>
            <br/>
            <input type="email" name="email"/>
            <br/>
            <span>Contrasenia</span>
            <br/>
            <input type="password" name="password"/>
            <br/>
            <br/>
            <button type="submit">Ingresar</button>
        </form>
        </div>
    )

}

export default Login;