import './style.css'
import imagemCarrinho from '../../../assets/images/icon-sacola-branca.svg'

export const CardroupasBranco = ({imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa}) => {
    return(
        <div className='cardroupa-branco'>
            <img src={imagemRoupa} alt={nomeRoupa} className='imagem-roupa-branco'/>


            <div className='roupa-content-branco'>
                <div>
                    <p className='nome-roupa-branco'>{nomeRoupa}</p>

                    <div className='prizes-branco'>
                        <p className='discount-roupa-branco'>R${descontoRoupa}</p>
                        <p className='prize-roupa-branco'>R${precoRoupa}</p>
                    </div>
                </div>

                <img src={imagemCarrinho} alt="carrinho branco" />
            </div>
        </div>
    )
}