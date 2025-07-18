import React from 'react';

function SubmitButton({ onSubmit }) {
return (
<div>
<button onClick={onSubmit}>
🔍 Analyze PDF
</button>
</div>
);
}

export default SubmitButton;


