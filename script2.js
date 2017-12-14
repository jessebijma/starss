"use strict";

var canvas = document.getElementById("background");
var context = canvas.getContext("2d");
var stars = [];


//fade-out maken?
//vallende sterren?

var star = function (canvas, ctx, r) {
    this.r = r * Math.random();
    this.w = Math.random() * canvas.width;
    this.h = Math.random() * canvas.height;
    this.blur = Math.random();
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.r + this.w, this.r + this.h, this.r, 0, Math.PI * 2, false);

        if (this.blur <= 0.5) {
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
            ctx.shadowBlur = 3;
        }
        else if (this.blur > 0.75) {
            ctx.fillStyle = "rgba(255, 254, 196, 1)";
            ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
            ctx.shadowBlur = 4;
        }
        else {
            ctx.fillStyle = "rgba(192, 247, 255, 1)";
            ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
            ctx.shadowBlur = 7;
        }
        ctx.fill();
        ctx.closePath();
    };
};


setInterval(function () {
    stars.push(new star(canvas, context, 3));
    stars[stars.length - 1].draw();
    if (stars.length >= 200) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        stars.shift();
        stars.forEach(function (star) {
            star.draw();
        })
    }
}, 600);


onresize = function () {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
};
onresize();

