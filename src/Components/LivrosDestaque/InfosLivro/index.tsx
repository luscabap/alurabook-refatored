import * as Style from './style'

interface IInfosLivroProps {
    nomeLivro: string,
    descricaoLivro: string,
    autorLivro: string,
    valorLivro: string
}

export const InfosLivro = ({ nomeLivro, descricaoLivro, autorLivro, valorLivro }: IInfosLivroProps) => {
    return (
        <Style.ContainerInfosLivro>
            <h2 className='tituloContainer'>Sobre o livro:</h2>
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