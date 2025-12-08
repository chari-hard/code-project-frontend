import './style.css'
import ImagemCamisaOudated from '../../../assets/images/camisa-outdated.svg'
import ImagemCamisaPain from '../../../assets/images/camisa-pain.svg'
import ImagemCamisaRave from '../../../assets/images/camisa-raveparty.svg'
import ImagemCamisaHuman from '../../../assets/images/camisa-human.svg'
import { Cardroupas } from '../../CARDS/cardroupas'




const listaDeRoupas = [
    {
        imagemRoupa:  ImagemCamisaOudated,
        nomeRoupa: "CAMISA OUTDATED",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisaPain,
        nomeRoupa: "CAMISETA PAIN",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisaRave ,
        nomeRoupa: "CAMISETA RAVE PARTY",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa:  ImagemCamisaHuman ,
        nomeRoupa: "CAMISA HUMAN",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    }
]

export const SectionLancamentos = () => {

    return (

        <section className='section-lancamentos'id='lancamentos'>

            <h2>LANÇAMENTOS</h2>


            <div className="container-lancamentos">

                <div className='container-camisas'>

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

        </section>
    )


}