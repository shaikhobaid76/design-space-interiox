// Static portfolio data with 10 items per category
const portfolioItems = [
    // Interior Design (10 items)
    { id: 'i1', image: "assets/images/interior1.jpg", title: "Modern Living Room", category: "interior", description: "A contemporary living space with minimalist furniture." },
    { id: 'i2', image: "assets/images/interior2.jpg", title: "Elegant Dining Area", category: "interior", description: "Custom lighting and wood accents." },
    { id: 'i3', image: "assets/images/interior3.jpg", title: "Luxury Bedroom", category: "interior", description: "Serene bedroom with premium materials." },
    { id: 'i4', image: "assets/images/interior4.jpg", title: "Modern Kitchen", category: "interior", description: "State-of-the-art kitchen design." },
    { id: 'i5', image: "assets/images/interior5.jpg", title: "Minimalist Office", category: "interior", description: "Clean lines for productive workspace." },
    { id: 'i6', image: "assets/images/interior6.jpg", title: "Contemporary Bathroom", category: "interior", description: "Spa-like bathroom with natural stone." },
    { id: 'i7', image: "assets/images/interior7.jpg", title: "Cozy Library", category: "interior", description: "Warm and inviting reading space." },
    { id: 'i8', image: "assets/images/interior8.jpg", title: "Open Plan Living", category: "interior", description: "Seamless flow between spaces." },
    { id: 'i9', image: "assets/images/interior9.jpg", title: "Kids Room", category: "interior", description: "Playful and functional design." },
    { id: 'i10', image: "assets/images/interior10.jpg", title: "Home Theater", category: "interior", description: "Immersive entertainment experience." },
    
    // Exterior Design (10 items)
    { id: 'e1', image: "assets/images/exterior1.jpg", title: "Garden Landscape", category: "exterior", description: "Lush garden with pathways." },
    { id: 'e2', image: "assets/images/exterior2.jpg", title: "Outdoor Terrace", category: "exterior", description: "Comfortable seating and greenery." },
    { id: 'e3', image: "assets/images/exterior3.jpg", title: "Pool Area", category: "exterior", description: "Luxurious pool with lounge." },
    { id: 'e4', image: "assets/images/exterior4.jpg", title: "Rooftop Garden", category: "exterior", description: "Urban oasis with city views." },
    { id: 'e5', image: "assets/images/exterior5.jpg", title: "Facade Lighting", category: "exterior", description: "Dramatic exterior illumination." },
    { id: 'e6', image: "assets/images/exterior6.jpg", title: "Pergola Design", category: "exterior", description: "Shaded outdoor structure." },
    { id: 'e7', image: "assets/images/exterior7.jpg", title: "Entrance Gate", category: "exterior", description: "Grand entrance with modern lines." },
    { id: 'e8', image: "assets/images/exterior8.jpg", title: "Backyard Patio", category: "exterior", description: "Cozy patio for relaxation." },
    { id: 'e9', image: "assets/images/exterior9.jpg", title: "Water Feature", category: "exterior", description: "Soothing fountain design." },
    { id: 'e10', image: "assets/images/exterior10.jpg", title: "Outdoor Kitchen", category: "exterior", description: "Complete alfresco cooking." },
    
    // Space Planning (10 items)
    { id: 'p1', image: "assets/images/planning1.jpg", title: "Open Floor Plan", category: "planning", description: "Efficient space planning." },
    { id: 'p2', image: "assets/images/planning2.jpg", title: "Apartment Layout", category: "planning", description: "Optimized small space." },
    { id: 'p3', image: "assets/images/planning3.jpg", title: "Office Zoning", category: "planning", description: "Productive work zones." },
    { id: 'p4', image: "assets/images/planning4.jpg", title: "Retail Store Layout", category: "planning", description: "Customer flow optimization." },
    { id: 'p5', image: "assets/images/planning5.jpg", title: "Restaurant Seating", category: "planning", description: "Comfortable dining arrangement." },
    { id: 'p6', image: "assets/images/planning6.jpg", title: "Hotel Suite Plan", category: "planning", description: "Luxury suite layout." },
    { id: 'p7', image: "assets/images/planning7.jpg", title: "Clinic Design", category: "planning", description: "Efficient medical space." },
    { id: 'p8', image: "assets/images/planning8.jpg", title: "Studio Apartment", category: "planning", description: "Multifunctional furniture." },
    { id: 'p9', image: "assets/images/planning9.jpg", title: "Warehouse Layout", category: "planning", description: "Storage and workflow." },
    { id: 'p10', image: "assets/images/planning10.jpg", title: "School Classroom", category: "planning", description: "Engaging learning environment." },
    
    // AutoCAD (10 items)
    { id: 'a1', image: "assets/images/autocad1.jpg", title: "Residential Plan", category: "autocad", description: "Detailed floor plan." },
    { id: 'a2', image: "assets/images/autocad2.jpg", title: "Elevation Drawing", category: "autocad", description: "Front elevation details." },
    { id: 'a3', image: "assets/images/autocad3.jpg", title: "Section View", category: "autocad", description: "Cross-section of building." },
    { id: 'a4', image: "assets/images/autocad4.jpg", title: "Electrical Layout", category: "autocad", description: "Lighting and power plan." },
    { id: 'a5', image: "assets/images/autocad5.jpg", title: "Plumbing Plan", category: "autocad", description: "Water and drainage." },
    { id: 'a6', image: "assets/images/autocad6.jpg", title: "Furniture Layout", category: "autocad", description: "2D furniture arrangement." },
    { id: 'a7', image: "assets/images/autocad7.jpg", title: "Landscape Design", category: "autocad", description: "Garden and hardscape." },
    { id: 'a8', image: "assets/images/autocad8.jpg", title: "Structural Drawing", category: "autocad", description: "Beam and column layout." },
    { id: 'a9', image: "assets/images/autocad9.jpg", title: "Ceiling Plan", category: "autocad", description: "Reflected ceiling plan." },
    { id: 'a10', image: "assets/images/autocad10.jpg", title: "Detail Drawing", category: "autocad", description: "Construction details." }
];

