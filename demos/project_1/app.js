/* ==========================================================================
   CURRENCY DATA METADATA
   ========================================================================== */
const currencies = [
    { code: 'USD', name: 'دولار أمريكي', country: 'us' },
    { code: 'EUR', name: 'يورو أوروبي', country: 'eu' },
    { code: 'GBP', name: 'جنيه إسترليني', country: 'gb' },
    { code: 'JPY', name: 'ين ياباني', country: 'jp' },
    { code: 'SAR', name: 'ريال سعودي', country: 'sa' },
    { code: 'AED', name: 'درهم إماراتي', country: 'ae' },
    { code: 'EGP', name: 'جنيه مصري', country: 'eg' },
    { code: 'KWD', name: 'دينار كويتي', country: 'kw' },
    { code: 'BHD', name: 'دينار بحريني', country: 'bh' },
    { code: 'QAR', name: 'ريال قطري', country: 'qa' },
    { code: 'OMR', name: 'ريال عماني', country: 'om' },
    { code: 'JOD', name: 'دينار أردني', country: 'jo' },
    { code: 'CAD', name: 'دولار كندي', country: 'ca' },
    { code: 'AUD', name: 'دولار أسترالي', country: 'au' },
    { code: 'CHF', name: 'فرنك سويسري', country: 'ch' },
    { code: 'CNY', name: 'يوان صيني', country: 'cn' },
    { code: 'TRY', name: 'ليرة تركية', country: 'tr' },
    { code: 'RUB', name: 'روبل روسي', country: 'ru' },
    { code: 'INR', name: 'روبية هندية', country: 'in' },
    { code: 'NZD', name: 'دولار نيوزيلندي', country: 'nz' },
    { code: 'SEK', name: 'كرونة سويدية', country: 'se' },
    { code: 'NOK', name: 'كرونة نرويجية', country: 'no' },
    { code: 'DKK', name: 'كرونة دنماركية', country: 'dk' },
    { code: 'SGD', name: 'دولار سنغافوري', country: 'sg' },
    { code: 'HKD', name: 'دولار هونغ كونغ', country: 'hk' },
    { code: 'MXN', name: 'بيزو مكسيكي', country: 'mx' },
    { code: 'BRL', name: 'ريال برازيلي', country: 'br' },
    { code: 'ZAR', name: 'راند جنوب أفريقي', country: 'za' },
    { code: 'KRW', name: 'وون كوري جنوبي', country: 'kr' },
    { code: 'MYR', name: 'رينغيت ماليزي', country: 'my' },
    { code: 'THB', name: 'بات تايلاندي', country: 'th' },
    { code: 'IDR', name: 'روبية إندونيسية', country: 'id' },
    { code: 'PHP', name: 'بيزو فلبيني', country: 'ph' },
    { code: 'PKR', name: 'روبية باكستانية', country: 'pk' },
    { code: 'LBP', name: 'جنيه لبناني', country: 'lb' },
    { code: 'SYP', name: 'ليرة سورية', country: 'sy' },
    { code: 'IQD', name: 'دينار عراقي', country: 'iq' },
    { code: 'MAD', name: 'درهم مغربي', country: 'ma' },
    { code: 'DZD', name: 'دينار جزائري', country: 'dz' },
    { code: 'TND', name: 'دينار تونسي', country: 'tn' },
    { code: 'LYD', name: 'دينار ليبي', country: 'ly' },
    { code: 'YER', name: 'ريال يمني', country: 'ye' },
    { code: 'SDG', name: 'جنيه سوداني', country: 'sd' },
    { code: 'SOS', name: 'شلن صومالي', country: 'so' },
    { code: 'DJF', name: 'فرنك جيبوتي', country: 'dj' },
    { code: 'MRU', name: 'أوقية موريتانية', country: 'mr' },
    { code: 'ILS', name: 'شيكل جديد', country: 'il' },
    { code: 'PLN', name: 'زلوتي بولندي', country: 'pl' },
    { code: 'HUF', name: 'فورنت مجري', country: 'hu' },
    { code: 'CZK', name: 'كرونة تشيكية', country: 'cz' },
    { code: 'RON', name: 'ليو روماني', country: 'ro' },
    { code: 'BGN', name: 'ليف بلغاري', country: 'bg' }
];

/* Fallback rates if backend and cache are offline */
const fallbackRates = {
    "USD": 1.0, "EUR": 0.92, "GBP": 0.78, "JPY": 156.5, "SAR": 3.75,
    "AED": 3.67, "EGP": 47.5, "KWD": 0.31, "BHD": 0.38, "QAR": 3.64,
    "OMR": 0.39, "JOD": 0.71, "CAD": 1.37, "AUD": 1.51, "CHF": 0.90,
    "CNY": 7.24, "TRY": 32.5, "RUB": 89.0, "INR": 83.5, "MAD": 10.0
};

/* ==========================================================================
   APP STATE
   ========================================================================== */
const appState = {
    from: 'USD',
    to: 'SAR',
    amount: 100,
    rates: {},
    lastUpdated: null,
    favorites: [],
    history: [],
    savedNotes: [],
    alerts: [],
    username: 'guest',
    email: 'guest@example.com',
    avatar: '',
    backendMode: false,
    backendUrl: 'http://localhost:8000',
    activeSelectSide: null
};

// Rate Alert configuration state
const alertState = {
    from: 'USD',
    to: 'SAR'
};

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const elAmountInput = document.getElementById('amount-input');
const elResultDisplay = document.getElementById('result-display');
const elFromTrigger = document.getElementById('from-currency-trigger');
const elFromFlag = document.getElementById('from-flag');
const elFromCode = document.getElementById('from-code');
const elToTrigger = document.getElementById('to-currency-trigger');
const elToFlag = document.getElementById('to-flag');
const elToCode = document.getElementById('to-code');
const elSwapBtn = document.getElementById('swap-btn');
const elRefreshBtn = document.getElementById('refresh-btn');
const elFavoriteToggleBtn = document.getElementById('favorite-toggle-btn');
const elThemeToggle = document.getElementById('theme-toggle');
const elRateFormulaPrimary = document.getElementById('rate-formula-primary');
const elRateFormulaSecondary = document.getElementById('rate-formula-secondary');
const elConnectionStatus = document.getElementById('connection-status');
const elOfflineBanner = document.getElementById('offline-banner');
const elCachedTimeDisplay = document.getElementById('cached-time-display');
const elFavoritesCount = document.getElementById('favorites-count');
const elFavoritesEmpty = document.getElementById('favorites-empty');
const elFavoritesGrid = document.getElementById('favorites-grid');
const elMatrixBaseCode = document.getElementById('matrix-base-code');
const elRateMatrixGrid = document.getElementById('rate-matrix-grid');
const elModal = document.getElementById('currency-modal');
const elModalCloseBtn = document.getElementById('modal-close-btn');
const elModalSearch = document.getElementById('currency-search-input');
const elModalList = document.getElementById('currency-modal-list');

// SPA Tab Elements
const elNavTabs = document.querySelectorAll('.nav-tab');
const elTabHome = document.getElementById('tab-view-home');
const elTabNews = document.getElementById('tab-view-news');
const elTabAccount = document.getElementById('tab-view-account');
const elNavAccountText = document.getElementById('nav-account-text');

// User Login/Register Elements
const elViewLoginForm = document.getElementById('view-login-form');
const elViewProfileDashboard = document.getElementById('view-profile-dashboard');
const elAuthTabLogin = document.getElementById('auth-tab-login');
const elAuthTabRegister = document.getElementById('auth-tab-register');
const elFormLoginBlock = document.getElementById('form-login-block');
const elFormRegisterBlock = document.getElementById('form-register-block');
const elLoginEmailInput = document.getElementById('login-email-input');
const elLoginPasswordInput = document.getElementById('login-password-input');
const elLoginSubmitBtn = document.getElementById('login-submit-btn');
const elRegisterUsernameInput = document.getElementById('register-username-input');
const elRegisterEmailInput = document.getElementById('register-email-input');
const elRegisterPasswordInput = document.getElementById('register-password-input');
const elRegisterSubmitBtn = document.getElementById('register-submit-btn');

// Contact method DOM selectors and type states
const elLoginContactToggle = document.getElementById('login-contact-toggle');
const elLoginContactLabel = document.getElementById('login-contact-label');
const elLoginContactIcon = document.getElementById('login-contact-icon');
const elRegisterContactToggle = document.getElementById('register-contact-toggle');
const elRegisterContactLabel = document.getElementById('register-contact-label');
const elRegisterContactIcon = document.getElementById('register-contact-icon');
let loginContactType = 'email';
let registerContactType = 'email';

