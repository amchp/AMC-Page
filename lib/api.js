const api = {
    projects: {getProjects(){
        return[
                {
                    title: "Snake AI",
                    description: "I tried to create a basic Snake AI using a path finding algorithm. This algorithm uses a basic heuristic to priorities which direction it should go first. I had a few problems with this project. First, building snake was a little harder than expected. Also, traking the wall didn't work for some reason. I still need to optimize how it loads a little but I think it works well. ",
                    img: "/Snake.png",
                    link: "https://github.com/amchp/SnakeAI"
                },
                {
                    title: "Maze generator",
                    description: "This is a little game of traversing and getting from the top-left corner to the bottom-right corner. It uses random selection with seeds and island connecting algorithm to create interesting mazes. Also, it uses a path-finding algorithm to verify that there is a path to the end. This was a really interesting program because at first I did the mazes randomly. This caused very easy to solve mazes. Then I tried to do an island algorithm that work way better and it was a very interesting to program. It basically grabs every cell and treats it as an island. Then it selects two island randomly and connects them. This makes the maze way more interesting. Finally, it has two play modes with the computer keeping memory and with the player keeping memory of where they have been.",
                    img: "/MazeGenerator.png",
                    link: "https://github.com/amchp/MazeGenerator"
                },
                {
                    title: "Sudoku Solver",
                    description: "This application lets you input and solve a sudoku even letting you observe the backtracking process the computer uses. As metioned, it uses a backtracking algoritm to solve the Sudokus. The only problem I had designing this is to let the Sudoku show the user how it solves it using backtracking I didn't know what to do and it took me a while to find a solution.",
                    img: "/SudokuSolver.png",
                    link: "https://github.com/amchp/SudokuSolver"
                },
                {
                    title: "Tic-tac-toe",
                    description: "This is a digital tic-tac-toe. It has a multiplayer mode and playing against the AI. The AI play using a min-max algorithm so it plays perfectly. The min-max algorithm was tough but interesting to program. Other than that the program was very GUI intensive.",
                    img: "/Tic-tac-toe.png",
                    link: "https://github.com/amchp/tic-tac-toe"
                }

            ]
        }
    }
}

export default api;