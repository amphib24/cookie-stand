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

  }
headerRow();
storeRows();
footerRows();

/////////////////////////
var table = document.getElementById('SalmonCookiejs')
var storeForm = document.getElementById('store-form');


//////////////////
/*event handler*/
function handleCommentSubmit(event) {
  event.preventDefault();
  if(!event.target.locationName.value || ! event.target.minCustHr.value || !event.target.maxCustHr.value || ! event.target.totalCookieSales.value);

 var locationName = event.target.locationName.value;
 var minCustHr = event.target.minCustHr.value;
 var maxCustHr = event.target.maxCustHr.value;
 var totalCookieSales = event.target.totalCookieSales;


}
/*event listner*/
storeForm.addEventListener('submit', handleCommentSubmit);
