FPS = 70;
G = 2;

$(document).ready(function() {
	var step = 0;
	var moon = new GameObject([300, 300], [0, 0], 10000, "images/moon.png");
	var spaceship = new GameObject([300, 150], [10, 0], 1, "images/spaceship.png");
	var game_objects = [moon, spaceship];
	setInterval(function() {
		$("canvas#gamearea").clearCanvas();
		$(game_objects).each(function(i, object) {
			$(game_objects).each(function(i2, other) {
				if (object != other) {
					object.interactWith(other);
				};
			});
			$("canvas#gamearea").drawImage({
				source: object.image,
				x: object.position[0],
				y: object.position[1]
			});
		});
		step++;
	}, 1000 / FPS);
});
