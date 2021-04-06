canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 210;
car_height = 100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://lpc.opengameart.org/sites/default/files/simple-travel-car-top_view.svg";
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
rover_x = 10;
rover_y = 10;
rove_x = 10;
rove_y = 120;
rover_width = 100;
rover_height = 90;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image 
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable 
    background_imgTag.src = background_image; // load image
    car1_imgTag = new Image(); //defining a variable with a new image 
    car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable 
    car1_imgTag.src = car1_image; // load image 
    car2_imgTag = new Image(); //defining a variable with a new image 
    car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable 
    car2_imgTag.src = car2_image; // load image 
} 
function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 
function uploadcar1() { 
    ctx.drawImage(car1_imgTag, rover_x, rover_y, car_width, car_height); 
} 
function uploadcar2() { 
    ctx.drawImage(car2_imgTag, rove_x, rove_y, car_width, car_height); 
} 
function uploadrover() { 
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
} 

window.addEventListener("keydown", my_keydown); 
function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    