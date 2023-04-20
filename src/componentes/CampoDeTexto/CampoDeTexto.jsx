import styled from "@emotion/styled"

const LabelEstlizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;   
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    
`
const InputlEstlizado = styled.input`
    display: block;
    width: 100%;
    margin-top: ${props => props.theme.espacamentos.xs};
    margin-bottom: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`

export const CampoDeTexto = ( { titulo }) => {
    return (<LabelEstlizada>
        {titulo}
        <InputlEstlizado />
    </LabelEstlizada>)
}