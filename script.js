// Game State
let gameState = {
    level: 1,
    xp: 0,
    xpNeeded: 100,
    streak: 0,
    currentQuestionIndex: 0,
    answeredCorrectly: false
};

// Bible Questions Database
const questions = [
    {
        question: "Quem foi o primeiro homem criado por Deus?",
        answers: ["Adão", "Noé", "Abraão", "Moisés"],
        correct: 0
    },
    {
        question: "Quantos dias Deus levou para criar o mundo?",
        answers: ["5 dias", "6 dias", "7 dias", "8 dias"],
        correct: 1
    },
    {
        question: "Quem construiu a arca?",
        answers: ["Abraão", "Moisés", "Noé", "Davi"],
        correct: 2
    },
    {
        question: "Qual o nome da primeira mulher criada por Deus?",
        answers: ["Maria", "Eva", "Sara", "Raquel"],
        correct: 1
    },
    {
        question: "Quantos apóstolos Jesus tinha?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Quem traiu Jesus?",
        answers: ["Pedro", "João", "Judas", "Tomé"],
        correct: 2
    },
    {
        question: "Onde Jesus nasceu?",
        answers: ["Jerusalém", "Nazaré", "Belém", "Cafarnaum"],
        correct: 2
    },
    {
        question: "Quem derrotou o gigante Golias?",
        answers: ["Saul", "Davi", "Sansão", "Josué"],
        correct: 1
    },
    {
        question: "Quantos livros tem a Bíblia?",
        answers: ["66", "73", "77", "80"],
        correct: 0
    },
    {
        question: "Quem abriu o Mar Vermelho?",
        answers: ["Josué", "Abraão", "Moisés", "Elias"],
        correct: 2
    },
    {
        question: "Qual o primeiro livro da Bíblia?",
        answers: ["Êxodo", "Gênesis", "Levítico", "Números"],
        correct: 1
    },
    {
        question: "Quem foi jogado na cova dos leões?",
        answers: ["Daniel", "José", "Jonas", "Davi"],
        correct: 0
    },
    {
        question: "Quantos filhos Jacó teve?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Quem foi engolido por um grande peixe?",
        answers: ["Jonas", "Pedro", "João", "Judas"],
        correct: 0
    },
    {
        question: "Qual foi o primeiro milagre de Jesus?",
        answers: ["Multiplicação dos pães", "Cura de um cego", "Transformar água em vinho", "Ressurreição de Lázaro"],
        correct: 2
    }
];

