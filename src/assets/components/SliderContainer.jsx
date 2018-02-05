import React from 'react'
import Slider from 'react-slick'
import CardContainer from './CardContainer';
class SliderContainer extends React.Component {
	render() {
		var settings = {
			dots: true
		}

		return (
			<div className='container'>
				<Slider {...settings}>
					<div class><CardContainer title="Game of Thrones"/></div>
					<div><img src='http://placekitten.com/g/400/200' alt="apple"/></div>
					<div><img src='http://placekitten.com/g/400/200' alt="apple"/></div>
					<div><img src='http://placekitten.com/g/400/200' alt="apple"/></div>
				</Slider>
			</div>
		);
	}
}
export default SliderContainer;
