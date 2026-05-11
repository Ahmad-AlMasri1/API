AOS.init();

const cat= new URLSearchParams(location.search).get("cat");

let skip = 0;

let sort = 'ta';

async function getProducts(){
    const response= await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    return response.data.products ;
}

async function getTotal(){

    const response= (cat == 'all' ? await axios.get(`https://dummyjson.com/products`) : await axios.get(`https://dummyjson.com/products/category/${cat}`));

    return response.data.total ;
}

async function Products(){

    const response= await axios.get(`https://dummyjson.com/products/category/${cat}`);

    return response.data.products ;
}

document.querySelector(".category").textContent=cat;


async function displayProducts(e){
    
    const products = (cat == 'all' ? await getProducts() : await Products());

    sort = e;

    if(e=='pa'){
        products.sort((a,b) => b.price - a.price);
    }else if(e=='pd'){
        products.sort((a,b) => a.price - b.price);
    }else if(e=='ta'){
        products.sort((a,b) => a.title.localeCompare(b.title));
    }else{
        products.sort((a,b) => b.title.localeCompare(a.title));
    }
    const result = products.map((product)=>
        `
            <a class="card bg-base-100  shadow-sm swiper-slide" data-aos="fade-down" href="product.html?id=${product.id}">
                <figure class="bg_hero">
                    <img
                    src="${product.thumbnail}" class="w-65" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black font-Inter text-[14px]/[20px] font-semibold h-5 mt-2">${product.title}</h2>
                    <span class="text-[#6C7275] font-Inter text-[14px]/[22px] font-normal mt-4">${product.category}</span>
                    <span class="text-black font-Inter text-[14px]/[22px] font-semibold">$${product.price}</span>
                    <div class="card-actions justify-end">
                    <button class="btn btn-neutral mt-auto">Buy Now</button>
                    </div>
                </div>
            </a>
        `
    ).join('');



    document.querySelector(".products").innerHTML = result;
}
displayProducts('ta');

async function Prev(){

    if(skip!=0){
        skip = skip - 10;
    }

    displayProducts(sort);

}

async function Next(){

    let total = await getTotal();
    
    if(skip + 10 < total){
       skip = skip + 10;

       console.log(skip);

    }

    displayProducts(sort);
    
}