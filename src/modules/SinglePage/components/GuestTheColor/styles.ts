import styled from "styled-components";

interface ContainerProps {
  gameStarted: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 20.25rem;
  margin-top: 6rem;

  h1 {
    font-family: "Lato", sans-serif;
  }

  .color-view {
    width: 100%;
    margin-bottom: 1rem;

    .bar {
      width: 100%;
      height: 0.4rem;
      background-color: var(--DARK-GREY);
    }

    .color {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 100%;
      gap: 0.5rem;
      height: 20.25rem;

      background-color: orange;

      input {
        height: 1.75rem;
        text-align: center;
        border-radius: 0.25rem;
        border: none;
      }

      button {
        width: 8rem;
        padding: 0.5rem;
        font-size: 0.75rem;
        border-radius: 0.25rem;

        background-color: var(--DARK-GREY);
        color: var(--WHITE);
      }
    }
  }

  .answers {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border: 1px solid var(--DARK-GREY);
    border-radius: 0.25rem;

    button:nth-child(2) {
      border-left: 1px solid var(--DARK-GREY);
      border-right: 1px solid var(--DARK-GREY);
    }

    button {
      text-align: center;
      padding: 0.5rem;
      width: 100%;
      border: none;
      background: transparent;

      color: var(--DARK-GREY);
    }
  }
`;
