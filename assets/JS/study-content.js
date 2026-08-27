const menuIcon = document.getElementById("menu_icon");
const iconWrapper = document.getElementById("background");
const menuText = document.getElementById("menuText");
const menu = document.getElementById("menu");
const heroContent = document.querySelector(".hero"); // Hero section element

// OPEN MENU
menuIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.add("open"); // Left-to-Right smooth-ah varum
    heroContent.classList.add("push-content"); // Content right-la move aagum

    iconWrapper.classList.add("hide");
    menuText.classList.add("hide");
});

// CLOSE MENU (When clicking menu items)
menu.addEventListener("click", function (e) {
    e.stopPropagation();
    closeMenu();
});

// CLOSE MENU (Outside click)
document.addEventListener("click", function () {
    closeMenu();
});

// Common function to close
function closeMenu() {
    menu.classList.remove("open"); // Right-to-Left smooth-ah pogum
    heroContent.classList.remove("push-content"); // Content normal-ah maarum

    iconWrapper.classList.remove("hide");
    menuText.classList.remove("hide");
}

document.addEventListener("DOMContentLoaded", function () {
    const topicList = document.getElementById("topic-list");
    const container = document.getElementById("questions-container");
    const title = document.getElementById("current-topic-title");

    // URL parameters fetch
    const params = new URLSearchParams(window.location.search);
    const dept = params.get("dept");
    const topic = params.get("topic");

    // Header Display Update
    if (document.getElementById("display-dept")) document.getElementById("display-dept").innerText = `Dept: ${dept}`;
    if (document.getElementById("display-topic")) document.getElementById("display-topic").innerText = `Subject: ${topic}`;

    // Data Load Check
    if (typeof questionbank === 'undefined' || !questionbank[dept] || !questionbank[dept][topic]) {
        topicList.innerHTML = `<p style='color:red; padding:10px;'>Data Path Error! <br>Searching for: ${dept} > ${topic}</p>`;
        return;
    }

    const currentTopicData = questionbank[dept][topic];
    const levels = ['Basic', 'Intermediate', 'Advanced'];
    topicList.innerHTML = "";

    levels.forEach(level => {
        if (currentTopicData[level]) {
            // CATEGORY HEADERS WITH DYNAMIC COLOR CLASSES
            const header = document.createElement("div");
            header.className = `level-header ${level.toLowerCase()}`;
            header.textContent = level.toUpperCase();
            topicList.appendChild(header);

            Object.keys(currentTopicData[level]).forEach((subName, subIndex) => {
                const uniqueCheckId = `check-${level.toLowerCase()}-${subIndex}`;

                // TOPIC WRAPPER WITH INTERACTIVE CHECKBOX
                const wrapper = document.createElement("div");
                wrapper.className = "topic-link-wrapper";
                wrapper.innerHTML = `
                    <input type="checkbox" id="${uniqueCheckId}" class="topic-checkbox" onclick="event.stopPropagation();" />
                    <span class="sidebar-topic-btn">${subName}</span>
                `;

                wrapper.addEventListener("click", () => {
                    displayQuestions(subName, currentTopicData[level][subName]);
                    document.querySelectorAll('.topic-link-wrapper').forEach(el => el.classList.remove('active'));
                    wrapper.classList.add('active');
                });

                topicList.appendChild(wrapper);
            });
        }
    });

    function displayQuestions(subName, questionsArray) {
        document.getElementById('empty-view').style.display = 'none';
        document.getElementById('topic-real-content').style.display = 'block';
        container.innerHTML = "";
        title.innerText = subName;

        questionsArray.forEach((q, index) => {
            const div = document.createElement('div');
            div.className = 'question-item';
            div.innerHTML = `
                <span class="q-number">${index + 1}.</span>
                <p class="q-text">${q}</p>
            `;
            container.appendChild(div);
        });
    }
});

let totalSeconds = 0;
let timerInterval = null;

const display = document.querySelector(".timer-display");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const resetBtn = document.querySelector(".btn-reset");

