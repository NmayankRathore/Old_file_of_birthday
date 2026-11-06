/* ==========================================================================
   BIRTHDAY SURPRISE SCRIPT FOR NIRUU 🌻✨
   ========================================================================== */

// --- CUSTOM LETTER MESSAGES (INSERT YOUR MESSAGES HERE) ---

// 1. WRITE YOUR FIRST LETTER MESSAGE HERE
const FIRST_LETTER_MESSAGE = `Happiest Birthday to you Dear Niruu 🌻,

Today is a very special day because the most wonderful person was born. 
I wanted to start this little surprise with a gentle reminder of how truly special you are.

01001001 00100000 01101000 01101111 01110000 01100101 00100000 01111001 01101111 01110101 00100000 01100001 01101100 01110111 01100001 01111001 01110011 00100000 01101011 01100101 01100101 01110000 00100000 01110011 01101101 01101001 01101100 01101001 01101110 01100111🤍🫏

Tap here... ✨`;


// 2. WRITE YOUR SECOND LETTER MESSAGE HERE
const SECOND_LETTER_MESSAGE = `Niruu...,

happy birthday to you 🙏🏻🌻💥,
keep growing going on in life do well and apne papa maa ko aap bahut proud feel krwoge kabi kabi life me mad feel hota hai but unse ladna padta hai kiyuki kuch logo ke liye hum hi sabkuch hote hum haar maan le to hamari nhi unki haar hogi so never give up keep up one day you achive evrything you dreamed of🙏🏻 🙌🏻🙏🏻god bless you 🎈✨...

There is still more to this journey... 💌`;


// 3. WRITE YOUR PERSONAL MESSAGE HERE (STEP 4)
const PERSONAL_MESSAGE = `kuch baate likhi nhi jaa skti naa boli insan hona hi confusing hai 🫩(i-)iska mtlb to pata hi hoga ye anya se pata chala tha muje iska mean hota hai speachless...🫩khair isme bugs ho to maaf krna muje nhi ata perfactly programme likhna abhi🫩🫩 to bugs aa jate ya kuch aur ho hi jata i tried my best 😭😭😭... are ha yaad aya🙂muje kuch kahna tha 🙂please sun lena me ...

Tap to play...`;


/* ==========================================================================
   BACKGROUND FLOATING SUNFLOWERS, BALLOONS & SPARKLES
   ========================================================================== */

const bgContainer = document.getElementById("bg-container");
const bgIcons = ["🌻", "🎈", "✨", "💛", "🎈", "🌻", "💖"];

function spawnBackgroundItem() {
  const item = document.createElement("div");
  item.className = "bg-floating-item";
  
  // Pick random emoji
  const randomIndex = Math.floor(Math.random() * bgIcons.length);
  item.textContent = bgIcons[randomIndex];
  
  // Random horizontal start position & size
  const startLeft = Math.random() * 95; // 0% - 95%
  const duration = 6 + Math.random() * 5; // 6s - 11s
  const size = 1.2 + Math.random() * 1.3; // 1.2rem - 2.5rem
  
  item.style.left = `${startLeft}vw`;
  item.style.fontSize = `${size}rem`;
  item.style.animationDuration = `${duration}s`;
  
  bgContainer.appendChild(item);
  
  // Remove element after animation finishes
  setTimeout(() => {
    item.remove();
  }, duration * 1000);
}

// Continuously spawn background items at gentle, natural intervals
setInterval(spawnBackgroundItem, 650);


/* ==========================================================================
   TYPEWRITER EFFECT HELPER
   ========================================================================== */

let isTyping = false;

