import Container from "../layout/Container";
import { Link } from "react-router-dom";

export default function Header() {
    return <div className="header">
        <Container>
            <div className="headerNav">
                <div>
                    <Link to="/">THassan</Link> </div>
                <div>
                    <ul><li>
                        <Link to="/about">About</Link >
                    </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link >
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link >
                        </li>

                    </ul>
                </div>
            </div>
        </Container>
    </div>
}