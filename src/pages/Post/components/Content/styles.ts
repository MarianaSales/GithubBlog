import styled from "styled-components";

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2.5rem;
  margin-bottom: 8rem;

  h1, h2, h3{
    color: ${({ theme}) => theme.colors['blue']};
  }
`