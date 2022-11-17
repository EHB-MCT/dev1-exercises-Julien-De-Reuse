"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
// context.fillRect(0, 0, width, height);

drawRandomContent();
function drawRandomContent() {
	for (let i = 0; i < 150; i++);
	{
		context.lineWidth = 10 + Math.random() * 20;
		let gray = Math.floor(Math.random() * 255);
		context.strokeStyle = Utils.rgba(gray, gray, gray, 100);
		let y1 = Math.random() * height;
		let y2 = Math.random() * height;
		Utils.drawLine(0, y1, width, y2);

		//text
		let fontsize = Math.floor(Math.random() * 50);
		context.font = "30px Arial";
		context.fillText("MCT", Math.random() * width, Math.random() * height);
	}
}

drawText();
function drawText() {}

drawMask();
function drawMask() {}
