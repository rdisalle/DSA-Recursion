//8. Find a way out of the maze
//You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. 
//Write a recursive function that will help you find a possible path through the maze.

//The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. 
//For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are
//blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have 
//already passed before are forbidden.

//For the above maze, a possible exit path can be RRDDLLDDRRRRRR

//You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findWayOut = function(maze, position=0, row=0, column=0, path=[], direction='S') {
    if(row >= maze.length || column >= maze[0].length) {
      return;
    }
    if(row < 0 || column < 0) {
      return;
    }
    path[position] = direction
    position++
    if(maze[row][column] === 'e') {
      console.log('We found the path.', path)
      return;
    }
    if(maze[row][column] === ' ') {
      maze[row][column] = 'V'
      findWayOut(maze, position, row, column - 1, path, 'L')
      findWayOut(maze, position, row, column + 1, path, 'R')
      findWayOut(maze, position, row - 1, column, path, 'U')
      findWayOut(maze, position, row + 1, column, path, 'D')
      maze[row][column] = ' '
    }
    position--
  }
  
findWayOut(maze)

We found the path. (15) ["S", "R", "R", "D", "D", "L", "L", "D", "D", "R", "R", "R", "R", "R", "R"]
VM2498:25 We found the path. (15) ["S", "R", "R", "D", "D", "R", "R", "R", "R", "D", "D", "D", "D", "D", "D"]
VM2498:25 We found the path. (15) ["S", "R", "R", "D", "D", "R", "R", "U", "U", "R", "R", "D", "D", "D", "D"]