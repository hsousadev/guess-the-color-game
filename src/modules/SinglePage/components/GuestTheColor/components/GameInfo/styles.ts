import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.5fr 1.25fr;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;
  margin: 4rem 0 1.5rem 0;
  border-radius: 0.25rem;

  background-color: var(--SOFT-GREY);
  border: 1px solid var(--DARK-GREY);

  h3,
  p {
    text-align: center;
  }

  .time {
    h3 {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .restart {
    transition: all 0.4s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--STRONG-GREY);

    height: 100%;
    padding: 1rem;
    border-right: 1px solid var(--DARK-GREY);
    border-left: 1px solid var(--DARK-GREY);

    margin: 0;
    color: var(--WHITE);
    font-size: 0.65rem;

    :disabled {
      cursor: not-allowed;
      :hover {
        background-color: var(--STRONG-GREY);
      }
    }

    :hover {
      transition: all 0.4s ease-in-out;
      background-color: var(--DARK-GREY);
    }
  }

  .points {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    div:nth-child(1) {
      border-bottom: 1px solid var(--DARK-GREY);
    }

    .score {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem;

      width: 100%;
      height: 100%;

      gap: 1rem;

      h3 {
        text-align: left;
      }
    }
  }
`;
