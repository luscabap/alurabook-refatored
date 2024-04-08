import { MagnifyingGlass } from '@phosphor-icons/react';
import { LivrosDestaque } from '../../Components/LivrosDestaque';
import { SecaoDestacada } from '../../Components/SecaoDestacada';
import { useDestaques } from '../../Graphql/Destaques/hooks';
import * as Style from './style';

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

    const { data } = useDestaques();


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
                livros={data?.destaques?.lancamentos ?? []}
            />

            <LivrosDestaque 
                titulo='mais vendidos'
                livros={data?.destaques?.maisVendidos ?? []}
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