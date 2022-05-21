import Error from '../../components/UI/Error';
import './index.scss';
const NotFound = ({ name = 'Page' }) => {
	return (
		<div className="container not-found">
			<Error
				type="404"
				message={`${name} not found!`}
				className="error__img--fix"
			/>
		</div>
	);
};

export default NotFound;
