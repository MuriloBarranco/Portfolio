import styled from "styled-components";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export const ThemeToggler = styled.div`
  background: var(--primary-color);
  z-index: 999999999;
  left: 10px;
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 10px;
`;

export const Icon = styled(WiMoonAltWaningCrescent4)`
  width: 2em;
  height: 2em;
`;