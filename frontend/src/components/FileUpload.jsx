import React from 'react';

function FileUpload({ setFiles }) {
const handleChange = (e) => {
const selectedFiles = Array.from(e.target.files);
setFiles(selectedFiles);
};

return (
<div>
<label htmlFor="pdfUpload"><strong>Upload PDF files:</strong></label>
<input type="file" id="pdfUpload" multiple accept="application/pdf" onChange={handleChange} />
</div>
);
}

export default FileUpload;