// --- BASES DE DATOS SIMULADAS ---
const videoDatabase = {
    'video1': { title: 'Curso Completo de HTML5 - Desde Cero', channel: 'Programador X', channelId: 'ch1', subs: '850K', views: '1.2M', date: 'hace 1 año', description: 'Aprende HTML5 desde los fundamentos.', likes: 125000, thumbnail: 'https://picsum.photos/seed/html5/480/270', avatar: 'https://picsum.photos/seed/programadorx/48/48', comments: [{ author: 'Juan Perez', text: '¡Excelente curso!' }], tags: ['educacion', 'programacion'] },
    'video2': { title: 'LOFI HIP HOP RADIO - relaxing beats', channel: 'Lofi Girl', channelId: 'ch2', subs: '12.1M', views: '750M', date: 'hace 2 años', description: 'Música relajante para estudiar.', likes: 7800000, thumbnail: 'https://picsum.photos/seed/lofi/480/270', avatar: 'https://picsum.photos/seed/lofigirl/48/48', comments: [{ author: 'Ana López', text: 'La mejor música.' }], tags: ['musica', 'explorar'] },
    'video3': { title: 'Viaje a JAPÓN en 4K', channel: 'Viajero Incansable', channelId: 'ch3', subs: '2.3M', views: '12M', date: 'hace 6 meses', description: 'Un recorrido visual por Japón.', likes: 850000, thumbnail: 'https://picsum.photos/seed/japon/480/270', avatar: 'https://picsum.photos/seed/viajero/48/48', comments: [], tags: ['viajes', 'explorar'] },
    'video4': { title: 'Este truco de CSS es una LOCURA', channel: 'Programador X', channelId: 'ch1', subs: '850K', views: '310K', date: 'hace 2 semanas', description: 'Un short sobre animaciones CSS.', likes: 32000, thumbnail: 'https://picsum.photos/seed/css/270/480', avatar: 'https://picsum.photos/seed/programadorx/48/48', comments: [], tags: ['programacion', 'short'] },
    'video5': { title: 'La MEJOR PIZZA del MUNDO', channel: 'Cocina Para Todos', channelId: 'ch5', subs: '5.6M', views: '22M', date: 'hace 3 años', description: 'Prepara la mejor pizza casera.', likes: 1200000, thumbnail: 'https://picsum.photos/seed/pizza/480/270', avatar: 'https://picsum.photos/seed/cocina/48/48', comments: [{ author: 'Gordom Ramsay', text: 'Not bad.' }], tags: ['cocina', 'explorar'] },
    'video6': { title: 'El Gato que programa en Python', channel: 'Animales Graciosos', channelId: 'ch6', subs: '1.2M', views: '1.1M', date: 'hace 1 mes', description: 'Un short viral.', likes: 150000, thumbnail: 'https://picsum.photos/seed/gato/270/480', avatar: 'https://picsum.photos/seed/animales/48/48', comments: [], tags: ['humor', 'short'] },
    'video7': { title: 'El Universo en una Cáscara de Nuez', channel: 'Ciencia Total', channelId: 'ch7', subs: '4.2M', views: '8.8M', date: 'hace 1 año', description: 'Explora los misterios del universo.', likes: 410000, thumbnail: 'https://picsum.photos/seed/universo/480/270', avatar: 'https://picsum.photos/seed/ciencia/48/48', comments: [], tags: ['ciencia', 'explorar', 'educacion'] },
    'video8': { title: 'Edición con DaVinci Resolve', channel: 'Filmmaker Pro', channelId: 'ch8', subs: '1.1M', views: '3.4M', date: 'hace 11 meses', description: 'Tutorial para principiantes.', likes: 210000, thumbnail: 'https://picsum.photos/seed/davinci/480/270', avatar: 'https://picsum.photos/seed/filmmaker/48/48', comments: [], tags: ['tecnologia', 'educacion'] },
    'video9': { title: 'Entrenamiento INTENSO de 20 minutos', channel: 'Fit Life', channelId: 'ch9', subs: '3.8M', views: '15M', date: 'hace 7 meses', description: 'Una rutina de cardio y fuerza.', likes: 650000, thumbnail: 'https://picsum.photos/seed/fitness/480/270', avatar: 'https://picsum.photos/seed/fitlife/48/48', comments: [], tags: ['fitness', 'explorar'] },
    'video10': { title: 'Los MEJORES Videojuegos de la DÉCADA', channel: 'GamerZone', channelId: 'ch10', subs: '980K', views: '2.1M', date: 'hace 4 meses', description: 'Un repaso por los mejores títulos.', likes: 150000, thumbnail: 'https://picsum.photos/seed/gamer/480/270', avatar: 'https://picsum.photos/seed/gamerzone/48/48', comments: [], tags: ['videojuegos', 'explorar'] },
    'video11': { title: 'Construyendo una CASA con Contenedores', channel: 'Arquitectura Increíble', channelId: 'ch11', subs: '1.9M', views: '9.8M', date: 'hace 1 año', description: 'El proceso completo.', likes: 450000, thumbnail: 'https://picsum.photos/seed/casa/480/270', avatar: 'https://picsum.photos/seed/arquitectura/48/48', comments: [], tags: ['arquitectura', 'explorar'] },
    'video12': { title: 'FINLANDIA: El País Más FELIZ del Mundo', channel: 'Viajero Incansable', channelId: 'ch3', subs: '2.3M', views: '6.5M', date: 'hace 3 meses', description: 'Descubre por qué.', likes: 320000, thumbnail: 'https://picsum.photos/seed/finlandia/480/270', avatar: 'https://picsum.photos/seed/viajero/48/48', comments: [], tags: ['viajes', 'explorar'] },
};
const fakeChannelDatabase = [
    { name: 'Noticias 24/7', avatar: 'https://picsum.photos/seed/noticias/48/48' }, { name: 'Misterios Ocultos', avatar: 'https://picsum.photos/seed/misterios/48/48' }, { name: 'Tech Review', avatar: 'https://picsum.photos/seed/tech/48/48' }, { name: 'Cine Total', avatar: 'https://picsum.photos/seed/cine/48/48' }, { name: 'Universo Gamer', avatar: 'https://picsum.photos/seed/ugamer/48/48' }, { name: 'Sabor Casero', avatar: 'https://picsum.photos/seed/sabor/48/48' }, { name: 'Mundo Motor', avatar: 'https://picsum.photos/seed/motor/48/48' }, { name: 'Planeta Verde', avatar: 'https://picsum.photos/seed/verde/48/48' }, { name: 'Historia Viva', avatar: 'https://picsum.photos/seed/historia/48/48' }, { name: 'Arte y Pincel', avatar: 'https://picsum.photos/seed/arte/48/48' }, { name: 'Finanzas Personales', avatar: 'https://picsum.photos/seed/finanzas/48/48' }, { name: 'Fitness en Casa', avatar: 'https://picsum.photos/seed/fithome/48/48' }, { name: 'Mascotas Felices', avatar: 'https://picsum.photos/seed/mascotas/48/48' }, { name: 'Risas sin Fin', avatar: 'https://picsum.photos/seed/risas/48/48' }, { name: 'Mente Curiosa', avatar: 'https://picsum.photos/seed/curiosa/48/48' }
];
const fakeNotifications = Array.from({ length: 15 }, (_, i) => ({
    channel: fakeChannelDatabase[i].name,
    avatar: fakeChannelDatabase[i].avatar,
    title: `ha subido un nuevo video: "${videoDatabase[`video${i+1 > 12 ? 1 : i+1}`].title}"`,
    thumbnail: videoDatabase[`video${i+1 > 12 ? 1 : i+1}`].thumbnail,
    timestamp: `hace ${Math.floor(Math.random() * 50) + 10} minutos`
}));

