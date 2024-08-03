import { ContainerDia, DivDiaSemana,DivBox } from "../Styles/BoxSala";
import InfoSala from "./InfoSala";
import dadosHorarios from "../horarios.json"; // Importe o arquivo JSON
import InfoDia from "./InfoDia";
import { useState } from "react";

const DiaSemana = ({ TextDia, idProfessorFromContainerGeral, DiaId }) => {
  const [professorId, setProfessorId] = useState(idProfessorFromContainerGeral);
  const professor = dadosHorarios.professores.find(
    (prof) => prof.id === professorId
  );

  const [diaNome, setDiaNome] = useState(TextDia);

  const horario = professor.horarios.find((day) => day.dia === diaNome);
  const horarioPorDia = horario.horarios_do_dia.map((time) => time.sala);

  return (
    <>
      <ContainerDia>
        <DivDiaSemana>
          <InfoDia TextDia={TextDia} statusDaSala={"4"} />
        
          {horario.horarios_do_dia.map((time, index) => (
            <div id={index}>
            <InfoSala
              statusDaSala={time.status}
              salaText={time.sala}
              salaHora={time.hora}
            />
            </div>
          ))}
        </DivDiaSemana>
      </ContainerDia>
    </>
  );
};

export default DiaSemana;

//         <BoxSala salaText={"Sala 07"} statusDaSala={"2"} />
//         aqui vai puxar o dia conforme o textDia
