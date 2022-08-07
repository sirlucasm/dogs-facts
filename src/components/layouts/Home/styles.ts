import styled from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div<any>`
  background: url('assets/images/dog-bg.jpg') center center fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  filter: blur(8px);
`;

export const TitleArea = styled.div<any>`
  z-index: 3;
  margin: 40px 0;
  background-color: #3d3d3d;
  padding: 4px 12px;
  border-radius: 6px;

  h2 {
    margin: 0;
    font-size: 44px;
  }
`;

export const ImageArea = styled.main<any>`
  z-index: 2;
  @media only screen and (max-width: 480px) {
    width: 340px;
  }
`;

export const FactArea = styled.section<any>`
  z-index: 3;
  margin-top: 20px;
  font-size: 32px;

  background-color: rgba(0,0,0, .58);
  border-radius: 6px;
  padding: 4px 12px;
  max-width: 800px;
  text-align: center;
`;
