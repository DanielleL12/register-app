import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <Nav className="nav"
                defaultActiveKey="/"
            >
                <Nav.Item>
                    <Link to={`/`} className="nav-link"> Home </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/journal`} className="nav-link"> Journals </Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Navbar