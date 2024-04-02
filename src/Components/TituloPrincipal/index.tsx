import { ITituloPrincipalProps } from '../../interface/ITituloPrincipalProps';
import * as Style from './style';

export const TituloPrincipal = ({ textoTitulo }: ITituloPrincipalProps) => {
    return (
        <Style.ContainerTituloPrincipal>
            {textoTitulo}
        </Style.ContainerTituloPrincipal>
    )
}