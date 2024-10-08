"use strict"

// header functionality //
const video = document.querySelector(".video_play");
const vidBtns = document.querySelectorAll(".vid-btn");
// play pause video
vidBtns.forEach((btns) => {
  btns.addEventListener("click", function (event) {
    const btnEvent = event.currentTarget.textContent;
    btnEvent === "play" ? video.play() : video.pause();
  });
});
// scroll event
const navbar = document.querySelector(".main_nav");
const navbar_hegiht = navbar.getBoundingClientRect().height;
const screenInitial_Height = 0;

window.addEventListener("scroll", function () {
  const scrollHeight = this.scrollY;

  if (scrollHeight > navbar_hegiht) {
    navbar.classList.add("nav_fixed");
  }
  if (scrollHeight === screenInitial_Height) {
    navbar.classList.remove("nav_fixed");
  }
});
// header functionality end //

// about tab buttons functionality
const aboutPara = [
  {
    para: "At King Burgers, our mission is to provide an outstanding dining experience that celebrates burgers. We prioritize fresh, locally sourced ingredients to create flavorful dishes that blend tradition with modern culinary techniques. Our team is committed to offering exceptional service in a welcoming, vibrant environment where guests can connect and enjoy memorable meals. Whether for a casual lunch or a special celebration, we aim to exceed expectations with every visit.",
  },
  {
    para: "At King Burgers, our vision is to become a leading destination for burger dining, recognized for our commitment to quality, innovation, and sustainability. We aim to build a lasting reputation as a restaurant that delights guests with unforgettable meals and fosters a sense of community.Through our dedication to fresh ingredients, exceptional service, and a warm, inviting atmosphere, we aspire to set new standards in the dining industry",
  },
  {
    para: "Our goal at King Burgers is to consistently deliver an exceptional dining experience by focusing on quality, service, and innovation. We aim to continually enhance our menu with fresh, locally sourced ingredients, provide outstanding hospitality, and create a welcoming environment that guests love to return to.Additionally, we seek to build strong relationships with our community and suppliers, fostering growth while maintaining sustainable practices.",
  },
];
const abtBtns = document.querySelectorAll(".abt_btns");
const abtPara = document.querySelector(".para");
window.addEventListener("DOMContentLoaded", function () {
  abtPara.textContent = aboutPara[1].para;
});

abtBtns.forEach((btns) => {
  btns.addEventListener("click", function (event) {
    const btnsTarget = event.currentTarget.textContent;
    if (btnsTarget === "mission") {
      abtPara.textContent = aboutPara[0].para;
    } else if (btnsTarget === "vision") {
      abtPara.textContent = aboutPara[1].para;
    } else if (btnsTarget === "goal") {
      abtPara.textContent = aboutPara[2].para;
    }
  });
});

// function restaurantInfo(aboutPara) {

// }
// about tab buttons functionality end //

// menu buttons,search, and grid display functionality section//
const burgerItems = [
  {
    name: "Cheese Burger",
    description: "The best cheese burger",
    price: "$ 3.00",
    img: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202302_0003-999_CheeseburgerAlt_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
  },
  {
    name: "Cheese Burger",
    description: "The best cheese burger",
    price: "$ 2.00",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cheese Burger",
    description: "The best cheese burger",
    price: "$ 4.00",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-triple-cheeseburger-april-promo:nutrition-calculator-tile?wid=822&hei=822&dpr=off",
  },
  {
    name: "Cheese Burger",
    description: "The best cheese burger",
    price: "$ 3.00",
    img: "https://theeburgerdude.com/wp-content/uploads/2023/03/WBC-Blog-01-1024x1024.jpg",
  },
  {
    name: "Veggie Burger",
    description: "The best veggie burger",
    price: "$ 5.00",
    img: "https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg",
  },
  {
    name: "Veggie Burger",
    description: "The best veggie burger",
    price: "$ 4.00",
    img: "https://www.eatingwell.com/thmb/Clm50Llj-uQGfbLUGnevTY0mzWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6683924-cab8a11ae8c24c50b48aae8ed95049e6.jpg",
  },
  {
    name: "Veggie Burger",
    description: "The best veggie burger",
    price: "$ 3.00",
    img: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
  },
  {
    name: "Turkey Burger",
    description: "The best turkey burger",
    price: "$ 6.00",
    img: "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
  },
  {
    name: "Turkey Burger",
    description: "The best turkey burger",
    price: "$ 3.00",
    img: "https://www.eatingbirdfood.com/wp-content/uploads/2022/04/cropped-turkey-burger-hero.jpg",
  },
  {
    name: "Turkey Burger",
    description: "The best turkey burger",
    price: "$ 5.00",
    img: "https://keviniscooking.com/wp-content/uploads/2022/02/Grilled-Turkey-Burgers-square.jpg",
  },
  {
    name: "Classic Burger",
    description: "The best classic burger",
    price: "$ 3.00",
    img: "https://www.eatingwell.com/thmb/UY5N-tQKYgA91XJBwiolc_1nbJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3757723-7c4020ccc47240138323b9bc5b730e8d.jpg",
  },
  {
    name: "Classic Burger",
    description: "The best classic burger",
    price: "$ 5.00",
    img: "https://www.unileverfoodsolutions.com.sg/dam/global-ufs/mcos/SEA/calcmenu/recipes/SG-recipes/vegetables-&-vegetable-dishes/%E7%BB%8F%E5%85%B8%E8%8A%9D%E5%A3%AB%E6%B1%89%E5%A0%A1/main-header.jpg",
  },
];
const gridContainer = document.querySelector(".grid_menu");
const searchItems = document.getElementById("search");

