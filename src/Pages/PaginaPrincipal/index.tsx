import { Header } from '../../Components/Header';
import * as Style from './style';

export const PaginaPrincipal = () => {
    return (
        <>
            <Header />
            <Style.ContainerSection>
                <h2 className="containerSection__titulo">Já sabe por onde começar?</h2>
                <p className="containerSection__texto">Encontre em nossa estante o que precisa para seu desenvolvimento</p>
                <input type="text" placeholder="Qual será sua próxima leitura?" className="containerSection__input"/>
            </Style.ContainerSection>
        </>
    )
}