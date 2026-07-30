# Novosti u verzijama

## Verzija 2.9.23 (30. srpnja 2026.)

### Mjesto i adresa isporuke na dokumentima nabave

Na dokumente nabave dodana su polja **Mjesto isporuke** i **Adresa isporuke**:

- dostupna su na zahtjevu za nabavu, narudžbi, primci, izdatnici i povratu robe
- **Mjesto isporuke** odabire se iz padajućeg popisa adresa vlastite tvrtke
- odabirom mjesta **Adresa isporuke** se automatski popuni
- oba polja prenose se kroz lanac dokumenata: zahtjev za nabavu → narudžba → primka → izdatnica

<span style="color: #ff5630">**Važno:**</span> da bi se adresa pojavila u padajućem popisu, na adresi kontakta vlastite tvrtke potrebno je popuniti polje **Opis** (npr. *Skladište Božjakovina*). Adrese bez upisanog opisa ne prikazuju se u popisu.

**Put: Poslovanje → Partneri → (vlastita tvrtka) → Kontakti → Adrese**

### Radni sati – Više od 30km

U evidenciju radnih sati dodan je stupac **Više od 30km**, kojim se označavaju dani za koje se priznaje dnevnica. Stupac se nalazi ispred stupca *God. odmor*. U zbroju na dnu tablice označeni dan se zasad računa kao 8 sati.

**Put: Poslovanje → Resursi → Radni sati**

### Slanje dokumenata e-poštom

Odabrane dokumente iz popisa moguće je poslati e-poštom. Primatelj se određuje iz partnera povezanog s dokumentom. Gumb je vidljiv kada su izvještaji omogućeni.

### Postavke e-pošte

- nova kartica **Postavke e-pošte** (na mjestu dosadašnjeg unosa za zabranjene adrese)
- nova postavka **EmailSenderName** – ime pošiljatelja koje se prikazuje na izlaznoj e-pošti
- obrazac za slanje testne e-pošte, za provjeru postavki

### Ostali ispravci

- **Projekti** – ispravljen format datuma u tablici
- **Telefonski imenik** – ispravci prikaza i unosa
- **Prijava u aplikaciju** – nova forma za prijavu; ispravljen prikaz prazne forme kada joj prethodi DevExpress dijalog
- ispravljena zamjena korisnika (impersonation) te nekoliko rjeđih pogrešaka u radu s dokumentima

### Tehničke promjene

Ove promjene ne mijenjaju način rada u aplikaciji:

- rješenje je prebačeno na .NET 10
- interne promjene u pristupu podacima i generiranju koda

**Migracije baze:** Erp `_055`–`_059`, 247 `_055`–`_056`.

Potpuni popis promjena: [v2.9.22...v2.9.23](https://github.com/altibiz/altibiz-erp/compare/v2.9.22...v2.9.23)
