import './style.css'
import { SemiFooter } from '../../components/layout/section-semi-footer'
import { SectionInverno } from '../../components/layout/section-inverno'
import { SectionLancamentos } from '../../components/layout/section-lancamentos'
import { SectionOfertas } from '../../components/layout/section-ofertas'
import { Main } from '../../components/layout/main'
import { SectionMenu } from '../../components/layout/section-menu'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export const Home = () => {
    
    const { hash } = useLocation();
    
        useEffect(() => {
            if (hash) {
                const element = document.getElementById(hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, [hash]);

    return(
        <>
            <Main/>
            <SectionLancamentos/>
            <SectionMenu/>
            <SectionOfertas/>
            <SectionInverno/>
            <SemiFooter/>
        </>
    )
}
