function rgb(r, g, b) {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

function convertToHex(value) {
  let res = "";
  let iter = 0;
  if (value <= 0) return "00";
  if (value >= 255) return "FF";

  while (true) {
    let temp = parseInt(value / 16);
    if (!temp && iter) {
      res +=
        "" + (value % 16) > 9
          ? String.fromCharCode(65 + (value % 16) - 10)
          : value % 16;
      break;
    }

    if (temp > 9) temp = String.fromCharCode(65 + (temp - 10));

    res += temp;
    value = value % 16;
    iter++;
  }
  return res;
}
