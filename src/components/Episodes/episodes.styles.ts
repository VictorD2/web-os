import styled from "styled-components";

export const EpisodesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  div {
    width: 100%;
  }

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
