import React from "react";
import Bitfinex from "../../assets/bitfinex1.png";
import Taskify from "../../assets/taskify.png";
import Weather from "../../assets/weather.png";
import Shopify from "../../assets/shopify.png";
import Fitness from "../../assets/fitness.png";
import Shopweb from "../../assets/shop.png";
import Expense from "../../assets/expense.png";
import Monument from "../../assets/monument.png";
import Ecomweb from "../../assets/ecom.png";
import ReactNav from "../../assets/react-navigationpng.png";
import Bankist from "../../assets/bankist.png";
import "../../styles/WorkCard.css";
import { Link } from "react-router-dom";

const WorkCard = () => {
  return (
    <>
      <div className="container container-left">
        <strong>
          <h1>Bankist</h1>
        </strong>
        <img
          src={Bankist}
          alt="Logo of bankist app"
          className="container-img"
        />
        <div className="content">
          <p>
            This is a bank website having different different nice features. I
            learn a lot from this project. <b>Javascript</b> used for this
            project.
          </p>
          <div className="content-btns">
            <Link to={"https://bankist-app-ebon.vercel.app/"} target="_blank">
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/bankist-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-right">
        <strong>
          <h1>React Navigation</h1>
        </strong>
        <img
          src={ReactNav}
          alt="React Navigation app"
          className="container-img"
        />
        <div className="content">
          <p>
            This is a landing page of well known navigation website 'React
            Navigation'. This UI is design using <b> React </b>and decorate it
            using
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link
              to={"https://react-navigation-swart.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/react-navigation"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-left">
        <strong>
          <h1>Bitfinex</h1>
        </strong>
        <img src={Bitfinex} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A crypto website which provides data about the crypto. This website
            is created using Javascript Library so called <b> React </b>and css
            library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link
              to={"https://crypto-app-puce-nine.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/crypto-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-right">
        <strong>
          <h1>Taskify</h1>
        </strong>
        <img src={Taskify} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A todo app for note down daily tasks with a <b> drag and drop</b>{" "}
            feature. This website is created using Javascript Library so called{" "}
            <b> React </b>and css library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link to={"https://taskify-rho-ten.vercel.app/"} target="_blank">
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/taskify"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-left">
        <strong>
          <h1>WeatherWen</h1>
        </strong>
        <img src={Weather} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A weather app that gives the weather information of different cities
            of world.This website is created using Javascript Library so called{" "}
            <b> React </b>and css library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link
              to={"https://my-weather-app-tawny.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/my-weather-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-right">
        <strong>
          <h1>Shopify</h1>
        </strong>
        <img src={Shopify} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A shopping website with different features. This website is created
            using <b> React framework</b> so called <b>Next js </b>and css
            library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link
              to={"https://next-shopping-cart-wine.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/next-shopping-cart"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-left">
        <strong>
          <h1>Fitness One</h1>
        </strong>
        <img src={Fitness} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A exercise app for gym lover which provides details of exercises and
            correct way of doing the exercises.This website is created using
            Javascript Library so called <b> React </b>and css library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link
              to={"https://fitness-app-gray-nine.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/fitness-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-right">
        <strong>
          <h1>Shopping Website</h1>
        </strong>
        <img src={Shopweb} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            Again a shopping website but this website is created using
            Javascript Library so called <b> React. Taiwind css</b> is used for
            styling and decorate the website. I tried <b> Typescript </b>in this
            website{" "}
          </p>
          <div className="content-btns">
            <Link to={"https://my-cart-delta.vercel.app/"} target="_blank">
              <button className="btn btn-view">View</button>
            </Link>
            <Link
              to={"https://github.com/Faiz0developer/my-cart"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-left">
        <strong>
          <h1>My Expense</h1>
        </strong>
        <img src={Expense} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            A expense tracker website to track monthly or yearly or daily basis
            expenses and manage your budget. Graph representaion is useful for
            getting more information.{" "}
            <b>React for UI and Tailwind for styling is used.</b>{" "}
          </p>
          <div className="content-btns">
            <Link
              to={"https://expense-tracker-app-beta.vercel.app/"}
              target="_blank"
            >
              <button className="btn btn-view">View</button>
            </Link>
            <Link
              to={"https://github.com/Faiz0developer/expense-tracker-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-right">
        <strong>
          <h1>Monument Trip</h1>
        </strong>
        <img src={Monument} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            This website provides the details of India's precious monuments and
            their locations as well. This website is created using Javascript
            Library so called <b> React </b>and css library that is
            <b> Tailwind css</b>.
          </p>
          <div className="content-btns">
            <Link to={"https://monument-app.vercel.app/"} target="_blank">
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/monument-app"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container container-left">
        <strong>
          <h1>Ecom. Website</h1>
        </strong>
        <img src={Ecomweb} alt="Bitcoin app" className="container-img" />
        <div className="content">
          <p>
            An e-commerce website with differnet features. My first website with
            searching and slider features.This website is created using
            Javascript Library so called <b> React </b>and css library that is
            <b> Tailwind css</b>.{" "}
          </p>
          <div className="content-btns">
            <Link to={"https://search-page-tawny.vercel.app/"} target="_blank">
              <button className="btn btn-view">View</button>
            </Link>

            <Link
              to={"https://github.com/Faiz0developer/search-page"}
              target="_blank"
            >
              <button className="btn btn-code">Code</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
