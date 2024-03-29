import { LivrosDestaque } from '../../Components/LivrosDestaque';
import * as Style from './style';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const PaginaPrincipal = () => {

    const categorias = [
        'Android',
        'OO',
        'Marketing Digital',
        'Agile',
        'Startups',
        'HTML & CS',
        'Java',
        'Python',
    ]

    return (
        <>
            <Style.ContainerComeco>
                <h2 className="containerSection__titulo">Já sabe por onde começar?</h2>
                <p className="containerSection__texto">Encontre em nossa estante o que precisa para seu desenvolvimento</p>
                <div className="containerSection__containerInput">
                    <MagnifyingGlass size={24} color='#FFF' className='containerSection__icone'/>
                    <input type="text" placeholder="Qual será sua próxima leitura?" className="containerSection__containerInput__input"/>
                </div>
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

            <Style.ContainerCategorias>
                <h3 className='tituloCategorias'>Categorias mais buscadas</h3>
                <div className="containerTags">
                    {categorias.map((item, index) => <button key={index}>{item}</button>)}
                </div>
            </Style.ContainerCategorias>

            <Style.ContainerNovidades>
                <div>
                    <h3 className='tituloNovidades'>Fique por dentro das novidades</h3>
                    <p className='descricaoNovidades'>Atualizações de e-books, novos livros,<br></br> promoções e outros.</p>
                </div>
                <input placeholder='Cadastre seu e-mail' className='inputNovidades'/>
            </Style.ContainerNovidades>
        </>
    )
}