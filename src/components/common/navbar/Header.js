import Container from "../layout/Container";
import { Link } from "react-router-dom";

export default function Header() {
    return <div className="header">
        <Container>
            <div className="headerNav flex items-center justify-between gap-8">
                <div>
                    <Link to="/">THassan</Link> </div>
                <div>
                    <ul className="flex items-center gap-8">
                        <li>
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
                <div><Link>+91 9073365825</Link></div>
            </div>
        </Container>
    </div>
}