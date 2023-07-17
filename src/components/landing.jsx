// import necessary dependencies
import { Container, Text, Button } from '@nextui-org/react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const LandingSection = () => {
    return (
        <Container 
            fluid 
            style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
        >
            <Text h1>
                Hi, I'm Aditya Sahasranam
            </Text>
            <Text h3 light>
                Full-Stack Developer | Tech Enthusiast | Hackathon Winner
            </Text>
            <Button 
                shadow
                auto 
                style={{marginTop: '2em'}} 
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                icon={<AiOutlineArrowDown />} 
            >
                Contact Me
            </Button>
        </Container>
    );
}

export default LandingSection;
