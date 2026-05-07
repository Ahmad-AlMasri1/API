AOS.init();

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    speed:900,
    
     breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
     effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
    
    autoplay: {
        delay: 1000,
    },
});


async function getProducts(){
    const response= await axios.get(`https://dummyjson.com/products?limit=10`);
    return response.data.products ;
}

async function displayProducts(){
    const products = await getProducts();
    const result = products.map((product)=>
        `
            <a class="card bg-base-100  shadow-sm swiper-slide" href="product.html?id=${product.id}">
                <figure class="bg_hero">
                    <img
                    src="${product.thumbnail}" class="w-65" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black font-Inter text-[16px]/[26px] font-semibold">${product.title}</h2>
                    <span class="text-[#6C7275] font-Inter text-[14px]/[22px] font-normal">${product.category}</span>
                    <span class="text-black font-Inter text-[14px]/[22px] font-semibold">$${product.price}</span>
                    <div class="card-actions justify-end">
                    <button class="btn btn-neutral ">Buy Now</button>
                    </div>
                </div>
            </a>
        `
    ).join('');

    document.querySelector(".swiper-wrapper").innerHTML = result;
}
displayProducts();

async function getCategories(){
    const response= await axios.get(`https://dummyjson.com/products/category-list`);
    return response.data;
}

async function displayCategories(){
    const Categories = await getCategories();
    const result = Categories.map((Category)=>
        `
            <a class="join-item btn" href='category.html?cat=${Category}'>${Category}</a>
        `
    ).join('');

    document.querySelector(".join").innerHTML = result;
}
displayCategories();
