import { InfosLivro } from './InfosLivro'
import * as Style from './style'

interface ILivrosDestaqueProps {
    titulo: string,
    imgLivroPrincipal: string,
    imgLivro2: string,
    imgLivro3: string
}

export const LivrosDestaque = ({ titulo, imgLivroPrincipal, imgLivro2, imgLivro3 }: ILivrosDestaqueProps) => {
    return (
        <Style.ContainerLivrosDestaque>
            <h2 className='titulo'>{titulo}</h2>
            <div className="containerLivros">
                <div className='containerImagens'>
                    <img src={imgLivro2} alt="Imagem do livro de destaque" className='containerImagens__livro'/>
                    <img src={imgLivroPrincipal} alt="Imagem do livro de destaque" className='containerImagens__livro'/>
                    <img src={imgLivro3} alt="Imagem do livro de destaque" className='containerImagens__livro'/>
                </div>
                <div className="containerInfos">
                    <InfosLivro
                        nomeLivro='Liderança em Design'
                        descricaoLivro='Habilidades de gestão para alavancar sua carreira'
                        autorLivro='Vitor Zanini'
                        valorLivro='29,90'
                    />
                </div>
            </div>
        </Style.ContainerLivrosDestaque>
    )
}