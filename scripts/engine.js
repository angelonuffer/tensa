var GameObject = function(position, speed, mass, image) {
	this.position = position;
	this.speed = speed;
	this.mass = mass;
	this.image = image;
	this.interactWith = function(other) {
		var dx = Math.abs(this.position[0] - other.position[0]);
		var dy = Math.abs(this.position[1] - other.position[1]);
		var d = Math.sqrt(dx * dx + dy * dy);
		this.speed[0] -= G * other.mass * (this.position[0] - other.position[0]) / (d * d * d)
		this.speed[1] -= G * other.mass * (this.position[1] - other.position[1]) / (d * d * d)
		this.position[0] += this.speed[0];
		this.position[1] += this.speed[1];
		console.log(this.speed);
	};
}
