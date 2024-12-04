document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initFloatingCards();
    initCardNavigation();
    loadContent();
    initFilters();
    initModal();
    initAutocomplete();
});

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo (ex: 'praias.html')
    const category = path.replace(".html", ""); // Extrai a categoria (ex: 'praias')
    
    // Se a categoria existir no objeto de pontos turísticos
    if (turisticPoints[category]) {
        const sectionElements = document.querySelectorAll(`#${category} .cards-container`);
        const points = turisticPoints[category];

        points.forEach(point => {
            // Cria um card para cada ponto turístico
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${point.imagem}" alt="${point.nome}" class="card-image">
                <div class="card-content">
                    <h3>${point.nome}</h3>
                    <button class="details-button" data-id="${point.id}">Ver mais</button>
                </div>
            `;
            
            // Adiciona o card à seção correta
            const section = document.getElementById(point.id);
            section.querySelector(".cards-container").appendChild(card);

            // Evento para o botão "Ver mais"
            card.querySelector(".details-button").addEventListener("click", () => {
                showDetails(point);
            });
        });
    }
});

function showDetails(point) {
    // Função para exibir detalhes no modal ou em outra seção
    alert(`Detalhes sobre: ${point.nome} (ID: ${point.id})`);
}


function initSidebar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

function initFilters() {
    const menuItems = document.querySelectorAll('.menu-item');
    const searchInput = document.getElementById('searchInput');
    
    function filterContent(category, searchTerm = '') {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardText = card.textContent.toLowerCase();
            const matchesCategory = category === 'todos' || cardCategory === category;
            const matchesSearch = cardText.includes(searchTerm.toLowerCase());
            
            card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
        });
    }''

    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.menu-item.active').dataset.category;
        filterContent(activeCategory, e.target.value);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const notification = document.getElementById("notification");

    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            menuItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");

            // Exibe a notificação
            showNotification(`Você já está na página ${item.textContent.trim()}!`);
        });
    });

    // Função para exibir a notificação
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.remove("hidden");
        notification.classList.add("visible");

        // Esconde a notificação após 3 segundos
        setTimeout(() => {
            notification.classList.remove("visible");
            notification.classList.add("hidden");
        }, 3000);
    }
});


function showDetails(point) {
    const modal = document.getElementById('detailsModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <img src="${point.imagem}" alt="${point.nome}" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
        <h2>${point.nome}</h2>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${point.cidade}</p>
        <div class="description">
            <h3>Sobre</h3>
            <p>${point.descricao}</p>
        </div>
        ${point.historia ? `
            <div class="history">
                <h3>História</h3>
                <p>${point.historia}</p>
            </div>
            ` : ''}
        ${point.especialidades ? `
            <div class="especialidade">
                <h3>Especialidades</h3>
                <p>${point.especialidades}</p>
            </div>
        ` : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initAutocomplete() {
    const searchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.search-box');
    
    // Criar elemento para sugestões
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    searchBox.appendChild(suggestionsDiv);

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        suggestionsDiv.innerHTML = '';

        if (value.length > 0) {
            const matches = cidadesAlagoas.filter(cidade => 
                cidade.toLowerCase().includes(value)
            );

            matches.forEach(cidade => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = cidade;
                div.addEventListener('click', () => {
                    searchInput.value = cidade;
                    suggestionsDiv.innerHTML = '';
                    filterCards();
                });
                suggestionsDiv.appendChild(div);
            });
        }
    });

    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            suggestionsDiv.innerHTML = '';
        }
    });
}