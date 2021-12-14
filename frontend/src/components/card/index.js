import React, {useState, useEffect} from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import estrelaVazia from '../../img/star_border_black_24dp.svg';
import estrelaCheia from '../../img/star_black_24dp.svg';
import estrelaMetade from '../../img/star_half_black_24dp.svg'
import Pin from '../../img/pin.svg';


function DefineEstrela(nota, meio, limite) {
    if(nota >= limite) {
        return estrelaCheia;
    } else if(nota == meio) {
        return estrelaMetade;
    } else {
        return estrelaVazia;
    }
}

function Card( { key, id, nome, localidade, nota, imagem } ) {

    return(
        <div class="card" key={key}>
            <img id="image-card" src={imagem === undefined ? "https://via.placeholder.com/150x200" : imagem} class="card-img-top" alt="Imagem do Whisky" />
            <div class="card-body">
                <h5 class="card-title">{nome}</h5>
                <div class='localizacao'>
                    <img src={Pin} class='icone-card' alt="icone-pin"/>
                    <p class="card-text">{localidade}</p>
                </div>
                <div class="estrelas">
                    <img class='icone-card' src={DefineEstrela(nota, 0.5, 1)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 1.5, 2)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 2.5, 3)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 3.5, 4)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 4.5, 5)} alt="icone-star" />
                </div>
                <Link to={`/detalhes/${id}`} class="btn btn-outline-dark">Detalhes</Link>
            </div>
        </div>
    )
}

export default Card;