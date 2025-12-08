import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import iconLupa from "../../../assets/images/iconlupa.svg"
import logoCode from "../../../assets/images/logoCode.svg"
import iconPerfil from "../../../assets/images/iconPerfil.svg"
import iconSacola from "../../../assets/images/SACOLATESTE.svg"
import OffCanvasCarrinho from "../../MODALS/offcanvasCarrinho";
import OffCanvasPesquisa from '../../MODALS/OffCanvasPesquisa'


export const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const menuItems = [
        { label: "Home", onClick: () => console.log("Home") },
        { label: "Perfil", onClick: () => console.log("Perfil") },
        { label: "Configurações", onClick: () => console.log("Configurações") },
    ];

    return (
        <div>

            <div className="top-line">
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
            </div>

            <header className="header">

                <button className="btn-search">
                    <img
                        src={iconLupa}
                        alt="botão de pesquisa"
                        onClick={() => setSearchOpen(true)}
                    />
                </button>

                <Link to="/">
                    <img src={logoCode} alt=" imagem com a logo" />
                </Link>

                <div className="btns-kart-profile">

                    <button className="btn-kart" onClick={() => setDrawerOpen(true)}>
                        <img src={iconSacola} alt="botão de carrinho" />
                    </button>

                    <Link to="/login" className="btn-profile">
                        <img src={iconPerfil} alt="botão de perfil" />
                    </Link>

                </div>

            </header>

            <nav className='linha-de-sessoes'>
                <Link to= "/#lancamentos">Lançamentos</Link>
                <Link to= "/#menu">Menu</Link>
                <Link to= "/#ofertas">Ofertas</Link>
                <Link to= "/#inverno">Inverno</Link>
            </nav>

            <OffCanvasCarrinho
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                items={menuItems}
            />

            <OffCanvasPesquisa
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </div>
    );
};
