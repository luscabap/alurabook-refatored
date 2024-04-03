import { useQuery } from '@tanstack/react-query';
import { LivrosDestaque } from '../../Components/LivrosDestaque';
import { SecaoDestacada } from '../../Components/SecaoDestacada';
import * as Style from './style';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { obterLivroDestaque } from '../../http';

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

    const { data: lancamentos } = useQuery(['lancamentos'], () => obterLivroDestaque('lancamentos'))
    const { data: maisVendidos } = useQuery(['maisVendidos'], () => obterLivroDestaque('mais-vendidos'))
    console.log(lancamentos)
    console.log(maisVendidos)

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
                livros={lancamentos ?? []}
            />

            <LivrosDestaque 
                titulo='mais vendidos'
                livros={maisVendidos ?? []}
            />

            <SecaoDestacada 
                titulo='CATEGORIAS MAIS BUSCADAS'
                botoes={categorias}
            />


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