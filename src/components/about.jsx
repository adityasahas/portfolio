import { Container, Text, Grid, Progress } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiPython } from "react-icons/si";
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: "HTML", icon: SiHtml5, proficiency: 90 },
  { name: "CSS3", icon: SiCss3, proficiency: 85 },
  { name: "JavaScript", icon: SiJavascript, proficiency: 95 },
  { name: "React-Native", icon: SiReact, proficiency: 65 },
  { name: "NextJS", icon: SiNextdotjs, proficiency: 80 },
  { name: "Python", icon: SiPython, proficiency: 90 },
];

const AboutMeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animations will happen only once
  });
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  return (
    <Container
      fluid
      style={{
        padding: "2em 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text h2>about me</Text>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={animationControl}>
        <Text size="$xl">I enjoy flying, coding, building computers, with expertise in Python and some experience in web development. I volunteer at two nonprofits and have worked on client projects in computer building.</Text>
      </motion.div>
      <div style={{ margin: "0 5rem" }}>
        <Grid.Container gap={2} justify="center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Grid maxWidth="70" key={index} xs={24} sm={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div ref={ref} style={{ padding: "0.5em", textAlign: "center" }}>
                  <motion.div initial={{ opacity: 0, y: -100 }} animate={animationControl}>
                    <Icon size={50} />
                    <Text h4>{tech.name}</Text>
                  </motion.div>
                </div>
                <Progress shadow status={"primary"} value={tech.proficiency} color="primary" />
              </Grid>
            )
          })}
        </Grid.Container>
      </div>
    </Container>
  );
};

export default AboutMeSection;
