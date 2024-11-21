'use client'
import Dropdown from "@/components/Dropdown.jsx";
import FilteredResponse from "@/components/FilteredResponse";
import axios from "axios";
import { useState } from "react";


export default function Home() {
  const [jsonInput, setJsonInput] = useState(""); 
  const [responseData, setResponseData] = useState(null); 
  const [error, setError] = useState(""); 
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [loading,setLoading]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setResponseData(null);

      const sanitizedInput = jsonInput.replace(/[”“”]/g, '"');
      const parsedInput = JSON.parse(sanitizedInput);
      if (!Array.isArray(parsedInput.data)) {
        throw new Error('Key "data" must be an array.');
      }

      const response = await axios.post("https://bajaj-backend-xwco.onrender.com/bfhl", { data: parsedInput.data });
      setResponseData(response.data);
    } catch (err) {
      console.log("ERORR: ",err)
      setError("Invalid JSON or API error.");
    }
    finally{
      setLoading(false);
    }
  };
    

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-4xl">Frontend Challenge</h1>
        </div>
        <div className="mt-4">
          <form className="flex flex-col " onSubmit={handleSubmit}>
              <textarea
                rows="6"
                cols="50"
                placeholder='Enter JSON input eg. {"data": ["A",”C”,”Z”,”c”,”i”]}'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="border border-black rounded-lg p-4"
              />
               <button className="flex bg-blue-700 px-4 py-2 w-fit mt-4 rounded-lg text-white" disabled={loading}>
                {
                  loading?"Please Wait...":"Submit"
                }
              </button>
          </form>
          {error && <p className="text-red-700">{error}</p>}
        </div>

        <div >
          {responseData && (
            <>
              <Dropdown
                options={["Alphabets", "Numbers", "Highest Lowercase Alphabet"]}
                selected={selectedOptions}
                setSelected={setSelectedOptions}
              />
              <FilteredResponse responseData={responseData} selectedOptions={selectedOptions} />
            </>
          )}
        </div>
    </div>
    
  );
}
