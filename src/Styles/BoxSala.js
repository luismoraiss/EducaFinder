import { styled } from "styled-components";
import { cores } from "./cores";

export const ContainerBox = styled.div`
  width: 7vw;
  height: 7vh;
  border-radius: 10px;
  background-color: ${cores.LightGray};
  color: ${cores.White};
  display:flex;
  align-items:center;
  justify-content:center;  

  ${props =>
    props.status === 'vazio' &&
    css`
      background-color: #000; // Cinza neutro
      &:hover {
        background-color: #bbbbbb;
      }
    `}
`;
