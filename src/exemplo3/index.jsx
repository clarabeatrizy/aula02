import { useEffect, useState } from "react";

export default function App() {
  
  const [usuarios, setUsuarios] = useState([]); 

  useEffect(() => { 
    const buscarUsuario = async () => {
      const resposta = await fetch('https://randomuser.me/api');
      const dados = await resposta.json();
      setUsuarios(dados.results); 
    }
    buscarUsuario(); 
  }, []); 

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.login.uuid}>
            {usuario.name.first} {usuario.name.last} - {usuario.email}
          </li>
        ))}
      </ul>
    </>
  );
}
