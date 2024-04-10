import { gql, useQuery } from '@apollo/client';
import { ShoppingBagOpen, SignOut, User, Users } from '@phosphor-icons/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import ModalCadastroUsuario from '../ModalCadastroUsuario';
import { ModalLogin } from '../ModalLogin';
import * as Style from './style';
import { useCarrinhoContext } from '../../hooks';
import { AbBotao } from 'ds-alurabooks';
import { CardFlutuante } from '../CardFlutuante';

const OBTER_CATEGORIAS = gql`
    query ObterCategorias {
        categorias {
            nome,
            id,
            slug
        }
    }
`

export const Header: React.FC = () => {
    const { data } = useQuery<{ categorias: ICategoriaProps[] }>(OBTER_CATEGORIAS);
    const { carrinho } = useCarrinhoContext()
    const [aberto, setAberto] = useState(false);
    const [resumoCompraAberto, setResumoCompraAberto ] = useState(false);
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);

    const navigate = useNavigate();

    const token = sessionStorage.getItem('token')
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

    function handleAberto() {
        setAberto(!aberto)
    }

    function handleResumoCompraAberto() {
        setResumoCompraAberto(!resumoCompraAberto)
    }

    function aoEfetuarLogin() {
        setModalLoginAberta(false)
        setUsuarioLogado(true)
    }

    const efetuarLogout = () => {
        setUsuarioLogado(false)
        sessionStorage.removeItem('token')
        navigate('/')
    }

    function direcionarLivroClicado(slugLivro: string) {
        navigate(`/categorias/${slugLivro}`)
        handleAberto()
    }

    function direcionarASacola() {
        navigate('/minha-sacola')
        handleResumoCompraAberto()
        window.scrollTo(0, 0)
    }

    return (
        <Style.Header resumoCompraAberto={resumoCompraAberto}>
            <div className="containerInfos">
                <div className="containerInfos__titulo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo do site" />
                    <h1 className="containerInfos__titulo__texto">AluraBooks</h1>
                </div>
                <ul className="lista">
                    <div>
                        <li className="lista__item" onClick={handleAberto}>CATEGORIAS</li>
                        <Style.OpcoesCategorias aberto={aberto}>
                            {
                                data?.categorias.map(categoria => (
                                    <li
                                        className='opcoesCategorias__item'
                                        onClick={() => direcionarLivroClicado(categoria.slug)}
                                        key={categoria.id}
                                    >
                                        {categoria.nome}
                                    </li>
                                ))
                            }
                        </Style.OpcoesCategorias>
                    </div>
                    <li className="lista__item">FAVORITOS</li>
                    <li className="lista__item">MINHA ESTANTE</li>
                </ul>
            </div>
            <div className="containerBotoes">
                {!usuarioLogado && (
                    <>
                        <div className="containerBotoes__Item" onClick={() => setModalLoginAberta(true)}>
                            <Users size={32} color='#002F52' />
                            <a href="#" className="containerBotoes__Item__botao">Login</a>
                        </div>
                        <div className="containerBotoes__Item" onClick={() => setModalCadastroAberta(true)}>
                            <Users size={32} color='#002F52' />
                            <a href="#" className="containerBotoes__Item__botao">Cadastrar-se</a>
                        </div>
                    </>
                )}

                {usuarioLogado && (
                    <>
                        <div className="containerBotoes__Item" 
                            onClick={handleResumoCompraAberto}
                        >
                            <ShoppingBagOpen size={32} color='#002F52' />
                            <a className="containerBotoes__Item__botao">Minha Sacola</a>
                        </div>
                        <div className="containerMinhaConta" onClick={() => navigate("/minha-conta")}>
                            <User size={32} color='#002F52' />
                            <p className="containerMinhaConta__texto">Minha conta</p>
                        </div>
                        <div className="containerLogout" onClick={efetuarLogout}>
                            <SignOut size={32} />
                        </div>
                    </>
                )}

                <ModalCadastroUsuario
                    aberta={modalCadastroAberta}
                    aoFechar={() => setModalCadastroAberta(false)}
                />
                <ModalLogin
                    aberta={modalLoginAberta}
                    aoFechar={() => setModalLoginAberta(false)}
                    aoEfetuarLogin={aoEfetuarLogin}
                />
            </div>
            <div className='containerFlutuante'>
                <h2 className='containerFlutuante__titulo'>Resumo da compra</h2>
                {
                    carrinho?.itens.map(item => (
                        <CardFlutuante 
                            key={item.livro.id}
                            autor={item.livro.autor.nome}
                            imagem={item.livro.imagemCapa}
                            preco={item.opcaoCompra.preco}
                            quantidade={item.quantidade}
                            titulo={item.livro.titulo}
                        />
                    ))
                }
                <AbBotao texto='Ver sacola' onClick={direcionarASacola}/>
            </div>
        </Style.Header>
    )
}