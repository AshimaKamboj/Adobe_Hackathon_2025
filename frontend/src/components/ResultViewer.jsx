import React from 'react';

function ResultViewer({ results }) {
return (
<div className="results">
<h2>🔎 Key Sections</h2>
{results.length === 0 ? (
<p>No results yet. Upload a PDF and click “Analyze PDF”.</p>
) : (
results.map((res, idx) => (
<div key={idx} className="result-card">
<h3>{res.heading}</h3>
<p><strong>Summary:</strong> {res.summary}</p>
<p><strong>Why it's relevant:</strong> {res.relevance}</p>
</div>
))
)}
</div>
);
}

export default ResultViewer;
