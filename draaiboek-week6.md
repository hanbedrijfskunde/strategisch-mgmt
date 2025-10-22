# Draaiboek Week 6: AI en de Toekomst van het Bedrijfskundig Beroep

## Rode Draad - HERZIEN ✨
**Centrale verhaallijn:** Van **Bijbaan naar Bedrijfskundige** - Hoe transformeer je in 4 jaar van een Region 2 werker (routine) naar een Region 1/3 professional (strategisch denker)?

**Kernvraag die de sessie stuurt:**
> "Als AI alle bekende modellen (SWOT, DESTEP, Porter) beter en sneller kan toepassen dan jij, wat is dan jouw toegevoegde waarde als bedrijfskundige?"

**3-Aktes Structuur:**
1. **AKT 1 - CONFRONTATIE** (0:00-0:30): "Je huidige bijbaan is kwetsbaar"
2. **AKT 2 - INZICHT** (0:40-1:50): "Het model verklaart waarom én waar je toekomst ligt"
3. **AKT 3 - TRANSFORMATIE** (2:05-2:30): "Jouw 4-jarenplan van R2 naar R1/3"

---

## Presentatie
**Bestand:** [slides-week6.html](slides-week6.html)
**Technologie:** Reveal.js 4.3.1 + self-built interactive poll component
**Functionaliteit:**
- **17 slides** (incl. pre/post poll + Bol.com voorbeeld + concrete voorbeelden - 4 slides toegevoegd)
- Interactive stemming met live bar charts
- LocalStorage voor data persistentie
- Pre/Post vergelijkingsweergave
- Embedded genius.html iframe

---

## Tijdsindeling HERZIEN (2,5 uur netto = 150 min)

| Tijd | Onderdeel | Duur |
|------|-----------|------|
| **BLOK 1: CONFRONTATIE** | | **30 min** |
| 0:00-0:02 | Slide 1: Titel | 2 min |
| 0:02-0:07 | Slide 2: Terugblik Week 1 | 5 min |
| 0:07-0:10 | Slide 3: **Pre-Poll** | 3 min |
| 0:10-0:13 | Slide 4: Live AI Demo | 3 min |
| 0:13-0:15 | Slide 5: De Centrale Vraag | 2 min |
| 0:15-0:30 | Slide 6: Sorteer je Bijbaan-taken | 15 min |
| **PAUZE 1** | ☕ | **10 min** |
| **BLOK 2: INZICHT** | | **70 min** |
| 0:40-0:43 | Slide 6B: **Bol.com Voorbeeld** (NIEUW) | 3 min |
| 0:43-0:51 | Slide 7: Genius Curve Model | 8 min |
| 0:51-0:56 | Slide 8: Poll - % Routine in Bijbaan | 5 min |
| 0:56-1:04 | Slide 9: **Van Bijbaan → Bedrijfskundige** (NIEUW) | 8 min |
| 1:04-1:12 | Slide 10: Persoonlijke SWOT (individueel) | 8 min |
| 1:12-1:24 | Slide 11: Trio-discussie SWOT | 12 min |
| 1:24-1:34 | Slide 12: Plenaire Terugkoppeling | 10 min |
| 1:34-1:50 | Slide 13: Confrontatiematrix (individueel) | 16 min |
| **PAUZE 2** | ☕ | **15 min** |
| **BLOK 3: TRANSFORMATIE** | | **35 min** |
| 2:05-2:17 | Slide 14: Gallery Walk + Commitment | 12 min |
| 2:17-2:20 | Slide 15: **Post-Poll** + Vergelijking | 3 min |
| 2:20-2:23 | Slide 16: **Synthese - Van Bijbaan naar Bedrijfskundige** (HERZIEN) | 3 min |
| 2:23-2:30 | Slide 17: Feedback & Afsluiting | 7 min |

**Totaal:** 135 min werk + 25 min pauze = 160 min (10 min buffer)

---

## BLOK 1: CONFRONTATIE (0:00-0:40)

### Slide 1: Titel (2 min) - 0:00-0:02
**Visueel:** Titelslide "AI en de Toekomst van het Bedrijfskundig Beroep"

**Spreeknotities:**
> "Welkom bij week 6. Vandaag gaan we kijken naar jouw toekomst. Niet over 20 jaar, maar over 4 jaar - als je afstudeert. Wat voor bedrijfskundige wil je zijn? En hoe zorgt AI ervoor dat je die keuze NU al moet maken?"

---

### Slide 2: Terugblik Week 1 (5 min) - 0:02-0:07
**Visueel:** Kernformule uit week 1
```
Bedrijfskundig Denken = Systeem 2 + Modellen + Context
```

**Activiteit:** "Wie herinnert zich de bal-knuppel vraag nog?"
- 1 student laten uitleggen (1 min)
- Docent: "Precies! Systeem 1 zegt €0,10 (fout), Systeem 2 zegt €0,05 (goed). De kernles: **bedrijfskundig denken is bewust je Systeem 2 activeren**."
- "Vandaag voegen we daar iets aan toe: **AI**. En dat verandert alles." (1 min)

---

### Slide 3: **Pre-Poll** (3 min) - 0:07-0:10
**Visueel:** Interactive poll in slides-week6.html

**Poll-vraag:** "Als ik over een paar jaar start als bedrijfskundige, dan is AI in mijn dagelijks werk..."

**Opties:**
- **A.** ...mijn assistent: het neemt routine-werk over, ik focus op strategie en complexiteit
- **B.** ...mijn gereedschap: ik gebruik het actief als tool, maar bepaal zelf wat en hoe
- **C.** ...mijn concurrent: het bedreigt mijn werk, ik moet constant bijblijven om relevant te blijven
- **D.** ...minimaal aanwezig: bedrijfskundig werk vraagt vooral menselijke skills die AI niet heeft

**Uitvoering:**
1. Studenten roepen keuze (A/B/C/D) of steken hand op (1 min)
2. Docent klikt knoppen om votes te registreren
3. "Toon Resultaten" knop klikken
4. **Geen analyse** - "Onthoud je keuze. Aan het eind stemmen we opnieuw." (30 sec)

**Let op:** Poll-vraag aangepast van "over 2 jaar" naar "over een paar jaar" (eerstejaars starten niet over 2 jaar).

**Technische note:** Poll werkt via LocalStorage. Reset via "Reset" knop of Shift+R.

