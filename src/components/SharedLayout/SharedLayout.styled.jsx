import styled from "styled-components";

export const Header = styled.header`

padding: 0 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    color: lightsalmon;
    padding: 10px 20px;
    transition: color 0.3s ease, color 0.3s ease;
  }
  a:hover {
    color: salmon;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 30px;
  }
`;
