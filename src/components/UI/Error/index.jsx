import img404 from '../../../assets/404 Error-rafiki.svg';
import imgTimeout from '../../../assets/504 Error Gateway Timeout-amico.svg';
import imgNotFound from '../../../assets/Search-amico.svg';

import './index.scss';

const Error = ({ message, type, className }) => {
	let img,
		name = 'web';

	switch (type) {
		case '404':
			img = img404;
			break;

		case 'timeout':
			img = imgTimeout;
			name = 'internet';
			break;

		case 'not-found':
			img = imgNotFound;
			break;

		default:
			img = imgNotFound;
			break;
	}

	return (
		<div className="error">
			<img className={className || 'error__img'} src={img} alt="Illustration" />

			<a
				target="_blank"
				rel="noreferrer"
				href={`https://storyset.com/${name}`}
				className="icon-attribute"
			>
				{name} illustrations by Storyset
			</a>

			<h2 className="error__text">{message}</h2>
		</div>
	);
};

export default Error;
