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
      case "1": //Em planejamento
        return cores.Green;
      case "2": //Em aula
        return cores.Red;
      case "3": //Intervalo
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

export const ContainerDia = styled.div`
  background-color: ${cores.White};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 10vw;
  min-height: 30vh;
`;
export const HorarioSemana = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${cores.Green};
`;
