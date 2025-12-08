import { Modal } from '@mui/material'
import { useState } from "react"
import './style.css'
import axios from 'axios'


export const ModalCriarProduto = ({open, close}) => {

    const [nome, setNome] = useState()
    const [imagem, setImagem] = useState()
    const [valor, setValor] = useState()

    const cadastro = () => {

        const novoProduto = {
            nome: nome,
            imagem: imagem,
            valor: valor,
        }

        axios.post('http://localhost:8081/cadastrar', novoProduto)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return(
        <Modal open={open} onClose={close} className='container-modal'>
            <div className="container-card-modal">
            <h2 className='cadastro-titulo'>CADASTRO DE ROUPAS</h2>
                <form>
                    <div>
                        <label htmlFor="">Nome do Produto:</label>
                        <input type="text" placeholder='nome do produto' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Imagem do Produto:</label>
                        <input type="text" placeholder='imagem do produto'value={imagem} onChange={(e) => setImagem(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Valor do Produto</label>
                        <input type="text" placeholder='preço do produto' value={valor} onChange={(e) => setValor(e.target.value)}/>
                    </div>
                    
                    <button className='btn' onClick={() => cadastro()}> Cadastrar </button>
                </form>
                
            </div>
        </Modal>
    )
}