---

### Slide 4: Live AI Demo ⚡ (3 min) - 0:10-0:13
**Visueel:** Split-screen: ChatGPT interface + timer

**Demonstratie:**
1. Open ChatGPT/Claude (live in browser)
2. **Opdracht tonen:** "Maak een SWOT-analyse voor Albert Heijn in de context van online retail concurrentie"
3. Start timer (laat AI 30-45 seconden werken)
4. Toon resultaat (SWOT met 4 kwadrant, 3-4 punten per kwadrant)

**Vraag aan studenten:**
> "Hoelang zou JIJ hierover doen?"
> *[Verwacht antwoord: 2-4 uur]*

**Docent-reactie:**
> "Precies. AI doet dit in 30 seconden. Jouw eerste reactie: **paniek**? Terecht. Maar vandaag leren we: dit is niet jouw toekomst. **Jouw toekomst ligt ergens anders.**"

**Motivatie:** **Urgentie** + **Relevantie** (hun eigen carrière staat op het spel)

**Backup plan:** Als ChatGPT/Claude down is → toon screenshot van voorbereide output

---

### Slide 5: De Centrale Vraag (2 min) - 0:13-0:15
**Visueel:** Grote tekst met AI-iconografie
```
Als AI alle bekende modellen
(SWOT, DESTEP, Porter's Five Forces)
beter en sneller kan toepassen dan jij...

Wat is dan jouw toegevoegde waarde?
```

**Spreeknotities:**
> "Dit is DE vraag van jullie generatie. Niet 'kan AI mijn werk overnemen' - dat KAN het. De vraag is: **welk werk wil je doen dat AI NIET kan?** En hoe zorg je ervoor dat je daar goed in wordt?"

---

### Slide 6: Sorteer je Bijbaan-taken 📘📙📕 (15 min) - 0:15-0:30

**Visueel:** Drie categorieën met iconen

| 📘 ROUTINE | 📙 GRENSGEBIED | 📕 EXPLORATIE |
|------------|----------------|---------------|
| "Ik volg een procedure/script" | "Ik moet nadenken, binnen kaders" | "Mijn manager doet dit / zelden" |

**Opdracht (5 min individueel):**
> "Denk aan je **bijbaan** (supermarkt, horeca, retail, callcenter, etc.). Schrijf 6-8 taken op. Sorteer ze:
> - 📘 **ROUTINE**: Ik volg een procedure/script (bijv. kassa draaien, voorraad aanvullen)
> - 📙 **GRENSGEBIED**: Ik moet nadenken/improviseren, maar binnen kaders (bijv. klacht afhandelen)
> - 📕 **EXPLORATIE**: Mijn manager doet dit, of het komt zelden voor (bijv. rooster maken, marketingactie bedenken)"

**Think-Pair-Share (6 min):**
- **Think** (individueel gedaan)
- **Pair (3 min)**: "Vertel je buurman: welk % is routine?"
- **Share (3 min)**:
  - Docent: "Hands up: wie heeft >70% routine?" *(verwacht: bijna iedereen steekt hand op)*
  - 2 studenten kort laten delen

**Cruciale docent-interventie (4 min):**
> "Ik zie dat de meesten 70-90% routine hebben. **Dat is normaal voor een bijbaan**. Jullie doen niks verkeerd. Bijbanen ZIJN routine.
>
> Maar hier is de vraag: **Over 4 jaar ben je HBO-bedrijfskundige afgestudeerd. Wil je dan NOG STEEDS dit werk doen?**
>
> [Pauze voor effect]
>
> Nee? Dan moet je transformeren. Van **Region 2** (routine, waar je nu bent) naar **Region 1 en 3** (strategie, waar je moet zijn).
>
> En hier is het slechte nieuws: AI maakt die transformatie URGENT. Want alles in Region 2 wordt binnen 5-10 jaar geautomatiseerd.
>
> Het goede nieuws? **Deze opleiding kan je die transformatie laten maken.** Maar alleen als je de juiste keuzes maakt. Laten we kijken hoe."

**Motivatie:** **Urgentie** (toekomst op het spel) + **Agency** (je kunt zelf kiezen)

---

## PAUZE 1 (0:30-0:40)

---

## BLOK 2: INZICHT (0:40-1:50)

### Slide 6B: 🎯 Bol.com Voorbeeld (3 min) - 0:40-0:43

**Visueel:** Interactieve lijn met geanimeerde voorbeelden

```
◄──────────────────────────── KENNISDOMEIN ────────────────────────►

0                          0.5 (x₀)                                 1
│                            │                                       │
Farmaceutische R&D      E-COMMERCE         Ruimtevaart logistiek
(totaal onbekend)       (KERNCOMPETENTIE)  (totaal onbekend)
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
     0.35                   0.5                  0.65
   B2B Groothandel      Webshop runnen      Fysieke winkels
   (deels bekend)       (EXPERT IN)         (deels bekend)
        │                    │                    │
        📙──────────── 📘 ─────────────── 📙
        Grensgebied      Routine          Grensgebied
        │                    │                    │
        └────────── Region 2 ─┴──── Region 2 ─────┘
                    (comfort zone)

◄─── Region 1 ───┤          Region 2          ┤─── Region 3 ───►
   📕 Exploratie       📘 Routine (AI!)        📕 Exploratie
```

**Docent-uitleg (met animatie per stap):**

**[Stap 1: Toon alleen de lijn 0───0.5───1]**
> "Voordat we het abstracte model zien, maken we het concreet. Stel je voor: **Bol.com**. Wat kunnen ze het allerbeste? E-commerce, hun webshop runnen. **Dat is x₀, het midden van hun kennis**."

**[Stap 2: Bol.com logo verschijnt bij 0.5]**
> "Hier, bij 0.5, zitten ze in hun **comfort zone**."

**[Stap 3: Voorbeelden verschijnen één voor één]**

**Bij 0.5 (midden):**
> "Vraag: 'Hoe voegen we een nieuwe productcategorie toe?' Ze hebben al miljoenen producten, dus dit is **routine** 📘. Lage onzekerheid. **AI kan dit perfect**: ChatGPT kan analyseren welke producten populair worden."

**Bij 0.35-0.65 (Region 2 kleurt op):**
> "Dit hele gebied - van 0.35 tot 0.65 - dat is **Region 2**, de comfort zone. Hun bestaande kennis werkt hier nog. Dit is 📘 **routine work**."

