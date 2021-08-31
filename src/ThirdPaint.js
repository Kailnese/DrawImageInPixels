
const sortCoord = (cord1, cord2) => {
    return cord1.x*-0.2 + cord1.y/2 - cord2.x*-0.2 - cord2.y/2;
}

export const thirdPaint = (canvas2, colorsAndCords) => {
    const context = canvas2.current.getContext('2d');
    context.beginPath();
    var ca_colors = [...colorsAndCords.colors];
    var ca_coords = [...colorsAndCords.coordinates].sort((x, y) => sortCoord(x, y));
    for(var a = 0; a < ca_coords.length; a++){
      context.fillStyle = `rgb(${ca_colors[a].a}, ${ca_colors[a].b}, ${ca_colors[a].c})`
      context.fillRect(ca_coords[a].x, ca_coords[a].y, 1, 1);
    }
    context.fill();
}