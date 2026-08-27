import React from "react";
import Product_card from "../components/Product_card";
import e_commerce from "../assets/e-commerce.png";
import task from "../assets/task.png";
import analytics from "../assets/analytics.png";
import blog from "../assets/blog.png";
import { useState } from "react";

const projects = [
    {
        id: 1,
        department: "Computer Science",
        level: "Beginner",
        image: e_commerce,
        name: "E-commerce",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "10 Days",
        rating: "4.6 (120)",
        bg1: "bg-red-200",
        text1: "text-red-600",
        bg2: "bg-purple-200",
        text2: "text-purple-600",
        bg3: "bg-fuchsia-200",
        text3: "text-fuchsia-600",
    },
    {
        id: 2,
        department: "Computer Science",
        level: "Intermiediate",
        image: task,
        name: "Task Manager",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7 (98)",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
    },
    {
        id: 3,
        department: "Computer Science",
        level: "Advance",
        image: analytics,
        name: "Analytics Dashboard",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "Next.js",
        Tech_2: "TypeScript",
        Tech_3: "Chart.js",
        Days: "7 Days",
        rating: "4.7 (98)",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
    },
    {
        id: 4,
        department: "Computer Science",
        level: "Intermiediate",
        image: blog,
        name: "Blog",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7 (98)",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
    },

];

const Projects = () => {
    return (
        <div>
            {projects.map((card) => (
                <Product_card
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    paragraph={card.paragraph}
                    Tech_1={card.Tech_1}
                    Tech_2={card.Tech_2}
                    Tech_3={card.Tech_3}
                    Days={card.Days}
                    level={card.level}
                    rating={card.rating}
                    bg1={card.bg1}
                    text1={card.text1}
                    bg2={card.bg2}
                    text2={card.text2}
                    bg3={card.bg3}
                    text3={card.text3}
                />

            ))};



        </div>
    );
};
export default Projects;
