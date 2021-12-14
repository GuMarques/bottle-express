import React, {useEffect, useState} from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import axios from 'axios';

function searchLocalidade(nameKey, myArray){
    let tempArray = [];
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].localidade === nameKey) {
            tempArray.push(myArray[i]);
        }
    }
    return tempArray;
}

function Home() {

    const [whiskys, setWhiskys] = useState([]);
    let listaWhiskys = [];

    useEffect(async () => {
            const response = await axios.get('http://localhost:8080/whisky/list');
            listaWhiskys = response.data;
            console.log(listaWhiskys);
            setWhiskys(listaWhiskys);
    },[])

    return(
        <>
        <Navbar/>
            <section id='escoceses' className='secao'>
                <h1 className='secao-titulo'>Escoceses</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Escoces", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
            <section id='irlandeses' className='secao'>
                <h1 className='secao-titulo'>Irlandeses</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Irlandes", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
            <section id='americanos' className='secao'>
                <h1 className='secao-titulo'>Americanos</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Americano", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
            <section id='japoneses' className='secao'>
                <h1 className='secao-titulo'>Japoneses</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Japones", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
            <section id='brasileiros' className='secao'>
                <h1 className='secao-titulo'>Brasileiros</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Brasileiro", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
            <section id='canadenses' className='secao'>
                <h1 className='secao-titulo'>Canadenses</h1>
                <div className='cartao-container'>
                {
                    searchLocalidade("Canadense", whiskys).map( item => <Card key={item._id} id={item._id} nome={item.nome} localidade={item.localidade} nota={item.nota} imagem={item.imgLink} />)
                }
                </div>
            </section>
        </>
    )
}

export default Home;