// Poetry Database
const poetries = [
    {
        title: "Salmo 23",
        author: "Rei Davi",
        content: `O Senhor é o meu pastor; nada me faltará.
Deitar-me faz em verdes pastos,
Guia-me mansamente a águas tranquilas.
Refrigera a minha alma;
Guia-me pelas veredas da justiça,
Por amor do seu nome.
Ainda que eu andasse pelo vale da sombra da morte,
Não temeria mal algum,
Porque tu estás comigo;
A tua vara e o teu cajado me consolam.`,
        preview: "O Senhor é o meu pastor; nada me faltará..."
    },
    {
        title: "O Amor",
        author: "Apóstolo Paulo - 1 Coríntios 13",
        content: `O amor é paciente, o amor é bondoso.
Não inveja, não se vangloria, não se orgulha.
Não maltrata, não procura seus interesses,
Não se ira facilmente, não guarda rancor.
O amor não se alegra com a injustiça,
Mas se alegra com a verdade.
Tudo sofre, tudo crê, tudo espera, tudo suporta.
O amor nunca perece.`,
        preview: "O amor é paciente, o amor é bondoso..."
    },
    {
        title: "Bem-Aventuranças",
        author: "Jesus Cristo - Mateus 5",
        content: `Bem-aventurados os pobres de espírito,
Porque deles é o reino dos céus.
Bem-aventurados os que choram,
Porque serão consolados.
Bem-aventurados os mansos,
Porque herdarão a terra.
Bem-aventurados os que têm fome e sede de justiça,
Porque serão fartos.
Bem-aventurados os misericordiosos,
Porque alcançarão misericórdia.`,
        preview: "Bem-aventurados os pobres de espírito..."
    },
    {
        title: "Tudo Tem o Seu Tempo",
        author: "Eclesiastes 3",
        content: `Tudo tem o seu tempo determinado,
E há tempo para todo o propósito debaixo do céu.
Há tempo de nascer, e tempo de morrer;
Tempo de plantar, e tempo de arrancar o que se plantou;
Tempo de chorar, e tempo de rir;
Tempo de gemer, e tempo de dançar;
Tempo de espalhar pedras, e tempo de ajuntar pedras;
Tempo de abraçar, e tempo de afastar-se de abraçar;
Tempo de buscar, e tempo de perder;
Tempo de guardar, e tempo de lançar fora.`,
        preview: "Tudo tem o seu tempo determinado..."
    },
    {
        title: "O Senhor é Minha Luz",
        author: "Salmo 27",
        content: `O Senhor é a minha luz e a minha salvação;
De quem terei temor?
O Senhor é a força da minha vida;
De quem me recearei?
Quando os malvados se aproximam de mim,
Para comerem a minha carne,
Meus adversários e meus inimigos tropeçam e caem.
Ainda que um exército se acampe contra mim,
O meu coração não temerá.`,
        preview: "O Senhor é a minha luz e a minha salvação..."
    }
];

// Navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    if (sectionId === 'catmeow') {
        loadQuestion();
    } else if (sectionId === 'catverso') {
        loadPoetryList();
    }
}

// CatMeow Game Functions
function loadQuestion() {
    if (gameState.currentQuestionIndex >= questions.length) {
        gameState.currentQuestionIndex = 0;
    }
    
    const question = questions[gameState.currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
    
    updateStats();
    hideResultMessage();
}

function selectAnswer(selectedIndex) {
    const question = questions[gameState.currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    answerButtons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        // Correct answer
        answerButtons[selectedIndex].classList.add('correct');
        gameState.streak++;
        
        // Calculate XP with streak bonus
        let xpGained = 10;
        let bonusXP = 0;
        if (gameState.streak >= 3) {
            bonusXP = gameState.streak * 2;
            xpGained += bonusXP;
        }
        
        gameState.xp += xpGained;
        gameState.answeredCorrectly = true;
        
        // Check for level up
        while (gameState.xp >= gameState.xpNeeded) {
            gameState.xp -= gameState.xpNeeded;
            gameState.level++;
            gameState.xpNeeded = Math.floor(gameState.xpNeeded * 1.5);
            showResultMessage(`🎉 Parabéns! Você subiu para o nível ${gameState.level}!`, 'success');
        }
        
        if (!document.getElementById('result-message').classList.contains('success')) {
            let message = `✓ Correto! +${xpGained} XP`;
            if (bonusXP > 0) {
                message += ` (Bônus de sequência: +${bonusXP} XP!)`;
            }
            showResultMessage(message, 'success');
        }
    } else {
        // Wrong answer
        answerButtons[selectedIndex].classList.add('incorrect');
        answerButtons[question.correct].classList.add('correct');
        gameState.streak = 0;
        gameState.answeredCorrectly = false;
        showResultMessage('✗ Incorreto! Tente novamente na próxima.', 'error');
    }
    
    updateStats();
}

function nextQuestion() {
    gameState.currentQuestionIndex++;
    if (gameState.currentQuestionIndex >= questions.length) {
        gameState.currentQuestionIndex = 0;
    }
    loadQuestion();
}

function resetGame() {
    if (confirm('Tem certeza que deseja reiniciar o jogo? Todo o progresso será perdido.')) {
        gameState = {
            level: 1,
            xp: 0,
            xpNeeded: 100,
            streak: 0,
            currentQuestionIndex: 0,
            answeredCorrectly: false
        };
        loadQuestion();
    }
}

function updateStats() {
    document.getElementById('level').textContent = gameState.level;
    document.getElementById('xp').textContent = gameState.xp;
    document.getElementById('xp-needed').textContent = gameState.xpNeeded;
    document.getElementById('streak').textContent = gameState.streak;
    
    const xpPercentage = (gameState.xp / gameState.xpNeeded) * 100;
    document.getElementById('xp-bar').style.width = xpPercentage + '%';
}

function showResultMessage(message, type) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
    resultMessage.className = 'result-message ' + type;
}