// Profile Dashboard Elements
const elProfileUsername = document.getElementById('profile-username');
const elProfileAvatar = document.getElementById('profile-avatar');
const elProfileAvatarImg = document.getElementById('profile-avatar-img');
const elProfileAvatarInitials = document.getElementById('profile-avatar-initials');
const elAvatarUploadInput = document.getElementById('avatar-upload-input');
const elNavAvatarIcon = document.getElementById('nav-avatar-icon');
const elNavAvatarImg = document.getElementById('nav-avatar-img');
const elProfileJoinDate = document.getElementById('profile-join-date');
const elLogoutBtn = document.getElementById('logout-btn');
const elStatHistoryCount = document.getElementById('stat-history-count');
const elStatSavedCount = document.getElementById('stat-saved-count');
const elStatFavoritesCount = document.getElementById('stat-favorites-count');

// Saved notes (Bookmarked notes) Elements
const elSavedNotesEmpty = document.getElementById('saved-notes-empty');
const elSavedNotesList = document.getElementById('saved-notes-list');
const elSavedNotesCount = document.getElementById('saved-notes-count');
const elSaveNoteTriggerBtn = document.getElementById('save-note-trigger-btn');

// Save/Edit note modal elements
const elSaveNoteModal = document.getElementById('save-note-modal');
const elSaveNoteModalCloseBtn = document.getElementById('save-note-modal-close-btn');
const elConversionNoteInput = document.getElementById('conversion-note-input');
const elConfirmSaveNoteBtn = document.getElementById('confirm-save-note-btn');

// History log elements
const elHistoryEmpty = document.getElementById('history-empty');
const elHistoryList = document.getElementById('history-list');
const elClearHistoryBtn = document.getElementById('clear-history-btn');

// Financial News element
const elNewsGridContainer = document.getElementById('news-grid-container');

// Rate Alerts Elements
const elAlertsEmpty = document.getElementById('alerts-empty');
const elAlertsListContainer = document.getElementById('alerts-list-container');
const elAddAlertTriggerBtn = document.getElementById('add-alert-trigger-btn');
const elAddAlertModal = document.getElementById('add-alert-modal');
const elAddAlertModalCloseBtn = document.getElementById('add-alert-modal-close-btn');
const elAlertFromTrigger = document.getElementById('alert-from-trigger');
const elAlertFromCode = document.getElementById('alert-from-code');
const elAlertToTrigger = document.getElementById('alert-to-trigger');
const elAlertToCode = document.getElementById('alert-to-code');
const elAlertTargetInput = document.getElementById('alert-target-input');
const elConfirmSaveAlertBtn = document.getElementById('confirm-save-alert-btn');

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initUser();
    await probeBackend();
    await loadFavorites();
    await loadHistory();
    await loadSavedNotes();
    await loadAlerts();
    await fetchUserProfile();
    detectConnectionStatus();
    fetchRates();
    setupEventListeners();
    setupTabNavigation();
});

/* ==========================================================================
   USER PROFILE SESSION MANAGEMENT (SECURE REGISTER & LOGIN)
   ========================================================================== */
function initUser() {
    const savedUser = localStorage.getItem('currency_app_username') || 'guest';
    const savedEmail = localStorage.getItem('currency_app_email') || 'guest@example.com';
    appState.username = savedUser;
    appState.email = savedEmail;
    
    if (elLoginEmailInput) {
        elLoginEmailInput.value = savedUser === 'guest' ? '' : savedEmail;
    }
    updateProfileView();
}

async function probeBackend() {
    try {
        const origin = window.location.origin;
        const host = (origin.includes('localhost') || origin.includes('127.0.0.1') || origin.startsWith('http://127.')) 
            ? origin 
            : 'http://localhost:8000';
            
        appState.backendUrl = host;
        
        const response = await fetch(`${host}/api/user?username=probe`, { method: 'GET' });
        if (response.ok) {
            appState.backendMode = true;
            console.log(`Database server detected at ${host}. Backend Mode: Active.`);
        }
    } catch (e) {
        appState.backendMode = false;
        console.warn("Database server not detected. Backend Mode: Standalone (LocalStorage fallback).");
    }
}

function updateProfileView() {
    if (appState.username === 'guest') {
        elViewLoginForm.classList.remove('hidden-view');
        elViewLoginForm.classList.add('active-view');
        elViewProfileDashboard.classList.add('hidden-view');
        elViewProfileDashboard.classList.remove('active-view');
        elNavAccountText.textContent = 'حسابي';
        
        // Reset navigation avatar to standard icon
        if (elNavAvatarIcon) elNavAvatarIcon.classList.remove('hidden');
        if (elNavAvatarImg) {
            elNavAvatarImg.classList.add('hidden');
            elNavAvatarImg.src = '';
        }
    } else {
        elViewLoginForm.classList.add('hidden-view');
        elViewLoginForm.classList.remove('active-view');
        elViewProfileDashboard.classList.remove('hidden-view');
        elViewProfileDashboard.classList.add('active-view');
        elNavAccountText.textContent = `بروفايل (${appState.username})`;
        
        if (elProfileUsername) {
            elProfileUsername.textContent = appState.username;
        }
        
        // Render avatar
        const initials = appState.username.charAt(0).toUpperCase();
        if (appState.avatar) {
            // Show image, hide initials
            if (elProfileAvatarImg) {
                elProfileAvatarImg.src = appState.avatar;
                elProfileAvatarImg.classList.remove('hidden');
            }
            if (elProfileAvatarInitials) {
                elProfileAvatarInitials.classList.add('hidden');
                elProfileAvatarInitials.textContent = initials;
            }
            // Update navbar avatar
            if (elNavAvatarImg) {
                elNavAvatarImg.src = appState.avatar;
                elNavAvatarImg.classList.remove('hidden');
            }
            if (elNavAvatarIcon) {
                elNavAvatarIcon.classList.add('hidden');
            }
        } else {
            // Show initials, hide image
            if (elProfileAvatarImg) {
                elProfileAvatarImg.classList.add('hidden');
                elProfileAvatarImg.src = '';
            }
            if (elProfileAvatarInitials) {
                elProfileAvatarInitials.classList.remove('hidden');
                elProfileAvatarInitials.textContent = initials;
            }
            // Update navbar avatar (reset to icon)
            if (elNavAvatarIcon) elNavAvatarIcon.classList.remove('hidden');
            if (elNavAvatarImg) {
                elNavAvatarImg.classList.add('hidden');
                elNavAvatarImg.src = '';
            }
        }
    }
}

