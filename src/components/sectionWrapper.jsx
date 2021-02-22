import React from 'react';

const Section = props => {
    const { sectionClass, reverse, heading, description, content } = props;
    const reverseClass = reverse ? ' reverse' : '';
    return (
        <section className={(sectionClass + reverseClass + ' text-center').trim()}>
            <div className="container">
                <div className="row">
                    {
                        (heading || description)
                            ? <div className="col-xs-12 col-xs-offset-0 col-sm-offset-2 col-sm-8 section-title">
                                {heading ? <h2>{heading}</h2> : ''}
                                {description ? <p>{description}</p> : ''}
                            </div>
                            : ''
                    }
                    {content}
                </div>
            </div>
        </section>
    );
}

export default Section;