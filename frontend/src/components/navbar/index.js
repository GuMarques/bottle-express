import React, {useState} from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link as Scroll} from 'react-scroll';

function Navbar() {

    const dispatch = useDispatch();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
      
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
      

    return(
        <div className="container">
            <div className="cabecalho">
                <div className="cabecalho-container">
                <div className="cabecalho-esquerda">
                    <div className="logo">
                    <Link to="/">
                            <img src={logo} alt="logo"/>
                    </Link>
                    </div>
                    {/* <!-- <form className="pesquisa">
                    <input
                        type="search"
                        id="pesquisa"
                        name="pesquisa"
                        placeholder="Pesquisar whisky"
                    />
                    </form> --> */}
                </div>
                <div className="cabecalho-direita">
                    {useSelector(state => state.usuarioLogado) === 0 ? 
                        <>
                            <Link to="/login" className="btn btn-outline-dark btn-sm">Login</Link>
                            <Link to="/newuser" className="btn btn-outline-dark btn-sm">Cadastro</Link>
                        </>
                        : 
                            <Link onClick={() => dispatch({type: 'LOGOUT'})} className="btn btn-outline-dark btn-sm">Sair</Link>
                    }
                    
                    {/* <!-- <button>Login</button>
                    <button>Cadastro</button> --> */}
                </div>
                </div>
                <div className="menu-container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 width-100">
                                 <li className="nav-item">
                                    <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    id="es"
                                    to="/"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Scroll
                                    className="nav-link active"
                                    aria-current="page"
                                    to="irlandeses"
                                    >Irlandeses</Scroll>
                                </li>
                                <li className="nav-item">
                                    <Scroll
                                    className="nav-link active"
                                    aria-current="page"
                                    to="americanos"
                                    >
                                        Americanos
                                    </Scroll>
                                </li>
                                <li className="nav-item">
                                    <Scroll
                                    className="nav-link active"
                                    aria-current="page"
                                    to="japoneses"
                                    >
                                        Japoneses
                                    </Scroll>
                                </li>
                                <li className="nav-item">
                                    <Scroll
                                    className="nav-link active"
                                    aria-current="page"
                                    to="brasileiros"
                                    >
                                        Brasileiros
                                    </Scroll>
                                </li>
                                <li className="nav-item">
                                    <Scroll
                                    className="nav-link active"
                                    aria-current="page"
                                    to="canadenses"
                                    >
                                        Canadenses
                                    </Scroll>
                                </li>
                                {useSelector(state => state.usuarioLogado) > 0 ? 
                                    <li className="nav-item align-right">
                                        <Link className="nav-link active" aria-current="page" to="/newwhisky">
                                            Adicione um Whisky
                                        </Link>
                                    </li> : null
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
            </div>
    )
}

export default Navbar;