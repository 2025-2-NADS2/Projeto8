// Projects data
const projects = [
    {
        id: 1,
        title: 'Natal Solidário',
        description: 'Campanha solidária de Natal que promove a arrecadação e doação de presentes, alimentos e roupas para famílias em situação de vulnerabilidade.',
        fullDescription: 'O Natal Solidário é uma iniciativa comunitária que tem como propósito espalhar amor e esperança durante as festas de fim de ano. A campanha reúne voluntários, empresas e instituições para arrecadar brinquedos, roupas, alimentos e outros itens essenciais, destinando-os a famílias e crianças em situação de vulnerabilidade social. Além das doações, o programa promove eventos festivos com atividades recreativas e momentos de confraternização, fortalecendo o espírito de solidariedade e união.',
        image: './IMG/NatalAlma.png',
        participants: 150,
        duration: '6 meses'
    },
    {
        id: 2,
        title: 'Alimentação Solidária',
        description: 'Distribuição de sopas para famílias em situação de vulnerabilidade',
        fullDescription: '',
        image: './IMG/Sopa_Alma.jpg',
        participants: 300,
        duration: 'Permanente'
    },
    {
        id: 3,
        title: 'Ações Pascoa',
        description: 'Alimento e Alegria na Mesa de Quem Mais Precisa.',
        fullDescription: 'Promovemos a distribuição especial de cestas básicas e kits de Páscoa para famílias em situação de vulnerabilidade. Nesta época de renovação, garantimos que, além do alimento essencial, a alegria do chocolate e dos doces chegue à mesa e ao coração de cada criança, proporcionando um momento de felicidade e dignidade.',
        image: './IMG/PascoaAlma.png',
        participants: 80,
        duration: 'Ano letivo'
    },
    {
        id: 4,
        title: 'Apoio ao Idoso',
        description: 'Assistência e atividades para a terceira idade',
        fullDescription: 'Programa dedicado ao cuidado e bem-estar de pessoas idosas, oferecendo atividades físicas adaptadas, acompanhamento de saúde básico e momentos de socialização. Valorizamos a experiência e sabedoria da terceira idade.',
        image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600',
        participants: 60,
        duration: 'Permanente'
    },
    {
        id: 5,
        title: 'Grupo de Mães',
        description: 'Alimento na Mesa e Cuidado para Bebês',
        fullDescription: '',
        image: './IMG/Grupo_de_maes.jpeg',
        participants: 120,
        duration: '1 ano'
    },
    // {
    //     id: 6,
    //     title: 'Saúde Comunitária',
    //     description: 'Campanhas de prevenção e promoção da saúde',
    //     fullDescription: 'Programa de saúde preventiva que oferece consultas básicas, campanhas de vacinação e orientações sobre cuidados com a saúde. Trabalhamos em parceria com profissionais de saúde para levar atendimento de qualidade à comunidade.',
    //     image: 'https://images.pexels.com/photos/7551648/pexels-photo-7551648.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     participants: 200,
    //     duration: 'Permanente'
    // }
];

// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const successMessage = document.getElementById('successMessage');
const loading = document.getElementById('loading');

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Remove loading overlay after page loads
    setTimeout(() => {
        if (loading) {
            loading.classList.add('fade-out');
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    // Load projects
    loadProjects();
    
    // Initialize event listeners
    initializeEventListeners();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        mobileMenu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Load projects into grid
function loadProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectModal(${project.id})">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay"></div>
                <div class="project-meta">
                    <div class="project-meta-item">
                        <i data-lucide="users"></i>
                        <span>${project.participants} pessoas</span>
                    </div>
                    <div class="project-meta-item">
                        <i data-lucide="calendar"></i>
                        <span>${project.duration}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-link">
                    <span>Saiba mais</span>
                    <i data-lucide="external-link"></i>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons for new content
    lucide.createIcons();
}

// Open project modal
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-description">${project.fullDescription}</p>
        
        <div class="modal-stats">
            <div class="modal-stat">
                <i data-lucide="users"></i>
                <span>${project.participants} pessoas impactadas</span>
            </div>
            <div class="modal-stat">
                <i data-lucide="calendar"></i>
                <span>Duração: ${project.duration}</span>
            </div>
        </div>
        
        <button onclick="closeProjectModal()" class="modal-close-btn">
            Fechar
        </button>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reinitialize Lucide icons for modal content
    lucide.createIcons();
}

// Close project modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ================================
// 📩 FORMULÁRIO DE CONTATO
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // Busca os elementos no DOM
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Segurança: se não existir o formulário, sai (evita erros)
  if (!contactForm) {
    console.warn("Formulário #contactForm não encontrado no DOM.");
    return;
  }

  // Função que envia o formulário de contato para o backend
  async function handleContactForm(e) {
    e.preventDefault();

    // Pega os valores com checagem de existência (evita acessar .value de null)
    const nomeEl = document.getElementById("nome");
    const emailEl = document.getElementById("email");
    const telefoneEl = document.getElementById("telefone");
    const assuntoEl = document.getElementById("assunto");
    const mensagemEl = document.getElementById("mensagem");

    const formData = {
      nome: nomeEl ? nomeEl.value.trim() : "",
      email: emailEl ? emailEl.value.trim() : "",
      telefone: telefoneEl ? telefoneEl.value.trim() : "",
      assunto: assuntoEl ? assuntoEl.value : "",
      mensagem: mensagemEl ? mensagemEl.value.trim() : ""
    };

    // Validação simples antes do POST
    if (!formData.nome || !formData.email || !formData.mensagem || !formData.assunto) {
      alert("Preencha os campos obrigatórios: nome, email, assunto e mensagem.");
      return;
    }

    console.log("Enviando dados:", formData);

    try {
      const response = await fetch("http://localhost:5104/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // tenta extrair JSON com segurança
      let data = {};
      try {
        data = await response.json();
      } catch (err) {
        console.warn("Resposta não é JSON válido:", err);
      }

      console.log("Resposta do backend:", response.status, data);

      if (response.ok) {
        // Mostra mensagem de sucesso (se existir)
        if (successMessage) {
          successMessage.classList.add("active");
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            successMessage.classList.remove("active");
            document.body.style.overflow = "auto";
            contactForm.reset();
          }, 3000);
        } else {
          // fallback
          alert("✅ " + (data.mensagem || "Mensagem enviada com sucesso."));
          contactForm.reset();
        }
      } else {
        const errMsg = data.erro || data.message || "Erro ao enviar a mensagem.";
        alert("⚠️ " + errMsg);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("❌ Erro de conexão com o servidor.");
    }
  }

  // Remove listeners duplicados (caso o arquivo seja importado mais de uma vez)
  contactForm.removeEventListener("submit", handleContactForm);
  contactForm.addEventListener("submit", handleContactForm);
});


// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Show success message
    successMessage.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('active');
        document.body.style.overflow = 'auto';
        contactForm.reset();
    }, 3000);
}

// Handle newsletter form submission
function handleNewsletterForm(e) {
    e.preventDefault();
    
    // Simple success feedback
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Inscrito!';
    submitBtn.style.background = '#10B981';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        e.target.reset();
    }, 2000);
}

// Initialize all event listeners
function initializeEventListeners() {
    // Mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
    
    // Close modal when clicking overlay
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal || e.target.classList.contains('modal-overlay')) {
                closeProjectModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    // Smooth scroll for all internal links
    document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.project-card, .testimonial-card, .contact-item').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number, .impact-number, .financial-amount');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toLocaleString(); // 🔥 seta direto
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString(); // valor final
            }
        };

        // Start animation when element is visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counterObserver.observe(counter);
    });
};

    
    // Initialize counter animations
    animateCounters();
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1500);
    }
    
    // Add floating animation to elements
    const floatingElements = document.querySelectorAll('.stat-icon, .impact-icon');
    floatingElements.forEach((element, index) => {
        element.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedScroll = debounce(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Update header
    if (scrolled > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Parallax effects
    const parallaxElements = document.querySelectorAll('.hero-background');
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Resize handler
const debouncedResize = debounce(() => {
    // Handle responsive changes
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.toggleMobileMenu = toggleMobileMenu;