let currentCategory = 'all';
let hintTimeout = null; // For auto-hiding the flip hint
let hintShown = false;  // Flag to ensure hint shows only once

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hero').style.background = "url('assets/images/hero-bg.jpg') no-repeat center center / cover";
    
    renderProjects();
    renderPortfolioPageItems('all');
    initEventListeners();
    initScrollAnimations();
    
    restorePageState();

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed', err));
    }

    // Flip hint logic: show only once when about section enters viewport, auto-hide after 3 seconds
    const flipHint = document.getElementById('flipHint');
    const aboutSection = document.getElementById('about');
    if (flipHint && aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hintShown) {
                    hintShown = true; // Mark as shown
                    flipHint.classList.remove('hidden');
                    // Clear previous timeout
                    if (hintTimeout) clearTimeout(hintTimeout);
                    // Auto-hide after 3 seconds
                    hintTimeout = setTimeout(() => {
                        flipHint.classList.add('hidden');
                    }, 3000);
                    // Optionally disconnect observer after first trigger
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(aboutSection);
    }

    // Tap-to-flip on mobile (click anywhere on flip container)
    const flipContainer = document.getElementById('flipContainer');
    const flipper = document.getElementById('flipper');
    if (flipContainer && flipper) {
        flipContainer.addEventListener('click', function() {
            flipper.classList.toggle('flipped');
        });
    }
});

// Save state before page unload
window.addEventListener('beforeunload', function() {
    const homePage = document.getElementById('home-page');
    const portfolioPage = document.getElementById('portfolio-page');
    const activePage = portfolioPage.classList.contains('active') ? 'portfolio' : 'home';
    const scrollY = window.scrollY;
    
    sessionStorage.setItem('activePage', activePage);
    sessionStorage.setItem('scrollY', scrollY);
});

function restorePageState() {
    const activePage = sessionStorage.getItem('activePage');
    const scrollY = parseInt(sessionStorage.getItem('scrollY')) || 0;
    
    if (activePage === 'portfolio') {
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('portfolio-page').classList.add('active');
        document.querySelector('header').classList.add('hidden');
    } else {
        document.getElementById('portfolio-page').classList.remove('active');
        document.getElementById('home-page').style.display = 'block';
        document.querySelector('header').classList.remove('hidden');
    }
    
    setTimeout(() => {
        window.scrollTo(0, scrollY);
    }, 100);
}

function initEventListeners() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target === '#home' || target === '#about' || target === '#projects' || 
                target === '#services' || target === '#why-choose-us' || target === '#contact') {
                e.preventDefault();
                document.getElementById('home-page').style.display = 'block';
                document.getElementById('portfolio-page').classList.remove('active');
                document.querySelector('header').classList.remove('hidden');
                const section = document.querySelector(target);
                if (section) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    window.scrollTo({ top: section.offsetTop - headerHeight, behavior: 'smooth' });
                }
            }
        });
    });

    document.getElementById('logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('portfolio-page').classList.remove('active');
        document.getElementById('home-page').style.display = 'block';
        document.querySelector('header').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('portfolio-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('portfolio-page').classList.add('active');
        document.querySelector('header').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });

    document.getElementById('back-to-home').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('portfolio-page').classList.remove('active');
        document.getElementById('home-page').style.display = 'block';
        document.querySelector('header').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('view-portfolio-hero').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('portfolio-page').classList.add('active');
        document.querySelector('header').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('view-portfolio-projects').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('portfolio-page').classList.add('active');
        document.querySelector('header').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            renderPortfolioPageItems(currentCategory);
        });
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('image-modal').classList.remove('active');
    });

    document.getElementById('image-modal').addEventListener('click', function(e) {
        if (e.target === this) this.classList.remove('active');
    });

    document.getElementById('linkedin-link').setAttribute('href', '#'); // Replace with actual LinkedIn URL
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate, .slide-left, .slide-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(el => observer.observe(el));
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    
    const categories = ['interior', 'exterior', 'planning', 'autocad'];
    const latestItems = categories.map(cat => {
        const catItems = portfolioItems.filter(item => item.category === cat);
        return catItems[catItems.length - 1];
    }).filter(item => item);
    
    latestItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `project-card ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`;
        card.setAttribute('data-id', item.id);
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="project-image" onerror="this.src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80'">
            <div class="project-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        card.addEventListener('click', () => openImageModal(item.id));
        projectsGrid.appendChild(card);
    });
}

function renderPortfolioPageItems(category) {
    const grid = document.getElementById('portfolio-page-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = category === 'all' ? [...portfolioItems] : portfolioItems.filter(item => item.category === category);
    const reversed = filtered.reverse();
    reversed.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = `portfolio-item ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`;
        el.setAttribute('data-id', item.id);
        el.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-image" onerror="this.src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80'">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        el.addEventListener('click', () => openImageModal(item.id));
        grid.appendChild(el);
    });
    initScrollAnimations();
}

function openImageModal(itemId) {
    const item = portfolioItems.find(i => i.id === itemId);
    if (item) {
        const modal = document.getElementById('image-modal');
        document.getElementById('modal-image').src = item.image;
        modal.classList.add('active');
    }
}

document.addEventListener('contextmenu', e => e.preventDefault());