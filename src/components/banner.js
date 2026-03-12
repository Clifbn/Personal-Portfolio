import { useState, useEffect, useRef } from "react";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ROTATE_STRINGS = ["FrontEnd Developer", "Graphic Designer", "UI/UX Developer", "Video Editor"];

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1800;

    const sectionRef = useRef(null);

    // Scroll-based animations scoped to the banner section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    // Hero content fades out, lifts up, and very slightly scales up as you scroll
    const heroOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
    const heroY = useTransform(smoothProgress, [0, 0.6], [0, -80]);
    const heroScale = useTransform(smoothProgress, [0, 0.6], [1, 1.06]);

    useEffect(() => {
        const tick = () => {
            let i = loopNum % ROTATE_STRINGS.length;
            let fullText = ROTATE_STRINGS[i];
            let updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 1.5);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        };

        let ticker = setInterval(() => { tick(); }, delta);
        return () => { clearInterval(ticker); };
    }, [text, delta, isDeleting, loopNum, period]);



    return (
        <section className="banner" id="home" ref={sectionRef}>
            {/* All hero content wrapped in a single motion div that fades + lifts on scroll */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                className="banner-motion-wrap"
            >
                {/* Name at left edge */}
                <div className="banner-name">
                    <h1>Clifton<br />Benjamin</h1>
                    <div className="banner-text">
                        <h1 style={{ textAlign: "right", fontSize: "2.4rem" }}> A <span className="wrap-text">{text}</span></h1>
                    </div>
                </div>

                {/* <Container>
                    <Row className="align-items-start">
                        <Col xs={12} md={6} xl={5} className="ms-auto">
                            <h1> A <span className="wrap-text">{text}</span></h1>
                        </Col>
                    </Row>
                </Container> */}
            </motion.div>
        </section>
    );
};