import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img className='logo' src='/images/044482e2-removebg-preview.png' />
          </a>
        </Logo>
        <Search>
          <div>
            <input type='text' placeholder='Search' />
            <SearchIcon>
              <img src='/images/search-icon.svg' />
            </SearchIcon>
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a>
                <img src='/images/nav-home.svg' />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-network.svg' />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-jobs.svg' />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-messaging.svg' />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src='/images/nav-notifications.svg' />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src='/images/user.svg' />
                <span>
                  Me
                  <img src='/images/down-icon.svg' />
                </span>
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src='/images/nav-work.svg' />
                <span>
                  Work
                  <img src='/images/down-icon.svg' />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
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
  margin: -10px;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  font-size: 0px;
  margin-right: 8px;
  margin-top: -8px;
  max-width: 34px;
  max-height: 34px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dc06f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: blok;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flax-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      background-color: red;
      transition: transform 0.2s ease-in-out;
      left: 0;
      position: absolute;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  margin: -7px;
  display: flex;
  align-item: center;

  a {
    display: flex;

    align-items: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1, 5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 7868px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-item: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
