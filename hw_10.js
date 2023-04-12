`use strict`

// Домашняя работа No10. «Объекты. ООП в JS»
// Задание:

// Используя полученные знания, создайте новый объект, который будет
// наследовать свойства и методы объекта, созданного из предыдущего домашнего
// задания по объектам (ДЗ No7). Выполните прототипное и функциональное
// наследование на выбор. Модифицируйте (доработайте) любой из методов
// родителя в его потомке.


// Запись на вебинар
{
    function Webinar() {
        this.name;
        this.age;
        this.goal;

        const createName = () => {
            this.name = prompt("Ваше Имя");
            return this.name;
        }

        const createAge = () => {
            this.age = prompt("Ваш возраст")
            let checkAnswear = /^[0-9]{1,2}$/.test(this.age);
            if (!checkAnswear) {
                alert("Неверный возраст!")
                return createAge()
            }
            return this.age;
        }

        const createDay = () => {
            this.day = prompt("В какой день вас записать? (пн, вт, ср, птн, сб) ");
            return this.day
        }

        const createGoal = () => {
            this.goal = prompt("Напишите Вашу цель Вебинара");
            return this.goal
        }

        this.createUser = function () {
            createName();
            createAge();
            createDay();
            createGoal();
        }

        this.addLead = function () {
            this.lead = {
                name: this.name,
                age: this.age,
                day: this.day,
                goal: this.goal,
            }
        }

        this.showContact = function () {
            for (let key in this.lead) {
                console.log(`${key}: ${this.lead[key]}`)
            }
        }
    }

    let сlient = new Webinar();
    сlient.createUser();
    сlient.addLead();
    сlient.showContact();

    console.log(сlient)

    function NewWebinar() {
        Webinar.apply(this, arguments);

        this.name;
        this.age;
        this.day;
        this.goal;

    }
    let сlient1 = new NewWebinar();
  
    сlient1.createUser();
    сlient1.addLead();
    сlient1.showContact();
    console.log(сlient1)
}


// Дополнительное задание (обязательное):

// Создайте функцию-конструктор для работы с DOM, а также новый объект на
// основе этого конструктора.
// В объекте должны быть реализованы более простые в использовании методы по
// работе с DOM:

//  create(‘tagName’) для создание и возврата новых элементов по имени тега;

//  attr(‘element’, ‘name’, [‘value’]) для добавления атрибута к элементу или возврата
// значения атрибута;

//  html(‘element’, [‘value’]) для добавления любого содержимого внутрь элемента или его
// возврата;

//  search(‘element’, ‘selector’) для поиска и возврата найденных элементов внутри
// переданного или в document по селектору CSS.

//  addClass(‘element’, ‘className’) для добавления класса к элементу;

//  removeClass(‘element’, ‘className’) для удаления класса из элемента;

//  toggleClass(‘element’, ‘className’) для переключения класса в элементе;

//  addClass(‘element’, ‘className’) для добавления класса к элементу;

//  hasClass(‘element’, ‘className’) для проверки существования класса в элементе
// (должен вернуть true или false);

//  append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов
// внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;

//  on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и
// выполнения функции (проверьте доступность контекста this и event).

console.log('%c----------------', 'color: white; background: #212529; font-size: 10px');

let DOM = function () {
    this.createTag = function (nameTag) {
        const tag = document.createElement(`${nameTag}`);
        document.body.prepend(tag)
        console.log(tag);
    }

    this.createAttr = function (nameTag, nameAttr, value) {
        const tag = document.createElement(`${nameTag}`);
        document.body.prepend(tag)
        tag.setAttribute(`${nameAttr}`, `${value}`)
        console.log(tag);

    }

    this.createHtml = function (nameTag, value) {
        const tag = document.createElement(`${nameTag}`);
        document.body.prepend(tag)
        tag.innerHTML = `${value}`
        console.log(tag);
    }

    this.search = function (selector) {
        this.search = document.querySelectorAll(selector);
        return this.search;
    }

    this.addClass = function (elem, className) {
        this.elem = document.querySelector(elem);
        this.elem.classList.add(className);
    }

    this.removeClass = function (elem, className) {
        this.elem = document.querySelector(elem);
        this.elem.classList.remove(className);
    }
    this.toggleClass = function (elem, className) {
        this.elemToggle = document.querySelector(elem);
        this.elem.classList.toggle(className);

    }

    this.hasClass = function (elem, className) {
        this.elem = document.querySelector(elem);
        if (this.elem.classList.contains(className)) return true;
        else return false;
    }


    this.append = function (elem, newElem, beforeElem) {
        if (beforeElem !== undefined) {
            this.beforeElem = document.querySelector(beforeElem);
            this.newElem = document.createElement(newElem);
            this.beforeElem.before(this.newElem);
        } else {
            this.elem = document.querySelector(elem);
            this.newElem = document.createElement(newElem);
            this.elem.append(this.newElem);
        }
    }

}



let DOM1 = new DOM()
// console.log(DOM1);
DOM1.createTag('div')
DOM1.createAttr('img', 'type', 'src')
DOM1.createAttr('input', 'type', 'color')
DOM1.createHtml('h1', 'Добавление любого содержимого внутрь элемента')
DOM1.createHtml('span', 'cnhjrf')
console.log(DOM1.search('section'));
DOM1.addClass('div', 'class');
DOM1.addClass('div', 'NEW');
DOM1.removeClass('div', 'class');
DOM1.toggleClass('div', 'active');// добавили класс
DOM1.toggleClass('div', 'active');// убрали класс
console.log(DOM1.hasClass('div', 'NEW')); // проверили есть ли класс
DOM1.append('div', 'span');
DOM1.append('div', 'input');



