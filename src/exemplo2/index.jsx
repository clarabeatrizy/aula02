import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 
    const buscarUsuario = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const dados = await response.json();
      setFotos(dados);
    }
    buscarUsuario();
  }, []); // O array vazio garante que o efeito só rode uma vez quando o componente é montado.

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(foto => (
          <li key={foto.id}>
            <img src={foto.thumbnailUrl} alt={foto.title} />
            <p>{foto.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
