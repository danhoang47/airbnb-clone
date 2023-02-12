import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function Icon({ icon }: { icon: IconDefinition }) {
    return (  
        <FontAwesomeIcon icon={icon} />
    );
}

export default Icon;