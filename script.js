
    // /* ========================================================
    //    1. INTERACTIVE HTML5 CANVAS BACKGROUND (Particles)
    //    ======================================================== */
    // const canvas = document.getElementById('particleCanvas');
    // const ctx = canvas.getContext('2d');

    // let particlesArray = [];
    // const maxParticles = 60; // Optimal performance load density

    // // Handle Window Resizing dynamically
    // function resizeCanvas() {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   initParticles();
    // }
    // window.addEventListener('resize', resizeCanvas);
    // window.addEventListener('load', () => {
    //   resizeCanvas();
    //   animateParticles();
    // });

    // // Particle Data Class Struct
    // class Particle {
    //   constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.size = Math.random() * 2 + 1;
    //     this.speedX = (Math.random() - 0.5) * 0.5;
    //     this.speedY = (Math.random() - 0.5) * 0.5;
    //     this.alpha = Math.random() * 0.5 + 0.1;
    //   }

    //   update() {
    //     this.x += this.speedX;
    //     this.y += this.speedY;

    //     // Bounce mechanics on borders
    //     if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    //     if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    //   }

    //   draw() {
    //     ctx.fillStyle = `rgba(16, 185, 129, ${this.alpha})`; // Elegant Emerald
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    //     ctx.fill();
    //   }
    // }

    // // Populate particles set
    // function initParticles() {
    //   particlesArray = [];
    //   for (let i = 0; i < maxParticles; i++) {
    //     const x = Math.random() * canvas.width;
    //     const y = Math.random() * canvas.height;
    //     particlesArray.push(new Particle(x, y));
    //   }
    // }

    // // Canvas rendering loop
    // function animateParticles() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      
    //   // Draw Connections (Line nodes)
    //   for (let i = 0; i < particlesArray.length; i++) {
    //     for (let j = i + 1; j < particlesArray.length; j++) {
    //       const dx = particlesArray[i].x - particlesArray[j].x;
    //       const dy = particlesArray[i].y - particlesArray[j].y;
    //       const dist = Math.sqrt(dx * dx + dy * dy);

    //       // Render link if vectors are close
    //       if (dist < 120) {
    //         const linkAlpha = (1 - (dist / 120)) * 0.1;
    //         ctx.strokeStyle = `rgba(59, 130, 246, ${linkAlpha})`; // Fade Blue line
    //         ctx.lineWidth = 0.8;
    //         ctx.beginPath();
    //         ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
    //         ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
    //         ctx.stroke();
    //       }
    //     }
    //   }

    //   // Render Individual Node points
    //   particlesArray.forEach(p => {
    //     p.update();
    //     p.draw();
    //   });

    //   requestAnimationFrame(animateParticles);
    // }


    // /* ========================================================
    //    2. TYPING ROTATION TIMELINE ANIMATION (Vanilla JS)
    //    ======================================================== */
    // const typingTarget = document.getElementById('typingTarget');
    // const strings = ["Applications", "CSS Architectures", "Modern Solutions", "Web Experiences"];
    // let stringIndex = 0;
    // let charIndex = 0;
    // let isDeleting = false;
    // let typingSpeed = 100;

    // function typeEffect() {
    //   const currentString = strings[stringIndex];
      
    //   if (isDeleting) {
    //     typingTarget.textContent = currentString.substring(0, charIndex - 1);
    //     charIndex--;
    //     typingSpeed = 50; // Deletes quicker
    //   } else {
    //     typingTarget.textContent = currentString.substring(0, charIndex + 1);
    //     charIndex++;
    //     typingSpeed = 120; // Natural writing speed
    //   }

    //   if (!isDeleting && charIndex === currentString.length) {
    //     typingSpeed = 2000; // Pause at end of word
    //     isDeleting = true;
    //   } else if (isDeleting && charIndex === 0) {
    //     isDeleting = false;
    //     stringIndex = (stringIndex + 1) % strings.length;
    //     typingSpeed = 500; // Brief delay before typing next word
    //   }

    //   setTimeout(typeEffect, typingSpeed);
    // }
    // // Fire Typing Script
    // typeEffect();


    // /* ========================================================
    //    3. INTERACTIVE DEVELOPER TERMINAL (CLI ENGINE)
    //    ======================================================== */
    // const terminalInput = document.getElementById('terminalInput');
    // const terminalHistory = document.getElementById('terminalHistory');
    // const terminalScreen = document.getElementById('terminalScreen');

    // // Syntactical Help Map Dictionary
    // const commands = {
    //   help: () => `
    //     <span class="text-white font-semibold">Available CLI commands:</span><br>
    //     - <span class="text-brand-accent">about</span>: Details on my engineering philosophy<br>
    //     - <span class="text-brand-accent">skills</span>: List out my stack capabilities<br>
    //     - <span class="text-brand-accent">contact</span>: Access my communication email details<br>
    //     - <span class="text-brand-accent">clear</span>: Flush all inputs from this console
    //   `,
    //   about: () => `
    //     My philosophy hinges on performance. Clean semantic DOM layouts, custom interactive JavaScript, 
    //     efficient caching mechanisms, and pixel perfect execution. Let's make products!
    //   `,
    //   skills: () => `
    //     <span class="text-white">Professional Stack Matrix:</span><br>
    //     - <span class="text-brand-neonBlue">Languages:</span> JavaScript, ES6, HTML5 Semantic structure, Core CSS Variables<br>
    //     - <span class="text-brand-neonPurple">Libraries:</span> React, Node.js, Express, TailwindCSS, Three.js<br>
    //     - <span class="text-brand-accent">Tools:</span> Webpack, Vite, Docker, Git/Github
    //   `,
    //   contact: () => `
    //     Email: <span class="text-white underline">developer@playground.com</span><br>
    //     Or reach out via the beautiful <span class="text-brand-accent font-bold">Contact Form</span> located directly below.
    //   `,
    //   clear: () => {
    //     terminalHistory.innerHTML = '';
    //     return '';
    //   }
    // };

    // terminalInput.addEventListener('keydown', (e) => {
    //   if (e.key === 'Enter') {
    //     const rawInput = terminalInput.value.trim();
    //     const cleanCmd = rawInput.toLowerCase();

    //     if (cleanCmd !== '') {
    //       // Play interactive keyboard keystroke audio click if enabled
    //       playSoundEffect();

    //       // 1. Create echo wrapper block
    //       const echo = document.createElement('div');
    //       echo.className = 'flex items-start gap-2 mt-2';
    //       echo.innerHTML = `<span class="text-brand-neonBlue font-semibold">visitor@portfolio:~$&nbsp;</span><span class="text-white">${rawInput}</span>`;
    //       terminalHistory.appendChild(echo);

    //       // 2. Parse command execution responses
    //       const result = document.createElement('p');
    //       result.className = 'text-gray-300 leading-relaxed pl-4 border-l border-white/5';
          
    //       if (commands[cleanCmd]) {
    //         const out = commands[cleanCmd]();
    //         if (cleanCmd !== 'clear') {
    //           result.innerHTML = out;
    //           terminalHistory.appendChild(result);
    //         }
    //       } else {
    //         result.innerHTML = `<span class="text-red-400">Error: command not found '${rawInput}'</span>. Type 'help' for support.`;
    //         terminalHistory.appendChild(result);
    //       }

    //       // Reset console text area fields
    //       terminalInput.value = '';
          
    //       // Auto-scroll screen downwards to latest history inputs
    //       setTimeout(() => {
    //         terminalScreen.scrollTop = terminalScreen.scrollHeight;
    //       }, 30);
    //     }
    //   }
    // });


    // /* ========================================================
    //    4. CHROMATIC AUDIO CHROME SYNTH CLICKS (Sound API)
    //    ======================================================== */
    // let audioEnabled = false;
    // const soundToggle = document.getElementById('soundToggle');
    // const soundIcon = document.getElementById('soundIcon');

    // // Browser audio policy bypass
    // soundToggle.addEventListener('click', () => {
    //   audioEnabled = !audioEnabled;
    //   if (audioEnabled) {
    //     soundIcon.className = "fa-solid fa-volume-high text-brand-accent";
    //     // Create quick feedback note sound
    //     playSynthNote(440, 0.08); // A4
    //   } else {
    //     soundIcon.className = "fa-solid fa-volume-mute text-gray-400";
    //   }
    // });

    // function playSynthNote(frequency, duration) {
    //   if (!audioEnabled) return;
    //   try {
    //     const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    //     const oscillator = audioCtx.createOscillator();
    //     const gainNode = audioCtx.createGain();

    //     oscillator.type = 'sine';
    //     oscillator.frequency.value = frequency;
        
    //     gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); // keep it soft and pleasing
    //     gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    //     oscillator.connect(gainNode);
    //     gainNode.connect(audioCtx.destination);

    //     oscillator.start();
    //     oscillator.stop(audioCtx.currentTime + duration);
    //   } catch (err) {
    //     // Fallback for browsers that do not support Web Audio Contexts
    //   }
    // }

    // function playSoundEffect() {
    //   // Keystroke sound synthetic click
    //   playSynthNote(Math.random() * 400 + 400, 0.05);
    // }


    // /* ========================================================
    //    5. ACTIVE SCROLL-SPY NAVIGATION HIGHLIGHTER
    //    ======================================================== */
    // const navLinks = document.querySelectorAll('.nav-link');
    // const sections = document.querySelectorAll('section');

    // const observerOptions = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold: 0.3 // Highlight when 30% of the active block viewport is visible
    // };

    // const sectionObserver = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       const activeId = entry.target.getAttribute('id');
          
    //       navLinks.forEach(link => {
    //         if (link.getAttribute('data-section') === activeId) {
    //           link.classList.add('bg-brand-accent/10', 'text-brand-accent');
    //           link.classList.remove('text-gray-400');
    //         } else {
    //           link.classList.remove('bg-brand-accent/10', 'text-brand-accent');
    //           link.classList.add('text-gray-400');
    //         }
    //       });
    //     }
    //   });
    // }, observerOptions);

    // sections.forEach(section => sectionObserver.observe(section));


    // /* ========================================================
    //    6. DYNAMIC PROJECTS GRID FILTRATION
    //    ======================================================== */
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // const projectCards = document.querySelectorAll('.project-card');

    // filterButtons.forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     // Reset buttons classes
    //     filterButtons.forEach(b => {
    //       b.className = "filter-btn px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10";
    //     });
        
    //     // Highlight active btn
    //     btn.className = "filter-btn active px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-brand-accent text-brand-black shadow-lg shadow-brand-accent/20";

    //     const filterValue = btn.getAttribute('data-filter');

    //     projectCards.forEach(card => {
    //       const category = card.getAttribute('data-category');
          
    //       if (filterValue === 'all' || category === filterValue) {
    //         card.style.display = 'flex';
    //         // Trigger quick entry animation
    //         card.classList.add('scale-100', 'opacity-100');
    //       } else {
    //         card.style.display = 'none';
    //       }
    //     });
    //   });
    // });


    // /* ========================================================
    //    7. 3D CARD TILT EXPERIENCE (Mouse Tracking Physics)
    //    ======================================================== */
    // const tiltCards = document.querySelectorAll('.tilt-card');

    // tiltCards.forEach(card => {
    //   card.addEventListener('mousemove', (e) => {
    //     const rect = card.getBoundingClientRect();
    //     const x = e.clientX - rect.left; // x position inside element
    //     const y = e.clientY - rect.top;  // y position inside element

    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;

    //     // Calculate pitch (rotY) & yaw (rotX) values
    //     const rotY = ((x - centerX) / centerX) * 8;  // limit tilt factor ranges to 8deg
    //     const rotX = ((centerY - y) / centerY) * 8;

    //     card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    //     card.style.boxShadow = `0 15px 35px rgba(16, 185, 129, 0.15)`;
    //   });

    //   card.addEventListener('mouseleave', () => {
    //     // Reset card physics elements smoothly
    //     card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    //     card.style.boxShadow = `none`;
    //   });
    // });


    // /* ========================================================
    //    8. COUNTER PROGRESS COUNTER (Visual Animation)
    //    ======================================================== */
    // const countConfigs = [
    //   { id: 'counterExperience', target: 5 },
    //   { id: 'counterProjects', target: 24 },
    //   { id: 'counterCoffee', target: 350 }
    // ];

    // function animateCounters() {
    //   countConfigs.forEach(conf => {
    //     const el = document.getElementById(conf.id);
    //     let current = 0;
    //     const speed = conf.target > 100 ? 5 : 40; // Step timer speed variables
        
    //     const timer = setInterval(() => {
    //       current += Math.ceil(conf.target / 50);
    //       if (current >= conf.target) {
    //         el.textContent = conf.target + "+";
    //         clearInterval(timer);
    //       } else {
    //         el.textContent = current + "+";
    //       }
    //     }, speed);
    //   });
    // }

    // // Fire Counters when About portion triggers viewport
    // let countersFired = false;
    // const aboutSection = document.getElementById('about');

    // const counterObserver = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting && !countersFired) {
    //       countersFired = true;
    //       animateCounters();
          
    //       // Animate skill progress bars on entry
    //       const skillBars = document.querySelectorAll('.skill-bar');
    //       skillBars.forEach(bar => {
    //         const targetWidth = bar.getAttribute('data-width');
    //         bar.style.width = targetWidth;
    //       });
    //     }
    //   });
    // }, { threshold: 0.1 });

    // counterObserver.observe(aboutSection);


    // /* ========================================================
    //    9. CONTACT FORM SUBMISSION WITH BANNER NOTIFICATION
    //    ======================================================== */
    // function handleFormSubmit() {
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const subject = document.getElementById('subject').value;
    //   const message = document.getElementById('message').value;

    //   // Log to show user their inputs in active Dev Console for learning!
    //   console.log("=== Active Form Submission Simulated ===");
    //   console.log(`Name: ${name}`);
    //   console.log(`Email: ${email}`);
    //   console.log(`Subject: ${subject}`);
    //   console.log(`Message: ${message}`);

    //   // Visual Alert Feedback Banner
    //   const successBanner = document.getElementById('formSuccessAlert');
    //   successBanner.classList.remove('hidden');

    //   // Reset fields
    //   document.getElementById('contactForm').reset();

    //   // Audio validation success tone
    //   playSynthNote(523.25, 0.15); // C5
    //   setTimeout(() => playSynthNote(659.25, 0.25), 150); // E5

    //   // Hide success banner after 6 seconds
    //   setTimeout(() => {
    //     successBanner.classList.add('hidden');
    //   }, 6000);
    // }


    // /* ========================================================
    //    10. MOBILE HAMBURGER MENU DRAWER TOGGLE
    //    ======================================================== */
    // const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    // const mobileMenu = document.getElementById('mobileMenu');
    // const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // mobileMenuBtn.addEventListener('click', () => {
    //   mobileMenu.classList.toggle('hidden');
    //   const isOpen = !mobileMenu.classList.contains('hidden');
    //   mobileMenuBtn.innerHTML = isOpen ? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
    // });

    // mobileNavLinks.forEach(link => {
    //   link.addEventListener('click', () => {
    //     mobileMenu.classList.add('hidden');
    //     mobileMenuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    //   });
    // });


    // /* ========================================================
    //    11. GLASS HEADER GLOW SCROLL TRANSITIONS
    //    ======================================================== */
    // const mainHeader = document.getElementById('mainHeader');
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 50) {
    //     mainHeader.classList.add('pt-2');
    //   } else {
    //     mainHeader.classList.remove('pt-2');
    //   }
    // });
    // const labBlur = document.getElementById('labBlur');
    // const labOpacity = document.getElementById('labOpacity');
    // const labRadius = document.getElementById('labRadius');
    // const labTargetCard = document.getElementById('labTargetCard');
    // const labBlurVal = document.getElementById('labBlurVal');
    // const labOpacityVal = document.getElementById('labOpacityVal');
    // const labRadiusVal = document.getElementById('labRadiusVal');
    // let currentLabAccent = '#10B981';

    // function updateLab() {
    //   const blur = labBlur.value;
    //   const opacity = (labOpacity.value / 100).toFixed(2);
    //   const radius = labRadius.value;

    //   labBlurVal.textContent = `${blur}px`;
    //   labOpacityVal.textContent = opacity;
    //   labRadiusVal.textContent = `${radius}px`;

    //   labTargetCard.style.backdropFilter = `blur(${blur}px)`;
    //   labTargetCard.style.webkitBackdropFilter = `blur(${blur}px)`;
    //   labTargetCard.style.background = `rgba(17, 24, 39, ${opacity})`;
    //   labTargetCard.style.borderRadius = `${radius}px`;
    //   labTargetCard.style.borderColor = currentLabAccent;
    //   labTargetCard.style.boxShadow = `0 10px 30px ${currentLabAccent}33`;
    // }

    // [labBlur, labOpacity, labRadius].forEach(elem => elem.addEventListener('input', updateLab));

    // function setLabAccent(color) {
    //   currentLabAccent = color;
    //   document.getElementById('labIcon').style.color = color;
    //   updateLab();
    // }

    // function resetLab() {
    //   labBlur.value = 16;
    //   labOpacity.value = 70;
    //   labRadius.value = 24;
    //   currentLabAccent = '#10B981';
    //   document.getElementById('labIcon').style.color = '#10B981';
    //   updateLab();
    // }

    // function copyLabCSS() {
    //   const css = `background: rgba(17, 24, 39, ${(labOpacity.value / 100).toFixed(2)});\nbackdrop-filter: blur(${labBlur.value}px);\nborder-radius: ${labRadius.value}px;\nborder: 1px solid ${currentLabAccent};`;
      
    //   const tempTextArea = document.createElement('textarea');
    //   tempTextArea.value = css;
    //   document.body.appendChild(tempTextArea);
    //   tempTextArea.select();
    //   document.execCommand('copy');
    //   document.body.removeChild(tempTextArea);

    //   const btnText = document.getElementById('labCopyBtnText');
    //   btnText.textContent = "CSS Copied!";
    //   setTimeout(() => btnText.textContent = "Copy Generated CSS", 2000);
    // }

    // function filterProjects(cat) {
    //   const cards = document.querySelectorAll('.project-card');
    //   const btns = document.querySelectorAll('.project-filter-btn');

    //   btns.forEach(btn => {
    //     btn.classList.remove('bg-brand-accent', 'text-brand-black', 'font-bold');
    //     btn.classList.add('text-gray-400');
    //   });
    //   event.target.classList.add('bg-brand-accent', 'text-brand-black', 'font-bold');
    //   event.target.classList.remove('text-gray-400');

    //   cards.forEach(card => {
    //     if (cat === 'all' || card.dataset.category === cat) {
    //       card.style.display = 'flex';
    //     } else {
    //       card.style.display = 'none';
    //     }
    //   });
    // }
     const countConfigs = [
      { id: 'counterExperience', target: 5 },
      { id: 'counterProjects', target: 24 },
      { id: 'counterCoffee', target: 350 }
    ];

    function animateCounters() {
      countConfigs.forEach(conf => {
        const el = document.getElementById(conf.id);
        let current = 0;
        const speed = conf.target > 100 ? 5 : 40; // Step timer speed variables
        
        const timer = setInterval(() => {
          current += Math.ceil(conf.target / 50);
          if (current >= conf.target) {
            el.textContent = conf.target + "+";
            clearInterval(timer);
          } else {
            el.textContent = current + "+";
          }
        }, speed);
      });
    }

    // Fire Counters when About portion triggers viewport
    let countersFired = false;
    const aboutSection = document.getElementById('about');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersFired) {
          countersFired = true;
          animateCounters();
          
          // Animate skill progress bars on entry
          const skillBars = document.querySelectorAll('.skill-bar');
          skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
          });
        }
      });
    }, { threshold: 0.6 });

    counterObserver.observe(aboutSection);
    /* ========================================================
       7. 3D CARD TILT EXPERIENCE (Mouse Tracking Physics)
       ======================================================== */
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position inside element
        const y = e.clientY - rect.top;  // y position inside element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate pitch (rotY) & yaw (rotX) values
        const rotY = ((x - centerX) / centerX) * 10;  // limit tilt factor ranges to 8deg
        const rotX = ((centerY - y) / centerY) * 10;

        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.boxShadow = `0 15px 35px rgba(16, 185, 129, 0.15)`;
      });

      card.addEventListener('mouseleave', () => {
        // Reset card physics elements smoothly
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.boxShadow = `none`;
      });
    });
/* ========================================================
       2. TYPING ROTATION TIMELINE ANIMATION (Vanilla JS)
       ======================================================== */
    const typingTarget = document.getElementById('typingTarget');
    const strings = ["Applications", "CSS Architectures", "Modern Solutions", "Web Experiences"];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        typingTarget.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Deletes quicker
      } else {
        typingTarget.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 120; // Natural writing speed
      }

      if (!isDeleting && charIndex === currentString.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typingSpeed = 500; // Brief delay before typing next word
      }

      setTimeout(typeEffect, typingSpeed);
    }
    // Fire Typing Script
    typeEffect();