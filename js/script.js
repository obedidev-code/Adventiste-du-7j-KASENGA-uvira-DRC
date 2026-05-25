// ========================================
// SCRIPT MODERNE - ÉGLISE ADVENTISTE KASENGA
// ========================================

// ========== 1. MENU MOBILE ==========
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Fermer le menu quand on clique sur un lien (mobile)
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
});

// ========== 2. NAVBAR TRANSPARENTE AU SCROLL ==========
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 76, 58, 0.98)';
            header.style.padding = '12px 40px';
        } else {
            header.style.background = 'rgba(15, 76, 58, 0.95)';
            header.style.padding = '15px 40px';
        }
    }
});

// ========== 3. CHATBOT ==========
// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('chatbot-send');
    const chatInput = document.getElementById('chatbot-input');
    const chatMessages = document.getElementById('chatbot-messages');

    // Ouvrir le chatbot
    if (chatbotIcon && chatbotWindow) {
        chatbotIcon.addEventListener('click', function() {
            chatbotWindow.style.display = 'flex';
        });
    }

    // Fermer le chatbot
    if (closeChat && chatbotWindow) {
        closeChat.addEventListener('click', function() {
            chatbotWindow.style.display = 'none';
        });
    }

    // Fonction pour ajouter un message du bot
    function addBotMessage(text) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('bot-message');
        msgDiv.innerHTML = '<i class="bi bi-chat-heart"></i><span>' + text + '</span>';
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Fonction pour ajouter un message de l'utilisateur
    function addUserMessage(text) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('user-message');
        msgDiv.innerHTML = '<span>' + text + '</span>';
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Fonction pour obtenir la réponse du bot
    function getBotReply(question) {
        const q = question.toLowerCase();
        
        // Réponses intelligentes
        if (q.includes('culte') || q.includes('horaire') || q.includes('heure')) {
            return "⛪ Les cultes ont lieu le samedi à 9h00 et le mercredi à 17h00. Venez nombreux !";
        }
        else if (q.includes('adresse') || q.includes('où') || q.includes('localisation') || q.includes('trouver')) {
            return "📍 Nous sommes situés à Kasenga, près du marché central, avenue de la Révolution.";
        }
        else if (q.includes('contact') || q.includes('téléphone') || q.includes('appel') || q.includes('numero')) {
            return "📞 Vous pouvez nous appeler au +243 827 210 152 ou envoyer un email à eglise@adventiste.org";
        }
        else if (q.includes('pasteur')) {
            return "🙏 Notre pasteur est Jean Kabila, un homme de foi et de compassion depuis plus de 20 ans.";
        }
        else if (q.includes('histoire') || q.includes('fondation')) {
            return "📖 Notre église a été fondée en 1985. Depuis, nous servons Dieu et notre communauté avec dévouement.";
        }
        else if (q.includes('croyance') || q.includes('croyances')) {
            return "📖 Nos croyances sont basées sur la Bible : le sabbat, le retour de Jésus, le baptême par immersion, la santé, etc.";
        }
        else if (q.includes('direct') || q.includes('live') || q.includes('streaming') || q.includes('diffusion')) {
            return "📺 Oui ! Nos cultes sont diffusés en direct sur notre site dans la section 'Regarder en direct'.";
        }
        else if (q.includes('evenement') || q.includes('activité')) {
            return "🎉 Consultez notre section 'Événements' pour voir toutes nos activités à venir.";
        }
        else if (q.includes('don') || q.includes('offrande')) {
            return "❤️ Merci pour votre générosité ! Contactez-nous pour faire un don et soutenir notre mission.";
        }
        else if (q.includes('dieu') || q.includes('bénir')) {
            return "🙌 Dieu vous bénisse abondamment ! Nous prions pour vous et votre famille.";
        }
        else if (q.includes('bonjour') || q.includes('salut')) {
            return "Bonjour ! Que Dieu vous bénisse ! 🙏 Comment puis-je vous aider aujourd'hui ?";
        }
        else if (q.includes('merci')) {
            return "Merci à vous ! N'hésitez pas si vous avez d'autres questions. 🙏";
        }
        else if (q.includes('prière') || q.includes('prier')) {
            return "🙏 Nous prions pour vous. Pouvez-vous nous donner plus de détails ? N'hésitez pas à nous contacter directement.";
        }
        else if (q.includes('jeunesse') || q.includes('jeune')) {
            return "🎉 Notre ministère de la jeunesse se réunit le samedi après-midi à 14h00. Rejoignez-nous !";
        }
        else if (q.includes('baptême') || q.includes('baptiser')) {
            return "💧 Le baptême par immersion est un symbole de notre foi en Jésus. Contactez le pasteur pour plus d'informations.";
        }
        else {
            return "Merci pour votre message. 🙏 Un membre de notre équipe vous répondra bientôt. Souhaitez-vous parler à quelqu'un ? Vous pouvez aussi appeler Basimise Obedi au +243 827 210 152.";
        }
    }

    // Envoyer un message
    if (sendBtn && chatInput) {
        function sendMessage() {
            const userText = chatInput.value.trim();
            if (userText === "") return;
            
            addUserMessage(userText);
            const reply = getBotReply(userText);
            
            setTimeout(function() {
                addBotMessage(reply);
            }, 500);
            
            chatInput.value = "";
        }

        sendBtn.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// ========== 4. ANIMATIONS AU SCROLL (effet fade-in) ==========
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Appliquer l'animation aux sections principales
    const animatedElements = document.querySelectorAll('.services, .about-modern, .events, .newsletter, .about-story, .mission, .pastor, .stats, .beliefs-list, .live-section, .schedule, .upcoming-events, .contact-info, .contact-form-section');
    
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// ========== 5. ANIMATION DES CARTES (survol) ==========
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card, .event-card, .mission-card, .belief-card, .schedule-card');
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transition = 'all 0.3s ease';
        });
    });
});

// ========== 6. GESTION DU FORMULAIRE DE CONTACT ==========
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Merci pour votre message ! Nous vous répondrons dans les plus brefs délais. Que Dieu vous bénisse !');
            contactForm.reset();
        });
    }
});

// ========== 7. MESSAGE DE BIENVENUE DANS LA CONSOLE ==========
console.log("✅ Site Église Adventiste Kasenga - Version Moderne chargée avec succès !");
console.log("🙏 Que Dieu vous bénisse !");