window.addEventListener("DOMContentLoaded", function () {
  menuItems(burgerItems);
  menuButtons();
});
// menu list funtion
function menuItems(items) {
  let burgerMenu = items.map((item) => {
    return `
    <div class="menu_card">
      <div class="burger_image">
       <img src=${item.img} alt="image">
     </div>                 
      <div class="description">
       <h2 class="item_heading">${item.name}</h2>
        <p class="item_para">${item.description}</p>
        <p class="price">${item.price}</p>
      </div>
    </div> 
`;
  });
  burgerMenu = burgerMenu.join("");
  gridContainer.innerHTML = burgerMenu;
}
// menu button list funtion //
const menuBtns_Container = document.querySelector(".menu-btns");

function menuButtons() {
  let btnNames = burgerItems.reduce(
    (value, items) => {
      if (!value.includes(items.name)) {
        value.push(items.name);
      }
      return value;
    },
    ["All"]
  );

  const menuBtns = btnNames
    .map((btns) => `<button class="menu_btns">${btns}</button>`)
    .join("");
  menuBtns_Container.innerHTML = menuBtns;

  // menu tab functionality
  const itemFilters = menuBtns_Container.querySelectorAll(".menu_btns");
  itemFilters.forEach((btns) => {
    btns.addEventListener("click", function (event) {
      const targetBtn = event.currentTarget.textContent;
      if (targetBtn === "All") {
        menuItems(burgerItems);
      } else if (
        targetBtn === "Cheese Burger" ||
        targetBtn === "Veggie Burger" ||
        targetBtn === "Turkey Burger" ||
        targetBtn === "Classic Burger"
      ) {
        let filterData = burgerItems.filter((items) => {
          return items.name.includes(targetBtn);
        });
        menuItems(filterData);
      }
    });
  });
}

// search functionality of menu cards

const menuSearch_Items = document.getElementById("search");

menuSearch_Items.addEventListener("keyup", function (event) {
  let targetedItem = event.target.value;
  searchItemFunction(targetedItem);
});

function searchItemFunction(search) {
  if (
    search === "Cheese Burger" ||
    search === "Veggie Burger" ||
    search === "Turkey Burger" ||
    search === "Classic Burger"
  ) {
    let searchFilter = burgerItems.filter((items) => {
      return items.name.includes(search);
    });
    menuItems(searchFilter);
  }
}

// menu card modal

// let menuCardModal = `
//    <div class="menu_card">
//       <div class="burger_image">
//        <img src=${burgerItems[0].img} alt="image">
//      </div>                 
//       <div class="description">
//        <h2 class="item_heading">${burgerItems[0].name}</h2>
//         <p class="item_para">${burgerItems[0].description}</p>
//         <p class="price">${burgerItems[0].price}</p>
//       </div>
//     </div>
// ` 
// console.log(menuCardModal);

// menu counter update functionality
const updateCounter = document.querySelectorAll(".update_counter");
let speedCounter = 50;

updateCounter.forEach((counter) => {
  let initialCount = Number(counter.innerHTML);
  const counterNumber = Number(counter.getAttribute("data-count"));
  const counterIncreement = Math.floor(counterNumber / speedCounter);

  function countIncreement() {
    initialCount = initialCount + counterIncreement;
    counter.innerHTML = initialCount;

    setTimeout(() => {
      if (initialCount < counterNumber) {
        countIncreement();
      }
    }, 50);
  }
  countIncreement();
});
// menu functionality section end//

// carousel slider functionality
