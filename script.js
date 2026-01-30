/**
 * ClassBank v7.3 Logic (Session + Timer + Fixes)
 */

const i18n = {
    en: {
        app_name: "ClassBank", app_subtitle: "Secured Economy System", api_not_connected: "API Not Connected",
        role_student: "Student / Parent", role_teacher: "Teacher",
        label_access: "Access:", desc_student_access: "View wallet balance and history.", desc_read_only: "(Read Only Mode)",
        label_student_id: "Student ID", btn_view_wallet: "View Wallet",
        label_access_pin: "Admin Key", btn_enter_dashboard: "Login", btn_setup: "Setup Connection", btn_create_key: "Create & Login",
        nav_dashboard: "Dashboard", nav_students: "Students", nav_history: "History", nav_analytics: "Analytics", nav_settings: "Settings", nav_logout: "Logout",
        title_overview: "Overview", stat_balance: "Net Balance", label_funds: "Current available funds", stat_deposits: "Total Deposits", stat_withdrawals: "Total Withdrawals",
        section_actions: "Quick Actions", btn_new_tx: "New Transaction", btn_add_student: "Add Student", btn_batch_add: "Batch Students", btn_batch_tx: "Batch Transaction",
        stat_top_saver: "Top Saver", stat_average: "Class Average", label_per_student: "Per Student", msg_no_data: "No data found",
        modal_settings_title: "App Settings", tab_connection: "Connection", tab_security: "Security",
        label_api_url: "API URL (Google Apps Script)", label_admin_key: "Admin API Key", desc_admin_key: "Required for Teacher Mode operations.", label_share: "Share with Parents", btn_copy_link: "Copy Safe Link",
        label_new_key: "New Admin Key", desc_new_key: "Changing this will update the database. You will need to login with this new key next time.",
        btn_cancel: "Cancel", btn_save: "Save Changes", btn_confirm: "Confirm", btn_process: "Process", btn_submit: "Submit", btn_select_all: "Select All",
        modal_new_tx: "New Transaction", label_student: "Student", label_deposit: "Deposit", label_withdraw: "Withdraw", label_transfer: "Transfer", label_amount: "Amount", label_date: "Date", label_to_student: "To Student",
        modal_add_student: "Add Student", modal_batch_add: "Batch Add Students", modal_batch_tx: "Batch Transaction",
        msg_verifying: "Verifying...", msg_login_success: "Login Successful", msg_login_fail: "Incorrect Admin Key", msg_setup_needed: "Please setup API URL first",
        msg_setup_required: "First Time Setup:", msg_create_admin: "Create an Admin Key to secure your database.", msg_key_created: "Key Created. You are now logged in.",
        err_select_student: "Select a student", err_insufficient: "Insufficient Funds", err_select_receiver: "Select receiver", err_same_student: "Sender and receiver must be different",
        modal_confirm_key_title: "Confirm Admin Key", modal_confirm_key_text: "Please re-enter your new Admin Key to confirm.", err_key_mismatch: "Keys do not match. Please try again.",
        session_expiring: "Session Expiring"
    },
    th: {
        app_name: "ClassBank", app_subtitle: "ระบบธนาคารห้องเรียน", api_not_connected: "ยังไม่เชื่อมต่อ API",
        role_student: "นักเรียน / ผู้ปกครอง", role_teacher: "ครูผู้สอน",
        label_access: "สิทธิ์การเข้าถึง:", desc_student_access: "ดูยอดเงินและประวัติการทำรายการ", desc_read_only: "(โหมดดูอย่างเดียว)",
        label_student_id: "รหัสนักเรียน", btn_view_wallet: "ดูยอดเงิน",
        label_access_pin: "รหัสผ่านผู้ดูแล (Admin Key)", btn_enter_dashboard: "เข้าสู่ระบบ", btn_setup: "ตั้งค่าการเชื่อมต่อ", btn_create_key: "สร้างและเข้าสู่ระบบ",
        nav_dashboard: "ภาพรวม", nav_students: "นักเรียน", nav_history: "ประวัติ", nav_analytics: "สถิติ", nav_settings: "ตั้งค่า", nav_logout: "ออกระบบ",
        title_overview: "ภาพรวม", stat_balance: "ยอดเงินคงเหลือ", label_funds: "เงินทุนที่มีอยู่", stat_deposits: "ยอดฝากรวม", stat_withdrawals: "ยอดถอนรวม",
        section_actions: "เมนูด่วน", btn_new_tx: "ทำรายการใหม่", btn_add_student: "เพิ่มนักเรียน", btn_batch_add: "เพิ่มหลายคน", btn_batch_tx: "ทำรายการหมู่",
        stat_top_saver: "ออมเงินสูงสุด", stat_average: "ค่าเฉลี่ยห้อง", label_per_student: "ต่อคน", msg_no_data: "ไม่พบข้อมูล",
        modal_settings_title: "ตั้งค่าระบบ", tab_connection: "การเชื่อมต่อ", tab_security: "ความปลอดภัย",
        label_api_url: "ลิงก์ API (Google Apps Script)", label_admin_key: "คีย์ผู้ดูแลระบบ (Admin Key)", desc_admin_key: "จำเป็นสำหรับการแก้ไขข้อมูล (ครูเท่านั้น)", label_share: "แชร์ให้ผู้ปกครอง", btn_copy_link: "คัดลอกลิงก์ (ปลอดภัย)",
        label_new_key: "รหัสผ่านใหม่", desc_new_key: "การเปลี่ยนจะอัปเดตฐานข้อมูล ครั้งต่อไปต้องใช้รหัสใหม่นี้",
        btn_cancel: "ยกเลิก", btn_save: "บันทึก", btn_confirm: "ยืนยัน", btn_process: "ประมวลผล", btn_submit: "ยืนยัน", btn_select_all: "เลือกทั้งหมด",
        modal_new_tx: "ทำรายการใหม่", label_student: "นักเรียน", label_deposit: "ฝากเงิน", label_withdraw: "ถอนเงิน", label_transfer: "โอนเงิน", label_amount: "จำนวนเงิน", label_date: "วันที่", label_to_student: "ไปยัง",
        modal_add_student: "เพิ่มนักเรียน", modal_batch_add: "เพิ่มนักเรียน (หลายคน)", modal_batch_tx: "ทำรายการหมู่",
        msg_verifying: "กำลังตรวจสอบ...", msg_login_success: "เข้าสู่ระบบสำเร็จ", msg_login_fail: "รหัสผ่านผิดพลาด", msg_setup_needed: "กรุณาตั้งค่า API URL ก่อน",
        msg_setup_required: "เริ่มใช้งานครั้งแรก:", msg_create_admin: "กรุณาสร้างรหัสผ่าน Admin Key", msg_key_created: "สร้างรหัสผ่านสำเร็จ",
        err_select_student: "กรุณาเลือกนักเรียน", err_insufficient: "ยอดเงินไม่พอ", err_select_receiver: "เลือกผู้รับโอน", err_same_student: "ผู้ส่งและผู้รับต้องไม่ซ้ำกัน",
        modal_confirm_key_title: "ยืนยันรหัสผ่าน", modal_confirm_key_text: "กรุณากรอกรหัสผ่านอีกครั้งเพื่อยืนยัน", err_key_mismatch: "รหัสผ่านไม่ตรงกัน กรุณาลองใหม่",
        session_expiring: "เซสชั่นใกล้หมดอายุ"
    }
};

