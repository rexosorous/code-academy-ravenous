import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [sort, setSort] = useState();
  const handleSortChange = (option) => {
    setSort(option);
    console.log(sort);
  }

  const [term, setTerm] = useState();
  const handleTermChange = (event) => setTerm(event.target.value);

  const [location, setLocation] = useState();
  const handleLocationChange = (event) => setLocation(event.target.value);

  const search = () => {
    if (!sort || !term || !location) {
      console.log('invalid inputs');
      return;
    }
    console.log(`Searching Yelp with ${term}, ${location}, ${sort}`);
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={sort === sortByOptionValue ? styles.active : null} key={sortByOptionValue} onClick={() => handleSortChange(sortByOptionValue)}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={search}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
