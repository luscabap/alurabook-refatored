import * as Style from './style';
import logo from '../../assets/Logo.png';
import { ShoppingBagOpen, SignOut, User, Users } from '@phosphor-icons/react'
import { useEffect, useState } from 'react';
import ModalCadastroUsuario from '../ModalCadastroUsuario';
import { ModalLogin } from '../ModalLogin';
import { useNavigate } from 'react-router-dom';
import { ICategoriaProps } from '../../interface/ICategoriaProps';
import http from '../../http';


export const Header: React.FC = () => {
    const [aberto, setAberto] = useState(false)
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);
    const [categorias, setCategorias] = useState<ICategoriaProps[]>([]);

    const navigate = useNavigate();

    const token = sessionStorage.getItem('token')
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);


    function handleAberto() {
        setAberto(!aberto)
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

    useEffect(() => {
        http.get<ICategoriaProps[]>('/categorias')
            .then(resposta => {
                setCategorias(resposta.data)
            })
    }, [])

    return (
        <Style.Header>
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
                                categorias.map(categoria => (
                                    <li
                                        className='opcoesCategorias__item'
                                        onClick={() => navigate(`/categorias/${categoria.slug}`)}
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
                <div className="containerBotoes__Item">
                    <ShoppingBagOpen size={32} color='#002F52' />
                    <a href="#" className="containerBotoes__Item__botao">Minha Sacola</a>
                </div>

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
        </Style.Header>
    )
}