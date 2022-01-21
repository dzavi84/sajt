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
      media(max-width:768px){
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

export default Login;
