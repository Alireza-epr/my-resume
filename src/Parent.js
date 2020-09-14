import React, { Component } from 'react';

import AboutSection from './sections/AboutSection';
import TitleSection from './sections/TitleSection';
import SkillSection from './sections/SkillSection';

import './Parent.css';
import data from './data.json';

import SnowStorm from 'react-snowstorm';
import { Link, Element } from 'react-scroll';

export default class Parent extends Component {
	constructor() {
		super()
		this.state = {
			color: "rgba(10, 94, 219)",
			color2: "rgba(9, 60, 136)",
			background:"white"
		}
	}

	ChangeColor = () => {
		if (this.state.color === "rgba(10, 94, 219)") {
			this.setState({
				color: "red",
				color2: "darkred",
				background:"rgba(100,0,0,0.4)"
			})
		}
		if (this.state.color === "red") {
			this.setState({
				color: "green",
				color2: "darkgreen",
				background:"rgba(0,100,0,0.4)"
			})
		}
		if (this.state.color === "green") {
			this.setState({
				color: "rgba(10, 94, 219)",
				color2: "rgba(9, 60, 136)",
				background:"white"
			})
		}
	}



	render() {
		return (
			<div>
				<Element name="start" className="element"></Element>

				<div className="nav">
					<div>
						<div onClick={() => { this.ChangeColor() }}>
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
							<div style={{
								color: this.state.color2
							}}>about</div>
						</Link>

						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<div style={{
								color: this.state.color2
							}}>skills</div>
						</Link>
					</div>
				</div>

				<TitleSection
					color={this.state.color}
					color2={this.state.color2} 
					background={this.state.background} />
				<AboutSection
					color={this.state.color}
					color2={this.state.color2}
					background={this.state.background} />
				<SkillSection
					color={this.state.color}
					color2={this.state.color2}
					background={this.state.background} />
				<SnowStorm
					flakesMax="30"
					flakesMaxActive="20"
					followMouse="false"
					snowColor="rgba(0,0,180,0.9)"
					snowStick="false" />
			</div>
		)
	}
}