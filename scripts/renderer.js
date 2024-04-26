class Renderer{
    constructor(scale){
        this.cols = 64;
        this.rows = 32;
        this.screenSize = this.cols * this.rows;

        this.scale = scale;

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;

        this.display = new Array(this.screenSize)
    }

    setPixel(x,y){

        if(x > this.cols){
            x -= this.cols;
        } else if(x < 0){
            x += this.cols;
        }

        if(y > this.rows){
            y -= this.rows;
        } else if(y < 0){
            y += this.rows;
        }

        let pixelLoc = x + (y * this.cols);

        this.display[pixelLoc] ^= 1;

        return !this.display[pixelLoc];
    }

    clear(){
        this.display = new Array(this.screenSize);
    }

    render(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

        for(let i = 0; i < this.screenSize; i++)
        {
            let x = (i % this.cols) * this.scale;
            let y = Math.floor(i / this.cols) * this.scale;

            if(this.display[i]){
                this.ctx.fillStyle = '#000';
                this.ctx.fillRect(x,y, this.scale, this.scale);
            }
        }
    }

    testRender(){
        this.setPixel(0,0);
        this.setPixel(5,2);
    }
}

export default Renderer;