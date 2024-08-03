import { ContainerBox, Horario, DivBox } from "../Styles/BoxSala";

const InfoSala = ({ salaText, statusDaSala, professor, salaHora }) => {
  return (
    <>
      <DivBox>
        <Horario>{salaHora}</Horario>
        <ContainerBox statusSala={statusDaSala}>
          {(salaText = salaText)}
        </ContainerBox>
      </DivBox>
    </>
  );
};

export default InfoSala;
