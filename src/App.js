import { useState } from "react";
import palavras from "./palavras"

function Forca() {
    return (
        <div className="lado-esquerdo">
            <div className="estado-forca">
                <img src="./assets/forca0.png" />
            </div>
        </div>
    )
}

function Palavra() {
    const [palavraSorteada, setPalavra] = useState("_ _ _ _ _");

    function sorteiaPalavra() {
        const valor = Math.floor(Math.random() * palavras.length);
        const novaPalavra = palavras[valor];
        setPalavra(novaPalavra);
    }

    return (
        <div className="lado-direito">
            <div className="escolher-palavra">
                <div onClick={sorteiaPalavra}> <strong>Escolher Palavra</strong></div>
            </div>
            <div className="palavra-escolhida">
                <h1><strong>{palavraSorteada}</strong></h1>
            </div>
        </div>
    )
}

function Alfabeto() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <ul className="alfabeto">
            {alfabeto.map((a) => <li className="letra-indisponivel" ><strong>{a.toUpperCase()}</strong></li>)}
        </ul>
    )
}

function Chute() {
    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type='text' />
            <button>Chutar</button>
        </div>
    )
}


export default function App() {

    return (
        <div className="content">
            <div className="cima">
                <Forca />
                <Palavra />
            </div>
            <div className="embaixo">
                <Alfabeto />
                <Chute/>
            </div>

        </div>
    )
}