async function fetchUserProfile() {
    if (appState.username === 'guest') {
        appState.avatar = '';
        if (elNavAvatarIcon) elNavAvatarIcon.classList.remove('hidden');
        if (elNavAvatarImg) {
            elNavAvatarImg.classList.add('hidden');
            elNavAvatarImg.src = '';
        }
        return;
    }

    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/user?username=${appState.username}`);
            if (res.ok) {
                const data = await res.json();
                elProfileUsername.textContent = data.username;
                elProfileJoinDate.textContent = data.createdAt;
                
                // Set stats count
                elStatHistoryCount.textContent = data.stats.historyCount;
                elStatSavedCount.textContent = data.stats.savedCount;
                elStatFavoritesCount.textContent = data.stats.favoritesCount;
                elSavedNotesCount.textContent = data.stats.savedCount;
                
                // Load avatar
                appState.avatar = data.avatar || '';
                // Backup to localStorage for offline mode
                if (appState.avatar) {
                    localStorage.setItem(`currency_avatar_${appState.username}`, appState.avatar);
                } else {
                    localStorage.removeItem(`currency_avatar_${appState.username}`);
                }
                
                updateProfileView();
                return;
            }
        } catch (e) {
            console.error("Error loading profile stats", e);
        }
    }
    
    // Standalone fallback
    elProfileUsername.textContent = appState.username;
    
    let joinDate = localStorage.getItem(`currency_join_${appState.username}`);
    if (!joinDate) {
        joinDate = new Date().toISOString().split('T')[0];
        localStorage.setItem(`currency_join_${appState.username}`, joinDate);
    }
    elProfileJoinDate.textContent = joinDate;
    
    const localHistory = JSON.parse(localStorage.getItem(`currency_hist_${appState.username}`) || '[]');
    const localSaved = JSON.parse(localStorage.getItem(`currency_saved_notes_${appState.username}`) || '[]');
    const localFav = JSON.parse(localStorage.getItem(`currency_fav_${appState.username}`) || '[]');
    
    elStatHistoryCount.textContent = localHistory.length;
    elStatSavedCount.textContent = localSaved.length;
    elStatFavoritesCount.textContent = localFav.length;
    elSavedNotesCount.textContent = localSaved.length;
    
    // Load avatar from localStorage
    appState.avatar = localStorage.getItem(`currency_avatar_${appState.username}`) || '';
    
    updateProfileView();
}

async function loginUser() {
    const contact = elLoginEmailInput.value.trim().toLowerCase();
    const password = elLoginPasswordInput.value;
    
    if (!contact || !password) {
        showToast(loginContactType === 'email' ? 'الرجاء إدخال البريد الإلكتروني وكلمة المرور.' : 'الرجاء إدخال رقم الهاتف وكلمة المرور.', 'danger');
        return;
    }
    
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contact, password })
            });
            const data = await res.json();
            if (res.ok) {
                showToast(`مرحباً بك مجدداً، ${data.username}!`, 'success');
                await switchUserSession(data.username, data.email);
            } else {
                showToast(data.error || 'فشل تسجيل الدخول.', 'danger');
            }
        } catch (e) {
            console.error("Login request failed", e);
            showToast('حدث خطأ أثناء الاتصال بالخادم.', 'danger');
        }
    } else {
        // Standalone offline fallback
        const localUsers = JSON.parse(localStorage.getItem('local_users') || '[]');
        const user = localUsers.find(u => (u.email === contact || u.phone === contact) && u.password === password);
        if (user) {
            showToast(`تم الدخول بنجاح (الوضع غير المتصل)، مرحباً ${user.username}!`, 'success');
            await switchUserSession(user.username, user.email || user.phone);
        } else {
            showToast('البريد الإلكتروني/رقم الهاتف أو كلمة المرور غير صحيحة محلياً.', 'danger');
        }
    }
}

async function registerUser() {
    const username = elRegisterUsernameInput.value.trim();
    const contactValue = elRegisterEmailInput.value.trim().toLowerCase();
    const password = elRegisterPasswordInput.value;
    
    if (!username || !contactValue || !password) {
        showToast('الرجاء تعبئة جميع الحقول المطلوبة.', 'danger');
        return;
    }
    
    if (password.length < 6) {
        showToast('كلمة المرور يجب أن تكون من 6 خانات على الأقل.', 'danger');
        return;
    }
    
    let payload = { username, password };
    if (registerContactType === 'email') {
        if (!contactValue.includes('@') || !contactValue.includes('.')) {
            showToast('الرجاء إدخال بريد إلكتروني صحيح.', 'danger');
            return;
        }
        payload.email = contactValue;
    } else {
        if (contactValue.length < 7) {
            showToast('الرجاء إدخال رقم هاتف صحيح.', 'danger');
            return;
        }
        payload.phone = contactValue;
    }
    
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok) {
                showToast(`تم إنشاء حسابك بنجاح! مرحباً ${data.username}`, 'success');
                await switchUserSession(data.username, data.email);
            } else {
                showToast(data.error || 'فشل إنشاء الحساب.', 'danger');
            }
        } catch (e) {
            console.error("Registration failed", e);
            showToast('حدث خطأ أثناء الاتصال بالخادم.', 'danger');
        }
    } else {
        // Standalone offline fallback
        const localUsers = JSON.parse(localStorage.getItem('local_users') || '[]');
        if (localUsers.some(u => u.username === username.toLowerCase() || (payload.email && u.email === payload.email) || (payload.phone && u.phone === payload.phone))) {
            showToast('اسم المستخدم أو وسيلة الاتصال مسجلة بالفعل محلياً.', 'danger');
            return;
        }
        
        const newUser = { username: username.toLowerCase(), password };
        if (payload.email) newUser.email = payload.email;
        if (payload.phone) newUser.phone = payload.phone;
        
        localUsers.push(newUser);
        localStorage.setItem('local_users', JSON.stringify(localUsers));
        showToast('تم إنشاء الحساب محلياً بنجاح!', 'success');
        await switchUserSession(username.toLowerCase(), payload.email || payload.phone);
    }
}

async function switchUserSession(username, email) {
    appState.username = username;
    appState.email = email;
    
    localStorage.setItem('currency_app_username', username);
    localStorage.setItem('currency_app_email', email);
    
    updateProfileView();
    
    // Clear login inputs
    elLoginEmailInput.value = '';
    elLoginPasswordInput.value = '';
    elRegisterUsernameInput.value = '';
    elRegisterEmailInput.value = '';
    elRegisterPasswordInput.value = '';
    
    // Refresh details
    await loadFavorites();
    await loadHistory();
    await loadSavedNotes();
    await loadAlerts();
    await fetchUserProfile();
    updateFavoritesUI();
    updateConversion();
    updateMatrix();
}

function logoutUser() {
    appState.username = 'guest';
    appState.email = 'guest@example.com';
    appState.avatar = '';
    localStorage.setItem('currency_app_username', 'guest');
    localStorage.setItem('currency_app_email', 'guest@example.com');
    updateProfileView();
    
    loadFavorites();
    loadHistory();
    loadSavedNotes();
    loadAlerts();
    fetchUserProfile();
    updateFavoritesUI();
    updateConversion();
    updateMatrix();
    showToast('تم تسجيل الخروج بنجاح.', 'info');
}

/* ==========================================================================
   THEME MANAGER
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('currency_app_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        elThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        elThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('currency_app_theme', 'light');
        elThemeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        showToast('تم تفعيل المظهر الفاتح', 'success');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('currency_app_theme', 'dark');
        elThemeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        showToast('تم تفعيل المظهر الداكن', 'success');
    }
}

/* ==========================================================================
   NETWORK DETECTION STATUS Badges
   ========================================================================== */
function detectConnectionStatus() {
    window.addEventListener('online', () => updateBadge(true));
    window.addEventListener('offline', () => updateBadge(false));
    updateBadge(navigator.onLine);
}

function updateBadge(isOnline) {
    if (isOnline) {
        elConnectionStatus.className = 'status-badge online';
        elConnectionStatus.querySelector('.status-text').textContent = 'متصل بالشبكة';
        elOfflineBanner.classList.add('hidden');
    } else {
        elConnectionStatus.className = 'status-badge offline';
        elConnectionStatus.querySelector('.status-text').textContent = 'غير متصل';
        elOfflineBanner.classList.remove('hidden');
    }
}

/* ==========================================================================
   NETWORKING & LIVE EXCHANGE RATES API
   ========================================================================== */
async function fetchRates() {
    elRefreshBtn.classList.add('spinning');
    
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/rates`);
            if (res.ok) {
                const data = await res.json();
                appState.rates = data.rates;
                appState.lastUpdated = data.lastUpdatedTime;
                
                // Cache locally as backup
                localStorage.setItem('cached_exchange_rates', JSON.stringify({
                    rates: data.rates,
                    lastUpdatedTime: data.lastUpdatedTime
                }));
                
                elCachedTimeDisplay.textContent = data.lastUpdatedTime;
                
                updateConversion();
                updateMatrix();
                updateFavoritesUI();
                updateHistoryUI();
                
                setTimeout(() => elRefreshBtn.classList.remove('spinning'), 600);
                return;
            }
        } catch (e) {
            console.warn("Backend API rates fetch failed, trying local storage cache...", e);
        }
    }
    
    const cached = localStorage.getItem('cached_exchange_rates');
    if (cached) {
        try {
            const data = JSON.parse(cached);
            appState.rates = data.rates;
            appState.lastUpdated = data.lastUpdatedTime;
            
            elCachedTimeDisplay.textContent = data.lastUpdatedTime;
            
            updateConversion();
            updateMatrix();
            updateFavoritesUI();
            updateHistoryUI();
        } catch (e) {
            loadFallbacks();
        }
    } else {
        loadFallbacks();
    }
    
    setTimeout(() => {
        elRefreshBtn.classList.remove('spinning');
    }, 600);
}

function loadFallbacks() {
    if (Object.keys(appState.rates).length === 0) {
        appState.rates = fallbackRates;
        appState.lastUpdated = 'القيم الافتراضية للتطبيق';
        updateConversion();
        updateMatrix();
        updateFavoritesUI();
        updateHistoryUI();
    }
}

/* ==========================================================================
   CONVERSION UTILS & MATH
   ========================================================================== */
function convertCurrencies(amount, fromCode, toCode) {
    const rates = appState.rates;
    const fromRate = rates[fromCode];
    const toRate = rates[toCode];
    
    if (!fromRate || !toRate) return 0;
    
    const amountInUSD = amount / fromRate;
    return amountInUSD * toRate;
}