**Bij 0.2 (ver links):**
> "Maar kijk hier: 'Moeten we farmaceutische producten gaan verkopen?' Dat is **ver van hun expertise** 📕. Compliance, vergunningen, ethische vraagstukken. **Hoge onzekerheid**. Geen handleiding. **Region 1**: je moet **nieuwe kennis creëren**. Genius work."

**Bij 0.7 (ver rechts):**
> "En hier: 'Moeten we fysieke winkels openen?' Ook ver weg 📕. Vastgoed, winkelervaring, personeelsbeheer. **Region 3**: exploratie, strategie."

**[Stap 4: Labels 📘📙📕 verschijnen]**

**Koppeling naar studenten:**
> "Zie je het patroon? Hoe verder een vraag van je expertise ligt, hoe meer **onzekerheid**, hoe meer **genius** work je nodig hebt.
>
> Nu gaan we kijken: in jullie bijbaan werken jullie in Region 2 (📘). Maar waar moet je over 4 jaar werken als bedrijfskundige? **Dat bepaalt je toekomst.**"

---

### Slide 7: Genius Curve Model (8 min) - 0:43-0:51

**Visueel:** Genius.html iframe (beide grafieken)

#### Deel A: Value Functions (4 min)

**Uitleg aan studenten:**
> "Nu het abstracte model. Deze grafiek komt uit wetenschappelijk onderzoek (Agrawal et al., Harvard Business School).
>
> **X-as**: Het kennisdomein - van 0 (onbekend) tot 1 (ook onbekend). In het midden (x₀) zit wat we al goed kennen. **Net als bij Bol.com.**
>
> Twee typen workers:
> - **Blauwe lijn (V_R) = Routine Worker** 📘: Kan alleen waarde creëren dicht bij bekende kennis. Denk aan jullie bijbaan: voorraad aanvullen werkt alleen als je weet waar alles hoort.
> - **Rode stippellijn (V_G) = Genius Worker** 📕: Kan overal waarde creëren, ook in onbekend terrein. Maar kost meer (tijd, energie, denkvermogen).
>
> **De cruciale vraag:** Wat is AI?"

**[Pause effect - 5 seconden stilte]**

**Antwoord:**
> "AI is een **Genius Worker zonder kostenlimiet**. Eenmaal getraind, kan je hem kopiëren naar miljarden situaties. Gratis. Instant.
>
> Een menselijke genius (jouw manager die een nieuw rooster bedenkt) moet elke keer opnieuw nadenken. AI doet het één keer, daarna is het routine."

#### Deel B: Value Difference (4 min)

**Uitleg:**
> "Deze tweede grafiek is cruciaal. Hij toont: **waar win jij het nog van AI?**
>
> - **Groene gebied boven de nullijn**: Hier is menselijke genius nog waardevol
> - **Gebied onder de nullijn**: Hier wint routine - **maar AI doet dit nu ook al**
>
> **Drie regio's:**
> 1. **Region 1** (links, 📕): Extreem onzeker, pure exploratie - menselijke genius nodig
> 2. **Region 2** (midden, 📘): Comfort zone - routine is efficiënt **→ AI neemt dit over!**
> 3. **Region 3** (rechts, 📕): Weer onzeker, nieuwe toepassingen - menselijke genius nodig
>
> **De conclusie:** Naarmate AI beter wordt, verschuiven mensen naar de **uiterste randen** - Region 1 en 3 - waar échte onzekerheid heerst."

**Koppeling naar bijbaan:**
> "Jullie bijbaan? 70-90% Region 2. **Dat verdwijnt.** Niet morgen, maar binnen 10 jaar. Jullie HBO-diploma moet ervoor zorgen dat je in Region 1/3 terechtkomt."

---

### Slide 8: Poll - % Routine in Bijbaan (5 min) - 0:51-0:56

**Visueel:** Twee polls achter elkaar

**Poll 1 (2 min):** "Welk % van je HUIDIGE bijbaan is routine (📘 Region 2)?"
- A: 0-30%
- B: 30-60%
- C: 60-90%
- D: 90-100%

*(Laat studenten stemmen, toon resultaten)*

**Verwachte uitkomst:** Meeste stemmen bij C of D

**Docent-reactie (1 min):**
> "Oké, de meesten zitten tussen 60-100% routine. Dat klopt. **Jullie doen niks verkeerd** - bijbanen zijn zo ontworpen."

---

**Poll 2 (2 min):** "Over 4 jaar, als HBO-bedrijfskundige: welk % van je werk MOET routine zijn?"
- A: <10% (ik wil vooral strategisch/creatief werk)
- B: 10-30% (mix, maar vooral denken)
- C: 30-60% (mix)
- D: >60% (ik vind routine werk prima)

*(Laat studenten stemmen, toon resultaten)*

**Verwachte uitkomst:** Meeste stemmen bij A of B

**Docent-synthese (1 min):**
> "Zie je het verschil?
> - **NU**: 70-90% routine
> - **GEWENST over 4 jaar**: <30% routine
>
> Dat is een **gigantische transformatie**. Van 📘 naar 📕. Van toepassen naar ontwerpen. Van volgen naar beslissen.
>
> **Deze opleiding moet je die transformatie laten maken.** En AI maakt het urgent. Want als je na 4 jaar HBO nog steeds 70% routine doet, neemt AI je werk over."

**Motivatie:** **Mastery** (zien hoe groot de kloof is) + **Purpose** (begrijpen waarom de opleiding belangrijk is)

---

### Slide 9: 🚀 Van Bijbaan → Bedrijfskundige (8 min) - 0:56-1:04

**Visueel:** Split-screen tabel met concrete voorbeelden

| BIJBAAN (NU) | REGIO | HBO-BEDRIJFSKUNDIGE (STRAKS) | REGIO |
|--------------|-------|------------------------------|-------|
| Kassa draaien volgens protocol | 📘 R2 | **Kassasysteem kiezen** (welke software past bij onze strategie?) | 📕 R1/3 |
| Voorraad aanvullen op basis van systeem | 📘 R2 | **Voorraadstrategie bepalen** (Just-in-time vs. veiligheidsvoorraad?) | 📕 R1/3 |
| Klacht afhandelen volgens script | 📙 R2 | **Klachtbeleid ontwerpen** (balans klanttevredenheid & kosten?) | 📕 R1/3 |
| Social media post plaatsen | 📘 R2 | **Social media strategie** (welke kanalen, doelgroepen, waarom?) | 📕 R1/3 |
| Standaard SWOT invullen | 📘 R2 | **Beslissen of SWOT relevant is** voor dit specifieke probleem | 📕 R1/3 |
| Financiële ratio's berekenen | 📘 R2 | **Interpreteren wat ratio's betekenen** voor strategische keuzes | 📕 R1/3 |

