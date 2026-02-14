// Game State
let gameState = {
    level: 1,
    xp: 0,
    xpNeeded: 100,
    streak: 0,
    currentQuestionIndex: 0,
    answeredCorrectly: false
};

// Bible Questions Database - Based on jw.org teachings
const questions = [
    {
        question: "Qual é o nome de Deus revelado na Bíblia?",
        answers: ["Senhor", "Jeová", "Deus Todo-Poderoso", "Pai Celestial"],
        correct: 1
    },
    {
        question: "Quem foi o primeiro homem criado por Jeová?",
        answers: ["Adão", "Noé", "Abraão", "Moisés"],
        correct: 0
    },
    {
        question: "Em quantos dias Jeová criou a Terra e tudo o que nela há?",
        answers: ["5 dias", "6 dias", "7 dias", "8 dias"],
        correct: 1
    },
    {
        question: "Qual é o tema principal da Bíblia?",
        answers: ["O amor", "O Reino de Deus", "A salvação", "A criação"],
        correct: 1
    },
    {
        question: "Quem construiu a arca antes do Dilúvio?",
        answers: ["Abraão", "Moisés", "Noé", "Davi"],
        correct: 2
    },
    {
        question: "Quantos discípulos fiéis Jesus escolheu?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Onde Jesus nasceu?",
        answers: ["Jerusalém", "Nazaré", "Belém", "Cafarnaum"],
        correct: 2
    },
    {
        question: "Qual é a esperança para a Terra segundo a Bíblia?",
        answers: ["Será destruída", "Se tornará um paraíso", "Será abandonada", "Ficará igual"],
        correct: 1
    },
    {
        question: "Quantos livros tem a Bíblia?",
        answers: ["66", "73", "77", "80"],
        correct: 0
    },
    {
        question: "Quem separou as águas do Mar Vermelho?",
        answers: ["Josué", "Abraão", "Moisés", "Elias"],
        correct: 2
    },
    {
        question: "Qual o primeiro livro da Bíblia?",
        answers: ["Êxodo", "Gênesis", "Levítico", "Números"],
        correct: 1
    },
    {
        question: "Qual é o principal mandamento de Jesus?",
        answers: ["Não matar", "Amar a Jeová e ao próximo", "Guardar o sábado", "Jejuar"],
        correct: 1
    },
    {
        question: "Segundo a Bíblia, o que acontece quando morremos?",
        answers: ["Vamos para o céu", "Deixamos de existir", "Viramos anjos", "Reencarnamos"],
        correct: 1
    },
    {
        question: "Quem foi jogado na cova dos leões por orar a Jeová?",
        answers: ["Daniel", "José", "Jonas", "Davi"],
        correct: 0
    },
    {
        question: "O que Jesus ensinou sobre o Reino de Deus?",
        answers: ["Está apenas nos corações", "É um governo celestial real", "É uma organização terrestre", "É apenas simbólico"],
        correct: 1
    }
];

// Poetry Database - Based on jw.org content and teachings
const poetries = [
    {
        title: "Salmo 83:18 - O Nome de Deus",
        author: "Tradução do Novo Mundo",
        content: `"Para que saibam que tu, cujo nome é Jeová,
Somente tu és o Altíssimo sobre toda a terra."

O nome de Deus, Jeová, aparece mais de 7.000 vezes
nas Escrituras Hebraicas originais.
Conhecer e usar o nome de Deus nos aproxima dele.
Jeová deseja que o conheçamos pelo nome.`,
        preview: "Para que saibam que tu, cujo nome é Jeová..."
    },
    {
        title: "O Reino de Deus",
        author: "Baseado em Mateus 6:9, 10",
        content: `"Santificado seja o teu nome.
Venha o teu Reino.
Seja feita a tua vontade, como no céu, assim também na terra."

O Reino de Deus é um governo celestial real.
Jesus Cristo é o Rei desse Reino.
Em breve, o Reino trará paz e justiça para a Terra.
Transformará nosso planeta num paraíso.`,
        preview: "Venha o teu Reino. Seja feita a tua vontade..."
    },
    {
        title: "O Amor Verdadeiro",
        author: "1 Coríntios 13:4-8 - TNM",
        content: `O amor é paciente e bondoso.
O amor não é ciumento, não se gaba, não se incha de orgulho,
não se porta indecentemente, não busca os seus próprios interesses,
não se irrita, não fica ressentido.
Não se alegra com a injustiça, mas se alegra com a verdade.
Suporta todas as coisas, acredita em todas as coisas,
espera todas as coisas, persevera em todas as coisas.
O amor nunca acaba.`,
        preview: "O amor é paciente e bondoso..."
    },
    {
        title: "A Esperança do Paraíso",
        author: "Baseado em Salmo 37:10, 11, 29",
        content: `Apenas mais um pouco, e os maus não mais existirão;
Você procurará o lugar deles, e eles não estarão lá.
Mas os mansos possuirão a terra
E terão grande alegria na abundância de paz.

Os justos possuirão a terra
E viverão nela para sempre.
Esta é a promessa de Jeová para os que o amam.`,
        preview: "Os mansos possuirão a terra e viverão nela..."
    },
    {
        title: "Jeová é Nosso Refúgio",
        author: "Salmo 91:1, 2 - TNM",
        content: `Quem habita no esconderijo do Altíssimo
Ficará à sombra do Todo-Poderoso.
Direi a respeito de Jeová:
"Ele é meu refúgio e minha fortaleza,
Meu Deus, em quem confio."

Jeová protege os que buscam refúgio nele.
Ele é nosso protetor e ajudador.`,
        preview: "Jeová é meu refúgio e minha fortaleza..."
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
