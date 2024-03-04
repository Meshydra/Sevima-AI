import React, { useState } from 'react';
import cities from '../../../../public/cities500.json';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Simulated data for the dropdown
  const availableOptions = cities.map(city => city.country);

    // Function to update the dropdown content
    const updateDropdown = (query) => {
      // Filter options based on the query
      const filteredOptions = availableOptions.filter(option =>
        option.toLowerCase().includes(query.toLowerCase())
      );

      // Update the state with filtered options
      setSearchResults(filteredOptions);
    };

    // Function to handle click on an option
    const handleOptionClick = (option) => {
      setSearchInput(option);
      setSearchResults([]);
    };

    // Close the dropdown when clicking outside
    const handleDocumentClick = (event) => {
      if (!document.getElementById('searchResults').contains(event.target) && !document.getElementById('searchInput').contains(event.target)) {
        setSearchResults([]);
      }
    };

    // Attach click event listener on document
    React.useEffect(() => {
      document.addEventListener('click', handleDocumentClick);

      // Cleanup event listener on component unmount
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    return (
      <div className='search-bar'>
        <input
          id="searchInput"
          type="text"
          placeholder="Search a City"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            updateDropdown(e.target.value);
          }}
        />
        <ul id="searchResults" className="search-results">
          {searchResults.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
          </svg>
        </button>
      </div>
    );
  };