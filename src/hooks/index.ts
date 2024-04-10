import { useContext } from "react";
import { CarrinhoContext, ICarrinhoContextProps } from "../context/Carrinho";

export const usePersistirToken = () => {
    return (token: string) => {
        sessionStorage.setItem('token', token);
    }
};

export const useObterToken = () => {
    return sessionStorage.getItem('token');
};

export const useLimparToken = () => {
    sessionStorage.removeItem('token');
};

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContextProps>(CarrinhoContext)
}