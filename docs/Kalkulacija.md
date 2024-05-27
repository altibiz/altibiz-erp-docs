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
<div align="center">
    <button id="downloadPDF" style="font-size:16px; padding:10px 20px; cursor:pointer;">Download as PDF</button>
</div>

<!-- Include html2pdf.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

<!-- Add JavaScript to generate PDF -->
<script>
        document.getElementById('downloadPDF').addEventListener('click', function() {
            var element = document.querySelector('.md-content'); 
            html2pdf()
                .from(element)
                .save();
        });
</script>

<br></br><br></br>