// Input elements
const hrInput = document.getElementById("hr-input");
const minInput = document.getElementById("min-input");
const secInput = document.getElementById("sec-input");

function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalSeconds);
}

// START & RESUME
startBtn.addEventListener("click", () => {
    if (timerInterval !== null) return;

    if (totalSeconds <= 0) {
        const h = parseInt(hrInput.value) || 0;
        const m = parseInt(minInput.value) || 0;
        const s = parseInt(secInput.value) || 0;
        totalSeconds = (h * 3600) + (m * 60) + s;
    }

    if (totalSeconds <= 0) return alert("Please set a valid time before starting the timer.");
    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Study session finished! Time for a break.");
            return;
        } totalSeconds--;
        updateDisplay();
    }, 1000);
});

// PAUSE
pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// RESET
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    updateDisplay();
    hrInput.value = "";
    minInput.value = "";
    secInput.value = "";
});

/* ==========================================
   SESSION INITIALIZATION
   ========================================== */
localStorage.removeItem('all_noted_topics');
let currentHistoryIndex = -1;

function getCurrentTopic() {
    let titleElement = document.getElementById('current-topic-title');
    let title = titleElement ? titleElement.innerText : "";
    let finalTitle = title.replace("Important Topics:", "").trim();
    return (finalTitle === "Select a topic" || finalTitle === "") ? "Untitled_Topic" : finalTitle;
}

/* ==========================================
   AUTO-SAVE LOGIC
   ========================================== */
function autoSave() {
    const topic = getCurrentTopic();
    const content = document.getElementById('topic-notes').value.trim();

    if (content !== "") {
        let topics = JSON.parse(localStorage.getItem('all_noted_topics') || "[]");
        localStorage.setItem(`notes_${topic}`, content);

        if (!topics.includes(topic)) {
            topics.push(topic);
            localStorage.setItem('all_noted_topics', JSON.stringify(topics));
        }
    }
}

document.getElementById('topic-notes').addEventListener('input', autoSave);

/* ==========================================
   NAVIGATION LOGIC
   ========================================== */
function goBack() {
    autoSave();
    const topics = JSON.parse(localStorage.getItem('all_noted_topics') || "[]");

    if (topics.length <= 1) {
        return alert("No previous history in this session!");
    }

    if (currentHistoryIndex === -1) {
        currentHistoryIndex = topics.length - 2;
    } else if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
    } else {
        return alert("This is the first topic in your session history.");
    }

    updateNavigationUI(topics);
}

// Next Logic
function goNext() {
    autoSave();
    const topics = JSON.parse(localStorage.getItem('all_noted_topics') || "[]");

    if (currentHistoryIndex !== -1 && currentHistoryIndex < topics.length - 1) {
        currentHistoryIndex++;
        updateNavigationUI(topics);
    } else {
        alert("No next page found. Click 'New Topic' to start a fresh page.");
    }
}

function updateNavigationUI(topics) {
    const targetTopic = topics[currentHistoryIndex];
    const titleElement = document.getElementById('current-topic-title');
    const textarea = document.getElementById('topic-notes');

    if (titleElement) titleElement.innerText = targetTopic;
    if (textarea) {
        const savedNotes = localStorage.getItem(`notes_${targetTopic}`);
        textarea.value = savedNotes || "";
    }
}

/* ==========================================
   BUTTON ACTIONS
   ========================================== */
function newTopic() {
    autoSave();
    currentHistoryIndex = -1;
    document.getElementById('topic-notes').value = "";
    document.getElementById('current-topic-title').innerText = "Select a topic";
}

