import { useState } from "react";
import {
  Card,
  Text,
  Link,
  Container,
  Button,
  Badge,
  Modal,
} from "@nextui-org/react";

const ProjectsSection = () => {
  const projects = [
    {id: 0,
    keyword: "Startup",
  name: "Perceptify",
img: "p.png",
link: "https://joinperceptify.com",
desc: "Powerful relevance and sentiment analytics for brand performance. Data-driven, actionable insights and recommendations for marketing strategies. Streamlined integrations and customization. A beautifully refreshing and seamless take on marketing infrastructure, built for you."},
    {
      id: 1,
      keyword: "Hackathon Website",
      name: "Oasis Hacks 2023",
      img: "https://media.istockphoto.com/id/165958447/vector/postcard-palms-sea.jpg?s=612x612&w=0&k=20&c=6A8hIdZwed0_6SOS5f14K25kvXioPxVOoxsOt6G2W5I=",
      link: "https://oasishacks.com",
      desc: "A website for a hackathon in Oakland, California that I am organizing. It is a hackathon for high school students that aims to provide a fun and educational experience for all participants. ",
    },
    {
      id: 2,
      keyword: "Education",
      name: "Tech Optimum",
      img: "https://www.techoptimum.org/learn-in-seconds.jpg",
      link: "https://techoptimum.org",
      desc: "I am the COO for Tech Optimum. Tech Optimum is a 501(c)(3) nonprofit organization that aims to provide free Computer Science education to underprivileged students. We have 10+ courses and are looking to expand our reach.",
    },
    {
      id: 3,
      keyword: "Hackathon Project",
      name: "Resumate",
      img: "https://i.pinimg.com/736x/a3/00/33/a3003310dc763123d4b5c067fe358535.jpg",
      link: "https://resumate.tech/",
      desc: "A hackathon project that I worked on with a team of 4. It is a resume builder that uses markdown to generate a resume template that is editable. It also uses AI to rate your preexisting resume.",
    },
    {
      id: 4,
      keyword: "E-Commerce",
      name: "Rabbit Meat Store",
      img: "https://lirp.cdn-website.com/b9056a0f/dms3rep/multi/opt/hillsborobarn-640w.jpeg",
      link: "https://maxxriley.com",
      desc: "A website for a client that sells rabbit meat. It is a full-stack e-commerce website that uses Stripe for payments and NextJS for the frontend.",
    },
    {
      id: 5,
      keyword: "Staff Portal",
      name: "Tech Optimum Staff",
      img: "https://nextui.org/images/card-example-4.jpeg",
      link: "https://staff.techoptimum.org",
      desc: "A staff portal for Tech Optimum. It is a full-stack website that uses NextJS and NextUI for the frontend.",
    },
    {
      id: 6,
      keyword: "High School Club",
      name: "Sierra Pacific STEM Club",
      img: "https://64.media.tumblr.com/2d5b71f8e25551d9a2568db6343bbbde/b59fd49117f927fe-0a/s540x810/bd71b166b8e6dca63b8421bdd6fed4f274f1c36e.jpg",
      link: "https://spstem.com",
      desc: "A High school club that aims to provide free and fun STEM projects to students at Sierra Pacific High School.",
    },
    {
      id: 7,
      keyword: "Machine Learning",
      name: "Python ASL to Language",
      img: "https://w0.peakpx.com/wallpaper/831/927/HD-wallpaper-python-programming-syntax-python-code-computer-programming-syntax.jpg",
      desc: "A machine learning project that I worked on for fun. It is a program that uses a webcam to detect ASL and translate it to any language of users choice.",
    },
    {
      id: 8,
      keyword: "E-Commerce",
      name: "Launchpad Labs",
      img: "https://wallpapers.com/images/hd/night-city-aesthetic-f2114yshb1p9dmgq.jpg",
      link: "https://launchpadlabs.pro",
      desc: "A website for a client that sells custom websites and templates. It is a full-stack e-commerce website that uses Stripe for payments and NextJS for the frontend.",
    },
    
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        style={{
          flex: hovered ? 2 : 1,
          transition: "all 0.3s ease-in-out",
          margin: "1em",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card css={{ w: "100%", h: "300px" }}>
          <Card.Header
            css={{ position: "absolute", zIndex: 1, top: 5, left: 5 }}
          >
            <div>
              <Badge style={{textTransform: "lowercase"}} disableOutline variant="flat">
                {project.keyword}
              </Badge>
              <Text style={{textTransform: "lowercase"}}  h3 color="white">
                {project.name}
              </Text>
            </div>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={project.img}
              width="100%"
              height="100%"
              objectFit="cover"
              alt={project.name}
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {project.link ? (
              <Link
                block
                isExternal
                icon
                color="primary"
                target="_blank"
                href={project.link}
              >
                website
              </Link>
            ) : (
              <Text color="gray">no link</Text>
            )}
            <Button
              auto
              color="primary"
              onClick={() => handleOpenModal(project)}
            >
              about this project
            </Button>
          </Card.Footer>{" "}
        </Card>
      </div>
    );
  };

  const handleOpenModal = (project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentProject(null);
    setIsOpen(false);
  };

  const rows = [...Array(Math.ceil(projects.length / 3))];

  const projectRows = rows.map((row, idx) =>
    projects.slice(idx * 3, idx * 3 + 3)
  );
  return (
    <>
      <Container
        fluid
        style={{
          padding: "2em 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text h2>my projects</Text>
      </Container>
      <Modal blur closeButton open={isOpen} onClose={handleCloseModal}>
        <Modal.Header>{currentProject?.name}</Modal.Header>
        <Modal.Body>
          <Text transform="lowercase" p>{currentProject?.desc}</Text>
        </Modal.Body>

        <Modal.Footer>
          <Button passive onClick={handleCloseModal}>
            close
          </Button>
          {currentProject?.link ? (
              <Link
                block
                isExternal
                icon
                color="primary"
                target="_blank"
                href={currentProject?.link}
              >
                website
              </Link>
            ) : (
              <Text color="gray">no link</Text>
            )}
        </Modal.Footer>
      </Modal>
      <div className="project-container">
        {projectRows.map((row, idx) => (
          <div className="project-row" key={idx}>
            {row.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .project-container {
          width: 65%;
          margin: 0 auto;
        }

        .project-row {
          display: flex;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .project-row {
            flex-direction: column;
          }
          .project-container {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectsSection;