import DiaSemana from "./DiaContainer";
import { ContainerGeral, HorarioSemana } from "../Styles/BoxSala";
const ContainerSalas = () => {
  return (
    <>
      <ContainerGeral>
        <HorarioSemana>
          <DiaSemana
            TextDia="Segunda-feira"
            idProfessorFromContainerGeral={1} //idProfessorFromSelect
            DiaId = {0}
          />
          <DiaSemana
            TextDia="Terça-feira"
            idProfessorFromContainerGeral={1} //idProfessorFromSelect
            DiaId = {1}

          />
          <DiaSemana
            TextDia="Quarta-feira"
            idProfessorFromContainerGeral={1} //idProfessorFromSelect
            DiaId = {2}
          />
          <DiaSemana
            TextDia="Quinta-feira"
            idProfessorFromContainerGeral={1} //idProfessorFromSelect
            DiaId = {3}
          />  
          <DiaSemana
            TextDia="Sexta-feira"
            idProfessorFromContainerGeral={1} //idProfessorFromSelect
            DiaId = {4}
          />
        </HorarioSemana>
      </ContainerGeral>
    </>
  );
};

export default ContainerSalas;
