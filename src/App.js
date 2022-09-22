export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
                        <div> <strong>Escolher Palavra</strong></div>
                    </div>
                    <div className="palavra-escolhida">
                        <h1><strong>_ _ _ _ _</strong></h1>
                    </div>
                </div>
            </div>
            <div className="embaixo">
                <ul className="alfabeto">
                    {alfabeto.map((a) => <li className="letra-disponivel"><strong>{a.toUpperCase()}</strong></li>)}
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