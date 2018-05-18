import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAZ3ffQM4fIAMxEtgThCA0qnBa-OYJNKpE';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
};

ReactDOM.render(<App />, document.querySelector('.container'))