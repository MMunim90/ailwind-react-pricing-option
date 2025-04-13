import { CircleCheck, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex gap-4 mt-2'><CircleCheckBig></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;