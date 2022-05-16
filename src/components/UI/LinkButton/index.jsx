import { Link } from 'react-router-dom';
import './index.scss';

const LinkButton = ({ type, onClick, to, className, children }) => {
	if (type === 'button') {
		return (
			<button
				className={`link-btn link-btn--btn ${className || ''}`}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}

	return (
		<Link to={to} className={`link-btn link-btn--link ${className || ''}`}>
			{children}
		</Link>
	);
};

export default LinkButton;
