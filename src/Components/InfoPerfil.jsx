
import React from "react";
import Perfil from "../pages/Perfil.jsx";
import Usuarios from "../json/Usuarios.json"
const InfoPerfil = () => {
  const { usuarios } = Usuarios;
  const usuario = usuarios[0]

  return (
    <div>
      {usuario ? (
        <Perfil
          ra={usuario.ra}
          nome={usuario.nome}
          itinerario={usuario.itinerario}
          email={usuario.email}
        />
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
};


export default InfoPerfil;