function typeWriter(text, elementId, speed, callback) {
  const container = document.getElementById(elementId);
  container.textContent = "";
  let index = 0;
  isTyping = true;

  function writeNextChar() {
    if (index < text.length) {
      container.textContent += text.charAt(index);
      index++;
      setTimeout(writeNextChar, speed);
    } else {
      isTyping = false;
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  writeNextChar();
}


/* ==========================================================================
   STEP NAVIGATION LOGIC
   ========================================================================== */

function goToStep(stepNumber) {
  // Hide all scenes
  for (let i = 1; i <= 5; i++) {
    const scene = document.getElementById(`step-${i}`);
    if (scene) {
      scene.classList.remove("active");
      scene.classList.add("hidden");
    }
  }

  // Show target scene
  const targetScene = document.getElementById(`step-${stepNumber}`);
  if (targetScene) {
    targetScene.classList.remove("hidden");
    targetScene.classList.add("active");
  }

  // If entering Step 4, immediately start typing the personal message
  if (stepNumber === 4) {
    startPersonalMessageStep();
  }
}


/* ==========================================================================
   STEP 1 INTERACTIONS: FIRST GIFT & LETTER
   ========================================================================== */

let step1GiftClicked = false;
let step1LetterClicked = false;

function openFirstGift() {
  if (step1GiftClicked) return;
  step1GiftClicked = true;

  const giftBox = document.getElementById("gift-box-1");
  const letterIcon = document.getElementById("letter-icon-1");

  giftBox.classList.add("pop-out");

  setTimeout(() => {
    giftBox.classList.add("hidden");
    letterIcon.classList.remove("hidden");
    letterIcon.classList.add("scene", "active");
  }, 400);
}

function openFirstLetter() {
  if (step1LetterClicked) return;
  step1LetterClicked = true;

  const letterIcon = document.getElementById("letter-icon-1");
  const paperLetter = document.getElementById("letter-paper-1");
  const nextBtn = document.getElementById("next-btn-1");

  letterIcon.classList.add("pop-out");

  setTimeout(() => {
    letterIcon.classList.add("hidden");
    paperLetter.classList.remove("hidden");

    // Start typewriter effect
    typeWriter(FIRST_LETTER_MESSAGE, "typewriter-1", 32, () => {
      nextBtn.classList.remove("hidden");
    });
  }, 400);
}


/* ==========================================================================
   STEP 2 INTERACTIONS: SPECIAL GIFT
   ========================================================================== */

let step2GiftClicked = false;
let step2LetterClicked = false;

function openSecondGift() {
  if (step2GiftClicked) return;
  step2GiftClicked = true;

  const giftBox = document.getElementById("gift-box-2");
  const letterIcon = document.getElementById("letter-icon-2");

  giftBox.classList.add("pop-out");

  setTimeout(() => {
    giftBox.classList.add("hidden");
    letterIcon.classList.remove("hidden");
    letterIcon.classList.add("scene", "active");
  }, 400);
}

function openSecondLetter() {
  if (step2LetterClicked) return;
  step2LetterClicked = true;

  const letterIcon = document.getElementById("letter-icon-2");
  const paperLetter = document.getElementById("letter-paper-2");
  const nextBtn = document.getElementById("next-btn-2");

  letterIcon.classList.add("pop-out");

  setTimeout(() => {
    letterIcon.classList.add("hidden");
    paperLetter.classList.remove("hidden");

    // Start typewriter effect
    typeWriter(SECOND_LETTER_MESSAGE, "typewriter-2", 32, () => {
      nextBtn.classList.remove("hidden");
    });
  }, 400);
}


/* ==========================================================================
   STEP 3 INTERACTIONS: FINAL GIFT INTRO
   ========================================================================== */

let step3TitleClicked = false;
let step3LetterClicked = false;

function revealIntroLetter() {
  if (step3TitleClicked) return;
  step3TitleClicked = true;

  const titleWrap = document.getElementById("final-gift-text-wrap");
  const letterIcon = document.getElementById("letter-icon-3");

  titleWrap.classList.add("pop-out");

  setTimeout(() => {
    titleWrap.classList.add("hidden");
    letterIcon.classList.remove("hidden");
    letterIcon.classList.add("scene", "active");
  }, 400);
}

function openIntroLetter() {
  if (step3LetterClicked) return;
  step3LetterClicked = true;

  const letterIcon = document.getElementById("letter-icon-3");
  const paperLetter = document.getElementById("letter-paper-3");

  letterIcon.classList.add("pop-out");

  setTimeout(() => {
    letterIcon.classList.add("hidden");
    paperLetter.classList.remove("hidden");
  }, 400);
}


/* ==========================================================================
   STEP 4 INTERACTIONS: PERSONAL MESSAGE & AUDIO PLAYER
   ========================================================================== */

function startPersonalMessageStep() {
  const audioBox = document.getElementById("voice-player-box");
  const nextBtn = document.getElementById("next-btn-4");

  typeWriter(PERSONAL_MESSAGE, "typewriter-personal", 30, () => {
    audioBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  });
}

function toggleVoiceAudio() {
  const audio = document.getElementById("personal-audio");
  const playIcon = document.getElementById("play-icon");
  const playText = document.getElementById("play-text");

  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      playIcon.textContent = "❚❚";
      playText.textContent = "Pause Voice Note";
    }).catch((err) => {
      console.log("Audio play error or audio not provided yet:", err);
      alert("Audio file is ready to be added! Please check the audio path.");
    });
  } else {
    audio.pause();
    playIcon.textContent = "▶";
    playText.textContent = "Play Message";
  }

  audio.onended = () => {
    playIcon.textContent = "▶";
    playText.textContent = "Replay Message";
  };
}


/* ==========================================================================
   STEP 6: FINAL MAGIC PARTY CELEBRATION
   ========================================================================== */

function triggerMagicParty() {
  const magicBtn = document.getElementById("magic-party-btn");
  magicBtn.textContent = "Magical Moments 🌻✨";
  magicBtn.style.pointerEvents = "none";

  // Rapidly rain celebratory elements: confetti, sunflowers, balloons, sparkles
  const partyElements = ["🌻", "🎈", "🎉", "✨", "🎊", "💖", "💫", "⭐", "🌻", "🎈","💥"];
  
  let count = 0;
  const burstInterval = setInterval(() => {
    for (let i = 0; i < 4; i++) {
      createPartyPiece(partyElements);
    }
    count++;
    if (count > 25) {
      clearInterval(burstInterval);
    }
  }, 120);
}

function createPartyPiece(elements) {
  const piece = document.createElement("div");
  piece.className = "magic-confetti";
  
  const randomIndex = Math.floor(Math.random() * elements.length);
  piece.textContent = elements[randomIndex];

  const left = Math.random() * 100;
  const duration = 2.5 + Math.random() * 3;
  const size = 1.3 + Math.random() * 1.5;

  piece.style.left = `${left}vw`;
  piece.style.fontSize = `${size}rem`;
  piece.style.animationDuration = `${duration}s`;

  document.body.appendChild(piece);

  setTimeout(() => {
    piece.remove();
  }, duration * 1000);
}
