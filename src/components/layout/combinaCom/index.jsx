import './style.css'
import iconSacola from '../../../assets/images/iconSacola.svg'
import calcaBege from '../../../assets/images/calcaBege.svg'
import calcaPreta from '../../../assets/images/calcaPreta.svg'
import bermudaPreta from '../../../assets/images/bermudaPreta.svg'
import bermudamusgo from '../../../assets/images/bermudamusgo.svg'
import { Cardroupas } from '../../CARDS/cardroupas'



export const CombinaCom = () => {

    const listaDeRoupas = [
        {
            imagemRoupa: calcaBege,
            nomeRoupa: "MOLETOM BLESSED",
            descontoRoupa: "R$119,99",
            precoRoupa: "R$99,99"
        },
        {
            imagemRoupa: calcaPreta,
            nomeRoupa: "MOLETOM BLESSED",
            descontoRoupa: "R$119,99",
            precoRoupa: "R$99,99"
        },
        {
            imagemRoupa: bermudaPreta,
            nomeRoupa: "MOLETOM BLESSED",
            descontoRoupa: "R$119,99",
            precoRoupa: "R$99,99"
        },
        {
            imagemRoupa: bermudamusgo,
            nomeRoupa: "MOLETOM BLESSED",
            descontoRoupa: "R$119,99",
            precoRoupa: "R$99,99"
        },
    ]

    return (
        <section className='combina-com'>

            <h2 className='titulo-combinacom'>Combina com</h2>

            <div className='container-cards'>

                {listaDeRoupas.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                    <Cardroupas
                        imagemRoupa={imagemRoupa}
                        nomeRoupa={nomeRoupa}
                        descontoRoupa={descontoRoupa}
                        precoRoupa={precoRoupa}
                    />
                ))}

            </div>
        </section>
    )
}