**Docent-uitleg per voorbeeld (1 min per rij, kies 4-5 voorbeelden):**

> "**Kassa:** Nu draai je kassa - je volgt het systeem. Straks KIES je welk kassasysteem je bedrijf moet gebruiken. Dat vereist: bedrijfsstrategie begrijpen, leveranciers vergelijken, kosten-baten afwegen. **Geen handleiding voor.**
>
> **Voorraad:** Nu vul je aan wat het systeem zegt. Straks bepaal je DE STRATEGIE: wachten we tot iets op is (Just-in-Time, goedkoop maar risicovol)? Of houden we buffervoorraad (duur maar veilig)? **AI kan data analyseren, maar JIJ beslist.**
>
> **Klachten:** Nu volg je een script. Straks ONTWERP je het beleid: hoeveel geld geven we uit aan klachten? Wat is onze filosofie: klant is koning vs. efficiency? **Ethische afweging, geen AI-vraag.**
>
> **SWOT:** Nu vul je een template in (4 kwadrant, klaar). Straks BESLIS je: is SWOT het juiste model? Of moeten we Porter gebruiken? Of DESTEP? Of iets anders? **Modelkeuze is genius work.**"

**Patroon benadrukken:**
> "Zie je het verschil? In je bijbaan **PAS JE TOE** wat anderen hebben bedacht. Als bedrijfskundige **BEDENK JIJ** wat anderen gaan toepassen.
>
> **AI kan perfect toepassen. AI kan nog niet goed beslissen WAT toegepast moet worden en WAAROM.**
>
> Net als bij Bol.com: AI kan een nieuwe productcategorie toevoegen (Region 2). Maar beslissen of Bol.com fysieke winkels moet openen? Dat is Region 1/3 - strategisch, ethisch, complex. **Daar ligt jouw toekomst.**"

**Motivatie:** **Mastery** (concreet zien wat het verschil is) + **Purpose** (begrijpen wat de opleiding je leert)

---

### Slide 10: Persoonlijke SWOT met Carrière-lens (8 min) - 1:04-1:12

**Visueel:** Template met aangepaste vragen voor eerstejaars

**Opdracht (Individueel, 8 minuten):**
> "Nu maken we het persoonlijk. Maak een SWOT-analyse van JEZELF, maar dan met een AI-lens en focus op je toekomst over 4 jaar."

**Template:**
```markdown
STRENGTHS (intern) - Welke Region 1/3 skills heb je NU al?
- Voorbeelden: Creatief denken, mensen overtuigen, complexe situaties doorgronden,
  ethisch redeneren, dwars denken
- In je bijbaan: zijn er momenten dat je off-script moet en dat goed gaat?
- Bijvoorbeeld: "Ik kan goed improviseren bij lastige klanten" of
  "Ik zie verbanden tussen dingen die anderen missen"

WEAKNESSES (intern) - Waar hang je nog in Region 2?
- Hoeveel % van je tijd (bijbaan + studie) besteed je aan routine (📘)?
- Hoe comfortabel ben je met onzekerheid en problemen zonder handleiding?
- Bijvoorbeeld: "Ik vind open opdrachten eng" of
  "Ik wil graag duidelijke instructies"

OPPORTUNITIES (extern) - Hoe kun je richting Region 1/3 groeien?
- Welke vakken dit jaar trainen Region 1/3 skills? (Analyse, evaluatie, creëren)
- Welke AI-tools kun je leren om routine sneller te doen (zodat je tijd overhoudt)?
- Welke extracurriculaire activiteiten bieden R1/3 ervaring?
  (Bestuur studievereniging, case competitions, startups)

THREATS (extern) - Wat kan je transformatie tegenhouden?
- Welke bijbaan-taken verdwijnen door AI in de komende jaren?
- Welke HBO-bedrijfskundigen blijven in R2-werk hangen na afstuderen?
  (En wat gebeurt er met hun carrière?)
- Wat als je alleen "veilige" vakken kiest en nooit R1/3 oefent?
```

**Docent-begeleiding tijdens werken:**
- Loop rond
- Help studenten die vastlopen met voorbeelden
- "Denk aan een moment in je bijbaan dat NIET routine was - wat deed je toen?"

**Motivatie:** **Autonomy** (eigen analyse) + **Mastery** (toepassing SWOT-model op jezelf)

---

### Slide 11: Trio-discussie SWOT (12 min) - 1:12-1:24

**Opdracht:**
1. Vorm trio's (1 min) - "Zoek 2 mensen die je nog niet goed kent"
2. Deel je SWOT, elk 3 minuten per persoon (9 min totaal)
   - Persoon 1 deelt → anderen luisteren en stellen 1 vraag
   - Persoon 2 deelt → idem
   - Persoon 3 deelt → idem
3. Geef elkaar één concreet advies (2 min)
   - "Als ik jou was, zou ik... [één concrete actie]"

**Facilitatie:**
- Loop rond, luister mee
- Noteer interessante inzichten voor plenaire terugkoppeling
- Help trio's die stil vallen: "Vraag elkaar: wat vind je het moeilijkst - routine loslaten of onzekerheid accepteren?"

**Motivatie:** **Social** (peer learning) + **Relatedness** (erkenning van gedeelde uitdagingen)

---

### Slide 12: Plenaire Terugkoppeling (10 min) - 1:24-1:34

**Vraag:** "Wat was het meest verrassende inzicht uit jullie gesprek?"
- 4-5 studenten laten delen (elk 1-2 min)

**Verwachte inzichten (docent bereidt voor):**
- "Ik dacht dat creativiteit geen skill was, maar blijkbaar is dat Region 1/3"
- "Iemand zei: ik ben eigenlijk bang voor open opdrachten, maar dat is precies wat ik moet leren"
- "We kwamen erop dat onze bijbanen straks niet meer bestaan - we moeten NU al anders denken"

