import React, { FC } from 'react';
import svg4Everybody from 'svg4everybody';

import { StyledIcon, StyledIconContainer } from './styles';

const icons = require('styles/resources/icons.svg').default;

svg4Everybody();

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

const Icon: FC<IconComponentProps> = ({ name, width, height, fill, title, innerRef, ...restProps }) => (
    <StyledIconContainer ref={innerRef} {...restProps}>
        <StyledIcon width={width} height={height} fill={fill || 'currentColor'}>
            {title && <title>{title}</title>}
            <use xlinkHref={icons + '#' + name} />
        </StyledIcon>
    </StyledIconContainer>
);

export default Icon;
