import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "../ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  background: #0f172a;
  overflow: hidden;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AboutSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Section id="about">
      <ThreeBackground />
      <Content ref={contentRef}>
        <Title>About Me</Title>
        <Paragraph>
          I'm a passionate developer with a knack for creating immersive web
          experiences.
        </Paragraph>
        <Paragraph>
          My journey in web development has led me to explore the realms of 3D
          graphics and interactive design.
        </Paragraph>
        <Paragraph>
          I strive to blend technology and creativity to build applications that
          captivate and engage users.
        </Paragraph>
      </Content>
    </Section>
  );
};

export default AboutSection;
