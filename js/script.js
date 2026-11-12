document.addEventListener('DOMContentLoaded', () => {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const SYMBOL_TOKENS = ['☉', '☼', '❂', '✺', '✹', '✸', '✷', '✶', '✵', '✴', '✳', '✲', '✱', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '◈', '❖', '❈'];
    const SOLAR_SVGS = [
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2l1.5 4h-3zM12 22l1.5-4h-3zM2 12l4-1.5v3zM22 12l-4-1.5v3z"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5"/><circle cx="12" cy="12" r="2"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M7 5a9 9 0 0 0 0 14M17 5a9 9 0 0 1 0 14M12 2v3M12 19v3"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 2v20M2 12h20"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M2 10c3 0 5 2 6 2M22 10c-3 0-5 2-6 2M3 14c3 0 4-1 5-1M21 14c-3 0-4-1-5-1"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="12,3 20,17 4,17"/><polygon points="12,21 20,7 4,7"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
        `<svg viewBox="0 0 24 24"><path d="M2 16h20M6 16a6 6 0 0 1 12 0M12 4v3M5.6 7.6l2.1 2.1M18.4 7.6l-2.1 2.1M9 20h6"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 12c0-3 2.5-5 5-4M12 12c2.6 1.5 3 4.6 1 6.3M12 12c-2.6 1.5-5.5.2-6-2.3"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="5"/><path d="M7 9l2-5 3 3 3-3 2 5"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="9" r="4"/><path d="M12 2v20M4 12h16"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M7 3.3l1.5 2.6M15.5 18.1L17 20.7M3.3 7l2.6 1.5M18.1 15.5l2.6 1.5M3.3 17l2.6-1.5M18.1 8.5l2.6-1.5M7 20.7l1.5-2.6M15.5 5.9L17 3.3"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="12,3 21,12 12,21 3,12"/><circle cx="12" cy="12" r="3"/><path d="M12 6v3M12 15v3M6 12h3M15 12h3"/></svg>`,
        `<svg viewBox="0 0 24 24"><path d="M2 12c3.5-5 16.5-5 20 0-3.5 5-16.5 5-20 0z"/><circle cx="12" cy="12" r="3"/><path d="M12 16v4M9 18l-2 2M15 18l2 2"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M12 2v20M12 6a6 6 0 0 1 0 12" fill="currentColor" fill-opacity="0.35"/><path d="M3 12h3M18 12h3"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="12,3 19,16 5,16"/><circle cx="12" cy="13" r="2.5"/><path d="M8 20h8"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M5.1 8l13.8 8M18.9 8L5.1 16"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor" fill-opacity="0.45"/><path d="M12 2l1 4M12 22l-1-4M2 12l4-1M22 12l-4 1M5 5l3 3M19 19l-3-3M19 5l-3 3M5 19l3-3"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="6,4 18,4 12,12"/><polygon points="6,20 18,20 12,12"/><circle cx="12" cy="12" r="3" fill="#0d0b09"/></svg>`,
        `<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C9 6 9 3 12 3s3 3 0 6.5zM12 14.5C9 18 9 21 12 21s3-3 0-6.5zM9.5 12C6 9 3 9 3 12s3 3 6.5 0zM14.5 12C18 9 21 9 21 12s-3 3-6.5 0z"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="7.5" r="4"/><path d="M12 11.5V21M7 15h10M12 2v1.5"/></svg>`,
        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 3c2 1.5 2 3 0 4.5M21 12c-1.5 2-3 2-4.5 0M12 21c-2-1.5-2-3 0-4.5M3 12c1.5-2 3-2 4.5 0"/></svg>`,
        `<svg viewBox="0 0 24 24"><polygon points="8.5,3 15.5,3 21,8.5 21,15.5 15.5,21 8.5,21 3,15.5 3,8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>`
    ];

    const innerDisk = document.getElementById('innerDisk');
    const middleDisk = document.getElementById('middleDisk');
    const outerDisk = document.getElementById('outerDisk');
    const starburstContainer = document.querySelector('.starburst-rays');
    const clockHint = document.getElementById('clockHint');
    const modeBtns = document.querySelectorAll('.mode-btn');
    const inputText = document.getElementById('inputText');
    const inputSvgPreview = document.getElementById('inputSvgPreview');
    const outputDisplay = document.getElementById('outputDisplay');
    const outputRaw = document.getElementById('outputRaw');
    const keywordInput = document.getElementById('keyword');
    const solPosInput = document.getElementById('solPos');
    const runBtn = document.getElementById('runBtn');
    const invertBtn = document.getElementById('invertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');

    let currentMode = 'encrypt';

    function initStarburstRays() {
        const count = 36;
        starburstContainer.innerHTML = '';
        const clockSize = document.getElementById('sunClock').offsetWidth || 440;
        const originY = clockSize / 2;
        for (let i = 0; i < count; i++) {
            const angle = (i * 360) / count;
            const ray = document.createElement('div');
            ray.className = 'sun-ray';
            const isMajor = i % 3 === 0;
            const height = isMajor ? '35px' : '22px';
            const width = isMajor ? '3px' : '2px';
            ray.style.width = width;
            ray.style.height = height;
            ray.style.left = `calc(50% - ${parseInt(width)/2}px)`;
            ray.style.top = '0';
            ray.style.transformOrigin = `center ${originY}px`;
            ray.style.transform = `rotate(${angle}deg)`;
            starburstContainer.appendChild(ray);
        }
    }

    function generateShadowAlphabet(keyword) {
        const cleanKeyword = keyword.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, "");
        const uniqueChars = [];
        for (let char of cleanKeyword) {
            if (!uniqueChars.includes(char)) uniqueChars.push(char);
        }
        const remaining = [];
        for (let i = 25; i >= 0; i--) {
            const char = ALPHABET[i];
            if (!uniqueChars.includes(char)) remaining.push(char);
        }
        return uniqueChars.concat(remaining).join('');
    }

    function renderDisks(keyword) {
        const shadowAlphabet = generateShadowAlphabet(keyword);
        const isSmall = window.innerWidth <= 600;

        innerDisk.innerHTML = '<div class="disk-ring"></div>';
        const innerRadius = isSmall ? 50 : 75;
        for (let i = 0; i < 26; i++) {
            const angle = (i * 360) / 26;
            const item = document.createElement('div');
            item.className = 'disk-item';
            item.textContent = ALPHABET[i];
            const rad = (angle - 90) * (Math.PI / 180);
            item.style.transform = `translate(${Math.cos(rad)*innerRadius}px, ${Math.sin(rad)*innerRadius}px) rotate(${angle}deg)`;
            innerDisk.appendChild(item);
        }

        middleDisk.innerHTML = '<div class="disk-ring"></div>';
        const middleRadius = isSmall ? 82 : 115;
        for (let i = 0; i < 26; i++) {
            const angle = (i * 360) / 26;
            const item = document.createElement('div');
            item.className = 'disk-item';
            item.textContent = shadowAlphabet[i];
            const rad = (angle - 90) * (Math.PI / 180);
            item.style.transform = `translate(${Math.cos(rad)*middleRadius}px, ${Math.sin(rad)*middleRadius}px) rotate(${angle}deg)`;
            middleDisk.appendChild(item);
        }

        outerDisk.innerHTML = '<div class="disk-ring"></div>';
        const outerRadius = isSmall ? 120 : 168;
        for (let i = 0; i < 26; i++) {
            const angle = (i * 360) / 26;
            const item = document.createElement('div');
            item.className = 'disk-item' + (currentMode === 'decrypt' ? ' clickable' : '');
            item.innerHTML = SOLAR_SVGS[i];
            item.title = `Símbolo Solar #${i+1}`;
            const rad = (angle - 90) * (Math.PI / 180);
            item.style.transform = `translate(${Math.cos(rad)*outerRadius}px, ${Math.sin(rad)*outerRadius}px) rotate(${angle}deg)`;
            item.addEventListener('click', () => {
                if (currentMode === 'decrypt') {
                    inputText.value += SYMBOL_TOKENS[i];
                    updateInputSvgPreview();
                }
            });
            outerDisk.appendChild(item);
        }
    }

    function normalizeText(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    }

    // Aplica a anomalia a todo o corpo do site
    function checkAnomaliaCurse() {
        const keywordVal = normalizeText(keywordInput.value);
        if (currentMode === 'decrypt' && keywordVal.includes('ANOMALIA')) {
            document.body.classList.add('anomalia-cursed');
        } else {
            document.body.classList.remove('anomalia-cursed');
        }
    }

    function renderRichSymbols(container, rawText, placeholder = '') {
        container.innerHTML = '';
        if (!rawText) {
            if (placeholder) {
                const span = document.createElement('span');
                span.className = 'placeholder-text';
                span.textContent = placeholder;
                container.appendChild(span);
            }
            return;
        }
        for (const char of Array.from(rawText)) {
            const symIdx = SYMBOL_TOKENS.indexOf(char);
            if (symIdx !== -1) {
                const glyph = document.createElement('span');
                glyph.className = 'cipher-glyph';
                glyph.innerHTML = SOLAR_SVGS[symIdx];
                container.appendChild(glyph);
            } else if (char === ' ') {
                const space = document.createElement('span');
                space.className = 'cipher-space';
                container.appendChild(space);
            } else if (char === '\n') {
                container.appendChild(document.createElement('br'));
            } else {
                const punct = document.createElement('span');
                punct.className = 'cipher-punct';
                punct.textContent = char;
                container.appendChild(punct);
            }
        }
    }

    function updateInputSvgPreview() {
        if (currentMode === 'decrypt' && inputText.value.trim().length > 0) {
            inputSvgPreview.classList.remove('hidden');
            renderRichSymbols(inputSvgPreview, inputText.value);
        } else {
            inputSvgPreview.classList.add('hidden');
            inputSvgPreview.innerHTML = '';
        }
    }

    function processCipher(text, keyword, solPos, mode) {
        const cleanKeyword = normalizeText(keyword).replace(/[^A-Z]/g, "");
        if (!cleanKeyword) { alert("Insira uma palavra-chave."); return ""; }
        const shadowAlphabet = generateShadowAlphabet(cleanKeyword);
        const shiftBase = (parseInt(solPos) || 1) - 1;
        let result = '';
        let letterIndex = 0;

        if (mode === 'encrypt') {
            const normalized = normalizeText(text);
            for (let i = 0; i < normalized.length; i++) {
                const char = normalized[i];
                const charCode = char.charCodeAt(0);
                if (charCode >= 65 && charCode <= 90) {
                    const m = charCode - 65;
                    const kChar = cleanKeyword[letterIndex % cleanKeyword.length];
                    const k = kChar.charCodeAt(0) - 65;
                    const v1 = (m + k) % 26;
                    const lShadow = shadowAlphabet[v1];
                    const v2 = lShadow.charCodeAt(0) - 65;
                    const v3 = (v2 + shiftBase + letterIndex) % 26;
                    result += SYMBOL_TOKENS[v3];
                    letterIndex++;
                } else {
                    result += char;
                }
            }
        } else {
            for (const char of Array.from(text)) {
                const v3 = SYMBOL_TOKENS.indexOf(char);
                if (v3 !== -1) {
                    const kChar = cleanKeyword[letterIndex % cleanKeyword.length];
                    const k = kChar.charCodeAt(0) - 65;
                    const v2 = (((v3 - shiftBase - letterIndex) % 26) + 26) % 26;
                    const lShadow = ALPHABET[v2];
                    const v1 = shadowAlphabet.indexOf(lShadow);
                    const m = (((v1 - k) % 26) + 26) % 26;
                    result += ALPHABET[m];
                    letterIndex++;
                } else {
                    result += char;
                }
            }
        }
        return result;
    }

    function updateDiskRotations(solPos, letterCount = 0) {
        const shiftBase = (parseInt(solPos) || 1) - 1;
        outerDisk.style.transform = `rotate(${(shiftBase * (360 / 26)) + (letterCount * 5)}deg)`;
        middleDisk.style.transform = `rotate(${- (letterCount * 8)}deg)`;
        innerDisk.style.transform = `rotate(${letterCount * 3}deg)`;
    }

    function setMode(mode) {
        currentMode = mode;
        modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === currentMode));
        if (currentMode === 'encrypt') {
            runBtn.textContent = 'Executar Transformação';
            inputText.placeholder = 'Digite sua mensagem para cifrar...';
            clockHint.textContent = 'Configure a palavra-chave e a posição do Sol para alinhar os discos.';
        } else {
            runBtn.textContent = 'Executar Decifração';
            inputText.placeholder = 'Cole os símbolos solares ou clique neles no relógio...';
            clockHint.textContent = 'Clique nos símbolos solares do disco externo para inseri-los na mensagem.';
        }
        renderDisks(keywordInput.value || 'SOL');
        updateInputSvgPreview();
        checkAnomaliaCurse();
    }

    modeBtns.forEach(btn => btn.addEventListener('click', () => setMode(btn.dataset.mode)));
    
    keywordInput.addEventListener('input', () => {
        renderDisks(keywordInput.value || 'SOL');
        checkAnomaliaCurse();
    });

    solPosInput.addEventListener('input', () => updateDiskRotations(Math.min(26, Math.max(1, parseInt(solPosInput.value) || 1))));
    inputText.addEventListener('input', updateInputSvgPreview);

    runBtn.addEventListener('click', () => {
        const text = inputText.value;
        const keyword = keywordInput.value || 'SOL';
        const solPos = solPosInput.value || '1';
        if (!text.trim()) { alert('Insira uma mensagem.'); return; }
        
        checkAnomaliaCurse();

        const res = processCipher(text, keyword, solPos, currentMode);
        outputRaw.value = res;
        if (currentMode === 'encrypt') {
            renderRichSymbols(outputDisplay, res, 'O resultado aparecerá aqui...');
        } else {
            outputDisplay.textContent = res;
        }
        const count = currentMode === 'encrypt' ? normalizeText(text).replace(/[^A-Z]/g, '').length : Array.from(text).filter(c => SYMBOL_TOKENS.includes(c)).length;
        updateDiskRotations(solPos, count);
        setTimeout(() => updateDiskRotations(solPos, 0), 1500);
    });

    invertBtn.addEventListener('click', () => {
        if (!outputRaw.value) return;
        inputText.value = outputRaw.value;
        outputRaw.value = '';
        outputDisplay.innerHTML = '<span class="placeholder-text">O resultado aparecerá aqui...</span>';
        setMode(currentMode === 'encrypt' ? 'decrypt' : 'encrypt');
    });

    clearBtn.addEventListener('click', () => {
        inputText.value = '';
        outputRaw.value = '';
        outputDisplay.innerHTML = '<span class="placeholder-text">O resultado aparecerá aqui...</span>';
        updateInputSvgPreview();
        updateDiskRotations(solPosInput.value || 1, 0);
    });

    copyBtn.addEventListener('click', () => {
        if (!outputRaw.value) return;
        navigator.clipboard.writeText(outputRaw.value).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => copyBtn.textContent = originalText, 2000);
        });
    });

    window.addEventListener('resize', () => {
        initStarburstRays();
        renderDisks(keywordInput.value || 'SOL');
    });

    initStarburstRays();
    renderDisks(keywordInput.value || 'SOL');
    updateDiskRotations(solPosInput.value || 1);
});