const Category = async () => {
    const loadCategory = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const CategoryList = await loadCategory.json();
    const categoryContainer = document.getElementById('tabContainer')
    const categorylist = document.createElement('div')
    CategoryList.data.news_category.forEach((Category) => {
        const div = document.createElement('div');
        div.innerHTML = 
        `
        <a onclick ="getcategoryId('${Category.category_id}')" class="tab text-2xl font-bold">${Category.category_name}</a>
        
        `
        categoryContainer.appendChild(div);
    });
}



const getcategoryId = async (categoryId) => {
     const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
       const data = await response.json();
      console.log(data)
      cardContainer.innerHTML = '';

      data.data.forEach((card) => {
        console.log(card);
       const CreatCard = document.createElement('div')
       CreatCard.innerHTML = `
       <div class="card bg-base-100 h-[600px] shadow-xl">
         <figure>
           <img
             src="${card.image_url}"
           />
         </figure>
         <div class="card-body">
           <h2 class="card-title">
           ${card.title.slice(0,60)}
           
             <div class="badge badge-secondary p-5">${card.rating.badge}</div>
           </h2>
           <p>
           ${card.details.slice(0,110)}
           </p>
           <h3> Total Views: ${card.total_view  }</h3>
           <div class="card-footer flex justify-between mt-8">
             <div class="flex">
               <div>
                 <div class="avatar online">
                   <div class="w-14 rounded-full">
                     <img
                       src="${card.author.img}"
                     />
                   </div>
                 </div>
               </div>
               <div>
                 <h6>${card.author.name}</h6>
                 <small>${card.author.published_date}</small>
               </div>
             </div>
             <div class="card-detaild-btn">
               <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                 Details
               </button>
             </div>
           </div>
         </div>
       </div>
       `
       cardContainer.appendChild(CreatCard);


   })
}










Category();
getcategoryId("01")