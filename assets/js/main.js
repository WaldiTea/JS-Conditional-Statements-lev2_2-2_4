// -----lev2_2-----
let airQualityIndex = document.getElementById('air-quality-index');
let aqi = document.getElementById('aqi');
let concern = document.getElementById('concern');
let effect = document.getElementById('effect');

function checkAirQuality() {
  let check = Number(airQualityIndex.value);

  aqi.innerHTML = check;

  if(check <= 50) {
    concern.innerHTML = `
      Good
    `
    effect.innerHTML = `
      Little or no risk
    `
    document.body.style.backgroundColor = 'rgb(' + 33 + ',' + 116 + ',' + 0 + ')'
  } else if(check > 50 && check <= 100) {
    concern.innerHTML = `
      Moderate
    `
    effect.innerHTML = `
      Acceptable quality
    `
    document.body.style.backgroundColor = 'rgb(' + 250 + ',' + 208 + ',' + 0 + ')'
  } else {
    concern.innerHTML = `
      Unhealthy for sensitive groups
    `
    effect.innerHTML = `
      Generable publics not likely affected
    `
    document.body.style.backgroundColor = 'rgb(' + 247 + ',' + 152 + ',' + 0 + ')'
  }
}


// -----lev2_3-----
console.log('-----lev2_3-----');

function diff(x) {
  if(x > 27) {
    return (x - 27) * 2;
  } else;
}

console.log(diff(35));
console.log(diff(74));
console.log(diff(123));


// -----lev2_4-----
console.log('-----lev2_4-----');

function calc(y, z) {
  let summe = y + z;

  if(y === z) {
    console.log(summe * 5);
  } else {
    console.log(summe);
  }
}

calc(2, 3);
calc(5, 5);