import { ContainerBox,DivTitleBox } from "../Styles/BoxSala";

const InfoDia = ({ TextDia, statusDaSala}) => {
  return (
    <>
    <DivTitleBox>
      <ContainerBox statusSala={statusDaSala}>
        {(TextDia = TextDia)}
      </ContainerBox>
      </DivTitleBox>
    </>
  );
};

export default InfoDia;
