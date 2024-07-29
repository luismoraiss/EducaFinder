import { ContainerBox } from "../Styles/BoxSala";

const BoxSala = ({ salaText, statusDaSala }) => {
  return (
    <>
      <ContainerBox statusSala={statusDaSala}>
        {salaText = salaText}
      </ContainerBox>
    </>
  );
};

export default BoxSala;