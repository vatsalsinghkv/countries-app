import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeActions } from '../../store/theme';
import './index.scss';

const Header = () => {
	const isDark = useSelector(state => state.theme.isDark);
	const dispatch = useDispatch();
	const { toggle } = themeActions;

	return (
		<header className="header">
			<div className="container header__content">
				<h1 to="/" className="header__heading">
					<Link to="/"> Where in the world?</Link>
				</h1>
				<button className="btn header__btn" onClick={() => dispatch(toggle())}>
					{isDark && <ion-icon name="moon" />}
					{isDark || <ion-icon name="moon-outline" />}
					Dark Mode
				</button>
			</div>
		</header>
	);
};

export default memo(Header);
