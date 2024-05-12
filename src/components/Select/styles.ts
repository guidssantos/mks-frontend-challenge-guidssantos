import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SelectContainer = styled.div`
  border: 1px solid #4d4dff;
  background: white;
  border-radius: clamp(16px, 0.42vw, 0.42vw);
  display: flex;
  flex-wrap: no-wrap;
  min-width: 240px;

  input {
    all: unset;
    width: 100%;
    padding: clamp(12px, 0.42vw, 0.42vw);
    border-radius: clamp(16px, 0.42vw, 0.42vw);
    font-size: clamp(12px, 0.833vw, 0.833vw);
    color: #4d4dff;
  }

  input::placeholder {
    color: #4d4dff;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0em;
    font-variation-settings: 'opsz' auto;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 1.041vw, 1.041vw);
  padding: 0 clamp(8px, 0.5vw, 0.5vw);
  cursor: pointer;
  border-radius: clamp(16px, 0.833vw, 0.833vw);
  svg {
    fill: #4d4dff;
  }
`

export const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: clamp(8px, 0.42vw, 0.42vw);
  border-radius: clamp(16px, 0.42vw, 0.42vw);
  top: calc(100% + clamp(8px, 0.42vw, 0.42vw));
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.25vw, 0.25vw);
  background: #fff;
  z-index: 9;

  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(12px, 0.833vw, 0.833vw);
    padding: clamp(4px, 0.42vw, 0.42vw);
    border-radius: clamp(16px, 0.42vw, 0.42vw);
    border: 1px solid #ededed;
    cursor: pointer;

    &:last-child {
      background: #ededed;
      color: black;
    }
  }
`;

export const OptionsList = styled.div`
  height: clamp(200px, 20vh, 20vh);
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: clamp(6px, 0.25vw, 0.25vw);
`;

type OptionsStyleProps = {
  selected: boolean;
};

export const Option = styled.div<OptionsStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1.6rem;
  width: 100%;
  border-radius: 8px;
  padding: clamp(12px, 0.42vw, 0.42vw);
  ${({ selected }) => selected && 'background: #EFEFEF;'}

  div {
    width: clamp(12px, 0.833vw, 0.833vw);
    height: clamp(12px, 0.833vw, 0.833vw);
    border: 1px solid #ededed;
    border-radius: clamp(4px, 0.21vw, 0.21vw);

    ${({ selected }) => selected && 'background: #e0d7d7;'}
  }

  &:hover {
    background: #efefef;

    span {
      color: black;
    }

    div {
      border: 1px solid black;
      ${({ selected }) => selected && 'background: black;'}
    }
  }

  span {
    font-size: clamp(12px, 0.833vw, 0.833vw);
    padding-right: clamp(8px, 0.42vw, 0.42vw);
    text-align: right;
    color: #3d3d3d;
    ${({ selected }) => selected && 'color: #4d4dff;'}
  }
`

export const QuantitySelectedIndicator = styled.span`
  position: absolute;
  bottom: 105%;
  right: clamp(4px, 0.16vw, 0.16vw);
  font-size: clamp(10px, 0.5vw, 0.5vw);
  color: #4d4dff;
`
