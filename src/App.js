import { useState } from "react";
import palavras from "./palavras"


export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z"];

    
    const [palavraSorteada, setPalavra] = useState("");
    const [palavraEscondida, setEscondida] = useState("");
    const [botaoPalavra, setBotaoPalavra] = useState(true);
    const [letrasAlfabeto, setAlfabeto] = useState(false);
    const [letraEscolhida, setLetra] = useState([]);
    const [habilitaLetras, setEstilo] = useState("letra-desabilitada");

    function sorteiaPalavra() {
        if (botaoPalavra) {
            const valor = Math.floor(Math.random() * palavras.length);
            const palavraSorteada = palavras[valor];
            const escondePalavra = [...palavraSorteada].map((s) => s = "_ ");

            setPalavra(palavraSorteada);
            setEscondida(escondePalavra);
            iniciaJogo();

        }
    }

    function iniciaJogo(){
        setBotaoPalavra(false);
        setAlfabeto(true);
        setEstilo("letra-habilitada");
    }

    function escolheuLetra(botao, i){
        if (!letraEscolhida.includes(i))
            setLetra([...letraEscolhida, i]);
    }

    function chuteLetra(botao, i){
        const palavra = [...palavraSorteada]
        const escondida = palavraEscondida;

        if(palavra.includes(botao) && letrasAlfabeto){
            const indice = palavra.map((l,i)=> l.includes(botao) ? escondida[i] = botao : false);

            console.log(indice);
            console.log(escondida);
            console.log('acertou');
        }else{
            console.log('errou');
        }
        escolheuLetra(botao, i);
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
                <ul className= "alfabeto" >
                    {alfabeto.map((a, i) => <li onClick={()=> chuteLetra(a,i)} 
                    className={letraEscolhida.includes(i) ? "letra-escolhida" : habilitaLetras}>
                        <strong>{a.toUpperCase()}</strong></li>)}
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