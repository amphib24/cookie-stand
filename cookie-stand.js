'use strict';

var hoursOpen =  ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
var allShops = [];
var tableMf = document.getElementById('SalmonCookiejs');
var allCookiesEver = 0;
var hourlyCookieSales = 0;


function Store (locationName ,minCustHr, maxCustHr, avgCookiesCust){
 this.locationName = locationName;
 this.minCustHr = minCustHr;
 this.maxCustHr = maxCustHr;
 this.avgCookiesCust = avgCookiesCust;
 this.custHr = [];
 this.cookiesHr = [];
 this.totalCookieSales = 0;

 allShops.push(this);
 this.randomCustHr = function() {
  for( var i = 0; i < hoursOpen.length; i++) {
    var  min = Math.ceil(this.minCustHr);
    var max = Math.floor(this.maxCustHr);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    this.custHr.push(result);
  }
};

this.cookiesSold = function() {
  this.randomCustHr();
 for(var i = 0; i < hoursOpen.length; i++){
   this.cookiesHr.push(Math.ceil(this.custHr[i] * this.avgCookiesCust));
   this.totalCookieSales += this.cookiesHr[i];
   console.log(this.totalCookieSales);
}
}
this.render = function() {
  this.cookiesSold();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hoursOpen.length;i++){

    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesHr[i];
    trEl.appendChild(tdEl);

  }
   tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookieSales;
  trEl.appendChild(tdEl);

  tableMf.appendChild(trEl);


}
};


