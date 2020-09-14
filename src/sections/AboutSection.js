import React, { Component } from 'react';
import data from '../data.json';
import './AboutSection.css';

import Fullpage from '../main/Fullpage';
import { Link, Element } from 'react-scroll';

export default class AboutSection extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: this.props.background
			}}>
				<Fullpage class="about">
					<div>
						<h1 className="about-title" style={{
							color: this.props.color
						}}>{data.sections[0].title}
							</h1>
						<div  >
							{data.sections[0].items.map(el => {
								return <p className="about-p" style={{
									color: this.props.color2
								}}>{el.content}</p>
							})}
						</div>
					</div>

					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						onSetActive={this.handleSetActive}>
						<div className="anim"
						style={{
							position: 'relative',
							backgroundColor: 'rgb(255, 208, 0);',
							bottom: '-520%'
						}}>
							<img src={data.icons.down} style={{
								width: '30px'
							}} />
						</div>
					</Link>
				</Fullpage>
				<Element name="about" className="element">

				</Element>
			</div>
		)
	}
}