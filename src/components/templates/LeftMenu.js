import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const LeftMenu = () => {
	return (
			<div className='no-padding'>
				<nav className='left-menu'>
					<ul className='nav nav-pills nav-stacked'>
						<li><IndexLink to='/' activeClassName='active'>Protocols</IndexLink></li>
						<li><Link to='/drugs' activeClassName='active'>Risk assessment</Link></li>
						<li><Link to='/about' activeClassName='active'>Key risk indicators</Link></li>
						<li><Link to='/about' activeClassName='active'>Critical Processes</Link></li>
					</ul>
				</nav>
			</div>
		);
};

export default LeftMenu;