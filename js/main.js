
let cars=document.getElementsByClassName('card')
function filters(filter){
for(let i=0 ; i<cars.length;i++){
    if(cars[i].dataset.category===filter){
    cars[i].style.display='flex'
    }
    else{
    cars[i].style.display='none'
    }
}
}


let input = document.getElementById('input-search');

if (input) {
  // رویداد input برای سرچ لحظه‌ای موقع تایپ کردن
input.addEventListener('input', (event) => {
    let searchValue = input.value.trim().toLowerCase();
    let cars = document.querySelectorAll('.card');

    cars.forEach((car) => {
    const carDiv = car.querySelector('.card-mohtava');

    if (carDiv) {
        const titleElement = carDiv.querySelector('h3');
        const title = titleElement ? titleElement.textContent.trim().toLowerCase() : '';

        if (searchValue === '' || title.includes(searchValue)) {
        car.style.setProperty('display', 'flex', 'important');
        } else {
        car.style.setProperty('display', 'none', 'important');
        }
    }
    });
});
}