function updateConversion() {
    const amount = parseFloat(elAmountInput.value);
    
    if (isNaN(amount) || amount < 0) {
        elResultDisplay.value = '0.00';
        elRateFormulaPrimary.textContent = '-';
        elRateFormulaSecondary.textContent = '-';
        return;
    }
    
    appState.amount = amount;
    
    const result = convertCurrencies(amount, appState.from, appState.to);
    elResultDisplay.value = formatNumber(result, result < 0.01 ? 4 : 2);
    
    const rate1to2 = convertCurrencies(1, appState.from, appState.to);
    const rate2to1 = convertCurrencies(1, appState.to, appState.from);
    
    elRateFormulaPrimary.innerHTML = `1 ${appState.from} = ${formatNumber(rate1to2, 4)} <span class="currency-code" style="font-size:0.9rem">${appState.to}</span>`;
    elRateFormulaSecondary.innerHTML = `1 ${appState.to} = ${formatNumber(rate2to1, 4)} <span class="currency-code" style="font-size:0.75rem">${appState.from}</span>`;
    
    const fromMeta = getCurrencyMeta(appState.from);
    const toMeta = getCurrencyMeta(appState.to);
    
    elFromFlag.src = `https://flagcdn.com/w40/${fromMeta.country}.png`;
    elFromFlag.alt = `${fromMeta.code} Flag`;
    elFromCode.textContent = fromMeta.code;
    
    elToFlag.src = `https://flagcdn.com/w40/${toMeta.country}.png`;
    elToFlag.alt = `${toMeta.code} Flag`;
    elToCode.textContent = toMeta.code;
    
    checkFavoriteState();
}

function formatNumber(value, decimals = 2) {
    return Number(value).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function getCurrencyMeta(code) {
    return currencies.find(c => c.code === code) || { code: code, name: code, country: 'un' };
}

/* ==========================================================================
   CUSTOM MODAL POPUP (CURRENCY LIST SELECTION)
   ========================================================================== */
function openCurrencyModal(side) {
    appState.activeSelectSide = side;
    elModalSearch.value = '';
    renderModalList(currencies);
    elModal.classList.remove('hidden');
    elModalSearch.focus();
}

function closeCurrencyModal() {
    elModal.classList.add('hidden');
}

function renderModalList(list) {
    elModalList.innerHTML = '';
    
    let activeCode = appState.from;
    if (appState.activeSelectSide === 'from') {
        activeCode = appState.from;
    } else if (appState.activeSelectSide === 'to') {
        activeCode = appState.to;
    } else if (appState.activeSelectSide === 'alert-from') {
        activeCode = alertState.from;
    } else if (appState.activeSelectSide === 'alert-to') {
        activeCode = alertState.to;
    }
    
    list.forEach(currency => {
        const isSelected = currency.code === activeCode;
        const item = document.createElement('div');
        item.className = `currency-item ${isSelected ? 'selected' : ''}`;
        item.dataset.code = currency.code;
        
        item.innerHTML = `
            <img src="https://flagcdn.com/w40/${currency.country}.png" alt="${currency.name} flag" class="flag-icon">
            <div class="item-info">
                <span class="item-code">${currency.code}</span>
                <span class="item-name">${currency.name}</span>
            </div>
            ${isSelected ? '<i class="fa-solid fa-check item-check-icon"></i>' : ''}
        `;
        
        item.addEventListener('click', () => {
            selectCurrency(currency.code);
        });
        
        elModalList.appendChild(item);
    });
}

function selectCurrency(code) {
    if (appState.activeSelectSide === 'from') {
        appState.from = code;
        closeCurrencyModal();
        updateConversion();
        updateMatrix();
        saveHistoryRecord();
    } else if (appState.activeSelectSide === 'to') {
        appState.to = code;
        closeCurrencyModal();
        updateConversion();
        updateMatrix();
        saveHistoryRecord();
    } else if (appState.activeSelectSide === 'alert-from') {
        alertState.from = code;
        elAlertFromCode.textContent = code;
        closeCurrencyModal();
        
        const currentRate = convertCurrencies(1, alertState.from, alertState.to);
        elAlertTargetInput.value = currentRate.toFixed(4);
        elAlertTargetInput.placeholder = currentRate.toFixed(4);
    } else if (appState.activeSelectSide === 'alert-to') {
        alertState.to = code;
        elAlertToCode.textContent = code;
        closeCurrencyModal();
        
        const currentRate = convertCurrencies(1, alertState.from, alertState.to);
        elAlertTargetInput.value = currentRate.toFixed(4);
        elAlertTargetInput.placeholder = currentRate.toFixed(4);
    }
}

function filterCurrencies(query) {
    const cleanQuery = query.trim().toLowerCase();
    
    const filtered = currencies.filter(c => {
        return c.code.toLowerCase().includes(cleanQuery) || 
               c.name.toLowerCase().includes(cleanQuery);
    });
    
    renderModalList(filtered);
}

/* ==========================================================================
   FAVORITES SYSTEM (DATABASE / LOCALSTORAGE INTEGRATION)
   ========================================================================== */
async function loadFavorites() {
    if (appState.username === 'guest') {
        appState.favorites = [];
        return;
    }
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/favorites?username=${appState.username}`);
            if (res.ok) {
                const data = await res.json();
                appState.favorites = data.favorites.map(item => typeof item === 'object' ? `${item.from}_${item.to}` : item);
                return;
            }
        } catch (e) {
            console.error("Error fetching favorites from database, falling back", e);
        }
    }
    
    const local = localStorage.getItem(`currency_fav_${appState.username}`);
    appState.favorites = local ? JSON.parse(local) : [];
}

async function saveFavorites() {
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/favorites`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: appState.username,
                    favorites: appState.favorites
                })
            });
            if (res.ok) return;
        } catch (e) {
            console.error("Failed saving favorites to server database", e);
        }
    }
    
    localStorage.setItem(`currency_fav_${appState.username}`, JSON.stringify(appState.favorites));
}

function checkFavoriteState() {
    const pair = `${appState.from}_${appState.to}`;
    const isFav = appState.favorites.includes(pair);
    
    if (isFav) {
        elFavoriteToggleBtn.classList.add('active');
        elFavoriteToggleBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        elFavoriteToggleBtn.title = 'إزالة من المفضلة';
    } else {
        elFavoriteToggleBtn.classList.remove('active');
        elFavoriteToggleBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        elFavoriteToggleBtn.title = 'إضافة للعملات المفضلة';
    }
}

async function toggleFavorite() {
    if (appState.username === 'guest') {
        showToast('يرجى تسجيل الدخول أولاً لإضافة العملات إلى المفضلة.', 'warning');
        return;
    }
    const pair = `${appState.from}_${appState.to}`;
    const idx = appState.favorites.indexOf(pair);
    
    if (idx !== -1) {
        appState.favorites.splice(idx, 1);
        showToast('تمت الإزالة من أزواج العملات المفضلة', 'warning');
    } else {
        appState.favorites.push(pair);
        showToast('تمت الإضافة إلى العملات المفضلة', 'success');
    }
    
    checkFavoriteState();
    await saveFavorites();
    updateFavoritesUI();
    fetchUserProfile();
}

function updateFavoritesUI() {
    if (appState.favorites.length === 0) {
        elFavoritesEmpty.classList.remove('hidden');
        elFavoritesGrid.classList.add('hidden');
        elFavoritesCount.textContent = '0';
        return;
    }
    
    elFavoritesEmpty.classList.add('hidden');
    elFavoritesGrid.classList.remove('hidden');
    elFavoritesGrid.innerHTML = '';
    elFavoritesCount.textContent = appState.favorites.length;
    
    appState.favorites.forEach(pair => {
        const [from, to] = pair.split('_');
        const fromMeta = getCurrencyMeta(from);
        const toMeta = getCurrencyMeta(to);
        const rate = convertCurrencies(1, from, to);
        
        const row = document.createElement('div');
        row.className = 'favorite-item';
        row.innerHTML = `
            <div class="fav-pair">
                <img src="https://flagcdn.com/w40/${fromMeta.country}.png" alt="${from}" class="flag-icon">
                <span class="fav-values">
                    <strong>1 ${from}</strong>
                    <i class="fa-solid fa-right-long font-sm-decor"></i>
                    <strong>${formatNumber(rate, rate < 0.01 ? 4 : 2)} ${to}</strong>
                </span>
            </div>
            <button class="btn-delete-fav" title="حذف من المفضلة">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        
        row.addEventListener('click', () => {
            appState.from = from;
            appState.to = to;
            updateConversion();
            updateMatrix();
            saveHistoryRecord();
            showToast('تمت استعادة العملات المفضلة للمحول', 'success');
        });
        
        row.querySelector('.btn-delete-fav').addEventListener('click', async (e) => {
            e.stopPropagation();
            appState.favorites = appState.favorites.filter(f => f !== pair);
            checkFavoriteState();
            await saveFavorites();
            updateFavoritesUI();
            fetchUserProfile();
            showToast('تمت إزالة الزوج من المفضلة', 'warning');
        });
        
        elFavoritesGrid.appendChild(row);
    });
}

/* ==========================================================================
   SAVED CONVERSIONS WITH NOTES (SQLITE BACKEND)
   ========================================================================== */
async function loadSavedNotes() {
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/saved?username=${appState.username}`);
            if (res.ok) {
                const data = await res.json();
                appState.savedNotes = data.saved || [];
                renderSavedNotesList();
                return;
            }
        } catch (e) {
            console.error("Error fetching saved notes from database, loading fallback", e);
        }
    }
    
    const local = localStorage.getItem(`currency_saved_notes_${appState.username}`);
    appState.savedNotes = local ? JSON.parse(local) : [];
    renderSavedNotesList();
}

