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
                hi, i'm aditya sahasranam.
            </Text>
            <Text h3 >
                learning. coding. building. deploying. flying.
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
