import React, {useState} from 'react';
import arrowleft from '../../img/arrow-left.svg';
import { Link, Redirect } from 'react-router-dom';
import './newUser.css';
import axios from 'axios';

function NewUser() {

    const [email, setEmail] = useState();
    const [confirmacaoSenha, setConfirmacaoSenha] = useState();
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [disabled, setDisabled] = useState(false);
    const [carregando, setCarregando] = useState();
    const [msg, setMsg] = useState();

    function verificaSenha(e) {
        setConfirmacaoSenha(e.target.value);

        if(senha !== e.target.value) {
            setMsgTipo('erro');
            setMsg('Sua senha está diferente da confirmação!');
        } else {
            setMsgTipo(null);
            setMsg(null);
        }
    }

    async function cadastrar() {
        setCarregando(true);
        setDisabled(true);
        setMsgTipo(null);

        if(!email || !senha || !confirmacaoSenha || !nome) {
            setMsgTipo('erro');
            setMsg('Você não preencheu todos os campos!');
        } else {
            //Cadastro na API
            try {
                console.log(nome, email, senha)
                const response = await axios
                .post('http://localhost:8080/user', {
                    nome: nome,
                    email: email,
                    senha: senha
                });
                console.log(response);
                setCarregando(false);
                setDisabled(false);
                setMsgTipo('ok');
            } catch (error) {
                setMsgTipo('erro');
                console.log(error);
                setCarregando(false);
                setDisabled(false);
            }
        }
    }

    return (
        <section id="cadastro">
            <div className="cadastro-container">
                <Link to="/"><img className="icone" src={arrowleft} alt="voltar"/></Link>
                <div className="text-container">
                    <h1>Cadastro</h1>
                    <p>Por favor preencha os campos abaixo</p>
                </div>
                <form>
                    <div className="input-container">
                        <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Nome Completo"
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <label for="floatingInput">Nome Completo</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <label for="floatingPassword">Senha</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => verificaSenha(e)}
                        />
                        <label for="floatingInput">Confirme sua Senha</label>
                        </div>
                    </div>
                    <button type="button" onClick={() => cadastrar()} disabled={disabled} className="btn btn-outline-dark">
                        <span className='sr-only'>Cadastro</span>
                        {
                            carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                        }
                    </button>
                    <div className='text-center mt-1'>
                            {
                                msgTipo === 'erro' && <span>{msg}</span>
                            }
                    </div>
                </form>
            </div>
            {
                msgTipo === 'ok' ? <Redirect to='/login' /> : null
            }
        </section>
    )
}

export default NewUser;