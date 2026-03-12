import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects = [
    {
        id: "01",
        title: "Blue Water Shipping",
        category: "Digital Design",
        image: "https://picsum.photos/seed/arch/1200/800",
        description: "Exploring the intersection of light and structure in virtual spaces.",
    },
    {
        id: "02",
        title: "Tidslerne",
        category: "Branding",
        image: "https://picsum.photos/seed/mono/1200/800",
        description: "A minimalist approach to corporate identity for a sustainable future.",
    },
    {
        id: "03",
        title: "Cod3rs",
        category: "Photography",
        image: "https://picsum.photos/seed/silent/1200/800",
        description: "Capturing the stillness of abandoned industrial landscapes.",
    },
    {
        id: "04",
        title: "LaLiga standings",
        category: "Motion Graphics",
        image: "https://picsum.photos/seed/flow/1200/800",
        description: "Dynamic visual systems inspired by fluid dynamics and organic growth.",
    },
];

export const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const sectionRef = useRef(null);

    // Slide-up entrance as the section scrolls into view
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    const sectionY = useTransform(smoothProgress, [0, 1], [140, 0]);
    const sectionOpacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);

    return (
        <motion.section
            className="project"
            id="projects"
            ref={sectionRef}
            style={{ y: sectionY, opacity: sectionOpacity }}
        >
            {/* Backdrop overlay for card zoom */}
            <div
                className={`proj-backdrop${hoveredId ? " proj-backdrop--active" : ""}`}
                onMouseEnter={() => setHoveredId(null)}
            />

            <Container>
                <Row className="mb-5">
                    <Col className="text-start">
                        <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }}>Projects</h2>
                        <p>Here are some of my projects</p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col key={project.id} xs={12} md={6}>
                            <div
                                className={`proj-card${hoveredId === project.id ? " proj-card--zoomed" : ""}`}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="proj-card-img-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="proj-card-img"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                <div className="proj-card-overlay">
                                    <span className="proj-card-category">{project.category}</span>
                                    <h3 className="proj-card-title">{project.title}</h3>
                                    <p className="proj-card-desc">{project.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp2} alt="" />
        </motion.section>
    );
};