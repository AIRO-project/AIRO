import styled from "styled-components";

import { Props, TagStyleVariants } from "./types";
import typography from "./typography";

const StyledTypography = styled.p<{ $tagStyle: TagStyleVariants }>`
  ${({ $tagStyle }) => typography[$tagStyle]}
`;

/**
 * @prop `tag`[string] - the `HTML` tag for the component. Default value: `p`;
 * @prop `tagStyle` [string] - the styles for the component. See `typography.ts` for the available styles. Default value: `body`;
 */
const Typography = ({ tag = "p", tagStyle = "body", children }: Props) => (
  <StyledTypography as={tag} $tagStyle={tagStyle}>
    {children}
  </StyledTypography>
);

export default Typography;