function renderSavedNotesList() {
    const list = appState.savedNotes || [];
    elSavedNotesCount.textContent = list.length;
    
    if (list.length === 0) {
        elSavedNotesEmpty.classList.remove('hidden');
        elSavedNotesList.classList.add('hidden');
        return;
    }
    
    elSavedNotesEmpty.classList.add('hidden');
    elSavedNotesList.classList.remove('hidden');
    elSavedNotesList.innerHTML = '';
    
    list.forEach(item => {
        const fromMeta = getCurrencyMeta(item.from);
        const toMeta = getCurrencyMeta(item.to);
        const calcVal = convertCurrencies(item.amount, item.from, item.to);
        
        const card = document.createElement('div');
        card.className = 'glass-card note-card';
        card.innerHTML = `
            <div class="note-card-header">
                <div class="note-conversion-title">
                    <span class="note-amount-val">${formatNumber(item.amount, 2)}</span>
                    <span class="note-code">${item.from}</span>
                    <i class="fa-solid fa-arrow-left"></i>
                    <span class="note-amount-val">${formatNumber(calcVal, calcVal < 0.01 ? 4 : 2)}</span>
                    <span class="note-code">${item.to}</span>
                </div>
                <span class="note-timestamp"><i class="fa-regular fa-clock"></i> ${item.time}</span>
            </div>
            
            <div class="note-content-body">
                <p class="note-text"><i class="fa-regular fa-comment-dots"></i> ${item.note}</p>
            </div>
            
            <div class="note-card-actions">
                <button class="btn-note-action edit" title="تعديل الملاحظة">
                    <i class="fa-solid fa-pen-to-square"></i> تعديل
                </button>
                <button class="btn-note-action delete" title="حذف الملاحظة">
                    <i class="fa-regular fa-trash-can"></i> حذف
                </button>
            </div>
        `;
        
        card.querySelector('.edit').addEventListener('click', () => {
            openEditNoteModal(item);
        });
        
        card.querySelector('.delete').addEventListener('click', () => {
            deleteSavedNote(item.id);
        });
        
        elSavedNotesList.appendChild(card);
    });
}

let activeEditItem = null;

function openSaveNoteModal() {
    if (appState.username === 'guest') {
        showToast('يرجى تسجيل الدخول أولاً لحفظ المعاملات وكتابة الملاحظات.', 'warning');
        return;
    }
    activeEditItem = null;
    document.getElementById('note-modal-title').textContent = 'حفظ المعاملة مع ملاحظة';
    
    const amount = parseFloat(elAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showToast('يرجى إدخال مبلغ صحيح أكبر من الصفر قبل الحفظ المرجعي.', 'danger');
        return;
    }
    
    const result = convertCurrencies(amount, appState.from, appState.to);
    document.getElementById('note-modal-conversion-display').textContent = 
        `${formatNumber(amount, 2)} ${appState.from} = ${formatNumber(result, result < 0.01 ? 4 : 2)} ${appState.to}`;
        
    elConversionNoteInput.value = '';
    elSaveNoteModal.classList.remove('hidden');
    elConversionNoteInput.focus();
}

function openEditNoteModal(item) {
    activeEditItem = item;
    document.getElementById('note-modal-title').textContent = 'تعديل الملاحظة المرجعية';
    
    const calcVal = convertCurrencies(item.amount, item.from, item.to);
    document.getElementById('note-modal-conversion-display').textContent = 
        `${formatNumber(item.amount, 2)} ${item.from} = ${formatNumber(calcVal, calcVal < 0.01 ? 4 : 2)} ${item.to}`;
        
    elConversionNoteInput.value = item.note;
    elSaveNoteModal.classList.remove('hidden');
    elConversionNoteInput.focus();
}

function closeSaveNoteModal() {
    elSaveNoteModal.classList.add('hidden');
    activeEditItem = null;
}

async function handleConfirmSaveNote() {
    const noteText = elConversionNoteInput.value.trim();
    if (!noteText) {
        showToast('يرجى إدخال ملاحظة لوصف المعاملة.', 'danger');
        return;
    }
    
    if (activeEditItem) {
        if (appState.backendMode) {
            try {
                const res = await fetch(`${appState.backendUrl}/api/saved`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: appState.username,
                        id: activeEditItem.id,
                        note: noteText
                    })
                });
                if (res.ok) {
                    showToast('تم تحديث الملاحظة بنجاح.', 'success');
                    closeSaveNoteModal();
                    await loadSavedNotes();
                    await fetchUserProfile();
                    return;
                }
            } catch (e) {
                console.error("Editing note on backend failed", e);
            }
        }
        
        appState.savedNotes = appState.savedNotes.map(n => {
            if (n.id === activeEditItem.id) {
                n.note = noteText;
            }
            return n;
        });
        localStorage.setItem(`currency_saved_notes_${appState.username}`, JSON.stringify(appState.savedNotes));
        showToast('تم تعديل الملاحظة محلياً.', 'success');
        closeSaveNoteModal();
        renderSavedNotesList();
        fetchUserProfile();
    } else {
        const amount = parseFloat(elAmountInput.value);
        const item = {
            id: Date.now(),
            from: appState.from,
            to: appState.to,
            amount: amount,
            note: noteText,
            time: new Date().toLocaleString('en-US', { hour12: false }).replace(/\//g, '-')
        };
        
        if (appState.backendMode) {
            try {
                const res = await fetch(`${appState.backendUrl}/api/saved`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: appState.username,
                        from: item.from,
                        to: item.to,
                        amount: item.amount,
                        result: convertCurrencies(item.amount, item.from, item.to),
                        note: item.note
                    })
                });
                if (res.ok) {
                    showToast('تم حفظ المعاملة والملاحظة بقاعدة البيانات.', 'success');
                    closeSaveNoteModal();
                    await loadSavedNotes();
                    await fetchUserProfile();
                    return;
                }
            } catch (e) {
                console.error("Saving note to server failed", e);
            }
        }
        
        appState.savedNotes.unshift(item);
        localStorage.setItem(`currency_saved_notes_${appState.username}`, JSON.stringify(appState.savedNotes));
        showToast('تم حفظ المعاملة والملاحظة محلياً.', 'success');
        closeSaveNoteModal();
        renderSavedNotesList();
        fetchUserProfile();
    }
}

async function deleteSavedNote(id) {
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/saved?username=${appState.username}&id=${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                showToast('تم حذف المعاملة المحفوظة.', 'warning');
                await loadSavedNotes();
                await fetchUserProfile();
                return;
            }
        } catch (e) {
            console.error("Deleting note from backend failed", e);
        }
    }
    
    appState.savedNotes = appState.savedNotes.filter(n => n.id !== id);
    localStorage.setItem(`currency_saved_notes_${appState.username}`, JSON.stringify(appState.savedNotes));
    showToast('تم حذف المعاملة محلياً.', 'warning');
    renderSavedNotesList();
    fetchUserProfile();
}

/* ==========================================================================
   TRANSACTIONS RECENT HISTORY LOGGER (DEBOUNCED WRITE)
   ========================================================================== */
