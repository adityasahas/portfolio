import { Input, Text, Divider, Spacer, Textarea } from "@nextui-org/react";

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
        <Text h2>contact me</Text>
        <Spacer y={2} />
        <Input
          clearable
          underlined
          labelPlaceholder="Name"
          width="70%"
          color="primary"

        />{" "}
        <Spacer y={2} />
        <Input
          clearable
          underlined
          labelPlaceholder="Email"
          width="70%"
          color="primary"

        />{" "}        <Spacer y={2} />
        <Textarea
          bordered
          color="primary"
          labelPlaceholder="Message"
          width="70%"
        />
      </div>
      <div style={{ flex: 1}}>
        <Text h2>more info</Text>
        <Spacer y={1} />
        <Text>Email: contact@adityasahas.tech</Text>
        <Spacer y={0.5} />
        <Text>Discord: bababooeyfr</Text>
        <Spacer y={0.5} />
      </div>
    </div>
  );
};

export default ContactSection;
