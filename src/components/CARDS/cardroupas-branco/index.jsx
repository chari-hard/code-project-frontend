import './style.css'
import imagemCarrinho from '../../../assets/images/icon-sacola-branca.svg'
import { Link } from 'react-router-dom'


export const CardroupasBranco = ({imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa}) => {
    return(
        <Link to="" className='cardroupa-branco'>
            <img src={imagemRoupa} alt={nomeRoupa} className='imagem-roupa-branco'/>


            <div className='roupa-content-branco'>
                <div className='nome-e-preco-branco'>
                    <p className='nome-roupa-branco'>{nomeRoupa}</p>

                    <div className='prizes-branco'>
                        <p className='discount-roupa-branco'>R${descontoRoupa}</p>
                        <p className='prize-roupa-branco'>R${precoRoupa}</p>
                    </div>
                </div>

                <img src={imagemCarrinho} alt="carrinho branco" />
            </div>
        </Link>
    )
}