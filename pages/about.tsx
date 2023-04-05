import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Container>
        <Header />
        Hi there 👋 <br />
        <br /> I’m Penny, currently working as a front-end developer.
        Previously, as a journalist, marketer, and community builder for over 7
        years, I have worked with engineers and managed cross-border projects in
        France, Singapore, and the US. I am able to connect with various
        stakeholders on projects and enjoy problem-solving through storytelling,
        in the programming language, and multiple languages (CN/EN/JP).
        <br />
        <br />
        Welcome to my blog!
      </Container>
    </Layout>
  );
};

export default About;