async function loadHistory() {
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/history?username=${appState.username}`);
            if (res.ok) {
                const data = await res.json();
                appState.history = data.history;
                updateHistoryUI();
                return;
            }
        } catch (e) {
            console.error("Error loading transaction history, fallback loaded", e);
        }
    }
    
    const local = localStorage.getItem(`currency_hist_${appState.username}`);
    appState.history = local ? JSON.parse(local) : [];
    updateHistoryUI();
}

let historyTimeout = null;

function triggerSaveHistoryDebounced() {
    if (historyTimeout) clearTimeout(historyTimeout);
    historyTimeout = setTimeout(() => {
        saveHistoryRecord();
    }, 1000);
}

async function saveHistoryRecord() {
    const amount = parseFloat(elAmountInput.value);
    if (isNaN(amount) || amount <= 0) return;
    
    const record = {
        id: Date.now(),
        from: appState.from,
        to: appState.to,
        amount: amount,
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
    };
    
    if (appState.history.length > 0) {
        const last = appState.history[0];
        if (last.from === record.from && last.to === record.to && last.amount === record.amount) {
            return;
        }
    }
    
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: appState.username,
                    from: record.from,
                    to: record.to,
                    amount: record.amount
                })
            });
            if (res.ok) {
                await loadHistory();
                await fetchUserProfile();
                return;
            }
        } catch (e) {
            console.error("Failed saving history record to database", e);
        }
    }
    
    appState.history.unshift(record);
    if (appState.history.length > 10) appState.history.pop();
    localStorage.setItem(`currency_hist_${appState.username}`, JSON.stringify(appState.history));
    updateHistoryUI();
    fetchUserProfile();
}

function updateHistoryUI() {
    const list = appState.history || [];
    
    if (list.length === 0) {
        elHistoryEmpty.classList.remove('hidden');
        elHistoryList.classList.add('hidden');
        elClearHistoryBtn.classList.add('hidden');
        return;
    }
    
    elHistoryEmpty.classList.add('hidden');
    elHistoryList.classList.remove('hidden');
    elClearHistoryBtn.classList.remove('hidden');
    elHistoryList.innerHTML = '';
    
    list.forEach(item => {
        const fromMeta = getCurrencyMeta(item.from);
        const toMeta = getCurrencyMeta(item.to);
        const calcVal = convertCurrencies(item.amount, item.from, item.to);
        
        const row = document.createElement('div');
        row.className = 'history-item';
        row.innerHTML = `
            <div class="hist-pair">
                <img src="https://flagcdn.com/w40/${fromMeta.country}.png" alt="${item.from}" class="flag-icon">
                <span class="hist-values">
                    <strong class="hist-amount">${formatNumber(item.amount, 0)} ${item.from}</strong>
                    <i class="fa-solid fa-right-long font-sm-decor"></i>
                    <strong class="hist-result">${formatNumber(calcVal, calcVal < 0.01 ? 4 : 2)} ${item.to}</strong>
                </span>
            </div>
            <span class="hist-time">${item.time}</span>
        `;
        
        row.addEventListener('click', () => {
            elAmountInput.value = item.amount;
            appState.from = item.from;
            appState.to = item.to;
            updateConversion();
            updateMatrix();
            saveHistoryRecord();
            showToast('تمت استعادة المعاملة للمحول', 'success');
        });
        
        elHistoryList.appendChild(row);
    });
}

function clearHistory() {
    appState.history = [];
    localStorage.removeItem(`currency_hist_${appState.username}`);
    updateHistoryUI();
    fetchUserProfile();
    showToast('تم مسح سجل المعاملات محلياً', 'warning');
}

/* ==========================================================================
   POPULAR EXCHANGE RATE MATRIX BOARD
   ========================================================================== */
function updateMatrix() {
    elMatrixBaseCode.textContent = appState.from;
    elRateMatrixGrid.innerHTML = '';
    
    const matrixList = ['USD', 'EUR', 'GBP', 'JPY', 'SAR', 'AED', 'EGP', 'KWD', 'TRY'];
    const filteredList = matrixList.filter(code => code !== appState.from).slice(0, 8);
    
    filteredList.forEach(code => {
        const meta = getCurrencyMeta(code);
        const rate = convertCurrencies(1, appState.from, code);
        
        const card = document.createElement('div');
        card.className = 'glass-card matrix-card';
        card.innerHTML = `
            <img src="https://flagcdn.com/w40/${meta.country}.png" alt="${meta.name} flag" class="flag-icon">
            <div class="matrix-info">
                <div class="matrix-header">
                    <span class="matrix-code">${code}</span>
                    <span class="matrix-name">${meta.name}</span>
                </div>
                <span class="matrix-value">${formatNumber(rate, rate < 0.01 ? 4 : 2)}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            appState.to = code;
            updateConversion();
            showToast(`تم تغيير العملة المستهدفة إلى ${code}`, 'success');
            saveHistoryRecord();
        });
        
        elRateMatrixGrid.appendChild(card);
    });
}

/* ==========================================================================
   FINANCIAL NEWS LOADERS
   ========================================================================== */
let cachedNewsArticles = [];
let currentNewsCategory = 'all';

async function loadNews() {
    elNewsGridContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);"><i class="fa-solid fa-spinner fa-spin fa-2x"></i><p style="margin-top: 0.5rem;">جاري تحميل الأخبار الماليّة...</p></div>';
    
    cachedNewsArticles = [];
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/news`);
            if (res.ok) {
                const data = await res.json();
                cachedNewsArticles = data.news;
            }
        } catch (e) {
            console.error("Error fetching news from backend", e);
        }
    }
    
    if (!cachedNewsArticles || cachedNewsArticles.length === 0) {
        cachedNewsArticles = [
            {
                "id": 1,
                "title": "الفيدرالي الأمريكي يبقي أسعار الفائدة مرتفعة وسط مخاوف التضخم المستمر",
                "summary": "قرر مجلس الاحتياطي الفيدرالي في اجتماعه الأخير تثبيت الفائدة دون تغيير، مما أدى لتعزيز قوة الدولار مقابل اليورو وسلة العملات الدولية في المعاملات المالية الأخيرة.",
                "date": "2026-06-05",
                "category": "عالمي",
                "icon": "fa-globe-americas"
            },
            {
                "id": 2,
                "title": "الريال السعودي والدرهم الإماراتي يحافظان على استقرارهما مقابل العملات الأجنبية",
                "summary": "أكدت التقارير المصرفية في الخليج استقرار أسعار الصرف المرتبطة بالدولار، متوقعة نمواً قوياً في التحويلات المالية الشخصية والتجارية إلى الخارج خلال الربع الحالي.",
                "date": "2026-06-04",
                "category": "محلي",
                "icon": "fa-building-columns"
            },
            {
                "id": 3,
                "title": "البنك المركزي الأوروبي يدرس إمكانية خفض الفائدة لدعم اقتصاد منطقة اليورو",
                "summary": "يترقب المستثمرون تصريحات مسؤولي البنك المركزي الأوروبي، وسط توقعات متزايدة بخفض أسعار الفائدة في الربع القادم للحد من التباطؤ الاقتصادي الحاصل في أوروبا.",
                "date": "2026-06-03",
                "category": "عالمي",
                "icon": "fa-euro-sign"
            },
            {
                "id": 4,
                "title": "البنك المركزي المصري يعلن عن زيادة جديدة في احتياطي النقد الأجنبي",
                "summary": "كشف البنك المركزي المصري عن ارتفاع إجمالي الاحتياطيات النقدية الأجنبية لديه، وهو ما انعكس إيجابياً في تعزيز ثقة المستثمرين وتوازن سعر صرف الجنيه بالبنوك.",
                "date": "2026-06-02",
                "category": "محلي",
                "icon": "fa-sack-dollar"
            },
            {
                "id": 5,
                "title": "تحركات وتذبذبات في أسعار الين الياباني والسلطات تلوّح بالتدخل لدعم العملة",
                "summary": "شهد الين الياباني ضغوطاً متواصلة أمام الدولار الأمريكي، مما جعل وزارة المالية اليابانية تصدر تحذيرات صارمة باحتمالية تدخلها المباشر في أسواق الصرف للحد من الهبوط.",
                "date": "2026-06-01",
                "category": "عالمي",
                "icon": "fa-chart-line"
            },
            {
                "id": 6,
                "title": "الذهب يسجل مستويات قياسية جديدة مع تزايد الطلب على الملاذ الآمن",
                "summary": "قفز سعر أونصة الذهب في تداولات هذا الأسبوع متجاوزاً مستويات قياسية تاريخية جديدة، في ظل إقبال واسع النطاق من المستثمرين الباحثين عن حماية أصولهم ضد تذبذبات الصرف ومخاوف التباطؤ الصناعي العالمي.",
                "date": "2026-06-01",
                "category": "عالمي",
                "icon": "fa-gem"
            },
            {
                "id": 7,
                "title": "البنك المركزي العراقي يطلق حزمة تسهيلات لدعم الدينار واستقراره في الأسواق المحلية",
                "summary": "أعلن محافظ البنك المركزي العراقي عن البدء بتنفيذ آلية جديدة لبيع الدولار للمواطنين والشركات التجارية بسعر الصرف الرسمي، متوقعة انتهاء الفجوة تدريجياً بين سعر الصرف الرسمي وسعر السوق الموازية.",
                "date": "2026-05-30",
                "category": "محلي",
                "icon": "fa-money-bill-transfer"
            },
            {
                "id": 8,
                "title": "موجة تصحيح في أسواق العملات الرقمية والبيتكوين يستقر عند مستويات دعم قوية",
                "summary": "شهدت العملات الرقمية الرئيسية تراجعاً جماعياً بأكثر من 8% في غضون 48 ساعة الأخيرة، حيث عزا المحللون هذا التصحيح لمبيعات مكثفة بهدف جني الأرباح وترقب قرارات الفائدة للبنوك المركزية الكبرى.",
                "date": "2026-05-28",
                "category": "عالمي",
                "icon": "fa-bitcoin"
            },
            {
                "id": 9,
                "title": "تحويلات المغتربين في دول الخليج العربي تسجل مستويات مرتفعة جديدة في الربع الأول",
                "summary": "أظهرت بيانات المصارف المركزية في السعودية والإمارات نمواً ملحوظاً في حجم الحوالات الشخصية الصادرة إلى الخارج، مدفوعة بزيادة النشاط الاقتصادي وتوسع مشاريع القطاع الخاص غير النفطي.",
                "date": "2026-05-25",
                "category": "محلي",
                "icon": "fa-share-nodes"
            },
            {
                "id": 10,
                "title": "اتفاقية تجارية جديدة بين الاتحاد الأوروبي وكندا لدعم سلاسل الإمداد للسلع الأساسية",
                "summary": "وقّع مسؤولون في بروكسل وأوتاوا اتفاقية شراكة استراتيجية جديدة لإعفاء بعض الموارد الصناعية والغذائية من الرسوم، مما ساهم في استقرار اليورو والدولار كندي أمام التقلبات المفاجئة.",
                "date": "2026-05-22",
                "category": "عالمي",
                "icon": "fa-handshake"
            }
        ];
    }
    
    renderNews();
}

function renderNews() {
    elNewsGridContainer.innerHTML = '';
    
    const filtered = cachedNewsArticles.filter(art => {
        if (currentNewsCategory === 'all') return true;
        if (currentNewsCategory === 'global' && art.category === 'عالمي') return true;
        if (currentNewsCategory === 'local' && art.category === 'محلي') return true;
        return false;
    });
    
    if (filtered.length === 0) {
        elNewsGridContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);"><p>لا توجد أخبار في هذه الفئة حالياً.</p></div>';
        return;
    }
    
    filtered.forEach(art => {
        const card = document.createElement('div');
        card.className = 'glass-card news-card';
        
        const categoryClass = art.category === 'محلي' ? 'local' : 'global';
        
        card.innerHTML = `
            <div class="news-card-header">
                <div class="news-icon-wrapper">
                    <i class="fa-solid ${art.icon}"></i>
                </div>
                <span class="news-badge ${categoryClass}">${art.category}</span>
            </div>
            <div class="news-card-body">
                <h3>${art.title}</h3>
                <p>${art.summary}</p>
            </div>
            <div class="news-card-footer">
                <span class="news-date"><i class="fa-regular fa-calendar"></i> ${art.date}</span>
                <span style="font-weight: 600; color: var(--accent);">اقرأ المزيد <i class="fa-solid fa-arrow-left" style="font-size:0.75rem; margin-right:0.3rem;"></i></span>
            </div>
        `;
        
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            showToast('هذه ميزة تجريبية، سيتم توفير المقال الكامل قريباً.', 'warning');
        });
        
        elNewsGridContainer.appendChild(card);
    });
}

/* ==========================================================================
   EXCLUSIVE DASHBOARDS: RATE ALERTS SYSTEM
   ========================================================================== */
async function loadAlerts() {
    if (appState.username === 'guest') return;
    
    let alerts = [];
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/alerts?username=${appState.username}`);
            if (res.ok) {
                const data = await res.json();
                alerts = data.alerts;
            }
        } catch (e) {
            console.error("Error loading alerts from database", e);
        }
    } else {
        alerts = JSON.parse(localStorage.getItem(`currency_alerts_${appState.username}`) || '[]');
    }
    
    appState.alerts = alerts;
    renderAlertsList();
}

