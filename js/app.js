/**
 * ============================================================================
 * VJIT ACM Student Chapter — Modular Application Controller (js/app.js)
 * ============================================================================
 * Powers all multi-page routes (index.html, about.html, events.html,
 * governance.html, sigs.html, membership.html, contact.html) using the
 * centralized window.CHAPTER_DATA object from /data/chapterData.js.
 */

let currentEventYearFilter = 'ALL';
let currentEventCategoryFilter = 'ALL';

document.addEventListener('DOMContentLoaded', () => {
    mountSharedModals();
    renderQuickStats();
    renderNotices('ALL');
    renderHomeHighlights();
    renderAboutGallery();
    renderEventsArchive();
    renderGovernanceHierarchy();
    renderSigsAndResources();

    // Support deep-linking to a specific event dossier via ?event=codestorm-2026
    const params = new URLSearchParams(window.location.search);
    const eventParam = params.get('event');
    if (eventParam) {
        openEventReportModal(eventParam);
    }
});

// ============================================================================
// 1. SHARED INTERACTIVE MODALS (Mounted Across All Pages)
// ============================================================================
function mountSharedModals() {
    const root = document.getElementById('shared-modals-root');
    if (!root) return;

    root.innerHTML = `
        <!-- MODAL 1: EVENT REPORT DOSSIER & PDF PRINT HOOK -->
        <div id="event-report-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="er-modal-title">
            <div class="bg-white border border-[#CBD5E1] max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]">
                <div class="bg-[#F8FAFC] px-6 py-4 flex items-start justify-between gap-4 border-b border-[#CBD5E1]">
                    <div>
                        <div class="text-xs text-slate-500">
                            <span id="er-modal-ay">AY 2026–27</span> &middot; <span id="er-modal-category">Category</span> &middot; <span id="er-modal-docid">DOC-ID</span>
                        </div>
                        <h3 id="er-modal-title" class="font-serif text-lg sm:text-xl font-bold text-acm-navy mt-0.5">Event Title</h3>
                    </div>
                    <button type="button" onclick="closeEventReportModal()" aria-label="Close modal" class="text-slate-500 hover:text-slate-900 p-1 cursor-pointer no-print">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <div class="p-6 overflow-y-auto modal-body-scroll space-y-6 text-sm">
                    <div class="border-b border-slate-300 pb-3 flex items-center justify-between gap-4 text-xs text-slate-600">
                        <div>
                            <strong class="text-acm-navy">Vidya Jyothi Institute of Technology (Autonomous)</strong><br>
                            Department of CSE (AI &amp; ML) &middot; ACM Student Chapter Event Report
                        </div>
                        <div class="text-right">
                            Status: <span id="er-modal-status" class="font-semibold text-slate-800">Archived</span><br>
                            Ref: <span id="er-modal-audit">NAAC-CR3</span>
                        </div>
                    </div>

                    <table class="w-full text-left border-collapse border border-[#CBD5E1] text-xs">
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 w-1/4 border-r border-[#CBD5E1]">Date</th>
                                <td id="er-modal-date" class="py-2.5 px-3 text-slate-800 w-1/4 border-r border-[#CBD5E1]">—</td>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 w-1/4 border-r border-[#CBD5E1]">Venue</th>
                                <td id="er-modal-venue" class="py-2.5 px-3 text-slate-800 w-1/4">—</td>
                            </tr>
                            <tr>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 border-r border-[#CBD5E1]">Resource Person / Guest</th>
                                <td id="er-modal-speaker" class="py-2.5 px-3 text-slate-800 border-r border-[#CBD5E1]">—</td>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 border-r border-[#CBD5E1]">Participant Count</th>
                                <td id="er-modal-participants" class="py-2.5 px-3 text-slate-800 font-semibold">—</td>
                            </tr>
                            <tr>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 border-r border-[#CBD5E1]">Faculty Coordinators</th>
                                <td id="er-modal-faculty" class="py-2.5 px-3 text-slate-800 border-r border-[#CBD5E1]">—</td>
                                <th class="py-2.5 px-3 bg-[#F8FAFC] font-semibold text-slate-600 border-r border-[#CBD5E1]">Student Coordinators</th>
                                <td id="er-modal-students" class="py-2.5 px-3 text-slate-800">—</td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <h4 class="font-serif font-bold text-sm text-acm-navy border-b border-slate-200 pb-1 mb-2">1. Event Summary</h4>
                        <p id="er-modal-summary" class="text-slate-700 leading-relaxed"></p>
                    </div>

                    <div>
                        <h4 class="font-serif font-bold text-sm text-acm-navy border-b border-slate-200 pb-1 mb-2">2. Proceedings &amp; Outcomes</h4>
                        <ul id="er-modal-highlights" class="list-disc pl-5 space-y-1.5 text-slate-700"></ul>
                    </div>

                    <div>
                        <h4 class="font-serif font-bold text-sm text-acm-navy border-b border-slate-200 pb-1 mb-3">3. Photograph Archive</h4>
                        <div id="er-modal-gallery" class="grid grid-cols-1 sm:grid-cols-3 gap-4"></div>
                    </div>
                </div>

                <div class="bg-[#F8FAFC] px-6 py-3 border-t border-[#CBD5E1] flex items-center justify-between no-print">
                    <span class="text-xs text-slate-500">Departmental Activity Record</span>
                    <div class="flex items-center gap-2.5">
                        <button type="button" onclick="printSingleModal('event-report-modal')" class="bg-acm-blue hover:bg-acm-hover text-white text-xs font-semibold px-4 py-2 cursor-pointer">
                            Download Event Report (PDF)
                        </button>
                        <button type="button" onclick="closeEventReportModal()" class="bg-white border border-[#CBD5E1] text-slate-700 text-xs font-medium px-4 py-2 cursor-pointer">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL 2: CIRCULAR PREVIEW MODAL -->
        <div id="circular-preview-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="circ-modal-title">
            <div class="bg-white border border-[#CBD5E1] max-w-xl w-full overflow-hidden">
                <div class="bg-[#F8FAFC] px-6 py-4 flex items-center justify-between border-b border-[#CBD5E1]">
                    <div>
                        <span id="circ-modal-ref" class="text-xs text-slate-500 block">Circular Reference</span>
                        <h3 id="circ-modal-title" class="font-serif text-base font-bold text-acm-navy mt-0.5">Circular Title</h3>
                    </div>
                    <button type="button" onclick="closeCircularModal()" aria-label="Close modal" class="text-slate-500 hover:text-slate-900 p-1 cursor-pointer no-print">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <div class="p-6 space-y-4 text-sm modal-body-scroll max-h-[75vh] overflow-y-auto">
                    <div class="border-b border-slate-300 pb-3 text-center">
                        <div class="text-xs font-bold uppercase tracking-wider text-acm-navy">Vidya Jyothi Institute of Technology (Autonomous)</div>
                        <div class="text-xs text-slate-600">Department of Computer Science &amp; Engineering (AI &amp; ML) &middot; ACM Student Chapter</div>
                    </div>

                    <div class="flex items-center justify-between text-xs text-slate-600 bg-[#F8FAFC] p-2.5 border border-[#CBD5E1]">
                        <span><strong>Ref:</strong> <span id="circ-modal-no">—</span></span>
                        <span><strong>Date:</strong> <span id="circ-modal-date">—</span></span>
                        <span id="circ-modal-badge" class="font-semibold text-acm-navy">—</span>
                    </div>

                    <p id="circ-modal-body" class="text-slate-700 leading-relaxed whitespace-pre-line"></p>

                    <div class="pt-6 border-t border-slate-200 grid grid-cols-2 gap-4 text-xs text-slate-600">
                        <div>
                            <strong>Issued By:</strong><br>
                            Ayush Kumar Jha, Chapter Secretary<br>
                            K. Ajay Nayak, Chapter Chair
                        </div>
                        <div class="text-right">
                            <strong>Approved By:</strong><br>
                            Mr. K. Srinivasa Rao, ACM Coordinator<br>
                            Dr. Sayed Nazeer Ahmed, HoD CSE (AI &amp; ML)
                        </div>
                    </div>
                </div>

                <div class="bg-[#F8FAFC] px-6 py-3 border-t border-[#CBD5E1] flex items-center justify-between no-print">
                    <button type="button" onclick="printSingleModal('circular-preview-modal')" class="text-xs font-medium text-acm-blue hover:underline cursor-pointer">
                        Print Circular
                    </button>
                    <div class="flex items-center gap-2">
                        <button type="button" id="circ-modal-action-btn" class="bg-acm-blue hover:bg-acm-hover text-white text-xs font-semibold px-4 py-1.5 cursor-pointer">
                            Open Record
                        </button>
                        <button type="button" onclick="closeCircularModal()" class="bg-white border border-[#CBD5E1] text-slate-700 text-xs font-medium px-4 py-1.5 cursor-pointer">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL 3: STUDENT MEMBERSHIP ONBOARDING MODAL -->
        <div id="membership-modal" class="fixed inset-0 z-50 hidden bg-slate-900/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="mem-modal-title">
            <div class="bg-white border border-[#CBD5E1] max-w-lg w-full overflow-hidden max-h-[92vh] flex flex-col">
                <div class="bg-[#F8FAFC] px-6 py-4 flex items-center justify-between border-b border-[#CBD5E1]">
                    <div>
                        <span class="text-xs text-slate-500">AY 2026–2027 Enrollment</span>
                        <h3 id="mem-modal-title" class="font-serif text-base font-bold text-acm-navy">ACM VJIT Student Membership Registration</h3>
                    </div>
                    <button type="button" onclick="closeMembershipModal()" aria-label="Close modal" class="text-slate-500 hover:text-slate-900 p-1 cursor-pointer">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <form id="modal-membership-form" onsubmit="handleMembershipFormSubmit(event, 'modal')" class="p-6 space-y-4 text-sm overflow-y-auto" novalidate>
                    <div id="modal-form-error" class="hidden p-3 bg-red-50 border border-red-300 text-xs text-red-800"></div>
                    <div id="modal-form-success" class="hidden p-3.5 bg-[#F8FAFC] border border-acm-blue text-xs text-slate-800 space-y-2"></div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label for="modal-student-name" class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                            <input type="text" id="modal-student-name" required placeholder="e.g., Ananya Reddy" class="w-full border border-[#CBD5E1] px-3 py-2 text-sm focus:outline-none focus:border-acm-blue">
                        </div>
                        <div>
                            <label for="modal-roll-number" class="block text-xs font-semibold text-slate-700 mb-1">VJIT Roll Number *</label>
                            <input type="text" id="modal-roll-number" required maxlength="10" placeholder="e.g., 25911A6614" class="w-full border border-[#CBD5E1] px-3 py-2 text-sm uppercase focus:outline-none focus:border-acm-blue">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div>
                            <label for="modal-branch" class="block text-xs font-semibold text-slate-700 mb-1">Branch *</label>
                            <select id="modal-branch" required class="w-full border border-[#CBD5E1] px-2.5 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:border-acm-blue">
                                <option value="CSE (AI & ML)">CSE (AI &amp; ML)</option>
                                <option value="CSE">CSE</option>
                                <option value="CSE (Data Science)">CSE (Data Science)</option>
                                <option value="Information Technology">IT</option>
                                <option value="ECE">ECE</option>
                            </select>
                        </div>
                        <div>
                            <label for="modal-section" class="block text-xs font-semibold text-slate-700 mb-1">Section *</label>
                            <select id="modal-section" required class="w-full border border-[#CBD5E1] px-2.5 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:border-acm-blue">
                                <option value="Section A">Section A</option>
                                <option value="Section B">Section B</option>
                                <option value="Section C">Section C</option>
                                <option value="Section D">Section D</option>
                            </select>
                        </div>
                        <div>
                            <label for="modal-year" class="block text-xs font-semibold text-slate-700 mb-1">Year *</label>
                            <select id="modal-year" required class="w-full border border-[#CBD5E1] px-2.5 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:border-acm-blue">
                                <option value="I Year B.Tech">I Year</option>
                                <option value="II Year B.Tech">II Year</option>
                                <option value="III Year B.Tech">III Year</option>
                                <option value="IV Year B.Tech">IV Year</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                            <label for="modal-email" class="block text-xs font-semibold text-slate-700 mb-1">VJIT Official Email *</label>
                            <input type="email" id="modal-email" required placeholder="25911a6614@vjit.ac.in" class="w-full border border-[#CBD5E1] px-3 py-2 text-sm focus:outline-none focus:border-acm-blue">
                        </div>
                        <div>
                            <label for="modal-sig" class="block text-xs font-semibold text-slate-700 mb-1">Primary SIG Track *</label>
                            <select id="modal-sig" required class="w-full border border-[#CBD5E1] px-2.5 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:border-acm-blue">
                                <option value="SIG-AI & Machine Learning">SIG-AI &amp; ML</option>
                                <option value="SIG-Competitive Programming & Algorithms">SIG-Competitive Programming</option>
                                <option value="SIG-Full Stack & Cloud Systems">SIG-Full Stack &amp; Cloud</option>
                            </select>
                        </div>
                    </div>

                    <div class="p-3.5 bg-[#F8FAFC] border border-[#CBD5E1] space-y-2.5">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-semibold text-acm-navy">ACM Global Membership ID</span>
                            <div class="inline-flex border border-[#CBD5E1] bg-white text-[11px]">
                                <button type="button" id="modal-toggle-new" onclick="toggleAcmIdField('modal', 'new')" class="px-2.5 py-1 font-semibold bg-acm-blue text-white cursor-pointer">
                                    New Applicant
                                </button>
                                <button type="button" id="modal-toggle-existing" onclick="toggleAcmIdField('modal', 'existing')" class="px-2.5 py-1 text-slate-700 hover:bg-slate-50 border-l border-[#CBD5E1] cursor-pointer">
                                    Existing ACM ID
                                </button>
                            </div>
                        </div>
                        <input type="hidden" id="modal-applicant-type" value="new">
                        <div id="modal-acm-id-wrapper" class="hidden">
                            <input type="text" id="modal-acm-id" maxlength="10" placeholder="Enter 7-digit ACM Member ID (e.g., 9845120)" class="w-full border border-[#CBD5E1] px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-acm-blue">
                        </div>
                        <p id="modal-acm-id-help" class="text-[11px] text-slate-500">
                            New applicants are registered under the VJIT ACM Student Chapter cohort drive.
                        </p>
                    </div>

                    <div class="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
                        <button type="button" onclick="closeMembershipModal()" class="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-[#CBD5E1] cursor-pointer">
                            Cancel
                        </button>
                        <button type="submit" class="bg-acm-blue hover:bg-acm-hover text-white text-xs font-semibold px-5 py-2 transition-colors cursor-pointer">
                            Submit Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// ============================================================================
// 2. MOBILE NAVIGATION DRAWER
// ============================================================================
function toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const btn = document.getElementById('mobile-menu-toggle');
    if (!drawer) return;
    if (drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileDrawer();
    }
}

function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const btn = document.getElementById('mobile-menu-toggle');
    if (!drawer) return;
    drawer.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

// ============================================================================
// 3. HOME PAGE RENDERERS
// ============================================================================
function setHeroPhoto(index) {
    const item = window.CHAPTER_DATA.heroShowcasePhotos[index];
    if (!item) return;

    const imgEl = document.getElementById('hero-showcase-img');
    const capEl = document.getElementById('hero-showcase-caption');
    if (imgEl) imgEl.src = item.url;
    if (capEl) capEl.textContent = item.caption;

    document.querySelectorAll('.hero-photo-btn').forEach((btn, idx) => {
        if (idx === index) {
            btn.className = "hero-photo-btn px-2 py-0.5 border border-acm-blue text-acm-blue font-semibold cursor-pointer";
        } else {
            btn.className = "hero-photo-btn px-2 py-0.5 border border-[#CBD5E1] text-slate-600 hover:border-slate-400 cursor-pointer";
        }
    });
}

function renderQuickStats() {
    const container = document.getElementById('home-quick-stats');
    if (!container) return;

    container.innerHTML = window.CHAPTER_DATA.quickStats.map(stat => `
        <div class="p-5">
            <div class="text-xs text-slate-500 uppercase tracking-wider">${stat.label}</div>
            <div class="font-serif text-2xl font-bold text-acm-navy mt-1">${stat.value}</div>
            <div class="text-xs text-slate-600 mt-0.5">${stat.subtext}</div>
        </div>
    `).join('');
}

function renderNotices(filterBadge = 'ALL') {
    const listEl = document.getElementById('notice-board-list');
    if (!listEl) return;

    document.querySelectorAll('.notice-filter-pill').forEach(pill => {
        if (pill.getAttribute('data-nfilter') === filterBadge) {
            pill.className = "notice-filter-pill font-semibold text-acm-blue underline underline-offset-4 cursor-pointer";
        } else {
            pill.className = "notice-filter-pill text-slate-600 hover:text-acm-blue cursor-pointer";
        }
    });

    const filtered = window.CHAPTER_DATA.notices.filter(n => filterBadge === 'ALL' || n.badge === filterBadge);

    listEl.innerHTML = filtered.map(notice => `
        <article class="p-4 hover:bg-[#F8FAFC] transition-colors">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>
                    ${notice.isUrgent
                        ? `<strong class="text-vjit-crimson uppercase tracking-wider">${notice.badge}</strong>`
                        : `<strong class="text-acm-blue uppercase tracking-wider">${notice.badge}</strong>`
                    }
                    &middot; ${notice.date}
                </span>
                <span>${notice.circularNo}</span>
            </div>
            <h4 class="font-serif font-bold text-sm text-acm-navy leading-snug">
                <button type="button" onclick="openCircularModal('${notice.id}')" class="text-left hover:text-acm-blue cursor-pointer">
                    ${notice.title}
                </button>
            </h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">${notice.summary}</p>
            <div class="mt-2">
                <button type="button" onclick="openCircularModal('${notice.id}')" class="text-xs font-medium text-acm-blue hover:underline cursor-pointer">
                    Read Circular &rarr;
                </button>
            </div>
        </article>
    `).join('');
}

function renderHomeHighlights() {
    const container = document.getElementById('home-highlights-grid');
    if (!container) return;

    const featured = window.CHAPTER_DATA.events.filter(ev => ev.featuredOnHome);
    container.innerHTML = featured.map(ev => `
        <article class="panel p-5 bg-white flex flex-col sm:flex-row gap-5">
            <div class="sm:w-44 aspect-16/10 sm:aspect-auto bg-slate-100 border border-slate-200 shrink-0 overflow-hidden">
                <img src="${ev.bannerImage}" alt="${ev.title}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 flex flex-col justify-between">
                <div>
                    <div class="text-xs text-slate-500 mb-1">
                        <span class="font-semibold text-acm-blue uppercase tracking-wider">${ev.category}</span> &middot; ${ev.date}
                    </div>
                    <h4 class="font-serif text-base font-bold text-acm-navy leading-snug mb-1.5">
                        <button type="button" onclick="openEventReportModal('${ev.id}')" class="text-left hover:text-acm-blue cursor-pointer">
                            ${ev.title}
                        </button>
                    </h4>
                    <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">${ev.summary}</p>
                </div>
                <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span class="text-slate-500">${ev.participants}</span>
                    <button type="button" onclick="openEventReportModal('${ev.id}')" class="font-semibold text-acm-blue hover:underline cursor-pointer">
                        View Event Report &rarr;
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================================================
// 4. ABOUT PAGE RENDERER
// ============================================================================
function renderAboutGallery() {
    const container = document.getElementById('about-gallery-grid');
    if (!container) return;

    container.innerHTML = window.CHAPTER_DATA.gallery.map(item => `
        <figure class="panel p-2 bg-white">
            <div class="aspect-16/10 bg-slate-100 overflow-hidden">
                <img src="${item.url}" alt="${item.title}" class="w-full h-full object-cover">
            </div>
            <figcaption class="pt-2.5 px-1">
                <div class="font-serif font-bold text-xs text-acm-navy">${item.title}</div>
                <div class="text-[11px] text-slate-500 mt-0.5">${item.meta}</div>
            </figcaption>
        </figure>
    `).join('');
}

// ============================================================================
// 5. EVENTS & REPORTS ARCHIVE PAGE RENDERER
// ============================================================================
function setEventYearFilter(year) {
    currentEventYearFilter = year;
    document.querySelectorAll('.event-year-btn').forEach((btn, idx) => {
        const borderLeft = idx > 0 ? 'border-l border-[#CBD5E1]' : '';
        if (btn.getAttribute('data-eyear') === year) {
            btn.className = `event-year-btn flex-1 py-1.5 px-2 text-xs font-semibold bg-acm-blue text-white ${borderLeft} cursor-pointer`;
        } else {
            btn.className = `event-year-btn flex-1 py-1.5 px-2 text-xs text-slate-700 hover:bg-slate-50 ${borderLeft} cursor-pointer`;
        }
    });
    renderEventsArchive();
}

function setEventCategoryFilter(category) {
    currentEventCategoryFilter = category;
    document.querySelectorAll('.event-cat-btn').forEach(btn => {
        if (btn.getAttribute('data-ecat') === category) {
            btn.className = "event-cat-btn px-3 py-1.5 text-xs font-semibold border border-acm-blue bg-acm-blue text-white cursor-pointer";
        } else {
            btn.className = "event-cat-btn px-3 py-1.5 text-xs border border-[#CBD5E1] bg-white text-slate-700 hover:bg-slate-50 cursor-pointer";
        }
    });
    renderEventsArchive();
}

function renderEventsArchive() {
    const grid = document.getElementById('events-archive-grid');
    const countLabel = document.getElementById('events-count-label');
    const searchInput = document.getElementById('event-search-input');
    if (!grid) return;

    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();

    const filtered = window.CHAPTER_DATA.events.filter(ev => {
        const matchesYear = currentEventYearFilter === 'ALL' || ev.academicYear === currentEventYearFilter;
        const matchesCategory =
            currentEventCategoryFilter === 'ALL' ||
            ev.category === currentEventCategoryFilter ||
            (currentEventCategoryFilter === 'Flagship' && ev.isFlagship);
        const matchesSearch =
            !query ||
            ev.title.toLowerCase().includes(query) ||
            ev.summary.toLowerCase().includes(query) ||
            ev.resourcePerson.toLowerCase().includes(query) ||
            ev.venue.toLowerCase().includes(query);
        return matchesYear && matchesCategory && matchesSearch;
    });

    if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${window.CHAPTER_DATA.events.length} archived event reports`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full panel p-8 text-center bg-[#F8FAFC]">
                <p class="font-serif font-bold text-base text-acm-navy">No matching event records</p>
                <button type="button" onclick="setEventYearFilter('ALL'); setEventCategoryFilter('ALL'); document.getElementById('event-search-input').value=''; renderEventsArchive();" class="mt-3 text-xs font-semibold text-acm-blue hover:underline cursor-pointer">
                    Reset Filters
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(ev => `
        <article class="panel bg-white flex flex-col justify-between">
            <div>
                <div class="aspect-16/9 bg-slate-100 border-b border-[#CBD5E1] overflow-hidden">
                    <img src="${ev.bannerImage}" alt="${ev.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                        <span class="font-semibold text-acm-blue uppercase tracking-wider">${ev.category} ${ev.isFlagship ? '&middot; Flagship' : ''}</span>
                        <span>${ev.date} &middot; AY ${ev.academicYear}</span>
                    </div>
                    <h3 class="font-serif text-lg font-bold text-acm-navy leading-snug mb-3">
                        ${ev.title}
                    </h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        ${ev.summary}
                    </p>
                    <div class="text-xs text-slate-600 space-y-1 border-t border-slate-200 pt-3">
                        <div><strong class="text-slate-800">Venue:</strong> ${ev.venue}</div>
                        <div class="truncate"><strong class="text-slate-800">Resource Person:</strong> ${ev.resourcePerson}</div>
                        <div><strong class="text-slate-800">Participation:</strong> ${ev.participants}</div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-3 bg-[#F8FAFC] border-t border-[#CBD5E1] flex items-center justify-between text-xs">
                <span class="text-slate-500">Ref: ${ev.docId}</span>
                <button type="button" onclick="openEventReportModal('${ev.id}')" class="font-semibold text-acm-blue hover:underline cursor-pointer">
                    Open Event Report (PDF) &rarr;
                </button>
            </div>
        </article>
    `).join('');
}

// ============================================================================
// 6. GOVERNANCE & EXECUTIVE COMMITTEE PAGE RENDERER
// ============================================================================
function renderGovernanceHierarchy() {
    const patronsGrid = document.getElementById('governance-patrons-grid');
    if (patronsGrid) {
        patronsGrid.innerHTML = window.CHAPTER_DATA.governance.patrons.map(p => `
            <article class="panel p-4 bg-white flex items-center gap-4">
                <div class="w-16 h-20 border border-[#CBD5E1] bg-slate-50 overflow-hidden shrink-0">
                    ${p.photo
                        ? `<img src="${p.photo}" alt="${p.name}" class="w-full h-full object-cover object-top">`
                        : `<div class="w-full h-full flex items-center justify-center font-serif font-bold text-slate-500">${p.initials}</div>`
                    }
                </div>
                <div class="min-w-0">
                    <div class="text-xs font-semibold text-acm-blue">${p.role}</div>
                    <h4 class="font-serif font-bold text-sm sm:text-base text-acm-navy mt-0.5">${p.name}</h4>
                    <p class="text-xs text-slate-500 mt-0.5">${p.designation}</p>
                </div>
            </article>
        `).join('');
    }

    const facultyGrid = document.getElementById('governance-faculty-grid');
    if (facultyGrid) {
        facultyGrid.innerHTML = window.CHAPTER_DATA.governance.facultySponsors.map(f => `
            <article class="panel p-5 bg-white flex items-start gap-4">
                <div class="w-20 h-24 border border-[#CBD5E1] bg-slate-50 overflow-hidden shrink-0">
                    ${f.photo
                        ? `<img src="${f.photo}" alt="${f.name}" class="w-full h-full object-cover object-top">`
                        : `<div class="w-full h-full flex items-center justify-center font-serif font-bold text-slate-500 text-lg">${f.initials}</div>`
                    }
                </div>
                <div class="min-w-0">
                    <div class="text-xs font-semibold text-acm-blue">${f.role}</div>
                    <h4 class="font-serif font-bold text-base text-acm-navy mt-0.5">${f.name}</h4>
                    <p class="text-xs text-slate-600 mt-0.5">${f.department}</p>
                    <a href="mailto:${f.email}" class="inline-block text-xs text-acm-blue hover:underline mt-2">${f.email}</a>
                </div>
            </article>
        `).join('');
    }

    const bearersGrid = document.getElementById('governance-bearers-grid');
    if (bearersGrid) {
        bearersGrid.innerHTML = window.CHAPTER_DATA.governance.officeBearers.map(ob => `
            <article class="panel bg-white flex flex-col justify-between">
                <div class="p-5 flex items-start gap-4">
                    <div class="w-20 h-24 border border-[#CBD5E1] bg-slate-50 overflow-hidden shrink-0">
                        ${ob.photo
                            ? `<img src="${ob.photo}" alt="${ob.name}" class="w-full h-full object-cover object-top" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center font-serif font-bold text-slate-500 text-lg\\'>${ob.initials}</div>';">`
                            : `<div class="w-full h-full flex items-center justify-center font-serif font-bold text-slate-500 text-lg">${ob.initials}</div>`
                        }
                    </div>
                    <div class="min-w-0">
                        <div class="text-xs font-semibold text-acm-blue">${ob.role}</div>
                        <h4 class="font-serif font-bold text-base text-acm-navy mt-0.5">${ob.name}</h4>
                        <p class="text-xs text-slate-500 mt-1">${ob.branch}</p>
                    </div>
                </div>
                <div class="px-5 py-2.5 bg-[#F8FAFC] border-t border-[#CBD5E1] flex items-center justify-between text-xs text-slate-500">
                    <span>Office Bearer (2026–27)</span>
                    <div class="flex items-center gap-3 text-slate-500">
                        <a href="mailto:${ob.email}" class="hover:text-acm-blue" title="Email ${ob.name}" aria-label="Email ${ob.name}">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                        <a href="${ob.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-acm-blue" title="LinkedIn" aria-label="${ob.name} LinkedIn">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="${ob.github}" target="_blank" rel="noopener noreferrer" class="hover:text-acm-blue" title="GitHub" aria-label="${ob.name} GitHub">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    const membersGrid = document.getElementById('governance-members-grid');
    if (membersGrid) {
        membersGrid.innerHTML = window.CHAPTER_DATA.governance.coreAndStudentMembers.map(m => `
            <div class="panel p-3 bg-white flex items-center gap-3">
                <div class="w-10 h-12 border border-[#CBD5E1] bg-slate-50 overflow-hidden shrink-0">
                    ${m.photo
                        ? `<img src="${m.photo}" alt="${m.name}" class="w-full h-full object-cover object-top" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center font-serif font-bold text-slate-500 text-xs\\'>${m.initials}</div>';">`
                        : `<div class="w-full h-full flex items-center justify-center font-serif font-bold text-slate-500 text-xs">${m.initials}</div>`
                    }
                </div>
                <div class="min-w-0">
                    <div class="font-serif font-bold text-xs text-acm-navy truncate">${m.name}</div>
                    <div class="text-[11px] text-slate-500 truncate">${m.role}</div>
                </div>
            </div>
        `).join('');
    }
}

// ============================================================================
// 7. SIGS & RESOURCES PAGE RENDERER
// ============================================================================
function renderSigsAndResources() {
    const sigsGrid = document.getElementById('sigs-cards-grid');
    if (sigsGrid) {
        sigsGrid.innerHTML = window.CHAPTER_DATA.sigs.map(sig => `
            <article class="panel p-6 bg-white flex flex-col justify-between">
                <div>
                    <h3 class="font-serif text-lg font-bold text-acm-navy mb-2">${sig.name}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">${sig.description}</p>
                    <div class="text-xs text-slate-600 space-y-1 py-3 border-y border-slate-200 mb-4">
                        <div><strong class="text-slate-800">Schedule:</strong> ${sig.schedule}</div>
                        <div><strong class="text-slate-800">Student Leads:</strong> ${sig.leads}</div>
                    </div>
                    <div class="mb-5">
                        <div class="text-xs font-semibold text-acm-navy mb-1.5">Focus Areas</div>
                        <ul class="list-disc pl-4 space-y-1 text-xs text-slate-600">
                            ${sig.curriculum.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="pt-3 border-t border-slate-200 flex flex-wrap gap-3 text-xs">
                    ${sig.links.map(lk => `
                        <a href="${lk.url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-acm-blue hover:underline">
                            ${lk.label} &nearr;
                        </a>
                    `).join('')}
                </div>
            </article>
        `).join('');
    }

    const resGrid = document.getElementById('sigs-resources-grid');
    if (resGrid) {
        resGrid.innerHTML = window.CHAPTER_DATA.resources.map(res => `
            <article class="panel p-5 bg-white flex flex-col justify-between">
                <div>
                    <div class="text-xs text-acm-blue font-semibold mb-1">${res.category}</div>
                    <h4 class="font-serif font-bold text-sm text-acm-navy mb-1.5">${res.title}</h4>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">${res.summary}</p>
                </div>
                <div class="bg-[#F8FAFC] border border-[#CBD5E1] p-2.5 font-mono text-[11px] text-slate-700 overflow-x-auto">
                    ${res.commands}
                </div>
            </article>
        `).join('');
    }
}

// ============================================================================
// 8. MODAL CONTROLLERS & FORM VALIDATION
// ============================================================================
function openEventReportModal(eventId) {
    const ev = window.CHAPTER_DATA.events.find(e => e.id === eventId);
    if (!ev) return;

    document.getElementById('er-modal-ay').textContent = `AY ${ev.academicYear}`;
    document.getElementById('er-modal-category').textContent = ev.category;
    document.getElementById('er-modal-docid').textContent = ev.docId;
    document.getElementById('er-modal-title').textContent = ev.title;
    document.getElementById('er-modal-status').textContent = ev.status;
    document.getElementById('er-modal-audit').textContent = ev.auditCode;
    document.getElementById('er-modal-date').textContent = ev.date;
    document.getElementById('er-modal-venue').textContent = ev.venue;
    document.getElementById('er-modal-speaker').textContent = ev.resourcePerson;
    document.getElementById('er-modal-participants').textContent = ev.participants;
    document.getElementById('er-modal-faculty').textContent = ev.facultyCoordinators;
    document.getElementById('er-modal-students').textContent = ev.studentCoordinators;
    document.getElementById('er-modal-summary').textContent = ev.summary;

    document.getElementById('er-modal-highlights').innerHTML = ev.highlights.map(h => `<li>${h}</li>`).join('');
    document.getElementById('er-modal-gallery').innerHTML = ev.gallery.map(img => `
        <figure class="border border-[#CBD5E1] p-1.5 bg-white">
            <div class="aspect-16/10 bg-slate-100 overflow-hidden">
                <img src="${img.url}" alt="${img.caption}" class="w-full h-full object-cover">
            </div>
            <figcaption class="pt-1.5 text-[11px] text-slate-600">${img.caption}</figcaption>
        </figure>
    `).join('');

    document.getElementById('event-report-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeEventReportModal() {
    const modal = document.getElementById('event-report-modal');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('printing-modal');
    document.body.style.overflow = '';
}

function openCircularModal(noticeId) {
    const notice = window.CHAPTER_DATA.notices.find(n => n.id === noticeId);
    if (!notice) return;

    document.getElementById('circ-modal-ref').textContent = notice.circularNo;
    document.getElementById('circ-modal-no').textContent = notice.circularNo;
    document.getElementById('circ-modal-title').textContent = notice.title;
    document.getElementById('circ-modal-date').textContent = notice.date;
    document.getElementById('circ-modal-badge').textContent = notice.badge;
    document.getElementById('circ-modal-body').textContent = notice.fullText;

    const actionBtn = document.getElementById('circ-modal-action-btn');
    if (notice.linkedEventId) {
        actionBtn.textContent = "Open Event Report";
        actionBtn.onclick = () => {
            closeCircularModal();
            openEventReportModal(notice.linkedEventId);
        };
    } else if (notice.actionType === 'membership') {
        actionBtn.textContent = "Membership Registration";
        actionBtn.onclick = () => {
            closeCircularModal();
            openMembershipModal();
        };
    } else {
        actionBtn.textContent = "Close";
        actionBtn.onclick = closeCircularModal;
    }

    document.getElementById('circular-preview-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCircularModal() {
    const modal = document.getElementById('circular-preview-modal');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('printing-modal');
    document.body.style.overflow = '';
}

function printSingleModal() {
    document.body.classList.add('printing-modal');
    window.print();
    setTimeout(() => {
        document.body.classList.remove('printing-modal');
    }, 500);
}

function openMembershipModal() {
    const err = document.getElementById('modal-form-error');
    const ok = document.getElementById('modal-form-success');
    const modal = document.getElementById('membership-modal');
    if (err) err.classList.add('hidden');
    if (ok) ok.classList.add('hidden');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeMembershipModal() {
    const modal = document.getElementById('membership-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function toggleAcmIdField(prefix, mode) {
    const typeInput = document.getElementById(`${prefix}-applicant-type`);
    const wrapper = document.getElementById(`${prefix}-acm-id-wrapper`);
    const help = document.getElementById(`${prefix}-acm-id-help`);
    const btnNew = document.getElementById(`${prefix}-toggle-new`);
    const btnEx = document.getElementById(`${prefix}-toggle-existing`);

    if (!typeInput || !wrapper || !help || !btnNew || !btnEx) return;
    typeInput.value = mode;

    if (mode === 'existing') {
        wrapper.classList.remove('hidden');
        help.textContent = "Enter your existing 7-digit ACM Global Student Membership ID.";
        btnEx.className = "px-2.5 py-1 font-semibold bg-acm-blue text-white border-l border-[#CBD5E1] cursor-pointer";
        btnNew.className = "px-2.5 py-1 text-slate-700 hover:bg-slate-50 cursor-pointer";
    } else {
        wrapper.classList.add('hidden');
        help.textContent = "New applicants are registered under the VJIT ACM Student Chapter cohort drive.";
        btnNew.className = "px-2.5 py-1 font-semibold bg-acm-blue text-white cursor-pointer";
        btnEx.className = "px-2.5 py-1 text-slate-700 hover:bg-slate-50 border-l border-[#CBD5E1] cursor-pointer";
    }
}

function handleMembershipFormSubmit(event, prefix) {
    event.preventDefault();
    const errBox = document.getElementById(`${prefix}-form-error`);
    const okBox = document.getElementById(`${prefix}-form-success`);
    errBox.classList.add('hidden');
    okBox.classList.add('hidden');

    const name = document.getElementById(`${prefix}-student-name`).value.trim();
    const roll = document.getElementById(`${prefix}-roll-number`).value.trim().toUpperCase();
    const branch = document.getElementById(`${prefix}-branch`).value;
    const section = document.getElementById(`${prefix}-section`).value;
    const year = document.getElementById(`${prefix}-year`).value;
    const email = document.getElementById(`${prefix}-email`).value.trim().toLowerCase();
    const sig = document.getElementById(`${prefix}-sig`).value;
    const appType = document.getElementById(`${prefix}-applicant-type`).value;
    const acmId = document.getElementById(`${prefix}-acm-id`).value.trim();

    const errors = [];

    if (name.length < 3) {
        errors.push("Please enter your full name as printed on your VJIT ID card.");
    }

    const rollRegex = /^2[0-9]91[15]A[0-9A-Z]{4}$/;
    if (!rollRegex.test(roll)) {
        errors.push("Invalid VJIT Roll Number. Expected 10-character JNTUH format (e.g., 25911A6601).");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Please enter a valid institutional email address.");
    }

    if (appType === 'existing' && !/^[0-9]{6,8}$/.test(acmId)) {
        errors.push("Please enter a valid 6-to-8 digit ACM Global Membership ID, or select 'New Applicant'.");
    }

    if (errors.length > 0) {
        errBox.innerHTML = `<strong>Please correct the following:</strong><ul class="list-disc pl-4 mt-1 space-y-0.5">${errors.map(e => `<li>${e}</li>`).join('')}</ul>`;
        errBox.classList.remove('hidden');
        return;
    }

    const refCode = `ACM-VJIT-26-${roll.slice(-4)}`;
    okBox.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <strong class="text-acm-navy">Application Recorded</strong>
            <span class="font-mono font-semibold text-acm-blue">${refCode}</span>
        </div>
        <div class="grid grid-cols-2 gap-1.5 text-xs pt-1">
            <div><strong>Name:</strong> ${name} (${roll})</div>
            <div><strong>Class:</strong> ${year}, ${branch} (${section})</div>
            <div><strong>SIG Track:</strong> ${sig}</div>
            <div><strong>Status:</strong> ${appType === 'existing' ? 'ACM ID #' + acmId : 'New Cohort Applicant'}</div>
        </div>
    `;
    okBox.classList.remove('hidden');
}

function handleContactSubmit(event) {
    event.preventDefault();
    const fb = document.getElementById('contact-feedback');
    if (fb) fb.classList.remove('hidden');
    const form = document.getElementById('contact-inquiry-form');
    if (form) form.reset();
}

window.addEventListener('click', (e) => {
    if (e.target.id === 'event-report-modal') closeEventReportModal();
    if (e.target.id === 'circular-preview-modal') closeCircularModal();
    if (e.target.id === 'membership-modal') closeMembershipModal();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEventReportModal();
        closeCircularModal();
        closeMembershipModal();
        closeMobileDrawer();
    }
});
