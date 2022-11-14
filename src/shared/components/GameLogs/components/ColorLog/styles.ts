import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--REGULAR-GREY);
  padding: 0.75rem;

  .single-color,
  .double-color {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }

  .color {
    width: 100%;
    max-width: 140px;
    padding: 0.75rem;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Lato", sans-serif;
    font-size: 0.65rem;
  }

  .icon-and-seconds {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    gap: 0.1rem;
  }
`;