function renderAlertsList() {
    const alerts = appState.alerts || [];
    
    if (alerts.length === 0) {
        elAlertsEmpty.classList.remove('hidden');
        elAlertsListContainer.classList.add('hidden');
        return;
    }
    
    elAlertsEmpty.classList.add('hidden');
    elAlertsListContainer.classList.remove('hidden');
    elAlertsListContainer.innerHTML = '';
    
    alerts.forEach(alert => {
        const fromMeta = getCurrencyMeta(alert.from);
        const toMeta = getCurrencyMeta(alert.to);
        
        const item = document.createElement('div');
        item.className = 'alert-item';
        item.innerHTML = `
            <div class="alert-details">
                <div class="alert-pair-info">
                    <img src="https://flagcdn.com/w40/${fromMeta.country}.png" alt="${alert.from} flag" class="flag-icon" style="width: 18px; height: 12px; border-radius: 2px;">
                    <span class="alert-code">${alert.from}</span>
                    <i class="fa-solid fa-arrow-left" style="font-size:0.6rem; color:var(--text-secondary);"></i>
                    <img src="https://flagcdn.com/w40/${toMeta.country}.png" alt="${alert.to} flag" class="flag-icon" style="width: 18px; height: 12px; border-radius: 2px;">
                    <span class="alert-code">${alert.to}</span>
                </div>
                <div class="alert-rate-display">
                    الهدف: 1 ${alert.from} = <strong>${alert.targetRate.toFixed(4)}</strong> ${alert.to}
                </div>
            </div>
            <div class="alert-actions">
                <span class="alert-badge">نشط</span>
                <button class="alert-delete-btn" title="حذف التنبيه" data-id="${alert.id}">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
        
        item.querySelector('.alert-delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteAlert(alert.id);
        });
        
        elAlertsListContainer.appendChild(item);
    });
}

function openAddAlertModal() {
    alertState.from = appState.from;
    alertState.to = appState.to;
    
    elAlertFromCode.textContent = alertState.from;
    elAlertToCode.textContent = alertState.to;
    
    const currentRate = convertCurrencies(1, alertState.from, alertState.to);
    elAlertTargetInput.value = currentRate.toFixed(4);
    elAlertTargetInput.placeholder = currentRate.toFixed(4);
    
    elAddAlertModal.classList.remove('hidden');
    elAlertTargetInput.focus();
}

function closeAddAlertModal() {
    elAddAlertModal.classList.add('hidden');
}

async function handleConfirmSaveAlert() {
    const targetVal = parseFloat(elAlertTargetInput.value);
    if (isNaN(targetVal) || targetVal <= 0) {
        showToast('يرجى إدخال قيمة مستهدفة صالحة أكبر من الصفر.', 'danger');
        return;
    }
    
    const newAlert = {
        from: alertState.from,
        to: alertState.to,
        targetRate: targetVal
    };
    
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/alerts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: appState.username,
                    from: newAlert.from,
                    to: newAlert.to,
                    targetRate: newAlert.targetRate
                })
            });
            if (res.ok) {
                showToast('تم حفظ وتفعيل تنبيه سعر الصرف بنجاح.', 'success');
                closeAddAlertModal();
                await loadAlerts();
                await fetchUserProfile();
                return;
            }
        } catch (e) {
            console.error("Error saving alert to backend", e);
        }
    }
    
    const localAlerts = JSON.parse(localStorage.getItem(`currency_alerts_${appState.username}`) || '[]');
    const alertId = Date.now();
    localAlerts.push({
        id: alertId,
        from: newAlert.from,
        to: newAlert.to,
        targetRate: newAlert.targetRate,
        time: new Date().toISOString().split('T')[0]
    });
    localStorage.setItem(`currency_alerts_${appState.username}`, JSON.stringify(localAlerts));
    showToast('تم حفظ التنبيه محلياً بنجاح.', 'success');
    closeAddAlertModal();
    await loadAlerts();
    await fetchUserProfile();
}

async function deleteAlert(alertId) {
    if (appState.backendMode) {
        try {
            const res = await fetch(`${appState.backendUrl}/api/alerts?username=${appState.username}&id=${alertId}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                showToast('تم حذف تنبيه سعر الصرف.', 'warning');
                await loadAlerts();
                await fetchUserProfile();
                return;
            }
        } catch (e) {
            console.error("Error deleting alert from backend", e);
        }
    }
    
    let localAlerts = JSON.parse(localStorage.getItem(`currency_alerts_${appState.username}`) || '[]');
    localAlerts = localAlerts.filter(a => a.id !== alertId);
    localStorage.setItem(`currency_alerts_${appState.username}`, JSON.stringify(localAlerts));
    showToast('تم حذف التنبيه محلياً.', 'warning');
    await loadAlerts();
    await fetchUserProfile();
}

/* ==========================================================================
   PREMIUM REPORT EXPORTER
   ========================================================================== */
