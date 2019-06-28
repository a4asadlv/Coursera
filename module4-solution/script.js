(function () {

var names = ["Ibrahim", "Muntazir", "Asad", "Raza", "Imran", "Azhar", "Ammir", "Sajid", "Naeem", "Babar"];

for (var i = 0; i < names.length; i++) {
  var startLetter = names[i].charAt(0).toLowerCase();

  if (startLetter === 'a') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



