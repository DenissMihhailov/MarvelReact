import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png'

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers"/>
            <div className="app__banner-text">
                Igal nädalal uued koomiksid!<br/>
                Püsige lainel!
            </div>
            <img src={avengersLogo} alt="Avengerslogo"/>
        </div>
    )
}

export default AppBanner;