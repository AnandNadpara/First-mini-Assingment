let imageArray = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cooking couple shoot portofilio(1).jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2021.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-june-2021.key",
  },
];
let currentIndex = 0;

let image = document.querySelector(".image-container");
    image.innerHTML = `
    <img src="${imageArray[0].previewImage}" 
     alt='No Image'>
    <p> ${ imageArray[0].title} </p>`;

imageArray.forEach((item, index) => {
  let sidebarItem = document.createElement("div");
  sidebarItem.classList = "sidebarItem";
  sidebarItem.setAttribute("id", index);
  sidebarItem.innerHTML = `
      <img src="${item.previewImage}"
                    alt="No Image">
                    <p> ${item.title} </p>`;
  if(index==0)
  sidebarItem.classList.add("select");
  sidebar = document.querySelector(".sidebar");
  sidebar.appendChild(sidebarItem);
  sidebarItem.addEventListener("click", (event) => {
    ChangeImage(item,index);
  });
});

function ChangeImage(item,index){
  let element = document.getElementById(`${currentIndex}`);
  element.classList.remove("select");
  currentIndex = index;
  let sidebarItem = document.getElementById(`${currentIndex}`);
  sidebarItem.classList.add("select");
  let image = document.querySelector(".image-container");
  image.innerHTML = `
  <img src="${item.previewImage}" 
   alt='No Image'>
  <p> ${ item.title} </p>`;
}

document.onkeydown = function (event){
  let current;
  switch(event.keyCode){
    case 38:
      current = (currentIndex!=0)?currentIndex-1:currentIndex;
      ChangeImage(imageArray[current],current)
      break;
    case 40:
      current = (currentIndex+1==imageArray.length)?currentIndex : currentIndex+1;
      ChangeImage(imageArray[current],current)
      break;
  }
}