// --- LÓGICA PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
    const pageId = document.body.id;
    if (pageId === 'login-page') {
        setupLoginPage();
    } else {
        const currentUser = getCurrentUser();
        if (!currentUser) { window.location.href = 'login.html'; return; }
        renderHeader(currentUser); renderSidebar(); renderDynamicElements(); initializeGlobalEventListeners();
        if (pageId === 'home-page') { renderHomePageContent(); } 
        else if (pageId === 'watch-page') { renderWatchPage(); }
    }
});

// --- AUTENTICACIÓN ---
function getCurrentUser() { return JSON.parse(localStorage.getItem('currentUser')); }
function setCurrentUser(user) { localStorage.setItem('currentUser', JSON.stringify(user)); }
function logout() { localStorage.removeItem('currentUser'); window.location.href = 'login.html'; }
function setupLoginPage() {
    const loginForm = document.getElementById('login-form'); if (!loginForm) return;
    const usernameInput = document.getElementById('username'), passwordInput = document.getElementById('password'), errorMessage = document.getElementById('error-message'), title = document.getElementById('login-title'), loginButton = document.getElementById('login-button'), toggleContainer = document.querySelector('.toggle-form-text');
    let isLogin = true;
    const toggleModeHandler = (event) => {
        if (event.target.id === 'show-signup') {
            event.preventDefault(); isLogin = !isLogin; title.textContent = isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'; loginButton.textContent = isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'; errorMessage.textContent = '';
            toggleContainer.innerHTML = isLogin ? '¿No tienes cuenta? <span id="show-signup">Crea una.</span>' : '¿Ya tienes cuenta? <span id="show-signup">Inicia sesión.</span>';
        }
    };
    toggleContainer.addEventListener('click', toggleModeHandler);
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); const users = JSON.parse(localStorage.getItem('users')) || {};
        if (isLogin) {
            if (users[usernameInput.value] && users[usernameInput.value].password === passwordInput.value) { setCurrentUser({ username: usernameInput.value }); window.location.href = 'index.html'; } else { errorMessage.textContent = 'Usuario o contraseña incorrectos.'; }
        } else {
            if (users[usernameInput.value]) { errorMessage.textContent = 'El nombre de usuario ya existe.'; } else { users[usernameInput.value] = { password: passwordInput.value }; localStorage.setItem('users', JSON.stringify(users)); setCurrentUser({ username: usernameInput.value }); window.location.href = 'index.html'; }
        }
    });
}

