import styled from "styled-components"

const Content = styled.div`
  z-index: 3;
  width: 720px;
  height: 500px;
  animation: 3s loading infinite ease-in-out;
`;

const DogFactArea = styled.div`
  z-index: 3;
  width: 800px;
  height: 100px;
  border-radius: 6px;
  margin-top: 20px;
  animation: 2s loading infinite ease-in-out;

  @keyframes loading {
    0% {
      background-color: rgb(0 0 0 / 36%);
    }
    50% {
      background-color: rgb(0 0 0 / 66%);
    }
    100% {
      background-color: rgb(0 0 0 / 36%);
    }
  }
`;

const Loading = () => {
  return (
    <>
      <Content/>
      <DogFactArea />
    </>
  )
}

export default Loading
