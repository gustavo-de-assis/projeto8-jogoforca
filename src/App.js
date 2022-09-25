import { useState } from "react";
import palavras from "./palavras"


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z"];

    
    const [palavraSorteada, setPalavra] = useState("");
    const [palavraEscondida, setEscondida] = useState("");
    const [botaoPalavra, setEstado] = useState(true);
    const [letrasAlfabeto, setLetras] = useState(false);

    function sorteiaPalavra() {
        if (botaoPalavra) {
            const valor = Math.floor(Math.random() * palavras.length);
            const palavraSorteada = palavras[valor];
            const escondePalavra = [...palavraSorteada].map((s) => s = "_ ");

            setEstado(false);
            setLetras(true);
            setPalavra(palavraSorteada);
            setEscondida(escondePalavra);

        }
    }

  
    return (
        <div className="content">
            <div className="cima">
                <div className="lado-esquerdo">
                    <div className="estado-forca">
                        <img src="./assets/forca0.png" />
                    </div>
                </div>
                <div className="lado-direito">
                    <div className="escolher-palavra">
                        <div onClick={sorteiaPalavra}> <strong>Escolher Palavra</strong></div>
                    </div>
                    <div className="palavra-escolhida">
                        <h1><strong>{palavraEscondida}</strong></h1>
                    </div>
                </div>
            </div>
            <div className="embaixo">
                <ul className="alfabeto">
                    {alfabeto.map((a) => <li className={letrasAlfabeto ? "letra-disponivel":"letra-indisponivel"} ><strong>{a.toUpperCase()}</strong></li>)}
                </ul>
                <div className="chute">
                    <p>Já sei a palavra!</p>
                    <input type='text' />
                    <button>Chutar</button>
                </div>
            </div>

        </div>
    )
}