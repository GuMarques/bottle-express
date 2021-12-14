import React, {useState, useEffect} from 'react';
import Card from '../card';
import './detalhecard.css';


function detalheCard({texto}) {
    return(
        <p className='descricao'>{texto}</p>
    )
};

export default detalheCard