import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img src='/images/044482e2.svg' />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-left: 0px;
  margin-top: 0px;
  font-size: 0px;
`;

export default Header;