// --- RENDERIZADO DE COMPONENTES ---
function renderHeader(user) {
    const header = document.getElementById('main-header'); if (!header) return;
    const userInitial = user.username.charAt(0).toUpperCase();
    header.innerHTML = `<div class="header__left"><i class="material-icons" id="menu-button">menu</i><a href="index.html"><img class="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo"></a></div><form class="header__search" id="search-form"><input type="text" id="search-input" placeholder="Buscar"><button type="submit" class="header__search-button"><i class="material-icons">search</i></button></form><div class="header__right"><div class="menu-container"><i class="material-icons" id="video-call-btn">video_call</i></div><div class="menu-container"><i class="material-icons" id="notifications-btn">notifications</i></div><div class="menu-container"><i class="material-icons" id="apps-btn">apps</i></div><div class="menu-container"><div class="user-avatar" id="user-avatar-btn">${userInitial}</div></div></div>`;
}
function renderSidebar() {
    const sidebar = document.getElementById('sidebar'); if (!sidebar) return;
    const page = new URLSearchParams(window.location.search).get('page') || 'home';
    const items = [{ id: 'home', icon: 'home', text: 'Principal' }, { id: 'explorar', icon: 'explore', text: 'Explorar' }, { id: 'shorts', icon: 'smart_display', text: 'Shorts' }, { id: 'suscripciones', icon: 'subscriptions', text: 'Suscripciones' }, { type: 'divider' }, { id: 'biblioteca', icon: 'video_library', text: 'Biblioteca' }, { id: 'historial', icon: 'history', text: 'Historial' }];
    sidebar.innerHTML = items.map(item => item.type === 'divider' ? '<hr>' : `<div class="sidebar__category ${item.id === page ? 'sidebar__category--active' : ''}"><a href="index.html?page=${item.id}"><i class="material-icons">${item.icon}</i><span>${item.text}</span></a></div>`).join('');
}

