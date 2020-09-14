import React, { Component } from 'react';
import './SkillSection.css';


export default class SkillCard extends Component {
	render() {
		const {card} = this.props;
		return (
			<div className="card">
				<div className="card-image">
					<img src={card.content.image} alt={card.content.title} />
				</div>
			</div>
		)
	}
}