import styled from "styled-components";

export const DateRangeInputContainer = styled.div`
  border: 1px solid #ededed;
  background: "#ededed";
  border-radius: clamp(8px, 0.42vw, 0.42vw);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 550px) {
    flex-wrap: wrap;
    min-width: 100%;

    span {
      flex: 1;
    }
  }

  span {
    font-size: clamp(12px, 0.833vw, 0.833vw);
    color: "#ededed";
    text-align: center;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
  }

  input {
    all: unset;
    width: 100%;
    padding: clamp(12px, 0.35vw, 0.35vw);
    border-radius: clamp(8px, 0.42vw, 0.42vw);
    font-size: clamp(12px, 0.833vw, 0.833vw);
    color-scheme: light;
    color: "#ededed";
  }
`;