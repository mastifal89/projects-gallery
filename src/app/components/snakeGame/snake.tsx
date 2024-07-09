"use client";
import React, { useRef, useEffect } from "react";
import "./snake.css";
import Image from "next/image";
import { start } from "repl";

type Game = {
  score: number;
  gameInterval: NodeJS.Timeout | null;
  gameStarted: boolean;
  gameOver: boolean;
  food: { x: number | null; y: number | null };
  snake: { x: number; y: number }[];
  direction: string;
};

let game: Game = {
  score: 0,
  gameInterval: null,
  gameStarted: false,
  gameOver: false,
  food: { x: 10, y: 5 },
  snake: [
    { x: 10, y: 12 },
    { x: 10, y: 13 },
    { x: 10, y: 14 },
    { x: 10, y: 15 },
    { x: 10, y: 16 },
    { x: 10, y: 17 },
    { x: 10, y: 18 },
    { x: 11, y: 18 },
    { x: 12, y: 18 },
    { x: 13, y: 18 },
    { x: 14, y: 18 },
    { x: 15, y: 18 },
    { x: 15, y: 19 },
    { x: 15, y: 20 },
    { x: 15, y: 21 },
    { x: 15, y: 22 },
    { x: 15, y: 23 },
    { x: 15, y: 24 },
  ],
  direction: "up",
};

