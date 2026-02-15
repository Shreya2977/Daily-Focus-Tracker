// document.addEventListener('DOMContentLoaded', () => {
//     // 1. DOM Elements
//     const studyInput = document.getElementById('study-range');
//     const socialInput = document.getElementById('social-range');
//     const entInput = document.getElementById('ent-range');

//     const studyValDisplay = document.getElementById('study-val');
//     const socialValDisplay = document.getElementById('social-val');
//     const entValDisplay = document.getElementById('ent-val');

//     const focusRing = document.querySelector('.progress-ring__circle');
//     const focusScoreDisplay = document.getElementById('focus-score-value');
//     const focusInsight = document.getElementById('focus-insight');

//     const distractionBar = document.getElementById('distraction-bar');
//     const distractionValueDisplay = document.getElementById('distraction-value');

//     const totalTimeDisplay = document.getElementById('total-time');
//     const prodRatioDisplay = document.getElementById('prod-ratio');
//     const currentDateDisplay = document.getElementById('current-date');
//     const avgFocusDisplay = document.getElementById('avg-focus');

//     // 2. Constants & Data
//     const radius = 80;
//     const circumference = 2 * Math.PI * radius;
//     focusRing.style.strokeDasharray = `${circumference} ${circumference}`;
    
//     // Mock Data for Mon-Sat, Sunday (Index 6) is today
//     const weeklyScores = [75, 40, 90, 65, 85, 30, 0]; 

//     // 3. Setup Date
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', options);

//     // // 4. Update Function
   
//         function updateDashboard(event) {
//         let studyTime = parseFloat(studyInput.value);
//         let socialTime = parseFloat(socialInput.value);
//         let entTime = parseFloat(entInput.value);

//         // --- 24-HOUR TIME WARDEN LOGIC ---
//         let total = studyTime + socialTime + entTime;

//         if (total > 24) {
//             // If the user just moved a slider, find out which one and trim it
//             if (event && event.target) {
//                 const changedInput = event.target;
//                 const otherTimes = total - parseFloat(changedInput.value);
//                 const allowedValue = 24 - otherTimes;
                
//                 changedInput.value = allowedValue;
                
//                 // Re-sync local variables after trimming
//                 studyTime = parseFloat(studyInput.value);
//                 socialTime = parseFloat(socialInput.value);
//                 entTime = parseFloat(entInput.value);
//                 total = 24;
//             }
//         }
//         // --------------------------------

//         // Update Labels
//         studyValDisplay.textContent = studyTime.toFixed(1);
//         socialValDisplay.textContent = socialTime.toFixed(1);
//         entValDisplay.textContent = entTime.toFixed(1);

//         const distractionTime = socialTime + entTime;

//         // Formula: Focus Score / Productivity Ratio
//         let prodRatio = total > 0 ? Math.round((studyTime / total) * 100) : 0;
//         let distractionPercentage = total > 0 ? Math.round((distractionTime / total) * 100) : 0;

//         // Update Circular Ring
//         const offset = circumference - (prodRatio / 100) * circumference;
//         focusRing.style.strokeDashoffset = offset;
//         focusScoreDisplay.textContent = prodRatio;

//         // Color Logic & Insights
//         if (prodRatio >= 70) {
//             focusRing.style.stroke = 'var(--success)';
//             focusInsight.textContent = "Excellent focus today!";
//         } else if (prodRatio >= 40) {
//             focusRing.style.stroke = 'var(--primary)';
//             focusInsight.textContent = "Good, but room to improve.";
//         } else {
//             focusRing.style.stroke = 'var(--danger)';
//             focusInsight.textContent = "High distraction detected.";
//         }

//         // Update Distraction Bar
//         distractionBar.style.width = `${distractionPercentage}%`;
//         distractionValueDisplay.textContent = `${distractionPercentage}%`;

//         // Update Stats
//         totalTimeDisplay.textContent = `${total.toFixed(1)} / 24 hrs`;
//         prodRatioDisplay.textContent = `${prodRatio}%`;

