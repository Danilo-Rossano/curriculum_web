document.getElementById('download-btn-curriculum').addEventListener('click', function() {
    const pdfUrl = 'PDF/RD_curriculum.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    link.download = 'file.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});

document.getElementById('download-btn-attestati').addEventListener('click', function() {
    const pdfUrl = 'PDF/attestati.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    link.download = 'attestati.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
});

