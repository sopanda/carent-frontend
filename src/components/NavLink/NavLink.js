import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  padding: 0 !important;
  color: #3de6af;
  &:hover {
    color: #32bb8d;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    text-decoration: none;
  }
`;
