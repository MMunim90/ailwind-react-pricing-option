import React from 'react';
import PricingFeatures from './pricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, info, features} = pricing;
    console.log(pricing)
    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-400 p-4 rounded-md mt-10 flex-1 text-black font-bold'>
                <p>{info}</p>
                {
                    features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-6">Subscribe</button>
        </div>
    );
};

export default PricingCard;