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

    return (
        <>
            <section className="section-music">
                <h2>Nossas músicas</h2>
                <div className="container-cards">

                    {produtos.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                        <Cardroupas
                            imagemRoupa={imagemRoupa}
                            nomeRoupa={nomeRoupa}
                            descontoRoupa={descontoRoupa}
                            precoRoupa={precoRoupa}
                        />
                    ))}
                </div>
                <button className='btn-primary' onClick={() => abrirCadastroDeProduto()}>Cadastrar nova música</button>
            </section>
            <ModalCriarProduto open={openCadastroDeProduto} close={fecharModal} />
        </>
    )
}
