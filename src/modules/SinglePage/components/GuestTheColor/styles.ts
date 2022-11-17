import styled, { css } from "styled-components";

interface ContainerProps {
  hasGameStarted: boolean;
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 24.25rem;
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
      height: 20.25rem;

      ${(props) =>
        props.hasGameStarted
          ? css`
              background-color: ${props?.bgColor};
            `
          : css`
              background-color: var(--SOFT-GREY);
            `}

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

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
  }

  .answers {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border: 1px solid var(--DARK-GREY);
    border-radius: 0.25rem;

    .answer:nth-child(2) {
      border-left: 1px solid var(--DARK-GREY);
      border-right: 1px solid var(--DARK-GREY);
    }

    .answer {
      transition: all 0.4s ease-in-out;
      cursor: pointer;

      text-align: center;
      padding: 0.5rem;
      width: 100%;
      border: none;
      background: transparent;

      color: var(--DARK-GREY);

      :hover {
        transition: all 0.4s ease-in-out;
        background-color: var(--SOFT-GREY);
      }
    }
  }
`;