**Docent-synthese (3 min):**
> "Ik hoor drie patronen:
>
> **1. Herkenning:** Veel van jullie zeggen: creativiteit, contextbegrip, ethisch oordeelsvermogen. **Dat is precies Region 1/3!** Jullie hebben die skills al, maar je onderschat ze.
>
> **2. Angst voor onzekerheid:** Sommigen zeggen: ik vind open opdrachten eng. **Goed dat je dat erkent.** Want over 4 jaar is je hele werk "open opdrachten". Beter om dat NU te oefenen dan over 4 jaar te ontdekken.
>
> **3. Urgentie:** Jullie snappen: de klok tikt. **AI wordt beter, jullie bijbaan wordt kwetsbaarder.** De transformatie is geen luxe, het is noodzaak.
>
> Nu gaan we dat omzetten in actie. Niet over 4 jaar beginnen, maar NU."

---

### Slide 13: Confrontatiematrix - Jouw 4-jarenplan (16 min) - 1:34-1:50

**Opdracht (Individueel, 16 minuten):**
> "Nu vertaal je je SWOT naar een actieplan. We gebruiken de **Confrontatiematrix** - een tool die je kent uit je voorstof. Maar nu met een AI-lens en focus op: **Hoe transformeer ik van Region 2 naar Region 1/3?**"

**Template (op papier/laptop/telefoon):**
```
┌─────────────┬──────────────────────────┬──────────────────────────┐
│             │  OPPORTUNITIES           │  THREATS                 │
├─────────────┼──────────────────────────┼──────────────────────────┤
│ STRENGTHS   │ SO: UITBOUWEN            │ ST: BESCHERMEN           │
│             │                          │                          │
│             │ Hoe benut ik mijn        │ Hoe gebruik ik mijn      │
│             │ sterke punten voor       │ sterke punten om         │
│             │ kansen?                  │ bedreigingen tegen       │
│             │                          │ te gaan?                 │
├─────────────┼──────────────────────────┼──────────────────────────┤
│ WEAKNESSES  │ WO: ONTWIKKELEN          │ WT: VERMIJDEN            │
│             │                          │                          │
│             │ Hoe werk ik aan          │ Wat moet ik echt         │
│             │ zwakheden om kansen      │ vermijden/veranderen?    │
│             │ te pakken?               │                          │
└─────────────┴──────────────────────────┴──────────────────────────┘
```

**Concrete voorbeelden (toon op slide):**

**SO (Uitbouwen):**
> "Mijn analytisch vermogen (S) inzetten om AI-tools te leren (O) voor data-analyse in Region 1/3 projecten → **ACTIE:** Volg online cursus 'Python for Business Analytics' deze zomer"

**ST (Beschermen):**
> "Mijn communicatievaardigheden (S) gebruiken waar AI faalt in menselijke interactie (T) → **ACTIE:** Ontwikkel expertise in change management - kies vak 'Organisatieverandering' volgend semester"

**WO (Ontwikkelen):**
> "Ik vind onzekerheid eng (W), maar moet leren werken zonder handleiding (O) → **ACTIE:** Kies bewust voor open opdrachten - meld me aan voor case competition dit jaar"

**WT (Vermijden):**
> "Ik besteed te veel tijd aan routine (W) en AI neemt dit over (T) → **ACTIE:** Automatiseer mijn studie-routine met AI (samenvattingen) zodat ik meer tijd heb voor essays en projecten"

**Opdracht (expliciet maken):**
> "Formuleer **minstens 2 strategieën** met **concrete acties**. Een goede actie is:
> - **Specifiek:** Niet 'beter worden in AI', maar 'volg cursus X'
> - **Meetbaar:** 'Dit semester' of 'voor eind van het jaar'
> - **Actionable:** Iets wat je echt kan doen
>
> Denk aan: vakken kiezen, AI-tools leren, bestuurservaring, cases, stages, online cursussen, boeken lezen."

**Docent-begeleiding tijdens werken:**
- Loop rond
- Help studenten die vastlopen: "Kijk naar je Opportunities - welke is het makkelijkst om NU te starten?"
- Moedig aan om ambitieus te zijn: "Jij kan dit - je hebt 4 jaar om te transformeren"

**Motivatie:** **Autonomy** (eigen strategische keuzes) + **Mastery** (toepassing confrontatiematrix) + **Purpose** (direct bruikbaar actieplan)

---

## PAUZE 2 (1:50-2:05)

---

## BLOK 3: TRANSFORMATIE (2:05-2:30)

### Slide 14: Gallery Walk + Commitment (12 min) - 2:05-2:17

**Deel A: Gallery Walk (7 min)**

**Opdracht:**
1. Hang je confrontatiematrix op (op muur/tafel/vloer) (1 min)
2. Loop rond, lees minstens 5 andere matrices (5 min)
3. Plak post-it met feedback/inspiratie op elkaars werk (1 min)

**Post-it format:**
- 💡 "Inspiratie: [wat ik van jou ga kopiëren]"
- 🎯 "Tip: [concreet advies]"
- ⭐ "Top: [wat ik sterk vind]"

**Facilitatie:**
- Creëer veilige, nieuwsgierige sfeer
- Moedig aan: "Zoek iemand met een heel andere aanpak dan jij - wat kun je leren?"
- Model gedrag: loop zelf rond, plak een post-it, laat zien hoe

**Deel B: Persoonlijke Commitment (5 min)**

**Opdracht (Individueel, stil):**
> "Je hebt net gezien: iedereen heeft goede ideeën. Maar ideeën zijn niks zonder actie.
>
> Kies **ÉÉN actie** uit je confrontatiematrix die je de komende **2 weken** gaat uitvoeren. Schrijf deze op."

**Format (toon template op slide):**
```
Mijn commitment voor de komende 2 weken:

WAT: [concrete actie]
Bijvoorbeeld: "Ik meld me aan voor de case competition van volgende maand"

WANNEER: [deadline]
Bijvoorbeeld: "Voor vrijdag 25 oktober"

HOE MEET IK SUCCES: [meetbaar resultaat]
Bijvoorbeeld: "Inschrijving bevestigd + teamleden gevonden"
```

**Docent-instructie:**
> "Maak het klein genoeg om te lukken, groot genoeg om verschil te maken. Niet 'ik word beter in AI', maar 'ik volg deze week tutorial X op YouTube'."

**Optioneel (als tijd):** 3 studenten laten delen wat hun commitment is (1 min totaal)

