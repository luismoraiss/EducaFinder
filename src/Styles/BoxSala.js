import { styled } from "styled-components";
import { cores } from "./cores";

export const ContainerBox = styled.div`
  width: 7vw;
  height: 7vh;
  border-radius: 10px;
  color: ${cores.White};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => {
    switch (props.statusSala) {
      case "Em planejamento": //Em planejamento
        return cores.Green;
      case "Em aula": //Em aula
        return cores.Red;
      case "Intervalo": //Intervalo
        return cores.Yellow;
      case "4": //Dia
        return cores.DarkGray;
      default:
        return cores.LightGray;
    }
  }};
`;

export const ContainerGeral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${cores.Blue};
`;

export const HorarioSemana = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 50vh;
  width: 50vw;
  background-color: ${cores.Green};
`;

export const ContainerDia = styled.div`
  /* background-color: ${cores.White}; */
  border-color: ${cores.Black};
  border: 5px solid;
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 10vw;
  min-height: 30vh;
`;

export const DivDiaSemana = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Horario = styled.span`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 600;
`;

export const DivBox = styled.div``;
