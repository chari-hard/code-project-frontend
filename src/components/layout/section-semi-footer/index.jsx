import './style.css'
import IconRelogio from '../../../assets/images/f-icon-relogio.svg'
import IconCaixa from '../../../assets/images/f-icon-caixa.svg'
import IconCaminhao from '../../../assets/images/f-icon-caminhao.svg'
import IconCartao from '../../../assets/images/f-icon-cartao.svg'

export const SemiFooter = () => {
    return (

        <section className='section-semifooter'>

            <div className="card-semi-footer">
                <img src={IconRelogio} alt="Relógio" />
                <h3 className='card-title'>ATENDIMENTO</h3>
                <p className='card-descricao'>Segunda à sexta das 08h00 às 18h00</p>
            </div>

            <div className="card-semi-footer">
                <img src={IconCaixa} alt="Caixa" />
                <h3 className='card-title'>TROCAS E DEVOLUÇÕES</h3>
                <p className='card-descricao'>Suporte exclusivo para trocas e devoluções</p>
            </div>

            <div className="card-semi-footer">
                <img src={IconCaminhao} alt="Caminhão" />
                <h3 className='card-title'>FRETE E ENTREGA</h3>
                <p className='card-descricao'>Entrega com prazo máximo de até 14 dias</p>
            </div>

            <div className="card-semi-footer">
                <img src={IconCartao} alt="Cartão" />
                <h3 className='card-title'>PARCELAMENTO</h3>
                <p className='card-descricao'>Parcelamos 12x sem juros no cartão</p>
            </div>

        </section>

    )
}