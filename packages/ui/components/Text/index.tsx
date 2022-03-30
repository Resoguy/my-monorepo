import { TextBase } from './Text.styled';

export const Text = ({ children, ...rest }: any) => {
	return <TextBase {...rest}>{children}</TextBase>;
};
