const productTitle = document.querySelector(".product-title");
const productImage = document.querySelector(".product-image");
const productPrice = document.querySelector(".product-price");
const productDiscription = document.querySelector(".product-discription");
const productRating = document.querySelector(".product-rating");
const productBuyer = document.querySelector(".product-buyer");
const productContainer = document.querySelector(".product-container");
const fetchData = document.querySelector(".fetch-data");
const electronicBtn = document.querySelector(".electronics-product");
const mensFashionBtn = document.querySelector(".mens-product");
const femaleFashionBtn = document.querySelector(".female-product");
const jeweleryBtn = document.querySelector(".jewelery-product");
const allProductBtn = document.querySelector(".all-product");

$(document).ready(function () {
  $("select").selectize({
    sortField: "text",
  });
});

const url = "https://fakestoreapi.com/products";

//fetch All Products

const fetchPost = async () => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    //display Data

    const result = data.map((post) => {
      return `
        <div class="card m-2 shadow shadow-lg" style="width: 80%;">
        <img src="${post.image}"style="width: 150px;height:150px;margin-left:130px" class="card-img-top mt-2 product-image" alt="${post.title}" />
        <div class="card-body">
          <h5 class="card-title product-title">${post.title}</h5>
          <h6>Product Discription :</h6>
          <p class="card-text product-discription" style="width: 100%; height:100px; overflow:scroll;">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">Price :  $${post.price}</li>
          <li class="list-group-item product-rating">Rating : ${post.rating.rate} ⭐</li>
          <li class="list-group-item product-buyer">Number Of Ratings : ${post.rating.count} 🧑‍🤝‍🧑</li>
        </ul>
        <div class="card-body">
          <button class="card-link btn btn-primary">Add To Cart</button>
          <button class="card-link btn btn-success">Buy Now 😊</button>
        </div>
      </div> `;
    });
    productContainer.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};

//fetch mens Fashion products

const mensPost = async () => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    //display Data

    const result = data.map((post) => {
      if (post.category === "men's clothing") {
        return `
        <div class="card m-2 shadow shadow-lg" style="width: 80%;">
        <img src="${post.image}"style="width: 150px;height:150px;margin-left:130px" class="card-img-top mt-2 product-image" alt="${post.title}" />
        <div class="card-body">
          <h5 class="card-title product-title">${post.title}</h5>
          <h6>Product Discription :</h6>
          <p class="card-text product-discription" style="width: 100%; height:100px; overflow:scroll;">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">Price :  $${post.price}</li>
          <li class="list-group-item product-rating">Rating : ${post.rating.rate} ⭐</li>
          <li class="list-group-item product-buyer">Number Of Ratings : ${post.rating.count} 🧑‍🤝‍🧑</li>
        </ul>
        <div class="card-body">
          <button class="card-link btn btn-primary">Add To Cart</button>
          <button class="card-link btn btn-success">Buy Now 😊</button>
        </div>
      </div> `;
      }
    });
    productContainer.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};

//fetch female Fashion products

const femalePost = async () => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    //display Data

    const result = data.map((post) => {
      if (post.category === "women's clothing") {
        return `
        <div class="card m-2 shadow shadow-lg" style="width: 80%;">
        <img src="${post.image}"style="width: 150px;height:150px;margin-left:130px" class="card-img-top mt-2 product-image" alt="${post.title}" />
        <div class="card-body">
          <h5 class="card-title product-title">${post.title}</h5>
          <h6>Product Discription :</h6>
          <p class="card-text product-discription" style="width: 100%; height:100px; overflow:scroll;">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">Price :  $${post.price}</li>
          <li class="list-group-item product-rating">Rating : ${post.rating.rate} ⭐</li>
          <li class="list-group-item product-buyer">Number Of Ratings : ${post.rating.count} 🧑‍🤝‍🧑</li>
        </ul>
        <div class="card-body">
          <button class="card-link btn btn-primary">Add To Cart</button>
          <button class="card-link btn btn-success">Buy Now 😊</button>
        </div>
      </div> `;
      }
    });
    productContainer.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};

//fetch electronics Fashion products

const electronicPost = async () => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    //display Data

    const result = data.map((post) => {
      if (post.category === "electronics") {
        return `
        <div class="card m-2 shadow shadow-lg" style="width: 80%;">
        <img src="${post.image}"style="width: 150px;height:150px;margin-left:130px" class="card-img-top mt-2 product-image" alt="${post.title}" />
        <div class="card-body">
          <h5 class="card-title product-title">${post.title}</h5>
          <h6>Product Discription :</h6>
          <p class="card-text product-discription" style="width: 100%; height:100px; overflow:scroll;">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">Price :  $${post.price}</li>
          <li class="list-group-item product-rating">Rating : ${post.rating.rate} ⭐</li>
          <li class="list-group-item product-buyer">Number Of Ratings : ${post.rating.count} 🧑‍🤝‍🧑</li>
        </ul>
        <div class="card-body">
          <button class="card-link btn btn-primary">Add To Cart</button>
          <button class="card-link btn btn-success">Buy Now 😊</button>
        </div>
      </div> `;
      }
    });
    productContainer.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};

//fetch jewelery Fashion products

const jeweleryPost = async () => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    //display Data

    const result = data.map((post) => {
      if (post.category === "jewelery") {
        return `
        <div class="card m-2 shadow shadow-lg" style="width: 80%;">
        <img src="${post.image}"style="width: 150px;height:150px;margin-left:130px" class="card-img-top mt-2 product-image" alt="${post.title}" />
        <div class="card-body">
          <h5 class="card-title product-title">${post.title}</h5>
          <h6>Product Discription :</h6>
          <p class="card-text product-discription" style="width: 100%; height:100px; overflow:scroll;">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">Price :  $${post.price}</li>
          <li class="list-group-item product-rating">Rating : ${post.rating.rate} ⭐</li>
          <li class="list-group-item product-buyer">Number Of Ratings : ${post.rating.count} 🧑‍🤝‍🧑</li>
        </ul>
        <div class="card-body">
          <button class="card-link btn btn-primary">Add To Cart</button>
          <button class="card-link btn btn-success">Buy Now 😊</button>
        </div>
      </div> `;
      }
    });
    productContainer.innerHTML = result.join("");
  } catch (error) {
    console.log(error);
  }
};

//All buttons
document.addEventListener("DOMContentLoaded", fetchPost);
allProductBtn.addEventListener("click", fetchPost);
mensFashionBtn.addEventListener("click", mensPost);
femaleFashionBtn.addEventListener("click", femalePost);
electronicBtn.addEventListener("click", electronicPost);
jeweleryBtn.addEventListener("click", jeweleryPost);
