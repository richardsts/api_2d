

export interface Renderer {

    setup(): void;
    draw(): void;
    createCanvas(width: number, height: number): void;
    background(color: number | string): void;
    rect(x: number, y: number, width: number, height: number): void;
    circle(x: number, y: number, radius: number): void;
    fill(color: number | string): void;
    stroke(color: number | string): void;
    noFill(): void;
    noStroke(): void;
    vertex(x: number, y: number);
    beginPath(): void;
    closePath(): void;

}