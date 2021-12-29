class SnowFlake {
    constructor() {
        this.reset();
    }

    getRandom(min, max) {
        return min + Math.random() * (max - min);
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > window.innerWidth ||
            this.y > window.innerHeight) {
            this.reset();
        }
    }

    reset() {
        this.x = this.getRandom(-window.innerWidth / 2, window.innerWidth);
        this.y = this.getRandom(0, window.innerHeight / 4);
        this.vy = this.getRandom(1, 4);
        this.vx = this.getRandom(0, 8);
        this.size = this.getRandom(1, 3);
        this.alpha = this.getRandom(0.3, 0.9);
    }
}

class Snow {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        window.addEventListener('resize', () => this.onResize());
        this.onResize();
        this.update = this.update.bind(this);
        this.createSnowFlakes();
        requestAnimationFrame(this.update);
    }

    createSnowFlakes() {
        const flakeCount = window.innerWidth / 6;
        this.snowFlakes = [];
        for (let i = 0; i < flakeCount; i++) {
            this.snowFlakes.push(new SnowFlake());
        }
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (const dot of this.snowFlakes) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.globalAlpha = dot.alpha;
            this.ctx.fillStyle = "#ddd";
            this.ctx.fillRect(dot.x - dot.size, dot.y, dot.size, dot.size);
            this.ctx.fillRect(dot.x, dot.y - dot.size, dot.size, dot.size);
            this.ctx.fillRect(dot.x - dot.size, dot.y - dot.size, dot.size, dot.size);
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(dot.x, dot.y, dot.size, dot.size);
            this.ctx.closePath();
            this.ctx.restore();
            dot.move();
        }
        requestAnimationFrame(this.update);
    }
}

new Snow();