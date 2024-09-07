'use client';

import React, { useState } from 'react';

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
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg mb-6">Your submission has been successfully completed.</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Summary of your submission:</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg">{JSON.stringify(formData, null, 2)}</pre>
                </div>
                <p className="text-gray-600">We will get back to you shortly. If you have any questions, feel free to contact our support team.</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Finishing Up</h2>
            <p className="text-lg mb-6">Double-check everything looks OK before confirming.</p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">{formData.plan} ({formData.billing === 'monthly' ? 'Monthly' : 'Yearly'})</h3>
                <p className="text-xl font-bold mb-4">${formData.planPrice}</p>
                <button
                    onClick={() => console.log('Change plan button clicked')}  // Add functionality for changing plan
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Change Plan
                </button>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Add-Ons</h3>
                {formData.addOns.map(({ name, price }) => (
                    <div key={name} className="flex justify-between mb-2">
                        <span>{name}</span>
                        <span>+${price}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between font-semibold mb-4">
                <span>Total (per month)</span>
                <span>${calculateTotal()}</span>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={prevStep}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                >
                    Back
                </button>
                <button
                    onClick={onSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Step4;