const CONFIG = {
    get apiUrl() { return localStorage.getItem('cb_api_url') || ''; },
    get adminKey() { return localStorage.getItem('cb_session_token') || ''; }, // Changed key name for session mgmt
    get lang() { return localStorage.getItem('cb_lang') || 'en'; },
    role: null, 
    user: null, 
    isSetupMode: false,
    sessionTimeout: 15 * 60 * 1000 // 20 minutes
};

const state = { students: [], transactions: [], tableMode: 'students', sessionInterval: null };

const app = {
    init: () => {
        app.setLang(CONFIG.lang);
        
        // Handle Magic Link
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('config')) {
            try {
                const decodedUrl = atob(urlParams.get('config'));
                if(decodedUrl.startsWith('http')) {
                    localStorage.setItem('cb_api_url', decodedUrl);
                    window.history.replaceState({}, document.title, window.location.pathname);
                    Swal.fire({ icon: 'success', title: 'Connected!', timer: 2000, showConfirmButton: false });
                }
            } catch (e) { }
        }

        // Restore Session (if valid)
        app.checkSession();

        setTimeout(() => { document.querySelectorAll('input[type="password"]').forEach(el => el.value = ''); }, 100);

        if (!CONFIG.apiUrl) document.getElementById('connection-status').classList.remove('hidden');
        else if (!CONFIG.role) app.checkSetupStatus(); // Only check setup if not logged in

        // Listeners
        document.getElementById('form-login-teacher').onsubmit = app.handleTeacherLogin;
        document.getElementById('form-login-student').onsubmit = app.handleStudentLogin;
        document.getElementById('form-transaction').onsubmit = app.handleTransaction;
        document.getElementById('form-add-student').onsubmit = app.handleAddStudent;
        document.getElementById('tx-student').onchange = app.updateTxBalancePreview;
        document.getElementById('search-input').oninput = (e) => app.renderTable(e.target.value);
        
        // Correct Local Date Init
        const now = new Date();
        const localISODate = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        document.getElementById('tx-date').value = localISODate;
    },

    setLang: (lang) => {
        localStorage.setItem('cb_lang', lang);
        document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('btn-lang-th').classList.toggle('active', lang === 'th');
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[lang][key]) el.textContent = i18n[lang][key];
        });
    },

    // --- SESSION MANAGEMENT ---
    startSession: (role, token, userObj = null) => {
        const expiry = Date.now() + CONFIG.sessionTimeout;
        localStorage.setItem('cb_session_expiry', expiry);
        localStorage.setItem('cb_session_role', role);
        localStorage.setItem('cb_session_token', token); // AdminKey or StudentID
        if (userObj) localStorage.setItem('cb_session_user', JSON.stringify(userObj));
        
        // Restore state
        CONFIG.role = role;
        CONFIG.user = userObj;
        
        app.startSessionTimer();
        app.setRole(role);
    },

    checkSession: () => {
        const expiry = parseInt(localStorage.getItem('cb_session_expiry') || '0');
        const role = localStorage.getItem('cb_session_role');
        const token = localStorage.getItem('cb_session_token');
        
        if (expiry > Date.now() && role && token) {
            // Restore Session
            CONFIG.role = role;
            if (role === 'student') {
                CONFIG.user = JSON.parse(localStorage.getItem('cb_session_user'));
            }
            app.startSessionTimer();
            app.setRole(role);
        } else if (expiry > 0) {
            // Expired while away
            app.logout();
        }
    },

    startSessionTimer: () => {
        if (state.sessionInterval) clearInterval(state.sessionInterval);
        const warningDiv = document.getElementById('session-warning');
        const countdownSpan = document.getElementById('session-countdown');

        state.sessionInterval = setInterval(() => {
            const expiry = parseInt(localStorage.getItem('cb_session_expiry') || '0');
            const diff = expiry - Date.now();

            if (diff <= 0) {
                app.logout();
                return;
            }

            // Warning < 2 mins (120000ms)
            if (diff <= 120000) {
                warningDiv.classList.remove('hidden');
                const minutes = Math.floor(diff / 60000);
                const seconds = Math.floor((diff % 60000) / 1000);
                countdownSpan.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else {
                warningDiv.classList.add('hidden');
            }
        }, 1000);
    },

    logout: () => {
        localStorage.removeItem('cb_session_expiry');
        localStorage.removeItem('cb_session_role');
        localStorage.removeItem('cb_session_token');
        localStorage.removeItem('cb_session_user');
        sessionStorage.clear(); // Clear legacy if any
        if (state.sessionInterval) clearInterval(state.sessionInterval);
        location.reload();
    },

    checkSetupStatus: async () => {
        try {
            const res = await fetch(`${CONFIG.apiUrl}?op=get_status`);
            const data = await res.json();
            if (data.status === 'success' && data.setup_required) {
                CONFIG.isSetupMode = true;
                document.getElementById('msg-setup-required').classList.remove('hidden');
                document.getElementById('login-teacher-key').placeholder = "Create New Admin Key";
                document.getElementById('btn-login-action').textContent = i18n[CONFIG.lang].btn_create_key;
                window.switchAuthTab('teacher');
            } else {
                CONFIG.isSetupMode = false;
                document.getElementById('msg-setup-required').classList.add('hidden');
                document.getElementById('login-teacher-key').placeholder = "Enter Admin Key";
                document.getElementById('btn-login-action').textContent = i18n[CONFIG.lang].btn_enter_dashboard;
            }
        } catch (e) { }
    },

    handleTeacherLogin: async (e) => {
        e.preventDefault();
        if(!CONFIG.apiUrl) return Swal.fire('Error', i18n[CONFIG.lang].msg_setup_needed, 'warning');
        const keyInput = document.getElementById('login-teacher-key');
        const keyAttempt = keyInput.value.trim();
        if (!keyAttempt) return;

        // Security: Confirm logic if in Setup Mode
        if (CONFIG.isSetupMode) {
            const confirmResult = await Swal.fire({
                title: i18n[CONFIG.lang].modal_confirm_key_title,
                text: i18n[CONFIG.lang].modal_confirm_key_text,
                input: 'password',
                showCancelButton: true,
                confirmButtonText: i18n[CONFIG.lang].btn_confirm,
                cancelButtonText: i18n[CONFIG.lang].btn_cancel
            });

            if (!confirmResult.isConfirmed) return; 
            if (confirmResult.value !== keyAttempt) {
                return Swal.fire('Error', i18n[CONFIG.lang].err_key_mismatch, 'error');
            }
        }

        Swal.fire({ title: i18n[CONFIG.lang].msg_verifying, didOpen: () => Swal.showLoading() });
        
        try {
            const op = CONFIG.isSetupMode ? 'setup_admin' : 'verify_auth';
            const res = await fetch(CONFIG.apiUrl, { method: 'POST', body: JSON.stringify({ op, adminKey: keyAttempt }) });
            const data = await res.json();
            
            if (data.status === 'success') {
                Swal.close();
                if(CONFIG.isSetupMode) Swal.fire('Success', i18n[CONFIG.lang].msg_key_created, 'success');
                app.startSession('teacher', keyAttempt); // Start Session
            } else throw new Error(data.message);
            keyInput.value = '';
        } catch (err) {
            Swal.fire('Error', err.message || i18n[CONFIG.lang].msg_login_fail, 'error');
            keyInput.value = '';
        }
    },

    handleStudentLogin: (e) => {
        e.preventDefault();
        if(!CONFIG.apiUrl) return Swal.fire('Error', i18n[CONFIG.lang].msg_setup_needed, 'warning');
        const id = document.getElementById('login-student-id').value.trim();
        Swal.fire({ title: i18n[CONFIG.lang].msg_verifying, didOpen: () => Swal.showLoading() });
        
        app.fetchData(async () => {
            const student = state.students.find(s => String(s['Student ID']).toLowerCase() === id.toLowerCase());
            if (student) {
                Swal.close();
                app.startSession('student', id, student); // Start Session
            } else Swal.fire('Not Found', 'Student ID not found', 'error');
        }, true);
    },

    setRole: (role) => {
        // ... (UI Switching logic remains same, but fetchData triggers)
        document.getElementById('view-auth').classList.add('hidden');
        document.getElementById('view-app').classList.remove('hidden');
        if (role === 'teacher') {
            document.getElementById('sidebar').classList.remove('hidden');
            document.getElementById('teacher-actions').classList.remove('hidden');
            app.switchTab('dashboard');
            app.fetchData();
        } else {
            document.getElementById('sidebar').classList.add('hidden'); 
            document.getElementById('teacher-actions').classList.add('hidden');
            document.getElementById('user-pill').classList.remove('hidden');
            document.getElementById('user-name-display').textContent = CONFIG.user.Name;
            app.processData(); 
        }
    },

    // ... (Remaining logic same: switchTab, toggleTxFields, handleTransaction, populateSettingsInputs, saveSettings, copyShareLink, fetchData, postData, processData, shouldCountStats, refreshData, setTableMode, renderTable, renderCharts, deleteStudent, processBatchStudents, processMultiTx, handleAddStudent, updateSelectOptions, updateTxBalancePreview, selectAllMulti) ...
    // Note: ensure fetchData and postData use CONFIG.adminKey which now gets from localStorage
    
    // Condensed for brevity (use previous logic for these functions)
    switchTab: (tabName) => {
        ['dashboard', 'students', 'transactions', 'analytics'].forEach(t => {
            const btn = document.getElementById(`nav-${t}`);
            if(btn) btn.className = "nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-medium transition-colors";
        });
        const activeBtn = document.getElementById(`nav-${tabName}`);
        if(activeBtn) activeBtn.className = "nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-600 bg-indigo-50 font-medium transition-colors";

        document.getElementById('tab-analytics').classList.add('hidden');
        document.getElementById('tab-data').classList.remove('hidden');
        document.getElementById('teacher-actions').classList.add('hidden');
        
        if (tabName === 'dashboard') {
            document.getElementById('dashboard-cards').classList.remove('hidden');
            if(CONFIG.role === 'teacher') document.getElementById('teacher-actions').classList.remove('hidden');
        } else if (tabName === 'analytics') {
            document.getElementById('dashboard-cards').classList.add('hidden');
            document.getElementById('tab-data').classList.add('hidden');
            document.getElementById('tab-analytics').classList.remove('hidden');
            app.renderCharts();
        } else {
            document.getElementById('dashboard-cards').classList.add('hidden');
            if (tabName === 'students') app.setTableMode('students');
            if (tabName === 'transactions') app.setTableMode('history');
        }
    },

    toggleTxFields: () => {
        const type = document.querySelector('input[name="tx-type"]:checked').value;
        if(type === 'Transfer') document.getElementById('field-to-student').classList.remove('hidden');
        else document.getElementById('field-to-student').classList.add('hidden');
    },

    handleTransaction: async (e) => {
        e.preventDefault();
        const studentId = document.getElementById('tx-student').value;
        const type = document.querySelector('input[name="tx-type"]:checked').value;
        const amount = parseFloat(document.getElementById('tx-amount').value);
        const date = document.getElementById('tx-date').value;

        if (!studentId) return Swal.fire('Error', i18n[CONFIG.lang].err_select_student, 'warning');
        const s1 = state.students.find(st => String(st['Student ID']) == studentId);
        
        if ((type === 'Withdraw' || type === 'Transfer') && s1.balance < amount) {
            return Swal.fire(i18n[CONFIG.lang].err_insufficient, `${s1.Name} has ฿${app.formatMoney(s1.balance)}`, 'error');
        }

        if (type === 'Transfer') {
            const receiverId = document.getElementById('tx-to-student').value;
            if(!receiverId) return Swal.fire('Error', i18n[CONFIG.lang].err_select_receiver, 'warning');
            if(receiverId === studentId) return Swal.fire('Error', i18n[CONFIG.lang].err_same_student, 'warning');
            const s2 = state.students.find(st => String(st['Student ID']) == receiverId);
            const txs = [
                { studentId: studentId, type: 'Transfer Out', amount: amount, date: date, note: `To ${s2.Name}` },
                { studentId: receiverId, type: 'Transfer In', amount: amount, date: date, note: `From ${s1.Name}` }
            ];
            await app.postData({ op: 'batch_add_transactions', transactions: txs }, 'Transfer Successful');
        } else {
            await app.postData({ op: 'add_transaction', studentId, type, amount, date }, 'Transaction Successful');
        }
    },

    populateSettingsInputs: () => { if(CONFIG.apiUrl) document.getElementById('api-url').value = CONFIG.apiUrl; },
    
    saveSettings: async () => {
        const url = document.getElementById('api-url').value.trim();
        const newKey = document.getElementById('new-admin-key').value.trim();
        if (url) localStorage.setItem('cb_api_url', url);
        if (newKey && CONFIG.role === 'teacher') {
            await app.postData({ op: 'change_admin_key', newKey }, 'Password Updated');
            // Update session key in local storage so they stay logged in
            localStorage.setItem('cb_session_token', newKey);
        }
        closeModal('settings');
        if(url) document.getElementById('connection-status').classList.add('hidden');
        if(url !== CONFIG.apiUrl) location.reload();
    },

    copyShareLink: () => {
        if(!CONFIG.apiUrl) return Swal.fire('Error', 'No API URL set', 'error');
        const link = `${window.location.href.split('?')[0]}?config=${btoa(CONFIG.apiUrl)}`;
        navigator.clipboard.writeText(link).then(() => Swal.fire('Copied!', 'Link copied.', 'success'));
    },

    fetchData: async (callback, silent = false) => {
        if (!CONFIG.apiUrl) { if(!silent) Swal.fire('Error', 'API URL missing', 'error'); return; }
        try {
            const res = await fetch(`${CONFIG.apiUrl}?op=get_data`);
            const data = await res.json();
            if (data.status === 'success') {
                state.students = data.students;
                state.transactions = data.transactions;
                app.processData();
            } else throw new Error(data.message);
        } catch (e) { 
            if (!silent) Swal.fire('Network Error', 'Check connection.', 'error'); 
        } finally {
            if (callback) callback(); // ALWAYS RUN CALLBACK (Stops Spinner)
        }
    },

    postData: async (payload, successMsg) => {
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        payload.adminKey = CONFIG.adminKey; 
        try {
            const res = await fetch(CONFIG.apiUrl, { method: 'POST', body: JSON.stringify(payload) });
            const data = await res.json();
            if (data.status === 'success') {
                await app.fetchData(null, true);
                Swal.fire('Success', successMsg || data.message, 'success');
                closeModal('transaction'); 
                closeModal('add-student'); 
                closeModal('batch-student'); 
                closeModal('multi-tx');
            } else {
                if(data.message && data.message.includes("Unauthorized")) {
                    Swal.fire('Session Expired', 'Please login again.', 'error').then(() => app.logout());
                } else {
                    throw new Error(data.message);
                }
            }
        } catch (e) { 
            Swal.fire('Error', e.message, 'error'); 
        }
    },

    processData: () => {
        let totalDep = 0, totalWith = 0;
        state.students.forEach(s => s.balance = 0);
        state.transactions.forEach(t => {
            const student = state.students.find(s => String(s['Student ID']) === String(t['Student ID']));
            if (student) {
                const amt = parseFloat(t.Amount);
                if (t.Type === 'Deposit' || t.Type === 'Transfer In') {
                    student.balance += amt;
                    if (app.shouldCountStats(t['Student ID']) && t.Type === 'Deposit') totalDep += amt;
                } else {
                    student.balance -= amt;
                    if (app.shouldCountStats(t['Student ID']) && t.Type === 'Withdraw') totalWith += amt;
                }
            }
        });
        const displayBal = CONFIG.role === 'student' ? (state.students.find(s=>s['Student ID']==CONFIG.user['Student ID'])?.balance || 0) : (totalDep - totalWith);
        document.getElementById('stat-balance').textContent = `฿${app.formatMoney(displayBal)}`;
        document.getElementById('stat-deposit').textContent = `฿${app.formatMoney(totalDep)}`;
        document.getElementById('stat-withdraw').textContent = `฿${app.formatMoney(totalWith)}`;
        app.renderTable();
        app.updateSelectOptions();
    },

    shouldCountStats: (sid) => (CONFIG.role === 'teacher' || String(sid) === String(CONFIG.user['Student ID'])),

    refreshData: () => {
        const icon = document.getElementById('refresh-icon');
        if(icon) icon.classList.add('fa-spin');
        app.fetchData(() => {
            if(icon) icon.classList.remove('fa-spin');
            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Updated', showConfirmButton: false, timer: 1500 });
        });
    },

    // ... (Remaining Render/Helper functions same as before) ...
    // Included abbreviated versions for context
    renderTable: (filter = '') => {
        const tbody = document.getElementById('table-body');
        const thead = document.getElementById('table-head');
        tbody.innerHTML = '';
        let dataToShow = [];

        if (state.tableMode === 'students') {
            thead.innerHTML = `<th class="px-4 py-3">${CONFIG.lang === 'th' ? 'นักเรียน' : 'Student'}</th><th class="px-4 py-3">ID</th><th class="px-4 py-3 text-right">${CONFIG.lang === 'th' ? 'ยอดเงิน' : 'Balance'}</th><th class="px-4 py-3 text-right">${CONFIG.lang === 'th' ? 'จัดการ' : 'Action'}</th>`;
            let source = state.students;
            if (CONFIG.role === 'student') source = source.filter(s => String(s['Student ID']) === String(CONFIG.user['Student ID']));
            dataToShow = source.filter(s => s.Name.toLowerCase().includes(filter.toLowerCase()));
            dataToShow.forEach(s => {
                const row = document.createElement('tr');
                row.className = "hover:bg-slate-50 transition-colors group";
                row.innerHTML = `<td class="px-4 py-3"><div class="font-bold text-slate-700">${s.Name}</div><div class="text-xs text-slate-400">No. ${s.No}</div></td><td class="px-4 py-3 text-slate-500 font-mono text-xs">${s['Student ID']}</td><td class="px-4 py-3 text-right font-bold ${s.balance < 0 ? 'text-red-500' : 'text-emerald-600'}">฿${app.formatMoney(s.balance)}</td><td class="px-4 py-3 text-right">${CONFIG.role === 'teacher' ? `<button onclick="app.deleteStudent('${s['Student ID']}')" class="text-slate-300 hover:text-red-500 transition-colors"><i class="fa-solid fa-trash"></i></button>` : '<span class="text-slate-300"><i class="fa-solid fa-lock"></i></span>'}</td>`;
                tbody.appendChild(row);
            });
        } else {
            thead.innerHTML = `<th class="px-4 py-3">${CONFIG.lang === 'th' ? 'วันที่' : 'Date'}</th><th class="px-4 py-3">${CONFIG.lang === 'th' ? 'นักเรียน' : 'Student'}</th><th class="px-4 py-3">${CONFIG.lang === 'th' ? 'ประเภท' : 'Type'}</th><th class="px-4 py-3 text-right">${CONFIG.lang === 'th' ? 'จำนวน' : 'Amount'}</th>`;
            let source = state.transactions;
            if (CONFIG.role === 'student') source = source.filter(t => String(t['Student ID']) === String(CONFIG.user['Student ID']));
            source.sort((a,b) => new Date(b.Date) - new Date(a.Date));
            dataToShow = source.filter(t => {
                const s = state.students.find(stu => String(stu['Student ID']) == String(t['Student ID']));
                return (s ? s.Name.toLowerCase() : '').includes(filter.toLowerCase());
            });
            dataToShow.forEach(t => {
                const s = state.students.find(stu => String(stu['Student ID']) == String(t['Student ID']));
                let typeLabel = t.Type;
                let colorClass = 'bg-slate-100 text-slate-700';
                if(t.Type === 'Deposit') { typeLabel = CONFIG.lang === 'th' ? 'ฝาก' : 'Deposit'; colorClass = 'bg-emerald-100 text-emerald-700'; }
                else if(t.Type === 'Withdraw') { typeLabel = CONFIG.lang === 'th' ? 'ถอน' : 'Withdraw'; colorClass = 'bg-red-100 text-red-700'; }
                else if(t.Type.includes('Transfer')) { typeLabel = t.Type; colorClass = 'bg-blue-100 text-blue-700'; }

                const row = document.createElement('tr');
                row.innerHTML = `<td class="px-4 py-3 text-slate-500 text-xs">${new Date(t.Date).toLocaleDateString()}<div class="text-[10px] text-slate-400">${t.Note || ''}</div></td><td class="px-4 py-3 font-medium text-slate-700">${s ? s.Name : t['Student ID']}</td><td class="px-4 py-3"><span class="px-2 py-1 rounded-full text-xs font-bold ${colorClass}">${typeLabel}</span></td><td class="px-4 py-3 text-right font-mono font-bold text-slate-700">฿${app.formatMoney(t.Amount)}</td>`;
                tbody.appendChild(row);
            });
        }
        document.getElementById('empty-state').classList.toggle('hidden', dataToShow.length > 0);
    },
    renderCharts: () => {
        if(!state.students.length) return;
        const ctx = document.getElementById('balanceChart').getContext('2d');
        if(window.myChart) window.myChart.destroy();
        window.myChart = new Chart(ctx, { type: 'bar', data: { labels: state.students.map(s => s.Name), datasets: [{ label: 'Balance', data: state.students.map(s => s.balance), backgroundColor: '#4f46e5', borderRadius: 6 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } } });
    },
    deleteStudent: async (id) => { if((await Swal.fire({ title: 'Delete?', text: "Undone action", icon: 'warning', showCancelButton: true, confirmButtonColor: '#ef4444' })).isConfirmed) await app.postData({ op: 'delete_student', studentId: id }, 'Deleted'); },
    
    processBatchStudents: async () => {
        const raw = document.getElementById('batch-input').value;
        const lines = raw.split(/\r?\n/);
        const batch = [];
        
        lines.forEach(line => {
            if (!line.trim()) return;
            const p = line.split(/[\t,]+/).map(s=>s.trim());
            if(p.length >= 2) {
                batch.push({ 
                    studentId: p[0], 
                    name: p[1], 
                    grade: p[2] || '', 
                    no: p[3] || '' 
                });
            }
        });
        
        if(batch.length) await app.postData({ op: 'batch_add_students', students: batch }); 
        else Swal.fire('Error', 'Invalid Data Format', 'warning');
    },

    processMultiTx: async () => {
        const checked = Array.from(document.querySelectorAll('.cb-multi:checked')).map(c => c.value);
        const amt = parseFloat(document.getElementById('multi-amount').value);
        const type = document.querySelector('input[name="multi-type"]:checked').value;
        if(checked.length && amt) await app.postData({ op: 'batch_add_transactions', transactions: checked.map(id => ({ studentId: id, amount: amt, type, date: new Date().toISOString().split('T')[0] })) }); else Swal.fire('Warning', 'Select students and amount', 'warning');
    },
    handleAddStudent: async (e) => {
        e.preventDefault();
        await app.postData({ op: 'add_student', studentId: document.getElementById('new-id').value, name: document.getElementById('new-name').value, grade: document.getElementById('new-grade').value, no: document.getElementById('new-no').value }, 'Student Added');
    },
    updateSelectOptions: () => {
        const sel = document.getElementById('tx-student');
        const selTo = document.getElementById('tx-to-student');
        const multi = document.getElementById('multi-student-list');
        const cur = sel.value;
        sel.innerHTML = '<option value="">Select Student...</option>';
        selTo.innerHTML = '<option value="">Select Receiver...</option>';
        multi.innerHTML = '';
        [...state.students].sort((a,b) => a.No - b.No).forEach(s => {
            const opt = `<option value="${s['Student ID']}">${s.No}. ${s.Name}</option>`;
            sel.innerHTML += opt;
            selTo.innerHTML += opt;
            multi.innerHTML += `
                <label class="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer border-b border-slate-100 last:border-0">
                    <input type="checkbox" class="cb-multi w-4 h-4 text-indigo-600 rounded" value="${s['Student ID']}">
                    <div class="text-sm flex-1">
                        <span class="font-bold text-slate-700">${s.Name}</span>
                        <span class="text-slate-400 text-xs ml-1">#${s.No}</span>
                    </div>
                    <span class="text-xs text-slate-400 font-mono">฿${app.formatMoney(s.balance)}</span>
                </label>`;
        });
        sel.value = cur;
        app.updateTxBalancePreview();
    },
    updateTxBalancePreview: () => {
        const id = document.getElementById('tx-student').value;
        const lbl = document.getElementById('tx-student-bal');
        const s = state.students.find(x => String(x['Student ID']) == id);
        lbl.textContent = s ? `Current Balance: ฿${app.formatMoney(s.balance)}` : 'Bal: -';
        if(s && s.balance < 0) lbl.classList.add('text-red-500'); else lbl.classList.remove('text-red-500');
    },
    selectAllMulti: () => document.querySelectorAll('.cb-multi').forEach(c => c.checked = true),
    formatMoney: (n) => parseFloat(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
};

window.switchAuthTab = (type) => {
    const btnS = document.getElementById('tab-student'), btnT = document.getElementById('tab-teacher');
    const formS = document.getElementById('form-login-student'), formT = document.getElementById('form-login-teacher');
    if (type === 'student') {
        btnS.classList.replace('text-slate-500', 'text-indigo-600'); btnS.classList.add('bg-white', 'shadow-sm');
        btnT.classList.remove('bg-white', 'shadow-sm', 'text-indigo-600'); btnT.classList.add('text-slate-500');
        formS.classList.remove('hidden'); formT.classList.add('hidden');
    } else {
        btnT.classList.replace('text-slate-500', 'text-indigo-600'); btnT.classList.add('bg-white', 'shadow-sm');
        btnS.classList.remove('bg-white', 'shadow-sm', 'text-indigo-600'); btnS.classList.add('text-slate-500');
        formT.classList.remove('hidden'); formS.classList.add('hidden');
    }
};

window.switchSettingTab = (tab) => {
    const c = document.getElementById('set-content-connection'), s = document.getElementById('set-content-security');
    const bC = document.getElementById('set-tab-connection'), bS = document.getElementById('set-tab-security');
    if(tab === 'connection') {
        c.classList.remove('hidden'); s.classList.add('hidden');
        bC.classList.add('border-indigo-600', 'text-indigo-600'); bC.classList.remove('border-transparent', 'text-slate-500');
        bS.classList.add('border-transparent', 'text-slate-500'); bS.classList.remove('border-indigo-600', 'text-indigo-600');
    } else {
        s.classList.remove('hidden'); c.classList.add('hidden');
        bS.classList.add('border-indigo-600', 'text-indigo-600'); bS.classList.remove('border-transparent', 'text-slate-500');
        bC.classList.add('border-transparent', 'text-slate-500'); bC.classList.remove('border-indigo-600', 'text-indigo-600');
    }
}

window.openModal = (n) => { 
    document.getElementById(`modal-${n}`).classList.remove('hidden'); 
    document.getElementById(`modal-${n}`).classList.add('flex'); 
    if(n==='transaction'||n==='multi-tx') app.updateSelectOptions();
    if(n==='settings') app.populateSettingsInputs();
};
window.closeModal = (n) => { document.getElementById(`modal-${n}`).classList.add('hidden'); document.getElementById(`modal-${n}`).classList.remove('flex'); };

app.init();
