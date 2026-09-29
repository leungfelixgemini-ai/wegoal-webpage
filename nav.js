(function () {
  const navHTML = `
  <!-- Navbar -->
  <nav class="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-xl bg-[#020617]/70 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Back to Home Button (Subpages only) -->
        <div id="nav-back-home" class="hidden flex-shrink-0">
          <a href="index.html" class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg">
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </a>
        </div>

        <!-- Logo -->
        <div class="flex-shrink-0 cursor-pointer" id="nav-logo-container">
          <a href="index.html" class="flex items-center gap-3">
            <img src="logo/logo_black_cut.jpeg" alt="" class="h-9 w-auto rounded-lg shadow-sm">
            <span class="text-2xl font-extrabold text-white tracking-tight">We<span
                class="text-primary">Goal</span></span>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="features.html" data-i18n="nav_features"
              class="nav-link text-text_secondary hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">核心功能</a>
            <a href="partners.html" data-i18n="nav_partners"
              class="nav-link text-text_secondary hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">企業合作</a>
            <a href="pricing.html" data-i18n="nav_pricing"
              class="nav-link text-text_secondary hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">定價</a>
            <a href="about.html" data-i18n="nav_about"
              class="nav-link text-text_secondary hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">關於我們</a>
          </div>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-5">
          <a href="https://www.instagram.com/wegoal_official/?utm_source=ig_web_button_share_sheet" target="_blank"
            class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://www.threads.com/@wegoal_official?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
            class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
            </svg>
          </a>
          <div id="desktop-auth-container" class="flex items-center gap-5">
            <a href="login.html" data-i18n="nav_login" class="text-white hover:text-primary font-semibold transition-colors duration-300 text-sm">
              登入
            </a>
            <a href="login.html?tab=register" data-i18n="nav_register" class="bg-primary text-white font-semibold px-6 py-2.5 rounded-full hover:-translate-y-0.5 glow-primary-hover transition-all duration-300 text-sm inline-block whitespace-nowrap">
              註冊
            </a>
          </div>
          
          <!-- Language Switcher (Desktop) -->
          <div class="relative group cursor-pointer ml-2">
            <div class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors duration-300 text-gray-400 hover:text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="absolute right-0 mt-2 w-32 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden border border-slate-700 z-50">
              <button onclick="I18N.setLanguage('zh')" class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">繁體中文</button>
              <button onclick="I18N.setLanguage('en')" class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">English</button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button type="button" id="mobile-menu-btn"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    

    <!-- Mobile Menu Container (hidden by default) -->
    <div class="hidden md:hidden bg-[#020617]/95 border-t border-slate-800/50 backdrop-blur-xl absolute w-full top-20 left-0 shadow-2xl" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="features.html" data-i18n="nav_features" class="nav-link text-text_secondary hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">核心功能</a>
        <a href="partners.html" data-i18n="nav_partners" class="nav-link text-text_secondary hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">企業合作</a>
        <a href="pricing.html" data-i18n="nav_pricing" class="nav-link text-text_secondary hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">定價</a>
        <a href="about.html" data-i18n="nav_about" class="nav-link text-text_secondary hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">關於我們</a>
      </div>
      <div class="pt-4 pb-4 border-t border-slate-800/50">
        <div class="flex items-center justify-center gap-6 px-5 mb-4">
          <a href="https://www.instagram.com/wegoal_official/?utm_source=ig_web_button_share_sheet" target="_blank" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.threads.com/@wegoal_official?igshid=NTc4MTIwNjQ2YQ==" target="_blank" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
          </a>
        </div>
        <div class="px-5 flex flex-col gap-3" id="mobile-auth-container">
          <a href="login.html" data-i18n="nav_login" class="w-full text-center text-white border border-slate-700 bg-slate-800/50 hover:bg-slate-700 font-semibold px-6 py-2.5 rounded-xl transition-colors duration-300 text-sm">
            登入
          </a>
          <a href="login.html?tab=register" data-i18n="nav_register" class="w-full text-center bg-primary text-white font-semibold px-6 py-2.5 rounded-xl hover:-translate-y-0.5 glow-primary-hover transition-all duration-300 text-sm">
            註冊
          </a>
        </div>
        <!-- Language Switcher (Mobile) -->
        <div class="px-5 mt-6 mb-2 flex justify-center items-center gap-4">
          <button onclick="I18N.setLanguage('zh')" class="text-sm font-medium text-gray-400 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors">繁體中文</button>
          <button onclick="I18N.setLanguage('en')" class="text-sm font-medium text-gray-400 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors">English</button>
        </div>
      </div>
    </div>
  </nav>
  `;

  document.write(navHTML);

  // Highlight active link after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // For desktop links
      if (href === currentPath && !link.classList.contains('block')) {
        link.className = 'nav-link text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-primary';
      }
      // For mobile links
      else if (href === currentPath && link.classList.contains('block')) {
        link.className = 'nav-link text-white bg-slate-800 block px-3 py-2 rounded-md text-base font-medium';
      }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Show "Back to Home" button if not on index.html
    const backHomeBtn = document.getElementById('nav-back-home');
    const navLogo = document.getElementById('nav-logo-container');
    
    if (backHomeBtn) {
      const isIndex = currentPath === 'index.html' || currentPath === '' || currentPath === 'Webpage';
      if (!isIndex) {
        backHomeBtn.classList.remove('hidden');
        if (navLogo) {
          navLogo.classList.add('ml-4');
        }
      }
    }

    // --- Dynamic Auth State Handling ---
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token) {
      let userName = 'User';
      let userAvatar = '<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
      
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.name) userName = user.name;
          if (user.avatar) userAvatar = `<img src="${user.avatar}" alt="${userName}" class="w-6 h-6 rounded-full object-cover border border-slate-700">`;
        } catch(e) {}
      }

      // 1. Update Desktop UI
      const desktopAuthContainer = document.getElementById('desktop-auth-container');
      if (desktopAuthContainer) {
        desktopAuthContainer.innerHTML = `
          <div class="relative group cursor-pointer h-10 flex items-center">
            <div class="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
              ${userAvatar}
              <span class="text-sm font-semibold max-w-[100px] truncate">${userName}</span>
            </div>
            <div class="absolute top-full right-0 mt-2 w-36 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden border border-slate-700 z-50">
              <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors" data-i18n="nav_profile">會員中心</a>
              <button id="btn-logout-desktop" class="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors" data-i18n="nav_logout">登出</button>
            </div>
          </div>
        `;
      }

      // 2. Update Mobile UI
      const mobileAuthContainer = document.getElementById('mobile-auth-container');
      if (mobileAuthContainer) {
        mobileAuthContainer.innerHTML = `
          <div class="flex items-center gap-3 px-2 py-3 mb-2 border-b border-slate-700/50">
             ${userAvatar}
             <span class="text-white font-semibold truncate">${userName}</span>
          </div>
          <a href="#" class="w-full text-center text-white border border-slate-700 bg-slate-800/50 hover:bg-slate-700 font-semibold px-6 py-2.5 rounded-xl transition-colors duration-300 text-sm">會員中心</a>
          <button id="btn-logout-mobile" class="w-full text-center text-red-400 border border-red-900/30 bg-red-900/10 hover:bg-red-900/20 font-semibold px-6 py-2.5 rounded-xl transition-colors duration-300 text-sm">登出</button>
        `;
      }

      // 3. Logout Actions
      const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
      };
      
      document.getElementById('btn-logout-desktop')?.addEventListener('click', handleLogout);
      document.getElementById('btn-logout-mobile')?.addEventListener('click', handleLogout);
    }
  });
})();
