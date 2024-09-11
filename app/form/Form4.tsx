'use client';

import React, { useState } from 'react';
import { FormHeading } from '@components/atoms'


type Step4Props = {
    prevStep: () => void;
    formData: {
        plan: string;
        billing: 'monthly' | 'yearly';
        planPrice: number;
        addOns: { name: string; price: number }[]; // Updated format for add-ons
    };
    handleSubmit: () => void;  // Function to submit the form
};

const Step4: React.FC<Step4Props> = ({ prevStep, formData, handleSubmit }) => {
    const [submitted, setSubmitted] = useState(false);

    // Calculate the total price including add-ons
    const calculateTotal = () => {
        const planPrice = formData.planPrice || 0;
        const addonsTotal = formData.addOns.reduce((acc, { price }) => acc + price, 0);
        return planPrice + addonsTotal;
    };

    // Handle form submission
    const onSubmit = () => {
        handleSubmit();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex flex-col gap-6 h-full bg-white rounded-lg justify-center items-center">
                <h1 className="text-2xl font-bold">Thank You!</h1>
                <p className="text-lg text-cool_gray">
                    Your submission has been successfully completed.
                </p>
                <div className="bg-magnolia p-4 rounded-lg w-full">
                    <h3 className="text-lg font-semibold">Summary of your submission:</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg mt-2">{JSON.stringify(formData, null, 2)}</pre>
                </div>
                <p className="text-cool_gray text-center">
                    We will get back to you shortly. If you have any questions, feel free to contact our support team.
                </p>
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-20 h-full bg-white rounded-lg">
            {/* Form Heading */}
            <FormHeading
                text="Finishing Up"
                infoText="Double-check everything looks OK before confirming."
            />

            <div className="bg-magnolia p-4 rounded-lg">
                {/* Plan Summary */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-marine_blue font-bold text-lg">
                        {formData.plan} ({formData.billing === 'monthly' ? 'Monthly' : 'Yearly'})
                    </h3>
                    <button
                        onClick={() => console.log('Change plan button clicked')}  // Add functionality for changing plan
                        className="text-cool_gray hover:text-purplish_blue underline"
                    >
                        Change
                    </button>
                </div>
                <p className="text-marine_blue font-bold text-xl">${formData.planPrice}</p>
            </div>

            <div className="flex flex-col gap-2 bg-magnolia p-4 rounded-lg">
                {/* Add-Ons Summary */}
                <h3 className="text-lg font-semibold text-marine_blue">Add-Ons</h3>
                {formData.addOns.map(({ name, price }) => (
                    <div key={name} className="flex justify-between">
                        <span className="text-cool_gray">{name}</span>
                        <span className="text-marine_blue">+${price}</span>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="flex justify-between font-bold text-lg p-4 rounded-lg">
                <span className="text-cool_gray">Total (per {formData.billing === 'monthly' ? 'month' : 'year'})</span>
                <span className="text-purplish_blue">${calculateTotal()}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    className="text-gray-700 px-4 py-2 rounded-md hover:text-marine_blue hover:font-bold transition"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={onSubmit}
                    className="bg-marine_blue text-white px-6 py-3 rounded-md hover:bg-purplish_blue transition"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Step4;