function exportTransactionsToCSV() {
    const notes = appState.savedNotes || [];
    if (notes.length === 0) {
        showToast('لا يوجد معاملات محفوظة لتصديرها.', 'warning');
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "العملة الأساسية,المبلغ,العملة المستهدفة,القيمة المحسوبة,التاريخ,الملاحظة\n";
    
    notes.forEach(note => {
        const from = note.from;
        const amount = note.amount;
        const to = note.to;
        const result = convertCurrencies(amount, from, to).toFixed(2);
        const date = note.time;
        const noteText = note.note.replace(/,/g, ' ');
        
        csvContent += `${from},${amount},${to},${result},${date},${noteText}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `سجل_معاملات_${appState.username}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('تم تصدير سجل المعاملات بصيغة CSV بنجاح', 'success');
}

/* ==========================================================================
   SPA TAB ROUTING SWITCHER
   ========================================================================== */
function setupTabNavigation() {
    elNavTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            elNavTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const selectedTab = tab.getAttribute('data-tab');
            
            document.querySelectorAll('.tab-view').forEach(view => {
                view.classList.remove('active-view');
                view.classList.add('hidden-view');
            });
            
            if (selectedTab === 'home') {
                elTabHome.classList.remove('hidden-view');
                elTabHome.classList.add('active-view');
            } else if (selectedTab === 'news') {
                elTabNews.classList.remove('hidden-view');
                elTabNews.classList.add('active-view');
                loadNews();
            } else if (selectedTab === 'account') {
                elTabAccount.classList.remove('hidden-view');
                elTabAccount.classList.add('active-view');
                updateProfileView();
            }
        });
    });
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
    // Input events
    elAmountInput.addEventListener('input', () => {
        if (elAmountInput.value < 0) elAmountInput.value = 0;
        updateConversion();
        triggerSaveHistoryDebounced();
    });
    
    // Main currency triggers
    elFromTrigger.addEventListener('click', () => openCurrencyModal('from'));
    elToTrigger.addEventListener('click', () => openCurrencyModal('to'));
    
    // Swap button
    elSwapBtn.addEventListener('click', () => {
        const temp = appState.from;
        appState.from = appState.to;
        appState.to = temp;
        
        const icon = elSwapBtn.querySelector('i');
        icon.classList.add('spinning');
        setTimeout(() => icon.classList.remove('spinning'), 600);
        
        updateConversion();
        updateMatrix();
        saveHistoryRecord();
    });
    
    // Refresh button
    elRefreshBtn.addEventListener('click', () => {
        fetchRates();
    });
    
    // Favorite toggle button
    elFavoriteToggleBtn.addEventListener('click', () => {
        toggleFavorite();
    });
    
    // Theme toggle
    elThemeToggle.addEventListener('click', toggleTheme);
    
    // Main Currency Modal controls
    elModalCloseBtn.addEventListener('click', closeCurrencyModal);
    elModal.addEventListener('click', (e) => {
        if (e.target === elModal) closeCurrencyModal();
    });
    elModalSearch.addEventListener('input', (e) => {
        filterCurrencies(e.target.value);
    });

    // Auth Switcher Tabs
    elAuthTabLogin.addEventListener('click', () => {
        elAuthTabLogin.classList.add('active');
        elAuthTabRegister.classList.remove('active');
        elFormLoginBlock.classList.remove('hidden');
        elFormRegisterBlock.classList.add('hidden');
    });
    elAuthTabRegister.addEventListener('click', () => {
        elAuthTabRegister.classList.add('active');
        elAuthTabLogin.classList.remove('active');
        elFormRegisterBlock.classList.remove('hidden');
        elFormLoginBlock.classList.add('hidden');
    });

    // Contact Method Toggles (Login)
    if (elLoginContactToggle) {
        elLoginContactToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elLoginContactToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loginContactType = btn.getAttribute('data-type');
                
                if (loginContactType === 'email') {
                    elLoginContactLabel.textContent = 'البريد الإلكتروني (Gmail)';
                    elLoginEmailInput.placeholder = 'example@gmail.com';
                    elLoginEmailInput.type = 'email';
                    elLoginContactIcon.innerHTML = '<i class="fa-solid fa-envelope"></i>';
                } else {
                    elLoginContactLabel.textContent = 'رقم الهاتف (Phone)';
                    elLoginEmailInput.placeholder = '05xxxxxxxx';
                    elLoginEmailInput.type = 'tel';
                    elLoginContactIcon.innerHTML = '<i class="fa-solid fa-phone"></i>';
                }
            });
        });
    }

    // Contact Method Toggles (Register)
    if (elRegisterContactToggle) {
        elRegisterContactToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elRegisterContactToggle.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                registerContactType = btn.getAttribute('data-type');
                
                if (registerContactType === 'email') {
                    elRegisterContactLabel.textContent = 'البريد الإلكتروني (Gmail)';
                    elRegisterEmailInput.placeholder = 'example@gmail.com';
                    elRegisterEmailInput.type = 'email';
                    elRegisterContactIcon.innerHTML = '<i class="fa-solid fa-envelope"></i>';
                } else {
                    elRegisterContactLabel.textContent = 'رقم الهاتف (Phone)';
                    elRegisterEmailInput.placeholder = '05xxxxxxxx';
                    elRegisterEmailInput.type = 'tel';
                    elRegisterContactIcon.innerHTML = '<i class="fa-solid fa-phone"></i>';
                }
            });
        });
    }

    // Sign In form handles
    elLoginSubmitBtn.addEventListener('click', loginUser);
    elLoginPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loginUser();
    });

    // Register form handles
    elRegisterSubmitBtn.addEventListener('click', registerUser);
    elRegisterPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') registerUser();
    });

    // Profile Actions
    elLogoutBtn.addEventListener('click', logoutUser);

    // Save with Note Modal controls
    elSaveNoteTriggerBtn.addEventListener('click', openSaveNoteModal);
    elSaveNoteModalCloseBtn.addEventListener('click', closeSaveNoteModal);
    elSaveNoteModal.addEventListener('click', (e) => {
        if (e.target === elSaveNoteModal) closeSaveNoteModal();
    });
    elConfirmSaveNoteBtn.addEventListener('click', handleConfirmSaveNote);
    elConversionNoteInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleConfirmSaveNote();
    });

    // Clear history
    elClearHistoryBtn.addEventListener('click', clearHistory);
    
    // Rate Alert Modal controls
    elAddAlertTriggerBtn.addEventListener('click', openAddAlertModal);
    elAddAlertModalCloseBtn.addEventListener('click', closeAddAlertModal);
    elAddAlertModal.addEventListener('click', (e) => {
        if (e.target === elAddAlertModal) closeAddAlertModal();
    });
    elAlertFromTrigger.addEventListener('click', () => openCurrencyModal('alert-from'));
    elAlertToTrigger.addEventListener('click', () => openCurrencyModal('alert-to'));
    elConfirmSaveAlertBtn.addEventListener('click', handleConfirmSaveAlert);
    elAlertTargetInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleConfirmSaveAlert();
    });
    
    // CSV Exporter Trigger
    const elExportReport = document.getElementById('btn-export-report');
    if (elExportReport) {
        elExportReport.addEventListener('click', exportTransactionsToCSV);
    }

    // Avatar upload listener
    if (elAvatarUploadInput) {
        elAvatarUploadInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            // Validate image
            if (!file.type.startsWith('image/')) {
                showToast('يرجى اختيار صورة صحيحة.', 'danger');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                showToast('حجم الصورة يجب أن يكون أقل من 5 ميجابايت.', 'danger');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = async (event) => {
                const base64String = event.target.result;
                appState.avatar = base64String;
                
                // Save locally first
                localStorage.setItem(`currency_avatar_${appState.username}`, base64String);
                
                // Save to backend if online
                if (appState.backendMode) {
                    try {
                        const res = await fetch(`${appState.backendUrl}/api/user/avatar`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: appState.username,
                                avatar: base64String
                            })
                        });
                        if (!res.ok) {
                            console.error("Failed to upload avatar to server");
                        }
                    } catch (err) {
                        console.error("Error connecting to server to save avatar:", err);
                    }
                }
                
                updateProfileView();
                showToast('تم تحديث الصورة الشخصية بنجاح.', 'success');
            };
            reader.readAsDataURL(file);
        });
    }

    // News category filtering buttons
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentNewsCategory = btn.getAttribute('data-category');
            renderNews();
        });
    });
}

/* ==========================================================================
   TOAST NOTIFICATION COMPONENT
   ========================================================================== */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'fa-circle-check';
    if (type === 'danger') icon = 'fa-circle-xmark';
    if (type === 'warning') icon = 'fa-triangle-exclamation';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}
