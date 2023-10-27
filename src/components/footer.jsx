import { Text, Link } from "@nextui-org/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        color: "#fff",
        marginTop: "2em",
      }}
    >
      <Text style={{textTransform: "lowercase"}} >
        &copy; {currentYear} <Link href="https://adityasahas.tech">https://adityasahas.tech</Link>. All Rights Reserved.
      </Text>
    </div>
  );
};

export default Footer;
