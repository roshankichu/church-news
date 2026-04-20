// ============================
// SABHA VARTHA — Church News
// Main Application JS
// ============================

// ---- Default Sample News ----
const defaultNews = [
  {
    id: 1,
    title: "ഈസ്റ്റർ ആഘോഷം — പ്രത്യേക ആരാധന 2025",
    titleEn: "Easter Celebration — Special Worship Service 2025",
    category: "Events",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=900&auto=format&fit=crop&q=80",
    summary: "ഈ വർഷത്തെ ഈസ്റ്റർ ആഘോഷം വളരെ പ്രത്യേകമായ ആരാധനകളോടെ ആഘോഷിക്കും. എല്ലാ സഭാംഗങ്ങളേയും ക്ഷണിക്കുന്നു.",
    content: "ഈ വർഷത്തെ ഈസ്റ്റർ ആഘോഷം വളരെ ഹൃദ്യമായ ആരാധനകളോടെ ആഘോഷിക്കാൻ ഞങ്ങൾ ഒരുങ്ങുന്നു. ഏപ്രിൽ 20-ന് രാവിലെ 6 മണിക്ക് പ്രഭാത ആരാധനയും, 10 മണിക്ക് ഗംഭീര ഈസ്റ്റർ ആരാധനയും ഉണ്ടായിരിക്കും. ഈ ദിവസം ക്രിസ്തുവിന്റെ പുനരുത്ഥാനം ആഘോഷിക്കാൻ എല്ലാ സഭ കുടുംബങ്ങളും ഒരുമിച്ചുകൂടും. ശിശുക്കൾക്കായി പ്രത്യേക ഈസ്റ്റർ ഡ്രാമ, ഗായകസംഘം, ഭക്ഷണ വിതരണം എന്നിവ ആസൂത്രണം ചെയ്തിട്ടുണ്ട്. ദൈവകൃപയാൽ ഈ ആഘോഷം ഏവർക്കും ആനന്ദദായകമാകട്ടെ.\n\n\"He is Risen! — ഹലലൂയ്യ!\""
  },
  {
    id: 2,
    title: "യുവജന ക്യാമ്പ് — ജൂൺ 2025",
    category: "Youth",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&auto=format&fit=crop&q=80",
    summary: "ജൂൺ 14-16 തീയതികളിൽ ബോഡി ഓഫ് ക്രൈസ്റ്റ് യൂത്ത് ക്യാമ്പ് നടക്കും. രജിസ്ട്രേഷൻ ആരംഭിച്ചു.",
    content: "ജൂൺ 14 മുതൽ 16 വരെ നടക്കുന്ന യുവജന ക്യാമ്പിൽ 13 മുതൽ 25 വയസ്സ് വരെ പ്രായമുള്ളവർക്ക് പങ്കെടുക്കാം. ആധ്യാത്മിക പഠനം, ആരാധന, ഗ്രൂപ്പ് ആക്ടിവിറ്റീസ്, ഔട്ട്‌ഡോർ ഗെയിംസ് എന്നിവ ഉണ്ടായിരിക്കും. രജിസ്ട്രേഷൻ ഫീ: ₹500. ചർച്ച് ഓഫീസിൽ ബന്ധപ്പെടുക."
  },
  {
    id: 3,
    title: "പ്രാർഥനാ ഉപവാസ ദിനം — ഏപ്രിൽ 25",
    category: "Prayer",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1502767089517-b7983f3eca50?w=700&auto=format&fit=crop&q=80",
    summary: "സഭ മുഴുവൻ ഒരുമിച്ചു പ്രാർഥിക്കാൻ പ്രത്യേക ഉപവാസ ദിനം — ഭൂമിക്ക് ഉണർവ്വ് ലഭിക്കട്ടെ!",
    content: "ഏപ്രിൽ 25-ന്, ഭൂമിക്ക് ഉണർവ്വ് ലഭിക്കേണ്ടതിന് സഭ ഒരുമിച്ചു ദൈവസന്നിധിൽ ഉപവസിക്കും. രാവിലെ 9 മണി മുതൽ 5 മണി വരെ ആരാധനയും ഇന്റർസഷൻ പ്രയറും ഉണ്ടായിരിക്കും. ഓരോ ഗ്രൂപ്പിനും അവരുടെ ടൈം സ്ലോട്ട് ഓഫീസിൽ നിന്ന് ലഭിക്കും."
  },
  {
    id: 4,
    title: "New Sunday School Building Inauguration",
    category: "Parish News",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&auto=format&fit=crop&q=80",
    summary: "The new Sunday School building will be inaugurated by the Bishop on May 5. All are welcome to join this blessed occasion.",
    content: "It is with great joy that we announce the inauguration of our new Sunday School building on May 5, 2025. The construction, funded entirely by the generous donations of our congregation members, has been completed with God's grace. The building features modern classrooms, a library, and activity rooms for children of all age groups.\n\nBishop Mar Thomas will preside over the inauguration ceremony beginning at 10:00 AM. A special thanksgiving service and lunch will follow. We thank every member who contributed to this project through prayers and financial support. May this building be a place where young souls grow in the knowledge and love of God."
  },
  {
    id: 5,
    title: "ദൈവ ഭവനത്തിൽ ആഴ്ചതോറും ബൈബിൾ പഠനം",
    category: "Announcement",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&auto=format&fit=crop&q=80",
    summary: "എല്ലാ ബുധനാഴ്ചയും വൈകിട്ട് 7 മണിക്ക് ബൈബിൾ പഠനം. ഏവരും ക്ഷണിക്കപ്പെടുന്നു.",
    content: "ആഴ്ചതോറുമുള്ള ബൈബിൾ പഠന ക്ലാസ്സ് ഇനി കൂടുതൽ ആഴത്തിൽ നടത്തും. ഓരോ ആഴ്ചയും ഒരു ബൈബിൾ ഭാഗം വിശദമായി പഠിക്കും. ചോദ്യോത്തര സെഷനും ഉണ്ടായിരിക്കും. ദൈവ വചനം ജീവിതത്തിൽ പ്രാവർത്തികമാക്കാൻ ഇത് സഹായകരമാകും."
  }
];

