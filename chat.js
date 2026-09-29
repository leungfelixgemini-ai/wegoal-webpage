document.addEventListener('DOMContentLoaded', function () {
  let lang = localStorage.getItem('wegoal_lang') || 'zh';

  const faqDataZh = {
    "有關WeGoal": [
      { q: "WeGoal 與市面上其他習慣追蹤 App 有什麼不同？", a: "WeGoal 打破了單機紀錄的孤島效應。我們不僅提供個人數據追蹤，更透過獨創的「圈子 (Circles)」與「挑戰 (Challenges)」機制，將你的線上目標無縫連結至線下的實體場館（如攀岩館、生態園區）。你的每一次堅持，都能在真實世界獲得具體的回饋與社群支持。" },
      { q: "我需要付費才能使用 WeGoal 嗎？", a: "WeGoal 提供功能完善的免費基礎版本，讓每位用戶都能立即開始建立習慣與加入圈子。對於需要進階數據圖表分析或渴望發起專屬大型挑戰的用戶，我們也提供進階訂閱選項以滿足深度需求。" },
      { q: "WeGoal 支援哪些裝置？", a: "我們提供 iOS 與 Android 雙平台的原生應用程式，確保您在各種智慧型手機上都能享有流暢、深色極簡風格的最佳操作體驗。" }
    ],
    "核心功能": [
      { q: "什麼是「習慣連結 (Linking System)」機制？", a: "這是 WeGoal 的核心專利邏輯。您可以將單一的日常習慣，同時貢獻給多個不同的目標或圈子。例如，一次「跑步 5 公里」的紀錄，可以同時為您的「個人減脂目標」以及「好友共跑圈」累積進度，讓一次努力發揮雙倍價值。" },
      { q: "「挑戰 (Challenges)」和一般的「共同習慣」有什麼差異？", a: "「挑戰」具備明確的短期目標性與競爭性。例如「Team Run 100km（團隊 100 公里衝刺）」即屬於挑戰範疇，它有特定的達成期限與特殊獎勵結算方式，能快速激發團隊爆發力；而「共同習慣」則著重於長期的日常打卡與穩定陪伴。" },
      { q: "我可以和朋友一起建立私密的專屬圈子嗎？", a: "絕對可以。您可以自由創建僅限邀請加入的私密圈子，與核心好友、同事或運動夥伴共同設定專屬的習慣目標，打造高黏著度的互相監督環境。" }
    ],
    "企業合作": [
      { q: "成為合作場館能為我的生意帶來什麼具體幫助？", a: "透過我們強大的 O2O (線上引流線下) 引擎，WeGoal 會將高活躍度的目標導向用戶精準引流至您的場館。透過結合您場館的專屬打卡挑戰，不僅能有效獲取新客，更能大幅提升現有顧客的回訪率與忠誠度。" },
      { q: "場館需要準備昂貴的硬體設備來核銷用戶進度嗎？", a: "不需要。我們為 SME 合作夥伴提供極度輕量化的核銷方案，僅需透過專屬的 QR Code 掃描或我們提供的商家端網頁介面，即可快速完成用戶打卡與獎勵發放，實現無痛數位轉型。" },
      { q: "我們可以舉辦專屬於我們品牌的挑戰賽嗎？", a: "完全可以。合作場館可以客製化專屬的品牌挑戰（如：連續報到 7 天解鎖場館優惠），將您的行銷活動遊戲化，深化與 WeGoal 社群的互動。" }
    ],
    "定價": [
      { q: "企業合作方案的收費模式是如何運作的？", a: "我們提供彈性的訂閱制與分潤方案，專為不同規模的中小型企業 (SME) 量身打造。您可以依據場館流量需求與行銷預算，選擇最合適的方案級別，讓行銷投資獲得清晰的數據回報。" },
      { q: "一般用戶的進階訂閱 (Premium) 包含哪些專屬功能？", a: "進階用戶將解鎖無限數量的圈子創建權限、更深度的個人化成長軌跡圖表，以及參加特定高階挑戰與獲取獨家實體場館優惠的優先資格。" },
      { q: "企業如果中途改變行銷策略，可以更改訂閱方案嗎？", a: "可以。我們的企業方案具備高度的擴展性，您可以隨時在後台升級以應對活動旺季，或調整您的訂閱層級，確保資源做最有效的運用。" }
    ],
    "關於我們": [
      { q: "WeGoal 的創立初衷是什麼？", a: "我們深信「目標不該只停留在螢幕裡」。WeGoal 誕生於香港，由一群熱愛科技與運動的開發團隊打造。我們致力於建構一個打通虛擬目標與實體場景的生態系統，讓每一個正向的改變都能在現實生活中被看見與獎勵。" },
      { q: "WeGoal 如何保護用戶的數據隱私？", a: "數據安全是我們的首要承諾。所有的習慣追蹤資料皆受到嚴格加密。我們僅會在您明確授權參與特定場館挑戰時，才會與該實體場館共享極小化的必要打卡數據，絕不濫用您的個人隱私。" },
      { q: "如何聯絡 WeGoal 團隊進行深度合作或媒體採訪？", a: "我們隨時歡迎各種跨界合作的可能！您可以透過網站頁尾的「聯絡我們」表單、官方 Email 或我們的 LinkedIn 專頁直接與核心營運團隊取得聯繫，我們會在 24 小時內回覆您。" }
    ]
  };

  const faqDataEn = {
    "About WeGoal": [
      { q: "How is WeGoal different from other habit tracking apps?", a: "WeGoal breaks the island effect of single-player tracking. We not only provide personal data tracking, but seamlessly connect your online goals to physical venues offline (like climbing gyms or eco-parks) through our unique 'Circles' and 'Challenges' mechanism. Every time you persist, you get concrete feedback and community support in the real world." },
      { q: "Do I need to pay to use WeGoal?", a: "WeGoal provides a fully functional free basic version. For users who need advanced data chart analysis or want to launch exclusive large-scale challenges, we also offer premium subscription options." },
      { q: "What devices does WeGoal support?", a: "We provide native apps for both iOS and Android platforms, ensuring you have the best operating experience with a smooth, dark minimalist style on various smartphones." }
    ],
    "Features": [
      { q: "What is the 'Habit Linking System'?", a: "This is WeGoal's core patented logic. You can contribute a single daily habit to multiple different goals or circles at the same time. For example, a '5km run' record can simultaneously accumulate progress for your 'Personal Fat Loss Goal' and the 'Friends Running Circle', doubling the value of a single effort." },
      { q: "What is the difference between 'Challenges' and 'Shared Habits'?", a: "Challenges have clear short-term goal orientation and competitiveness. For example, 'Team Run 100km' belongs to the challenge category. Shared habits focus on long-term daily check-ins and stable companionship." },
      { q: "Can I create a private circle with friends?", a: "Absolutely. You can freely create invite-only private circles to set exclusive habit goals with close friends, colleagues, or sports partners, creating a highly sticky mutual supervision environment." }
    ],
    "Partners": [
      { q: "How can becoming a partner venue help my business?", a: "Through our powerful O2O engine, WeGoal will accurately drive highly active goal-oriented users to your venue. By combining exclusive check-in challenges at your venue, you can effectively acquire new customers and significantly increase the return rate of existing customers." },
      { q: "Do venues need to prepare expensive hardware equipment?", a: "No. We provide SME partners with an extremely lightweight verification solution. You only need to scan a dedicated QR Code or use our merchant web interface to quickly complete user check-ins and reward distribution." },
      { q: "Can we host challenges exclusive to our brand?", a: "Yes. Partner venues can customize exclusive brand challenges to gamify your marketing activities and deepen interaction with the WeGoal community." }
    ],
    "Pricing": [
      { q: "How does the pricing model for enterprise partnerships work?", a: "We offer flexible subscription and profit-sharing plans tailored for SMEs of different sizes. You can choose the most suitable plan level based on your venue traffic needs and marketing budget." },
      { q: "What exclusive features does the Premium subscription include?", a: "Premium users unlock unlimited circle creation, deeper personalized growth trajectory charts, and priority eligibility to participate in specific high-level challenges." },
      { q: "Can an enterprise change its subscription plan?", a: "Yes. Our enterprise plans are highly scalable. You can upgrade in the background at any time to cope with peak event seasons, or adjust your subscription level to ensure the most effective use of resources." }
    ],
    "About Us": [
      { q: "What was the original intention behind WeGoal?", a: "We firmly believe 'goals shouldn't just stay on the screen.' WeGoal was born in Hong Kong, created by a team of developers who love tech and sports. We are committed to building an ecosystem that connects virtual goals with physical scenes." },
      { q: "How does WeGoal protect user data privacy?", a: "Data security is our top commitment. All habit tracking data is strictly encrypted. We will only share the minimally necessary check-in data with a physical venue when you explicitly authorize participation in their specific challenge." },
      { q: "How can I contact the WeGoal team for cooperation?", a: "We welcome all cross-border cooperation! You can contact the core operating team directly through the 'Contact Us' form in the website footer, official email, or our LinkedIn page. We will reply within 24 hours." }
    ]
  };

  let faqData = lang === 'en' ? faqDataEn : faqDataZh;

  const uiText = {
    zh: {
      assistant: "WeGoal 客服助理",
      greeting: "你好！我是 WeGoal 客服助理。請選擇您想瞭解的常見問題類別：",
      placeholder: "輸入您的問題...",
      back: "返回主選單",
      selectCat: "請選擇類別：",
      categoryIntro: (cat) => `有關 **${cat}** 的常見問題如下：`,
      waitMsg: "客服人員稍後將會盡快回覆您，請耐心等候！"
    },
    en: {
      assistant: "WeGoal Support",
      greeting: "Hello! I am the WeGoal Support Assistant. Please select an FAQ category:",
      placeholder: "Type your question...",
      back: "Back to Menu",
      selectCat: "Please select a category:",
      categoryIntro: (cat) => `Here are the FAQs for **${cat}**:`,
      waitMsg: "Our support staff will reply to you as soon as possible, please wait patiently!"
    }
  };

  let t = uiText[lang];

  const chatWidgetHTML = `
  <style>
    #chat-messages::-webkit-scrollbar,
    #faq-chips::-webkit-scrollbar {
      width: 5px;
    }
    #chat-messages::-webkit-scrollbar-track,
    #faq-chips::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.5);
    }
    #chat-messages::-webkit-scrollbar-thumb,
    #faq-chips::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.4);
      border-radius: 10px;
    }
    #chat-messages::-webkit-scrollbar-thumb:hover,
    #faq-chips::-webkit-scrollbar-thumb:hover {
      background: rgba(59, 130, 246, 0.7);
    }
    /* For Firefox */
    #chat-messages, #faq-chips {
      scrollbar-width: thin;
      scrollbar-color: rgba(59, 130, 246, 0.4) rgba(15, 23, 42, 0.5);
    }
  </style>

  <!-- Floating Chat Widget -->
  <div id="chat-widget" class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    <!-- Chat Window (Hidden by default) -->
    <div id="chat-window" class="w-80 sm:w-96 h-[500px] bg-surface border border-slate-800/60 shadow-2xl rounded-2xl overflow-hidden mb-4 transition-all duration-300 opacity-0 pointer-events-none translate-y-4 flex flex-col text-left">
      <!-- Header -->
      <div class="bg-primary/10 border-b border-primary/20 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span class="font-bold text-white text-base">${t.assistant}</span>
        </div>
        <button id="close-chat" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      
      <!-- Messages Area -->
      <div id="chat-messages" class="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scroll-smooth bg-surface">
        <!-- Bot Initial Message -->
        <div class="flex items-start gap-2 max-w-[85%]">
          <div class="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center border border-primary/30 overflow-hidden">
            <img src="logo/WeGoal support.png" class="w-full h-full object-cover" alt="Support">
          </div>
          <div class="bg-slate-800/80 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-text_primary shadow-sm border border-slate-700/50">
            ${t.greeting}
          </div>
        </div>
      </div>
      
      <!-- FAQ Suggestions Area -->
      <div id="faq-chips" class="px-4 py-2 flex flex-wrap gap-2 border-t border-slate-800/40 bg-slate-900/30 max-h-[160px] overflow-y-auto flex-shrink-0">
        <!-- Chips will be rendered here -->
      </div>

      <!-- Input Area -->
      <div class="p-3 border-t border-slate-800/60 bg-surface flex-shrink-0">
        <div class="relative">
          <input type="text" id="chat-input" placeholder="${t.placeholder}" class="w-full bg-slate-900/80 border border-slate-700 text-white text-sm rounded-xl pl-3 pr-10 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
          <button id="send-chat" class="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Button -->
    <button id="chat-toggle" class="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 glow-primary-hover relative pointer-events-auto">
      <svg id="chat-icon-msg" class="w-6 h-6 absolute transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      <svg id="chat-icon-close" class="w-6 h-6 absolute transition-transform duration-300 scale-0 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

  const chatToggle = document.getElementById('chat-toggle');
  const closeChat = document.getElementById('close-chat');
  const chatWindow = document.getElementById('chat-window');
  const iconMsg = document.getElementById('chat-icon-msg');
  const iconClose = document.getElementById('chat-icon-close');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-chat');
  const messagesArea = document.getElementById('chat-messages');
  const faqChipsArea = document.getElementById('faq-chips');

  let isOpen = false;
  let currentCategory = null;

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      chatWindow.classList.add('pointer-events-auto');
      iconMsg.classList.add('scale-0', 'opacity-0');
      iconClose.classList.remove('scale-0', 'opacity-0');
      setTimeout(() => chatInput.focus(), 300);
      renderCategories();
    } else {
      chatWindow.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      chatWindow.classList.remove('pointer-events-auto');
      iconMsg.classList.remove('scale-0', 'opacity-0');
      iconClose.classList.add('scale-0', 'opacity-0');
    }
  }

  chatToggle.addEventListener('click', toggleChat);
  closeChat.addEventListener('click', toggleChat);

  function renderCategories() {
    currentCategory = null;
    faqChipsArea.innerHTML = '';
    Object.keys(faqData).forEach(category => {
      const btn = document.createElement('button');
      btn.className = 'faq-btn text-xs bg-slate-800 border border-slate-700 hover:border-primary/50 hover:bg-slate-700 text-gray-300 px-3 py-1.5 rounded-full transition-colors text-left';
      btn.innerText = category;
      btn.onclick = () => selectCategory(category);
      faqChipsArea.appendChild(btn);
    });
  }

  function renderQuestions(category) {
    currentCategory = category;
    faqChipsArea.innerHTML = '';
    faqData[category].forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'faq-btn text-xs bg-slate-800 border border-slate-700 hover:border-primary/50 hover:bg-slate-700 text-gray-300 px-3 py-1.5 rounded-full transition-colors text-left';
      btn.innerText = item.q;
      btn.onclick = () => selectQuestion(item);
      faqChipsArea.appendChild(btn);
    });

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'faq-btn text-xs bg-primary/20 border border-primary/30 hover:bg-primary/30 text-primary px-3 py-1.5 rounded-full transition-colors text-left flex items-center gap-1';
    backBtn.innerHTML = `
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      ${t.back}
    `;
    backBtn.onclick = () => {
      addUserMessage_Silent(t.back);
      addBotMessage(t.selectCat);
      renderCategories();
    };
    faqChipsArea.appendChild(backBtn);
  }

  function selectCategory(category) {
    addUserMessage_Silent(category);
    addBotMessage(t.categoryIntro(category));
    renderQuestions(category);
  }

  function selectQuestion(item) {
    addUserMessage_Silent(item.q);
    addBotMessage(item.a);
    // Keep showing questions in the same category
    renderQuestions(currentCategory);
  }

  function addUserMessage_Silent(text) {
    const msgHTML = `
      <div class="flex items-start gap-2 max-w-[85%] self-end flex-row-reverse mb-1">
        <div class="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm shadow-sm">
          ${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
        </div>
      </div>
    `;
    messagesArea.insertAdjacentHTML('beforeend', msgHTML);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function addUserMessage(text) {
    if (!text.trim()) return;
    addUserMessage_Silent(text);
    chatInput.value = '';

    // Simulate auto-reply for manual input
    setTimeout(() => {
      addBotMessage(t.waitMsg);
    }, 800);
  }

  function addBotMessage(text) {
    const msgHTML = `
      <div class="flex items-start gap-2 max-w-[85%] mb-1">
        <div class="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center border border-primary/30 overflow-hidden">
          <img src="logo/WeGoal support.png" class="w-full h-full object-cover" alt="Support">
        </div>
        <div class="bg-slate-800/80 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-text_primary shadow-sm border border-slate-700/50">
          ${text}
        </div>
      </div>
    `;
    messagesArea.insertAdjacentHTML('beforeend', msgHTML);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  sendBtn.addEventListener('click', () => addUserMessage(chatInput.value));
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addUserMessage(chatInput.value);
  });

  window.addEventListener('languageChanged', (e) => {
    lang = e.detail.lang;
    faqData = lang === 'en' ? faqDataEn : faqDataZh;
    t = uiText[lang];

    // Update static UI
    const assistantTitle = document.querySelector('#chat-window .font-bold.text-white.text-base');
    if (assistantTitle) assistantTitle.textContent = t.assistant;
    if (chatInput) chatInput.placeholder = t.placeholder;

    // Reset chat state
    messagesArea.innerHTML = '';
    addBotMessage(t.greeting);
    currentCategory = null;
    renderCategories();
  });
});
