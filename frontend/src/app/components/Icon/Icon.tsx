import * as React from "react";
import styled from "styled-components";
const icons = require("styles/resources/icons.svg");
import svg4Everybody from "svg4everybody";

svg4Everybody();

interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

interface IconContainerProps {
  display?: string;
  className?: string;
  onClick?: Function;
}

const StyledIcon = styled.svg<IconProps>`
  fill: ${props => props.fill || "currentColor"};
  width: ${props => props.width || "18px"};
  height: ${props => props.height || "18px"};
`;

const StyledIconContainer = styled.div<IconContainerProps>`
  width: fit-content;
  height: fit-content;
  &.pointer {
    cursor: pointer;
  }
  display: ${props => props.display || "flex"};
  ${props => props.onClick && `cursor: pointer;`}
`;

export interface IconComponentProps {
  className?: string;
  display?: string;
  fill?: string;
  height?: string;
  innerRef?: React.Ref<HTMLDivElement>;
  name: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  title?: string;
  width?: string;
}

class Icon extends React.Component<IconComponentProps> {
  public static defaultProps: Partial<IconComponentProps> = {
    fill: "currentColor"
  };

  render() {
    const {
      name,
      width,
      height,
      fill,
      title,
      innerRef,
      ...restProps
    } = this.props;

    return (
      <StyledIconContainer ref={innerRef} {...restProps}>
        <StyledIcon width={width} height={height} fill={fill}>
          {title && <title>{title}</title>}
          <use xlinkHref={icons + "#" + name} />
        </StyledIcon>
      </StyledIconContainer>
    );
  }
}

export default Icon;
