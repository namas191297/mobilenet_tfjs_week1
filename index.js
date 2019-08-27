let net;

async function app() {
  var res1 = document.getElementById('result1');
  var res2 = document.getElementById('result2');
  var res3 = document.getElementById('result3');

  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);

  res1.innerHTML = "1. " + result[0].className + " predicted! With a probability of:" + result[0].probability;
  res2.innerHTML = "2. " + result[1].className + " predicted! With a probability of:" + result[1].probability;
  res3.innerHTML = "3. " + result[2].className + " predicted! With a probability of:" + result[2].probability;

  alert("Prediction successful!");

}
var loadFile = function(event) {
    var img = document.getElementById('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 227;
    img.height = 227;
  };