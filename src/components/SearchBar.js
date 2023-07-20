import React from 'react';

export default function SearchBar() {
    function search() {
        window.alert(document.getElementById('searchTerm').value);
    }

    return (
        <div>
            <input id='searchTerm' type='text' placeholder='Enter' />
            <input id='location' type='text' placeholder='Location' />
            <input type='submit' onClick={search} value="Let's Go" />
        </div>
    )
}