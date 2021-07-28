canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "arkin.jpg.jpg";
greencar_image = "Car.jpg.png";

greencar_x = 5;
greencar_y = 225;

function add() {
  background_image = new Image();
  background_image.onload = uploadBackground;
  background_imageTag.src = background_image;

  greencar_imgTag = new Image(); 
  greencar_imgTag.onload = uploadgreeencar;
  greencar_imgTag.src = greencar_image;
}
function uploadBackground() {
	ctx.drawImage(back-imag_Tag, 0, 0, canvas.width, canvas.heigth);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y,greencar_width,greencar_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=38) 
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y =" +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
    if(greencar_y >=40)
	{
		greencar_y = greencar_y - 10;
		console.log("When down arrow is pressed, x = " + greencar_x + " | y =" +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
38
function left()
{
	if(greencar_y >=37)
	{
		greencar_y = greencar_y - 10;
		console.log("When left arrow is pressed, x = " + greencar_x + " | y =" +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
function right()
{
	if(greencar_y >=38)
	{
		greencar_y = greencar_y - 10;
		console.log("When right arrow is pressed, x = " + greencar_x + " | y =" +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

