import { ContainerBox,DivBox } from "../Styles/BoxSala";

const InfoDia = ({ TextDia, statusDaSala}) => {
  return (
    <>
    <DivBox>
      <ContainerBox statusSala={statusDaSala}>
        {(TextDia = TextDia)}
      </ContainerBox>
      </DivBox>
    </>
  );
};

export default InfoDia;
