import { ContainerDia } from "../Styles/BoxSala";
import BoxSala from "./BoxSala";
const DiaSemana = ({ TextDia }) => {
  
  return (
    <>
      <ContainerDia>
        <BoxSala salaText={TextDia} statusDaSala={"4"} />
        <BoxSala salaText={"Sala 06"} statusDaSala={"1"} />
        <BoxSala salaText={"Sala 07"} statusDaSala={"2"} />
        {/* aqui vai puxar o dia conforme o textDia */}
      </ContainerDia>
    </>
  );
};

export default DiaSemana;
