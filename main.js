canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	nasa_mars_images_array = ["1.jpg","2.jpg","3.jpg"];
	rover_images_array = ["makhi.png","rover.png","rocket.png"];


    random_number = Math.floor(Math.random() * 4);
	console.log(random_number);
	rover_width = 100;
	rover_height = 120;
	
	background_image = nasa_mars_images_array[random_number];
	console.log('background_image is = '+ background_image); 
	
	rover_image = rover_images_array[random_number];
	console.log('rover_image is = '+ rover_image); 

	
	rover_x = 10;
	rover_y = 10;
	
	function add()
	{
		background_imgTag = new Image(); //defining a variable with a new image 
        background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
        background_imgTag.src = background_image; // load image 
        rover_imgTag = new Image(); //defining a variable with a new image 
        rover_imgTag.onload = uploadRover; // setting a function, onloading this variable 
        rover_imgTag.src = rover_image;
	}
	
	function uploadBackground()
	{
		ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	}
	
	function uploadRover()
	{
		ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
	}
	
	window.addEventListener("keydown", my_keydown)
	function my_keydown(e)
	{
		keyPressed = e.keyCode;
		console.log(keyPressed);
	
		if (keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if (keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if (keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if (keyPressed == '40')
		{
			down();
			console.log("down");
		}
	}
	
	function left()
	{
		if (rover_x >= 0)
		{
			rover_x = rover_x - 10;
			console.log("When Left Is Pressed, x = " + rover_x + "| y = " + rover_y);
			uploadBackground();
			uploadRover();
		}
	}
	function right()
	{
		if (rover_x <= 700)
		{
			rover_x = rover_x + 10;
			console.log("When Right Is Pressed, x = " + rover_x + "| y = " + rover_y);
			uploadBackground();
			uploadRover();
		}
	}
	function up()
	{
		if (rover_y >= 0)
		{
			rover_y = rover_y - 10;
			console.log("When Up Is Pressed, x = " + rover_x + "| y = " + rover_y);
			uploadBackground();
			uploadRover();
		}
	}
	function down()
	{
		if (rover_y <= 500)
		{
			rover_y = rover_y + 10;
			console.log("When Down Is Pressed, x = " + rover_x + "| y = " + rover_y);
			uploadBackground();
			uploadRover();
		}
	}