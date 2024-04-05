import { useNavigate } from 'react-router-dom'
import { ILivroProps } from '../../interface/ILivroProps'
import { formatador } from '../../util/formatadorMoeda'
import * as Style from './style'

interface IMiniCardProps {
    livro: ILivroProps
}


export const MiniCard = ({ livro }: IMiniCardProps) => {
    const valorMinimo = Math.min(...livro.opcoesCompra.map(item => item.preco)) || 0;
    const navigate = useNavigate();

    return (
        <Style.ContainerMiniCard>
            <img src={livro.imagemCapa} alt={`Livro ${livro.titulo} escrito por ${livro.autor}`}/>
            <h2 className='tituloLivro'>{livro.titulo}</h2>
            <p>A partir de:<br></br><strong>{formatador.format(valorMinimo)}</strong></p>
            <button className='botao' onClick={() => navigate(`/livros/${livro.slug}`)}>Comprar</button>
        </Style.ContainerMiniCard>
    )
}