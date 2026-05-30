/* ═══════════════════════════════════════════
   LETTER DATA
   ✏️  Edit these to personalise each letter!
═══════════════════════════════════════════ */
const letters = {
  1: {
    name: "Arya",
    dear: "Dear Birthday Girl,",
    text: `In the tapestry of our lives, your presence is a rare gem, illuminating the path with moments of warmth and acceptance. Thank you for being my friend — I hope you're always surrounded by love because you really deserve it.\n\nHere's to another year of adventures, laughter, and memories that we'll carry forever. May this birthday be the beginning of your best chapter yet! 🌟`,
    sign: "xD, Arya 🌸",
    photo: "https://picsum.photos/seed/arya99/200/220",
    caption: "our fav memory! 📷",
    cardColor: "#fce8ec",
  },
  2: {
    name: "Rithika",
    dear: "Hey you! 🎉",
    text: `Where do I even begin? You've been the kind of friend who shows up — through the good days, the chaotic ones, and all the days in between.\n\nWatching you grow has been one of the greatest privileges of my life. Today, I celebrate YOU — every quirk, every laugh, every late-night conversation that meant the world to me. ✨`,
    sign: "With all my love, Maya 💙",
    photo: "https://picsum.photos/seed/maya22/200/220",
    caption: "my fav human 🫶",
    cardColor: "#e8eef9",
  },
  3: {
    name: "Riya",
    dear: "Dearest you,",
    text: `Remember when we were absolutely convinced we could take on the entire world? Good news: we still can — and now we have even more reasons to.\n\nHappy birthday to someone who makes every ordinary moment feel like an adventure. The world is genuinely a better, brighter, and way more fun place because you're in it. 🍃`,
    sign: "Forever your Riya ☘",
    photo: "https://picsum.photos/seed/riya33/200/220",
    caption: "best day ever! 🌿",
    cardColor: "#e8f9ee",
  },
  4: {
    name: "Zara",
    dear: "To my forever person,",
    text: `Some friendships are rare. The kind that feel like coming home no matter how much time has passed. That's what you are to me — home.\n\nThank you for your honesty, your warmth, and your ridiculous sense of humour that never fails to pull me out of any funk. Happy birthday! May this year bring everything you've been working towards. ⭐`,
    sign: "Always yours, Zara ✨",
    photo: "https://picsum.photos/seed/zara44/200/220",
    caption: "golden hour ☀️",
    cardColor: "#fdf3e3",
  },
  5: {
    name: "Priya",
    dear: "Hey you gorgeous soul,",
    text: `If I had to pick one person to call when things go sideways, it would always be you. Your calm, your kindness, your ability to see the best in people — it's a superpower and I hope you know that.\n\nOn your birthday, I just want to remind you: you are so deeply loved. By me, by so many people whose lives you've touched without even realising it. 💜`,
    sign: "Yours always, Priya 🌙",
    photo: "https://picsum.photos/seed/priya55/200/220",
    caption: "we belong here! 🫶",
    cardColor: "#f3e8fd",
  },
  6: {
    name: "Nisha",
    dear: "To my favourite chaos agent,",
    text: `Every year with you is an absolute plot twist, and I wouldn't have it any other way. You bring colour to the most ordinary days and I genuinely don't know what I'd do without you.\n\nHere's to you — the bold, the beautiful, the brilliantly unhinged. May this birthday be everything you imagined and then some. I love you endlessly. 💕`,
    sign: "xo, Nisha ✦",
    photo: "https://picsum.photos/seed/nisha66/200/220",
    caption: "us, always 🌸",
    cardColor: "#fde8f3",
  },
};

/* ═══════════════════════════════════════════
   SCREEN NAVIGATION
═══════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ═══════════════════════════════════════════
   SCREEN 1 → SCREEN 2  (postbox click)
═══════════════════════════════════════════ */
document.getElementById('openPostbox').addEventListener('click', function () {
  this.classList.add('opening');
  setTimeout(() => showScreen('screen-envelopes'), 480);
});

/* ═══════════════════════════════════════════
   SCREEN 2 → SCREEN 3  (envelope click)
═══════════════════════════════════════════ */
document.querySelectorAll('.envelope-card').forEach(card => {
  card.addEventListener('click', function () {
    const id = this.dataset.id;
    const data = letters[id];
    if (!data) return;

    // animate envelope away
    this.classList.add('opening');

    // populate letter
    document.getElementById('letterDear').textContent   = data.dear;
    document.getElementById('letterText').textContent   = data.text;
    document.getElementById('letterSign').textContent   = data.sign;
    document.getElementById('letterPhoto').src          = data.photo;
    document.getElementById('polaroidCaption').textContent = data.caption;
    document.getElementById('letterCard').style.background = data.cardColor;

    setTimeout(() => showScreen('screen-letter'), 480);
  });
});

/* ═══════════════════════════════════════════
   SCREEN 3 → SCREEN 2  (back button)
═══════════════════════════════════════════ */
document.getElementById('backBtn').addEventListener('click', () => {
  // reset all envelope opening states
  document.querySelectorAll('.envelope-card').forEach(c => c.classList.remove('opening'));
  showScreen('screen-envelopes');
});
