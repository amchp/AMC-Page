export interface Project {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode | string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: "Snake AI",
    description: (
      "I developed a basic Snake AI using a pathfinding algorithm." +
      " This algorithm employs a heuristic to prioritize the direction the snake should move first." +
      " During this project, I encountered a few challenges." +
      " First, building the snake was more difficult than expected." +
      " Additionally, tracking the walls didn't function as intended." +
      " I still need to optimize the loading process slightly, but overall, it works well." +
      " Reflecting on this project, it was an excellent introduction to programming complex algorithms." +
      " It also highlighted the challenges of dynamic typing and the importance of understanding the data being handled."
    ),
    images: ["/Snake.png"],
    link: "https://editor.p5js.org/mcewenalejandro/sketches/WJdCPHuYd"
  },
  {
    id: '2',
    title: "Maze Generator",
    description: (
      "This is a game where the objective is to traverse from the top-left corner to the bottom-right corner of a maze." +
      " The maze is generated using random selection with seeds and an island-connecting algorithm to create interesting structures." +
      " Additionally, it uses a pathfinding algorithm to ensure a valid path to the end exists." +
      " Initially, I generated mazes randomly, which resulted in very easy-to-solve layouts." +
      " Implementing the island algorithm significantly improved the maze complexity and was fascinating to program." +
      " The algorithm treats each cell as an island, then randomly selects and connects two islands." +
      " This approach produces much more engaging mazes." +
      " Lastly, the game features two modes: one where the computer keeps track of visited locations and another where the player does so."
    ),
    images: ["/MazeGenerator.png"],
    link: "https://github.com/amchp/MazeGenerator"
  },
  {
    id: '3',
    title: "Sudoku Solver",
    description: (
      "This application allows users to input and solve a Sudoku puzzle while observing the backtracking process." +
      " It employs a backtracking algorithm to solve the puzzles." +
      " The main challenge I faced was designing a way to visually demonstrate the backtracking process to the user." +
      " Finding a solution to this problem took some time, but it was a rewarding learning experience."
    ),
    images: ["/SudokuSolver.png"],
    link: "https://github.com/amchp/SudokuSolver"
  },
  {
    id: '4',
    title: "Tic-Tac-Toe",
    description: (
      "This is a digital implementation of Tic-Tac-Toe." +
      " It features both multiplayer mode and an AI opponent." +
      " The AI uses a minimax algorithm, enabling it to play optimally." +
      " Implementing the minimax algorithm was challenging but highly educational." +
      " Aside from the AI, the project required significant focus on GUI design and user interaction."
    ),
    images: ["/Tic-tac-toe.png"],
    link: "https://github.com/amchp/tic-tac-toe"
  }
];

