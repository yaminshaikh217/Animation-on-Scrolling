const boxes = document.querySelectorAll(".box")


window.addEventListener("scroll", boxAnimation)

function boxAnimation() {
    let triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach((curr) => {
        let boxTop = curr.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            curr.classList.add("show")
        } else {
            curr.classList.remove("show")
        }

    })
}