**Motivatie:** **Agency** (eigen keuze) + **Commitment** (publiek maken verhoogt kans op follow-through)

---

### Slide 15: **Post-Poll** + Vergelijking (3 min) - 2:17-2:20

**Visueel:** Interactive poll + side-by-side comparison

**Poll-vraag (herhaling van Slide 3):**
> "Als ik over een paar jaar start als bedrijfskundige, dan is AI in mijn dagelijks werk..."

**Opties:** (zelfde als pre-poll)
- A. ...mijn assistent
- B. ...mijn gereedschap
- C. ...mijn concurrent
- D. ...minimaal aanwezig

**Uitvoering:**
1. Studenten stemmen opnieuw (1 min)
2. Docent klikt knoppen
3. Klik "Vergelijk Pre/Post" knop (30 sec)
4. Side-by-side comparison verschijnt

**Docent-analyse (1,5 min):**
> "Kijk naar de verschuiving:
> - **Pre:** [X]% zei 'concurrent' (C) → angst
> - **Post:** [Y]% zegt 'assistent' of 'gereedschap' (A/B) → begrip + agency
>
> **Dat is de kern van vandaag:** Niet 'AI is eng' maar 'AI is een tool die routine overneemt, en ik focus op strategie'.
>
> Als je nu nog bij C zit ('concurrent'), begrijpelijk. Maar dan is mijn advies: kom nog eens praten. Want met die mindset word je ongelukkig in je carrière. **Je kan je rol herdefiniëren.**"

**Succesindicator:** Minimaal 15-20% verschuiving van C/D → A/B

---

### Slide 16: ✨ Synthese - Van Bijbaan naar Bedrijfskundige (3 min) - 2:20-2:23

**Visueel:** Evolutie formule + transformatie-diagram

**Week 1 formule:**
```
Bedrijfskundig Denken = Systeem 2 + Modellen + Context
```

**Week 6 update voor EERSTEJAARS:**
```
Van BIJBAAN naar BEDRIJFSKUNDIGE: De Transformatie

┌──────────────────────┐           ┌──────────────────────┐
│   NU (bijbaan)       │           │  OVER 4 JAAR (HBO)   │
│                      │           │                      │
│  - 80% Region 2 📘   │  ──────►  │  - <20% Region 2 📘  │
│  - Toepassen         │           │  - Ontwerpen         │
│  - Volgen            │           │  - Beslissen         │
│  - AI vervangt ↓     │           │  - AI helpt ↑        │
└──────────────────────┘           └──────────────────────┘

Jouw transformatie-formule:

Toekomstbestendige Bedrijfskundige =
    Systeem 2 activeren (niet op autopilot)
    + Modellen MAKEN (niet alleen invullen)
    + Context begrijpen (WAAROM, niet alleen HOE)
    + AI als TOOL (voor routine, zodat jij tijd hebt voor strategie)
```

