import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import * as Style from './style'

export const ModalLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <AbModal
            titulo="Login"
            aberta={true}
            aoFechar={() => console.log("fechou")}
        >
            <Style.CorpoModalLogin>
                <figure>
                    <img src="login.png" alt="Monitor com uam fechadura e uma pessoa com uma chave inserindo" />
                </figure>
                <form>
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