// --- RENDERIZADO DE ELEMENTOS DINÁMICOS (MODALES, DROPDOWNS) ---
function renderDynamicElements() {
    const currentUser = getCurrentUser(); const userInitial = currentUser.username.charAt(0).toUpperCase();
    const dynamicHTML = `
        <div class="dropdown-menu" id="user-dropdown"><div class="user-dropdown-header"><div class="user-avatar">${userInitial}</div><div class="user-dropdown-info"><p class="username">${currentUser.username}</p></div></div><div class="user-dropdown-item" id="logout-button"><i class="material-icons">logout</i><span>Cerrar sesión</span></div></div>
        <div class="dropdown-menu" id="notifications-dropdown"><div class="dropdown-header">Notificaciones</div>${fakeNotifications.map(n => `<div class="notification-item"><img src="${n.avatar}" class="notification-item__avatar"><div class="notification-item__text"><span class="channel-name">${n.channel}</span> ${n.title}<p class="timestamp">${n.timestamp}</p></div><img src="${n.thumbnail}" class="notification-item__thumbnail"></div>`).join('')}</div>
        <div class="upload-modal" id="upload-modal"><div class="upload-modal__content"><div class="upload-modal__header"><h2>Subir video</h2><i class="material-icons close-button" id="close-upload-modal">close</i></div><div class="upload-modal__body"><div class="upload-step active" id="step-1"><h3>Arrastra y suelta archivos de video para subirlos</h3><p>Tus videos serán privados hasta que los publiques.</p><button class="select-button" id="select-files-btn">Seleccionar archivos</button></div><div class="upload-step" id="step-2"><h3>Detalles</h3><form id="step-2-form"><input type="text" placeholder="Título (obligatorio)" required><textarea placeholder="Descripción"></textarea></form><button class="select-button" id="upload-btn">Subir</button></div><div class="upload-step" id="step-3"><h3>Subiendo...</h3><div class="progress-bar"><div class="progress-bar__fill" id="progress-bar-fill"></div></div></div><div class="upload-step" id="step-4"><h3><i class="material-icons">check_circle</i> ¡Subida completada!</h3><p>Tu video se ha subido correctamente (simulación).</p></div></div></div></div>
    `;
    document.body.insertAdjacentHTML('beforeend', dynamicHTML);
}

// --- LÓGICA DE PÁGINAS DE CONTENIDO ---
function renderHomePageContent() {
    const container = document.getElementById('videos-container'); if (!container) return;
    const page = new URLSearchParams(window.location.search).get('page') || 'home';
    const query = new URLSearchParams(window.location.search).get('search');
    container.innerHTML = query ? renderSearchResults(query) : {
        'home': renderHomeFeed, 'explorar': () => renderFilteredFeed('explorar', 'Explorar'), 'shorts': () => renderFilteredFeed('short', 'Shorts', true), 'suscripciones': renderSubscriptionsFeed, 'biblioteca': renderLibraryFeed, 'historial': renderHistoryFeed
    }[page]();
}
function renderHomeFeed() {
    const videos = Object.entries(videoDatabase).filter(([, v]) => !v.tags.includes('short'));
    const shorts = Object.entries(videoDatabase).filter(([, v]) => v.tags.includes('short'));
    return `<h2>Recomendados</h2><div class="video-grid">${videos.map(([id, v]) => createVideoCard(id, v)).join('')}</div><div class="shorts-section"><h2><i class="material-icons">smart_display</i> Shorts</h2><div class="shorts-grid">${shorts.map(([id, v]) => createShortCard(id, v)).join('')}</div></div>`;
}
function renderFilteredFeed(tag, title, isShorts = false) {
    const videos = Object.entries(videoDatabase).filter(([, v]) => v.tags.includes(tag));
    return `<h2>${title}</h2><div class="${isShorts ? 'shorts-grid' : 'video-grid'}">${videos.map(([id, v]) => isShorts ? createShortCard(id, v) : createVideoCard(id, v)).join('')}</div>`;
}
function renderSubscriptionsFeed() {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    const channelListHTML = `<div class="subscriptions-header"><h2>Canales</h2><div class="subscriptions-list">${fakeChannelDatabase.map(c => `<div class="sub-channel-item"><img src="${c.avatar}" class="sub-channel-item__avatar"><p class="sub-channel-item__name">${c.name}</p></div>`).join('')}</div></div>`;
    if (subscriptions.length === 0) return `${channelListHTML}<h2>Videos Recientes</h2><p>No te has suscrito a ningún canal para ver sus videos aquí.</p>`;
    const videos = Object.entries(videoDatabase).filter(([, v]) => subscriptions.includes(v.channelId));
    return `${channelListHTML}<h2>Videos Recientes</h2><div class="video-grid">${videos.map(([id, v]) => createVideoCard(id, v)).join('')}</div>`;
}
function renderLibraryFeed() { return `<h2>Biblioteca</h2><p>Videos que guardaste.</p><div class="video-grid">${Object.entries(videoDatabase).slice(0, 6).map(([id, v]) => createVideoCard(id, v)).join('')}</div>`; }
function renderHistoryFeed() { return `<h2>Historial</h2><p>Videos que viste recientemente.</p><div class="video-grid">${Object.entries(videoDatabase).slice(6, 12).map(([id, v]) => createVideoCard(id, v)).join('')}</div>`; }
function renderSearchResults(q) { const vids = Object.entries(videoDatabase).filter(([, v]) => v.title.toLowerCase().includes(q.toLowerCase())); return `<h2>Resultados para "${q}"</h2><div class="video-grid">${vids.length ? vids.map(([id, v]) => createVideoCard(id, v)).join('') : '<p>No se encontraron resultados.</p>'}</div>`; }

