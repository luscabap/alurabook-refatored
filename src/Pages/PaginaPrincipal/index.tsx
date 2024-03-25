import { Header } from '../../Components/Header';
import { LivrosDestaque } from '../../Components/LivrosDestaque';
import * as Style from './style';

export const PaginaPrincipal = () => {
    return (
        <>
            <Header />
            <Style.ContainerComeco>
                <h2 className="containerSection__titulo">Já sabe por onde começar?</h2>
                <p className="containerSection__texto">Encontre em nossa estante o que precisa para seu desenvolvimento</p>
                <input type="text" placeholder="Qual será sua próxima leitura?" className="containerSection__input"/>
            </Style.ContainerComeco>
            <LivrosDestaque 
                titulo='últimos lançamentos'
                imgLivroPrincipal='livro1.svg'
                imgLivro2='livro2.svg'
                imgLivro3='livro3.svg'
            />

            <LivrosDestaque 
                titulo='mais vendidos'
                imgLivroPrincipal='livro4.svg'
                imgLivro2='livro5.svg'
                imgLivro3='livro6.svg'
            />
        </>
    )
}