//         // Update Weekly Section
//         weeklyScores[6] = prodRatio;
//         renderBars();

//         // Update Average Score
//         const avg = Math.round(weeklyScores.reduce((a, b) => a + b) / 7);
//         if (avgFocusDisplay) avgFocusDisplay.innerText = avg;
//     }
//     // 5. Render Weekly Bars
//     function renderBars() {
//         weeklyScores.forEach((score, index) => {
//             const bar = document.getElementById(`bar-${index}`);
//             if (bar) {
//                 bar.style.height = `${score}%`;
//                 bar.style.opacity = (score / 100) + 0.3;
//             }
//         });
//     }

//     // 6. Listeners
//     [studyInput, socialInput, entInput].forEach(input => {
//         input.addEventListener('input', updateDashboard);
//     });

//     // Initialize
//     updateDashboard();
// });

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements
    const studyInput = document.getElementById('study-range');
    const socialInput = document.getElementById('social-range');
    const entInput = document.getElementById('ent-range');

     const studyValDisplay = document.getElementById('study-val');
    const socialValDisplay = document.getElementById('social-val');
    const entValDisplay = document.getElementById('ent-val');

    const focusRing = document.querySelector('.progress-ring__circle');
    const focusScoreDisplay = document.getElementById('focus-score-value');
    const focusInsight = document.getElementById('focus-insight');

    const distractionBar = document.getElementById('distraction-bar');
    const distractionValueDisplay = document.getElementById('distraction-value');

    const totalTimeDisplay = document.getElementById('total-time');
    const prodRatioDisplay = document.getElementById('prod-ratio');
    const currentDateDisplay = document.getElementById('current-date');
    const avgFocusDisplay = document.getElementById('avg-focus');

    // 2. Constants & Data
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    focusRing.style.strokeDasharray = `${circumference} ${circumference}`;
    //3. Setup Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
    


    
    // 2. Data (Mock data for Mon-Sat, Sun is Index 6)
    const weeklyMetrics = [
        { day: "Mon", focus: 82, distraction: 12 },
        { day: "Tue", focus: 88, distraction: 8 },
        { day: "Wed", focus: 70, distraction: 25 },
        { day: "Thu", focus: 92, distraction: 5 },
        { day: "Fri", focus: 78, distraction: 18 },
        { day: "Sat", focus: 45, distraction: 48 },
        { day: "Sun", focus: 0, distraction: 0 } // Today
    ];

    function renderDashboardUI() {
        const statsGrid = document.getElementById('stats-grid');
        const barArea = document.getElementById('bar-area');
        
        // Clear previous content
        statsGrid.innerHTML = '';
        barArea.innerHTML = '';

        weeklyMetrics.forEach((data, index) => {
            // Create Mini Cards
            const card = document.createElement('div');
            card.className = 'day-card';
            card.innerHTML = `
                <span class="day-name">${data.day}</span>
                <span class="day-score" id="card-focus-${index}">${data.focus}</span>
                <span class="day-distraction" id="card-dist-${index}">${data.distraction}% Dist.</span>
            `;
            statsGrid.appendChild(card);

            // Create Twin Bars
            const group = document.createElement('div');
            group.className = 'bar-group';
            group.innerHTML = `
                <div class="bar bar-focus" id="bar-focus-${index}" style="height: ${data.focus}%" data-value="${data.focus}"></div>
                <div class="bar bar-distraction" id="bar-dist-${index}" style="height: ${data.distraction}%" data-value="${data.distraction}%"></div>
                <span class="day-name" style="margin-top:10px; font-size:10px">${data.day}</span>
            `;
            barArea.appendChild(group);
        });
    }

    function updateDashboard(event) {
        let study = parseFloat(studyInput.value);
        let social = parseFloat(socialInput.value);
        let ent = parseFloat(entInput.value);

        // --- 24-HOUR LIMIT LOGIC ---
        let total = study + social + ent;
        if (total > 24) {
            const changedInput = event.target;
            const otherTimes = total - parseFloat(changedInput.value);
            changedInput.value = 24 - otherTimes;
            study = parseFloat(studyInput.value);
            social = parseFloat(socialInput.value);
            ent = parseFloat(entInput.value);
            total = 24;
        }
        
// Update Labels
        studyValDisplay.textContent = study.toFixed(1);
        socialValDisplay.textContent = social.toFixed(1);
        entValDisplay.textContent = ent.toFixed(1);

        const distractionTime = social + ent;

//         // Formula: Focus Score / Productivity Ratio
        let prodRatio = total > 0 ? Math.round((study/ total) * 100) : 0;
        let distractionPercentage = total > 0 ? Math.round((distractionTime / total) * 100) : 0;

//         // Update Circular Ring
        const offset = circumference - (prodRatio / 100) * circumference;
        focusRing.style.strokeDashoffset = offset;
        focusScoreDisplay.textContent = prodRatio;

//         // Color Logic & Insights
        if (prodRatio >= 70) {
            focusRing.style.stroke = 'var(--success)';
            focusInsight.textContent = "Excellent focus today!";
        } else if (prodRatio >= 40) {
            focusRing.style.stroke = 'var(--primary)';
            focusInsight.textContent = "Good, but room to improve.";
        } else {
            focusRing.style.stroke = 'var(--danger)';
            focusInsight.textContent = "High distraction detected.";
        }

//         // Update Distraction Bar
        distractionBar.style.width = `${distractionPercentage}%`;
        distractionValueDisplay.textContent = `${distractionPercentage}%`;

        // Update Stats
        totalTimeDisplay.textContent = `${total.toFixed(1)} / 24 hrs`;
        prodRatioDisplay.textContent = `${prodRatio}%`;

       


        // --- CALCULATE TODAY'S METRICS ---
        const focusScore =prodRatio;
        const distractionScore = distractionPercentage;

        // --- UPDATE TODAY'S DATA (INDEX 6) ---
        weeklyMetrics[6].focus = focusScore;
        weeklyMetrics[6].distraction = distractionScore;

    //     // Update Today's UI elements specifically for speed
    //     document.getElementById(`bar-focus-6`).style.height = focusScore + "%";
    //     document.getElementById(`bar-dist-6`).style.height = distractionScore + "%";
    //     document.getElementById(`card-focus-6`).innerText = focusScore;
    //     document.getElementById(`card-dist-6`).innerText = distractionScore + "% Dist.";
        
    //     // (Add your existing Ring and Stats updates here...)
    //     document.getElementById('focus-score-value').innerText = focusScore;
    //     document.getElementById('total-time').innerText = total.toFixed(1) + " / 24h";
        
    //     // Update Average
    //     const avg = Math.round(weeklyMetrics.reduce((a, b) => a + b.focus, 0) / 7);
    //     document.getElementById('avg-focus').innerText = avg;
    // }

    const todayFocusBar = document.getElementById(`bar-focus-6`);
        const todayDistBar = document.getElementById(`bar-dist-6`);
        if(todayFocusBar) {
            todayFocusBar.style.height = focusScore + "%";
            todayFocusBar.setAttribute('data-value', focusScore + "%");
        }
        if(todayDistBar) {
            todayDistBar.style.height = distractionScore + "%";
            todayDistBar.setAttribute('data-value', distractionScore + "%");
        }
        
        const todayFocusCard = document.getElementById(`card-focus-6`);
        const todayDistCard = document.getElementById(`card-dist-6`);
        if(todayFocusCard) todayFocusCard.innerText = focusScore;
        if(todayDistCard) todayDistCard.innerText = distractionScore + "%";

        // Update Average Focus Display
        const avg = Math.round(weeklyMetrics.reduce((acc, cur) => acc + cur.focus, 0) / 7);
        if(avgFocusDisplay) avgFocusDisplay.innerText = avg;
    }
    

    // Initialize
    renderDashboardUI();
    [studyInput, socialInput, entInput].forEach(i => i.addEventListener('input', updateDashboard));
    updateDashboard(); // Run once to sync
});