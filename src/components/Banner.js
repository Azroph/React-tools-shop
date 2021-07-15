import '../styles/Banner.css'
import outils from '../assets/outils.png'

function Banner() {

    const title = 'La boite à outils'
    return (
        <div className='lmj-banner'>
            <img src={outils} alt='La boite à outils' className='lmj-outils' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner