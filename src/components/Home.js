import styled from 'styled-components';

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry?</a>
        </h5>

        <p>
          Find Talented pros in record with Upwork and keep business moving.
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 54px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px o;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: o 5px;
  }
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
export default Home;