// ============================
// DATA MANAGEMENT
// ============================

function getNews() {
  try {
    const stored = localStorage.getItem('sabhaVarthaNews');
    return stored ? JSON.parse(stored) : [...defaultNews];
  } catch {
    return [...defaultNews];
  }
}

function saveNews(news) {
  localStorage.setItem('sabhaVarthaNews', JSON.stringify(news));
}

function initNews() {
  if (!localStorage.getItem('sabhaVarthaNews')) {
    saveNews(defaultNews);
  }
}

// ============================
// RENDER NEWS CARDS
// ============================

function renderNews() {
  const news = getNews();
  const grid = document.getElementById('newsGrid');

  if (!news.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-cross">✝</span>
        <p>No news yet. Login as admin to add news.</p>
      </div>`;
    return;
  }

  grid.innerHTML = news.map((item, idx) => `
    <div class="news-card" onclick="openNews(${item.id})" style="animation-delay:${idx * 0.1}s">
      <div class="card-img-wrap">
        <img
          class="card-img"
          src="${item.image || 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=700&auto=format&fit=crop&q=80'}"
          alt="${item.title}"
          onerror="this.src='https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=700&auto=format&fit=crop&q=80'"
        />
        <span class="card-category-badge">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
        <div class="card-meta">
          <span class="card-date">📅 ${item.date}</span>
          <span class="card-read-more">Read More →</span>
        </div>
      </div>
    </div>
  `).join('');

  updateTicker(news);
}

// ============================
// NEWS TICKER
// ============================

function updateTicker(news) {
  const ticker = document.getElementById('tickerContent');
  const headlines = news.map(n => `✝  ${n.title}  •  ${n.category}  `).join('   ');
  ticker.textContent = headlines + '   ' + headlines;
}

// ============================
// NEWS DETAIL OVERLAY
// ============================

function openNews(id) {
  const news = getNews();
  const item = news.find(n => n.id === id);
  if (!item) return;

  document.getElementById('detailImg').src = item.image || '';
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailCategory').textContent = item.category;
  document.getElementById('detailDate').textContent = '📅 ' + item.date;
  document.getElementById('detailContent').innerHTML = (item.content || '').replace(/\n/g, '<br>');

  const overlay = document.getElementById('newsOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNewsDetail() {
  const overlay = document.getElementById('newsOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closeNews(event) {
  if (event.target === document.getElementById('newsOverlay')) {
    closeNewsDetail();
  }
}

// ============================
// LOGIN
// ============================

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'church2025';

function openLogin() {
  document.getElementById('loginModal').classList.add('active');
  document.getElementById('loginError').textContent = '';
}

function closeLogin() {
  document.getElementById('loginModal').classList.remove('active');
}

function closeLoginOutside(event) {
  if (event.target === document.getElementById('loginModal')) closeLogin();
}

function doLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const err  = document.getElementById('loginError');

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    closeLogin();
    openAdminPanel();
    sessionStorage.setItem('sabhaAdmin', 'true');
  } else {
    err.textContent = '⚠️ Invalid username or password. Please try again.';
    document.getElementById('loginPass').value = '';
  }
}

// Allow Enter key in login
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('loginModal').classList.contains('active')) {
    doLogin();
  }
  if (e.key === 'Escape') {
    closeNewsDetail();
    closeLogin();
  }
});

// ============================
// ADMIN PANEL
// ============================

function openAdminPanel() {
  document.getElementById('adminPanel').classList.add('open');
  renderAdminList();
}

function closeAdminPanel() {
  document.getElementById('adminPanel').classList.remove('open');
}

function doLogout() {
  sessionStorage.removeItem('sabhaAdmin');
  closeAdminPanel();
}

function renderAdminList() {
  const news = getNews();
  const list = document.getElementById('adminNewsList');

  if (!news.length) {
    list.innerHTML = '<p style="color:var(--gray-mid);font-size:.9rem;">No news articles yet.</p>';
    return;
  }

  list.innerHTML = news.map(item => `
    <div class="admin-news-item">
      <img
        class="admin-news-thumb"
        src="${item.image || 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=200'}"
        alt=""
        onerror="this.src='https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=200'"
      />
      <div class="admin-news-info">
        <div class="admin-news-title">${item.title}</div>
        <div class="admin-news-cat">${item.category} • ${item.date}</div>
      </div>
      <button class="admin-delete-btn" onclick="deleteNews(${item.id})">🗑 Delete</button>
    </div>
  `).join('');
}

function addNews() {
  const title    = document.getElementById('newTitle').value.trim();
  const category = document.getElementById('newCategory').value;
  const image    = document.getElementById('newImage').value.trim();
  const summary  = document.getElementById('newSummary').value.trim();
  const content  = document.getElementById('newContent').value.trim();

  if (!title || !summary || !content) {
    alert('Please fill in Title, Summary, and Content fields.');
    return;
  }

  const news = getNews();
  const newId = Date.now();
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  news.unshift({
    id: newId,
    title,
    category,
    date: today,
    image: image || 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=900&auto=format&fit=crop&q=80',
    summary,
    content
  });

  saveNews(news);
  renderNews();
  renderAdminList();

  // Clear form
  document.getElementById('newTitle').value = '';
  document.getElementById('newImage').value = '';
  document.getElementById('newSummary').value = '';
  document.getElementById('newContent').value = '';

  // Success feedback
  const btn = document.querySelector('.admin-btn-add');
  const orig = btn.textContent;
  btn.textContent = '✅ Published!';
  btn.style.background = 'linear-gradient(135deg, #2d6a4f, #52b788)';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
  }, 2000);
}

function deleteNews(id) {
  if (!confirm('Delete this news article? This cannot be undone.')) return;
  const news = getNews().filter(n => n.id !== id);
  saveNews(news);
  renderNews();
  renderAdminList();
}

// ============================
// INIT
// ============================

document.addEventListener('DOMContentLoaded', () => {
  initNews();
  renderNews();

  // Restore admin session
  if (sessionStorage.getItem('sabhaAdmin')) {
    openAdminPanel();
  }
});
