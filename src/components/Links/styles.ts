import styled, {css} from "styled-components";

interface LinkProps {
  variant?: "iconLeft" | "iconRight";
}

export const LinkContainer = styled.a<LinkProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['blue']};
  font-size: ${({ theme }) => theme.textSizes['link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: .4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['blue']};
  }

  ${({ variant }) => variant === 'iconLeft' && css`
   flex-direction: row-reverse;
  `}
`