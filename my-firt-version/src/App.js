import React, {Component} from 'react';
// import logo from './logo.svg';
import Header from './contain/Header';
import Podcast from './contain/Podcast';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      podcast: [{
        id: 1,
        thumbnail: 'https://cdn02.indozone.id/re/content/2019/08/30/pQsj0l/t_5d68f959b4cb1.jpg?w=700&q=85',
        title: 'Data Pods'
        },
        {
          id: 2,
          thumbnail: 'https://www.sab.id/blog/wp-content/uploads/2019/09/Bagaimana-Podcast-Mengganti-Kebiasaan-Orang-dalam-Mendengarkan-Musik.jpg',
          title: 'Data podcats'
        },
        {
          id: 3,
          thumbnail: 'https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-951980478.jpg?w=730&crop=1',
          title: 'podcats'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.podcast.map(podcast =><Podcast title={podcast.title} thumbnail={podcast.thumbnail} />)}
      </div>
    );
  }
}
export default App;