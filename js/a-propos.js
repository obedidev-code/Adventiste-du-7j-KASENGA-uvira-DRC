// ========================
// 1. MENU MOBILE (pour toutes les pages)
// ========================
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// ========================
// 2. CHATBOT (pour toutes les pages)
// ========================
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('chatbot-send');
const chatInput = document.getElementById('chatbot-input');
const chatMessages = document.getElementById('chatbot-messages');

if (chatbotIcon) {
    chatbotIcon.addEventListener('click', () => {
        if (chatbotWindow) chatbotWindow.style.display = 'flex';
    });
}

if (closeChat) {
    closeChat.addEventListener('click', () => {
        if (chatbotWindow) chatbotWindow.style.display = 'none';
    });
}

function addBotMessage(text) {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('bot-message');
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('user-message');
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(question) {
    const q = question.toLowerCase();
    if (q.includes('culte') || q.includes('horaire')) {
        return "⛪ Les cultes ont lieu le samedi à 9h00 et le mercredi à 17h00 à Kasenga.";
    } else if (q.includes('adresse') || q.includes('où') || q.includes('localisation')) {
        return "📍 Notre église se trouve à Kasenga, près du marché central, avenue de la Révolution.";
    } else if (q.includes('contact') || q.includes('téléphone') || q.includes('appel')) {
        return "📞 Vous pouvez nous contacter au +243 123 456 789 ou par email : eglise@adventiste.org";
    } else if (q.includes('direct') || q.includes('streaming') || q.includes('live')) {
        return "📺 Nos cultes sont diffusés en direct sur notre page 'Regarder en direct'. Visitez direct.html";
    } else if (q.includes('pasteur') || q.includes('pasteur jean')) {
        return "🙏 Notre pasteur est Jean Kabila, un homme de foi et de compassion depuis plus de 20 ans.";
    } else if (q.includes('histoire')) {
        return "📖 Notre église a été fondée en 1985 à Kasenga. Nous sommes une communauté adventiste dynamique.";
    } else if (q.includes('croyance') || q.includes('croyances')) {
        return "📖 Nos croyances sont basées sur la Bible : le sabbat, le retour de Jésus, le baptême par immersion, etc.";
    } else {
        return "Merci pour votre message. 🙏 Un responsable vous répondra bientôt. Souhaitez-vous parler à un humain ?";
    }
}

if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => {
        const userText = chatInput.value.trim();
        if (userText === "") return;
        addUserMessage(userText);
        const reply = getBotReply(userText);
        setTimeout(() => addBotMessage(reply), 500);
        chatInput.value = "";
    });
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && sendBtn) {
            sendBtn.click();
        }
    });
}

// ========================
// 3. ANIMATIONS SPÉCIALES POUR LA PAGE À PROPOS
// ========================

// Appliquer uniquement si on est sur la page "a-propos.html"
if (window.location.pathname.includes('a-propos.html')) {
    
    // Animation au défilement : apparition des éléments
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    // Cibler les sections à animer
    const sectionsToAnimate = document.querySelectorAll('.about-page, .valeurs, .pasteur, .impact, .call-to-action');
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Ajouter la classe 'visible' pour l'animation
    const style = document.createElement('style');
    style.textContent = `
        .about-page.visible, .valeurs.visible, .pasteur.visible, .impact.visible, .call-to-action.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ========================
// 4. GESTION DES ERREURS DE CONSOLE (évite les bugs)
// ========================
console.log("✅ script.js chargé avec succès pour toutes les pages");