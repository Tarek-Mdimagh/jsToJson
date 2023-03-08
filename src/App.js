import transformJS from "js-to-json-logic";
import { useEffect, useState } from "react";
 

export default function App() {
  const [expression, setExpression] = useState(
    `if (departementCode == "39" || departementCode == "73") {
      321.02  
    }`
  );
  const [json, setJSON] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const res = transformJS(expression);
      setJSON(res);
      setError("");
    } catch (e) {
      console.log(e);
      setError(e.message);
      setJSON({});
    }
  }, [expression]);

  return (
    <div className="App">
      <textarea
        type="text"
        value={expression}
        onChange={(e) => {
          setExpression(e.target.value);
        }}
      />
      {!!error && <div>{error}</div>}
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}
