import './index.scss';

const Error = ({ text, img, type, className }) => {
	return (
		<div className="error">
			<img className={className || 'error__img'} src={img} alt="Illustration" />

			<a
				target="_blank"
				rel="noreferrer"
				href={`https://storyset.com/${type}`}
				className="icon-attribute"
			>
				{type} illustrations by Storyset
			</a>

			<h2 className="error__text">{text}</h2>
		</div>
	);
};

export default Error;
