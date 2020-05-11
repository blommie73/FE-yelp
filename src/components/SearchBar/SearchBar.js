import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'  
};
  render() {
    return (
      <div className="SearchBar">
        
      </div>
    )
  }
}

export default SearchBar
