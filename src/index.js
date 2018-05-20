import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoPlayer from './components/video_player_and_detail'

const API_KEY = 'AIzaSyDiNOXq0cCRHTpyrJAAqxqM9AF3Ixa_DOk';



class App extends Component {
    constructor(props){
        super(props)

        this.state = { 
            vids: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term : 'finland'}, (vids) => {
           this.setState({
               vids: vids,
               selectedVideo: vids[0]
            });
        });



    }
    render(){
    return <div>
        <SearchBar />
        <VideoPlayer video ={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.vids} 
        />
    </div>;
};
}
ReactDOM.render(<App />, document.querySelector('.container'))