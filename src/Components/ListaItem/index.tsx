import { IListaItemProps } from '../../interface/index';
import * as Style from './style'

export const ListaItem = ({ texto, img }: IListaItemProps) => {
    return (
        <Style.ContainerItem>
            <img src={img} alt={` -Logo da ${texto}- `} />
            {texto}
        </Style.ContainerItem>
    )
}