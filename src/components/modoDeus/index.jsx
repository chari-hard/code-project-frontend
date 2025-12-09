import { Link } from 'react-router-dom'
import './style.css'

export const ModoDeus = () => {
    return(
        <section className='section-modo-deus'>
            <Link to="/admin"className='btn-secondary btn-deus'>MODO CRIATIVO</Link>
        </section>
    )
}