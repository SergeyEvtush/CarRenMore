import React from "react"

import heartImg from "../assets/img/heart.svg"
import logoImg from "../assets/img/Logo.svg"
import carImg from "../assets/img/Car.jpg"
import filterImg from "../assets/img/filter.svg"
import menuImg from "../assets/img/menu.svg"
//import searchPng from "../assets/img/search-normal.png"
import menuSvg from "../assets/img/search-normal.svg"

class Home extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <div class="wraper">
                        <div class="rental-page">
                            <div class="rental-page__container-background _container">
                                <div class="rental-page__content-container">
                                    <header class="header">
                                        <div class="header-block header__wraper">
                                            <div class="title-block">
                                                <div class="header-block__logo">
                                                    <div class="logo">
                                                        <img src={logoImg} alt="morerent" />
                                                    </div>
                                                </div>
                                                <div class="header-block__form">
                                                    <div class="finding-form">
                                                        <form action="" class="searching-form">
                                                            <div class="input-wraper searching-form__input">
                                                                <input type="text" class="searching-input" placeholder="Search something here" />
                                                                <button class="filter-btn" type="button" title="title"></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="menu-block">
                                                <div class="header-block__menu">
                                                    <div class="menu">
                                                        <div class="menu-burger"><div class="burger-line"></div></div>
                                                        <ul class="menu-list"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div class="items-container">
                                        <div class="page-content">
                                            <div class="page-content-wraper">
                                                <div class="filter-block">
                                                    <div class="filter-block__item filter">
                                                        <div class="filter-block__title">
                                                            <h3 class="title-filter">Type</h3>
                                                        </div>
                                                        <div class="filter__items">
                                                            <ul class="list-fiter">
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="sport" /><label>Sport</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="suv" /><label>Suv</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="mpv" /><label>Mpv</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="sedan" /><label>Sedan</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="coupe" /><label>Coupe</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="type" id="hathback" /><label>Hathback</label><span class="metriks">(14)</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="filter-block__item filter">
                                                        <div class="filter-block__title">
                                                            <h3 class="title-filter">Capacity</h3>
                                                        </div>
                                                        <div class="filter__items">
                                                            <ul class="list-fiter">
                                                                <li class="list-filter__li"><input type="checkbox" name="capacity" id="two-person" /><label>2 Person</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="capacity" id="four-person" /><label>4 Person</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="capacity" id="six-person" /><label>6 Person</label><span class="metriks">(14)</span></li>
                                                                <li class="list-filter__li"><input type="checkbox" name="capacity" id="eight-person" /><label>8 or More</label><span class="metriks">(14)</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="filter-block__item filter">
                                                        <div class="filter-block__title">
                                                            <h3 class="title-filter">Price</h3>
                                                        </div>
                                                        <div class="filter__items">
                                                            <div class="price-item"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rental-block">
                                                    <div class="rental-block__wraper">
                                                        <div class="rental-block__title">
                                                            <div class="order-block">
                                                                <div class="pick-up make-order"></div>
                                                                <div class="drop-of make-order"></div>
                                                            </div>
                                                        </div>
                                                        <div class="cars">
                                                            <div class="cars__fotos">
                                                                <div class="cars-item">
                                                                    <div class="car-item__wraper">
                                                                        <div class="cars-item__title">
                                                                            <h4 class="title-car">Rols-Roice</h4>
                                                                            <h6 class="type-car">Sport</h6>
                                                                            <div class="car-reiting">
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="cars-item__foto">
                                                                            <img src={carImg} alt="car" />
                                                                        </div>
                                                                        <div class="cars-item__description">
                                                                            <ul class="description-car">
                                                                                <li>Fuel type:</li>
                                                                                <li>Transmission:</li>
                                                                                <li>Size:</li>
                                                                                <li>Year:</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="cars-item__to-order">
                                                                            <div class="order-price cars-item__price">
                                                                                <p class="price-order">
                                                                                    $100/
                                                                                </p>
                                                                                <p class="price-order _grey">day</p>
                                                                            </div>
                                                                            <div class="order-button cars-item__button">
                                                                                <div class="rent-btn">
                                                                                    <a href="#" class="btn-rent-link">
                                                                                        Rent Now
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="cars-item">
                                                                    <div class="car-item__wraper">
                                                                        <div class="cars-item__title">
                                                                            <h4 class="title-car">Rols-Roice</h4>
                                                                            <h6 class="type-car">Sport</h6>
                                                                            <div class="car-reiting">
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="cars-item__foto">
                                                                            <img src={carImg} alt="car" />
                                                                        </div>
                                                                        <div class="cars-item__description">
                                                                            <ul class="description-car">
                                                                                <li>Fuel type:</li>
                                                                                <li>Transmission:</li>
                                                                                <li>Size:</li>
                                                                                <li>Year:</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="cars-item__to-order">
                                                                            <div class="order-price cars-item__price">
                                                                                <p class="price-order">
                                                                                    $100/
                                                                                </p>
                                                                                <p class="price-order _grey">day</p>
                                                                            </div>
                                                                            <div class="order-button cars-item__button">
                                                                                <div class="rent-btn">
                                                                                    <a href="#" class="btn-rent-link">
                                                                                        Rent Now
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="cars-item">
                                                                    <div class="car-item__wraper">
                                                                        <div class="cars-item__title">
                                                                            <h4 class="title-car">Rols-Roice</h4>
                                                                            <h6 class="type-car">Sport</h6>
                                                                            <div class="car-reiting">
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="cars-item__foto">
                                                                            <img src={carImg} alt="car" />
                                                                        </div>
                                                                        <div class="cars-item__description">
                                                                            <ul class="description-car">
                                                                                <li>Fuel type:</li>
                                                                                <li>Transmission:</li>
                                                                                <li>Size:</li>
                                                                                <li>Year:</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="cars-item__to-order">
                                                                            <div class="order-price cars-item__price">
                                                                                <p class="price-order">
                                                                                    $100/
                                                                                </p>
                                                                                <p class="price-order _grey">day</p>
                                                                            </div>
                                                                            <div class="order-button cars-item__button">
                                                                                <div class="rent-btn">
                                                                                    <a href="#" class="btn-rent-link">
                                                                                        Rent Now
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="cars-item">
                                                                    <div class="car-item__wraper">
                                                                        <div class="cars-item__title">
                                                                            <h4 class="title-car">Rols-Roice</h4>
                                                                            <h6 class="type-car">Sport</h6>
                                                                            <div class="car-reiting">
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="cars-item__foto">
                                                                            <img src={carImg} alt="car" />
                                                                        </div>
                                                                        <div class="cars-item__description">
                                                                            <ul class="description-car">
                                                                                <li>Fuel type:</li>
                                                                                <li>Transmission:</li>
                                                                                <li>Size:</li>
                                                                                <li>Year:</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="cars-item__to-order">
                                                                            <div class="order-price cars-item__price">
                                                                                <p class="price-order">
                                                                                    $100/
                                                                                </p>
                                                                                <p class="price-order _grey">day</p>
                                                                            </div>
                                                                            <div class="order-button cars-item__button">
                                                                                <div class="rent-btn">
                                                                                    <a href="#" class="btn-rent-link">
                                                                                        Rent Now
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="cars-item">
                                                                    <div class="car-item__wraper">
                                                                        <div class="cars-item__title">
                                                                            <h4 class="title-car">Rols-Roice</h4>
                                                                            <h6 class="type-car">Sport</h6>
                                                                            <div class="car-reiting">
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                                <img src={heartImg} alt="heart" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="cars-item__foto">
                                                                            <img src={carImg} alt="car" />
                                                                        </div>
                                                                        <div class="cars-item__description">
                                                                            <ul class="description-car">
                                                                                <li>Fuel type:</li>
                                                                                <li>Transmission:</li>
                                                                                <li>Size:</li>
                                                                                <li>Year:</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="cars-item__to-order">
                                                                            <div class="order-price cars-item__price">
                                                                                <p class="price-order">
                                                                                    $100/
                                                                                </p>
                                                                                <p class="price-order _grey">day</p>
                                                                            </div>
                                                                            <div class="order-button cars-item__button">
                                                                                <div class="rent-btn">
                                                                                    <a href="#" class="btn-rent-link">
                                                                                        Rent Now
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="show-more-btn">
                                                            <div class="show-more-btn__link rent-btn">
                                                                <a href="#" class="btn-show">Show-more-car</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer class="footer">
                                <div class="footer__wraper _container">

                                    <div class="footer__container ">
                                        <div class="title-block">
                                            <div class="header-block__logo">
                                                <div class="logo">
                                                    <img src={logoImg} alt="morerent" />
                                                </div>
                                            </div>


                                        </div>
                                        <div class="footer-styles__container">
                                            <div class="footer-item">
                                                <div class="footer-item__title">
                                                    <h3>About</h3>
                                                </div>
                                                <ul class="footer-list">
                                                    <li>How it works</li>
                                                    <li>Featured</li>
                                                    <li>Partnership</li>
                                                    <li>Bussiness Relation</li>
                                                </ul>
                                            </div>
                                            <div class="footer-item">
                                                <div class="footer-item__title">
                                                    <h3>About</h3>
                                                </div>
                                                <ul class="footer-list">
                                                    <li>How it works</li>
                                                    <li>Featured</li>
                                                    <li>Partnership</li>
                                                    <li>Bussiness Relation</li>
                                                </ul>
                                            </div>
                                            <div class="footer-item">
                                                <div class="footer-item__title">
                                                    <h3>About</h3>
                                                </div>
                                                <ul class="footer-list">
                                                    <li>How it works</li>
                                                    <li>Featured</li>
                                                    <li>Partnership</li>
                                                    <li>Bussiness Relation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>

                    </div>
                    <script src="js/main.js"></script>
                </body>
            </div>


        )
    }
}

export default Home