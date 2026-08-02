// SYS.REPAIR DATABASE
// Inject new schematics here. Maintain the existing structure.

const database = {
    'iphone12': {
        menuLabel: "iPhone 12 - Battery", 
        searchTags: "iphone apple mobile phone battery replacement cell",
        title: "IPHONE_12 // BATTERY_REPLACEMENT", 
        time: "30-45 MIN",
        difficulty: "MODERATE",
        
        // SECURE AFFILIATE LINKS: Insert your custom tracking URLs here
        affiliates: [
            { name: "OEM Battery Replacement Kit (Inc. Adhesive)", url: "https://amazon.com/your-affiliate-link-1" },
            { name: "Pentalobe Screwdriver Set", url: "https://amazon.com/your-affiliate-link-2" },
            { name: "Thermal Precision Heat Gun", url: "https://amazon.com/your-affiliate-link-3" }
        ],

        html: `
            <div class="phase">
                <div class="phase-title">PHASE 1: DISPLAY REMOVAL</div>
                <div class="phase-meta">WARNING: Hardware is highly fragile.</div>
                <p>Power off the target device. Extract the two Pentalobe screws located at the bottom edge next to the charging port.</p>
                <p>Apply thermal output (approx. 60°C) to the lower edge for one minute to compromise the waterproof adhesive seal.</p>
                <p>Attach a suction tool to the lower quadrant of the display. Apply vertical pressure to create a gap, insert an opening pick, and bypass the perimeter seal. Avoid deep insertion on the right edge to prevent severing display ribbons.</p>
            </div>
            <div class="phase">
                <div class="phase-title">PHASE 2: POWER DISCONNECTION</div>
                <div class="phase-meta">PROTOCOL: Use non-conductive tools only.</div>
                <p>Remove the shielding over the battery connector. Utilize a plastic spudger to pry the battery connector vertically from its socket, isolating the power flow to prevent accidental shorts.</p>
            </div>
            <div class="phase">
                <div class="phase-title">PHASE 3: EXTRACTION & REPLACEMENT</div>
                <div class="phase-meta">ACTION: Adhesive mitigation.</div>
                <p>Locate the adhesive pull-tabs beneath the battery. Extract them slowly along a flat horizontal plane. If a tab breaks, inject isopropyl alcohol under the cell to dissolve remaining bonds.</p>
                <p>Seat the replacement power cell, reconnect the primary interfaces, and run diagnostics before re-sealing the chassis with fresh adhesive.</p>
            </div>
        `
    },
    'ps4_drift': {
        menuLabel: "PS4 Controller - Drift Fix", 
        searchTags: "ps4 playstation controller dualshock gamepad stick drift fix soldering",
        title: "DUALSHOCK_4 // ANALOG_DRIFT_FIX", 
        time: "45-60 MIN",
        difficulty: "ADVANCED (SOLDERING_REQ)",
        
        // SECURE AFFILIATE LINKS
        affiliates: [
            { name: "ALPS 3D Analog Sensor Module (2x)", url: "https://amazon.com/your-affiliate-link-4" },
            { name: "Micro-Soldering Iron Kit + Flux", url: "https://amazon.com/your-affiliate-link-5" },
            { name: "Desoldering Copper Braid", url: "https://amazon.com/your-affiliate-link-6" }
        ],

        html: `
            <div class="phase">
                <div class="phase-title">PHASE 1: CHASSIS BREACH</div>
                <div class="phase-meta">CAUTION: Spring mechanisms inside.</div>
                <p>Extract the four Phillips-head screws from the rear chassis. Use a non-marring tool to carefully separate the front and rear plates. Proceed with extreme caution to avoid launching the L2/R2 trigger springs into the environment.</p>
                <p>Before full separation, disconnect the primary ribbon cable linking the motherboard to the touchpad array.</p>
            </div>
            <div class="phase">
                <div class="phase-title">PHASE 2: MOTHERBOARD ISOLATION</div>
                <div class="phase-meta">DISCONNECT: Internal power cell.</div>
                <p>Unplug the battery and extract its housing bracket. Disconnect the remaining ribbon cables. Desoldering the rumble motor wires may be required for optimal board access.</p>
            </div>
            <div class="phase">
                <div class="phase-title">PHASE 3: COMPONENT SWAP</div>
                <div class="phase-meta">SKILL: Precision micro-soldering.</div>
                <p>Target the 14 anchor points of the malfunctioning 3D analog module. Apply flux compound and deploy a soldering iron with desoldering braid to extract the factory solder.</p>
                <p>Remove the dead module, purge the via holes with isopropyl alcohol, and mount the replacement hardware. Apply fresh solder to all 14 points, verifying zero bridging or cold joints. Reassemble and initiate calibration protocols.</p>
            </div>
        `
    }
};
