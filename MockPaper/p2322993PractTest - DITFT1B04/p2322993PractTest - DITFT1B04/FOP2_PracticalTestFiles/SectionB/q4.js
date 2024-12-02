/* 
    Section B
    Question 1
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/

/*************************************************************/
// Function shopcart()
/*************************************************************/

function shopCart() {
  const items = [];

  return {
    push(item, Qty) {
      /* TODO: Add code here. */
      items.push(item, Qty);
    },
    getAllItems() {
      /* TODO: Add code here. */
      return items;
    },
    getItem(index) {
      /* TODO: Add code here. */
      return items[index];
    },
    removeItem(index) {
      /* TODO: Add code here. */
      items.splice(index, 1);
    },
    totalAmt() {
      /* TODO: Add code here. */
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        //   console.log(typeof items[i].Price);
        total += items[i].Price;
      }
      return total;
    },
    getQty() {
      /* TODO: Add code here. */

      return items.Qty;
    },

    getNoofItem() {
      /* TODO: Add code here. */
      return items.length;
    },

    getItemFilterByBrand(brand) {
      /* TODO: Add code here. */
      // return items.(brand);
    },

    getUniqueBrand() {
      /* TODO: Add code here. */
      return items.ModelName;
    },

    getCountUniqueBrand() {
      /* TODO: Add code here. */
    },

    sortByPriceLowestToHighest() {
      /* TODO: Add code here. */
      return items.sort((a, b) => {
        a - b;
      });
    },
  };
}

/* Sample Usage of shopCart() */

const cart = shopCart();

// Function : push(item, Qty)
cart.push(
  {
    Brand: "APPLE",
    Title: "APPLE iPhone 15 (Green, 128 GB)",
    ModelName: "iPhone 15",
    Price: 1278,
  },
  1
);
cart.push(
  {
    Brand: "APPLE",
    Title: "APPLE iPhone 15 Plus (Blue, 128 GB)",
    ModelName: "iPhone 15 Plus",
    Price: 1438,
  },
  2
);
cart.push(
  {
    Brand: "SAMSUNG",
    Title: "SAMSUNG Galaxy A34 5G (Awesome Violet, 256 GB)",
    ModelName: "Galaxy A34 5G",
    Price: 496,
  },
  3
);
cart.push(
  {
    Brand: "SAMSUNG",
    Title: "SAMSUNG Galaxy A34 5G (Awesome Violet, 128 GB)",
    ModelName: "Galaxy A34 5G",
    Price: 464,
  },
  1
);
cart.push(
  {
    Brand: "VIVO",
    Title: "Vivo T2x 5G (Aurora Gold, 128 GB)",
    ModelName: "T2x 5G",
    Price: 399,
  },
  2
);
cart.push(
  {
    Brand: "OPPO",
    Title: "OPPO Reno10 5G (Ice Blue, 256 GB)",
    ModelName: "Reno10 5G",
    Price: 679,
  },
  1
);

// Function : getItem(index)
console.log("Get item 0 using getItem(0)");
console.log(cart.getItem(0));

// Function : removeItem(index)
cart.removeItem(0);
console.log("Get item 0 using getItem(0) after removeItem(0)");
console.log(cart.getItem(0));

// Function : getAllItems()
console.log("Display all items in cart");
console.log(cart.getAllItems());

// Function : totalAmt()
console.log("Total Amount : " + cart.totalAmt());
// Function : getQty()
console.log("Total Quantity : " + cart.getQty());
// Function : getNoofItem()
console.log("Total Number of Item : " + cart.getNoofItem());

// Function : getItemFilterByBrand(brand)
console.log("Array filter by Brand - SAMSUNG");
console.log(cart.getItemFilterByBrand("SAMSUNG"));

// Function : getUniqueBrand()
console.log("Unique brand in items[] array");
console.log(cart.getUniqueBrand());
// Function : getCountUniqueBrand()
console.log("Number of Unique brand in items[] array");
console.log(cart.getCountUniqueBrand());

// Function : sortByPriceLowestToHighest()
cart.sortByPriceLowestToHighest();

console.log("Display all items in cart sorted by Lowest to Highest");
console.log(cart.getAllItems());
/* End of Sample Usage for shopCart() */
