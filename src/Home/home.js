
window.addEventListener("load",homeData())


    async function homeData(){
        await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => catigoriya(data))
    }





function catigoriya(homedata){
   
    let catigoriya = homedata[0][0];

    let catigoriyabox = document.getElementById("catigoriya");

    catigoriya.map((item) =>{
        let catigoriyacard = document.createElement("div");
        catigoriyabox.appendChild(catigoriyacard);
        catigoriyacard.className = "categoryDiv";
        catigoriyabox.className = "categoryContainer";
        let catigoriyaimg = document.createElement("img");
        catigoriyaimg.src = item.image;
        catigoriyacard.appendChild(catigoriyaimg);
        let catigoriyatitle = document.createElement("p");
        catigoriyatitle.innerText = item.title;
        catigoriyacard.appendChild(catigoriyatitle);
    })


}

window.addEventListener("load" , deliciousData() )

async function deliciousData(){
     await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
     .then(response => response.json())
     .then(data => delicious(data))
}

function delicious(deliciousdata){
   let  delicious = deliciousdata[0][3];


   let row = document.getElementById("row");
   delicious.map((item) => {
       let deliciouscard = document.createElement("div");
        row.appendChild(deliciouscard);
        deliciouscard.className = "deliciuscard";
       
        row.className  = "row";
        let deliciousimg = document.createElement("img");
         deliciousimg.src = item.image;
         deliciouscard.appendChild(deliciousimg);

         let delicioustitle = document.createElement("h3");
         delicioustitle.innerText = item.title;
         deliciouscard.appendChild(delicioustitle);

         let time = document.createElement("div");
         time.className = "time";
         deliciouscard.appendChild(time);
         let timebox = document.createElement("div");
         timebox.className = "timebox";
         time.appendChild(timebox);
        let timerimage = document.createElement("img");
        timebox.appendChild(timerimage);
        let timeminut  = document.createElement("p");
        timeminut.innerText = item.timer_title;
        timebox.appendChild(timeminut);
        timerimage.src = item.timer_img;
         let knifebox = document.createElement("div");
         knifebox.className = "knifebox";
         time.appendChild(knifebox);
         let knifeimage = document.createElement("img");
         knifeimage.src = item.fork_knife_img;
         knifebox.appendChild(knifeimage);
         let knifetitle  = document.createElement("p");
         knifetitle.innerText = item.fork_knife_title;
         knifebox.appendChild(knifetitle);  
         
  

   })
}

let elList = document.querySelector(".list")



window.addEventListener("load",data())

    async function data(){
        await fetch("https://66ab5539636a4840d7ca3261.mockapi.io/dcd/user")
        .then(res => res.json())
        .then(data => tastyCatigoriya(data)) 
    }





function tastyCatigoriya(data){
   
    let tastyCatigoriya = data[0][1];



    tastyCatigoriya.map((item) =>{
        let fooditem = document.createElement("li");
       
        fooditem.innerHTML = `

             <img class="food-item-img" src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <div class="cooker-tools">
                        <div class="clock">
                            <img src="${item.timer_img}" alt="">
                            <h4>${item.timer_title}</h4>
                        </div>
                        <div class="eat-tools">
                            <img src="${item.fork_knife_img}" alt="">
                            <h4>${item.fork_knife_title}</h4>
                        </div>
                    </div>

        `


        elList.appendChild(fooditem)
    })

}

let  passages = document.querySelector(".passages");
function videofunction(){
       passages.innerHTML = `<video " controls>
  <source src="./home_img/istockphoto-1181670894-640_adpp_is.mp4">
</video>`
        
    
}