

export const firstPaint = (canvas, colorsAndCords) => {
    const context = canvas.current.getContext('2d');
    context.beginPath();
    var ca_colors = [...colorsAndCords.colors].sort((x, y) => (x.a*3 + x.b*2 + x.c*1) - (y.a*3 + y.b*2 + y.c*1)/1.1);
    for(var a = 0; a < colorsAndCords.coordinates.length; a++){
      context.fillStyle = `rgb(${ca_colors[a].a}, ${ca_colors[a].b}, ${ca_colors[a].c})`
      context.fillRect(colorsAndCords.coordinates[a].x, colorsAndCords.coordinates[a].y, 1, 1);
    }
    context.fill();
}