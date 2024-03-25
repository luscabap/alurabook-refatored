import * as Style from './style'

export const Footer = () => {
    return (
        <Style.ContainerFooter>
            <h3>Grupo Alura</h3>
            <div className="containerEducacao">
                <h4>EDUCAÇÃO</h4>
                <ul>
                    <li>Caelum</li>
                    <li>Casa do Código</li>
                </ul>
            </div>
            <div className="containerEduOnline">
                <h4>EDUCAÇÃO ONLINE</h4>
                <ul>
                    <li>Alura</li>
                    <li>Alura Para Empresas</li>
                    <li>Alura LATAM</li>
                    <li>Alura Start</li>
                    <li>MusicDot</li>
                    <li>Alura Língua</li>
                    <li>PM3</li>
                </ul>
            </div>
            <div className="containerComunidade">
                <h4>COMUNIDADE</h4>
                <ul>
                    <li>Hipsters ponto Tech</li>
                    <li>Scuba Dev</li>
                    <li>Layers ponto Tech</li>
                    <li>Like a Boss</li>
                    <li>Carreira sem Fronteira</li>
                    <li>Hipsters ponto Jobs</li>
                    <li>GUJ</li>
                </ul>
            </div>
        </Style.ContainerFooter>
    )
}