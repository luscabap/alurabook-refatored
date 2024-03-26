import * as Style from './style';
import { ShoppingBagOpen, Heart } from '@phosphor-icons/react'

interface IInfosLivroProps {
    nomeLivro: string,
    descricaoLivro: string,
    autorLivro: string,
    valorLivro: string
}

export const InfosLivro = ({ nomeLivro, descricaoLivro, autorLivro, valorLivro }: IInfosLivroProps) => {
    return (
        <Style.ContainerInfosLivro>
            <Style.HeaderContainer>
                <h2 className='headerContainer__icone__tituloContainer'>Sobre o livro:</h2>
                <div>
                    <ShoppingBagOpen size={38} color='#002F52' className='headerContainer__icone'/>
                    <Heart size={38} color='#002F52' className='headerContainer__icone'/>
                </div>
            </Style.HeaderContainer>
            <h3 className='tituloLivro'>{nomeLivro}</h3>
            <p className='descricao'>{descricaoLivro}</p>
            <p className='autor'>Por: {autorLivro}</p>
            <Style.FooterContainer>
                <p className='infosPreco'>A partir de: <br></br><strong className='infosPreco__valor'>R$ {valorLivro}</strong></p>
                <button className='botao'>Comprar</button>
            </Style.FooterContainer>
        </Style.ContainerInfosLivro>
    )
}