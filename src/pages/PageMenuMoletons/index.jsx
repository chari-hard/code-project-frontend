import { useEffect, useState } from 'react'
import { Cardroupas } from '../../components/CARDS/cardroupas'
import './style.css'
import axios from 'axios'


export const PageMenuMoletons = () => {

    const [produtos, setProdutos] = useState([])

    const calcularPrecoAntigo = (preco, porcentagem) => {
        return preco * (1 + porcentagem / 100);
    };

    useEffect(() => {
        axios.get('https://code-project-backend.onrender.com')
            .then((res) => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='page-menu'>

            <h2>MOLETONS</h2>

            <div className='container-page-menu'>

                {produtos.map((produto) => (
                        <Cardroupas
                            imagemRoupa={produto.imagem}
                            nomeRoupa={produto.nome}
                            descontoRoupa={calcularPrecoAntigo(produto.valor, 20).toFixed(2)}
                            precoRoupa={produto.valor}
                        />
                    ))}


            </div>


        </div>
    )

}