// --- EVENT LISTENERS ---
function initializeGlobalEventListeners() {
    document.getElementById('logout-button')?.addEventListener('click', logout);
    document.getElementById('apps-btn')?.addEventListener('click', () => alert('Simulación: Se mostrarían otras aplicaciones de Google.'));
    document.getElementById('search-form')?.addEventListener('submit', e => { e.preventDefault(); window.location.href = `index.html?search=${encodeURIComponent(document.getElementById('search-input').value)}`; });
    document.getElementById('menu-button')?.addEventListener('click', () => document.getElementById('sidebar')?.classList.toggle('collapsed'));
    
    // Dropdown Toggles
    const setupDropdown = (btnId, dropdownId) => {
        const btn = document.getElementById(btnId); const dropdown = document.getElementById(dropdownId);
        btn?.addEventListener('click', e => { e.stopPropagation(); document.querySelectorAll('.dropdown-menu').forEach(m => { if(m.id !== dropdownId) m.classList.remove('active'); }); dropdown.classList.toggle('active'); });
    };
    setupDropdown('user-avatar-btn', 'user-dropdown');
    setupDropdown('notifications-btn', 'notifications-dropdown');
    document.addEventListener('click', () => document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('active')));

    // Upload Modal
    const uploadModal = document.getElementById('upload-modal');
    document.getElementById('video-call-btn')?.addEventListener('click', () => uploadModal.style.display = 'flex');
    document.getElementById('close-upload-modal')?.addEventListener('click', () => uploadModal.style.display = 'none');
    document.getElementById('select-files-btn')?.addEventListener('click', () => { document.getElementById('step-1').classList.remove('active'); document.getElementById('step-2').classList.add('active'); });
    document.getElementById('upload-btn')?.addEventListener('click', () => {
        document.getElementById('step-2').classList.remove('active'); document.getElementById('step-3').classList.add('active');
        setTimeout(() => { document.getElementById('progress-bar-fill').style.width = '100%'; }, 100);
        setTimeout(() => { document.getElementById('step-3').classList.remove('active'); document.getElementById('step-4').classList.add('active'); }, 2000);
    });
}

// --- CREADORES DE HTML ---
function createVideoCard(id, v) { return `<a class="video-card" href="watch.html?v=${id}"><img class="video-card__thumbnail" src="${v.thumbnail}" alt="Miniatura"><div class="video-card__info"><img class="video-card__avatar" src="${v.avatar}" alt="Avatar"><div class="video-card__meta"><h3 class="video-card__title">${v.title}</h3><p>${v.channel}</p><p>${v.views} de vistas • ${v.date}</p></div></div></a>`; }
function createShortCard(id, v) { return `<a class="short-card" href="watch.html?v=${id}"><img class="short-card__thumbnail" src="${v.thumbnail}" alt="Miniatura"><div class="short-card__info"><h3>${v.title}</h3><p>${v.views} de vistas</p></div></a>`; }

