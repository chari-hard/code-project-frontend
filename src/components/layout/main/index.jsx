import { EmblaCarousel } from '../../carrossel';
import './style.css'
import bannerMain from '../../../assets/images/banner-main.svg'
import bannerPromocao from '../../../assets/images/banner-promocao.svg'


export const Main = () => {

    const bannersMain = [
        bannerMain, bannerPromocao
    ];

    return (

        <EmblaCarousel images={bannersMain}/>

    )
}
