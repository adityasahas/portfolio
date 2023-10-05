import { Card, Grid, Text, Link, Container, Avatar } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const organizations = [
  {
    name: "Tech Optimum",
    role: "Chief Operating Officer",
    img: "to.png",
    link: "https://techoptimum.org",
    desc: "Tech Optimum is a 501(c)(3) nonprofit organization that aims to provide free STEM education to underprivileged students. We have 10+ courses and are looking to expand our reach.",
  },
  {
    name: "Perceptify",
    role: "Chief Operating Officer",
    img: "/prcptify.jfif",
    link: "https://joinperceptify.com",
    desc: "Turning customer data into powerful marketing insights.",
  },
  {
    name: "Cal Commit",
    role: "Vice President | Director of IT",
    img: "https://www.calcommit.org/static/media/Cal%20Commit%20Logo.61f1b6550628314ab268e2d58cbca7e9.svg",
    link: "https://calcommit.org",
    desc: "Leading a club in the computer science field that aspires to teach students collaboration and teamwork skills through the Git platform. We also plan to teach underprivileged cities and impoverished students.",
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
                    <img style={{borderRadius: "1000px"}} alt={org.name} src={org.img} width="34px" height="34px" />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text style={{textTransform: "lowercase"}} h4 css={{ lineHeight: "$xs" }}>
                          {org.name}
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text style={{textTransform: "lowercase"}} >{org.role}</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text style={{textTransform: "lowercase"}} >{org.desc}</Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link style={{textTransform: "lowercase"}} block isExternal color="primary" target="_blank" href={org.link}>
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