function saveCurrentTopic() {
    autoSave();
    const topic = getCurrentTopic();
    const content = document.getElementById('topic-notes').value;

    if (!content.trim()) return alert("Notes are empty!");

    const blob = new Blob([`Topic: ${topic}\n\n${content}`], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${topic}_Notes.txt`;
    link.click();

    alert("Topic saved successfully!");
}

function downloadFullNotes() {
    let topics = JSON.parse(localStorage.getItem('all_noted_topics') || "[]");
    let finalContent = "=== FULL STUDY NOTES ===\n\n";
    let hasContent = false;

    topics.forEach(t => {
        const content = localStorage.getItem(`notes_${t}`);
        if (content && content.trim()) {
            finalContent += `📌 TOPIC: ${t.toUpperCase()}\n${content}\n\n\n`;
            hasContent = true;
        }
    });

    if (!hasContent) return alert("No notes to download.");

    const blob = new Blob([finalContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Full_Study_Notes.txt";
    link.click();
}

function clearCurrentNotes() {
    const topic = getCurrentTopic();

    if (topic === "Select a topic" || topic === "Untitled_Topic") {
        const textarea = document.getElementById('topic-notes');
        if (textarea.value.trim() !== "") {
            if (confirm("Clear the current unsaved notes?")) {
                textarea.value = "";
            }
        } else {
            alert("Nothing to clear!");
        }
        return;
    }

    if (confirm(`Are you sure you want to clear the notes for "${topic}"?`)) {
        document.getElementById('topic-notes').value = "";
        localStorage.removeItem(`notes_${topic}`);

        let topics = JSON.parse(localStorage.getItem('all_noted_topics') || "[]");
        let updatedTopics = topics.filter(t => t !== topic);
        localStorage.setItem('all_noted_topics', JSON.stringify(updatedTopics));

        if (currentHistoryIndex >= updatedTopics.length) {
            currentHistoryIndex = updatedTopics.length - 1;
        }

        document.getElementById('current-topic-title').innerText = "Select a topic";
        alert(`Notes for "${topic}" have been cleared.`);
    }
}

// --- STUDY PAGE PRACTICE BUTTON REDIRECTION ---
const practiceBtn = document.getElementById('btn-practice-go');

if (practiceBtn) {
    practiceBtn.addEventListener('click', function () {
        const urlParams = new URLSearchParams(window.location.search);
        const currentDept = urlParams.get('dept') || 'cs';
        const currentTopic = urlParams.get('topic') || 'Web';

        window.location.href = `Questions.html?dept=${encodeURIComponent(currentDept)}&topic=${encodeURIComponent(currentTopic)}`;
    });
}

// ============================================================
// 📌 RUNTIME STORAGE DATA SYNC HANDLER ON DOM LOAD
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    const isFinished = localStorage.getItem('practice_is_finished');

    if (isFinished === "true") {
        const savedCorrect = parseInt(localStorage.getItem('practice_correct_count')) || 0;
        const savedTotal = parseInt(localStorage.getItem('practice_total_questions')) || 9;
        const savedAttended = parseInt(localStorage.getItem('practice_attended_count')) || 0;

        // 1. Text Update: Correct answers count (e.g., 6 / 9)
        const progressInfoText = document.querySelector('.progress-info span:last-child');
        if (progressInfoText) {
            progressInfoText.innerText = `${savedCorrect} / ${savedTotal}`;
        }

        // 2. Progress Bar Fill Width: Matching total questions ATTENDED
        const progressFillBar = document.querySelector('.progress-fill');
        if (progressFillBar) {
            const fillWidthPercentage = (savedAttended / savedTotal) * 100;
            progressFillBar.style.width = `${fillWidthPercentage}%`;
            
            // Full complete clean check glow styling
            if (savedAttended === savedTotal) {
                progressFillBar.style.background = 'linear-gradient(90deg, #4ade80, #22c55e)';
                progressFillBar.style.boxShadow = '0 0 12px rgba(74, 222, 128, 0.5)';
            }
        }

        // 3. Checkbox Control: Ticks ONLY if all 9 questions are answered (100% full bar)
        const topicCheckBoxes = document.querySelectorAll('input.topic-checkbox');
        if (savedAttended === savedTotal) {
            topicCheckBoxes.forEach(box => {
                box.checked = true;
            });
        } else {
            topicCheckBoxes.forEach(box => {
                box.checked = false; 
            });
        }

        // Wipe temporary storage items to prevent data leaks
        localStorage.removeItem('practice_is_finished');
    }
});