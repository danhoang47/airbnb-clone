import { Container, DatePicker } from "@/components";
import LogoWithName from "../LogoWithName/LogoWithName";
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <Container classNames={["header-container"]}>
                <LogoWithName />
                <DatePicker />
            </Container>
        </header>
    );
}

export default Header;
