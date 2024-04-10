import { formatador } from '../../util/formatadorMoeda'
import * as Style from './style'

interface ICardFlutuanteProps {
    imagem: string,
    titulo: string,
    autor: string,
    quantidade: number,
    preco: number
}

export const CardFlutuante = ({ autor, imagem, preco, quantidade, titulo }: ICardFlutuanteProps) => {

    const valorLivro = formatador.format(preco)
    
    return (
        <Style.ContainerCardFlutuante>
            <img src={imagem} alt={`Livro ${titulo} escrito por ${autor}`} className='imagem'/>
            <div className='containerInfos'>
                <h2 className='containerInfos__titulo'>{titulo}</h2>
                <p className='containerInfos__autor'>{autor}</p>
                <p className='containerInfos__quantidade'>{quantidade} {quantidade >= 2 ? 'unidades' : 'unidade'}</p>
                <p className='containerInfos__valor'>{valorLivro}</p>
            </div>
        </Style.ContainerCardFlutuante>
    )
}