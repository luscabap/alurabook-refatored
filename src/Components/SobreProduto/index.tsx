import { IAutorProps } from "../../interface/IAutorProps";
import { ILivroProps } from "../../interface/ILivroProps";
import * as Style from './style'

interface ISobreProduto {
    titulo: string,
    informacoes: IAutorProps | ILivroProps
}

export const SobreProduto = ({ titulo, informacoes }: ISobreProduto) => {
    
    return (
        <Style.ContainerSobreProduto>
            <h3 className="tituloProduto">{titulo}</h3>
            <p className="descricaoProduto">{informacoes?.sobre}</p>
        </Style.ContainerSobreProduto>
    )
}