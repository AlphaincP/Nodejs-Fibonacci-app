exports.fibonacci = function(number){
  var fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  fibo[2] = 1;

  for(var i = 3;i <= number;i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo[number];
}
