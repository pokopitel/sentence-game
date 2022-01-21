import styled from "styled-components";

export const StyledText = styled.p<{
  color: string;
  weight?: string;
  size?: string;
  shadow?: boolean;
  m?: string;
}>`
  width: 100%;
  text-align: center;
  filter: ${({ shadow }) =>
    shadow ? "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.4))" : "unset"};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  margin: ${({ m }) => m};
  line-height: 1.5;
  word-break: break-word;
`;

StyledText.defaultProps = {
  shadow: true,
  weight: "Semibold",
  size: "48px",
  m: "0",
};

export const StyledButton = styled.button`
  background: rgba(75, 75, 75, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 16px 75px;
  margin-bottom: 100px;
`;
