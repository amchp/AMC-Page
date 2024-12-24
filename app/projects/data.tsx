import { MazeGenerator } from "@/components/maze-generator";
import { SnakeAI } from "@/components/snake";

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
    content: <SnakeAI />,
    link: "https://editor.p5js.org/mcewenalejandro/sketches/WJdCPHuYd"
  },
  {
    id: '2',
    title: "Sudoku Solver",
    description: (
      "This application allows users to input and solve a Sudoku puzzle while observing the backtracking process." +
      " It employs a backtracking algorithm to solve the puzzles." +
      " The main challenge I faced was designing a way to visually demonstrate the backtracking process to the user." +
      " Finding a solution to this problem took some time, but it was a rewarding learning experience."
    ),
    content: [
      "/sudoku-solver/inputed-sudoku.png",
      "/sudoku-solver/solving-sudoku.png",
      "/sudoku-solver/solved-sudoku.png",
    ],
    link: "https://github.com/amchp/SudokuSolver"
  },
  {
    id: '3',
    title: "Tic-Tac-Toe",
    description: (
      "This is a digital implementation of Tic-Tac-Toe." +
      " It features both multiplayer mode and an AI opponent." +
      " The AI uses a minimax algorithm, enabling it to play optimally." +
      " Implementing the minimax algorithm was challenging but highly educational." +
      " Aside from the AI, the project required significant focus on GUI design and user interaction."
    ),
    content: [
      "/tic-tac-toe/tic-tac-toe.png",
      "/tic-tac-toe/playing.png",
      "/tic-tac-toe/p1-wins.png",
      "/tic-tac-toe/p2-wins.png",
      "/tic-tac-toe/draw.png",
    ],
    link: "https://github.com/amchp/tic-tac-toe"
  },
  {
    id: '4',
    title: "Load Balancing",
    description: (
      "This project, developed as part of the 'Tópicos Especiales en Telemática' course, implements a web server monitoring program." +
      " It supervises server load and performs automatic load balancing based on web service requirements." +
      " The solution involves creating EC2 instances on AWS, establishing communication between server and client monitors, and implementing heartbeat signals to ensure operational status." +
      " The project emphasizes cloud infrastructure management, automation, and real-time monitoring."
    ),
    content: [
      "/load-balancing/monitoring-page.jpg",
      "/load-balancing/scale.jpg",
    ],
    link: "https://github.com/amchp/TET-proyecto-2"
  },
  {
    id: '5',
    title: "EcoPlanning",
    description: (
      "EcoPlanning addresses the challenge of route optimization for electric vehicles to alleviate range anxiety." +
      " The project involves a web application that provides optimal routing and ensures a seamless user experience." +
      " Functional, unit, and acceptance testing were integral to its development, with Pytest for unit testing and Azure for acceptance testing." +
      " The system underwent extensive testing, achieving 100% coverage and 90% successful test execution." +
      " This project highlights the importance of robust testing in ensuring software quality and user satisfaction in sustainable mobility solutions."
    ),
    content: [
      "/eco-planning/ecoplanning.png",
      "/eco-planning/sign-up.png",
      "/eco-planning/login.png",
      "/eco-planning/map.png",
      "/eco-planning/stations.png",
      "/eco-planning/station-table.png",
      "/eco-planning/car-table.png",
      "/eco-planning/graphs.png",
    ],
    link: "https://github.com/Vivi-Hoyos2710/ecoplanning"
  },
  {
    id: '6',
    title: "Nuke Store",
    description: (
      "Nuke Store is a fully functional e-commerce application built with Docker and Laravel." +
      " It features a product catalog, shopping cart, and checkout functionality." +
      " The project demonstrates the integration of front-end and back-end development, containerization, and deployment using modern web development practices." +
      " The application is designed to be scalable and maintainable, showcasing best practices in web application development."
    ),
    content: [
      "/nuke-store/nuke-table.png",
      "/nuke-store/cart.png",
      "/nuke-store/order-pdf.png",
      "/nuke-store/nuke-table-admin.png",
      "/nuke-store/profile.png",
      "/nuke-store/user-page.png",
      "/nuke-store/compare-armament.png",
      "/nuke-store/map.png",
    ],
    link: "https://github.com/drew138/nuke-store"
  },
  {
    id: '7',
    title: "Maze Generator",
    description: (
      "This is a game where the objective is to traverse from the top-left corner to the bottom-right corner of a maze." +
      " The maze is generated using random selection with seeds and an island-connecting algorithm to create interesting structures." +
      " Additionally, it uses a pathfinding algorithm to ensure a valid path to the end exists." +
      " Initially, I generated mazes randomly, which resulted in very easy-to-solve layouts." +
      " Implementing the island algorithm significantly improved the maze complexity and was fascinating to program." +
      " The algorithm treats each cell as an island, then randomly selects and connects two islands." +
      " This approach produces much more engaging mazes." +
      " Lastly, the game features two modes: one where the computer keeps track of visited locations and another where the player does so." +
      " You can play in the page click on the game and move with WASD or the arrow keys."
    ),
    content: <MazeGenerator />,
    link: "https://editor.p5js.org/mcewenalejandro/sketches/arXp4Di0b"
  }
];

