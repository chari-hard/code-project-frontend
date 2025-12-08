import { Cardroupas } from '../../components/CARDS/cardroupas'
import { Link } from 'react-router-dom'
import ImagemMoletom from '../../assets/images/moletom-blessed1.svg'
import './style.css'



const listaDeRoupas = [
    {
        imagemRoupa:  ImagemMoletom,
        nomeRoupa: "MOLETOM BLESSED",
        descontoRoupa: "R$119,99",
        precoRoupa: "R$99,99"
    },
    {
        imagemRoupa:  ImagemMoletom,
        nomeRoupa: "MOLETOM BLESSED",
        descontoRoupa: "R$119,99",
        precoRoupa: "R$99,99"
    },
    {
        imagemRoupa:  ImagemMoletom,
        nomeRoupa: "MOLETOM BLESSED",
        descontoRoupa: "R$119,99",
        precoRoupa: "R$99,99"
    },
    {
        imagemRoupa:  ImagemMoletom,
        nomeRoupa: "MOLETOM BLESSED",
        descontoRoupa: "R$119,99",
        precoRoupa: "R$99,99"
    },
]

export const PageInverno = () => {

    return (
        <>
            <div className='linha-de-sessoes'>
                <Link to= "/">Página inicial</Link>
                <Link to= "/ofertas">Ofertas</Link>
                <Link to= "/lancamentos">Lançamentos</Link>
            </div>

            <h2 className='h2-inverno'>Coleção de Inverno</h2>

            <div className='container-section-inverno'>

                {listaDeRoupas.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                    <Cardroupas
                        imagemRoupa={imagemRoupa}
                        nomeRoupa={nomeRoupa}
                        descontoRoupa={descontoRoupa}
                        precoRoupa={precoRoupa}
                    />
                ))}


            </div>


        </>
    )

}
