const texareaEl = document.getElementById('textarea');

const totalCounter = document.getElementById('total-counter');

const updateCounter = () => {
    totalCounter.innerText = texareaEl.value.length;
}

texareaEl.addEventListener("keyup", () => {
    updateCounter()
})
