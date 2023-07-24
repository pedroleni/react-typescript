import { styled } from "styled-components";

//--------> overlay
export const Overlay = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(60, 55, 53, 45%);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const ModalContent = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  background-color: white;
  border: 2px solid black;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  button {
    position: absolute;
    top: 1%;
    right: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
