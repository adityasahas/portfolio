import { Container, Text, Grid, Progress } from "@nextui-org/react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiPython } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5, proficiency: 90 },
  { name: "CSS3", icon: SiCss3, proficiency: 85 },
  { name: "JavaScript", icon: SiJavascript, proficiency: 95 },
  { name: "React-Native", icon: SiReact, proficiency: 65 },
  { name: "NextJS", icon: SiNextdotjs, proficiency: 80 },
  { name: "Python", icon: SiPython, proficiency: 90 },
];

const AboutMeSection = () => {
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
      <Text size="$xl">
        I enjoy flying, coding, building computers, with expertise in Python and some experience in web development. I volunteer at two nonprofits and have worked on client projects in computer building.
      </Text>
      <div style={{ margin: "0 5rem" }}>
        <Grid.Container gap={2} justify="center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Grid maxWidth="70" key={index} xs={24} sm={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ padding: "0.5em", textAlign: "center" }}>
                  <Icon size={50} />
                  <Text h4>{tech.name}</Text>
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
