import React from 'react'

function FilteredResponse({responseData,selectedOptions}) {
    if (!responseData || selectedOptions.length === 0) return null;

    const filteredData = {};
    if (selectedOptions.includes("Alphabets")){
      filteredData["Alphabets"] = responseData.alphabets;
    } 
    if (selectedOptions.includes("Numbers")){
      filteredData["Numbers"] = responseData.numbers;
    } 
    if (selectedOptions.includes("Highest Lowercase Alphabet")){
      filteredData["Highest Lowercase Alphabet"] = responseData.highest_lowercase_alphabet;
    }
      console.log("FILTERED DATA: ",filteredData)

    return (
      <div>
        <h3>Filtered Response:</h3>
        <pre>{JSON.stringify(filteredData, null, 2)}</pre>
      </div>
    );
}

export default FilteredResponse