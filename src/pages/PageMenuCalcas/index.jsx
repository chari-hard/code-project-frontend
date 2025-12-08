import { Cardroupas } from '../../components/CARDS/cardroupas'
import ImagemCamisa from '../../assets/images/camisa-outdated.svg'
import ImagemCamisa2 from '../../assets/images/camisa-pain.svg'
import ImagemCamisa3 from '../../assets/images/camisa-raveparty.svg'
import ImagemCamisa4 from '../../assets/images/camisa-human.svg'
import { Link } from 'react-router-dom'
import './style.css'



const listaDeRoupas = [
    {
        imagemRoupa:  ImagemCamisa,
        nomeRoupa: "CAMISA OUTDATED",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisa2,
        nomeRoupa: "CAMISETA PAIN",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisa3 ,
        nomeRoupa: "CAMISETA RAVE PARTY",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisa4 ,
        nomeRoupa: "CAMISA HUMAN ARE GROSS",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    }
]

export const PageMenuCalcas = () => {

    return (
        <div className='page-menu'>

            <h2>CALÇAS</h2>

            <div className='container-page-menu'>

                {listaDeRoupas.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                    <Cardroupas
                        imagemRoupa={imagemRoupa}
                        nomeRoupa={nomeRoupa}
                        descontoRoupa={descontoRoupa}
                        precoRoupa={precoRoupa}
                    />
                ))}


            </div>


        </div>
    )

}
