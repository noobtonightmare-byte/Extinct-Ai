// --- Extinct Ai: Advanced Core Logic System ---

document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    /**
     * Appends a highly stylized interactive message terminal to the feed.
     * @param {string} text - The content matrix payload.
     * @param {('user'|'ai')} identity - Origin node string.
     * @param {boolean} streamPrint - Toggles the real-time typographic hardware look.
     */
    function appendInteractiveMessage(text, identity, streamPrint = false) {
        const container = document.createElement('div');
        container.classList.add('msg-container', identity);

        // Explicit structural styling overrides for container layout
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.maxWidth = '85%';
        container.style.gap = '5px';
        container.style.alignSelf = identity === 'user' ? 'flex-end' : 'flex-start';

        const bubble = document.createElement('div');
        bubble.classList.add('msg-bubble');
        
        // Context-driven style assignment matrix
        if (identity === 'user') {
            bubble.style.backgroundColor = 'var(--bg-user, #1a2336)';
            bubble.style.color = 'var(--text-bright, #ffffff)';
            bubble.style.borderRight = '3px solid var(--neon-cyan, #00f0ff)';
            bubble.style.borderLeft = 'none';
        } else {
            bubble.style.backgroundColor = 'var(--bg-panel, #0c0f16)';
            bubble.style.color = '#e2e8f0';
            bubble.style.borderLeft = '3px solid var(--neon-cyan, #00f0ff)';
            bubble.style.borderRight = 'none';
        }

        bubble.style.padding = '12px 14px';
        bubble.style.fontSize = '0.9rem';
        bubble.style.lineHeight = '1.4';
        bubble.style.wordWrap = 'break-word';
        bubble.style.borderRadius = '8px';
        bubble.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';

        container.appendChild(bubble);

        // --- Action Array Sub-tier Layout (Utility Deck) ---
        const actionsRow = document.createElement('div');
        actionsRow.className = 'bubble-actions';
        actionsRow.style.display = 'flex';
        actionsRow.style.gap = '12px';
        actionsRow.style.fontSize = '0.75rem';
        actionsRow.style.padding = '2px 4px';
        actionsRow.style.userSelect = 'none';
        actionsRow.style.justifyContent = identity === 'user' ? 'flex-end' : 'flex-start';

        // Utility 1: Text-to-Speech Engine
        const ttsBtn = document.createElement('span');
        ttsBtn.style.color = '#50617a';
        ttsBtn.style.cursor = 'pointer';
        ttsBtn.textContent = '🔊 Speak';
        ttsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.speechSynthesis.cancel();
            const speech = new SpeechSynthesisUtterance(text);
            const voices = window.speechSynthesis.getVoices();
            const primeVoice = voices.find(v => v.lang.includes('en-US'));
            speech.voice = primeVoice || voices[0];
            window.speechSynthesis.speak(speech);
        });

        // Utility 2: Clipboard Array Pipeline
        const copyBtn = document.createElement('span');
        copyBtn.style.color = '#50617a';
        copyBtn.style.cursor = 'pointer';
        copyBtn.textContent = '📋 Copy';
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(text);
            copyBtn.textContent = '✔ Done';
            copyBtn.style.color = '#00ff66';
            setTimeout(() => {
                copyBtn.textContent = '📋 Copy';
                copyBtn.style.color = '#50617a';
            }, 1200);
        });

        // Utility 3: Positive Diagnostics Evaluation Link
        const likeBtn = document.createElement('span');
        likeBtn.style.color = '#50617a';
        likeBtn.style.cursor = 'pointer';
        likeBtn.textContent = '👍';
        likeBtn.style.transition = 'color 0.2s';

        // Utility 4: Negative Diagnostics Evaluation Link
        const dislikeBtn = document.createElement('span');
        dislikeBtn.style.color = '#50617a';
        dislikeBtn.style.cursor = 'pointer';
        dislikeBtn.textContent = '👎';
        dislikeBtn.style.transition = 'color 0.2s';

        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            likeBtn.style.color = likeBtn.style.color === 'rgb(0, 255, 102)' ? '#50617a' : '#00ff66';
            dislikeBtn.style.color = '#50617a';
        });

        dislikeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dislikeBtn.style.color = dislikeBtn.style.color === 'rgb(255, 74, 74)' ? '#50617a' : '#ff4a4a';
            likeBtn.style.color = '#50617a';
        });

        actionsRow.appendChild(ttsBtn);
        actionsRow.appendChild(copyBtn);
        actionsRow.appendChild(likeBtn);
        actionsRow.appendChild(dislikeBtn);
        container.appendChild(actionsRow);

        chatBox.appendChild(container);
        chatBox.scrollTop = chatBox.scrollHeight;

        // --- Core Text Output Configuration ---
        if (identity === 'ai' && streamPrint) {
            let idx = 0;
            const textNode = document.createTextNode('');
            bubble.appendChild(textNode);
            
            function streamPrint() {
                if (idx < text.length) {
                    textNode.textContent += text.charAt(idx);
                    idx++;
                    chatBox.scrollTop = chatBox.scrollHeight;
                    setTimeout(streamPrint, 15);
                }
            }
            streamPrint();
        } else {
            bubble.textContent = text;
        }
    }

    /**
     * Processes execution pipeline sequences and clears input register fields.
     */
    function triggerSubmission() {
        const value = userInput.value.trim();
        if (!value) return;

        // Post standard user telemetry packet immediately
        appendInteractiveMessage(value, 'user', false);
        userInput.value = '';

        // Simulate Extinct AI mainframe background computations
        setTimeout(() => {
            const aiResponse = `Terminal command sequence verified: "${value}". Initializing neural string response array pipeline...`;
            appendInteractiveMessage(aiResponse, 'ai', true);
        }, 600);
    }

    // --- Control Event Initializers ---
    sendBtn.addEventListener('click', triggerSubmission);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            triggerSubmission();
        }
    });

    // Initialize clean system console banner
    appendInteractiveMessage("System core initialized. Extinct Ai console link online.", "ai", false);
});


