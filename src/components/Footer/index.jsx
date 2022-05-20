import { memo } from 'react';
import './index.scss';

const Footer = ({ name, github }) => {
	return (
		<footer className="footer">
			{'created by '}
			<a className="name" href={github} target="_blank" rel="noreferrer">
				{name}
			</a>
			{' - '}
			<a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer">
				frontendmentor.io
			</a>
		</footer>
	);
};

export default memo(Footer);
