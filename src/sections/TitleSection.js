import React, { Component } from 'react';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import './TitleSection.css';


import Fullpage from '../main/Fullpage';

import { Link, Element } from 'react-scroll';

export default class TitleSection extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: this.props.background
			}}>
				<Fullpage class="title" >
					<div>
						<h1 style={{
							color: this.props.color
						}}>
							{data.title}
						</h1>
					</div>
					<div>
						<h3 style={{
							color: this.props.color2
						}}>{data.subtitle}</h3>
					</div>
					<div >
						{
							Object.keys(data.links).map(key => {
								return (
									<SocialIcon
										className="SocialIcon"
										url={data.links[key]}
										style={{
											margin: '15px',
											width: '50px',
											height: '50px',
										}}
									/>
								)
							}
							)
						}
					</div>
					<Link
						activeClass="active"
						to="title"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						onSetActive={this.handleSetActive}>
						<div className="anim" style={{
							position: 'absolute',
							bottom: '2%'
						}}>
							<img src={data.icons.down} style={{
								width: '30px'
							}} />
						</div>
					</Link>


				</Fullpage>
				<Element name="title" className="element">

				</Element>
			</div>
		)
	}
}