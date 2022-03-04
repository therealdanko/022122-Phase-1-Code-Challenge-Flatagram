const flatGramAPI = ' http://localhost:3000/images/1'
//currentImage = document.querySelector(".image")
//let displayImage = document.createElement('img');
let displayTitle;
let displayLikes;
let displayCommments;

fetch(flatGramAPI)
  .then((res) => res.json())
  .then(displayImage)
  .catch(console.err)

//   function displayImage(displayObject) {
//     // displayObject.forEach(addDisplayImageToPage)
//     for(displayObject = document.querySelector(".title"))
//   }

//   function addDisplayImageToPage(displayTitle) {
//       console.log(displayTitle.title)
//   }

function addDisplayImage(displayImage) {
    document.querySelector(".image") = "oldImage"
    let displayImage = document.createElement('img');
    for(old )

}