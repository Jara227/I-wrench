// DEDSEC DATABÁZE EXPLOITŮ
// Sem přidávej nové návody. Kopíruj strukturu existujících.

const database = {
    'iphone12': {
        menuLabel: "iPhone 12 - Baterie", 
        searchTags: "iphone apple mobil baterie",
        title: "OPERACE: VÝMĚNA BATERIE", 
        sub: "CÍL: iPHONE 12 // ZABEZPEČENÍ: KORPORÁTNÍ LEPIDLO",
        reward: 1500,
        ascii: `
  .-----------------.
 | .---------------. |
 | |    [O] :::    | |
 | |   [ BATT ]    | |
 | |   [ DEAD ]    | |
 | '---------------' |
  '-------[_]-------'
        `,
        html: `
            <div class="phase">
                <div class="phase-title">Fáze 1: Breach (Vniknutí)</div>
                <div class="phase-meta">ZABEZPEČENÍ: PENTALOBE & LEPIDLO</div>
                <p>Zahřej spodní část na 60°C. Použij přísavku na displej, odšroubuj pentalobe šrouby. Postupuj jako duch, ať nepoškodíš flex kabel.</p>
            </div>
            <div class="phase">
                <div class="phase-title">Fáze 2: Exploit (Výměna)</div>
                <div class="phase-meta">STATUS: ODPOJENÍ NAPÁJENÍ</div>
                <p>Sundej kryt baterie. ODPOJ KONEKTOR BATERIE (plastem, ne kovem!). Vytáhni lepící pásky. Vlož nový článek. Boot sequence initiated.</p>
            </div>
        `
    },
    'ps4_drift': {
        menuLabel: "PS4 Controller - Drift", 
        searchTags: "ps4 playstation ovladac gamepad drift",
        title: "OPERACE: ANALOG DRIFT", 
        sub: "CÍL: DUALSHOCK 4 // OBTÍŽNOST: PÁJENÍ",
        reward: 2500,
        ascii: `
      .-----------.
    .'  _       _  '.
   /   / \\     / \\   \\
  | .-. O .---. O .-. |
  | '-'   |   |   '-' |
   \\     '---'     /
    '--.       .--'
        '-----'
        `,
        html: `
            <div class="phase">
                <div class="phase-title">Fáze 1: Pitva</div>
                <div class="phase-meta">VAROVÁNÍ: MECHANICKÉ SOUČÁSTKY</div>
                <p>Odšroubuj 4 zadní šrouby. Opatrně odděl kryty. Bacha na flex pásek touchpadu – odpoj ho dřív, než obal rozpůlíš úplně.</p>
            </div>
            <div class="phase">
                <div class="phase-title">Fáze 2: Chirurgický zákrok</div>
                <div class="phase-meta">NÁSTROJE: PÁJEČKA, ODSÁVAČKA</div>
                <p>Odpájej vadný 3D analogový modul ze základní desky. Očisti kontakty, zasuň nový modul a připájej ho. Konec driftování.</p>
            </div>
        `
    }
};