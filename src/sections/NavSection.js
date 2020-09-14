import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import './NavSection.css';
import TitleSection from './TitleSection';

import data from '../data.json';


class NavSection extends Component {
	render() {
		return (
			<div className="nav">
				<div>
					<div>
						<img src={data.icons.change} width="20px" />
					</div>
				</div>
				<div className="aands">
					<Link
						activeClass="active"
						to="title"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<div>about</div>
					</Link>

					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
					>
						<div>skills</div>
					</Link>
				</div>

			</div>

		)

	}


}

export default NavSection;