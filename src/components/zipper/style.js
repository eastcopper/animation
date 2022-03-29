import styled from "styled-components";

export const MainDiv = styled.div`
  position: ${(props) => props.position};
  z-index: -1;
  left: 0;
  top: ${(props) => props.top};
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
`;

export const Title = styled.p`
  position: ${(props) => props.position};
  left: 50%;
  top: ${(props) => props.top};
  transform: translate(-50%, -50%);
  font-size: 100px;
  font-family: "Pacifico", cursive;
  mix-blend-mode: difference;
  color: #f2f2f2;
  text-align: center;
  line-height: 1.3;
`;
