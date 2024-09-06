import Button from "@enact/ui/Button";
import styled from "styled-components";

export const MenuContainer = styled.nav`
  width: 102px;
  height: 100%;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  justify-content: center;
  gap: 24px;
  padding: 12px 8px;
`;

export const MenuLink = styled(Button)`
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 40px;
`;
