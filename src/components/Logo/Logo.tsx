import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box, Icon } from "@/components";
import "./Logo.scss";

function Logo({ classNames = [] }: { classNames?: string[] }) {
    return (
        <Box classNames={classNames}>
            <Icon icon={faAirbnb as IconProp} />
        </Box>
    );
}

export default Logo;
