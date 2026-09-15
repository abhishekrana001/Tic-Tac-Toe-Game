# 🎮 Tic Tac Toe Game

A simple and interactive **Tic Tac Toe** game built using **HTML, CSS, and JavaScript**.
The game provides a clean user interface and allows two players to play against each other.

## ✨ Features

* 🎯 Two-player gameplay
* 🖱️ Interactive game board
* 🏆 Automatic winner detection
* 🤝 Draw detection
* 🔄 Reset game functionality
* 📱 Responsive design
* ⚡ Fast and lightweight
* 🎨 Simple and user-friendly interface

## 🛠️ Technologies Used

* **HTML5** – Used to create the structure of the game.
* **CSS3** – Used for styling and responsive design.
* **JavaScript** – Used to implement the game logic and user interactions.

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> File names may vary depending on the structure of the project.

## 🎮 How to Play

1. Open the game in your browser.
2. Player 1 starts the game.
3. Players take turns placing their marks on the board.
4. The first player to get **three marks in a row** wins.
5. The marks can be placed:

   * Horizontally
   * Vertically
   * Diagonally
6. If all spaces are filled and nobody gets three in a row, the game ends in a **draw**.
7. Use the **Reset** button to start a new game.

## 🚀 How to Run the Project

### Method 1 — Open Directly

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your web browser.
4. Start playing 🎮

### Method 2 — Clone Using Git

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then open the project folder and run `index.html` in your browser.

## 🧠 Game Logic

The game is implemented using JavaScript.

The main logic includes:

* Tracking player moves
* Switching turns between players
* Checking winning combinations
* Detecting a draw
* Resetting the game state

The game checks the possible winning combinations after each move.

## 🎯 Winning Conditions

A player wins when their mark occupies any of these combinations:

```text
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]

[0, 3, 6]
[1, 4, 7]
[2, 5, 8]

[0, 4, 8]
[2, 4, 6]
```

These represent the possible horizontal, vertical, and diagonal winning patterns.

## 📱 Responsive Design

The game interface is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

## 📚 What I Learned

While building this project, I practiced:

* HTML structure and semantic elements
* CSS styling and responsive design
* JavaScript DOM manipulation
* JavaScript event handling
* Conditional statements
* Arrays and loops
* Game logic implementation
* Git and GitHub

---

**Made with ❤️ using HTML, CSS & JavaScript**
