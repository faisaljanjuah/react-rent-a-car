import React from 'react';
import HowItWorks from '../sections/howitworks';
import Car from './../components/car';
import Currency from './../utils/currency';

const carImg = require('../assets/img/img_1.jpg');

let car1 = [
    {
        className: '',
        img: carImg,
        name: 'Range Rover S64 Coupe',
        rate: 4,
        currency: <Currency />,
        price: 150000,
        period: 'month',
        doors: 4,
        seats: 6,
        transmission: 'automatic'
    }
];

const Home = () => {
    return (
        <React.Fragment>
            <div className="homeBanner"></div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>This is Content Area of <strong><u>HOME</u></strong>.</h1>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Car
                            className={car1[0].className}
                            img={car1[0].img}
                            name={car1[0].name}
                            rating={car1[0].rate}
                            currency={car1[0].currency}
                            price={car1[0].price}
                            period={car1[0].period}
                            doors={car1[0].doors}
                            seats={car1[0].seats}
                            transmission={car1[0].transmission}
                        />
                    </div>
                </div>
            </div>

            <HowItWorks />
        </React.Fragment>
    );
}

export default Home;