**Spreeknotities (3 min):**
> "Laten we afsluiten met de kernboodschap:
>
> **Je huidige bijbaan is 80% Region 2.** Dat is oké. Bijbanen zijn zo ontworpen. Maar **dat is niet je toekomst**.
>
> **Over 4 jaar, als HBO-bedrijfskundige, moet je <20% Region 2 doen.** De rest is Region 1/3: strategie, creativiteit, ethiek, complexiteit.
>
> **Wat betekent dat concreet?**
> - Week 1 leerde je: Bedrijfskundig Denken = Systeem 2 + Modellen + Context.
> - Vandaag hebben we daar AI aan toegevoegd.
>
> **Maar de transformatie is dieper:**
> - **Van Toepassen naar Ontwerpen**: Nu pas je SWOT toe. Straks ONTWERP je: is SWOT relevant?
> - **Van Volgen naar Beslissen**: Nu volg je procedures. Straks BESLIS je: welke procedure maken we?
> - **Van AI als Concurrent naar AI als Tool**: AI is geen bedreiging. Het is een tool die routine overneemt zodat JIJ tijd hebt voor strategie.
>
> **En hier is het cruciale punt:** Een HBO-diploma is **GEEN garantie** voor Region 1/3 werk. Je kan 4 jaar studeren en alsnog in Region 2 blijven hangen. Dat gebeurt met veel afgestudeerden.
>
> **De transformatie moet je ZELF maken.** Door:
> - Vakken te kiezen die R1/3 trainen (Analyse, Evaluatie, Creëren - Bloom's Taxonomy)
> - Cases te doen zonder handleiding
> - Bestuurservaring op te doen
> - AI-tools te leren zodat je routine kunt automatiseren
> - En vooral: **onzekerheid te accepteren**. Want R1/3 werk = geen handleiding.
>
> **Jullie hebben 4 jaar.** Gebruik ze wijs. Start vandaag met dat commitment dat je net opschreef.
>
> **Over 4 jaar is AI veel beter dan nu.** Alles wat NU nog menselijk lijkt in Region 2, is dan geautomatiseerd. Je toekomst ligt in Region 1/3. Nowhere else."

---

### Slide 17: Feedback & Afsluiting (7 min) - 2:23-2:30

**Visueel:** QR-code voor retrospective survey

**Survey URL:**
```
https://hanbedrijfskunde.github.io/retrospective/?workshop=Strategisch%20Mgmt%20WK6
```

**Spreeknotities (2 min):**
> "Voordat jullie gaan:
>
> **1. Scan de QR-code voor feedback.** Ik wil weten: hielp deze sessie? Wat was onduidelijk? Wat moet anders?
>
> **2. Houd je commitment bij.** Over 2 weken: check of je het gedaan hebt. Zo niet, kies een nieuwe actie. **Actie creëert momentum.**
>
> **3. Laatste boodschap:** Jullie zijn geen slachtoffers van AI. Jullie zijn de generatie die kan bepalen HOE AI gebruikt wordt. Maar alleen als je transformeert van Region 2 naar Region 1/3.
>
> Jullie kunnen dit. Ik geloof in jullie. **Start vandaag.**"

**Q&A (5 min):**
- Ruimte voor vragen
- Individuele gesprekken na afloop mogelijk

---

## Bijlagen voor Docent

### Materiaal Checklist

**Digitaal:**
- [ ] **[slides-week6.html](slides-week6.html)** openen in browser
- [ ] Test poll functionaliteit (stem, reset, resultaten)
- [ ] Test ChatGPT/Claude voor live demo (Slide 4) - zorg voor account + inloggen
- [ ] [genius.html](genius.html) embedded in slides (Slide 7)
- [ ] Beamer aangesloten en getest
- [ ] Backup: screenshot pre-poll resultaten

**Fysiek:**
- [ ] Post-its voor Gallery Walk (4-5 per student, 3 kleuren: 💡🎯⭐)
- [ ] Plakband/pins voor ophangen confrontatiematrices
- [ ] A4 papier voor studenten zonder laptop (SWOT + Confrontatiematrix templates)
- [ ] Stiften/pennen (backup)

### ChatGPT/Claude Demo Setup (Slide 4)

**Voorbereiding:**
1. Open ChatGPT.com of Claude.ai
2. Login vooraf (test in pauze voor sessie)
3. Test prompt: "Maak een SWOT-analyse voor Albert Heijn in de context van online retail concurrentie met Picnic en Amazon Fresh"
4. Check dat output goed is (4 kwadranten, 3-4 punten per kwadrant)
5. Clear chat history voordat je presenteert (zodat studenten "fresh start" zien)

**Tijdens demo:**
- Typ prompt langzaam (zodat studenten meelezen) OF kopieer-plak vanuit voorbereide tekst
- Start timer (gebruik telefoon of online timer op 2e scherm)
- Highlight dat het 30-45 seconden duurt
- Lees een paar bullets voor: "Strengths: Sterke merkherkenning, groot distributienetwerk..."

**Backup plan:** Als ChatGPT/Claude down is → toon screenshot van voorbereide output

### Poll Setup & Gebruik

**Technologie:**
- **Type:** Self-built (LocalStorage, geen cloud)
- **Privacy:** Anoniem, geen tracking
- **Browser:** Chrome/Firefox/Safari (test vooraf)

**Voor de sessie:**
1. Open slides-week6.html
2. Navigeer naar Slide 3 (Pre-Poll)
3. Test: klik optie A → "Toon Resultaten" → moet 1 stem tonen
4. Reset: Shift+R (wist alles)

**Tijdens Pre-Poll (Slide 3):**
- Studenten roepen keuze of steken hand op
- Docent klikt per stem
- "Toon Resultaten" → geen analyse
- "Hou je keuze in gedachten"

**Tijdens Post-Poll (Slide 15):**
- Herhaal stemproces
- "Vergelijk Pre/Post" → analyse verschuiving
- Highlight: "X% verschoof van C naar A/B"

**Troubleshooting:**
- Poll werkt niet → Refresh (Ctrl+R), data blijft
- Verkeerde stem → "Reset" knop per poll
- Alles resetten → Shift+R

### Timing Backup

**Als tijd te kort:**
- Schrap: Slide 8 Poll 2 (bespaar 2 min) - alleen Poll 1 doen
- Verkort: Gallery Walk naar 5 min (bespaar 2 min)
- Verkort: Plenaire terugkoppeling naar 7 min (bespaar 3 min)

**Als tijd over:**
- Verdiep: Laat studenten hun top-3 skills plotten op genius curve (Region 1/2/3)
- Extra: "Bedenk een bedrijfskundige rol die over 5 jaar bestaat maar nu niet"

### Differentiatieniveaus

**Minder vergevorderd:**
- Bied ingevulde SWOT-voorbeelden
- Begeleid confrontatiematrix stap-voor-stap
- Extra tijd bij opdrachten

**Meer vergevorderd:**
- Extra uitdaging: "Pas het model toe op een sector naar keuze"
- "Bedenk een nieuwe bedrijfskundige rol (Region 1/3) die nu niet bestaat"
- Laat Agrawal paper lezen: [background-docs/Agrawal et al.pdf](background-docs/Agrawal%20et%20al.%20-%20The%20Value%20of%20Transformative%20Artificial%20Intelligence.pdf)

### Succesindicatoren

**Poll-doelen:**
- Pre-poll: >70% participatie
- Post-poll: >15% verschuiving C/D → A/B
- Studenten kunnen Region 1/2/3 uitleggen

**Inhoudelijk:**
- Studenten noemen concrete R1/3 voorbeelden
- SWOT bevat AI-specifieke elementen
- Confrontatiematrices zijn actionable (niet alleen analyse)
- Commitments zijn SMART

**Emotioneel:**
- Shift van angst (AI = concurrent) naar agency (ik kan transformeren)
- Herkenning: "Oh, dus daarom doen we deze opleiding"
- Motivatie: "Ik ga echt die actie uitvoeren"

---

## Motivationele Factoren (Self-Determination Theory)

**Autonomy:**
- Studenten kiezen zelf hun SWOT-focus
- Eigen strategische keuzes in confrontatiematrix
- Welk commitment ze maken

**Competence/Mastery:**
- Van theorie (model) naar toepassing (eigen situatie)
- Concrete voorbeelden: bijbaan → bedrijfskundige
- Zien dat ze al R1/3 skills hebben

**Relatedness/Social:**
- Trio-discussies, peer feedback
- Gallery Walk: gedeelde uitdagingen
- "We zitten er allemaal in"

**Purpose:**
- Direct relevant voor carrière over 4 jaar
- Urgent: AI maakt transformatie noodzakelijk
- Agency: jij bepaalt je toekomst

---

## Verbinding met Week 1 (Expliciete Synthese)

| Week 1 Concept | Week 6 Toepassing | Concrete Link |
|----------------|-------------------|---------------|
| **Bloom's Taxonomy** | Region 2 = Remember/Apply<br>Region 1/3 = Analyze/Evaluate/Create | "Jullie toets test Remember-niveau. Je werk over 4 jaar vereist Create-niveau." |
| **Kahneman Systeem 1/2** | Routine Worker = getraind S1<br>Genius Worker = S2 denken | "AI is getraind Systeem 2. Mensen blijven nodig voor ethisch/strategisch S2." |
| **Bal-knuppel vraag** | Intuïtief (S1) = €0,10 (fout)<br>Analytisch (S2) = €0,05 (goed) | "Region 2 = S1 kan het. Region 1/3 = S2 nodig. AI doet S1 perfect, S2 matig." |
| **Modellen (SWOT, DESTEP, Porter)** | Van toepassen → kiezen wanneer relevant | "AI vult SWOT perfect in. Jij beslist: is SWOT het juiste model voor dit probleem?" |
| **Strategy Map (evolutie)** | Van invullen → ontwerpen met AI-integratie | "Jullie leerden Strategy Map 1.0. Over 4 jaar ontwerp je Strategy Map 2.0 met AI." |
| **Context (DESTEP)** | AI = Technologische factor die alles beïnvloedt | "AI is niet alleen technologie. Het verandert Economic, Social, Political - alles." |

---

## Quick Start Gids

### 5 minuten voor de sessie
1. ✅ Open slides-week6.html in browser
2. ✅ Test poll (Slide 3): stem → resultaten → Shift+R (reset)
3. ✅ Login ChatGPT/Claude voor live demo (Slide 4)
4. ✅ Check genius.html iframe (Slide 7)
5. ✅ Beamer fullscreen (F11)

### Tijdens de sessie
- **Pre-Poll (0:07):** Stem → "Toon Resultaten" → geen analyse
- **AI Demo (0:10):** Live ChatGPT SWOT maken (30 sec) → "Hoe lang zou jij erover doen?"
- **Bol.com (0:40):** Animatie stap-voor-stap tonen
- **Post-Poll (2:17):** Stem → "Vergelijk Pre/Post" → bespreek verschuiving
- **Navigatie:** Pijltjes of spatiebalk
- **Speaker notes:** Druk 'S'

### Na de sessie
- Export poll data: F12 → `exportResults()` → CSV
- Screenshot resultaten voor rapport
- Noteer: welke slides werkten, wat moet anders

---

## Veelgestelde Vragen (FAQ) - Voorbereiding

**Q: "Maar mijn bijbaan is toch waardevol?"**
A: "Absoluut! Je leert verantwoordelijkheid, klantvriendelijkheid, samenwerken. Maar het is niet je **eindbestemming**. Het is een stepping stone. Over 4 jaar wil je niet dezelfde taken doen."

**Q: "Kan AI echt strategische beslissingen nemen?"**
A: "Gedeeltelijk. AI kan data analyseren, scenario's simuleren. Maar **ethische afwegingen, contextueel oordeel, creativiteit** - daar is de mens nog steeds beter. En dat zijn precies Region 1/3 skills."

**Q: "Wat als ik Region 2 werk leuker vind dan Region 1/3?"**
A: "Eerlijke vraag. Sommige mensen houden van duidelijkheid en routine. **Maar dan is HBO bedrijfskunde niet de juiste opleiding voor jou.** HBO traint je voor strategisch denken. Als je routine wilt, is MBO of HBO-ICT (programmeren) misschien beter. En dat is oké - ken jezelf."

**Q: "Is AI niet gewoon hype? Over 2 jaar is het weer wat anders."**
A: "Mogelijk. Maar zelfs als AI hype is: **automatisering is geen hype**. Al 200 jaar verdwijnt routine werk door machines. AI is gewoon de nieuwste golf. De vraag is niet 'gaat routine werk verdwijnen' maar 'ben jij er klaar voor'."

---

## Reflectievragen voor Docent (na sessie)

1. **Engagement:** Hoeveel % studenten participeerde actief? (Poll, discussies, Gallery Walk)
2. **Begrip:** Konden studenten Region 1/2/3 uitleggen in eigen woorden?
3. **Emotie:** Verschoof de sfeer van angst → begrip → agency?
4. **Actie:** Hoeveel studenten formuleerden een concreet, haalbaar commitment?
5. **Poll-shift:** Hoeveel % verschoof van C/D (concurrent/minimaal) → A/B (assistent/gereedschap)?
6. **Volgende keer:** Wat moet sneller/langzamer/anders?

---

## Appendix: Bol.com Slide - Animatie Details

**Slide 6B animatie sequence (3 min totaal):**

**[00:00-00:20] Stap 1:** Toon lege lijn 0───0.5───1
> "Het kennisdomein. 0 = totaal onbekend links, 1 = totaal onbekend rechts, 0.5 = wat je het beste kent."

**[00:20-00:40] Stap 2:** Bol.com logo verschijnt bij 0.5
> "Bol.com's expertise: e-commerce, webshop runnen."

**[00:40-01:00] Stap 3a:** Voorbeeld 0.5 verschijnt
> "Vraag: nieuwe productcategorie toevoegen. Dicht bij expertise = 📘 routine. AI kan dit."

**[01:00-01:20] Stap 3b:** Region 2 box kleurt (0.35-0.65)
> "Dit hele gebied = Region 2. Bestaande kennis werkt. Comfort zone."

**[01:20-01:40] Stap 3c:** Voorbeeld 0.2 verschijnt (links)
> "Farmaceutische producten verkopen. Ver van expertise = 📕 genius work. Nieuwe kennis creëren."

**[01:40-02:00] Stap 3d:** Voorbeeld 0.7 verschijnt (rechts)
> "Fysieke winkels openen. Ook ver = 📕 exploratie, strategie."

**[02:00-02:20] Stap 4:** Labels 📘📙📕 verschijnen
> "Patroon: hoe verder van expertise, hoe meer genius work."

**[02:20-03:00] Stap 5:** Koppeling naar studenten
> "Nu gaan we kijken: waar zit jouw bijbaan? En waar moet je over 4 jaar zitten?"

---

**Einde draaiboek - versie 2.0 (volledig herzien met bijbaan-context + Bol.com voorbeeld + concrete voorbeelden)**

**Belangrijkste wijzigingen t.o.v. versie 1.0:**
- ✅ **Bijbaan-context** i.p.v. stage (passend voor eerstejaars)
- ✅ **Bol.com voorbeeld** als concrete brug tussen ervaring en model (Slide 6B)
- ✅ **Concrete voorbeeldentabel** bijbaan → bedrijfskundige (Slide 9)
- ✅ **Kwalitatieve sorteer-oefening** i.p.v. numerieke mapping (Slide 6)
- ✅ **Live AI demo** voor urgentie en confrontatie (Slide 4)
- ✅ **Dubbele poll** op Slide 8 (huidige % routine vs gewenste % over 4 jaar)
- ✅ **Herziene synthese** met expliciete transformatie-diagram (Slide 16)
- ✅ **Sterkere motivationele elementen** (urgentie, agency, purpose)
- ✅ **4 extra slides** (van 13 → 17 slides totaal)
- ✅ **Herschreven timing** (3-aktes structuur)
