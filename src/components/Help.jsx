import React from "react";

export const Help = () => {

  const helpSections = [
    {
      title: "Understanding Ulcers",
      content: [
        "Learn about the different types of ulcers, their causes, symptoms, and potential triggers.",
        "Understand how diet plays a crucial role in managing ulcer symptoms and promoting healing."
      ]
    },
    {
      title: "Meal Planning Basics",
      content: [
        "Explore the fundamentals of ulcer-friendly meal planning, including portion control, food selection, and meal timing.",
        "Discover the importance of incorporating a variety of nutrient-rich foods while avoiding common irritants."
      ]
    },
    {
      title: "Ulcer-Friendly Foods",
      content: [
        "Access a curated list of ulcer-friendly foods and beverages that are gentle on the stomach and promote digestive health.",
        "Learn about the nutritional benefits of each food category and how they contribute to overall well-being."
      ]
    },
    {
      title: "Avoiding Trigger Foods",
      content: [
        "Identify common trigger foods and beverages that may exacerbate ulcer symptoms and lead to discomfort.",
        "Discover practical tips for minimizing or eliminating trigger foods from your diet to support symptom management."
      ]
    },
    {
      title: "Eating Out and Social Situations",
      content: [
        "Navigate dining out and social gatherings with confidence by learning how to make ulcer-conscious choices on menus.",
        "Find strategies for communicating your dietary needs to restaurant staff and accommodating your preferences."
      ]
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      content: [
        "Explore a comprehensive list of frequently asked questions related to ulcers, diet, and meal planning.",
        "Get answers to common queries about specific foods, meal preparation methods, supplements, and more."
      ]
    },
    {
      title: "Tips for Meal Preparation",
      content: [
        "Access helpful tips and techniques for preparing ulcer-friendly meals at home that are both delicious and nutritious.",
        "Learn about cooking methods, recipe substitutions, and kitchen tools to make meal preparation easier and more enjoyable."
      ]
    },
    {
      title: "Seeking Professional Guidance",
      content: [
        "Understand the importance of consulting with healthcare professionals, including doctors and dietitians, for personalized dietary recommendations.",
        "Find resources for locating qualified healthcare providers who specialize in ulcer management and nutritional counseling."
      ]
    },
    {
      title: "Additional Resources",
      content: [
        "Explore a curated selection of external resources, including books, websites, and support groups, for further information and assistance.",
        "Access downloadable guides, meal planners, and recipe collections to support your ulcer-friendly meal journey."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "Reach out to our dedicated support team with any additional questions, feedback, or concerns you may have.",
        "We're here to assist you every step of the way and ensure that you have the support you need to thrive."
      ]
    }
  ];
  


  return (
    <div className="pt-20 p-10 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Welcome to <span className="text-[#846b57]">EatRight </span></h1>
        <h3 className="text-2xl text-[#846b57] text-medium " >Your Meal Chatbot Assistant</h3>
        <p className="font-medium text-[20px]">
          At EatRight, we understand the challenges that come with managing ulcer-related dietary restrictions. Our mission is to provide you with the tools, resources, and support you need to navigate your meal choices with confidence. Whether you're newly diagnosed or seeking additional guidance, our comprehensive help section is designed to answer your questions and empower you on your journey towards better health.
        </p>
        {helpSections.map((section, index) => (
          <div key={index}>
            <h2 className="font-semibold p-2 text-[20px]">{index + 1}. {section.title}</h2>
            <ul className="text-[18px]">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  );
};

