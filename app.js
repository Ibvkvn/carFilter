document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const carsContainer = document.getElementById("carsContainer");

    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const carItems = carsContainer.getElementsByClassName("car-item");

        Array.from(carItems).forEach(car => {
            const carName = car.getAttribute("data-car-name").toLowerCase();
            if(carName.includes(searchTerm)){
                car.style.display = " ";
            }else{
                car.style.display = "none";
            }
        })
    })
});