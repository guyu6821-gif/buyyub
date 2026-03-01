// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker qeydiyyatdan keçdi:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker qeydiyyat xətası:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    // App is installed, hide install button
    if (installBtn) {
        installBtn.style.display = 'none';
    }
} else {
    // App is not installed, show install button
    if (installBtn) {
        installBtn.style.display = 'flex';
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) {
        installBtn.style.display = 'flex';
    }
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
            // Fallback: Show instructions for manual installation
            alert('Tətbiqi quraşdırmaq üçün:\n\n1. Brauzer menyusunu açın\n2. "Ana ekrana əlavə et" seçin\n3. Təsdiq edin');
            return;
        }
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Install prompt outcome: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}

window.addEventListener('appinstalled', () => {
    console.log('PWA quraşdırıldı');
    deferredPrompt = null;
});

// Navigation Functions
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function navigateBack() {
    navigateTo('homePage');
}

// About Toggle
function toggleAbout() {
    const aboutText = document.getElementById('aboutText');
    aboutText.style.display = aboutText.style.display === 'none' ? 'block' : 'none';
}

// Semester Calculator Functions
function generateSeminarInputs() {
    const count = parseInt(document.getElementById('seminarCount').value) || 0;
    const container = document.getElementById('seminarInputs');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'dynamic-input-item';
        div.innerHTML = `
            <label>Seminar ${i}:</label>
            <input type="number" class="seminar-input" min="0" max="10" step="0.1" value="0">
        `;
        container.appendChild(div);
    }
}

function generateColloquiumInputs() {
    const count = parseInt(document.getElementById('colloquiumCount').value) || 0;
    const container = document.getElementById('colloquiumInputs');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'dynamic-input-item';
        div.innerHTML = `
            <label>Kollekvium ${i}:</label>
            <input type="number" class="colloquium-input" min="0" max="10" step="0.1" value="0">
        `;
        container.appendChild(div);
    }
}

function calculateAttendanceScore(hours, absences) {
    const rules = {
        30: { 10: 0, 9: [1, 2], 8: [3], fail: 4 },
        45: { 10: [1], 9: [2, 3], 8: [4, 5], fail: 6 },
        60: { 10: [1], 9: [2, 3, 4], 8: [5, 6, 7], fail: 8 },
        75: { 10: [1], 9: [2, 3, 4, 5], 8: [6, 7, 8, 9], fail: 10 },
        90: { 10: [1, 2], 9: [3, 4, 5, 6], 8: [7, 8, 9, 10, 11], fail: 12 },
        105: { 10: [1, 2], 9: [3, 4, 5, 6, 7], 8: [8, 9, 10, 11, 12, 13], fail: 14 }
    };

    const rule = rules[hours];
    if (!rule) return 0;

    if (absences >= rule.fail) return 'kəsr';
    
    for (let score = 10; score >= 8; score--) {
        const range = rule[score];
        if (Array.isArray(range) && range.includes(absences)) {
            return score;
        } else if (range === 0 && absences === 0) {
            return 10;
        }
    }
    
    return 0;
}

function getGradeText(score) {
    if (score === 0) return '0 BAL';
    if (score >= 50) return 'MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ';
    if (score >= 45) return 'ÇOX YAXŞI';
    if (score >= 41) return 'YAXŞI';
    if (score >= 36) return 'KAFİ';
    if (score >= 26) return 'ZƏİF';
    return 'YAXŞI OLACAQ';
}

function getResultClass(score) {
    if (score === 0) return 'danger';
    if (score >= 45) return 'success';
    if (score >= 36) return 'warning';
    return 'danger';
}

