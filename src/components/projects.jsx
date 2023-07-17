import { Card, Grid, Text, Link, Container, Button } from "@nextui-org/react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      keyword: "HACKATHON website",
      name: "Oasis Hacks 2023",
      img: "https://media.istockphoto.com/id/165958447/vector/postcard-palms-sea.jpg?s=612x612&w=0&k=20&c=6A8hIdZwed0_6SOS5f14K25kvXioPxVOoxsOt6G2W5I=",
      link: "https://oasiswebsite.com",
    },
    {
      id: 2,
      keyword: "EDUCATION",
      name: "Tech Optimum",
      img: "https://www.techoptimum.org/learn-in-seconds.jpg",
      link: "https://techoptimum.org",
    },
    {
      id: 3,
      keyword: "HACKATHON PROJECT",
      name: "Resumate",
      img: "https://i.pinimg.com/736x/a3/00/33/a3003310dc763123d4b5c067fe358535.jpg",
      link: "https://resumate.tech/",
    },
    {
      id: 4,
      keyword: "E-commerce",
      name: "Rabbit Meat Store",
      img: "https://lirp.cdn-website.com/b9056a0f/dms3rep/multi/opt/hillsborobarn-640w.jpeg",
      link: "https://maxxriley.com",
    },
    {
      id: 5,
      keyword: "Staff Portal",
      name: "Tech Optimum Staff",
      img: "https://nextui.org/images/card-example-4.jpeg",
      link: "https://staff.techoptimum.org",
    },
    {
      id: 6,
      keyword: "High School Club",
      name: "Sierra Pacific STEM Club",
      img: "https://64.media.tumblr.com/2d5b71f8e25551d9a2568db6343bbbde/b59fd49117f927fe-0a/s540x810/bd71b166b8e6dca63b8421bdd6fed4f274f1c36e.jpg",
      link: "https://spstem.com",
    },
    {
      id: 7,
      keyword: "Machine Learning",
      name: "Python Sign Language to Language",
      img: "https://w0.peakpx.com/wallpaper/831/927/HD-wallpaper-python-programming-syntax-python-code-computer-programming-syntax.jpg",
    },
    {
      id: 8,
      keyword: "Dashboard",
      name: "Tech Optimum Dashboard",
      img: "https://wallpapers.com/images/hd/educational-items-aesthetic-bg8i103jk2cdd1gc.jpg",
      link: "https://dashboard.techoptimum.org",
    },
  ];
  const renderCard = (project) => (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, left: 5 }}>
        <div>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {project.keyword}
          </Text>
          <Text h3 color="white">
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
          <Link block isExternal icon color="primary" target="_blank" href={project.link}>
            Visit Website
          </Link>
        ) : (
          <Text color="gray">No link</Text>
        )}
        <Button auto color="primary">
          About this project
        </Button>
      </Card.Footer>
    </Card>
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
      <Grid.Container
        gap={2}
        justify="center"
        style={{ width: "65%", margin: "0 auto" }}
      >
        <Grid xs>{renderCard(projects[0])}</Grid>
        <Grid xs>{renderCard(projects[1])}</Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        justify="center"
        style={{ width: "65%", margin: "0 auto" }}
      >
        <Grid xs>{renderCard(projects[2])}</Grid>
        <Grid xs>{renderCard(projects[3])}</Grid>
        <Grid xs>{renderCard(projects[4])}</Grid>
      </Grid.Container>

      <Grid.Container
        gap={2}
        justify="center"
        style={{ width: "65%", margin: "0 auto" }}
      >
        <Grid xs={6}>{renderCard(projects[5])}</Grid>
        <Grid xs>{renderCard(projects[6])}</Grid>
        <Grid xs>{renderCard(projects[7])}</Grid>
      </Grid.Container>
    </>
  );
};

export default ProjectsSection;