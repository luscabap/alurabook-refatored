import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import * as Style from './style'
import http from "../../http";

interface IModalLoginProps {
    aberta: boolean,
    aoFechar: () => void,
    aoEfetuarLogin: () => void
}

export const ModalLogin = ({ aberta, aoFechar, aoEfetuarLogin }: IModalLoginProps) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            email,
            senha
        }

        http.post('/public/login', usuario)
            .then(resposta => {
                sessionStorage.setItem('token', resposta.data.access_token);
                setEmail("")
                setSenha("");
                aoEfetuarLogin();
            })
            .catch(erro => {
                if (erro?.response?.data?.message) {
                    alert(erro?.response?.data?.message)
                } else {
                    alert("Aconteceu um erro inesperado ao efetuar o seu login")
                }
            })
    }

    return (
        <AbModal
            titulo="Login"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <Style.CorpoModalLogin>
                <figure>
                    <img src="login.png" alt="Monitor com uam fechadura e uma pessoa com uma chave inserindo" />
                </figure>
                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto
                        value={email}
                        label="E-mail"
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        value={senha}
                        label="Senha"
                        onChange={setSenha}
                        type="password"
                    />
                    <div className="acoes">
                        <AbBotao texto="Fazer login" />
                    </div>
                </form>
            </Style.CorpoModalLogin>

        </AbModal>
    )
}