import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    
    async onSearchSubmit(term) {
        let response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {
            query: term
        },    
        headers: {
                Authorization: 'Client-ID 3bvy-aP8Fd-0tnLF8zlnYfw3T3IYqjbKUAkS3HBKGYs'
            }
        });
        console.log(response.data.results);
    }
  
    render() {  
    return (
    <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
    );
  }

};

export default App;
