import Error from '../components/UI/Error';
import img from '../assets/404 Error-rafiki.svg';

const NotFound = () => {
	return (
		<div className="container">
			<Error type="web" img={img} text="Page not found" />
		</div>
	);
};

export default NotFound;