function hideResultMessage() {
    const resultMessage = document.getElementById('result-message');
    resultMessage.className = 'result-message hidden';
}

// CatVerso Poetry Functions
let currentSpeech = null;

function loadPoetryList() {
    const poetryList = document.getElementById('poetry-list');
    poetryList.innerHTML = '';
    
    poetries.forEach((poetry, index) => {
        const poetryItem = document.createElement('div');
        poetryItem.className = 'poetry-item';
        poetryItem.onclick = () => openPoetry(index);
        
        poetryItem.innerHTML = `
            <h3>${poetry.title}</h3>
            <div class="author">Por: ${poetry.author}</div>
            <div class="preview">${poetry.preview}</div>
        `;
        
        poetryList.appendChild(poetryItem);
    });
    
    document.getElementById('poetry-reader').classList.add('hidden');
}

function openPoetry(index) {
    const poetry = poetries[index];
    
    document.getElementById('poetry-title').textContent = poetry.title;
    document.getElementById('poetry-author').textContent = `Por: ${poetry.author}`;
    document.getElementById('poetry-content').textContent = poetry.content;
    
    document.getElementById('poetry-list').style.display = 'none';
    document.getElementById('poetry-reader').classList.remove('hidden');
    
    // Reset audio controls
    document.getElementById('read-btn').classList.remove('hidden');
    document.getElementById('stop-btn').classList.add('hidden');
    
    // Stop any ongoing speech
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        currentSpeech = null;
    }
}

function closePoetry() {
    document.getElementById('poetry-list').style.display = 'grid';
    document.getElementById('poetry-reader').classList.add('hidden');
    
    // Stop any ongoing speech
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        currentSpeech = null;
    }
}

function readPoetry() {
    const content = document.getElementById('poetry-content').textContent;
    const title = document.getElementById('poetry-title').textContent;
    
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Create new speech
        currentSpeech = new SpeechSynthesisUtterance();
        currentSpeech.text = title + '. ' + content;
        currentSpeech.lang = 'pt-BR';
        currentSpeech.rate = 0.9;
        currentSpeech.pitch = 1;
        
        currentSpeech.onstart = () => {
            document.getElementById('read-btn').classList.add('hidden');
            document.getElementById('stop-btn').classList.remove('hidden');
        };
        
        currentSpeech.onend = () => {
            document.getElementById('read-btn').classList.remove('hidden');
            document.getElementById('stop-btn').classList.add('hidden');
            currentSpeech = null;
        };
        
        currentSpeech.onerror = () => {
            alert('Erro ao tentar ler o texto. Verifique se seu navegador suporta esta funcionalidade.');
            document.getElementById('read-btn').classList.remove('hidden');
            document.getElementById('stop-btn').classList.add('hidden');
            currentSpeech = null;
        };
        
        window.speechSynthesis.speak(currentSpeech);
    } else {
        alert('Seu navegador não suporta a leitura de texto em voz alta.');
    }
}

function stopReading() {
    if (currentSpeech) {
        window.speechSynthesis.cancel();
        currentSpeech = null;
        document.getElementById('read-btn').classList.remove('hidden');
        document.getElementById('stop-btn').classList.add('hidden');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
