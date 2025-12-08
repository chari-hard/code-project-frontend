import './style.css'
import ImagemMoletomAthena from '../../../assets/images/moletons-athenas.svg'
import ImagemMoletomBlessed1 from '../../../assets/images/moletons-blessedcolor.svg'
import ImagemMoletomBlessed2 from '../../../assets/images/moletons-blessed-dark.svg'
import ImagemMoletomWorldwide from '../../../assets/images/moletons-worldwide.svg'
import { CardroupasBranco } from '../../CARDS/cardroupas-branco'

const listaDeRoupas = [
    {
        imagemRoupa:  ImagemMoletomAthena,
        nomeRoupa: "MOLETOM ATHENA",
        descontoRoupa: "199,99",
        precoRoupa: "159,99"
    },

    {
        imagemRoupa:  ImagemMoletomWorldwide,
        nomeRoupa: "MOLETOM WORLD",
        descontoRoupa: "199,99",
        precoRoupa: "159,99"
    },

    {
        imagemRoupa:  ImagemMoletomBlessed1 ,
        nomeRoupa: "MOLETOM BLESSED C.",
        descontoRoupa: "199,99",
        precoRoupa: "159,99"
    },

    {
        imagemRoupa:  ImagemMoletomBlessed2 ,
        nomeRoupa: "MOLETOM BLESSED",
        descontoRoupa: "199,99",
        precoRoupa: "159,99"
    }
]

export const SectionInverno = () => {
    return (

        <section className="section-inverno" id='inverno'>

            <h2>COLEÇÃO INVERNO</h2>

            <div className="container-inverno">

                {listaDeRoupas.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                    <CardroupasBranco
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