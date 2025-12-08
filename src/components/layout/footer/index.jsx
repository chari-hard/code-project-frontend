import './style.css'

import IconMastercard from '../../../assets/images/p-icon-mastercard.svg'
import IconVisa from '../../../assets/images/p-icon-visa.svg'
import IconElo from '../../../assets/images/p-icon-elo.svg'
import IconPix from '../../../assets/images/p-icon-pix.svg'

import IconTelefone from '../../../assets/images/s-icon-telefone.svg'
import IconWhatsapp from '../../../assets/images/s-icon-whatsapp.svg'

import IconInstagram from '../../../assets/images/r-icon-instagram.svg'
import IconFacebook from '../../../assets/images/r-icon-facebook.svg'
import IconLinkedin from '../../../assets/images/r-icon-linkedin.svg'
import IconTiktok from '../../../assets/images/r-icon-tiktok.svg'

export const Footer = () => {
    return (
        <footer>

            <div className="container-footer">

                <div className="formas-de-pagamento">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <div className='box-pagamentos'>
                        <img src={IconMastercard} alt="mastercard" />
                        <img src={IconVisa} alt="visa" />
                        <img src={IconElo} alt="elo" />
                        <img src={IconPix} alt="pix" />
                    </div>
                </div>

                <div className="contato-e-suporte">
                    <h3>SUPORTE E CONTATO</h3>

                    <div className='telefone'> <img src={IconTelefone} alt="telefone" /><h4>4002 - 8922</h4></div>
                    <div className='whatsapp'> <img src={IconWhatsapp} alt="whatsapp" /><h4>(11) 98881 - 8234</h4></div>
                </div>


                <div className="redes-sociais">
                    <h3>REDES SOCIAIS</h3>
                    <div className='box-redes-sociais'>
                        <img src={IconInstagram} alt="instagram" />
                        <img src={IconFacebook} alt="facebook" />
                        <img src={IconLinkedin} alt="linkedin" />
                        <img src={IconTiktok} alt="tiktok" />
                    </div>
                </div>
            </div>

            <p> © 2025 CODE. Todos os direitos reservados.<br />
                Este site foi criado como projeto do SENAC. As imagens e elementos visuais foram gerados com inteligência artificial.</p>

        </footer>
    )
}