new Store ('First and Pike', 23, 65, 6.3);
new Store ('Seatac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);





function headerRow () {

 var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
      thEl.textContent = ('    ');
      trEl.appendChild(thEl);

   for (var i = 0; i < hoursOpen.length; i++){
     var thEl1 = document.createElement('th');
     thEl1.textContent = hoursOpen[i];
     trEl.appendChild(thEl1);
   }
  thEl = document.createElement('th');
   thEl.textContent = ('Total');
   trEl.appendChild(thEl);
   tableMf.appendChild(trEl);
 };

 function storeRows () {
   var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
        thEl.textContent = ('    ');
        trEl.appendChild(thEl);

   for (var i = 0; i < allShops.length; i++) {
     var thEl1 = document.createElement('th');

     thEl1.textContent = allShops[i].render();
     trEl.appendChild(thEl);
     tableMf.appendChild(trEl);

   }
 }
 function footerRows () {

   var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
        tdEl.textContent = ('store totals');
        trEl.appendChild(tdEl);


    for(var i = 0; i < hoursOpen.length; i++){

      var t = 0;

   for (var j = 0; j < allShops.length; j++){
          t += allShops[j].cookiesHr[i];
  }
  var tdEl1 = document.createElement('td');
  tdEl1.textContent = t;
  trEl.appendChild(tdEl1)
console.log(t, 'here');
}
var endTotal = 0;
for(var i = 0; i < allShops.length; i++){
  endTotal += allShops[i].totalCookieSales;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = endTotal;
  trEl.appendChild(tdEl);
  
tableMf.appendChild(trEl);

//////////////////
// allCookiesEver = allCookiesEver + hoursOpen[i].totalCookieSales;
// tdEl1.textContent = allCookiesEver;
// console.log(allCookiesEver);
//   trEl.appendChild(tdEl1);
/////////////////
          // for (var j = 0; j < allShops.length; j++) {
          //
          //   var tdEl2 = document.createElement('td')
          //
          //   hourlyCookieSales = allShops[j] * cookiesHr[j];
          //   tdEl2.textContent = hourlyCookieSales;
          //   console.log(hourlyCookieSales, 'here');
          //   trEl.appendChild(tdEl2);
          // //
          // }


  }


headerRow();
storeRows();
footerRows();








// var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// var firstAndPike = {
//   locationName: 'First and Pike',
//   minCustHr: 23,
//   maxCustHr: 65,
//   avgCookiesCust: 6.3,
//   custHr: [],
//   cookiesHr: [],
//   totalCookieSales: 0,
//
//   randomCustHr : function() {
//    for( var i = 0; i < hoursOpen.length; i++) {
//      var  min = Math.ceil(this.minCustHr);
//      var max = Math.floor(this.maxCustHr);
//      var result = Math.floor(Math.random() * (max - min + 1)) + min;
//      this.custHr.push(result);
//    }
// },
//
//  cookiesSold : function() {
//    this.randomCustHr();
//   for(var i = 0; i < hoursOpen.length; i++){
//     this.cookiesHr.push(Math.ceil(this.custHr[i] * this.avgCookiesCust));
//     this.totalCookieSales += this.cookiesHr[i];
// }
// },
//  render: function () {
//    this.cookiesSold();
//    var firstAndPikeUl = document.getElementById('firstandpikelist');
//    for (var i = 0; i <  hoursOpen.length; i++){
//      var liEl = document.createElement('li');
//      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesHr[i] + ' cookies';
//      firstAndPikeUl.appendChild(liEl);
//    }
//    liEl = document.createElement('li');
//    liEl.textContent = 'Total:' + this.totalCookieSales + 'cookies';
//    firstAndPikeUl.appendChild(liEl);
//  }
// }
// firstAndPike.render();

//  firstAndPike.randomCustHr();
//  firstAndPike.cookiesSold();
//
// var total = 0;
// var theList = document.getElementById('first and pike list');
//
// for ( var i = 0; i < hoursOpen.length; i ++) {
//    var liEl = document.createElement('li');
//    var currentHr = hoursOpen[i];
//    var totalCkiesSold = firstAndPike.cookiesHr[i];
//    total += totalCkiesSold;
//    var message = currentHr + ' : ' + totalCkiesSold;
//
//    liEl.textContent = message;
//    theList.appendChild(liEl);
//  }
//  var finalCount = document.createElement('li');
//  finalCount.textContent = ' Total: ' + total;
//  theList.appendChild(finalCount);


 ////.////////////////////

//  var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//  var seatacAirport = {
//    minCustHr : 3,
//    maxCustHr : 24,
//    avgCookiesCust : 1.2,
//    custHr : [],
//    cookiesHr : [],
//
//    randomCustHr : function() {
//     for( var i = 0; i < hoursOpen.length; i++) {
//       var  min = Math.ceil(this.minCustHr);
//       var max = Math.floor(this.maxCustHr);
//       var result = Math.floor(Math.random() * (max - min + 1)) + min;
//       this.custHr.push(result);
//     }
//  },
//
//   cookiesSold : function() {
//    for(var i = 0; i < hoursOpen.length; i++){
//      var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
//      this.cookiesHr.push(result2);
//    }
//  }
//  }
//
//   seatacAirport.randomCustHr();
//   seatacAirport.cookiesSold();
//
//  var total = 0;
//  var theList = document.getElementById('Seatac Airport List');
//
//  for ( var i = 0; i < hoursOpen.length; i ++) {
//     var liEl = document.createElement('li');
//     var currentHr = hoursOpen[i];
//     var totalCkiesSold = seatacAirport.cookiesHr[i];
//     total += totalCkiesSold;
//     var message = currentHr + ' : ' + totalCkiesSold;
//
//     liEl.textContent = message;
//     theList.appendChild(liEl);
//   }
//   var finalCount = document.createElement('li');
//   finalCount.textContent = ' Total: ' + total;
//   theList.appendChild(finalCount);
//
//
//
//   /////////
//
//   var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//   var seattleCenter = {
//     minCustHr : 11,
//     maxCustHr : 38,
//     avgCookiesCust : 3.7,
//     custHr : [],
//     cookiesHr : [],
//
//     randomCustHr : function() {
//      for( var i = 0; i < hoursOpen.length; i++) {
//        var  min = Math.ceil(this.minCustHr);
//        var max = Math.floor(this.maxCustHr);
//        var result = Math.floor(Math.random() * (max - min + 1)) + min;
//        this.custHr.push(result);
//      }
//   },
//
//    cookiesSold : function() {
//     for(var i = 0; i < hoursOpen.length; i++){
//       var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
//       this.cookiesHr.push(result2);
//     }
//   }
//   }
//
//    seattleCenter.randomCustHr();
//    seattleCenter.cookiesSold();
//
//   var total = 0;
//   var theList = document.getElementById('Seattle Center List');
//
//   for ( var i = 0; i < hoursOpen.length; i ++) {
//      var liEl = document.createElement('li');
//      var currentHr = hoursOpen[i];
//      var totalCkiesSold = seattleCenter.cookiesHr[i];
//      total += totalCkiesSold;
//      var message = currentHr + ' : ' + totalCkiesSold;
//
//      liEl.textContent = message;
//      theList.appendChild(liEl);
//    }
//    var finalCount = document.createElement('li');
//    finalCount.textContent = ' Total: ' + total;
//    theList.appendChild(finalCount);
//
//
//    /////////
//
//    var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//    var capitolHill = {
//      minCustHr : 20,
//      maxCustHr : 38,
//      avgCookiesCust : 2.3,
//      custHr : [],
//      cookiesHr : [],
//
//      randomCustHr : function() {
//       for( var i = 0; i < hoursOpen.length; i++) {
//         var  min = Math.ceil(this.minCustHr);
//         var max = Math.floor(this.maxCustHr);
//         var result = Math.floor(Math.random() * (max - min + 1)) + min;
//         this.custHr.push(result);
//       }
//    },
//
//     cookiesSold : function() {
//      for(var i = 0; i < hoursOpen.length; i++){
//        var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
//        this.cookiesHr.push(result2);
//      }
//    }
//    }
//
//     capitolHill.randomCustHr();
//     capitolHill.cookiesSold();
//
//    var total = 0;
//    var theList = document.getElementById('Capitol Hill List');
//
//    for ( var i = 0; i < hoursOpen.length; i ++) {
//       var liEl = document.createElement('li');
//       var currentHr = hoursOpen[i];
//       var totalCkiesSold = capitolHill.cookiesHr[i];
//       total += totalCkiesSold;
//       var message = currentHr + ' : ' + totalCkiesSold;
//
//       liEl.textContent = message;
//       theList.appendChild(liEl);
//     }
//     var finalCount = document.createElement('li');
//     finalCount.textContent = ' Total: ' + total;
//     theList.appendChild(finalCount);
//
//
// ///////////
//
//
// var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// var alki = {
//   minCustHr : 2,
//   maxCustHr : 16,
//   avgCookiesCust : 4.6,
//   custHr : [],
//   cookiesHr : [],
//
//   randomCustHr : function() {
//    for( var i = 0; i < hoursOpen.length; i++) {
//      var  min = Math.ceil(this.minCustHr);
//      var max = Math.floor(this.maxCustHr);
//      var result = Math.floor(Math.random() * (max - min + 1)) + min;
//      this.custHr.push(result);
//    }
// },
//
//  cookiesSold : function() {
//   for(var i = 0; i < hoursOpen.length; i++){
//     var result2 = Math.round(this.custHr[i] * this.avgCookiesCust);
//     this.cookiesHr.push(result2);
//   }
// }
// }
//
//  alki.randomCustHr();
//  alki.cookiesSold();
//
// var total = 0;
// var theList = document.getElementById('Alki List');
//
// for ( var i = 0; i < hoursOpen.length; i ++) {
//    var liEl = document.createElement('li');
//    var currentHr = hoursOpen[i];
//    var totalCkiesSold = alki.cookiesHr[i];
//    total += totalCkiesSold;
//    var message = currentHr + ' : ' + totalCkiesSold;
//
//    liEl.textContent = message;
//    theList.appendChild(liEl);
//  }
//  var finalCount = document.createElement('li');
//  finalCount.textContent = ' Total: ' + total;
//  theList.appendChild(finalCount);
