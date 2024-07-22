import { ContainerBox } from "../Styles/BoxSala"

const BoxSala = ({salaText,statusSala})=>{
    return(
    <>
        <ContainerBox>
            {salaText}
            {props.status ="vazio"}
        </ContainerBox>    
    </>
    )
}

export default BoxSala