import React from 'react';
import Section from '../components/sectionWrapper';

let steps = ['Time & Place', 'Car', 'Details', 'Checkout', 'Done'];

let content = <div className="col-xs-12">
    <div className="steps">
        {steps.map((s, i) => <div className="step" key={i}><span className="number">{i + 1}</span><span className="caption">{s}</span></div>)}
    </div>
</div>

let h = {
    sectionClass: 'howitworks',
    reverse: true,
    heading: 'How it works',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!',
    content: content,
};

const HowItWorks = () => {
    return (
        <Section sectionClass={h.sectionClass} reverse={h.reverse} heading={h.heading} description={h.description} content={h.content} />
    );
}

export default HowItWorks;