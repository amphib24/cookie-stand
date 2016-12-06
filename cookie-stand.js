'use strict';
var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var firstAndPike = {
  minCustHr : 23,
  maxCustHr : 65,
  avgCookiesCust : 6.3,
  custHr : [],
  cookiesHr : [],

  randomCustHr : function() {
   for( var i = 0; i < hoursOpen.length; i++) {
     var  min = Math.ceil(this.minCustHr);
     var max = Math.floor(this.maxCustHr);
     var result = Math.floor(Math.random() * (max - min + 1)) + min;
     this.custHr.push(result);
   }
},

 cookiesSold : function() {
  for(var i = 0; i < hoursOpen.length; i++){
    var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
    this.cookiesHr.push(result2);
  }
}
}

 firstAndPike.randomCustHr();
 firstAndPike.cookiesSold();

var total = 0;
var theList = document.getElementById('first and pike list');

for ( var i = 0; i < hoursOpen.length; i ++) {
   var liEl = document.createElement('li');
   var currentHr = hoursOpen[i];
   var totalCkiesSold = firstAndPike.cookiesHr[i];
   total += totalCkiesSold;
   var message = currentHr + ' : ' + totalCkiesSold;

   liEl.textContent = message;
   theList.appendChild(liEl);
 }
 var finalCount = document.createElement('li');
 finalCount.textContent = ' Total: ' + total;
 theList.appendChild(finalCount);


 ////.////////////////////

 var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
 var seatacAirport = {
   minCustHr : 3,
   maxCustHr : 24,
   avgCookiesCust : 1.2,
   custHr : [],
   cookiesHr : [],

   randomCustHr : function() {
    for( var i = 0; i < hoursOpen.length; i++) {
      var  min = Math.ceil(this.minCustHr);
      var max = Math.floor(this.maxCustHr);
      var result = Math.floor(Math.random() * (max - min + 1)) + min;
      this.custHr.push(result);
    }
 },

  cookiesSold : function() {
   for(var i = 0; i < hoursOpen.length; i++){
     var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
     this.cookiesHr.push(result2);
   }
 }
 }

  seatacAirport.randomCustHr();
  seatacAirport.cookiesSold();

 var total = 0;
 var theList = document.getElementById('Seatac Airport List');

 for ( var i = 0; i < hoursOpen.length; i ++) {
    var liEl = document.createElement('li');
    var currentHr = hoursOpen[i];
    var totalCkiesSold = seatacAirport.cookiesHr[i];
    total += totalCkiesSold;
    var message = currentHr + ' : ' + totalCkiesSold;

    liEl.textContent = message;
    theList.appendChild(liEl);
  }
  var finalCount = document.createElement('li');
  finalCount.textContent = ' Total: ' + total;
  theList.appendChild(finalCount);



  /////////

  var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  var seattleCenter = {
    minCustHr : 11,
    maxCustHr : 38,
    avgCookiesCust : 3.7,
    custHr : [],
    cookiesHr : [],

    randomCustHr : function() {
     for( var i = 0; i < hoursOpen.length; i++) {
       var  min = Math.ceil(this.minCustHr);
       var max = Math.floor(this.maxCustHr);
       var result = Math.floor(Math.random() * (max - min + 1)) + min;
       this.custHr.push(result);
     }
  },

   cookiesSold : function() {
    for(var i = 0; i < hoursOpen.length; i++){
      var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
      this.cookiesHr.push(result2);
    }
  }
  }

   seattleCenter.randomCustHr();
   seattleCenter.cookiesSold();

  var total = 0;
  var theList = document.getElementById('Seattle Center List');

  for ( var i = 0; i < hoursOpen.length; i ++) {
     var liEl = document.createElement('li');
     var currentHr = hoursOpen[i];
     var totalCkiesSold = seattleCenter.cookiesHr[i];
     total += totalCkiesSold;
     var message = currentHr + ' : ' + totalCkiesSold;

     liEl.textContent = message;
     theList.appendChild(liEl);
   }
   var finalCount = document.createElement('li');
   finalCount.textContent = ' Total: ' + total;
   theList.appendChild(finalCount);


   /////////

   var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
   var capitolHill = {
     minCustHr : 20,
     maxCustHr : 38,
     avgCookiesCust : 2.3,
     custHr : [],
     cookiesHr : [],

     randomCustHr : function() {
      for( var i = 0; i < hoursOpen.length; i++) {
        var  min = Math.ceil(this.minCustHr);
        var max = Math.floor(this.maxCustHr);
        var result = Math.floor(Math.random() * (max - min + 1)) + min;
        this.custHr.push(result);
      }
   },

    cookiesSold : function() {
     for(var i = 0; i < hoursOpen.length; i++){
       var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
       this.cookiesHr.push(result2);
     }
   }
   }

    capitolHill.randomCustHr();
    capitolHill.cookiesSold();

   var total = 0;
   var theList = document.getElementById('Capitol Hill List');

   for ( var i = 0; i < hoursOpen.length; i ++) {
      var liEl = document.createElement('li');
      var currentHr = hoursOpen[i];
      var totalCkiesSold = capitolHill.cookiesHr[i];
      total += totalCkiesSold;
      var message = currentHr + ' : ' + totalCkiesSold;

      liEl.textContent = message;
      theList.appendChild(liEl);
    }
    var finalCount = document.createElement('li');
    finalCount.textContent = ' Total: ' + total;
    theList.appendChild(finalCount);


///////////


var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var alki = {
  minCustHr : 2,
  maxCustHr : 16,
  avgCookiesCust : 4.6,
  custHr : [],
  cookiesHr : [],

  randomCustHr : function() {
   for( var i = 0; i < hoursOpen.length; i++) {
     var  min = Math.ceil(this.minCustHr);
     var max = Math.floor(this.maxCustHr);
     var result = Math.floor(Math.random() * (max - min + 1)) + min;
     this.custHr.push(result);
   }
},

 cookiesSold : function() {
  for(var i = 0; i < hoursOpen.length; i++){
    var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
    this.cookiesHr.push(result2);
  }
}
}

 alki.randomCustHr();
 alki.cookiesSold();

var total = 0;
var theList = document.getElementById('Alki List');

for ( var i = 0; i < hoursOpen.length; i ++) {
   var liEl = document.createElement('li');
   var currentHr = hoursOpen[i];
   var totalCkiesSold = alki.cookiesHr[i];
   total += totalCkiesSold;
   var message = currentHr + ' : ' + totalCkiesSold;

   liEl.textContent = message;
   theList.appendChild(liEl);
 }
 var finalCount = document.createElement('li');
 finalCount.textContent = ' Total: ' + total;
 theList.appendChild(finalCount);
