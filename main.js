// Globe variables

// Phrases
const BROAD_THINKING_PHRASES = [
  "Everything connects.",
  "What if possibility is endless?",
  "Beyond the obvious lies truth.",
  "Consider the opposite.",
  "What's truly essential?",
  "Observe without judgment.",
  "The unseen shapes the seen.",
  "What story are you telling?",
  "Find the pattern.",
  "Embrace the paradox.",
  "Where does this lead?",
  "Question the assumption.",
  "Silence speaks volumes.",
  "What if it's simpler?",
  "The beginning is everywhere.",
  "What is truly valuable?",
  "See the whole picture.",
  "Change is constant.",
  "What's your unique contribution?",
  "Listen to the whispers.",
  "The answer is within.",
  "What sustains you?",
  "Perspective shifts everything.",
  "Where is the growth?",
  "What's next for humanity?"
];

const SPECIAL_REFLECTION_PROMPTS = [
  "How does this resonate with a current situation in your life?",
  "What new perspective does this phrase offer you today?",
  "If this phrase holds a key, what lock does it open for you?",
  "What immediate action or thought does this inspire?",
  "How might you apply this insight to a challenge you face?",
  "What hidden truth does this phrase reveal about yourself?",
  "Consider a recent decision. How does this phrase relate to it?",
  "What belief might this phrase invite you to question?",
  "Where in your life can you find evidence of this statement?",
  "What feeling does this phrase evoke, and what does that tell you?",
  "If you lived by this phrase, how would your day change?",
  "What wisdom does this phrase awaken within you?",
  "How can you bring more of this quality into your daily life?",
  "What old story are you ready to rewrite with this new insight?",
  "Who might benefit if you shared this understanding?",
  "What would 'enough' look like if guided by this phrase?",
  "How does this phrase connect to your deeper purpose?",
  "What resistance do you feel towards this idea, and why?",
  "What does this phrase encourage you to let go of?",
  "What does this phrase call you to create or initiate?",
  "If this phrase were a compass, where would it point you?",
  "What is one small step you can take based on this thought?",
  "How does this phrase relate to your personal power?",
  "What dream or aspiration does this phrase touch upon?",
  "What legacy do you wish to leave, guided by this wisdom?"
];

const IMMEDIATE_ACTION_ADVICE = [
  "Take three deep, mindful breaths right now.",
  "Identify one small task you can complete in 10 minutes.",
  "Send a genuine compliment to someone today.",
  "Drink a full glass of water consciously.",
  "Write down three things you're grateful for.",
  "Stand up and stretch for one minute.",
  "Delete five unnecessary files or photos from your device.",
  "Text a friend just to say hello, no agenda.",
  "Notice one beautiful thing in your immediate surroundings.",
  "Listen to a favorite song and really focus on it.",
  "Smile at the next person you make eye contact with.",
  "Spend 5 minutes tidying a small area around you.",
  "Limit your screen time for the next hour.",
  "Do one small act of kindness anonymously.",
  "Write down a single goal you want to achieve by tomorrow.",
  "Move your body for 10 minutes, even if it's just walking.",
  "Consciously choose a healthy snack today.",
  "Take a 5-minute break to clear your mind.",
  "Speak kindly to yourself about one thing.",
  "Reach out and touch something with a calming texture.",
  "Avoid complaining for the rest of the day.",
  "Set a reminder for something you often forget.",
  "Learn one new fact or word today.",
  "Visualize your ideal outcome for a current situation.",
  "Journal one sentence about how you're feeling right now."
];

// Number of messages per category
const MESSAGES_NUMBER = 25;

// Function to return a random index
const randG = () => Math.floor(Math.random()*MESSAGES_NUMBER);

// Function to run the program for the user
const generateUserMessage = () => {
    let broadThinking = BROAD_THINKING_PHRASES[randG()];
    let reflection = SPECIAL_REFLECTION_PROMPTS[randG()];
    let action = IMMEDIATE_ACTION_ADVICE[randG()];

    return `
  🌟 Welcome to Mindful Moments 🌟
  
  Today's Insight: "${broadThinking}"
  
  Reflection Prompt: ${reflection}
  
  Quick Action: ${action}
  `;
}

console.log(generateUserMessage());