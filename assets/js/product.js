AOS.init();

const id= new URLSearchParams(location.search).get("id");

async function getProduct(){
    const response= await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
}

let counter=0;

const Product = async()=>{
    
    const product = await getProduct();

    const result = `
        <div class="grid grid-cols-2 gap-16 max-[1280px]:grid-cols-1 items-start mt-10">
                
                 <img class="w-full" src="${product.thumbnail}" />
                        
    

                <div class="col items-start pt-4 gap-4">
                    <div class="row gap-3">
                        
                        <p class="text-black font-Inter text-[12px]/[20px] font-normal">rating : ${product.rating}</p>
                    </div> 

                    <h1 class="card-title text-black font-Poppins text-[40px]/[44px] font-medium">
                            ${product.title}
                    </h1>
                    
                    
                    <p class="text-black font-Inter text-[16px]/[26px] font-normal">${product.brand}</p>

                    <p class="text-[#6C7275] font-Inter text-[16px]/[26px] font-normal ">${product.description}</p>
                    <div class="col items-start">
                    <p class="text-black font-Inter text-[16px]/[26px] font-normal">dimensions</p>
                    <p class="text-[#6C7275] font-Inter text-[16px]/[26px] font-normal">${product.dimensions.width} X ${product.dimensions.height} X ${product.dimensions.depth}</p>
                    </div>
                    
                    <span class="text-black font-Poppins text-[28px]/[34px] font-medium">$ ${product.price}</span>

                    <div class="flex flex-col gap-4 py-6 w-full items-start border-b border-b-[#E8ECEF]">
                        <div class="flex flex-row gap-6 w-full">
                            <div class="row gap-6 rounded bg-[#F5F5F5] ">
                                <button class="btn border-none bg-[#F5F5F5]" onclick=increase()>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="1" viewBox="0 0 13 1" fill="none">
                                        <path d="M0.46875 0.46875H12.1354" stroke="#121212" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <span class="text-black font-Inter text-[16px]/[26px] font-semibold bg-[#F5F5F5]">${counter}</span>
                                <button class="btn border-none bg-[#F5F5F5]" onclick=decrease()>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77094 0.46875C6.77094 0.209867 6.56107 0 6.30219 0C6.0433 0 5.83344 0.209867 5.83344 0.46875V5.83336H0.46875C0.209867 5.83336 0 6.04323 0 6.30211C0 6.56099 0.209867 6.77086 0.46875 6.77086H5.83344V12.1354C5.83344 12.3943 6.0433 12.6042 6.30219 12.6042C6.56107 12.6042 6.77094 12.3943 6.77094 12.1354V6.77086H12.1354C12.3943 6.77086 12.6042 6.56099 12.6042 6.30211C12.6042 6.04323 12.3943 5.83336 12.1354 5.83336H6.77094V0.46875Z" fill="#121212"/>
                                    </svg>
                                </button>
                            </div> 
                            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl shadow text-[16px]/[28px] font-medium font-Inter  py-6  text-center items-center hover:bg-white/90 active:scale-90 transition-all text-nowrap border border-solid hover:border-black"><img src="./assets/image/icons/header/heart.svg" class="size-5 "/>Wishlist</button>
                        </div>
                       <button class="btn btn-neutral text-[16px]/[28px] font-medium font-Inter  py-6 text-center items-center hover:bg-black/90 active:scale-90 transition-all text-nowrap w-full">Add to cart</button>
                    </div>
                    
                    
                </div>
            </div>
    `;

    document.querySelector(".product").innerHTML=result;
    }

    Product();

function decrease(){
    counter++;
     Product();
}
function increase(){
    if(counter>0)
    counter--;
     Product();
}