// --- PÁGINA DE REPRODUCCIÓN ---
function renderWatchPage() {
    const vId = new URLSearchParams(window.location.search).get('v'); const video = videoDatabase[vId]; if (!video) { document.querySelector('.video-player-section').innerHTML = '<h1>Video no encontrado</h1>'; return; }
    document.getElementById('video-thumbnail').src = video.thumbnail; document.getElementById('video-title').textContent = video.title; document.getElementById('channel-avatar').src = video.avatar; document.getElementById('channel-name').textContent = video.channel; document.getElementById('channel-subs').textContent = `${video.subs} suscriptores`; document.getElementById('video-stats').innerHTML = `<strong>${video.views} vistas</strong> • <strong>${video.date}</strong>`; document.getElementById('video-description').textContent = video.description;
    
    const likeBtn = document.getElementById('like-button'); const likeCountSpan = document.getElementById('like-count'); let likes = JSON.parse(localStorage.getItem('likesData')) || {}; let isLiked = likes[vId] || false; let likeCount = video.likes + (isLiked ? 1 : 0);
    likeCountSpan.textContent = formatNumber(likeCount); likeBtn.classList.toggle('liked', isLiked);
    likeBtn.addEventListener('click', () => { isLiked = !isLiked; likes[vId] = isLiked; localStorage.setItem('likesData', JSON.stringify(likes)); likeCount += isLiked ? 1 : -1; likeCountSpan.textContent = formatNumber(likeCount); likeBtn.classList.toggle('liked', isLiked); });

    const subBtn = document.getElementById('subscribe-button'); let subs = JSON.parse(localStorage.getItem('subscriptions')) || []; let isSubbed = subs.includes(video.channelId);
    const updateSubBtn = () => { subBtn.textContent = isSubbed ? 'Suscrito' : 'Suscribirme'; subBtn.classList.toggle('subscribed', isSubbed); }; updateSubBtn();
    subBtn.addEventListener('click', () => { isSubbed = !isSubbed; if (isSubbed) { subs.push(video.channelId); } else { subs = subs.filter(id => id !== video.channelId); } localStorage.setItem('subscriptions', JSON.stringify(subs)); updateSubBtn(); });

    document.getElementById('dislike-button').addEventListener('click', () => alert('Video añadido a "No me gusta" (simulación).'));
    document.getElementById('share-button').addEventListener('click', () => alert('Enlace copiado al portapapeles (simulación).'));
    document.getElementById('download-button').addEventListener('click', () => alert('Descarga iniciada (simulación).'));
    
    renderCommentsSection(video); renderRecommendedVideos(vId);
}
function renderCommentsSection(video) {
    const addCommentBox = document.getElementById('add-comment-box'); const currentUser = getCurrentUser();
    addCommentBox.innerHTML = `<div class="user-avatar">${currentUser.username.charAt(0).toUpperCase()}</div><form id="comment-form"><input type="text" id="comment-input" placeholder="Añade un comentario..."><button type="submit">Comentar</button></form>`;
    const renderComments = () => {
        const list = document.getElementById('comment-list'); list.innerHTML = '';
        video.comments.forEach(c => { const el = document.createElement('div'); el.className = 'comment'; el.innerHTML = `<div class="user-avatar">${c.author.charAt(0).toUpperCase()}</div><div class="comment-content"><p><span class="author">${c.author}</span></p><p>${c.text}</p></div>`; list.appendChild(el); });
        document.getElementById('comment-count').textContent = `${video.comments.length} Comentarios`;
    };
    document.getElementById('comment-form').addEventListener('submit', e => {
        e.preventDefault(); const input = document.getElementById('comment-input'); if (input.value.trim() === '') return;
        video.comments.unshift({ author: currentUser.username, text: input.value }); input.value = ''; renderComments();
    });
    renderComments();
}
function renderRecommendedVideos(currentVId) {
    const grid = document.getElementById('recommended-videos-grid'); grid.innerHTML = '<h3>A continuación</h3>';
    for (const vId in videoDatabase) { if (vId === currentVId) continue; const v = videoDatabase[vId]; const card = document.createElement('a'); card.className = 'rec-video-card'; card.href = `watch.html?v=${vId}`; card.innerHTML = `<img src="${v.thumbnail}" class="rec-video-card__thumbnail"><div class="rec-video-card__info"><h4>${v.title}</h4><p>${v.channel}</p><p>${v.views} vistas</p></div>`; grid.appendChild(card); }
}
function formatNumber(num) { if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M'; if (num >= 1000) return (num / 1000).toFixed(0) + 'K'; return num; }