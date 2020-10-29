import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/CardList';
import cardapi from './api/cardapi';

import './CardList.css';
import FilterButtonList from './components/FilterButtonList';
// import App from './App';


//{ <Searchbar onSubmit={this.onSearchSubmit} test="test"/>}
//<CardList images={this.state.images}/>


class App extends React.Component {

  state = { cards:[], filteredCards:[], filterButtons:[] };

  componentDidMount() {

    cardapi.get('tags', {
      params: {query: "term"}
    }).then(response => {
       const result = response.data.data;
       
       //push ALL to the array
       result.push({'title': 'all'});
       
       console.log(result)
       this.setState({filterButtons: result});
       this.getItems()
    });
  }

  getItems() {
    cardapi.get('items', {
      params: {query: "term"}
    }).then(response => {
      console.log(response.data.data)
      
      const result = response.data.data;
      this.setState({cards: result, filteredCards: result});
    });
  }

  onFilterClick = (filter) => {
    var temp = this.state.cards;
    var filtered = [];
    if (filter === "all") {
      filtered = temp;
    } else {
      // var filtered = temp.filter(item => item.tags === filter);
      filtered = temp.filter(item => item.tags.includes(filter));
    }
    this.setState({filteredCards: filtered});
 }

  render() {
    return (
      
      <div>
          
        <div className="container-fluid" style={{marginTop:'10px'}}>
          <FilterButtonList onFilterClick={this.onFilterClick} buttons={this.state.filterButtons} />
          </div>
        <div className="container-fluid" style={{marginTop:'10px'}}>
          
          <CardList cards={this.state.filteredCards}/>
          
        </div>
      </div>
    );  
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);