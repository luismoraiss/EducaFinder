import { ContainerDia, DivDiaSemana } from "../Styles/BoxSala";
import BoxSala from "./InfoSala";
import dadosHorarios from "../horarios.json"; // Importe o arquivo JSON
import InfoDia from "./InfoDia";

const DiaSemana = ({ TextDia }) => {
  const horarios = dadosHorarios[TextDia] || [];
  const encontraProfessor = ()=>{
    {dadosHorarios.professores.map((horario, index) => (
      horario.forEach(horario,index)
    ))}
  }
  return (
    <>
      <ContainerDia>
        <DivDiaSemana>
          <InfoDia TextDia={TextDia} statusDaSala={"4"} />
        </DivDiaSemana>

        {dadosHorarios.professores.map((horario, index) => (
          <div key={index}>
            <BoxSala
              // statusDaSala={horario}
              salaText={horario.nome}
              // salaHora={horario.hora}
            />
          </div>
        ))}
      </ContainerDia>
    </>
  );
};

export default DiaSemana;

//         <BoxSala salaText={"Sala 07"} statusDaSala={"2"} />
//         aqui vai puxar o dia conforme o textDia 
