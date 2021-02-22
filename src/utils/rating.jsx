import React from 'react';

const Rating = props => {
    const { value } = props;
    return (
        <div data-rated={value} className={`${'rating rate_' + value}`}>
            {[...Array(5)].map((star, i) => <div key={i} className={(i + 1 <= value) ? 'star active' : 'star'}></div>)}
        </div>
    );
}

export default Rating;
