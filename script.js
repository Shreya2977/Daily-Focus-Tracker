

document.addEventListener('DOMContentLoaded', () => {
       // --- 1. MULTI-PAGE NAVIGATION LOGIC ---
    const path = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll('.nav-links li').forEach(li => {
        if (li.querySelector('a').getAttribute('href') === path) {
            li.classList.add('active');
        }
    });

    // --- 2. DIARY AUTO-SAVE (For goals.html / My Sadhana) ---
    const diary = document.getElementById('diary-input');
    if (diary) {
        diary.value = localStorage.getItem('userDiary') || "";
        diary.addEventListener('input', () => {
            localStorage.setItem('userDiary', diary.value);
        });
    }

    


    
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
 
    function generateConsultantAdvice(focusScore, distScore) {
        const suggestionText = document.getElementById('focus-suggestion');
        const problemList = document.getElementById('distraction-reasons');
        const actionList = document.getElementById('action-items');
        const weeklyInsight = document.getElementById('weekly-insight');

        if (!suggestionText || !problemList || !actionList) return;

        problemList.innerHTML = "";
        actionList.innerHTML = "";

        let problems = [];
        let remedies = [];

       if (focusScore < 40) {
        suggestionText.innerText = "Your current pattern shows scattered attention. Reducing interruptions and focusing on one priority at a time will improve consistency.";
        problems = ["High digital distraction", "Low deep-work duration", "Frequent task switching"];
        remedies = ["Keep your phone away for 60 minutes", "Practice 5 minutes of box breathing", "Start with one clear priority task"];
        if (weeklyInsight) weeklyInsight.innerText = "Refocus Gently";
    } else if (distScore > 25) {
        suggestionText.innerText = "You are productive overall, but distractions are reducing your momentum. A few small habit changes can improve focus stability.";
        problems = ["Dopamine looping", "Context switching", "Unstructured breaks"];
        remedies = ["Use a website blocker during study", "Replace reels with a short walk", "Keep your phone in another room"];
        if (weeklyInsight) weeklyInsight.innerText = "Control Distractions";
    } else {
        suggestionText.innerText = "Your focus pattern is balanced and steady. Maintain this rhythm while protecting your energy from burnout.";
        problems = ["Risk of overwork", "Comfort-zone routine"];
        remedies = ["Do one 90-minute deep work session", "Write a short gratitude journal entry", "Review your bigger academic goal"];
        if (weeklyInsight) weeklyInsight.innerText = "Excellent Balance";
    }

        problems.forEach(problem => {
            const li = document.createElement('li');
            li.innerText = problem;
            problemList.appendChild(li);
        });

        remedies.forEach(remedy => {
            const li = document.createElement('li');
            li.innerText = remedy;
            actionList.appendChild(li);
        });
    }

    function loadAnalyticsFromStorage() {
        const statsGrid = document.getElementById('stats-grid');
        const barArea = document.getElementById('bar-area');
        const avgFocusDisplay = document.getElementById('avg-focus');

        if (!statsGrid || !barArea) return;

        const savedFocus = parseInt(localStorage.getItem('todayFocus')) || 0;
        const savedDistraction = parseInt(localStorage.getItem('todayDistraction')) || 0;

        weeklyMetrics[6].focus = savedFocus;
        weeklyMetrics[6].distraction = savedDistraction;

        renderDashboardUI();
        generateConsultantAdvice(savedFocus, savedDistraction);

        const avg = Math.round(weeklyMetrics.reduce((acc, cur) => acc + cur.focus, 0) / 7);
        if (avgFocusDisplay) avgFocusDisplay.innerText = `${avg}%`;
    }
    if(document.getElementById('study-range')){
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
    if(currentDateDisplay) currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
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
                   if (studyValDisplay) studyValDisplay.textContent = study.toFixed(1);
            if (socialValDisplay) socialValDisplay.textContent = social.toFixed(1);
            if (entValDisplay) entValDisplay.textContent = ent.toFixed(1);

            const distractionTime = social + ent;
            const prodRatio = total > 0 ? Math.round((study / total) * 100) : 0;
            const distractionPercentage = total > 0 ? Math.round((distractionTime / total) * 100) : 0;

            const offset = circumference - (prodRatio / 100) * circumference;
            if (focusRing) focusRing.style.strokeDashoffset = offset;
            if (focusScoreDisplay) focusScoreDisplay.textContent = prodRatio;

            if (focusInsight && focusRing) {
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
            }

            if (distractionBar) distractionBar.style.width = `${distractionPercentage}%`;
            if (distractionValueDisplay) distractionValueDisplay.textContent = `${distractionPercentage}%`;

            if (totalTimeDisplay) totalTimeDisplay.textContent = `${total.toFixed(1)} / 24 hrs`;
            if (prodRatioDisplay) prodRatioDisplay.textContent = `${prodRatio}%`;

            const focusScore = prodRatio;
            const distractionScore = distractionPercentage;

            weeklyMetrics[6].focus = focusScore;
            weeklyMetrics[6].distraction = distractionScore;
            generateConsultantAdvice(focusScore, distractionScore);

            localStorage.setItem('todayFocus', focusScore);
            localStorage.setItem('todayDistraction', distractionScore);

            const todayFocusBar = document.getElementById('bar-focus-6');
            const todayDistBar = document.getElementById('bar-dist-6');
            if (todayFocusBar) {
                todayFocusBar.style.height = focusScore + "%";
                todayFocusBar.setAttribute('data-value', focusScore + "%");
            }
            if (todayDistBar) {
                todayDistBar.style.height = distractionScore + "%";
                todayDistBar.setAttribute('data-value', distractionScore + "%");
            }

            const todayFocusCard = document.getElementById('card-focus-6');
            const todayDistCard = document.getElementById('card-dist-6');
            if (todayFocusCard) todayFocusCard.innerText = focusScore + "%";
            if (todayDistCard) todayDistCard.innerText = distractionScore + "% Dist.";

            const avg = Math.round(weeklyMetrics.reduce((acc, cur) => acc + cur.focus, 0) / 7);
            if (avgFocusDisplay) avgFocusDisplay.innerText = `${avg}%`;
        }
        

    // Initialize
    renderDashboardUI();
    [studyInput, socialInput, entInput].forEach(i => i.addEventListener('input', updateDashboard));
    updateDashboard(); // Run once to sync
    }
    // --- ANALYTICS PAGE LOADER ---
    const isAnalyticsPage =
        document.getElementById('stats-grid') &&
        document.getElementById('bar-area');

    const isDashboardPage =
        document.getElementById('study-range');

    if (isAnalyticsPage && !isDashboardPage) {
        loadAnalyticsFromStorage();
    }

  const zenDisplay = document.getElementById('zen-display');
if (zenDisplay) {
    const zenStartBtn = document.getElementById('zen-start');
    const zenResetBtn = document.getElementById('zen-reset');
    const zenMinutesInput = document.getElementById('zen-minutes');

    let defaultMinutes = zenMinutesInput ? parseInt(zenMinutesInput.value) || 25 : 25;
    let timeLeft = defaultMinutes * 60;
    let timerId = null;

    function updateZenDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        zenDisplay.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    if (zenMinutesInput) {
        zenMinutesInput.addEventListener('input', () => {
            if (!timerId) {
                defaultMinutes = parseInt(zenMinutesInput.value) || 25;
                if (defaultMinutes < 1) defaultMinutes = 1;
                if (defaultMinutes > 180) defaultMinutes = 180;
                timeLeft = defaultMinutes * 60;
                updateZenDisplay();
            }
        });
    }

    zenStartBtn.addEventListener('click', function () {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
            this.innerText = "Resume Session";
            if (zenMinutesInput) zenMinutesInput.disabled = false;
        } else {
            if (timeLeft <= 0) {
                defaultMinutes = zenMinutesInput ? parseInt(zenMinutesInput.value) || 25 : 25;
                timeLeft = defaultMinutes * 60;
            }

            this.innerText = "Pause Session";
            if (zenMinutesInput) zenMinutesInput.disabled = true;

            timerId = setInterval(() => {
                timeLeft--;
                updateZenDisplay();

                if (timeLeft <= 0) {
                    clearInterval(timerId);
                    timerId = null;
                    timeLeft = 0;
                    updateZenDisplay();
                    zenStartBtn.innerText = "Start Session";
                    if (zenMinutesInput) zenMinutesInput.disabled = false;
                }
            }, 1000);
        }
    });

    zenResetBtn.addEventListener('click', () => {
        clearInterval(timerId);
        timerId = null;
        defaultMinutes = zenMinutesInput ? parseInt(zenMinutesInput.value) || 25 : 25;
        timeLeft = defaultMinutes * 60;
        updateZenDisplay();
        zenStartBtn.innerText = "Start Session";
        if (zenMinutesInput) zenMinutesInput.disabled = false;
    });

    updateZenDisplay();
}

    // Final Icons Replace
    feather.replace();
});
