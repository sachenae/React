import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyAZ3ffQM4fIAMxEtgThCA0qnBa-OYJNKpE';

YTSearch({key: API_KEY, term : 'surf'}, function(data){
    console.log(data);
});

class App extends Component {
    constructor(props){
        super(props)

        this.state = { vids: [] };

        YTSearch({key: API_KEY, term : 'surf'}, (vids) => {
           this.setState({vids});
        });



    }
    render(){
    return <div>
        <SearchBar />
        <VideoList videos = {this.state.vids} />
    </div>;
};
}
ReactDOM.render(<App />, document.querySelector('.container'))