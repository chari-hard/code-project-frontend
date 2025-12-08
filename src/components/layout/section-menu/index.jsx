import './style.css';
import menuBermuda from '../../../assets/images/menu-bermudas.svg'
import menuCalca from '../../../assets/images/menu-calcas.svg'
import menuCamiseta from '../../../assets/images/menu-camisetas.svg'
import menuMoletons from '../../../assets/images/menu-moletons.svg'
import { Link } from 'react-router-dom';


export const SectionMenu = () => {
    return (

        <section className="section-menu" id='menu'>

            <div className="container-menu">

                <Link to="/bermudas" className="card-menu">
                    <img src={menuBermuda} alt="imagem de uma bermuda" />
                </Link>

                <Link to="/camisetas" className="card-menu">
                    <img src={menuCamiseta} alt="imagem de uma camisa" />
                </Link>

                <Link to="/calcas" className="card-menu">
                    <img src={menuCalca} alt="imagem de uma calca" />
                </Link>

                <Link to="/moletons" className="card-menu">
                    <img src={menuMoletons} alt="imagem de um moleton" />
                </Link>


            </div>

        </section>

    )
}