import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
export const Video = () => {

 

    return(
           <section className="video" id="video">
        <Container>
            <Row>
                <Col>
                    <div className="video-bx mb-5 mt-5">
                        <h2>
                            Video CV
                        </h2>

                        <div style={{ position: "relative", paddingTop: "56.25%" }}>
                            <iframe 
                            src="https://www.youtube.com/embed/8XC8sodXkuM"
                            title="Video CV"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                border: 0,
                                borderRadius: 12,
                                }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                
                            />
                    




                        </div>

                        
                       

                    </div>
                </Col>
            </Row>
        </Container>

        <img className="background-image-left" src={colorSharp} />


    </section>
        
    );
}