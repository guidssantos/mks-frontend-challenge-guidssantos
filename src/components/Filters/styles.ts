import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.3rem 0;
  flex-wrap: wrap;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(16px, 0.833vw, 0.833vw);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  font-variation-settings: 'opsz' auto;
  color: #09066a;
`
