import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalCriarProduto } from '../../components/MODALS/modalCriarProduto'
import { Cardroupas } from '../../components/CARDS/cardroupas'

export const PageAdmin = () => {

    const [produtos, setProdutos] = useState([])
    const [openCadastroDeProduto, setOpenCadastroDeProduto] = useState(false)


    useEffect(() => {
        axios.get('https://code-project-backend.onrender.com')
            .then((res) => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const abrirCadastroDeProduto = () => {
        setOpenCadastroDeProduto(true)
    }

    const fecharModal = () => {
        setOpenCadastroDeProduto(false)
    }

    const calcularPrecoAntigo = (preco, porcentagem) => {
        return preco * (1 + porcentagem / 100);
    };

    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-page-menu">

                    {produtos.map((produto) => (
                        <Cardroupas
                            imagemRoupa={produto.imagem}
                            nomeRoupa={produto.nome}
                            descontoRoupa={calcularPrecoAntigo(produto.valor, 20).toFixed(2)}
                            precoRoupa={produto.valor}
                        />
                    ))}
                </div>
                <button className='btn-primary' onClick={() => abrirCadastroDeProduto()}>Cadastrar novo Produto</button>
            </section>
            <ModalCriarProduto open={openCadastroDeProduto} close={fecharModal} />
        </>
    )
}
