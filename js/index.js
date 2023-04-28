fetch("js/data.json",{
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.json())
.then(data => {
    let container = document.querySelector("#skills-container");
    container.innerHTML = "";
    let slider_ = document.querySelector("#slider");
    slider_.innerHTML = "";
    data.portfolio.forEach(p => {
        slider_.innerHTML += createSlide(p);
    })
    data.skills.forEach(skill => {
        createCard(skill, container)
    });
})



function createCard(data, container) {
    
    fetch(data.img).then(response => response.text()).then(img => {
        container.innerHTML += `<div class="card-wrapper">
    <div class="card">
        <div class="icon">
            ${img}
        </div>
        <h3 class="card-title ln-txt-center">${data.name}</h3>
        <p class="card-desc">${data.description}</p>
    </div>
</div>`;
    })
}

function createSlide(data) {
    return `<div class="slider-pane ln-p-5">
    <a href="${data.url}">
        <h3 class="item-title ln-mb-4">${data.name}</h3>
    </a>
    <p class="item-desc">${data.description}</p>
    </div>`;
}

function copyToClipboard(el) {
    let value = el.getAttribute('data-copy')
    navigator.clipboard.writeText(value);
    el.setAttribute("data-msg","Copiado: " + value);
    el.classList.toggle("show", true);
    setTimeout(() => {
        el.classList.toggle("show", false)
    }, 3000);
}

document.querySelectorAll("[data-copy]").forEach(el => {
    el.addEventListener('click', () => {
        copyToClipboard(el);
    })
})