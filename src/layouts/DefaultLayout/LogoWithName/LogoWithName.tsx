import { Logo, Box } from "@/components";
import { Link } from "react-router-dom";
import "./LogoWithName.scss";

function LogoWithName() {
    return (
        <Box classNames={["logo-with-name"]}>
            <Link to="/">
                <Box classNames={["d-flex-v-center"]} sx={{ gap: "0.2rem" }}>
                    <Logo />
                    <p className="website-name">airbnb</p>
                </Box>
            </Link>
        </Box>
    );
}

export default LogoWithName;
