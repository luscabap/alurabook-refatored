import { ISecaoDestacadaProps } from "../../interface";
import * as Style from './style'

export const SecaoDestacada = ({ titulo, botoes }:ISecaoDestacadaProps) => {
    return (
        <Style.ContainerSecaoDestacada>        
            <h2 className="tituloCategorias">{titulo}</h2>
            <div className="containerTags">
                {botoes.map((item, index) => <button key={index}>{item}</button>)}
            </div>
        </Style.ContainerSecaoDestacada>
    )
}