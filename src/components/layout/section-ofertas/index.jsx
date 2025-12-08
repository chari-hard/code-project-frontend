import './style.css'
import BannerDesconto from '../../../assets/images/banner-desconto.svg'
import ImagemCamisa from '../../../assets/images/camisa-outdated.svg'
import { Cardroupas } from '../../CARDS/cardroupas'


export const SectionOfertas = () => {

    return (

        <section className='section-ofertas' id='ofertas'>

            <img className='banner-desconto' src={BannerDesconto} alt="" />

            <div className='containter-ofertas-h2'>

                <h2>OFERTAS</h2>

                <div className='container-ofertas'>


                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />
                    </div>

                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />
                    </div>

                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />
                    </div>

                </div>

            </div>
        </section>

    )
}