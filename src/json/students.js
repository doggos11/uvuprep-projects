const students = {
  "Abraham E": {title: "Rock Paper Scissors", src: "https://trinket.io/embed/python3/9c1f211091?outputOnly=true&runOption=run&start=result"},
  "Adeline G": {title: "Beetle, Boot, Bomb", src: "https://trinket.io/embed/python/4a1057604a?outputOnly=true&runOption=run&start=result"},
  "Aidan G": {title: "Paint (Use arrow keys)", src: "https://trinket.io/embed/python/73aef23121?outputOnly=true&start=result"},
  "Aiden S": {title: "Adventure of a Lifetime", src: "https://trinket.io/embed/python3/b7bf4d1529?outputOnly=true&runOption=run&start=result"},
  "Alex M": {title: "This Is Done", src: "https://trinket.io/embed/python3/bc7a5afd86?outputOnly=true&runOption=run&start=result"},
  "Alondra Z": {title: "Einstein Quiz", src: "https://trinket.io/embed/python3/d23fa703d2?outputOnly=true&runOption=run&start=result"},
  "Andrea L": {title: "Tic Tac Toe", src: "https://trinket.io/embed/python3/e9d6c2ae24?outputOnly=true&runOption=run&start=result"},
  "Andrew M": {title: "Pretty Pictures", src: "https://trinket.io/embed/python/25979adc46?outputOnly=true&start=result"},
  "Anna Le": {title: "Cookie Adventure", src: "https://trinket.io/embed/python3/e8065bf13c?outputOnly=true&runOption=run&start=result"},
  "Anna Liu": {title: "Story Maker", src: "https://trinket.io/embed/python3/df0f6a2d26?outputOnly=true&runOption=run&start=result"},
  "Austin W": {title: "Fire (Press 1-4 for color change)", src: "https://trinket.io/embed/python/64c00ff12b?outputOnly=true&start=result"},
  "Billy O": {title: "Quiz", src: "https://trinket.io/embed/python3/e5db8e500f?outputOnly=true&runOption=run&start=result"},
  "Brighton C": {title: "Pokemon", src: "https://trinket.io/embed/python/205b7cb006?outputOnly=true&runOption=run&start=result"},
  "Britney R": {title: "The Quest for the Dog", src: "https://trinket.io/embed/python3/0030acb808?outputOnly=true&runOption=run&start=result"},
  "Britton B": {title: "Jeopardy", src: "https://trinket.io/embed/python/d4efb63b1d?outputOnly=true&runOption=run&start=result"},
  "Chandler L": {title: "Tic-Tac-Toe", src: "https://trinket.io/embed/python3/b14bc88c26?outputOnly=true&runOption=run&start=result"},
  "Chris C": {title: "Drawing Simulator", src: "https://trinket.io/embed/python/ee650edd8e?outputOnly=true&start=result"},
  "Daniela A": {title: "Impossible Quiz", src: "https://trinket.io/embed/python/c1ace36416?outputOnly=true&runOption=run&start=result"},
  "Dylan F": {title: "Soccer Quiz", src: "https://trinket.io/embed/python3/f7d980e077?outputOnly=true&runOption=run&start=result"},
  "Dylan G": {title: "Pokemon", src: "https://trinket.io/embed/python3/ac330ad94b?outputOnly=true&runOption=run&start=result"},
  "Elijah C": {title: "Economic Management", src: "https://trinket.io/embed/python3/a04e562e47?outputOnly=true&runOption=run&start=result"},
  "Emil P": {title: "Rock Paper Scissors", src: "https://trinket.io/embed/python3/420f9c5950?outputOnly=true&runOption=run&start=result"},
  "Emme T": {title: "Snake", src: "https://trinket.io/embed/python/4c950d51c2?outputOnly=true&start=result&start=result"},
  "Ethan B": {title: "Website", src: "https://computer-science-project--ethanbenson.repl.co/"},
  "Erick R": {title: "Quiz", src: "https://trinket.io/embed/python/70f2db8fbf?outputOnly=true&runOption=run&start=result"},
  "Forrest P": {title: "Password Generator", src: "https://trinket.io/embed/python3/d984195cb0?outputOnly=true&runOption=run&start=result"},
  "Hailey B": {title: "Rock Paper Scissors", src: "https://trinket.io/embed/python3/9c9feecf2f?outputOnly=true&runOption=run&start=result"},
  "Isaac G": {title: "Kobe", src: "https://trinket.io/embed/python/9190548c16?outputOnly=true&start=result"},
  "Ivy D": {title: "Desert Island", src: "https://trinket.io/embed/python/8031c79c98?outputOnly=true&runOption=run&start=result"},
  "Jacob J": {title: "Emoji Generator", src: "https://trinket.io/embed/python/ce9eea6fdc?outputOnly=true&runOption=run&start=result"},
  "Jesus P": {title: "Alpha D&D", src: "https://trinket.io/embed/python3/47d43927af?outputOnly=true&runOption=run&start=result"},
  "Kaleb S": {title: "Hangman", src: "https://trinket.io/embed/python3/946629dfa1?outputOnly=true&runOption=run&start=result"},
  "Kemarie M": {title: "Magic 8-ball", src: "https://trinket.io/embed/python3/03b872cf6d?outputOnly=true&runOption=run&start=result"},
  "Kyle G": {title: "Wisp's Tale", src: "https://trinket.io/embed/python3/1979560edc?outputOnly=true&runOption=run&start=result"},
  "Maria G": {title: "BTS Quiz", src: "https://trinket.io/embed/python3/3d49d53487?outputOnly=true&runOption=run&start=result"},
  "Miriam T": {title: "Quiz", src: "https://trinket.io/embed/python/6ed3da70ad?outputOnly=true&runOption=run&start=result"},
  "Moira S": {title: "Get the Treasure", src: "https://trinket.io/embed/python3/1ca2e17a5d?outputOnly=true&runOption=run&start=result"},
  "Preston B": {title: "Marcus", src: "https://trinket.io/embed/python3/df9a9d8b42?outputOnly=true&runOption=run&start=result"},
  "Rebekah S": {title: "Chutes and Ladders", src: "https://trinket.io/embed/python3/da581f10c4?outputOnly=true&runOption=run&start=result"},
  "Reese A": {title: "Reese/Taylan Quiz", src: "https://trinket.io/embed/python3/4b924f9b85?outputOnly=true&runOption=run&start=result"},
  "Sadie A": {title: "Haunted House", src: "https://trinket.io/embed/python3/7699c02c68?outputOnly=true&runOption=run&start=result"},
  "Sam G": {title: "Character Creator", src: "https://trinket.io/embed/python3/7779400462?outputOnly=true&runOption=run&start=result"},
  "Sam W": {title: "Choose Your Own Adventure", src: "https://trinket.io/embed/python/bad5dac1cd?outputOnly=true&runOption=run&start=result"},
  "Samari V": {title: "The Unknown Virus", src: "https://trinket.io/embed/python/1009e727b2?outputOnly=true&runOption=run&start=result"},
  "Savannah W": {title: "Rock Paper Scissors", src: "https://trinket.io/embed/python3/9b1ab747ec?outputOnly=true&runOption=run&start=result"},
  "Seth G": {title: "Modern Medicine", src: "https://trinket.io/embed/python3/2455fb04b2?outputOnly=true&runOption=run&start=result"},
  "Sophia S": {title: "Adventure in the Forest", src: "https://trinket.io/embed/python/b21accc6f9?outputOnly=true&runOption=run&start=result"},
  "Taylan H": {title: "Princess Quiz", src: "https://trinket.io/embed/python3/24a89dc8e3?outputOnly=true&runOption=run&start=result"},
  "Xander E": {title: "Standoff", src: "https://trinket.io/embed/python/5e66f0293d?outputOnly=true&runOption=run&start=result"},
  "Zach E": {title: "Web of Squares", src: "https://trinket.io/embed/python/00396fe583?outputOnly=true&start=result"}
}

export default students;