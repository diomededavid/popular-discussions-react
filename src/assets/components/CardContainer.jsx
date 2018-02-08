import React from 'react';
import '../styles/app.scss';

class CardContainer extends React.Component {
  render(){
    return(

        <div class="card">
              <div class="header">
                <h4>{this.props.title}</h4>
              </div>
              <div class="content">
                <div class="card-description">{this.props.description}
                </div>
                  <div class="button-container">
                      <button type="button" class="btn btn-primary">Join the Discussion</button>
                  </div>
              </div>
        </div>
    )
  }
}
export default CardContainer;