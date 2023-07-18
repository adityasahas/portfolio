import { Input, Text, Divider, Spacer, Textarea, Button } from "@nextui-org/react";

const ContactSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "2em",
        
      }}
    >
      <div style={{ alignItems:"center", flex: 1, padding: "0 2em" }}>
      <form action="https://getform.io/f/7259a8ca-f9e7-4605-baf0-5b41fffd3909" method="POST">
        <Text h2>contact me</Text>
        <Spacer y={2} />
        <Input
          name="name"
          clearable
          underlined
          labelPlaceholder="Name"
          width="70%"
          color="primary"

        />{" "}
        <Spacer y={2} />
        <Input
          name="email"
          clearable
          underlined
          labelPlaceholder="Email"
          width="70%"
          color="primary"

        />{" "}        <Spacer y={2} />
        <Textarea
          name="message"
          bordered
          color="primary"
          labelPlaceholder="Message"
          width="70%"
        />
      <Button css={{marginTop:"10px"}} color="success" type="submit">Send</Button>
      </form>
      </div>
      <div style={{ flex: 1}}>
        <Text h2>more info</Text>
        <Spacer y={1} />
        <Text>Email: <code>contact@adityasahas.tech</code></Text>
        <Spacer y={0.5} />
        <Text>Discord: <code>bababooeyfr</code></Text>
        <Spacer y={0.5} />
      </div>
    </div>
  );
};

export default ContactSection;