function calculateSemester() {
    // Get seminar scores
    const seminarInputs = document.querySelectorAll('.seminar-input');
    let seminarSum = 0;
    let seminarCount = 0;
    seminarInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        if (value > 0) {
            seminarSum += value;
            seminarCount++;
        }
    });
    const seminarAvg = seminarCount > 0 ? seminarSum / seminarCount : 0;

    // Get colloquium scores
    const colloquiumInputs = document.querySelectorAll('.colloquium-input');
    let colloquiumSum = 0;
    let colloquiumCount = 0;
    colloquiumInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        if (value > 0) {
            colloquiumSum += value;
            colloquiumCount++;
        }
    });
    const colloquiumAvg = colloquiumCount > 0 ? colloquiumSum / colloquiumCount : 0;

    // Get independent work
    const independentWork = parseFloat(document.getElementById('independentWork').value) || 0;

    // Get attendance score
    const hours = parseInt(document.getElementById('attendanceHours').value);
    const absences = parseInt(document.getElementById('absences').value) || 0;
    const attendanceScore = calculateAttendanceScore(hours, absences);

    // Check for fail
    if (attendanceScore === 'kəsr') {
        showResult('semesterResult', 'Davamiyyət üzrə KƏSR', 'danger');
        return;
    }

    // Calculate final score
    const finalScore = (seminarAvg * 0.4 + colloquiumAvg * 0.6) * 3 + attendanceScore + independentWork;
    const roundedScore = Math.round(finalScore * 100) / 100;
    
    const gradeText = getGradeText(roundedScore);
    const resultClass = getResultClass(roundedScore);
    
    showResult('semesterResult', `Semestr Balı: ${roundedScore} / 50<br>${gradeText}`, resultClass);
}

// GPA Calculator Functions
function generateSubjectInputs() {
    const count = parseInt(document.getElementById('subjectCount').value) || 1;
    const container = document.getElementById('subjectInputs');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'subject-item';
        div.innerHTML = `
            <h4>Fənn ${i}</h4>
            <div class="input-group">
                <label>Bal (0-100):</label>
                <input type="number" class="subject-score" min="0" max="100" step="0.1" value="0">
            </div>
            <div class="input-group">
                <label>Kredit:</label>
                <input type="number" class="subject-credit" min="1" value="3">
            </div>
        `;
        container.appendChild(div);
    }
}

function calculateGPA() {
    const scoreInputs = document.querySelectorAll('.subject-score');
    const creditInputs = document.querySelectorAll('.subject-credit');
    
    let totalWeightedScore = 0;
    let totalCredits = 0;
    
    scoreInputs.forEach((scoreInput, index) => {
        const score = parseFloat(scoreInput.value) || 0;
        const credit = parseFloat(creditInputs[index].value) || 0;
        
        totalWeightedScore += score * credit;
        totalCredits += credit;
    });
    
    const gpa = totalCredits > 0 ? totalWeightedScore / totalCredits : 0;
    const roundedGPA = Math.round(gpa * 100) / 100;
    
    const gradeText = getGradeText(roundedGPA);
    const resultClass = getResultClass(roundedGPA);
    
    showResult('gpaResult', `ÜOMG: ${roundedGPA} / 100<br>${gradeText}`, resultClass);
}

// Exam Fee Calculator
function calculateExamFee() {
    const annualPayment = parseFloat(document.getElementById('annualPayment').value) || 0;
    const creditCount = parseFloat(document.getElementById('creditCount').value) || 1;
    
    const examFee = ((annualPayment / 60) * creditCount) / 4 + 1;
    const roundedFee = Math.round(examFee * 100) / 100;
    
    showResult('examFeeResult', `İmtahan Pulu: ${roundedFee} AZN`, 'warning');
}

// Age Calculator
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    if (!birthDateInput) {
        showResult('ageResult', 'Zəhmət olmasa doğum tarixini daxil edin', 'danger');
        return;
    }
    
    const birthDate = new Date(birthDateInput);
    const today = new Date();
    
    // Calculate age
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate total days lived
    const oneDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((today - birthDate) / oneDay);
    
    // Calculate next birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysToNextBirthday = Math.floor((nextBirthday - today) / oneDay);
    
    const resultText = `
        <strong>Yaş:</strong> ${years} il, ${months} ay, ${days} gün<br>
        <strong>Yaşadığınız günlər:</strong> ${totalDays} gün<br>
        <strong>Növbəti ad gününə:</strong> ${daysToNextBirthday} gün
    `;
    
    showResult('ageResult', resultText, 'success');
}

// Show Result Helper
function showResult(elementId, message, className) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = message;
    resultElement.className = `result show ${className}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('BDU Tələbə Köməkçisi yükləndi');
    
    // Hide splash screen after page loads
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        if (splashScreen) {
            splashScreen.classList.add('hidden');
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});
