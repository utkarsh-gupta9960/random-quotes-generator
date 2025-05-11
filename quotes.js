function generator(){
const element=document.getElementById("quotes");
const quotes = [
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Happiness depends upon ourselves. — Aristotle",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "A smooth sea never made a skilled sailor. — Franklin D. Roosevelt",
    "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
    "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
    "Growth and comfort do not coexist. — Ginni Rometty",
    "Imagination is more important than knowledge. — Albert Einstein",
    "Creativity is intelligence having fun. — Albert Einstein",
    "You can’t use up creativity. The more you use, the more you have. — Maya Angelou",
    "Every artist was first an amateur. — Ralph Waldo Emerson",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson"
  ];
  
  const index=Math.floor(Math.random()*quotes.length);
  element.textContent=quotes[index];
}
  setInterval(generator,5000);

  