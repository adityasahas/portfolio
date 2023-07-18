import { Container, Button } from "@nextui-org/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

const LandingSection = () => {
  // Define the initial and animate states
  const initial = { opacity: 0, y: -100 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div initial={initial} animate={animate} transition={{ delay: 0.1, duration: 0.5 }}>
        <h1>hi, i'm aditya sahasranam.</h1>
      </motion.div>
      <motion.div initial={initial} animate={animate} transition={{ delay: 0.2, duration: 0.5 }}>
        <h3>learning. coding. building. deploying. flying.</h3>
      </motion.div>
      <motion.div initial={initial} animate={animate} transition={{ delay: 0.3, duration: 0.5 }}>
        <Button
          shadow
          auto
          style={{ marginTop: "2em" }}
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          icon={<AiOutlineArrowDown />}
        >
          Contact Me
        </Button>
      </motion.div>
    </Container>
  );
};

export default LandingSection;
