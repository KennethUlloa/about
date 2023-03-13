const java = {name:"Java", img:"img/java.png", alt:"Logo de Java", desc:"MVC con Java EE, Swing, JavaFX, Maven, JPA"};
const python = {name:"Python", img:"img/python.png", alt:"Logo de Python", desc:"Desarrollo web con flask, UI con PyQT5"};
const javascript = {name:"Javascript", img:"img/javascript.png", alt:"Logo de Javascript", desc:"JS asíncrono, manejo del DOM, API Fetch, Módulos"};
const html = {name:"HTML", img:"img/html.png", alt:"Logo de HTML", desc:"Estructura base, componentes a base de elementos"};
const css = {name:"CSS", img:"img/css.png", alt:"Logo de CSS", desc:"Posición, animaciones, manejo de grid y flex, bootstrap"};
const mysql = {name:"MySQL", img:"img/mysql.png", alt:"Logo de MySQL", desc:"CRUD, triggers, store procedures"};
const mongo = {name:"MongoDB", img:"img/mongo.png", alt:"Logo de MongoDB", desc:"Pipelines, filters"};
const git = {name:"Git", img:"img/git.png", alt:"Logo de Git", desc:"Commit, pull, clone, push, merge"};

const skillsList = [java, python, javascript, html, css, mysql, mongo, git];

let num = skillsList.length;
const angleOffset = 360/num;

//let circles = document.querySelector("#habilidades").querySelectorAll(".elemento-circular");

let skillsPane = document.querySelector("#skills-pane");

skillsList.forEach((skill, i) => {
    var p = position(i);
    var pane = SkillCard(skill);
    pane.style.left = `${p.x*100}%`
    pane.style.top = `${p.y*100}%`
    skillsPane.appendChild(pane);
})

/*
circles.forEach((c,i) => {
    var p = position(i);
    c.style.left = `${p.x*100}%`
    c.style.top = `${p.y*100}%`
})*/

function position(n) {
    let angle = toRadians(45/2 + n*angleOffset);
    let x = 0.5 - Math.cos(angle)/2;
    let y = 0.5 - Math.sin(angle)/2;
    return {x: x, y: y}
}

function toRadians(angle) {
    return angle * (Math.PI/180);
}

function SkillCard(skill) {
    var div = document.createElement('div');
    div.className = "elemento-circular popup-target"
    div.innerHTML = `
    <img src="${skill.img}" alt="${skill.alt}" class="icono">
    <div class="bg-darker p-2 popup right">
    <h4>${skill.name}</h4>
    ${skill.desc}</div>
    `
    return div;
}



