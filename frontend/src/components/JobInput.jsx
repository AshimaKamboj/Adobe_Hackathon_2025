import React from 'react';

function JobInput({ job, setJob }) {
return (
<div>
<label htmlFor="job"><strong>Enter your job or learning goal:</strong></label>
<input
type="text"
id="job"
value={job}
onChange={(e) => setJob(e.target.value)}
placeholder="e.g., Frontend Developer, Research Scholar, Business Analyst"
/>
</div>
);
}

export default JobInput;
