import { Card, Grid, Text, Link, Container, Avatar } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const organizations = [
  {
    name: "Tech Optimum",
    role: "Chief Operating Officer",
    img: "https://file.notion.so/f/s/cc66325a-9141-4580-8794-96d29473e013/Untitled.png?id=5cce5785-8dae-493d-965f-b8a32b714dc6&table=block&spaceId=429cde19-2fdd-4ed2-8a3a-21d2d677453f&expirationTimestamp=1689660000000&signature=i1zLxM98JHj4bS1Wwc4FqJlbtD_LpQsscNzIM31VrD4&downloadName=Untitled.png",
    link: "https://techoptimum.org",
    desc: "Tech Optimum is a 501(c)(3) nonprofit organization that aims to provide free STEM education to underprivileged students. We have 10+ courses and are looking to expand our reach."
  },
  {
    name: "Sierra Pacific STEM Club",
    role: "Founder/President | Chief Technology Officer",
    img: "https://spstem.com/stem.png",
    link: "https://spstem.com",
    desc: "A High school club that aims to provide free and fun STEM projects to students at Sierra Pacific High School."
  },
  {
    name: "Cal Commit",
    role: "Vice President | Director of IT",
    img: "https://calcommit.org/main_files/logo.svg",
    link: "https://calcommit.org",
    desc: "Leading a club in the computer science field that aspires to teach students collaboration and teamwork skills through the Git platform. We also plan to teach underprivileged cities and impoverished students."
  },
];

const OrganizationsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
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
      <Text h2>organizations</Text>
      <Grid.Container gap={2} justify="center" style={{display: 'flex'}}>
        {organizations.map((org, index) => (
          <Grid key={index} style={{display: 'flex'}}>
            <motion.div ref={ref} initial={{ opacity: 0, y: -100 }} animate={animationControl}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Card css={{ p: "$6", mw: "400px", flex: 1 }}>
                  <Card.Header>
                    <img squared alt={org.name} src={org.img} width="34px" height="34px" />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          {org.name}
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text>{org.role}</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>{org.desc}</Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link block isExternal color="primary" target="_blank" href={org.link}>
                      Visit Website
                    </Link>
                  </Card.Footer>
                </Card>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default OrganizationsSection;
