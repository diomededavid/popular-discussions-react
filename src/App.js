import React, {Component} from 'react';
import Slider from 'react-slick';
import './assets/styles/app.css';

import CardContainer from './assets/components/CardContainer';

class App extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 4,
			swipeToSlide: true,
			responsive: [
				{ breakpoint: 768, settings: { slidesToShow: 2 } },
				{ breakpoint: 992, settings: { slidesToShow: 2 } },
				{ breakpoint: 1200, settings: { slidesToShow: 4 } }
			]
		};
		return (
			<div className='container'>
				<nextArrow/>
				<Slider {...settings}>

					<div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div><div><CardContainer
						title="Game of Thrones"
						description="Does George R.R. Martin consider Jon and Daenerys the “main characters” of
                    the story?"/>
					</div>
				</Slider>
				<prevArrow/>
			</div>
		);
	}
}

export default App;