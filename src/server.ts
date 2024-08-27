interface Point {
  x: number;
  y: number;
};

interface Figure {
  render(): void;
}

class Triangle implements Figure {
  
  constructor(
    public a: Point,
    public b: Point,
    public c: Point,
  ){}

  render(): void {
    console.log('Triangle', this.a, this.b, this.c);
  }
}

// Construcción de los tres triángulos
const t1 = new Triangle(
  { x: 0, y: 0 }, 
  { x: 1, y: 0 }, 
  { x: 0, y: 1 }
);

const t2 = new Triangle(
  { x: 2, y: 2 }, 
  { x: 3, y: 2 }, 
  { x: 2, y: 3 }
);

const t3 = new Triangle(
  { x: -1, y: -1 }, 
  { x: 0, y: -1 }, 
  { x: -1, y: 0 }
);

[t1, t2, t3].forEach(t => t.render());
