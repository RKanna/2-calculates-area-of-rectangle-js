function areaCalcRectangle() {
  var areaLength = parseInt(document.getElementById(`rectangleLength`).value);
  var areaWidth = parseInt(document.getElementById(`rectangleWidth`).value);
  var entireArea = areaLength * areaWidth;
  document.getElementById(`result`).textContent =
    `Result is` + " " + entireArea;
}
