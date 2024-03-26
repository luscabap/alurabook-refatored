import * as Style from './style';
import logo from '../../assets/Logo.png';
import { ShoppingBagOpen, User } from '@phosphor-icons/react'

export const Header = () => {
    return (
        <Style.Header>
            <div className="containerInfos">
                <div className="containerInfos__titulo">
                    <img src={logo} alt="Logo do site" />
                    <h1 className="containerInfos__titulo__texto"><strong>Alura</strong>Books</h1>
                </div>
                <ul className="lista">
                    <li className="lista__item">CATEGORIAS</li>
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