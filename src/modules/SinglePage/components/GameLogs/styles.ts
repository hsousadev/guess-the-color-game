import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--LIGHT-GREY);
  width: fit-content;
  height: 100vh;

  h2 {
    padding: 1rem;
  }

  .columns {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--STRONG-GREY);
    padding: 0 1rem;
    gap: 0.5rem;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: justify;

      width: 100%;
      height: 40px;
      padding: 0.5rem 0;
    }

    h3:nth-child(n + 2) {
      border-left: 1px solid var(--STRONG-GREY);
    }
  }

  .logs {
    max-height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;

    div:nth-child(n + 1) div:last-child {
      background-color: var(--REGULAR-GREY);
      padding: 0.75rem;
    }
    div:nth-child(even) div:last-child {
      background-color: var(--LIGHT-GREY);
      padding: 0.75rem;
    }
  }
`;
