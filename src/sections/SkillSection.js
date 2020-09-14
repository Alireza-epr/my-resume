import React, { Component } from 'react';
import data from '../data.json';
import './SkillSection.css';
import Fullpage from '../main/Fullpage';
import SkillCard from './SkillCard';
import { Link, Element } from 'react-scroll';


export default class SkillSection extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: this.props.background
			}}>
				<Element name="test1" className="element">

				</Element>
				<Fullpage>
					<div className="skill">
						<h3 style={{
							color: this.props.color
						}}>{data.sections[1].title}</h3>
						<div className="SkillCard">
							{data.sections[1].items.map(eachCard => {
								return (
									<SkillCard card={eachCard} />
								)
							})}
						</div>
					</div>

					
				</Fullpage>
					<Link activeClass="active" to="start" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
						<div style={{
							position:'absolute',
							width:'100%',
							paddingBottom:'20px',
							textAlign:'center',
							backgroundColor: this.props.background
						}}>
							<img src={data.icons.up} style={{
								width: '30px',
								
							}} />
						</div>
					</Link>

			</div>
		)
	}
}