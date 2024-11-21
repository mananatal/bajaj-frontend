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
      filteredData["Highest Lowercase Alphabet"] = responseData.highest_lowercase;
    }

    return (
        <div className="p-6 border rounded-lg shadow-lg bg-gray-50 max-w-sm mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Filtered Response:</h3>
            <div className="space-y-3">
                {Object.keys(filteredData).map((key) => (
                <div
                    className="p-3 border border-gray-300 rounded-md bg-white flex justify-between"
                    key={key}
                >
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-900">{
                       key !='Highest Lowercase Alphabet' && filteredData[key].map((val,index)=>(
                            <span key={index}>{val},</span>
                        ))
                    }
                    </span>
                    <span className="text-gray-900">{
                       key =='Highest Lowercase Alphabet' && <span>{filteredData[key]}</span>
                    }
                    </span>
                </div>
                ))}
            </div>
        </div>
    );
}

export default FilteredResponse