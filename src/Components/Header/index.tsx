import * as Style from './style';
import logo from '../../assets/Logo.png';
import { ShoppingBagOpen, User } from '@phosphor-icons/react'
import { useState } from 'react';

export const Header: React.FC = () => {
    const [aberto, setAberto] = useState<boolean>(false)

    function handleAberto() {
        setAberto(!aberto)
    }

    return (
        <Style.Header>
            <div className="containerInfos">
                <div className="containerInfos__titulo">
                    <img src={logo} alt="Logo do site" />
                    <h1 className="containerInfos__titulo__texto"><strong>Alura</strong>Books</h1>
                </div>
                <ul className="lista">
                    <div>
                        <li className="lista__item" onClick={handleAberto}>CATEGORIAS</li>
                        <Style.OpcoesCategorias aberto={aberto}>
                            <a href="#" className='opcoesCategorias__link'>
                                <li className='opcoesCategorias__link__item'>
                                    programação
                                </li>
                            </a>

                            <a href="#" className='opcoesCategorias__link'>
                                <li className='opcoesCategorias__link__item'>
                                    front-end
                                </li>
                            </a>

                            <a href="#" className='opcoesCategorias__link'>
                                <li className='opcoesCategorias__link__item'>
                                    infraestrutura
                                </li>
                            </a>

                            <a href="#" className='opcoesCategorias__link'>
                                <li className='opcoesCategorias__link__item'>
                                    business
                                </li>
                            </a>

                            <a href="#" className='opcoesCategorias__link'>
                                <li className='opcoesCategorias__link__item'>
                                    design & ux
                                </li>
                            </a>
                        </Style.OpcoesCategorias>
                    </div>
                    <li className="lista__item">FAVORITOS</li>
                    <li className="lista__item">MINHA ESTANTE</li>
                </ul>
            </div>
            <div className="containerBotoes">
                <div className="containerBotoes__Item">
                    <ShoppingBagOpen size={32} color='#002F52'/>
                    <a href="#" className="containerBotoes__Item__botao">Minha Sacola</a>
                </div>
                <div className="containerBotoes__Item">
                    <User size={32} color='#002F52'/>
                    <a href="#" className="containerBotoes__Item__botao">Meu Perfil</a>
                </div>
            </div>
        </Style.Header>
    )
}