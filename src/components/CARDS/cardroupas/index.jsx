import './style.css'
import imagemCarrinho from '../../../assets/images/iconSacola.svg'
import { Link } from 'react-router-dom'

export const Cardroupas = ({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => {
    return (
        <Link to="/comprar" className='cardroupa'>
            <img src={imagemRoupa} alt={nomeRoupa} className='imagem-roupa' />


            <div className='roupa-content'>
                <div className='nome-e-preco'>
                    <p className='nome-roupa'>{nomeRoupa}</p>

                    <div className='prizes'>
                        <p className='discount'>R${descontoRoupa}</p>
                        <p className='prize'>R${precoRoupa}</p>
                    </div>
                </div>

                <img src={imagemCarrinho} alt="carrinho" />
            </div>
        </Link>
    )
}