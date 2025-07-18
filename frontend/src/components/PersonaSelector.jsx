import React from 'react';

function PersonaSelector({ persona, setPersona }) {
return (
<div>
<label htmlFor="persona"><strong>Select Persona:</strong></label>
<select
id="persona"
value={persona}
onChange={(e) => setPersona(e.target.value)}
>
<option value="student">🎓 Student</option>
<option value="researcher">🔬 Researcher</option>
<option value="analyst">📊 Analyst</option>
<option value="developer">💻 Developer</option>
<option value="general">🧠 General Reader</option>
</select>
</div>
);
}

export default PersonaSelector;
