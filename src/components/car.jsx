import React, { Component } from 'react';
import Rating from './../utils/rating';

class Car extends Component {
    state = {}
    render() {
        const { className, img, name, rating, currency, price, period, doors, seats, transmission } = this.props;
        let amount = price.toLocaleString();
        return (
            <div className={`car mb-20 ${className}`}>
                <img src={img} alt={name} />
                <div className="carDetails text-center">
                    <h4>{name}</h4>
                    <Rating value={rating} />
                    <h3>{currency}{amount}{period && <React.Fragment>/<small>{period}</small></React.Fragment>}</h3>
                    <ul className="specs">
                        <li><span>Doors</span><span className="spec">{doors}</span></li>
                        <li><span>Seats</span><span className="spec">{seats}</span></li>
                        <li><span>Transmission</span><span className="spec">{transmission}</span></li>
                    </ul>
                    <button className="btn btn-primary">Rent Now</button>
                </div>
            </div>
        );
    }
}

export default Car;
