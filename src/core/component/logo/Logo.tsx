import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

import Icon from '@component/icon';

import "./styles.scss"

function Logo() {
    return (  
        <Icon icon={faAirbnb} className="brand-logo"/>
    );
}

export default Logo;