import { useState } from 'react'
import camisaOutdated from '../../assets/images/camisa-outdated.svg'
import sacolateste from '../../assets/images/SACOLATESTE.svg'
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";

import './style.css'
import { CombinaCom } from '../../components/layout/combinaCom';

export const PageComprar = () => {

    const [openAumentarComprar, setOpenAumentarComprar] = useState(false);

    const [contador, setContador] = useState(1)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const diminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        } else {
            setOpenAumentarComprar(true)
        }

    }

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    const tamanhos = ["PP", "P", "M", "G", "GG"];

    return (
        <div className='page-comprar'>

            <section className='section-comprar-container'>
                <img src={camisaOutdated} alt="Camisa Outdated" />

                <div className='container-comprar'>
                    <div className='div-titulo'>
                        <h2>CAMISETA OVERSIZED ROSES GOOD VIBES</h2>
                    </div>

                    <div className="box-precos">
                        <div className="linha-preco">
                            <p className="preco-antigo">R$ 99,99</p>
                            <h2 className="preco-novo">R$ 79,99</h2>
                        </div>
                        <p className="parcelamento">Em até 2x sem juros</p>
                    </div>

                    <div className="container-tamanho-descricao">
                        {/* COLUNA ESQUERDA */}
                        <div className="coluna-esquerda">
                            {/* TAMANHO */}
                            <div className="tamanho-produto-container">
                                {tamanhos.map((tamanho) => (
                                    <button
                                        key={tamanho}
                                        className={`botao-tamanho ${tamanhoSelecionado === tamanho ? "selecionado" : ""
                                            }`}
                                        onClick={() => setTamanhoSelecionado(tamanho)}
                                    >
                                        {tamanho}
                                    </button>
                                ))}
                            </div>

                            {/* QUANTIDADE */}
                            <div className="quantidade-produto">
                                <p>Quantidade:</p>
                                <div className="quantidade-box">
                                    <button className="btn-qtd-menos" onClick={diminuirContador}>-</button>
                                    <span className="quantidade-valor">{contador}</span>
                                    <button className="btn-qtd-mais" onClick={aumentarContador}>+</button>
                                </div>
                            </div>

                            {/* COR */}
                            <div className="cor-produto">
                                <p>Cor única:</p>
                                <span className="cor-unica"></span>
                            </div>
                        </div>

                        {/* DESCRIÇÃO */}
                        <div className="descricao-container">
                            <h4>DESCRIÇÃO</h4>
                            <p>
                                Camiseta preta oversized, feita em algodão leve com toque macio.
                                Estampa retrô-tech marcante e acabamento resistente. Ideal pra quem
                                vive o streetwear com atitude e não aceita ficar pra trás.
                            </p>
                        </div>
                    </div>

                    <div className="botoes-container"> <Link to="/login" className="btn-primary"> Finalizar Comprar</Link>

                        <button className='btn-carrinho'> <img src={sacolateste} alt="icone de sacola" /> </button> </div>
                </div>


            </section>

            <CombinaCom/>
                                
            <Backdrop
                open={openAumentarComprar}
                sx={{
                    color: '#fff',
                    zIndex: 1300,
                    backgroundColor: "rgba(0,0,0,0.7)"
                }}
            />

            <Snackbar
                open={openAumentarComprar}
                autoHideDuration={3000}
                onClose={() => setOpenAumentarComprar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert variant="filled" severity="error">Não é possível diminuir!</Alert>
            </Snackbar>
        </div>
    )
}
