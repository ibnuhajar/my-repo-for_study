import React from 'react';

class Podcast extends React.Component{
    render(){
        return(
            <div>
                <h2>
                {this.props.title}
                </h2>

                <img src={this.props.thumbnail} alt={this.props.title}/>

            </div>
        );
        
    }
}

export default Podcast;