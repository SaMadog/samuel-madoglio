const translations = {
    en: {
        home: "Home",
        about: "About",
        skillsMe: "Skills",
        skills: "Skills",
        contact: "Contact",
        intro: "Hello, I am",
        name: "Samuel Madoglio",
        description: "Software Development, Cybersecurity, Network and System Administration, Data Science and Analysis, IT Project Management, and Software Testing.",
        downloadCV: "Download CV",
        contactMe: "Contact Me",
        aboutMe: "About Me",
        aboutTitle: "I combine intelligence and creativity to overcome any technological obstacle.",
        aboutDescription1: "I am a professional passionate about technology and innovation. My professional journey is marked by the constant pursuit of creative and efficient solutions in the field of IT.",
        aboutDescription2: "With deep knowledge in programming, system analysis, and project management, I am always ready to face challenges and find the best solutions for the technological needs of companies.",
        missionTitle: "My Mission",
        missionDescription: "My mission is to use technology as a catalyst for progress, developing solutions that protect, innovate, and empower, creating a digital ecosystem where efficiency and security go hand in hand with innovation and creativity.",
        email: "samuel.madoglio@hotmail.com",
        whatsapp: "938 985 582",
        address: "Arruda dos Vinhos, Lisbon"
    },
    pt: {
        home: "Home",
        about: "Sobre",
        skillsMe: "Competências",
        skills: "Habilidades",
        contact: "Contato",
        intro: "Olá, Eu sou",
        name: "Samuel Madoglio",
        description: "Desenvolvimento de Software, Cibersegurança, Administração de Redes e Sistemas, Ciência de Dados e Análise, Gestão de Projetos de TI e Testes de Software.",
        downloadCV: "Download CV",
        contactMe: "Contate-me",
        aboutMe: "Sobre Mim",
        aboutTitle: "Combino inteligência e criatividade para superar qualquer obstáculo tecnológico.",
        aboutDescription1: "Sou um profissional apaixonado por tecnologia e inovação. Minha jornada profissional é marcada pela busca constante por soluções criativas e eficientes na área da informática.",
        aboutDescription2: "Com profundo conhecimento em programação, análise de sistemas e gerenciamento de projetos, estou sempre pronto para enfrentar desafios e encontrar as melhores soluções para as necessidades tecnológicas das empresas.",
        missionTitle: "Minha Missão",
        missionDescription: "A minha missão é usar a tecnologia como um catalisador para o progresso, desenvolvendo soluções que protejam, inovem e capacitem, criando um ecossistema digital onde a eficiência e a segurança andem de mãos dadas com a inovação e a criatividade.",
        email: "samuel.madoglio@hotmail.com",
        whatsapp: "938 985 582",
        address: "Arruda dos Vinhos, Lisboa"
    }
};

// Função para aplicar a tradução
function applyTranslation(language) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[language][key]) {
            el.innerText = translations[language][key];
        }
    });
}

// Alternar entre idiomas ao clicar no botão de alternância
document.getElementById('lang-toggle').addEventListener('click', () => {
    const toggleButton = document.getElementById('lang-toggle');
    if (toggleButton.classList.contains('off')) {
        toggleButton.classList.remove('off');
        toggleButton.classList.add('on');
        applyTranslation('en');
    } else {
        toggleButton.classList.remove('on');
        toggleButton.classList.add('off');
        applyTranslation('pt');
    }
});

// Inicializa o idioma padrão
applyTranslation('pt');