import React from 'react';
import '../styles/app.scss';

class CardContainer extends React.Component {
  render(){
    return(
        <div class="card">
          <div class="card-header">
            <h4>{this.props.title}</h4>
          </div>
          <div class="card-content">
            <div class="card-description"><p>Does George R.R. Martin consider Jon and Daenerys the “main characters” of
				the story?</p>
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