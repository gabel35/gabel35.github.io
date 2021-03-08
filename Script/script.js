// var bgImgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var carouselDiv = $(".carousel-inner");

// for (let i = 0; i<bgImgs.length; i++){
//     var carouselImgs = $(`
//     <div id="carousel-items" class="carousel-item">
//         <img class="d-block w-100" src="/Assets/Images/background/bella${bgImgs[i]}.JPG" alt="Pictures of my dog, Bella" style="">
//     </div>`);
//     carouselDiv.append(carouselImgs);
// }



// document.body.style.backgroundImage = "url('/Assets/Images/background')";

// Name <input id="exampleInputName">
// Email address <input id="exampleInputEmail1"
// Message <textarea id="exampleInputEmail"
// Submit id="contactBtn" 


$("#contactBtn").on("click", function emailMe(event){
    event.preventDefault();
    var name = $("#exampleInputName").val()
    var email = $("#exampleInputEmail1").val()
    var message = $("#exampleInputEmail").val()

    console.log(name)
    console.log(email)

    window.open(`mailto:GabrielJose3135@gmail.com?subject=Github_Message&body=name:${name}email:${email}message:${message}`);
})


// // What Weather Button Links //
// $("#whatWeather").on("click", function () {
//     window.location.href = "https://gabel35.github.io/What_Weather";
// })

// $("#wwRepo").on("click", function () {
//     window.location.href = "https://github.com/gabel35/What_Weather";
// })

// //9-to-5 Planner Button Links //
// $("#hourlyPlanner").on("click", function () {
//     window.location.href = "https://gabel35.github.io/9-to-5_Planner/";
// })

// $("#hpRepo").on("click", function () {
//     window.location.href = "https://github.com/gabel35/9-to-5_Planner";
// })

// // Spyglass Button Links //
// $("#spyGlass").on("click", function () {
//     window.location.href = "https://gabel35.github.io/Spyglass/";
// })

// $("#sgRepo").on("click", function () {
//     window.location.href = "https://github.com/gabel35/Spyglass";
// })

// // LinkedIn Link //
// $("#linkedIn").on("click", function () {
//     window.open("https://www.linkedin.com/in/gabriel-sanchez-919b88a1");
// })

// // Github Link //
// $("#gitHub").on("click", function () {
//     window.open("https://github.com/gabel35");
// })
