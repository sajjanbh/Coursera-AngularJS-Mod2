(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;

  // Fetches items to be bought from service and presents to Front-end
  buyer.items = ShoppingListCheckOffService.getToBuyItems();

  // Buys item. Triggered on clicking Bought button and calls corresponding function in service
  buyer.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  // Fetches bought items from service and presents to Front-end
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // Initializing to-buy list with example items
  var to_buy_items = [
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Cookies",
      quantity: "10"
    },
    {
      name: "Chips",
      quantity: "5"
    },
    {
      name: "Biscuits",
      quantity: "4"
    },
    {
      name: "Chocolate Bars",
      quantity: "15"
    },
    {
      name: "Candy",
      quantity: "20"
    }
  ];

  // Initializing empty list of bought items
  var bought_items = [];

  // service function to more item from to_buy_items array to bought_items
  // takes index of bought item as argument
  // stores associated object to bought_items array and removes same object from to_buy_items array
  service.buyItem = function (itemIndex) {
    var item = to_buy_items[itemIndex];
    to_buy_items.splice(itemIndex, 1);
    bought_items.push(item);
  };

  // returns the array of items to be bought
  service.getToBuyItems = function () {
    return to_buy_items;
  };

  // returns the bought items
  service.getBoughtItems = function () {
    return bought_items;
  }
}

})();
