import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './newWhisky.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';
import axios from 'axios';

function NewWhisky() {
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState();
    const [destilaria, setDestilaria]  = useState();
    const [localidade, setLocalidade] = useState('Escoces');
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();
    const [msg, setMsg] = useState();
    const [rating, setRating] = useState();
    const [review, setReview] = useState()

    const usuarioEmail = useSelector(state => state.usuarioEmail);

    async function cadastrar() {
        if(!carregando) {
            setCarregando(true);
            if(!nome || !destilaria || !localidade || !descricao || !imagem || !rating || !review) {
                setCarregando(false);
                setMsg('Verifique se você preencheu todos os campos');
            } else {
                //Cadastro na API
                try {
                    const response = await axios
                    .post('http://localhost:8080/whisky', {
                        nome: nome,
                        destilaria: destilaria,
                        localidade: localidade,
                        descricao: descricao,
                        imgLink: imagem,
                        nota: rating,
                        userId: 'teste',
                        review: review
                    });
                    console.log(response);
                    setCarregando(false);
                } catch (error) {
                    setCarregando(false);
                }
            }
        }
    } 

    return(
        <>
            <Navbar />
            <section className="secao">
                <h3 className="mx-auto fornt-weightbold margin-left-10">Novo Whisky</h3>
                <p class="text-muted margin-left-10">Cadastre uma nova review de Whisky.</p>
                <div className="col-12">
                    <div className="row">
                        <form>
                            <div className="row">
                                <div className='input-container col'>
                                    <div className="form-floating">
                                        <input type="text" onChange={(e) => setNome(e.target.value)} className="form-control" id="floatingInput" placeholder="Nome" />
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                </div>
                                <div className='input-container col'>
                                    <div className="form-floating">
                                        <input type="text" onChange={(e) => setDestilaria(e.target.value)} className="form-control" id="floatingInput" placeholder="Destilaria" />
                                        <label for="floatingInput">Destilaria</label>
                                    </div>
                                </div>
                                <div className='input-container col'>
                                    <div class="form-floating">
                                        <select class="form-select" onChange={(e) => setLocalidade(e.target.value)} id="floatingSelectCorpo" aria-label="Floating label select">
                                            <option value="Escoces" selected>Escoces</option>
                                            <option value="Irlandes">Irlandes</option>
                                            <option value="Americano">Americano</option>
                                            <option value="Japones">Japones</option>
                                            <option value="Brasileiro">Brasileiro</option>
                                            <option value="Canadense">Canadense</option>
                                        </select>
                                        <label for="floatingSelectCorpo">Localidade</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating row mx-2">
                                <textarea className="form-control height-100px" onChange={(e) => setDescricao(e.target.value)} rows="4" placeholder="Descreva o whisky" id="floatingTextareaDescricao"></textarea>
                                <label for="floatingTextareaDescricao">Descrição</label>
                            </div>
                            <div className="form-floating row mx-2 mt-4">
                                <textarea className="form-control height-100px" onChange={(e) => setReview(e.target.value)} rows="4" placeholder="Descreva o whisky" id="floatingTextareaDescricao"></textarea>
                                <label for="floatingTextareaDescricao">Review</label>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="form-floating">
                                            <input type="text" onChange={(e) => setImagem(e.target.value)} className="form-control" id="floatingInput" placeholder="Nome" />
                                            <label for="floatingInput">Link da imagem da Garrafa</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <fieldset class="rating"> 
                                        <input type="radio" id="star5" name="rating" value="5" onClick={(e) => setRating(e.target.value)} />
                                        <label class="full" for="star5"></label> 
                                        <input type="radio" id="star4half" name="rating" value="4.5" onClick={(e) => setRating(e.target.value)} />
                                        <label class="half" for="star4half"></label> 
                                        <input type="radio" id="star4" name="rating" value="4" onClick={(e) => setRating(e.target.value)} />
                                        <label class="full" for="star4"></label> 
                                        <input type="radio" id="star3half" name="rating" value="3.5" onClick={(e) => setRating(e.target.value)} />
                                        <label class="half" for="star3half"></label> 
                                        <input type="radio" id="star3" name="rating" value="3" onClick={(e) => setRating(e.target.value)} />
                                        <label class="full" for="star3"></label> 
                                        <input type="radio" id="star2half" name="rating" value="2.5" onClick={(e) => setRating(e.target.value)} />
                                        <label class="half" for="star2half"></label> 
                                        <input type="radio" id="star2" name="rating" value="2" onClick={(e) => setRating(e.target.value)} />
                                        <label class="full" for="star2"></label> 
                                        <input type="radio" id="star1half" name="rating" value="1.5" onClick={(e) => setRating(e.target.value)} />
                                        <label class="half" for="star1half"></label> 
                                        <input type="radio" id="star1" name="rating" value="1" onClick={(e) => setRating(e.target.value)} />
                                        <label class="full" for="star1"></label> 
                                        <input type="radio" id="starhalf" name="rating" value="0.5" onClick={(e) => setRating(e.target.value)}/>
                                        <label class="half" for="starhalf"></label> 
                                    </fieldset>
                                </div>
                                <button type="button" onClick={cadastrar} className="btn btn-outline-dark col">
                                <span className='sr-only'>Enviar</span>
                                {
                                    carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                                }
                                </button>
                            </div>
                            <div className='text-center mt-1'>
                                {
                                    <span>{msg}</span>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* {   useSelector(state => state.usuarioLogado) === 0 ? <Redirect to='/' /> : null  } */}
        </>
    )
}

export default NewWhisky;