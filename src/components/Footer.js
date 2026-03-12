import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer" >
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />

                    </Col>
                    <Col sm={6} className="text-center text-sm-end"> 
                        <div className="social-icon">
                            <a href="https://github.com/Clifbn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <img src={navIcon1} alt="GitHub profile" />
                            </a>
                            <a href="mailto:clifton@example.com" aria-label="Email">
                                <img src={navIcon3} alt="Send email" />
                            </a>
                        </div>
                        <p>CopyRight 2026. All Right Reserved Clifton Benjamin</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
    

}