import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import * as Style from './style';
import http from "../../http";

interface IModalCadastroUsuarioProps {
    aberta: boolean,
    aoFechar: () => void;
}

const ModalCadastroUsuario = ({ aberta, aoFechar }: IModalCadastroUsuarioProps) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        http.post('/public/registrar', usuario)
            .then(() => {
                alert("Usuário criado com sucesso!");
                setNome('');
                setEmail('');
                setEndereco('');
                setComplemento('');
                setCep('');
                setSenha('');
                setSenhaConfirmada('');
                aoFechar();
            })
            .catch(() => {
                alert("Ops alguma coisa deu errado!")
            })
    }

    return (
        <AbModal
            titulo="Cadastrar"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <Style.CorpoModalCadastro>
                <figure>
                    <img src="login.png" alt="Monitor com uam fechadura e uma pessoa com uma chave inserindo" />
                </figure>
                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto
                        value={nome}
                        label="Nome"
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        value={email}
                        label="E-mail"
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        value={endereco}
                        label="Endereco"
                        onChange={setEndereco}
                    />
                    <AbCampoTexto
                        value={complemento}
                        label="Complemento"
                        onChange={setComplemento}
                    />
                    <AbCampoTexto
                        value={cep}
                        label="CEP"
                        onChange={setCep}
                    />
                    <AbCampoTexto
                        value={senha}
                        label="Senha"
                        onChange={setSenha}
                        type="password"
                    />
                    <AbCampoTexto
                        value={senhaConfirmada}
                        label="Confirmar senha"
                        onChange={setSenhaConfirmada}
                        type="password"
                    />
                    <footer>
                        <AbBotao
                            texto="Cadastrar"
                        />
                    </footer>
                </form>
            </Style.CorpoModalCadastro>
        </AbModal>
    )
}

export default ModalCadastroUsuario