document.addEventListener('DOMContentLoaded', function() {
    var mdContent = document.querySelector('.md-content__inner.md-typeset');
    if (mdContent) {
        var downloadButton = document.createElement('div');
        downloadButton.id = 'downloadPDF';
        downloadButton.innerHTML = '<img src="../images/pdf.png" style="width:50px;height:50px;vertical-align:middle"/> Preuzmi kao PDF';
        downloadButton.style = 'font-size:16px; padding:10px 20px; cursor:pointer; text-align:center;';
        downloadButton.setAttribute('data-filename', document.title + '.pdf');
        downloadButton.classList.add('no-print');
        
        
        // Append the button after the .md-content element
        mdContent.parentNode.insertBefore(downloadButton, mdContent.nextSibling);
        
        downloadButton.addEventListener('click', function() {
            var filename = this.getAttribute('data-filename');
            html2pdf().from(mdContent).save(filename);
        });
    }
});
