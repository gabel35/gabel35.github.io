var bgImgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var carouselDiv = $(".carousel-inner");

for (let i = 0; i<bgImgs.length; i++){
    var carouselImgs = $(`
    <div id="carousel-items" class="carousel-item">
        <img class="d-block w-100" src="../Assets/Images/background/bella${bgImgs[i]}.JPG" alt="Pictures of my dog, Bella">
    </div>`);
    carouselDiv.append(carouselImgs);
}

