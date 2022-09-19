import styled from "styled-components";
import HeaderCover from '../../assets/Cover.png';

export const HeaderConatiner = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${HeaderCover}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`