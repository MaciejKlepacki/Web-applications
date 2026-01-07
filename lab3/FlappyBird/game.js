const canvas = document.getElementById("birdCanvas");
const ctx = canvas.getContext("2d");

// Elementy UI
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const currentScoreSpan = document.getElementById("current-score");
const bestScoreSpan = document.getElementById("best-score");
const restartBtn = document.getElementById("restart-btn");

// Ładowanie grafik
const birdImg = new Image();
birdImg.src = "bird.png";

const pipeImg = new Image();
pipeImg.src = "pipe.png";

// Stan gry
let frames = 0;
const degree = Math.PI / 180;
let score = 0;
let gameState = {
  current: 0,
  getReady: 0,
  game: 1,
  dying: 2,
  over: 3,
};

// TŁO
const bg = {
  draw: function () {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  },
};

// ZIEMIA
const fg = {
  x: 0,
  h: 112,
  dx: 2,
  draw: function () {
    ctx.fillStyle = "#ded895";
    ctx.fillRect(this.x, canvas.height - this.h, canvas.width, this.h);
    ctx.fillRect(
      this.x + canvas.width,
      canvas.height - this.h,
      canvas.width,
      this.h
    );
    // Trawa
    ctx.fillStyle = "#73bf2e";
    ctx.fillRect(this.x, canvas.height - this.h, canvas.width, 20);
    ctx.fillRect(
      this.x + canvas.width,
      canvas.height - this.h,
      canvas.width,
      20
    );
  },
  update: function () {
    if (gameState.current === gameState.game) {
      this.x = (this.x - this.dx) % (canvas.width / 2);
    }
  },
};

// PTAK
const bird = {
  x: 50,
  y: 150,
  w: 34,
  h: 26,
  radius: 12,
  gravity: 0.18,
  jump: 4.0,
  speed: 0,
  rotation: 0,

  draw: function () {
    let birdCenter = { x: this.x + this.w / 2, y: this.y + this.h / 2 };

    ctx.save();
    ctx.translate(birdCenter.x, birdCenter.y);

    // Rotacja
    if (gameState.current === gameState.getReady) this.rotation = 0;
    else {
      this.rotation = this.speed * (10 * degree);
      if (this.rotation > 90 * degree) this.rotation = 90 * degree;
      if (this.rotation < -25 * degree) this.rotation = -25 * degree;
    }
    ctx.rotate(this.rotation);

    // Rysowanie obrazka lub prostokąta (fallback)
    if (birdImg.complete && birdImg.naturalHeight !== 0) {
      ctx.drawImage(birdImg, -this.w / 2, -this.h / 2, this.w, this.h);
    } else {
      ctx.fillStyle = "yellow";
      ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    }

    ctx.restore();
  },

  flap: function () {
    this.speed = -this.jump;
  },

  update: function () {
    if (gameState.current === gameState.getReady) {
      this.y = 150;
      this.speed = 0;
      this.rotation = 0;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      // Kolizja z podłogą
      if (this.y + this.h / 2 >= canvas.height - fg.h) {
        this.y = canvas.height - fg.h - this.h / 2;
        if (
          gameState.current === gameState.game ||
          gameState.current === gameState.dying
        ) {
          gameState.current = gameState.over;
          showGameOver();
        }
      }
    }
  },
};

// RURY
const pipes = {
  position: [],
  w: 52,
  h: 400,
  gap: 120,
  dx: 2,

  draw: function () {
    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      let topY = p.y;
      let bottomY = p.y + this.h + this.gap;

      // Rysowanie z obrazkiem lub kolorami
      if (pipeImg.complete && pipeImg.naturalHeight !== 0) {
        // Rura górna (obrócona)
        ctx.save();
        ctx.translate(p.x + this.w / 2, topY + this.h / 2); // Środek rury
        ctx.scale(1, -1); // Odbicie lustrzane w pionie
        ctx.drawImage(pipeImg, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();

        // Rura dolna (normalna)
        ctx.drawImage(pipeImg, p.x, bottomY, this.w, this.h);
      } else {
        // Fallback (zielone prostokąty)
        ctx.fillStyle = "#73bf2e";
        ctx.fillRect(p.x, topY, this.w, this.h);
        ctx.fillRect(p.x, bottomY, this.w, this.h);
        ctx.strokeStyle = "#555";
        ctx.strokeRect(p.x, topY, this.w, this.h);
        ctx.strokeRect(p.x, bottomY, this.w, this.h);
      }
    }
  },

  update: function () {
    if (gameState.current !== gameState.game) return;

    if (frames % 100 == 0) {
      this.position.push({
        x: canvas.width,
        y: -150 * (Math.random() + 1),
      });
    }

    for (let i = 0; i < this.position.length; i++) {
      let p = this.position[i];
      p.x -= this.dx;

      if (p.x + this.w <= 0) {
        this.position.shift();
        score += 1;
        i--;
        continue;
      }

      // Kolizje
      let birdLeft = bird.x - bird.w / 2;
      let birdRight = bird.x + bird.w / 2;
      let birdTop = bird.y - bird.h / 2;
      let birdBottom = bird.y + bird.h / 2;

      let pipeLeft = p.x;
      let pipeRight = p.x + this.w;
      let topPipeBottom = p.y + this.h;
      let bottomPipeTop = p.y + this.h + this.gap;

      if (birdRight > pipeLeft && birdLeft < pipeRight) {
        if (birdTop < topPipeBottom || birdBottom > bottomPipeTop) {
          gameState.current = gameState.dying;
        }
      }
    }
  },

  reset: function () {
    this.position = [];
  },
};

// WYNIK I UI
function drawScore() {
  ctx.fillStyle = "#FFF";
  ctx.strokeStyle = "#000";

  if (
    gameState.current == gameState.game ||
    gameState.current == gameState.dying
  ) {
    ctx.lineWidth = 2;
    ctx.font = "35px Arial";
    ctx.fillText(score, canvas.width / 2 - 10, 50);
    ctx.strokeText(score, canvas.width / 2 - 10, 50);
  }
}

function showGameOver() {
  let best = localStorage.getItem("bestScore") || 0;
  if (score > best) {
    best = score;
    localStorage.setItem("bestScore", best);
  }
  currentScoreSpan.innerText = score;
  bestScoreSpan.innerText = best;
  gameOverScreen.classList.remove("hidden");
}

function resetGame() {
  bird.speed = 0;
  bird.rotation = 0;
  pipes.reset();
  score = 0;
  frames = 0;
  gameState.current = gameState.getReady;
  gameOverScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

document.addEventListener("keydown", function (evt) {
  if (evt.code === "Space") {
    evt.preventDefault();
    switch (gameState.current) {
      case gameState.getReady:
        gameState.current = gameState.game;
        startScreen.classList.add("hidden");
        bird.flap();
        break;
      case gameState.game:
        bird.flap();
        break;
    }
  }
});

restartBtn.addEventListener("click", resetGame);

function loop() {
  bird.update();
  fg.update();
  pipes.update();

  bg.draw();
  pipes.draw();
  fg.draw();
  bird.draw();
  drawScore();

  frames++;
  requestAnimationFrame(loop);
}

loop();
