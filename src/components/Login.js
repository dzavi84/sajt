import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href='/'>
          <img src='/images/Tigropolis_login-page.png' />
        </a>
        <div>
          <Join>Join Now!</Join>
          <Singin>Sign In!</Singin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your login page! </h1>
          <img src='/images/Vecteezy_Geometric-Background_Revisi2-Revisi_RW0320.jpg' />
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display:flex;
  align-items:top;
  position:relative;
  justify-content:space-between;
  flex-wrap:nowrap;


  b>a(
      width:135px;
      height:34px;
      @media screen and(max-width:768px){
          padding:0 5px;
      }


  )

`;
const Join = styled.a`
font-size:16px;
padding:10px 12px;
text-decoration:none;
border-radius:4px;
color:rgba(0,0,0,0.6);
margin-right:12;
&:hover{
    background-color:rgba(0,0,0,0.08);
    color:rgba(0,0,0,0.6)
    text-decoration:none;

}
`;
const Singin = styled.a`
  box-shadow: inset 0 0 0 1px #ff3131;
  color: #ff3131;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(255, 7, 58, 0.15);
    color: #ff3131;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flax-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 80%;

  h1 {
    text-align: center;
    padding-bottom: 0;
    width: 75%;
    font-size: 56px;
    color: rgba(255, 7, 58, 0.35);
    font-weight: 200;
    line-height: 70px;
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media screen and (max-width: 768px) {
      top: 230px;
      width: -webkit-fill-available;
      position: initial;
      height: initial;
    }
  }
`;

export default Login;