export default function Snake() {
  const canvasRef = useRef(null);

  useEffect(() => {
    document.getElementById("game-over")!.style.display = "none";
    document.addEventListener("keydown", (event) => {
      if (game.gameStarted) {
        switch (event.keyCode) {
          case 37:
            if (game.direction !== "right") {
              game.direction = "left";
            }
            break;
          case 38:
            if (game.direction !== "down") {
              game.direction = "up";
            }
            break;
          case 39:
            if (game.direction !== "left") {
              game.direction = "right";
            }
            break;
          case 40:
            if (game.direction !== "up") {
              game.direction = "down";
            }
            break;
        }
      } else {
        switch (event.keyCode) {
          case 32:
            if (game.gameOver) {
              startAgain();
            } else {
              startGame();
            }
            break;
        }
      }
    });
  }, [game.gameStarted, game.gameOver, game.direction, startGame, startAgain]);

  function render() {
    let gameScreen = document.getElementById("game-screen") as HTMLDivElement;
    gameScreen.innerHTML = "";

    const cellSize = window.innerWidth > 1536 ? "10px" : "8px";

    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 24; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize;
        cell.style.height = cellSize;
        cell.style.display = "flex";
        cell.style.flexShrink = "0";
        cell.classList.add("black");

        if (j === game.food?.x && i === game.food?.y) {
          cell.style.backgroundColor = "#43D9AD";
          cell.style.borderRadius = "50%";
          cell.style.boxShadow = "0 0 10px #43D9AD";
        }

        /* Estilo de la serpiente a medida que va crediendo */
        let snakeCell = game.snake.find(
          (snakeCell) => snakeCell.x === j && snakeCell.y === i
        );

        if (snakeCell) {
          cell.style.backgroundColor = "#43D9AD";
          cell.style.opacity = (
            1 -
            game.snake.indexOf(snakeCell) / game.snake.length
          ).toString();
          cell.classList.add("green");
        }

        /* Estilo de la cabeza */
        if (snakeCell && game.snake.indexOf(snakeCell) === 0) {
          let headRadius = "5px";
          if (game.direction === "up") {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderTopRightRadius = headRadius;
          }
          if (game.direction === "down") {
            cell.style.borderBottomLeftRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
          if (game.direction === "left") {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderBottomLeftRadius = headRadius;
          }
          if (game.direction === "right") {
            cell.style.borderTopRightRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
        }
        gameScreen.appendChild(cell);
      }
    }
  }

  function move(direction: string) {
    switch (direction) {
      case "up":
        if (game.direction !== "down") {
          game.direction = "up";
        }
        break;
      case "down":
        if (game.direction !== "up") {
          game.direction = "down";
        }
        break;
      case "left":
        if (game.direction !== "right") {
          game.direction = "left";
        }
        break;
      case "right":
        if (game.direction !== "left") {
          game.direction = "right";
        }
        break;
    }
  }

  function moveSnake() {
    let newX = game.snake[0].x;
    let newY = game.snake[0].y;

    switch (game.direction) {
      case "up":
        newY--;
        break;
      case "down":
        newY++;
        break;
      case "left":
        newX--;
        break;
      case "right":
        newX++;
        break;
    }

    if (
      newX >= 0 &&
      newX < 24 &&
      newY >= 0 &&
      newY < 40 &&
      !game.snake.find(
        (snakeCell) => snakeCell.x === newX && snakeCell.y === newY
      )
    ) {
      game.snake.unshift({ x: newX, y: newY });

      if (newX === game.food?.x && newY === game.food?.y) {
        game.score++;

        const scoreFoods = document.getElementsByClassName(
          "food"
        ) as HTMLCollectionOf<HTMLElement>;
        scoreFoods[game.score - 1].style.opacity = "1";

        if (game.score === 10) {
          game.snake.unshift({ x: newX, y: newY });
          game.food = { x: null, y: null };
          clearInterval(game.gameInterval!);
          document.getElementById("congrats")!.style.display = "block";
          game.gameOver = true;
          game.gameStarted = false;
        } else {
          game.food = {
            x: Math.floor(Math.random() * 24),
            y: Math.floor(Math.random() * 40),
          };
        }
      } else {
        game.snake.pop();
      }
    } else {
      clearInterval(game.gameInterval!);
      document.getElementById("game-over")!.style.display = "block";
      game.gameStarted = false;
      game.gameOver = true;
    }
    render();
  }

  function startGame() {
    document.getElementById("start-button")!.style.display = "none";

    game.gameStarted = true;
    game.gameInterval = setInterval(moveSnake, 50);
  }

  function startAgain() {
    document.getElementById("start-button")!.style.display = "block";

    document.getElementById("game-over")!.style.display = "none";
    document.getElementById("congrats")!.style.display = "none";

    game.gameStarted = false;
    game.gameOver = false;
    restartScore();
    game.food = {
      x: 10,
      y: 5,
    };
    game.snake = [
      { x: 10, y: 12 },
      { x: 10, y: 13 },
      { x: 10, y: 14 },
      { x: 10, y: 15 },
      { x: 10, y: 16 },
      { x: 10, y: 17 },
      { x: 10, y: 18 },
      { x: 11, y: 18 },
      { x: 12, y: 18 },
      { x: 13, y: 18 },
      { x: 14, y: 18 },
      { x: 15, y: 18 },
      { x: 15, y: 19 },
      { x: 15, y: 20 },
      { x: 15, y: 21 },
      { x: 15, y: 22 },
      { x: 15, y: 23 },
      { x: 15, y: 24 },
    ];
    game.direction = "up";

    clearInterval(game.gameInterval!);
    render();
  }

  function restartScore() {
    game.score = 0;
    const scoreFoods = document.getElementsByClassName(
      "food"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < scoreFoods.length; i++) {
      scoreFoods[i].style.opacity = "0.3";
    }
  }

  return (
    <div id="console">
      <Image height={15} width={15}
        alt="image"
        id="corner"
        src="/icons/console/bolt-up-left.svg"
        className="bolt-up-left"
      />
      <Image height={15} width={15}
        alt="image"
        id="corner"
        src="/icons/console/bolt-up-right.svg"
        className="bolt-up-right"
      />
      <Image height={15} width={15}
        alt="image"
        id="corner"
        src="/icons/console/bolt-down-left.svg"
        className="bolt-down-left"
      />
      <Image height={15} width={15}
        alt="image"
        id="corner"
        src="/icons/console/bolt-down-right.svg"
        className="bolt-down-right"
      />

      <div id="game-screen" ref={canvasRef}></div>
      <button type="button" id="start-button" onClick={startGame}>
        start-game
      </button>
      <div id="game-over" style={{ display: "none" }}>
        <span className="game-over-text">GAME OVER!</span>
        <button className="start-again-button" onClick={startAgain}>
          start-again
        </button>
      </div>
      <div id="congrats" style={{ display: "none" }}>
        <span className="congrats-text">WELL DONE!</span>
        <button className="congrats-button" onClick={startAgain}>
          play-again
        </button>
      </div>
      <div
        id="console-menu"
        className="h-full flex flex-col items-end justify-between"
      >
        <div>
          <div id="instructions">
            <p>{`// use your keyboard`}</p>
            <p>{`// arrows to play`}</p>

            <div
              id="buttons"
              className="w-full flex flex-col items-center gap-1 pt-5"
            >
              <button
                id="console-button"
                className="button-up"
                onClick={() => move("up")}
              >
                <Image height={15} width={15} alt="image" src="/icons/console/arrow-button.svg" />
              </button>

              <div className="buttons-grid">
                <button
                  id="console-button"
                  className="button-left"
                  onClick={() => move("left")}
                >
                  <Image height={15} width={15}
                    alt="image"
                    src="/icons/console/arrow-button.svg"
                    className="-rotate-90"
                  />
                </button>

                <button
                  id="console-button"
                  className="button-down"
                  onClick={() => move("down")}
                >
                  <Image height={15} width={15}
                    alt="image"
                    src="/icons/console/arrow-button.svg"
                    className="rotate-180"
                  />
                </button>

                <button
                  id="console-button"
                  className="button-right"
                  onClick={() => move("right")}
                >
                  <Image height={15} width={15}
                    alt="image"
                    src="/icons/console/arrow-button.svg"
                    className="rotate-90"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="score-board">
            <p className="font-fira_retina text-white pt-5">{`// food left`}</p>

            <div className="score">
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
              <div className="food"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
