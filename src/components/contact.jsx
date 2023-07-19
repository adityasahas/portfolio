import {
  Input,
  Text,
  Divider,
  Spacer,
  Textarea,
  Button,
  Container,
} from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    });
  }

  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={animationControl}
      >
        <form
          action="https://getform.io/f/7259a8ca-f9e7-4605-baf0-5b41fffd3909"
          method="POST"
        >
          <Text h2>contact me</Text>
          <Spacer y={2} />
          <Input
            name="name"
            clearable
            underlined
            labelPlaceholder="name"
            color="primary"
            width="65%"
          />{" "}
          <Spacer y={2} />
          <Input
            name="email"
            clearable
            underlined
            labelPlaceholder="email"
            color="primary"
            width="65%"

          />{" "}
          <Spacer y={2} />
          <Textarea
            name="message"
            bordered
            color="primary"
            labelPlaceholder="message"
            width="90%"

          />
          <Spacer y={2} />
          <Button shadow css={{ marginTop: "10px" }} color="success" type="submit">
            send
          </Button>
        </form>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
