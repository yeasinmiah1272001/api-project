
const category = ()=>{
       console.log('object')
       fetch("https://openapi.programming-hero.com/api/videos/categories")
       .then(res => res.json())
       .then(data => displayCategory(data?.data))
       
   }
   
   
   const displayCategory = (data)=>{
     
       const parentDiv = document.getElementById("category");
       
       data.forEach(d => {
           
     
       const newDiv = document.createElement('div');
   
       newDiv.innerHTML = `
       <button onclick="specificCategoriesData(${d?.category_id})" class="sortbtn mx-2 my-2 ">${d?.category}</button>
       `
   
       parentDiv.appendChild(newDiv)
   });
   }
   
  
   
   
   
   
   const specificCategoriesData = (data)=>{
       data = data || 1000
       const url = `https://openapi.programming-hero.com/api/videos/category/${data}`
      
       fetch(url)
       .then(res => res.json())
       .then(data => {
      
         displayAllData(data?.data)})
   
   }
   
   
   const displayAllData = (data)=>{
    
     document.getElementById('sorting').addEventListener('click',function(){
      
        
          data.sort((a, b) => {
           // Extract the numeric part from the "views" property
           const viewsA = parseInt(a.others.views);
           const viewsB = parseInt(b.others.views);
         
           // Compare and return the result for sorting
           return viewsB - viewsA;
         });
         
         const parent = document.getElementById('grid');
         parent.textContent = ''
       if(data.length > 0){
     
         data.forEach(d =>{
           const seconds =parseInt( d?.others?.posted_date);
           let hours = null;
           let minutes = null;
           let remainingSeconds = null
           if(seconds > 1){
             hours = Math.floor(seconds / 3600);
              minutes = Math.floor((seconds % 3600) / 60);
              remainingSeconds = seconds % 60;
              
           }
           
           // console.log(hours,minutes,remainingSeconds,seconds)
          
            
             const innerDiv = document.createElement('div');
             innerDiv.classList = `card mx-5 my-5  bg-base-100 shadow-xl`;
             innerDiv.innerHTML = `  
         <figure><img class="h-[250px]" src=${d?.thumbnail} alt="Shoes" /></figure>
         <button class="text-end mt-[-30px] px-5 bg-[black] text-white width-[60px]">${hours? `${hours}hrs ${minutes}min ago` : ''}</button>
         <div class="card-body">
           <div class="grid grid-cols-7 mt-2">
             <div>

             <img class="" src=${d?.authors[0]?.profile_picture
             } ></img>
             
             </div>
             <div class=" col-span-6">
               <h1 class="font-semibold">${d?.title}</h1>
               
     
                 <div class="flex flex-wrap justify-evenly">
                   <p>${d?.authors[0]?.profile_name
                   }</p>
                   ${d?.authors[0]?.verified ? '<img class="author-verified" src="images/images-removebg-preview.png"></img>' : ''}
     
                   
                 </div>
                 <p>${d?.others?.views
                 }  views</p>
             </div>
           </div>
         </div>
       `;
     
       parent.appendChild(innerDiv)
         })
       }
       else{
         const parent = document.getElementById('gridd');
         parent.textContent = ''
         const innerDiv = document.createElement('div');
         innerDiv.classList = `card mx-5 my-5  bg-base-100 shadow-xl`;
         innerDiv.innerHTML = `  
     <figure><img src="/images/Icon.png" alt="Shoes" /></figure>
     <button class="text-end mt-[-30px] px-5 bg-[black] text-white width-[60px]"></button>
     <div class="card-body pt-10">
         <div class="text-center">
          <h1 class="text-3xl text-semibold">Opps!! Sorry, There is no <br> content here</h1>
         </div>
     </div>
     `;
     
     parent.appendChild(innerDiv)
       }
      
         
         
        })
   
   
        const parent = document.getElementById('grid');
        parent.textContent = ''
      if(data.length > 0){
    
        data.forEach(d =>{
          const seconds =parseInt( d?.others?.posted_date);
          let hours = null;
          let minutes = null;
          let remainingSeconds = null
          if(seconds > 1){
            hours = Math.floor(seconds / 3600);
             minutes = Math.floor((seconds % 3600) / 60);
             remainingSeconds = seconds % 60;
             
          }
          
          // console.log(hours,minutes,remainingSeconds,seconds)
         
           
            const innerDiv = document.createElement('div');
            innerDiv.classList = `card mx-5 my-5  bg-base-100 shadow-xl`;
            innerDiv.innerHTML = `  
        <figure><img class="h-[250px]" src=${d?.thumbnail} alt="Shoes" /></figure>
        <button class="text-end mt-[-30px] px-5 bg-[black] text-white width-[60px]">${hours? `${hours}hrs ${minutes}min ago` : ''}</button>
        <div class="card-body">
          <div class="grid grid-cols-7 mt-2">
            <div>
              <img class="author-img px-2" src=${d?.authors[0]?.profile_picture
              } ></img>
            </div>
            <div class=" col-span-6">
              <h1 class="font-semibold">${d?.title}</h1>
    
                <div class="flex flex-wrap justify-evenly">
                  <p>${d?.authors[0]?.profile_name
                  }</p>
                  ${d?.authors[0]?.verified ? '<img class="author-verified" src="images/images-removebg-preview.png"></img>' : ''}
    
                  
                </div>
                <p>${d?.others?.views
                }  views</p>
            </div>
          </div>
        </div>
      `;
    
      parent.appendChild(innerDiv)
        })
      }
      else{
        const parent = document.getElementById('gridd');
        parent.textContent = ''
        const innerDiv = document.createElement('div');
        innerDiv.classList = `card mx-5 my-5  bg-base-100 shadow-xl`;
        innerDiv.innerHTML = `  
    <figure><img src="./icon/Icon.png" alt=""></figure>
    <button class="text-end mt-[-30px] px-5 bg-[black] text-white width-[60px]"></button>
    <div class="card-body pt-10">
        <div class="text-center">
         <h1 class="text-3xl text-semibold">Opps!! Sorry, There is no <br> content here</h1>
        </div>
    </div>
    `;
    
    parent.appendChild(innerDiv)
      }
     
   
    
   
   
      
      
   }
     
           // Output: Hello, Guest!
    
   specificCategoriesData()
   
   category()
   
   
   const data = [
     {"view": "100kk"},
     {"view": "600kk"},
     {"view": "300kk"}
   ];
   
   // Custom sorting function to sort based on the numeric value
   data.sort((a, b) => {
     const viewsA = parseInt(a.view);
     const viewsB = parseInt(b.view);
   
     return viewsB - viewsA;
   });
   
   
   
   
   
   
   
   
   