document.addEventListener('DOMContentLoaded', function () {
  const footerHTML = `
  <!-- Footer -->
  <footer class="border-t border-slate-800/50 bg-background pt-16 pb-8 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

        <!-- Col 1 -->
        <div class="col-span-1">
          <a href="index.html" class="text-2xl font-extrabold text-white tracking-tight inline-block mb-4">We<span
              class="text-primary">Goal</span></a>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            Let's Go. We Goal!
          </p>
          <div class="flex flex-col gap-4">
            <a href="#" class="group relative block w-40 transition-all duration-300">
              <img src="logo/app-store.png" alt="Download on App Store" 
                class="w-full h-auto transform transition-transform group-hover:scale-105">
            </a>
            <a href="#" class="group relative block w-40 transition-all duration-300">
              <img src="logo/google-play.png" alt="Get it on Google Play" 
                class="w-full h-auto transform transition-transform group-hover:scale-105">
            </a>
          </div>
        </div>

        <!-- Col 2 -->
        <div class="col-span-1">
          <h4 data-i18n="footer_nav_title" class="text-white font-semibold mb-6">網站導覽</h4>
          <ul class="space-y-4">
            <li><a href="about.html" data-i18n="footer_nav_about" class="text-sm text-gray-500 hover:text-primary transition-colors duration-300">關於 WeGoal</a></li>
            <li><a href="features.html" data-i18n="footer_nav_features" class="text-sm text-gray-500 hover:text-primary transition-colors duration-300">功能介紹</a></li>
            <li><a href="partners.html" data-i18n="footer_nav_partners" class="text-sm text-gray-500 hover:text-primary transition-colors duration-300">企業合作</a></li>
            <li><a href="pricing.html" data-i18n="footer_nav_pricing" class="text-sm text-gray-500 hover:text-primary transition-colors duration-300">定價</a></li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div class="col-span-1">
          <h4 data-i18n="footer_legal_title" class="text-white font-semibold mb-6">法律資訊</h4>
          <ul class="space-y-4">
            <li><a href="privacy.html" data-i18n="footer_legal_privacy" class="text-sm text-gray-500 hover:text-white transition-colors duration-300">隱私權政策</a></li>
            <li><a href="#" data-i18n="footer_legal_terms" class="text-sm text-gray-500 hover:text-white transition-colors duration-300">使用者條款</a></li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div class="col-span-1">
          <h4 data-i18n="footer_contact_title" class="text-white font-semibold mb-6">聯絡我們</h4>
          <ul class="space-y-4">
            <li><a href="https://www.instagram.com/wegoal_official/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                class="text-sm text-gray-500 hover:text-primary transition-colors duration-300 flex items-center gap-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd" />
                </svg>
                Instagram
              </a></li>
            <li><a href="https://www.threads.com/@wegoal_official?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
                class="text-sm text-gray-500 hover:text-primary transition-colors duration-300 flex items-center gap-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
                </svg>
                Threads
              </a></li>
            <li><a href="mailto:admin@wegoal-hk.com"
                class="text-sm text-gray-500 hover:text-primary transition-colors duration-300 flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
                admin@wegoal-hk.com
              </a></li>
          </ul>
        </div>

      </div>

      <!-- Copyright -->
      <div class="mt-16 pt-8 border-t border-slate-800/50 text-center">
        <p class="text-gray-500 text-sm">© 2026 WeGoal Limited. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
  if (typeof I18N !== 'undefined') {
    I18N.applyTranslations();
  }
});
