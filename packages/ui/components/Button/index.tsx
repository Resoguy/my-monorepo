import * as React from 'react';
import ButtonBase from './Button.styled';

export const Button = ({ children, ...rest }: any) => {
	return <ButtonBase {...rest}>{children}</ButtonBase>;
};
