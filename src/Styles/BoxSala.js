import { styled } from "styled-components";
import { cores } from "./cores";

export const ContainerBox = styled.div`
  width: 7vw;
  height: 7vh;
  border-radius: 10px;
  color: ${cores.White};
  display:flex;
  align-items:center;
  justify-content:center;  

  background-color: ${props => {
    switch (props.statusSala) {
      case 'Em planejamento':
        return cores.Green;
      case 'Em aula':
        return cores.Red;
      case 'Intervalo':
        return cores.Yellow;
      default:
        return cores.LightGray;
    }
  }
};
`;

