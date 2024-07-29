import DiaSemana from "./DiaContainer";
import { ContainerGeral, HorarioSemana } from "../Styles/BoxSala";
const ContainerSalas = () => {
  return (
    <>
      <ContainerGeral>
        <HorarioSemana>
          <DiaSemana TextDia="Segunda" />
          <DiaSemana TextDia="Terça" />
          <DiaSemana TextDia="Quarta" />
          <DiaSemana TextDia="Quinta" />
          <DiaSemana TextDia="Sexta" />
        </HorarioSemana>
      </ContainerGeral>
    </>
  );
};

export default ContainerSalas;
