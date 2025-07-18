import React from 'react';

function HeadingSidebar({ outline }) {
return (
<div className="sidebar">
<h3>📑 Document Outline</h3>
<ul>
{outline.length === 0 ? (
<li>No headings extracted yet.</li>
) : (
outline.map((head, index) => (
<li key={index}>• {head}</li>
))
)}
</ul>
</div>
);
}

export default HeadingSidebar;