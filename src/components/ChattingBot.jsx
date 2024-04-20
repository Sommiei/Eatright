import React, { useState } from 'react';
import ChatBot from "react-simple-chatbot";
import './ChattingBot.css'; // Import custom CSS file

export const ChattingBot = () => {
    const [name, setName] = useState('');

    const steps = [
        {
            id: "Hello",
            message: "Welcome to Eatright! How can I help you today?",
            trigger: "start"
        },
        {
            id: "start",
            message: "Hi! Please enter your name",
            trigger: "getName"
        },
        {
            id: "getName",
            user: true,
            trigger: "acknowledgeName"
        },
        {
            id: "acknowledgeName",
            message: ({ previousValue }) => `Hello ${previousValue}! What issue are you experiencing?`,
            trigger: "options"
        },
        {
            id: "options",
            options: [
                {
                    value: "Peptic ulcer",
                    label: "Peptic ulcer",
                    trigger: "mealPlan"
                },
                {
                    value: "Pressure ulcer",
                    label: "Pressure ulcer",
                    trigger: "mealPlan"
                },
                {
                    value: "Arterial Ulcers",
                    label: "Arterial Ulcers",
                    trigger: "mealPlan"
                },
                {
                    value: "Mouth Ulcers",
                    label: "Mouth Ulcers",
                    trigger: "mealPlan"
                }
            ]
        },
        {
            id: "mealPlan",
            message: "Thanks for telling us about your issues, now let's fix you a meal plan",
            end: true
        }
    ];

    const handleNameInput = (input) => {
        setName(input);
        return input;
    };

    return (
        <div>
            <div className="bg-white border border-gray-200 p-4 shadow-md">
                <div className='flex justify-center items-center'>
                    <ChatBot 
                        steps={steps}
                        userDelay={500}
                        handleUserInput={handleNameInput}
                    />
                </div>
            </div>
        </div>
    );
};
