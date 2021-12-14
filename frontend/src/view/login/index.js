import React, {useState} from 'react';
import './login.css';
import arrowleft from '../../img/arrow-left.svg';
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function autenticar() {
        /* setCarregando(true);
        if(!email || !senha) {
            setMsgTipo('erro');
            setCarregando(false);
        } else {
            firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado => {
                setCarregando(false);
                dispatch({type: 'LOGIN', usuarioEmail: email});
            })
            .catch( erro => {
                setCarregando(false);
                setMsgTipo('erro');
            })
        } */
    }

    return (
        <section id='login'>
            <div className='login-container'>
                <Link to="/"><img className='icone' src={arrowleft} alt='voltar' /></Link>
                <div className='text-container'>
                    <h1>Login</h1>
                    <p>Por favor preencha os campos abaixo</p>
                </div>
                <form>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                    </div>
                    <button type="button" onClick={autenticar} className="btn btn-outline-dark">
                    <span className='sr-only'>Login</span>
                    {
                        carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                    }
                    </button>
                    <div className='text-center mt-1'>
                        {
                            msgTipo === 'erro' && <span>Verifique se o seu email e senha estão corretos</span>
                        }
                    </div>
                    <div className='link-container'>
                        <Link to='newuser' className='link'>Ainda não possui uma conta? Crie uma</Link>
                        <Link className='link' to='/lostpassword'>Recuperar senha</Link>
                    </div>
                </form>
            </div>
        {   useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null  }
        </section>
    );
}

export default Login;