import React from 'react';
// import { render } from '@testing-library/react';

class Menu extends React.Component {
render(){
    return(
        <div className='Menu'>
            <div className='container'>
                <div className="nav">
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                </div>
            </div>
        </div>
    );
}
}

export default Menu;