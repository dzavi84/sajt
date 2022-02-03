import styled from 'styled-components';

const Main = (props) => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
`;

const CommentCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
`;
export default Main;
