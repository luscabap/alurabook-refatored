import * as Style from './style';
import { dataEducacaoOnline, dataComunidade, dataEducacao } from './data/index'
import { ListaItem } from '../ListaItem';

export const Footer = () => {
    return (
        <Style.ContainerFooter>
            <h3 className='tituloContainerFooter'>Grupo Alura</h3>
            <div className="containerInfosFooter">
                <h4 className="containersTitulo">EDUCAÇÃO</h4>
                <ul className="containersLista">
                    {dataEducacao.map((item, index) => (
                        <ListaItem 
                            img={item.img}
                            texto={item.texto}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
            <div className="containerInfosFooter">
                <h4 className="containersTitulo">EDUCAÇÃO ONLINE</h4>
                <ul className="containersLista">
                    {dataEducacaoOnline.map((item, index) => (
                        <ListaItem 
                            img={item.img}
                            texto={item.texto}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
            <div className="containerInfosFooter">
                <h4 className="containersTitulo">COMUNIDADE</h4>
                <ul className="containersLista">
                    {dataComunidade.map((item, index) => (
                        <ListaItem 
                            img={item.img}
                            texto={item.texto}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </Style.ContainerFooter>
    )
}