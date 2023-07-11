// Task 3

let dot_x_a = 0;
let dot_y_a = 0;
let dot_z_a = 0;

const dot_x_b = Math.floor(Math.random() * 10);
const dot_y_b = Math.floor(Math.random() * 10);
const dot_z_b = Math.floor(Math.random() * 10);

console.log("dot А:", dot_x_a, dot_y_a, dot_z_a);
console.log("dot B:", dot_x_b, dot_y_b, dot_z_b);

let distance_final

function f_distance_final(x, y, z) {
  distance_final = Math.sqrt((Math.pow((dot_x_a - dot_x_b), 2) + Math.pow((dot_y_a - dot_y_b), 2) + Math.pow((dot_z_a - dot_z_b), 2)));
  console.log("dots: ", x, y, z, "distance: ", distance_final.toFixed(3));
}

f_distance_final(dot_x_a, dot_y_a, dot_z_a)

const distance_initial = distance_final;
console.log("initial distance: ", distance_initial.toFixed(3), "final distance: ", distance_final.toFixed(3));

function plus_x() {
  dot_x_a = dot_x_a + 1;
}
function plus_y() {
  dot_y_a = dot_y_a + 1;
}
function plus_z() {
  dot_z_a = dot_z_a + 1;
}
function minus_x() {
  dot_x_a = dot_x_a - 1;
}
function minus_y() {
  dot_y_a = dot_y_a - 1;
}
function minus_z() {
  dot_z_a = dot_z_a - 1;
}

if (distance_final != 0) {

  for (let x = 0, d0 = distance_final + 1; x < 10; x++) {
    
    if (distance_final != 0 && d0 > distance_final ) {
      d0 = distance_final;
      console.log("step x: ", x, "past distance: ", d0.toFixed(3));
      
      plus_x();
      f_distance_final(dot_x_a, dot_y_a, dot_z_a)
      
    }
  }

  minus_x();
  f_distance_final(dot_x_a, dot_y_a, dot_z_a);

  for (let y = 0, d0 = distance_final; y < 10; y++) {
    
    if (distance_final != 0 && d0 >= distance_final) {
      d0 = distance_final;
      console.log("step y: ", y, "past distance: ", d0.toFixed(3));

      plus_y();
      f_distance_final(dot_x_a, dot_y_a, dot_z_a)
    }
  }

  minus_y();
  f_distance_final(dot_x_a, dot_y_a, dot_z_a);

  for (let z = 0, d0 = distance_final; z < 10; z++) {

    if (distance_final != 0 && d0 >= distance_final ) {
      d0 = distance_final;
      console.log("step z: ", z, "past distance: ", d0.toFixed(3));

      plus_z();
      f_distance_final(dot_x_a, dot_y_a, dot_z_a);
    }
  }

  f_distance_final(dot_x_a, dot_y_a, dot_z_a);

}

console.log("dot B:", dot_x_b, dot_y_b, dot_z_b);
