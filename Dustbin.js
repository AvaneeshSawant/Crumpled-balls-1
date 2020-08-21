class dustbin{
    constructor(x, y, width, height) {
        var options = {
            isStatic: 'false'
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height
    }

    display() {
        var pos = this.body.position

        rectMode(CENTER);
        rect(pos.x, pos.y, pos.width, pos.height);
    }
}