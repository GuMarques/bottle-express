import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import estrelaVazia from '../../img/star_border_black_24dp.svg';
import estrelaCheia from '../../img/star_black_24dp.svg';
import estrelaMetade from '../../img/star_half_black_24dp.svg'
import Pin from '../../img/pin.svg';
import './detalhes.css';
import Navbar from '../../components/navbar';
import DetalheCard from '../../components/detalheCard';
import axios from 'axios';

function DefineEstrela(nota, meio, limite) {
    if(nota >= limite) {
        return estrelaCheia;
    } else if(nota == meio) {
        return estrelaMetade;
    } else {
        return estrelaVazia;
    }
}

function Detalhes({match}) {

    const [whisky, setWhisky] = useState();
    const [imagem, setImagem] = useState();

    useEffect(async () => {
        const response = await axios.get(`http://localhost:8080/whisky/${match.params.idWhisky}`);
        console.log(response.data);
        setWhisky(response.data);
    }, []);

    return(
        <>
        <Navbar />
            <section id='container'>
                <div id='imagem'>
                    <img src={whisky?.imgLink || "https://via.placeholder.com/150x200"} alt='Imagem da garrafa do whisky' />
                </div>
                <section id='infos'>
                    <h1>{whisky?.nome}</h1>
                    <DetalheCard texto={`Destilaria: ${whisky?.destilaria}`} />
                    <DetalheCard texto={whisky?.descricao} />
                    <div className='localizacao'>
                        <img src={Pin} className='icone-card' alt="Icone localidade"/>
                        <p className="card-text">{whisky?.localidade}</p>
                    </div>
                    <div className="estrelas">
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 0.5, 1)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 1.5, 2)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 2.5, 3)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 3.5, 4)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 4.5, 5)} alt="icone-star" />
                    </div>
                </section>
            </section>
            <section id='review'>
                <div className='review-header'>
                    <div className='review-titulo'>
                        <h1>Review</h1>
                    </div>
                </div>
                <div className='review-janela'>
                    <p className="card-text">
                        {whisky?.review}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Detalhes;