import * as Style from './style';

interface ISobreProduto {
    titulo: string,
    informacoes: string
}

export const SobreProduto = ({ titulo, informacoes }: ISobreProduto) => {
    
    return (
        <Style.ContainerSobreProduto>
            <h3 className="tituloProduto">{titulo}</h3>
            <p className="descricaoProduto">{informacoes}</p>
        </Style.ContainerSobreProduto>
    )
}