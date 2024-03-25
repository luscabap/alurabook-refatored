import * as Style from './style'

export const Header = () => {
    return (
        <Style.Header>
            <div className="containerInfos">
                <div className="containerInfos__titulo">
                    <img src="./Logo.png" alt="Logo do site" />
                    <h1 className="containerInfos__titulo__texto"><strong>Alura</strong>Books</h1>
                </div>
                <ul className="lista">
                    <li className="lista__item">CATEGORIAS</li>
                    <li className="lista__item">FAVORITOS</li>
                    <li className="lista__item">MINHA ESTANTE</li>
                </ul>
            </div>
            <div className="containerBotoes">
                <a href="#" className="containerBotoes__botao">Minha Sacola</a>
                <a href="#" className="containerBotoes__botao">Meu Perfil</a>
            </div>
        </Style.Header>
    )
}