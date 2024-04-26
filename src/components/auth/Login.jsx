import { useState, useEffect } from "react";
import { initDatabase } from "../../config/firebaseConfig";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  let redireccion = useNavigate()


  async function consultarUsuarios() {
    let colectionUsuarios = collection(initDatabase, "usuarios");
    let resultado = await getDocs(colectionUsuarios);
    let infoUsuarios = resultado.docs
    setUsers(infoUsuarios.map((doc)=> ({...doc.data()})));
  }

 useEffect(()=>{
  consultarUsuarios()
 }, [])

  function buscarUsuario() {
    let userExist = users.some((item )=> item.user === user  )
    return userExist
  }

  function iniciarSesion() {
    if (buscarUsuario()){
      Swal.fire({
        title: "Bien Venido!",
        text: "Sera redireccionado al Home!",
        icon: "success"
      });
      redireccion('/home')
    }else{
      Swal.fire({
        title: "error!",
        text: "Usuario y/o contraseña incorrecto o no existe!",
        icon: "error"
      });
    }
  }

  return (
    <form>
      <input
        onChange={(e) => setUser(e.target.value)}
        placeholder="Usuario"
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo"
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        type="text"
        name=""
        id=""
      />
      <input
        onClick={iniciarSesion}
        type="button"
        value="Iniciar Sesión"
        name=""
        id=""
      />
    </form>
  );
};

export default Login;
