# Kalkulacija  

### <p align=center>**Dodavanje nove kalkulacije**  

<img src="../images/KalkulacijaMenu.png"
     alt="KalkulacijaMenu"
     style="display: block;
            margin-left: auto;
            margin-right: auto;" 
/>

**<p align=center>Put: Projekt → Dodaj → Odjel prodaje → Kalkulacija**  


1. **NAZIV (<span style="color: #ff5630">\*obavezno polje\*</span>)**   
Unosimo naziv/ime elementa kataloga kojega dodajemo

2. **TIP (<span style="color: #ff5630">\*obavezno polje\*</span>)**      
Unosimo tip elementa kataloga

<!-- Add this button to download the page as PDF -->

<!-- Add this button to download the page as PDF -->
<div align="center">
    <div id="downloadPDF" data-filename="Kalkulacija.pdf" style="font-size:16px; padding:10px 20px; cursor:pointer;">
        <img src="../images/pdf.png"  style="width:50px;height:50px;vertical-align:middle"/>Preuzmi kao PDF</div>
</div>



<!-- Include html2pdf.js library -->
<script src="../documents/html2pdf.bundle.min.js"></script>

<!-- Add JavaScript to generate PDF -->
<script>
    document.getElementById('downloadPDF').addEventListener('click', function() {
        var element = document.querySelector('.md-content'); 
        var filename = this.getAttribute('data-filename');
        html2pdf()
            .from(element)
            .save(filename);
    });
</script>

<br></br><br></br>
