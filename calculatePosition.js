module.exports = {
  calculatePosition: function(position, key) {
    console.log(key);
    switch(key) {
    case 40:
      position['y'] += 5;
    case 37:
      position['x'] -= 5;
    case 39:
      position['x'] += 5;
    case 38:
      position['y'] -= 5;
    default:
      console.log(position);
      return position;
    }
  }
}
