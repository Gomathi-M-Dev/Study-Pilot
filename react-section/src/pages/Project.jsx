import { useEffect } from "react";
import { useState } from "react";
import Product_card from "../components/Product-card";
import e_commerce from "../assets/e-commerce.png";
import task from "../assets/Task - Manager.png";
import analytics from "../assets/analytics.png";
import blog from "../assets/blog.png";

const projects = [
    {
        id: 1,
        department: "Computer Science",
        course: "IT",
        level: "Beginner",
        image: e_commerce,
        name: "E-commerce",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "10 Days",
        rating: "4.6",
        views: "120",
        bg1: "bg-red-200",
        text1: "text-red-600",
        bg2: "bg-purple-200",
        text2: "text-purple-600",
        bg3: "bg-fuchsia-200",
        text3: "text-fuchsia-600",
        brief: {
            overview:
                "Build a complete e-commerce website where users can browse products, view product details, add products to cart and place orders.",

            goal:
                "Create a responsive and user-friendly online shopping experience with a smooth product-to-checkout flow.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies and folders."
                },
                {
                    title: "Design the Layout",
                    description:
                        "Create the basic layout including Navbar, Footer, Homepage and Product sections."
                },
                {
                    title: "Build Product Section",
                    description:
                        "Create reusable product cards and display products with image, name, price and other details."
                },
                {
                    title: "Create Product Details",
                    description:
                        "Build a product details page where users can view complete product information."
                },
                {
                    title: "Add Cart Functionality",
                    description:
                        "Allow users to add products to the cart, change quantity and remove products."
                },
                {
                    title: "Build Checkout",
                    description:
                        "Create the checkout flow with customer details, order summary and payment section."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the complete website work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test all buttons, product interactions, cart functionality and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed e-commerce project."
                }
            ],

            features: [
                "Product Listing",
                "Product Details",
                "Search Products",
                "Filter Products",
                "Add to Cart",
                "Update Cart Quantity",
                "Remove from Cart",
                "Checkout",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Products",
                "Product Details",
                "Cart",
                "Checkout"
            ],

            expectedResult:
                "A fully responsive e-commerce website with a complete product browsing, cart and checkout experience.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "DOM and event handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 2,
        department: "Computer Science",
        course: "IT",
        level: "Intermediate",
        image: task,
        name: "Task Manager",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "98",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
        brief: {
            overview:
                "Build a complete Task Manager application where users can create, organize, track and manage their daily tasks efficiently.",

            goal:
                "Create a simple and productive task management experience that helps users organize their work and keep track of task progress.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies and folders."
                },
                {
                    title: "Design the Layout",
                    description:
                        "Create the main dashboard layout with Navbar, sidebar, task sections and other required UI elements."
                },
                {
                    title: "Create Task Interface",
                    description:
                        "Build the interface for displaying tasks with title, description, priority, due date and status."
                },
                {
                    title: "Add Task Creation",
                    description:
                        "Allow users to create new tasks by entering the required task information."
                },
                {
                    title: "Organize Tasks",
                    description:
                        "Allow users to categorize and organize tasks based on their status, priority or category."
                },
                {
                    title: "Manage Task Status",
                    description:
                        "Allow users to update tasks between different stages such as To Do, In Progress and Completed."
                },
                {
                    title: "Add Task Actions",
                    description:
                        "Allow users to edit, delete and update existing tasks."
                },
                {
                    title: "Add Search and Filter",
                    description:
                        "Allow users to quickly find tasks and filter them based on status, priority or category."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the task manager work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test task creation, editing, deletion, filtering, status updates and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Task Manager application."
                }
            ],

            features: [
                "Create Tasks",
                "Edit Tasks",
                "Delete Tasks",
                "Task Status Management",
                "Task Priority",
                "Task Categories",
                "Due Dates",
                "Search Tasks",
                "Filter Tasks",
                "Responsive Design"
            ],

            pages: [
                "Dashboard",
                "Tasks",
                "Task Details",
                "Categories",
                "Settings"
            ],

            expectedResult:
                "A responsive Task Manager application that allows users to create, organize, track and manage tasks efficiently.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 3,
        department: "Computer Science",
        course: "DS",
        level: "Advanced",
        image: analytics,
        name: "Analytics Dashboard",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "Next.js",
        Tech_2: "TypeScript",
        Tech_3: "Chart.js",
        Days: "7 Days",
        rating: "4.7",
        views: "98",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
        brief: {
            overview:
                "Build a modern Analytics Dashboard that helps users monitor business performance through key metrics, charts, reports and data insights.",

            goal:
                "Create a clear and interactive dashboard that presents important business data in an easy-to-understand visual format.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and components."
                },
                {
                    title: "Design the Dashboard Layout",
                    description:
                        "Create the main dashboard structure with Navbar, Sidebar, summary cards and content sections."
                },
                {
                    title: "Create Summary Cards",
                    description:
                        "Display important metrics such as Revenue, Sales, Orders, Customers and Growth using reusable cards."
                },
                {
                    title: "Build Data Charts",
                    description:
                        "Create visual charts to display information such as sales trends, revenue growth and customer activity."
                },
                {
                    title: "Add Data Tables",
                    description:
                        "Create tables to display detailed information such as recent transactions, products or customer data."
                },
                {
                    title: "Add Filters",
                    description:
                        "Allow users to filter dashboard data based on date, category, product or other relevant options."
                },
                {
                    title: "Add Interactive Elements",
                    description:
                        "Make charts, cards, filters and dashboard controls interactive so users can explore the data."
                },
                {
                    title: "Create Responsive Layout",
                    description:
                        "Make the dashboard usable and visually consistent across desktop, tablet and mobile screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test charts, filters, data displays, interactions and responsive layouts to ensure everything works correctly."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Analytics Dashboard project."
                }
            ],

            features: [
                "Dashboard Overview",
                "Performance Metrics",
                "Revenue Analytics",
                "Sales Analytics",
                "Interactive Charts",
                "Data Tables",
                "Date Filters",
                "Category Filters",
                "Recent Transactions",
                "Responsive Design"
            ],

            pages: [
                "Dashboard",
                "Analytics",
                "Reports",
                "Transactions",
                "Settings"
            ],

            expectedResult:
                "A professional and responsive Analytics Dashboard that presents business data through clear metrics, charts, tables and interactive filters.",
            requirements: {
                technologies: [
                    {
                        name: "Next.js",
                        learn: "Next.js Documentation",
                        link: "https://nextjs.org/docs"
                    },
                    {
                        name: "TypeScript",
                        learn: "TypeScript Handbook",
                        link: "https://www.typescriptlang.org/docs/"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "TypeScript basics",
                    "Data handling",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 4,
        department: "Computer Science",
        course: "IT",
        level: "Intermediate",
        image: blog,
        name: "Blog",
        paragraph: "A full-Stack e-commerce web app with cart, orders and payments",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "98",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
        brief: {
            overview:
                "Build a modern Blog Website where users can explore articles, read detailed posts and discover content through categories and search.",

            goal:
                "Create a clean and engaging reading experience with well-organized articles, easy navigation and a responsive editorial layout.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and components."
                },
                {
                    title: "Design the Blog Layout",
                    description:
                        "Create the main layout with Navbar, Hero section, Featured Posts, Categories and Footer."
                },
                {
                    title: "Create Blog Cards",
                    description:
                        "Build reusable blog cards displaying the article image, title, category, author, date and short description."
                },
                {
                    title: "Build Article Page",
                    description:
                        "Create a detailed article page where users can read the complete blog content."
                },
                {
                    title: "Add Categories",
                    description:
                        "Organize articles into different categories so users can easily discover content based on their interests."
                },
                {
                    title: "Add Search Functionality",
                    description:
                        "Allow users to search for articles using keywords and display matching blog posts."
                },
                {
                    title: "Add Related Posts",
                    description:
                        "Display related articles on the article page to help users discover more relevant content."
                },
                {
                    title: "Add Responsive Design",
                    description:
                        "Make the complete blog website work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test navigation, search, categories, article pages, links and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Blog Website."
                }
            ],

            features: [
                "Featured Articles",
                "Blog Listing",
                "Article Details",
                "Categories",
                "Search Articles",
                "Related Articles",
                "Author Information",
                "Publication Date",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Blog",
                "Article Details",
                "Categories",
                "About"
            ],

            expectedResult:
                "A professional and responsive Blog Website where users can easily discover, search and read well-organized articles.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "Array and object concepts",
                    "Event handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 5,
        department: "Computer Science",
        course: "AI",
        level: "Advanced",
        image: analytics,
        name: "AI Chatbot",
        paragraph: "An AI-powered chatbot that can answer user questions and provide smart responses",
        Tech_1: "Python",
        Tech_2: "OpenAI API",
        Tech_3: "FastAPI",
        Days: "12 Days",
        rating: "4.8",
        views: "150",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build an AI Chatbot application where users can interact with an intelligent assistant through a conversational chat interface.",

            goal:
                "Create a clean and responsive chatbot experience where users can send messages, receive AI responses and manage their conversations easily.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and components."
                },
                {
                    title: "Design the Chat Interface",
                    description:
                        "Create the chatbot layout with a header, conversation area, message bubbles and input section."
                },
                {
                    title: "Create Message Components",
                    description:
                        "Create reusable components for displaying user messages and AI responses clearly."
                },
                {
                    title: "Add Message Input",
                    description:
                        "Allow users to type and send messages using the input field and send button."
                },
                {
                    title: "Connect AI Service",
                    description:
                        "Connect the chatbot to an AI API so that user messages can be processed and AI responses can be displayed."
                },
                {
                    title: "Manage Conversations",
                    description:
                        "Store and display conversation messages so users can continue their current chat session."
                },
                {
                    title: "Add Chat Actions",
                    description:
                        "Allow users to clear conversations, start a new chat and perform other useful chat actions."
                },
                {
                    title: "Add Loading and Error States",
                    description:
                        "Display appropriate loading indicators while waiting for an AI response and show useful messages when an error occurs."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the chatbot interface work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test message sending, AI responses, conversation handling, loading states, errors and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed AI Chatbot application."
                }
            ],

            features: [
                "AI Chat Interface",
                "Send Messages",
                "AI Responses",
                "Conversation History",
                "New Chat",
                "Clear Conversation",
                "Loading State",
                "Error Handling",
                "Responsive Design"
            ],

            pages: [
                "Chat",
                "Conversation History",
                "Settings"
            ],

            expectedResult:
                "A professional and responsive AI Chatbot application where users can communicate with an AI assistant through a smooth conversational interface.",
            requirements: {
                technologies: [
                    {
                        name: "Python",
                        learn: "Python Documentation",
                        link: "https://docs.python.org/3/tutorial/"
                    },
                    {
                        name: "OpenAI API",
                        learn: "OpenAI API Documentation",
                        link: "https://platform.openai.com/docs"
                    },
                    {
                        name: "FastAPI",
                        learn: "FastAPI Documentation",
                        link: "https://fastapi.tiangolo.com/"
                    }
                ],
                prerequisites: [
                    "Python basics",
                    "Functions and modules",
                    "JSON basics",
                    "HTTP and API basics",
                    "Async programming basics"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Python"
                ]
            }
        }
    },
    {
        id: 6,
        department: "Computer Science",
        course: "IT",
        level: "Beginner",
        image: blog,
        name: "Portfolio Website",
        paragraph: "A responsive personal portfolio website to showcase skills, projects and experience",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "5 Days",
        rating: "4.6",
        views: "85",
        bg1: "bg-cyan-200",
        text1: "text-cyan-600",
        bg2: "bg-indigo-200",
        text2: "text-indigo-600",
        bg3: "bg-pink-200",
        text3: "text-pink-600",
        brief: {
            overview:
                "Build a professional Portfolio Website that showcases a developer's skills, projects, experience, education and contact information.",

            goal:
                "Create a personal online presence that clearly presents the developer's abilities, projects and professional background to recruiters and potential clients.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and reusable components."
                },
                {
                    title: "Design the Homepage",
                    description:
                        "Create an attractive hero section with the developer's name, role, short introduction and call-to-action buttons."
                },
                {
                    title: "Create About Section",
                    description:
                        "Add a short professional introduction along with education, background and career information."
                },
                {
                    title: "Showcase Skills",
                    description:
                        "Display technical skills and tools using organized categories, icons or visual indicators."
                },
                {
                    title: "Create Projects Section",
                    description:
                        "Showcase completed projects with images, descriptions, technologies used and links to live demos or source code."
                },
                {
                    title: "Add Experience and Education",
                    description:
                        "Display relevant work experience, internships, education and other professional achievements."
                },
                {
                    title: "Create Contact Section",
                    description:
                        "Allow visitors to contact the developer through a contact form and provide relevant social or professional links."
                },
                {
                    title: "Add Navigation",
                    description:
                        "Create smooth navigation between sections so visitors can easily explore the portfolio."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the complete portfolio work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test navigation, links, contact form, project interactions and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Portfolio Website."
                }
            ],

            features: [
                "Hero Section",
                "About Me",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Contact Form",
                "Social Links",
                "Resume Download",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact"
            ],

            expectedResult:
                "A professional and responsive Portfolio Website that effectively showcases a developer's skills, projects, education and professional experience.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "HTML basics",
                    "CSS basics",
                    "JavaScript fundamentals",
                    "Responsive design",
                    "DOM and event handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 7,
        department: "Computer Science",
        course: "DS",
        level: "Intermediate",
        image: task,
        name: "Expense Tracker",
        paragraph: "A web app to track daily expenses, manage spending and view expense summaries",
        Tech_1: "React",
        Tech_2: "JavaScript",
        Tech_3: "Tailwind",
        Days: "8 Days",
        rating: "4.7",
        views: "92",
        bg1: "bg-emerald-200",
        text1: "text-emerald-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-violet-200",
        text3: "text-violet-600",
        brief: {
            overview:
                "Build an Expense Tracker application that helps users record, organize and monitor their daily income and expenses.",

            goal:
                "Create a simple and user-friendly financial tracking experience where users can understand their spending habits and manage their money effectively.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and components."
                },
                {
                    title: "Design the Dashboard",
                    description:
                        "Create the main layout with balance summary, income, expenses and recent transactions."
                },
                {
                    title: "Create Transaction Form",
                    description:
                        "Build a form that allows users to enter income or expense details such as title, amount, category and date."
                },
                {
                    title: "Display Transactions",
                    description:
                        "Display all added transactions with their type, amount, category and date."
                },
                {
                    title: "Calculate Balance",
                    description:
                        "Calculate total income, total expenses and remaining balance based on the recorded transactions."
                },
                {
                    title: "Add Categories",
                    description:
                        "Allow users to organize expenses into categories such as Food, Shopping, Travel, Bills and Entertainment."
                },
                {
                    title: "Add Edit and Delete",
                    description:
                        "Allow users to edit transaction details and delete transactions when required."
                },
                {
                    title: "Add Search and Filter",
                    description:
                        "Allow users to search transactions and filter them based on type, category or date."
                },
                {
                    title: "Add Expense Insights",
                    description:
                        "Display spending summaries or simple charts to help users understand where their money is being spent."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the Expense Tracker work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test transaction creation, calculations, editing, deletion, filtering and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Expense Tracker application."
                }
            ],

            features: [
                "Income Tracking",
                "Expense Tracking",
                "Balance Calculation",
                "Transaction History",
                "Expense Categories",
                "Edit Transactions",
                "Delete Transactions",
                "Search Transactions",
                "Filter Transactions",
                "Expense Insights",
                "Responsive Design"
            ],

            pages: [
                "Dashboard",
                "Transactions",
                "Categories",
                "Reports",
                "Settings"
            ],

            expectedResult:
                "A professional and responsive Expense Tracker application that allows users to record transactions, monitor their balance and understand their spending habits.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "State management",
                    "Array and object concepts",
                    "Event handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 8,
        department: "Computer Science",
        course: "AI",
        level: "Intermediate",
        image: analytics,
        name: "AI Assistant",
        paragraph: "An intelligent assistant that can answer questions and provide useful responses",
        Tech_1: "Python",
        Tech_2: "OpenAI API",
        Tech_3: "FastAPI",
        Days: "10 Days",
        rating: "4.8",
        views: "110",
        bg1: "bg-sky-200",
        text1: "text-sky-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-blue-200",
        text3: "text-blue-600",
        brief: {
            overview:
                "Build an AI Assistant application that helps users perform everyday tasks through a conversational interface, such as answering questions, generating content and providing useful information.",

            goal:
                "Create a smart and user-friendly assistant experience where users can interact with AI naturally and access different assistant capabilities from one place.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and reusable components."
                },
                {
                    title: "Design the Assistant Interface",
                    description:
                        "Create the main interface with a sidebar, assistant header, conversation area and user input section."
                },
                {
                    title: "Create Conversation Components",
                    description:
                        "Build reusable components for displaying user messages, AI responses and conversation history."
                },
                {
                    title: "Add Message Input",
                    description:
                        "Allow users to enter prompts and send messages to the AI assistant."
                },
                {
                    title: "Connect AI Service",
                    description:
                        "Connect the application to an AI API so user prompts can be processed and useful responses can be displayed."
                },
                {
                    title: "Add Assistant Capabilities",
                    description:
                        "Provide useful capabilities such as answering questions, summarizing content, generating ideas and helping with everyday tasks."
                },
                {
                    title: "Manage Conversations",
                    description:
                        "Allow users to start new conversations, view previous conversations and continue an existing conversation."
                },
                {
                    title: "Add Loading and Error States",
                    description:
                        "Show loading feedback while the assistant is generating a response and display helpful messages when an error occurs."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the AI Assistant interface work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test message sending, AI responses, conversation handling, assistant features, loading states and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed AI Assistant application."
                }
            ],

            features: [
                "AI Chat Interface",
                "Ask Questions",
                "AI Responses",
                "Conversation History",
                "New Conversation",
                "Content Generation",
                "Text Summarization",
                "Idea Generation",
                "Loading State",
                "Error Handling",
                "Responsive Design"
            ],

            pages: [
                "Assistant",
                "Conversation History",
                "Explore",
                "Settings"
            ],

            expectedResult:
                "A professional and responsive AI Assistant application that allows users to interact with AI and access multiple useful assistant capabilities through a single interface.",
            requirements: {
                technologies: [
                    {
                        name: "Python",
                        learn: "Python Documentation",
                        link: "https://docs.python.org/3/tutorial/"
                    },
                    {
                        name: "OpenAI API",
                        learn: "OpenAI API Documentation",
                        link: "https://platform.openai.com/docs"
                    },
                    {
                        name: "FastAPI",
                        learn: "FastAPI Documentation",
                        link: "https://fastapi.tiangolo.com/"
                    }
                ],
                prerequisites: [
                    "Python basics",
                    "Functions and modules",
                    "JSON basics",
                    "HTTP and API basics",
                    "Async programming basics"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Python"
                ]
            }
        }
    },

    {
        id: 9,
        department: "Computer Science",
        course: "ML",
        level: "Advanced",
        image: e_commerce,
        name: "Prediction System",
        paragraph: "A machine learning project that analyzes data and predicts future outcomes",
        Tech_1: "Python",
        Tech_2: "Scikit-learn",
        Tech_3: "Pandas",
        Days: "15 Days",
        rating: "4.9",
        views: "134",
        bg1: "bg-rose-200",
        text1: "text-rose-600",
        bg2: "bg-teal-200",
        text2: "text-teal-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build a Prediction System that analyzes user-provided data and generates a predicted result based on the selected inputs and prediction model.",

            goal:
                "Create a simple and interactive system where users can provide relevant data, submit it for analysis and understand the predicted result clearly.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and components."
                },
                {
                    title: "Design the Prediction Interface",
                    description:
                        "Create the main layout with an introduction section, input form, prediction area and result section."
                },
                {
                    title: "Create Input Form",
                    description:
                        "Build a form that allows users to enter or select the data required for making a prediction."
                },
                {
                    title: "Validate User Input",
                    description:
                        "Validate the entered values and display helpful messages when required information is missing or invalid."
                },
                {
                    title: "Connect Prediction Model",
                    description:
                        "Connect the application to a prediction API or machine learning model that processes the submitted data."
                },
                {
                    title: "Generate Prediction",
                    description:
                        "Send the user inputs to the prediction system and receive the predicted result."
                },
                {
                    title: "Display Prediction Result",
                    description:
                        "Present the prediction clearly along with relevant information that helps users understand the result."
                },
                {
                    title: "Add Prediction History",
                    description:
                        "Store and display previous predictions so users can review their earlier results."
                },
                {
                    title: "Add Data Visualization",
                    description:
                        "Use charts or visual indicators where appropriate to make prediction results and related data easier to understand."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the Prediction System work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test input validation, prediction requests, result handling, history, errors and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Prediction System."
                }
            ],

            features: [
                "Prediction Input Form",
                "Input Validation",
                "Prediction Model Integration",
                "Prediction Result",
                "Prediction History",
                "Data Visualization",
                "Loading State",
                "Error Handling",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Prediction",
                "Prediction History",
                "About",
                "Settings"
            ],

            expectedResult:
                "A professional and responsive Prediction System that accepts user data, processes it through a prediction model and clearly displays the predicted result.",
            requirements: {
                technologies: [
                    {
                        name: "Python",
                        learn: "Python Documentation",
                        link: "https://docs.python.org/3/tutorial/"
                    },
                    {
                        name: "Scikit-learn",
                        learn: "Scikit-learn Documentation",
                        link: "https://scikit-learn.org/stable/user_guide.html"
                    },
                    {
                        name: "Pandas",
                        learn: "Pandas Documentation",
                        link: "https://pandas.pydata.org/docs/"
                    }
                ],
                prerequisites: [
                    "Python basics",
                    "Functions and modules",
                    "Pandas basics",
                    "Basic data analysis",
                    "Basic machine learning concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Python"
                ]
            }
        }
    },
    {
        id: 10,
        department: "Science",
        course: "Physics",
        level: "Beginner",
        image: e_commerce,
        name: "Physics Experiment Simulator",
        paragraph: "An interactive simulator for learning basic physics experiments and concepts",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.6",
        views: "85",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-purple-200",
        text2: "text-purple-600",
        bg3: "bg-cyan-200",
        text3: "text-cyan-600",
        brief: {
            overview:
                "Build an interactive Physics Experiment Simulator where students can perform virtual experiments, adjust experiment parameters and observe the results through animations, measurements and visualizations.",

            goal:
                "Create an interactive learning experience that helps students understand physics concepts by experimenting with different values and observing how they affect the outcome.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, folders and reusable components."
                },
                {
                    title: "Design the Experiment Interface",
                    description:
                        "Create the main layout with an experiment area, controls, measurements and results section."
                },
                {
                    title: "Create Experiment Selection",
                    description:
                        "Allow users to select different physics experiments or concepts from the available experiment list."
                },
                {
                    title: "Build Experiment Controls",
                    description:
                        "Provide controls such as sliders, input fields or buttons to change experiment parameters."
                },
                {
                    title: "Implement Physics Calculations",
                    description:
                        "Use the selected values to calculate the relevant physics quantities and update the experiment results."
                },
                {
                    title: "Create Experiment Animation",
                    description:
                        "Visually simulate the experiment so users can observe how objects or values change during the experiment."
                },
                {
                    title: "Display Measurements",
                    description:
                        "Show calculated measurements, values and units clearly while the experiment is running."
                },
                {
                    title: "Add Data Visualization",
                    description:
                        "Use graphs or charts to help users understand the relationship between different variables and experiment results."
                },
                {
                    title: "Add Reset and Replay",
                    description:
                        "Allow users to reset the experiment, change parameters and run the experiment again."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the simulator work properly across mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test experiment controls, calculations, animations, measurements, graphs and different input values."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Physics Experiment Simulator."
                }
            ],

            features: [
                "Experiment Selection",
                "Interactive Controls",
                "Physics Calculations",
                "Experiment Animation",
                "Real-Time Measurements",
                "Graphs and Charts",
                "Multiple Experiments",
                "Reset Experiment",
                "Replay Experiment",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Experiments",
                "Experiment Simulator",
                "Experiment History",
                "About"
            ],

            expectedResult:
                "A professional and interactive Physics Experiment Simulator that allows students to perform virtual experiments, change parameters and visually understand physics concepts through simulations and data.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "HTML basics",
                    "CSS basics",
                    "JavaScript fundamentals",
                    "DOM and event handling",
                    "Basic mathematical calculations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 11,
        department: "Science",
        course: "Chemistry",
        level: "Intermediate",
        image: e_commerce,
        name: "Chemistry Lab",
        paragraph: "A virtual chemistry lab for exploring chemical reactions and experiments",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "10 Days",
        rating: "4.7",
        views: "102",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview:
                "Build an interactive Chemistry Lab where users can perform virtual chemistry experiments, mix substances, observe reactions and understand basic chemical concepts safely.",

            goal:
                "Create a virtual laboratory experience that helps students learn chemistry through interactive experiments and visual feedback.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and folders."
                },
                {
                    title: "Design the Lab Interface",
                    description:
                        "Create the main laboratory layout with experiment area, chemicals, equipment and information panels."
                },
                {
                    title: "Create Experiment Selection",
                    description:
                        "Allow users to choose different chemistry experiments from the available experiment list."
                },
                {
                    title: "Add Laboratory Equipment",
                    description:
                        "Add virtual equipment such as beakers, test tubes, flasks, measuring cylinders and droppers."
                },
                {
                    title: "Add Chemicals",
                    description:
                        "Display available chemicals with their names, properties and required quantities."
                },
                {
                    title: "Build Experiment Controls",
                    description:
                        "Allow users to select chemicals, adjust quantities and perform actions such as mixing, heating and measuring."
                },
                {
                    title: "Implement Chemical Reactions",
                    description:
                        "Create the required reaction logic and show appropriate changes when compatible chemicals are combined."
                },
                {
                    title: "Add Visual Effects",
                    description:
                        "Show reaction effects such as colour changes, bubbles, precipitates, temperature changes and other visual feedback."
                },
                {
                    title: "Show Experiment Results",
                    description:
                        "Display the reaction result, observations and important information after completing an experiment."
                },
                {
                    title: "Add Safety Information",
                    description:
                        "Display basic laboratory safety instructions and warnings for chemicals and experiments."
                },
                {
                    title: "Add Reset and Replay",
                    description:
                        "Allow users to reset the laboratory and perform the experiment again from the beginning."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the virtual laboratory work properly on desktop, tablet and mobile screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test chemical selection, experiment actions, reaction logic, results, reset functionality and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Chemistry Lab project."
                }
            ],

            features: [
                "Experiment Selection",
                "Virtual Laboratory Equipment",
                "Chemical Selection",
                "Chemical Quantity Control",
                "Chemical Mixing",
                "Chemical Reactions",
                "Visual Reaction Effects",
                "Experiment Results",
                "Safety Instructions",
                "Reset Experiment",
                "Replay Experiment",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Chemistry Lab",
                "Experiments",
                "Experiment Details",
                "Results",
                "Safety Guide"
            ],

            expectedResult:
                "A fully interactive virtual Chemistry Lab where users can safely perform chemistry experiments, observe reactions and understand the results through visual and interactive learning.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 12,
        department: "Science",
        course: "Botany",
        level: "Intermediate",
        image: e_commerce,
        name: "Biology Explorer",
        paragraph: "An interactive learning platform to explore cells, organs and biological concepts",
        Tech_1: "React",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "8 Days",
        rating: "4.5",
        views: "76",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-pink-200",
        text2: "text-pink-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build an interactive Biology Explorer where users can explore human anatomy, cells, organs, organisms and biological concepts through visual and interactive learning content.",

            goal:
                "Create an engaging biology learning experience that helps students understand biological structures and processes through exploration and visual information.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and folders."
                },
                {
                    title: "Design the Explorer Interface",
                    description:
                        "Create the main layout with topic categories, exploration area and information panels."
                },
                {
                    title: "Create Biology Categories",
                    description:
                        "Organize biology topics into categories such as Human Body, Cells, Plants, Animals and Microorganisms."
                },
                {
                    title: "Add Topic Selection",
                    description:
                        "Allow users to select a biology topic and explore its related information."
                },
                {
                    title: "Build Interactive Diagrams",
                    description:
                        "Create visual diagrams for biological structures such as cells, organs and body systems."
                },
                {
                    title: "Add Structure Information",
                    description:
                        "Display the name, function and important information for each selected biological structure."
                },
                {
                    title: "Add Biological Processes",
                    description:
                        "Explain important processes such as photosynthesis, respiration, digestion and cell division through visual content."
                },
                {
                    title: "Add Search and Filters",
                    description:
                        "Allow users to search biology topics and filter content by category or difficulty level."
                },
                {
                    title: "Add Learning Interactions",
                    description:
                        "Add interactive elements such as clickable structures, information cards, quizzes and exploration controls."
                },
                {
                    title: "Add Quiz Section",
                    description:
                        "Create biology-based questions that allow users to test their understanding of the explored topics."
                },
                {
                    title: "Show Learning Results",
                    description:
                        "Display quiz scores, correct answers and learning progress after completing a quiz."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the Biology Explorer work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test topic navigation, interactive diagrams, search, filters, quizzes and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Biology Explorer project."
                }
            ],

            features: [
                "Biology Topic Explorer",
                "Human Anatomy",
                "Cell Explorer",
                "Plants and Animals",
                "Microorganisms",
                "Interactive Diagrams",
                "Structure Information",
                "Biological Processes",
                "Search Topics",
                "Category Filters",
                "Interactive Learning",
                "Biology Quiz",
                "Quiz Results",
                "Learning Progress",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Explore",
                "Human Anatomy",
                "Cell Explorer",
                "Biology Topics",
                "Topic Details",
                "Quiz",
                "Results"
            ],

            expectedResult:
                "A fully interactive Biology Explorer where students can explore biological structures, understand important processes and test their knowledge through interactive learning and quizzes.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 13,
        department: "Science",
        course: "Maths",
        level: "Beginner",
        image: e_commerce,
        name: "Scientific Calculator",
        paragraph: "A scientific calculator for performing mathematical and scientific calculations",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "5 Days",
        rating: "4.8",
        views: "135",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build a powerful scientific calculator that allows users to perform basic arithmetic, advanced mathematical calculations, trigonometric functions, logarithms, powers and other scientific operations.",

            goal:
                "Create an accurate and user-friendly scientific calculator that provides a wide range of mathematical functions with a clear and responsive interface.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and folders."
                },
                {
                    title: "Design the Calculator Interface",
                    description:
                        "Create the calculator layout with display area, number buttons, operators and scientific function buttons."
                },
                {
                    title: "Build Number and Operator Buttons",
                    description:
                        "Add buttons for numbers, addition, subtraction, multiplication, division, decimal values and other basic operators."
                },
                {
                    title: "Create Calculator Display",
                    description:
                        "Display the current input, mathematical expression and calculated result clearly."
                },
                {
                    title: "Implement Basic Calculations",
                    description:
                        "Implement arithmetic operations such as addition, subtraction, multiplication and division."
                },
                {
                    title: "Add Scientific Functions",
                    description:
                        "Add functions such as square root, powers, percentages, factorials and inverse calculations."
                },
                {
                    title: "Add Trigonometric Functions",
                    description:
                        "Implement sin, cos, tan and their related functions with appropriate calculation modes."
                },
                {
                    title: "Add Logarithmic Functions",
                    description:
                        "Implement logarithm, natural logarithm and exponential calculations."
                },
                {
                    title: "Add Parentheses and Expression Handling",
                    description:
                        "Allow users to create and calculate complex mathematical expressions using parentheses and operator precedence."
                },
                {
                    title: "Add Calculation History",
                    description:
                        "Store previous calculations and allow users to view or reuse their recent expressions and results."
                },
                {
                    title: "Add Memory Functions",
                    description:
                        "Add calculator memory operations such as memory clear, memory recall, memory add and memory subtract."
                },
                {
                    title: "Handle Errors",
                    description:
                        "Display appropriate error messages for invalid expressions, division by zero and unsupported calculations."
                },
                {
                    title: "Add Keyboard Support",
                    description:
                        "Allow users to enter numbers and common calculator operations using their keyboard."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the scientific calculator work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test arithmetic operations, scientific functions, expressions, history, memory functions, keyboard input and error handling."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Scientific Calculator project."
                }
            ],

            features: [
                "Basic Arithmetic",
                "Scientific Calculations",
                "Trigonometric Functions",
                "Logarithmic Functions",
                "Powers and Roots",
                "Factorial",
                "Percentage",
                "Parentheses",
                "Expression Evaluation",
                "Calculation History",
                "Memory Functions",
                "Keyboard Support",
                "Error Handling",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Calculator",
                "Scientific Functions",
                "Calculation History"
            ],

            expectedResult:
                "A fully functional and responsive scientific calculator capable of handling basic and advanced mathematical calculations accurately with history, memory, keyboard support and proper error handling.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "HTML basics",
                    "CSS basics",
                    "JavaScript fundamentals",
                    "Functions and event handling",
                    "Basic mathematical operations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 14,
        department: "Science",
        course: "Zoology",
        level: "Advanced",
        image: e_commerce,
        name: "Scientific Data Analysis",
        paragraph: "A data analysis dashboard for visualizing and interpreting scientific data",
        Tech_1: "Python",
        Tech_2: "Pandas",
        Tech_3: "Chart.js",
        Days: "12 Days",
        rating: "4.9",
        views: "160",
        bg1: "bg-indigo-200",
        text1: "text-indigo-600",
        bg2: "bg-green-200",
        text2: "text-green-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview:
                "Build a scientific data analysis platform where users can upload, organize, analyze and visualize scientific datasets to identify patterns, trends and meaningful insights.",

            goal:
                "Create an interactive data analysis tool that helps students and researchers understand scientific data through calculations, statistics, charts and visualizations.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and folders."
                },
                {
                    title: "Design the Analysis Interface",
                    description:
                        "Create the main layout with dataset upload, data table, analysis tools and visualization areas."
                },
                {
                    title: "Add Dataset Upload",
                    description:
                        "Allow users to upload scientific datasets in supported formats and load the data into the application."
                },
                {
                    title: "Display Dataset",
                    description:
                        "Display the uploaded data in a structured table with columns, rows and basic dataset information."
                },
                {
                    title: "Data Cleaning",
                    description:
                        "Identify missing, duplicate or invalid values and provide options to clean or prepare the dataset."
                },
                {
                    title: "Add Statistical Analysis",
                    description:
                        "Provide calculations such as mean, median, mode, minimum, maximum, range and standard deviation."
                },
                {
                    title: "Add Data Filtering",
                    description:
                        "Allow users to filter and sort scientific data based on selected values, ranges or conditions."
                },
                {
                    title: "Create Data Visualizations",
                    description:
                        "Create charts such as line charts, bar charts, scatter plots and histograms to visualize the dataset."
                },
                {
                    title: "Add Trend Analysis",
                    description:
                        "Help users identify patterns, relationships and trends within the scientific data."
                },
                {
                    title: "Compare Data",
                    description:
                        "Allow users to compare different datasets, variables or selected data ranges using tables and charts."
                },
                {
                    title: "Show Analysis Summary",
                    description:
                        "Display important statistical results, observations and key insights generated from the analysis."
                },
                {
                    title: "Export Results",
                    description:
                        "Allow users to export analyzed data, summaries or visualizations for further use."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the data analysis platform work properly on desktop, tablet and mobile screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test dataset uploading, data processing, calculations, filtering, charts, comparisons and export functionality."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Scientific Data Analysis project."
                }
            ],

            features: [
                "Dataset Upload",
                "Data Table",
                "Data Cleaning",
                "Statistical Analysis",
                "Mean and Median",
                "Standard Deviation",
                "Data Filtering",
                "Data Sorting",
                "Line Charts",
                "Bar Charts",
                "Scatter Plots",
                "Histograms",
                "Trend Analysis",
                "Data Comparison",
                "Analysis Summary",
                "Export Results",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Data Analysis",
                "Dataset",
                "Statistics",
                "Visualizations",
                "Data Comparison",
                "Analysis Results"
            ],

            expectedResult:
                "A fully interactive scientific data analysis platform where users can upload datasets, clean and analyze data, perform statistical calculations, visualize patterns and generate meaningful scientific insights.",
            requirements: {
                technologies: [
                    {
                        name: "Python",
                        learn: "Python Documentation",
                        link: "https://docs.python.org/3/tutorial/"
                    },
                    {
                        name: "Pandas",
                        learn: "Pandas Documentation",
                        link: "https://pandas.pydata.org/docs/"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "Python basics",
                    "Pandas basics",
                    "Data analysis basics",
                    "Arrays and data structures",
                    "Basic statistics"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Python"
                ]
            }
        }
    },
    {
        id: 15,
        department: "Science",
        course: "Physics",
        level: "Intermediate",
        image: e_commerce,
        name: "Motion Analyzer",
        paragraph: "An interactive project for analyzing motion, speed and acceleration",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "8 Days",
        rating: "4.7",
        views: "90",
        bg1: "bg-sky-200",
        text1: "text-sky-600",
        bg2: "bg-indigo-200",
        text2: "text-indigo-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build an interactive Motion Analyzer that helps users study the motion of objects by analyzing position, velocity, acceleration, distance and time through data and visualizations.",

            goal:
                "Create a physics-based analysis tool that allows users to understand and analyze motion using measurements, calculations, graphs and interactive simulations.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and folders."
                },
                {
                    title: "Design the Analyzer Interface",
                    description:
                        "Create the main layout with motion controls, data input, analysis results and visualization areas."
                },
                {
                    title: "Add Motion Input",
                    description:
                        "Allow users to enter or generate motion data such as time, position, velocity and acceleration."
                },
                {
                    title: "Create Motion Simulation",
                    description:
                        "Create an animated object that moves according to the selected motion values and conditions."
                },
                {
                    title: "Calculate Motion Values",
                    description:
                        "Calculate distance, displacement, velocity and acceleration from the available motion data."
                },
                {
                    title: "Build Position-Time Graph",
                    description:
                        "Display a position-time graph to help users understand how the object's position changes over time."
                },
                {
                    title: "Build Velocity-Time Graph",
                    description:
                        "Display a velocity-time graph to visualize changes in velocity during the motion."
                },
                {
                    title: "Build Acceleration-Time Graph",
                    description:
                        "Display an acceleration-time graph to show how acceleration changes throughout the motion."
                },
                {
                    title: "Add Motion Controls",
                    description:
                        "Allow users to adjust starting position, velocity, acceleration, direction and simulation time."
                },
                {
                    title: "Add Data Analysis",
                    description:
                        "Analyze the generated motion data and identify important values, changes and motion patterns."
                },
                {
                    title: "Add Multiple Motion Types",
                    description:
                        "Support different motion cases such as uniform motion, accelerated motion and free-fall motion."
                },
                {
                    title: "Add Measurements and Results",
                    description:
                        "Display calculated measurements and important motion results clearly alongside the simulation."
                },
                {
                    title: "Add Reset and Replay",
                    description:
                        "Allow users to reset the motion settings and replay the simulation with different values."
                },
                {
                    title: "Make It Responsive",
                    description:
                        "Make the Motion Analyzer work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test motion calculations, simulation behavior, graphs, controls, data analysis and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Motion Analyzer project."
                }
            ],

            features: [
                "Motion Simulation",
                "Position Tracking",
                "Velocity Calculation",
                "Acceleration Calculation",
                "Distance and Displacement",
                "Motion Controls",
                "Position-Time Graph",
                "Velocity-Time Graph",
                "Acceleration-Time Graph",
                "Motion Data Analysis",
                "Uniform Motion",
                "Accelerated Motion",
                "Free-Fall Motion",
                "Measurements and Results",
                "Reset and Replay",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Motion Analyzer",
                "Motion Simulation",
                "Motion Data",
                "Graphs",
                "Analysis Results"
            ],

            expectedResult:
                "A fully interactive Motion Analyzer where users can simulate different types of motion, analyze position, velocity and acceleration, calculate motion values and understand the results through interactive graphs and visualizations.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "HTML basics",
                    "CSS basics",
                    "JavaScript fundamentals",
                    "DOM and event handling",
                    "Basic physics calculations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 16,
        department: "Science",
        course: "Chemistry",
        level: "Beginner",
        image: e_commerce,
        name: "Periodic Table Explorer",
        paragraph: "An interactive periodic table for exploring elements and their properties",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "6 Days",
        rating: "4.6",
        views: "82",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-orange-200",
        text3: "text-orange-600",
        brief: {
            overview:
                "Build an interactive Periodic Table Explorer where users can explore chemical elements and view their properties, categories and atomic information.",

            goal:
                "Create an educational and interactive periodic table that makes it easy to search, explore and understand the properties of different chemical elements.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and element data."
                },
                {
                    title: "Build Periodic Table Layout",
                    description:
                        "Create the complete periodic table layout with elements arranged according to their atomic numbers and groups."
                },
                {
                    title: "Create Element Cards",
                    description:
                        "Design reusable element cards showing atomic number, chemical symbol and element name."
                },
                {
                    title: "Add Element Categories",
                    description:
                        "Group elements into categories such as metals, nonmetals, noble gases, halogens and metalloids."
                },
                {
                    title: "Add Element Details",
                    description:
                        "Create a detailed view showing properties such as atomic mass, electron configuration, group, period and category."
                },
                {
                    title: "Add Search",
                    description:
                        "Allow users to search for an element using its name, symbol or atomic number."
                },
                {
                    title: "Add Filters",
                    description:
                        "Allow users to filter elements based on categories, groups and periods."
                },
                {
                    title: "Add Interactive Elements",
                    description:
                        "Make element cards interactive so users can select an element and explore its information."
                },
                {
                    title: "Add Visual Information",
                    description:
                        "Display useful visual information such as category colors, atomic structure or other educational indicators."
                },
                {
                    title: "Responsive Design",
                    description:
                        "Make the periodic table and element details work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test element selection, search, filters, details, navigation and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Periodic Table Explorer project."
                }
            ],

            features: [
                "Interactive Periodic Table",
                "Element Search",
                "Element Details",
                "Atomic Number",
                "Chemical Symbol",
                "Atomic Mass",
                "Element Categories",
                "Group and Period Information",
                "Category Filtering",
                "Responsive Design"
            ],

            pages: [
                "Periodic Table",
                "Element Details"
            ],

            expectedResult:
                "A responsive and interactive periodic table application where users can easily search, filter and explore detailed information about chemical elements.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "HTML basics",
                    "CSS basics",
                    "JavaScript fundamentals",
                    "Array and object concepts",
                    "Search and filter logic"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 17,
        department: "Science",
        course: "Botany",
        level: "Advanced",
        image: e_commerce,
        name: "Plant Growth Tracker",
        paragraph: "A dashboard for tracking plant growth and analyzing environmental conditions",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "Chart.js",
        Days: "10 Days",
        rating: "4.8",
        views: "115",
        bg1: "bg-emerald-200",
        text1: "text-emerald-600",
        bg2: "bg-lime-200",
        text2: "text-lime-600",
        bg3: "bg-green-200",
        text3: "text-green-600",
        brief: {
            overview:
                "Build a Plant Growth Tracker where users can add plants, record their growth progress and monitor important care activities over time.",

            goal:
                "Create a simple plant management application that helps users track plant growth, watering, sunlight, health and overall progress.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and plant data."
                },
                {
                    title: "Build Dashboard",
                    description:
                        "Create a dashboard showing the user's plants, growth progress and upcoming care activities."
                },
                {
                    title: "Add Plant",
                    description:
                        "Create a form that allows users to add a plant with its name, species, image and planting date."
                },
                {
                    title: "Create Plant Cards",
                    description:
                        "Display each plant using reusable cards with plant image, name, growth status and important information."
                },
                {
                    title: "Track Growth",
                    description:
                        "Allow users to record plant height, number of leaves and other growth measurements over time."
                },
                {
                    title: "Track Watering",
                    description:
                        "Allow users to record watering activities and display the next recommended watering date."
                },
                {
                    title: "Track Sunlight",
                    description:
                        "Record the plant's sunlight requirements and allow users to monitor whether it receives enough sunlight."
                },
                {
                    title: "Track Plant Health",
                    description:
                        "Allow users to record plant health conditions and identify common problems such as yellow leaves, pests or slow growth."
                },
                {
                    title: "Growth History",
                    description:
                        "Display previous growth records so users can compare the plant's progress over time."
                },
                {
                    title: "Add Progress Visualization",
                    description:
                        "Use charts or progress indicators to visually show plant growth and care activity."
                },
                {
                    title: "Search and Filter",
                    description:
                        "Allow users to search plants and filter them based on plant type, health status or care requirements."
                },
                {
                    title: "Responsive Design",
                    description:
                        "Make the plant tracker work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test adding plants, updating growth records, watering information, health status, search and filters."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Plant Growth Tracker application."
                }
            ],

            features: [
                "Add Plants",
                "Plant Profiles",
                "Growth Tracking",
                "Growth History",
                "Watering Tracker",
                "Sunlight Tracking",
                "Plant Health Monitoring",
                "Growth Progress",
                "Search Plants",
                "Filter Plants",
                "Responsive Design"
            ],

            pages: [
                "Dashboard",
                "My Plants",
                "Plant Details",
                "Growth History"
            ],

            expectedResult:
                "A responsive plant management application where users can add plants, track their growth and monitor watering, sunlight and overall plant health.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic data handling",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 18,
        department: "Science",
        course: "Maths",
        level: "Intermediate",
        image: e_commerce,
        name: "Math Problem Solver",
        paragraph: "An interactive application for solving and practicing mathematical problems",
        Tech_1: "React",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "105",
        bg1: "bg-violet-200",
        text1: "text-violet-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-pink-200",
        text3: "text-pink-600",
        brief: {
            overview:
                "Build an interactive Math Problem Solver where users can enter mathematical problems and receive step-by-step solutions with clear explanations.",

            goal:
                "Create an educational math application that helps users understand how a problem is solved instead of only showing the final answer.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and mathematical logic."
                },
                {
                    title: "Build Solver Interface",
                    description:
                        "Create the main interface with a problem input area, solve button and solution display section."
                },
                {
                    title: "Add Problem Input",
                    description:
                        "Allow users to enter mathematical expressions, equations and word-based problems."
                },
                {
                    title: "Handle Basic Arithmetic",
                    description:
                        "Support addition, subtraction, multiplication, division and other basic arithmetic operations."
                },
                {
                    title: "Add Algebra Solver",
                    description:
                        "Support algebraic expressions and equations including variables, simplification and solving for unknown values."
                },
                {
                    title: "Add Geometry Problems",
                    description:
                        "Support common geometry calculations such as area, perimeter, volume and basic shape-related problems."
                },
                {
                    title: "Generate Step-by-Step Solutions",
                    description:
                        "Break each problem into understandable steps and explain how the final answer is calculated."
                },
                {
                    title: "Display Final Answer",
                    description:
                        "Clearly display the final result along with the complete solution and relevant mathematical formulas."
                },
                {
                    title: "Add Problem History",
                    description:
                        "Save previously solved problems so users can review their questions and solutions later."
                },
                {
                    title: "Add Example Problems",
                    description:
                        "Provide example problems for different mathematical topics so users can practice using the solver."
                },
                {
                    title: "Handle Errors",
                    description:
                        "Detect invalid or unsupported mathematical input and display helpful error messages."
                },
                {
                    title: "Responsive Design",
                    description:
                        "Make the math solver work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test different mathematical problems, calculations, solution steps, errors and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Math Problem Solver application."
                }
            ],

            features: [
                "Math Problem Input",
                "Step-by-Step Solutions",
                "Basic Arithmetic",
                "Algebra Solver",
                "Geometry Calculations",
                "Mathematical Formulas",
                "Final Answer Display",
                "Problem History",
                "Example Problems",
                "Error Handling",
                "Responsive Design"
            ],

            pages: [
                "Math Solver",
                "Problem History",
                "Practice Problems"
            ],

            expectedResult:
                "A responsive educational math application that solves supported mathematical problems and explains each solution step clearly.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic mathematical operations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 19,
        department: "Arts",
        course: "Tamil",
        level: "Beginner",
        image: e_commerce,
        name: "Tamil Literature Explorer",
        paragraph: "An interactive platform to explore Tamil literature, poems and famous works",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "6 Days",
        rating: "4.6",
        views: "82",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-red-200",
        text2: "text-red-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview:
                "Build an interactive Tamil Literature Explorer where users can discover Tamil literary works, authors, historical periods, genres and important literary information.",

            goal:
                "Create an educational platform that makes Tamil literature easy to explore by organizing literary works, authors and historical information in an interactive way.",

            steps: [
                {
                    title: "Project Setup",
                    description:
                        "Create the project structure and set up the required technologies, components and Tamil literature data."
                },
                {
                    title: "Build Explorer Interface",
                    description:
                        "Create the main interface with search, filters, literature categories and featured literary works."
                },
                {
                    title: "Add Literary Periods",
                    description:
                        "Organize literature into major periods such as Sangam, Post-Sangam, Medieval and Modern Tamil literature."
                },
                {
                    title: "Create Literature Cards",
                    description:
                        "Create reusable cards displaying the title, author, genre, period and short description of each literary work."
                },
                {
                    title: "Add Author Information",
                    description:
                        "Create author profiles containing their name, period, important works and brief biography."
                },
                {
                    title: "Add Literature Details",
                    description:
                        "Create a detailed view where users can explore the background, genre, themes and importance of a selected literary work."
                },
                {
                    title: "Add Genres",
                    description:
                        "Organize works into genres such as poetry, epic, devotional literature, novels, short stories and drama."
                },
                {
                    title: "Add Search",
                    description:
                        "Allow users to search for literary works, authors, genres and other literature-related information."
                },
                {
                    title: "Add Filters",
                    description:
                        "Allow users to filter literature based on period, genre, author and other categories."
                },
                {
                    title: "Add Literary Timeline",
                    description:
                        "Create a visual timeline showing important periods, authors and developments in Tamil literature."
                },
                {
                    title: "Add Favorites",
                    description:
                        "Allow users to save interesting literary works and authors for quick access later."
                },
                {
                    title: "Responsive Design",
                    description:
                        "Make the Tamil Literature Explorer work properly on mobile, tablet and desktop screens."
                },
                {
                    title: "Testing",
                    description:
                        "Test search, filters, literature details, author profiles, favorites and responsive layouts."
                },
                {
                    title: "Deployment",
                    description:
                        "Build and deploy the completed Tamil Literature Explorer application."
                }
            ],

            features: [
                "Literature Explorer",
                "Tamil Literary Works",
                "Author Profiles",
                "Literary Periods",
                "Literature Genres",
                "Literature Details",
                "Search Literature",
                "Filter Literature",
                "Literary Timeline",
                "Favorites",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Literature Explorer",
                "Literature Details",
                "Authors",
                "Author Details",
                "Literary Timeline"
            ],

            expectedResult:
                "A responsive and interactive Tamil Literature Explorer where users can discover Tamil literary works, authors, genres and historical periods in an organized and educational way.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "Array and object concepts",
                    "Search and filter logic"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 20,
        department: "Arts",
        course: "Tamil",
        level: "Intermediate",
        image: e_commerce,
        name: "Tamil Quiz App",
        paragraph: "A quiz application to practice Tamil grammar, literature and general knowledge",
        Tech_1: "React",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "96",
        bg1: "bg-rose-200",
        text1: "text-rose-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-pink-200",
        text3: "text-pink-600",
        brief: {
            overview:
                "Build an interactive Tamil Quiz App where users can test their knowledge through multiple-choice questions from different Tamil-related topics.",

            goal:
                "Create an engaging quiz platform that helps users learn and improve their Tamil language and general knowledge through quizzes.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and quiz data." },
                { title: "Build Quiz Interface", description: "Create the main quiz layout with question, answer options, progress and navigation controls." },
                { title: "Add Quiz Categories", description: "Organize questions into categories such as Tamil Grammar, Literature, History, Vocabulary and General Knowledge." },
                { title: "Create Question Cards", description: "Display each question with multiple-choice answer options using reusable components." },
                { title: "Handle Answer Selection", description: "Allow users to select an answer and provide appropriate visual feedback." },
                { title: "Add Quiz Navigation", description: "Allow users to move between questions and track their current question number." },
                { title: "Calculate Score", description: "Calculate the user's score based on the answers selected during the quiz." },
                { title: "Add Timer", description: "Add an optional countdown timer to make quizzes more interactive and challenging." },
                { title: "Create Result Page", description: "Display the final score, correct answers, incorrect answers and overall performance." },
                { title: "Add Quiz History", description: "Allow users to view their previous quiz attempts and scores." },
                { title: "Add Difficulty Levels", description: "Provide different difficulty levels such as Easy, Medium and Hard." },
                { title: "Responsive Design", description: "Make the quiz application work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test questions, answer selection, scoring, timer, navigation, results and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Tamil Quiz application." }
            ],

            features: [
                "Tamil Quiz Questions",
                "Quiz Categories",
                "Multiple Choice Questions",
                "Answer Selection",
                "Score Calculation",
                "Quiz Timer",
                "Difficulty Levels",
                "Quiz Results",
                "Quiz History",
                "Performance Tracking",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Quiz Categories",
                "Quiz",
                "Results",
                "Quiz History"
            ],

            expectedResult:
                "A responsive and interactive Tamil Quiz App where users can select a category and difficulty level, answer questions, complete quizzes and view their scores and performance.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 21,
        department: "Arts",
        course: "English",
        level: "Beginner",
        image: e_commerce,
        name: "English Learning App",
        paragraph: "A simple platform to improve English vocabulary, grammar and communication skills",
        Tech_1: "HTML",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "8 Days",
        rating: "4.8",
        views: "120",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-indigo-200",
        text2: "text-indigo-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview:
                "Build an interactive English Learning App where users can improve their English through lessons, vocabulary, grammar, speaking practice and quizzes.",

            goal:
                "Create an engaging learning platform that helps users improve their English skills through structured lessons, practice activities and progress tracking.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and English learning data." },
                { title: "Build Learning Dashboard", description: "Create a dashboard showing lessons, learning progress, daily goals and recommended activities." },
                { title: "Add English Lessons", description: "Create lessons covering vocabulary, grammar, sentence formation and common English usage." },
                { title: "Add Vocabulary Practice", description: "Allow users to learn new words with meanings, examples, pronunciation and practice activities." },
                { title: "Add Grammar Lessons", description: "Create grammar topics with simple explanations, examples and practice questions." },
                { title: "Add Speaking Practice", description: "Create speaking activities where users can practice common English sentences and conversations." },
                { title: "Add Listening Practice", description: "Provide listening exercises with audio-based questions to improve English comprehension." },
                { title: "Create Quiz System", description: "Create multiple-choice and interactive quizzes to test vocabulary, grammar and general English knowledge." },
                { title: "Add Difficulty Levels", description: "Organize lessons and practice activities into Beginner, Intermediate and Advanced levels." },
                { title: "Track Learning Progress", description: "Track completed lessons, quiz scores, vocabulary learned and overall learning progress." },
                { title: "Add Daily Practice", description: "Provide daily English activities and learning goals to encourage consistent practice." },
                { title: "Add Search and Filters", description: "Allow users to search lessons and filter content based on topic, skill and difficulty level." },
                { title: "Responsive Design", description: "Make the English Learning App work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test lessons, quizzes, vocabulary, progress tracking, navigation and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed English Learning App." }
            ],

            features: [
                "English Lessons",
                "Vocabulary Practice",
                "Grammar Lessons",
                "Speaking Practice",
                "Listening Practice",
                "English Quizzes",
                "Difficulty Levels",
                "Daily Practice",
                "Progress Tracking",
                "Learning Goals",
                "Search and Filters",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Learning Dashboard",
                "Lessons",
                "Vocabulary",
                "Grammar",
                "Speaking Practice",
                "Listening Practice",
                "Quiz",
                "Progress"
            ],

            expectedResult:
                "A responsive and interactive English Learning App where users can learn English through lessons, practice vocabulary and grammar, improve speaking and listening skills, complete quizzes and track their learning progress.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "JavaScript fundamentals",
                    "DOM and event handling",
                    "Array and object concepts",
                    "Basic responsive design"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 22,
        department: "Arts",
        course: "English",
        level: "Intermediate",
        image: e_commerce,
        name: "Vocabulary Builder",
        paragraph: "An interactive application for learning and practicing new English words",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "6 Days",
        rating: "4.6",
        views: "88",
        bg1: "bg-cyan-200",
        text1: "text-cyan-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-violet-200",
        text3: "text-violet-600",
        brief: {
            overview:
                "Build an interactive Vocabulary Builder where users can learn new English words, understand their meanings and practice them through different activities.",

            goal:
                "Create a simple and engaging vocabulary learning platform that helps users remember new words and improve their everyday English vocabulary.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and vocabulary data." },
                { title: "Build Vocabulary Dashboard", description: "Create a dashboard showing learned words, daily vocabulary goals and recommended words." },
                { title: "Create Word Cards", description: "Display reusable word cards with the word, meaning, pronunciation, example sentence and category." },
                { title: "Add Word Details", description: "Create a detailed view showing pronunciation, meanings, synonyms, antonyms and example sentences." },
                { title: "Add Vocabulary Categories", description: "Organize words into categories such as Daily Use, Education, Work, Travel, Technology and Emotions." },
                { title: "Add Difficulty Levels", description: "Organize vocabulary into Beginner, Intermediate and Advanced levels." },
                { title: "Add Search", description: "Allow users to search for words using the word, meaning or category." },
                { title: "Add Favorites", description: "Allow users to save important or difficult words for quick revision later." },
                { title: "Add Practice Activities", description: "Create activities such as matching words with meanings, fill-in-the-blanks and multiple-choice questions." },
                { title: "Add Flashcards", description: "Create interactive flashcards that allow users to review words and reveal their meanings." },
                { title: "Track Progress", description: "Track learned words, practiced words, quiz scores and overall vocabulary progress." },
                { title: "Add Daily Vocabulary", description: "Show a new set of words each day to encourage consistent vocabulary practice." },
                { title: "Responsive Design", description: "Make the Vocabulary Builder work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test word search, flashcards, practice activities, favorites, progress tracking and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Vocabulary Builder application." }
            ],

            features: [
                "Vocabulary Words",
                "Word Meanings",
                "Pronunciation",
                "Example Sentences",
                "Synonyms and Antonyms",
                "Vocabulary Categories",
                "Difficulty Levels",
                "Search Words",
                "Favorite Words",
                "Flashcards",
                "Practice Activities",
                "Daily Vocabulary",
                "Progress Tracking",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Vocabulary Dashboard",
                "Vocabulary",
                "Word Details",
                "Flashcards",
                "Practice",
                "Favorites",
                "Progress"
            ],

            expectedResult:
                "A responsive and interactive Vocabulary Builder where users can discover new English words, learn their meanings, practice them through flashcards and activities, save favorite words and track their vocabulary progress.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 23,
        department: "Arts",
        course: "History",
        level: "Beginner",
        image: e_commerce,
        name: "History Timeline",
        paragraph: "An interactive timeline to explore important historical events and personalities",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "91",
        bg1: "bg-amber-200",
        text1: "text-amber-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-orange-200",
        text3: "text-orange-600",
        brief: {
            overview:
                "Build an interactive History Timeline where users can explore important historical events, people, civilizations and major developments in chronological order.",

            goal:
                "Create an educational timeline that makes history easy to understand by presenting important events with dates, descriptions, images and related information.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and historical data." },
                { title: "Build Timeline Layout", description: "Create a chronological timeline interface where historical events are arranged from earliest to latest." },
                { title: "Create Event Cards", description: "Create reusable cards displaying the event title, date, period, image and short description." },
                { title: "Add Historical Periods", description: "Organize events into periods such as Ancient, Medieval, Early Modern and Modern history." },
                { title: "Add Event Details", description: "Create a detailed view showing the complete description, date, location, important people and significance of a selected event." },
                { title: "Add Historical Categories", description: "Organize events into categories such as Wars, Inventions, Discoveries, Empires, Revolutions and Culture." },
                { title: "Add Search", description: "Allow users to search for historical events, people, places and topics." },
                { title: "Add Filters", description: "Allow users to filter events based on period, category, year and region." },
                { title: "Add Timeline Navigation", description: "Allow users to navigate through different periods and quickly jump to a specific point in history." },
                { title: "Add Important People", description: "Connect major historical figures with the events and periods related to them." },
                { title: "Add Visual Information", description: "Display relevant images, maps or visual indicators to make historical events easier to understand." },
                { title: "Add Favorites", description: "Allow users to save interesting historical events for quick access later." },
                { title: "Responsive Design", description: "Make the History Timeline work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test timeline navigation, search, filters, event details, favorites and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed History Timeline application." }
            ],

            features: [
                "Interactive Timeline",
                "Historical Events",
                "Event Details",
                "Historical Periods",
                "Event Categories",
                "Important People",
                "Search History",
                "Filter Events",
                "Timeline Navigation",
                "Historical Images",
                "Favorites",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "History Timeline",
                "Event Details",
                "Historical Periods",
                "Important People",
                "Person Details"
            ],

            expectedResult:
                "A responsive and interactive History Timeline where users can explore historical events chronologically, search and filter topics, view detailed information about events and people, and understand major developments across different periods of history.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "Array and object concepts",
                    "DOM and event handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 24,
        department: "Arts",
        course: "History",
        level: "Advanced",
        image: e_commerce,
        name: "Historical Map Explorer",
        paragraph: "A visual application for exploring historical places, regions and major events",
        Tech_1: "React",
        Tech_2: "JavaScript",
        Tech_3: "Leaflet",
        Days: "10 Days",
        rating: "4.8",
        views: "105",
        bg1: "bg-stone-200",
        text1: "text-stone-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-amber-200",
        text3: "text-amber-600",
        brief: {
            overview:
                "Build an interactive Historical Map Explorer where users can explore important historical places, events, empires and territorial changes through an interactive map.",

            goal:
                "Create an educational map-based platform that helps users understand history by connecting historical events, locations and geographical changes.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, map components and historical location data." },
                { title: "Build Map Interface", description: "Create the main interactive map where users can explore historical locations and regions." },
                { title: "Add Historical Locations", description: "Add important historical places, cities, monuments and event locations to the map." },
                { title: "Create Location Markers", description: "Create interactive map markers that display the name, date and basic information of each historical location." },
                { title: "Add Location Details", description: "Create a detailed view showing the history, important events, people and significance of a selected location." },
                { title: "Add Historical Periods", description: "Organize map information into periods such as Ancient, Medieval, Early Modern and Modern history." },
                { title: "Add Historical Events", description: "Connect major historical events with their geographical locations and display them on the map." },
                { title: "Add Territory Changes", description: "Show how borders, kingdoms and empires changed across different historical periods." },
                { title: "Add Search", description: "Allow users to search for historical places, events, people and regions." },
                { title: "Add Filters", description: "Allow users to filter locations based on historical period, category, region and event type." },
                { title: "Add Timeline Control", description: "Allow users to select a historical period or year and update the map to show relevant information from that time." },
                { title: "Add Favorites", description: "Allow users to save interesting historical locations and events for quick access later." },
                { title: "Responsive Design", description: "Make the Historical Map Explorer work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test map interactions, markers, search, filters, timeline controls, location details and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Historical Map Explorer application." }
            ],

            features: [
                "Interactive Historical Map",
                "Historical Locations",
                "Location Details",
                "Historical Events",
                "Historical Periods",
                "Empire and Territory Maps",
                "Timeline Control",
                "Search Locations",
                "Filter Locations",
                "Interactive Markers",
                "Favorites",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Historical Map",
                "Location Details",
                "Historical Events",
                "Historical Periods",
                "Timeline"
            ],

            expectedResult:
                "A responsive and interactive Historical Map Explorer where users can explore historical locations and events, view territorial changes across different periods, search and filter information, and understand history through geography.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    },
                    {
                        name: "Leaflet",
                        learn: "Leaflet Documentation",
                        link: "https://leafletjs.com/reference.html"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Basic map concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 25,
        department: "Arts",
        course: "Economics",
        level: "Intermediate",
        image: e_commerce,
        name: "Budget Planner",
        paragraph: "A simple application to manage personal budgets, income and expenses",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "8 Days",
        rating: "4.7",
        views: "98",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-emerald-200",
        text2: "text-emerald-600",
        bg3: "bg-teal-200",
        text3: "text-teal-600",
        brief: {
            overview:
                "Build an interactive Budget Planner where users can manage their income, plan monthly expenses, set savings goals and monitor their overall budget.",

            goal:
                "Create a simple and practical budgeting platform that helps users organize their finances, control spending and achieve their savings goals.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and budget data." },
                { title: "Build Budget Dashboard", description: "Create a dashboard showing total income, planned expenses, savings and remaining budget." },
                { title: "Add Income", description: "Allow users to add income sources with amount, date and category." },
                { title: "Add Expense Categories", description: "Create categories such as Food, Transport, Bills, Shopping, Education and Entertainment." },
                { title: "Create Budget Planner", description: "Allow users to set spending limits for different expense categories and plan their monthly budget." },
                { title: "Add Expense Tracking", description: "Allow users to record expenses and compare actual spending with their planned budget." },
                { title: "Calculate Budget", description: "Calculate total income, total expenses, remaining balance and savings automatically." },
                { title: "Add Savings Goals", description: "Allow users to create savings goals with a target amount, current savings and target date." },
                { title: "Add Budget Alerts", description: "Display warnings when spending approaches or exceeds a category's planned budget." },
                { title: "Add Reports and Charts", description: "Display spending patterns, category breakdowns and savings progress using charts and visual summaries." },
                { title: "Add Search and Filters", description: "Allow users to search transactions and filter them by category, date, income or expense." },
                { title: "Add Transaction History", description: "Display previous income and expense records with options to edit or delete transactions." },
                { title: "Responsive Design", description: "Make the Budget Planner work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test budget calculations, transactions, savings goals, alerts, filters, charts and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Budget Planner application." }
            ],

            features: [
                "Budget Dashboard",
                "Income Tracking",
                "Expense Tracking",
                "Expense Categories",
                "Monthly Budget",
                "Budget Calculation",
                "Savings Goals",
                "Budget Alerts",
                "Spending Charts",
                "Transaction History",
                "Search and Filters",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Budget Dashboard",
                "Transactions",
                "Budget Planner",
                "Savings Goals",
                "Reports"
            ],

            expectedResult:
                "A responsive and interactive Budget Planner where users can manage income and expenses, create monthly budgets, track spending, set savings goals and monitor their overall financial progress.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "State management",
                    "Array and object concepts",
                    "Event handling",
                    "Basic calculations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 26,
        department: "Arts",
        course: "Economics",
        level: "Advanced",
        image: e_commerce,
        name: "Economic Data Dashboard",
        paragraph: "A dashboard for visualizing economic data, trends and financial statistics",
        Tech_1: "React",
        Tech_2: "Chart.js",
        Tech_3: "JavaScript",
        Days: "12 Days",
        rating: "4.9",
        views: "132",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-green-200",
        text2: "text-green-600",
        bg3: "bg-cyan-200",
        text3: "text-cyan-600",
        brief: {
            overview:
                "Build an interactive Economic Data Dashboard where users can explore important economic indicators, compare data across countries and analyze trends through charts and visualizations.",

            goal:
                "Create a data-driven dashboard that makes complex economic information easy to understand through interactive charts, statistics, comparisons and historical trends.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and economic data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with summary cards, charts, tables and economic indicators." },
                { title: "Add Economic Indicators", description: "Display indicators such as GDP, inflation, unemployment, interest rates, population and trade." },
                { title: "Create Indicator Cards", description: "Create reusable cards showing the current value, change and trend of each economic indicator." },
                { title: "Add Historical Data", description: "Display historical economic data so users can understand how indicators have changed over time." },
                { title: "Add Interactive Charts", description: "Create line, bar and other suitable charts to visualize economic trends and comparisons." },
                { title: "Add Country Comparison", description: "Allow users to select and compare economic indicators between different countries." },
                { title: "Add Search", description: "Allow users to search for countries, economic indicators and specific data." },
                { title: "Add Filters", description: "Allow users to filter data based on country, indicator, year, region and time period." },
                { title: "Add Data Table", description: "Display detailed economic data in a structured table with sorting and useful information." },
                { title: "Add Trend Analysis", description: "Show whether economic indicators are increasing, decreasing or remaining stable using visual trend indicators." },
                { title: "Add Data Sources", description: "Display the source and update information for each economic dataset to improve transparency." },
                { title: "Responsive Design", description: "Make the Economic Data Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test charts, filters, country comparisons, calculations, data tables and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Economic Data Dashboard." }
            ],

            features: [
                "Economic Indicators",
                "GDP Data",
                "Inflation Data",
                "Unemployment Data",
                "Interest Rates",
                "Population Data",
                "Trade Data",
                "Historical Trends",
                "Interactive Charts",
                "Country Comparison",
                "Data Tables",
                "Search and Filters",
                "Trend Analysis",
                "Data Sources",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Economic Dashboard",
                "Countries",
                "Country Details",
                "Indicators",
                "Data Analysis"
            ],

            expectedResult:
                "A responsive and interactive Economic Data Dashboard where users can explore economic indicators, view historical trends, compare countries, analyze data through charts and tables, and understand economic changes more easily.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Array and object concepts",
                    "Data handling basics",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 27,
        department: "Arts",
        course: "English",
        level: "Advanced",
        image: e_commerce,
        name: "Online Dictionary",
        paragraph: "A searchable dictionary application for finding word meanings and examples",
        Tech_1: "Next.js",
        Tech_2: "TypeScript",
        Tech_3: "API",
        Days: "10 Days",
        rating: "4.8",
        views: "115",
        bg1: "bg-purple-200",
        text1: "text-purple-600",
        bg2: "bg-pink-200",
        text2: "text-pink-600",
        bg3: "bg-blue-200",
        text3: "text-blue-600",
        brief: {
            overview:
                "Build an interactive Online Dictionary where users can search English words and explore their meanings, pronunciation, word forms, examples and related vocabulary.",

            goal:
                "Create a fast and user-friendly dictionary that helps users understand unfamiliar words and improve their vocabulary through detailed word information.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and dictionary data." },
                { title: "Build Dictionary Interface", description: "Create the main interface with a search bar, word results and useful dictionary sections." },
                { title: "Add Word Search", description: "Allow users to search for words and display the relevant dictionary information." },
                { title: "Display Word Meaning", description: "Show clear definitions and different meanings when a word has multiple definitions." },
                { title: "Add Pronunciation", description: "Display phonetic pronunciation and provide an option to listen to the word pronunciation." },
                { title: "Add Parts of Speech", description: "Display whether a word is a noun, verb, adjective, adverb or another part of speech." },
                { title: "Add Example Sentences", description: "Show practical example sentences to help users understand how the word is used." },
                { title: "Add Synonyms and Antonyms", description: "Display related words, synonyms and antonyms to help users expand their vocabulary." },
                { title: "Add Word Forms", description: "Display useful word forms such as plural, past tense, present participle and related forms when available." },
                { title: "Add Word History", description: "Display the origin or etymology of a word when the information is available." },
                { title: "Add Favorites", description: "Allow users to save useful words for later revision and quick access." },
                { title: "Add Search History", description: "Store recently searched words so users can quickly revisit previous searches." },
                { title: "Add Related Words", description: "Recommend related vocabulary based on the word currently being viewed." },
                { title: "Handle Invalid Words", description: "Display a helpful message when a searched word cannot be found in the dictionary." },
                { title: "Responsive Design", description: "Make the Online Dictionary work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test word search, definitions, pronunciation, favorites, search history and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Online Dictionary application." }
            ],

            features: [
                "Word Search",
                "Word Definitions",
                "Multiple Meanings",
                "Pronunciation",
                "Audio Pronunciation",
                "Parts of Speech",
                "Example Sentences",
                "Synonyms",
                "Antonyms",
                "Word Forms",
                "Word History",
                "Favorite Words",
                "Search History",
                "Related Words",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Dictionary",
                "Word Details",
                "Favorites",
                "Search History"
            ],

            expectedResult:
                "A responsive and interactive Online Dictionary where users can search for English words, understand their meanings and pronunciation, explore examples and related vocabulary, save favorite words and revisit previous searches.",
            requirements: {
                technologies: [
                    {
                        name: "Next.js",
                        learn: "Next.js Documentation",
                        link: "https://nextjs.org/docs"
                    },
                    {
                        name: "TypeScript",
                        learn: "TypeScript Handbook",
                        link: "https://www.typescriptlang.org/docs/"
                    },
                    {
                        name: "API",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Glossary/API"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "TypeScript basics",
                    "React basics",
                    "JSON basics",
                    "HTTP and API basics",
                    "Async JavaScript basics"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 28,
        department: "Engineering",
        course: "CSE",
        level: "Beginner",
        image: e_commerce,
        name: "Student Management System",
        paragraph: "A web application to manage student records, courses and academic information",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "8 Days",
        rating: "4.6",
        views: "92",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-purple-200",
        text2: "text-purple-600",
        bg3: "bg-cyan-200",
        text3: "text-cyan-600",
        brief: {
            overview: "Build a Student Management System where administrators or teachers can manage student information, courses, attendance, marks and academic records.",

            goal: "Create an organized student management platform that makes it easy to add, update, search and monitor student academic information.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and student data." },

                { title: "Build Dashboard", description: "Create a dashboard showing total students, courses, attendance, performance and other important statistics." },

                { title: "Add Student Management", description: "Create a form to add student details such as name, ID, email, phone number, course and department." },

                { title: "Create Student Cards", description: "Display students using reusable cards or table rows with their basic information and current status." },

                { title: "Add Student Details", description: "Create a detailed student view showing personal information, course, attendance, marks and academic records." },

                { title: "Add Course Management", description: "Allow administrators to create courses and assign students to the appropriate courses or departments." },

                { title: "Add Attendance Management", description: "Allow teachers or administrators to record and monitor student attendance." },

                { title: "Add Marks Management", description: "Allow teachers to enter subject marks and display student performance and overall scores." },

                { title: "Add Search", description: "Allow users to search students using their name, student ID, course or department." },

                { title: "Add Filters", description: "Allow users to filter students based on course, department, year, attendance or academic performance." },

                { title: "Add Edit and Delete", description: "Allow authorized users to update student information or remove student records when required." },

                { title: "Add Reports", description: "Display useful academic reports such as attendance percentage, marks, grades and overall student performance." },

                { title: "Responsive Design", description: "Make the Student Management System work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test student records, forms, search, filters, attendance, marks, reports and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed Student Management System application." }
            ],

            features: [
                "Student Management",
                "Student Profiles",
                "Course Management",
                "Attendance Tracking",
                "Marks Management",
                "Grade Calculation",
                "Search Students",
                "Filter Students",
                "Edit and Delete Records",
                "Academic Reports",
                "Performance Tracking",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Dashboard",
                "Students",
                "Student Details",
                "Courses",
                "Attendance",
                "Marks",
                "Reports"
            ],

            expectedResult: "A responsive and interactive Student Management System where administrators and teachers can manage student records, courses, attendance, marks and academic performance in an organized way.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "Array and object concepts",
                    "DOM and event handling",
                    "Basic form handling"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 29,
        department: "Engineering",
        course: "CSE",
        level: "Intermediate",
        image: task,
        name: "Coding Practice Platform",
        paragraph: "An online platform for practicing programming problems and improving coding skills",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "10 Days",
        rating: "4.8",
        views: "125",
        bg1: "bg-indigo-200",
        text1: "text-indigo-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-violet-200",
        text3: "text-violet-600",
        brief: {
            overview: "Build an interactive Coding Practice Platform where users can solve programming problems, write code, run solutions and track their coding progress.",

            goal: "Create a developer-focused practice platform that helps users improve their programming skills through coding problems, difficulty levels, submissions and progress tracking.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and coding problem data." },

                { title: "Build Practice Dashboard", description: "Create a dashboard showing coding problems, solved problems, progress and recommended challenges." },

                { title: "Create Problem List", description: "Display coding problems with title, difficulty, category, tags and completion status." },

                { title: "Add Problem Details", description: "Create a detailed problem page showing the problem statement, examples, constraints and expected output." },

                { title: "Build Code Editor", description: "Create a coding area where users can write and edit their solution code." },

                { title: "Add Programming Languages", description: "Allow users to select supported programming languages for solving coding problems." },

                { title: "Run Code", description: "Allow users to run their code against sample test cases and display the output." },

                { title: "Add Test Cases", description: "Create test cases to check whether the submitted solution produces the expected results." },

                { title: "Add Submission System", description: "Allow users to submit solutions and display whether the solution is accepted or contains errors." },

                { title: "Add Problem Categories", description: "Organize problems into categories such as Arrays, Strings, Loops, Functions, Sorting, Searching and Algorithms." },

                { title: "Add Difficulty Levels", description: "Organize coding problems into Easy, Medium and Hard difficulty levels." },

                { title: "Track Progress", description: "Track solved problems, submission history, difficulty-wise progress and overall coding performance." },

                { title: "Add Search and Filters", description: "Allow users to search problems and filter them by difficulty, category, language and completion status." },

                { title: "Responsive Design", description: "Make the Coding Practice Platform work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test problem navigation, code editor, code execution, submissions, filters, progress tracking and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed Coding Practice Platform." }
            ],

            features: [
                "Coding Problems",
                "Problem Details",
                "Code Editor",
                "Programming Languages",
                "Code Execution",
                "Test Cases",
                "Solution Submission",
                "Difficulty Levels",
                "Problem Categories",
                "Search and Filters",
                "Submission History",
                "Progress Tracking",
                "Solved Problems",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Practice Dashboard",
                "Problems",
                "Problem Details",
                "Code Editor",
                "Submissions",
                "Progress"
            ],

            expectedResult: "A responsive and interactive Coding Practice Platform where users can explore programming problems, write and run code, submit solutions, view results and track their coding progress.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 30,
        department: "Engineering",
        course: "ECE",
        level: "Beginner",
        image: analytics,
        name: "Circuit Simulator",
        paragraph: "An interactive simulator for learning basic electronic circuits and components",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "7 Days",
        rating: "4.7",
        views: "88",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-cyan-200",
        text2: "text-cyan-600",
        bg3: "bg-blue-200",
        text3: "text-blue-600",
        brief: {
            overview: "Build an interactive Circuit Simulator where users can create simple electrical circuits, connect components and observe how voltage, current and other circuit values change.",

            goal: "Create an educational circuit simulation platform that helps users understand electrical circuits through interactive components, connections and real-time circuit behavior.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and circuit data." },

                { title: "Build Simulator Interface", description: "Create the main simulation workspace with a component panel, circuit canvas and simulation controls." },

                { title: "Add Circuit Components", description: "Provide components such as batteries, resistors, LEDs, switches, capacitors and wires for building circuits." },

                { title: "Create Component Cards", description: "Create reusable component controls that allow users to select and place electrical components in the circuit." },

                { title: "Build Circuit Canvas", description: "Create an interactive workspace where users can place, move and connect circuit components." },

                { title: "Add Connections", description: "Allow users to connect components using wires and create complete electrical circuits." },

                { title: "Add Component Properties", description: "Allow users to modify properties such as resistance, voltage and capacitance for supported components." },

                { title: "Add Circuit Calculations", description: "Calculate important circuit values such as voltage, current and resistance based on the connected components." },

                { title: "Add Simulation", description: "Simulate the circuit and visually indicate values such as current flow, voltage and active components." },

                { title: "Add Measurement Tools", description: "Provide virtual measurement tools such as a voltmeter and ammeter to inspect circuit values." },

                { title: "Add Circuit Controls", description: "Provide controls to start, pause, reset and clear the circuit simulation." },

                { title: "Add Example Circuits", description: "Provide ready-made circuits such as series, parallel and basic LED circuits for users to explore." },

                { title: "Responsive Design", description: "Make the Circuit Simulator work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test component placement, connections, calculations, simulation controls, measurement tools and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed Circuit Simulator application." }
            ],

            features: [
                "Circuit Builder",
                "Interactive Circuit Canvas",
                "Electrical Components",
                "Component Properties",
                "Wire Connections",
                "Voltage Calculation",
                "Current Calculation",
                "Resistance Calculation",
                "Circuit Simulation",
                "Voltmeter",
                "Ammeter",
                "Example Circuits",
                "Simulation Controls",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Circuit Simulator",
                "Components",
                "Example Circuits",
                "Circuit Details"
            ],

            expectedResult: "A responsive and interactive Circuit Simulator where users can build circuits, connect components, modify their properties, run simulations and understand basic electrical behavior through visual feedback.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "DOM and event handling",
                    "Basic electrical concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 31,
        department: "Engineering",
        course: "ECE",
        level: "Advanced",
        image: analytics,
        name: "IoT Monitoring Dashboard",
        paragraph: "A dashboard for monitoring IoT devices and displaying real-time sensor data",
        Tech_1: "React",
        Tech_2: "Chart.js",
        Tech_3: "JavaScript",
        Days: "12 Days",
        rating: "4.9",
        views: "110",
        bg1: "bg-purple-200",
        text1: "text-purple-600",
        bg2: "bg-pink-200",
        text2: "text-pink-600",
        bg3: "bg-blue-200",
        text3: "text-blue-600",
        brief: {
            overview: "Build an interactive IoT Monitoring Dashboard where users can monitor connected devices, sensor data, device status and real-time system activity from a centralized dashboard.",

            goal: "Create a clear and responsive monitoring platform that helps users track IoT devices, analyze sensor readings and quickly identify device or system issues.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and IoT device data." },

                { title: "Build Monitoring Dashboard", description: "Create the main dashboard with device statistics, sensor readings, alerts and system status." },

                { title: "Add Device Management", description: "Create a device section where users can view connected devices, device names, types and current status." },

                { title: "Create Device Cards", description: "Display reusable device cards showing device status, location, latest reading and connection information." },

                { title: "Add Sensor Data", description: "Display sensor readings such as temperature, humidity, pressure, light and other relevant IoT measurements." },

                { title: "Add Real-Time Monitoring", description: "Update device and sensor values dynamically to simulate or display real-time monitoring information." },

                { title: "Add Data Visualization", description: "Use charts and graphs to visualize sensor readings and understand changes over time." },

                { title: "Add Device Details", description: "Create a detailed device view showing sensor data, device information, activity and historical readings." },

                { title: "Add Alerts", description: "Display alerts when sensor values cross defined limits or when a device becomes disconnected or inactive." },

                { title: "Add Filters", description: "Allow users to filter devices based on device type, location, status and sensor category." },

                { title: "Add Search", description: "Allow users to quickly search for connected devices and specific sensor information." },

                { title: "Add Historical Data", description: "Display previous sensor readings so users can compare values and identify trends." },

                { title: "Add System Status", description: "Show overall IoT system health including connected devices, offline devices, active alerts and data updates." },

                { title: "Responsive Design", description: "Make the IoT Monitoring Dashboard work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test device monitoring, sensor data, charts, alerts, filters, search, status updates and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed IoT Monitoring Dashboard." }
            ],

            features: [
                "IoT Device Management",
                "Device Status",
                "Sensor Monitoring",
                "Real-Time Data",
                "Temperature Monitoring",
                "Humidity Monitoring",
                "Data Visualization",
                "Historical Data",
                "Device Details",
                "System Health",
                "Alerts and Notifications",
                "Search Devices",
                "Device Filters",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Monitoring Dashboard",
                "Devices",
                "Device Details",
                "Sensors",
                "Alerts",
                "Analytics"
            ],

            expectedResult: "A responsive and interactive IoT Monitoring Dashboard where users can monitor connected devices, view real-time sensor data, analyze historical trends, track system health and receive alerts for important device or sensor conditions.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 32,
        department: "Engineering",
        course: "EEE",
        level: "Intermediate",
        image: e_commerce,
        name: "Power Consumption Tracker",
        paragraph: "An application for tracking and analyzing electrical power consumption",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "Chart.js",
        Days: "9 Days",
        rating: "4.7",
        views: "95",
        bg1: "bg-yellow-200",
        text1: "text-yellow-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-red-200",
        text3: "text-red-600",
        brief: {
            overview: "Build an interactive Power Consumption Tracker where users can monitor electricity usage, track appliance consumption, estimate electricity costs and analyze energy usage over time.",

            goal: "Create a practical energy monitoring platform that helps users understand their electricity consumption, identify high-energy appliances and reduce unnecessary power usage.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and electricity usage data." },

                { title: "Build Dashboard", description: "Create a dashboard showing total power consumption, estimated cost, daily usage and monthly usage." },

                { title: "Add Appliance Management", description: "Allow users to add appliances with details such as appliance name, power rating and usage duration." },

                { title: "Create Appliance Cards", description: "Display reusable appliance cards showing power rating, usage time, energy consumption and estimated cost." },

                { title: "Track Power Usage", description: "Allow users to record or update the amount of time each appliance is used." },

                { title: "Calculate Energy Consumption", description: "Calculate electricity consumption based on appliance power rating and usage duration." },

                { title: "Estimate Electricity Cost", description: "Calculate the estimated electricity cost using energy consumption and the user's electricity tariff." },

                { title: "Add Usage History", description: "Store daily, weekly and monthly consumption records so users can compare their electricity usage over time." },

                { title: "Add Charts", description: "Use charts and visual summaries to display consumption trends and appliance-wise energy usage." },

                { title: "Add High Consumption Alerts", description: "Display warnings when electricity usage or appliance consumption exceeds a selected limit." },

                { title: "Add Search and Filters", description: "Allow users to search appliances and filter usage records by appliance, date or consumption level." },

                { title: "Add Energy Saving Tips", description: "Display useful recommendations based on electricity usage to help users reduce unnecessary power consumption." },

                { title: "Responsive Design", description: "Make the Power Consumption Tracker work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test appliance records, calculations, cost estimates, charts, alerts, filters and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed Power Consumption Tracker application." }
            ],

            features: [
                "Power Consumption Tracking",
                "Appliance Management",
                "Power Rating",
                "Usage Duration",
                "Energy Consumption Calculation",
                "Electricity Cost Estimation",
                "Daily Usage",
                "Monthly Usage",
                "Usage History",
                "Consumption Charts",
                "High Consumption Alerts",
                "Energy Saving Tips",
                "Search and Filters",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Dashboard",
                "Appliances",
                "Appliance Details",
                "Usage History",
                "Analytics",
                "Energy Saving Tips"
            ],

            expectedResult: "A responsive and interactive Power Consumption Tracker where users can record appliance usage, monitor electricity consumption, estimate costs, analyze usage trends and receive suggestions to reduce energy consumption.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "React basics",
                    "JavaScript fundamentals",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic calculations",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 33,
        department: "Engineering",
        course: "EEE",
        level: "Advanced",
        image: analytics,
        name: "Energy Monitoring Dashboard",
        paragraph: "A dashboard for monitoring energy usage and analyzing electrical data",
        Tech_1: "React",
        Tech_2: "TypeScript",
        Tech_3: "Chart.js",
        Days: "12 Days",
        rating: "4.8",
        views: "108",
        bg1: "bg-amber-200",
        text1: "text-amber-600",
        bg2: "bg-green-200",
        text2: "text-green-600",
        bg3: "bg-emerald-200",
        text3: "text-emerald-600",
        brief: {
            overview: "Build an interactive Energy Monitoring Dashboard where users can monitor energy consumption, track power usage, analyze energy trends and identify areas of high energy consumption.",

            goal: "Create a clear and data-driven energy monitoring platform that helps users understand electricity usage, monitor energy performance and make better energy-saving decisions.",

            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and energy data." },

                { title: "Build Dashboard Layout", description: "Create the main dashboard with energy statistics, consumption charts, usage summaries and system status." },

                { title: "Add Energy Overview", description: "Display total energy consumption, current power usage, estimated cost and energy-saving percentage." },

                { title: "Create Energy Cards", description: "Create reusable cards showing important metrics such as today's usage, monthly usage, peak demand and total cost." },

                { title: "Add Consumption Monitoring", description: "Display energy consumption across different time periods such as hourly, daily, weekly and monthly usage." },

                { title: "Add Energy Charts", description: "Use interactive charts to visualize consumption trends and compare energy usage across different periods." },

                { title: "Add Device Monitoring", description: "Display energy consumption from individual appliances or connected devices and identify high-energy users." },

                { title: "Add Peak Usage Analysis", description: "Identify peak consumption periods and display when energy usage is highest." },

                { title: "Add Cost Analysis", description: "Calculate and display estimated electricity costs based on energy consumption and tariff information." },

                { title: "Add Energy Alerts", description: "Display alerts when energy consumption exceeds a selected limit or unusual usage is detected." },

                { title: "Add Energy Goals", description: "Allow users to set energy-saving targets and track their progress toward reducing consumption." },

                { title: "Add Historical Data", description: "Display previous energy usage so users can compare consumption and identify long-term trends." },

                { title: "Add Filters", description: "Allow users to filter energy data by device, date, time period and consumption category." },

                { title: "Responsive Design", description: "Make the Energy Monitoring Dashboard work properly on mobile, tablet and desktop screens." },

                { title: "Testing", description: "Test energy calculations, charts, filters, alerts, goals, device data and responsive layouts." },

                { title: "Deployment", description: "Build and deploy the completed Energy Monitoring Dashboard." }
            ],

            features: [
                "Energy Consumption Monitoring",
                "Power Usage Tracking",
                "Energy Overview",
                "Consumption Charts",
                "Device Monitoring",
                "Peak Usage Analysis",
                "Electricity Cost Estimation",
                "Energy Alerts",
                "Energy Saving Goals",
                "Historical Data",
                "Usage Comparison",
                "Search and Filters",
                "Energy Performance Tracking",
                "Responsive Design"
            ],

            pages: [
                "Home",
                "Energy Dashboard",
                "Devices",
                "Consumption",
                "Analytics",
                "Alerts",
                "Energy Goals"
            ],

            expectedResult: "A responsive and interactive Energy Monitoring Dashboard where users can monitor energy consumption, analyze usage trends, track device-level power usage, estimate costs, receive alerts and monitor their energy-saving goals.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "TypeScript",
                        learn: "TypeScript Handbook",
                        link: "https://www.typescriptlang.org/docs/"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "React basics",
                    "JavaScript fundamentals",
                    "TypeScript basics",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 34,
        department: "Engineering",
        course: "Civil",
        level: "Beginner",
        image: e_commerce,
        name: "Construction Cost Calculator",
        paragraph: "A calculator for estimating construction materials and project costs",
        Tech_1: "HTML",
        Tech_2: "CSS",
        Tech_3: "JavaScript",
        Days: "6 Days",
        rating: "4.6",
        views: "78",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-amber-200",
        text3: "text-amber-600",
        brief: {
            overview: "Build an interactive Construction Cost Calculator where users can estimate the total cost of a construction project based on built-up area, material requirements, labour, and other project expenses.",
            goal: "Create a practical calculator that helps users get a clear estimated construction budget and understand the major cost components involved in building a property.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and construction cost data." },
                { title: "Build Calculator Interface", description: "Create the main calculator layout with project inputs, cost categories and the estimated total section." },
                { title: "Add Project Details", description: "Allow users to enter built-up area, number of floors, construction type and other basic project details." },
                { title: "Add Material Costs", description: "Create inputs for major materials such as cement, steel, bricks, sand and other construction materials." },
                { title: "Add Labour Costs", description: "Allow users to enter or estimate labour charges based on construction area and project requirements." },
                { title: "Calculate Construction Cost", description: "Calculate the estimated construction cost using the entered area, material costs, labour costs and other expenses." },
                { title: "Add Additional Expenses", description: "Include optional costs such as electrical work, plumbing, painting, flooring and other construction expenses." },
                { title: "Add Cost Breakdown", description: "Display the estimated budget separately for materials, labour and additional construction expenses." },
                { title: "Add Cost Per Square Foot", description: "Calculate and display the estimated construction cost per square foot for easier comparison and planning." },
                { title: "Add Budget Summary", description: "Display the total estimated project cost along with a clear summary of all major cost components." },
                { title: "Add Save and Reset", description: "Allow users to save a calculation or reset the calculator inputs and start a new estimate." },
                { title: "Responsive Design", description: "Make the Construction Cost Calculator work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test input validation, calculations, cost breakdowns, total estimates, reset functionality and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Construction Cost Calculator application." }
            ],
            features: [
                "Construction Area Calculator",
                "Material Cost Estimation",
                "Labour Cost Estimation",
                "Additional Expense Calculation",
                "Cost Per Square Foot",
                "Cost Breakdown",
                "Budget Summary",
                "Multiple Construction Inputs",
                "Save Calculation",
                "Reset Calculator",
                "Input Validation",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Construction Calculator",
                "Cost Breakdown",
                "Saved Estimates"
            ],
            expectedResult: "A responsive and interactive Construction Cost Calculator where users can enter project details, estimate material and labour costs, calculate additional expenses and view a clear overall construction budget.",
            requirements: {
                technologies: [
                    {
                        name: "HTML",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    },
                    {
                        name: "CSS",
                        learn: "MDN Web Docs",
                        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "Basic HTML",
                    "Basic CSS",
                    "JavaScript fundamentals",
                    "Functions and event handling",
                    "Basic arithmetic calculations"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 35,
        department: "Engineering",
        course: "Civil",
        level: "Intermediate",
        image: analytics,
        name: "Building Project Planner",
        paragraph: "A project planning tool for managing construction tasks, materials and timelines",
        Tech_1: "React",
        Tech_2: "Tailwind",
        Tech_3: "JavaScript",
        Days: "10 Days",
        rating: "4.7",
        views: "86",
        bg1: "bg-stone-200",
        text1: "text-stone-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview: "Build an interactive Building Project Planner where users can plan construction projects, organize tasks, manage timelines, track progress and monitor project requirements.",
            goal: "Create a practical project planning platform that helps users organize every stage of a building project from initial planning to completion.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and project data." },
                { title: "Build Planner Dashboard", description: "Create a dashboard showing active projects, upcoming tasks, deadlines, budget and overall progress." },
                { title: "Create Project", description: "Allow users to create a project with details such as project name, location, building type, start date and expected completion date." },
                { title: "Add Project Phases", description: "Organize the project into phases such as Planning, Foundation, Structure, Electrical, Plumbing, Finishing and Completion." },
                { title: "Create Task Management", description: "Allow users to create tasks, assign them to project phases and track their completion status." },
                { title: "Add Project Timeline", description: "Create a timeline showing project phases, tasks, start dates, deadlines and completion dates." },
                { title: "Add Progress Tracking", description: "Display overall project progress and phase-wise completion using progress indicators." },
                { title: "Add Material Planning", description: "Allow users to record required construction materials, quantities, estimated costs and availability." },
                { title: "Add Budget Tracking", description: "Track estimated and actual expenses for materials, labour and other project costs." },
                { title: "Add Team Management", description: "Allow users to record workers, contractors or teams involved in different project tasks." },
                { title: "Add Deadlines and Alerts", description: "Display upcoming deadlines and warnings for delayed or incomplete tasks." },
                { title: "Add Project Reports", description: "Create summaries showing project progress, completed tasks, expenses, materials and upcoming work." },
                { title: "Responsive Design", description: "Make the Building Project Planner work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test project creation, task management, timelines, progress tracking, budget calculations, materials and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Building Project Planner application." }
            ],
            features: [
                "Project Dashboard",
                "Project Creation",
                "Project Phases",
                "Task Management",
                "Project Timeline",
                "Progress Tracking",
                "Material Planning",
                "Budget Tracking",
                "Team Management",
                "Deadlines and Alerts",
                "Project Reports",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Project Dashboard",
                "Projects",
                "Project Details",
                "Tasks",
                "Timeline",
                "Materials",
                "Budget",
                "Team",
                "Reports"
            ],
            expectedResult: "A responsive and interactive Building Project Planner where users can create construction projects, organize phases and tasks, manage timelines, track materials and expenses, monitor progress and generate useful project summaries.",
            requirements: {
                technologies: [
                    {
                        name: "React",
                        learn: "React Documentation",
                        link: "https://react.dev/learn"
                    },
                    {
                        name: "Tailwind CSS",
                        learn: "Tailwind CSS Docs",
                        link: "https://tailwindcss.com/docs"
                    },
                    {
                        name: "JavaScript",
                        learn: "JavaScript.info",
                        link: "https://javascript.info/"
                    }
                ],
                prerequisites: [
                    "JavaScript fundamentals",
                    "React basics",
                    "Components and props",
                    "State and event handling",
                    "Array and object concepts",
                    "Basic date and timeline concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },

    {
        id: 36,
        department: "Engineering",
        course: "CSE",
        level: "Advanced",
        image: analytics,
        name: "Engineering Project Dashboard",
        paragraph: "A dashboard for tracking engineering projects, tasks, progress and deadlines",
        Tech_1: "Next.js",
        Tech_2: "TypeScript",
        Tech_3: "Chart.js",
        Days: "14 Days",
        rating: "4.9",
        views: "140",
        bg1: "bg-violet-200",
        text1: "text-violet-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-indigo-200",
        text3: "text-indigo-600",
        brief: {
            overview: "Build an interactive Engineering Project Dashboard where users can manage engineering projects, monitor tasks, track progress, analyze project data and view important project metrics from a centralized dashboard.",
            goal: "Create a professional engineering project management dashboard that makes it easy to monitor project status, deadlines, resources, costs and overall progress.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and engineering project data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with project statistics, progress indicators, charts, tasks and project status." },
                { title: "Add Project Management", description: "Allow users to create and manage engineering projects with details such as project name, type, team, budget and timeline." },
                { title: "Create Project Cards", description: "Display reusable project cards showing project status, progress, deadline, budget and team information." },
                { title: "Add Project Phases", description: "Organize projects into phases such as Planning, Design, Development, Testing and Deployment." },
                { title: "Add Task Management", description: "Allow users to create, assign and track engineering project tasks with priority and completion status." },
                { title: "Add Progress Tracking", description: "Display overall project progress and phase-wise completion using progress indicators and charts." },
                { title: "Add Resource Management", description: "Track project resources such as team members, equipment, materials and other required resources." },
                { title: "Add Budget Tracking", description: "Monitor estimated and actual project costs and display budget utilization." },
                { title: "Add Timeline and Deadlines", description: "Display project milestones, deadlines and upcoming tasks using a timeline or schedule view." },
                { title: "Add Engineering Metrics", description: "Display useful metrics such as completed tasks, project efficiency, budget usage, delays and overall project health." },
                { title: "Add Reports and Charts", description: "Create visual reports for project progress, costs, tasks, resources and performance trends." },
                { title: "Responsive Design", description: "Make the Engineering Project Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test project management, tasks, progress tracking, calculations, charts, filters and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Engineering Project Dashboard." }
            ],
            features: [
                "Project Dashboard",
                "Project Management",
                "Project Status",
                "Project Phases",
                "Task Management",
                "Progress Tracking",
                "Resource Management",
                "Budget Tracking",
                "Project Timeline",
                "Milestone Tracking",
                "Engineering Metrics",
                "Reports and Charts",
                "Search and Filters",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Engineering Dashboard",
                "Projects",
                "Project Details",
                "Tasks",
                "Resources",
                "Timeline",
                "Budget",
                "Reports"
            ],
            expectedResult: "A responsive and interactive Engineering Project Dashboard where users can manage engineering projects, monitor tasks and milestones, track resources and budgets, analyze project metrics and understand overall project performance from one centralized platform.",
            requirements: {
                technologies: [
                    {
                        name: "Next.js",
                        learn: "Next.js Documentation",
                        link: "https://nextjs.org/docs"
                    },
                    {
                        name: "TypeScript",
                        learn: "TypeScript Handbook",
                        link: "https://www.typescriptlang.org/docs/"
                    },
                    {
                        name: "Chart.js",
                        learn: "Chart.js Documentation",
                        link: "https://www.chartjs.org/docs/latest/"
                    }
                ],
                prerequisites: [
                    "React basics",
                    "JavaScript fundamentals",
                    "TypeScript basics",
                    "Array and object concepts",
                    "Data handling basics",
                    "Basic chart concepts"
                ],
                tools: [
                    "VS Code",
                    "Git",
                    "GitHub",
                    "Web Browser"
                ]
            }
        }
    },
    {
        id: 37,
        department: "Commerce",
        course: "B.Com",
        level: "Beginner",
        image: e_commerce,
        name: "Online Bookkeeping System",
        paragraph: "A simple application for managing business transactions, income and expenses",
        Tech_1: "Excel",
        Tech_2: "SQL",
        Tech_3: "Power BI",
        Days: "7 Days",
        rating: "4.6",
        views: "84",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-green-200",
        text2: "text-green-600",
        bg3: "bg-purple-200",
        text3: "text-purple-600",
        brief: {
            overview: "Build an interactive Online Bookkeeping System where users can record financial transactions, manage income and expenses, track accounts and monitor the overall financial position of a business.",
            goal: "Create an organized bookkeeping platform that simplifies daily financial record keeping and provides clear summaries of business income, expenses, balances and transactions.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and bookkeeping data." },
                { title: "Build Dashboard", description: "Create a dashboard showing total income, expenses, account balances, outstanding payments and recent transactions." },
                { title: "Add Account Management", description: "Allow users to create and manage accounts such as Cash, Bank, Sales, Purchases and other business accounts." },
                { title: "Add Transactions", description: "Create a form to record transactions with date, description, account, amount and transaction type." },
                { title: "Track Income and Expenses", description: "Allow users to record and categorize business income and expenses for accurate financial tracking." },
                { title: "Create Transaction List", description: "Display recorded transactions in a structured table with useful financial details and status." },
                { title: "Add Categories", description: "Organize transactions into categories such as Sales, Rent, Salary, Utilities, Supplies and other expenses." },
                { title: "Add Invoice Management", description: "Allow users to create, view and track invoices for customers and business transactions." },
                { title: "Add Customer and Vendor Records", description: "Store basic customer and vendor information and connect them with relevant transactions or invoices." },
                { title: "Add Financial Reports", description: "Generate useful summaries such as income statement, expense report, account summary and transaction reports." },
                { title: "Add Search and Filters", description: "Allow users to search transactions and filter them by date, account, category, customer or transaction type." },
                { title: "Add Data Export", description: "Allow users to export bookkeeping records or financial summaries for further use." },
                { title: "Responsive Design", description: "Make the Online Bookkeeping System work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test transaction records, calculations, invoices, accounts, reports, filters and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Online Bookkeeping System." }
            ],
            features: [
                "Bookkeeping Dashboard",
                "Account Management",
                "Transaction Management",
                "Income Tracking",
                "Expense Tracking",
                "Transaction Categories",
                "Invoice Management",
                "Customer Management",
                "Vendor Management",
                "Financial Reports",
                "Search and Filters",
                "Data Export",
                "Balance Tracking",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Dashboard",
                "Accounts",
                "Transactions",
                "Invoices",
                "Customers",
                "Vendors",
                "Reports",
                "Settings"
            ],
            expectedResult: "A responsive and interactive Online Bookkeeping System where users can manage accounts, record income and expenses, track invoices and transactions, view financial reports and monitor the overall financial position of a business.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for organizing bookkeeping data, calculations and financial records.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing, retrieving and managing bookkeeping records in databases.",
                        link: "https://www.w3schools.com/sql/"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for creating financial dashboards, reports and data visualizations.",
                        link: "https://learn.microsoft.com/power-bi/"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas, tables and data entry",
                    "Basic SQL concepts and database queries",
                    "Basic Power BI dashboard and chart concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "SQL database",
                    "Microsoft Power BI"
                ]
            }
        }
    },

    {
        id: 38,
        department: "Commerce",
        course: "B.Com",
        level: "Intermediate",
        image: task,
        name: "Inventory Management",
        paragraph: "A web application for managing products, stock levels and inventory records",
        Tech_1: "Excel",
        Tech_2: "SQL",
        Tech_3: "Power BI",
        Days: "10 Days",
        rating: "4.8",
        views: "112",
        bg1: "bg-orange-200",
        text1: "text-orange-600",
        bg2: "bg-yellow-200",
        text2: "text-yellow-600",
        bg3: "bg-green-200",
        text3: "text-green-600",
        brief: {
            overview: "Build an interactive Inventory Management System where users can manage products, monitor stock levels, track purchases and sales, and receive alerts for low or out-of-stock items.",
            goal: "Create an organized inventory platform that helps businesses maintain accurate stock records, manage products efficiently and understand inventory movement.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and inventory data." },
                { title: "Build Inventory Dashboard", description: "Create a dashboard showing total products, available stock, low-stock items, out-of-stock items and inventory value." },
                { title: "Add Product Management", description: "Allow users to add products with details such as product name, SKU, category, price, quantity and supplier." },
                { title: "Create Product List", description: "Display products in reusable cards or a structured table with stock and product information." },
                { title: "Add Stock Management", description: "Allow users to increase or decrease product quantities when stock is received, sold or adjusted." },
                { title: "Add Categories", description: "Organize products into categories and allow users to manage category information." },
                { title: "Add Supplier Management", description: "Store supplier information and connect suppliers with the products they provide." },
                { title: "Track Purchases", description: "Record incoming stock and purchase details to keep inventory quantities updated." },
                { title: "Track Sales", description: "Record outgoing products and automatically update available stock after sales." },
                { title: "Add Low Stock Alerts", description: "Display alerts when a product reaches or falls below its minimum stock level." },
                { title: "Add Inventory History", description: "Track stock movements such as purchases, sales, returns and manual adjustments." },
                { title: "Add Search and Filters", description: "Allow users to search products and filter inventory by category, supplier, stock status and price." },
                { title: "Add Reports", description: "Display useful reports such as stock summary, inventory value, sales, purchases and low-stock products." },
                { title: "Responsive Design", description: "Make the Inventory Management System work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test product management, stock updates, purchases, sales, alerts, search, filters, reports and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Inventory Management System." }
            ],
            features: [
                "Inventory Dashboard",
                "Product Management",
                "Stock Management",
                "Product Categories",
                "Supplier Management",
                "Purchase Tracking",
                "Sales Tracking",
                "Low Stock Alerts",
                "Inventory History",
                "Stock Adjustment",
                "Search and Filters",
                "Inventory Reports",
                "Inventory Value",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Dashboard",
                "Products",
                "Product Details",
                "Categories",
                "Suppliers",
                "Purchases",
                "Sales",
                "Inventory History",
                "Reports"
            ],
            expectedResult: "A responsive and interactive Inventory Management System where users can manage products and suppliers, track stock movements, record purchases and sales, receive low-stock alerts and monitor inventory through useful reports and summaries.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for managing product data, stock records and inventory calculations.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing, updating and retrieving product and inventory records.",
                        link: "https://www.w3schools.com/sql/"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for inventory dashboards, stock analysis and reports.",
                        link: "https://learn.microsoft.com/power-bi/"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas, tables and data organization",
                    "Basic SQL concepts and database queries",
                    "Basic Power BI charts and dashboard concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "SQL database",
                    "Microsoft Power BI"
                ]
            }
        }
    },

    {
        id: 39,
        department: "Commerce",
        course: "CA",
        level: "Intermediate",
        image: analytics,
        name: "Financial Report Dashboard",
        paragraph: "A dashboard for analyzing financial data, income, expenses and business performance",
        Tech_1: "Excel",
        Tech_2: "Power BI",
        Tech_3: "SQL",
        Days: "12 Days",
        rating: "4.9",
        views: "128",
        bg1: "bg-indigo-200",
        text1: "text-indigo-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-green-200",
        text3: "text-green-600",
        brief: {
            overview: "Build an interactive Financial Report Dashboard where users can monitor financial performance, analyze income and expenses, compare financial periods and view important financial reports through a centralized dashboard.",
            goal: "Create a professional financial dashboard that makes complex financial information easier to understand through clear metrics, charts, reports and comparisons.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and financial data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with financial summary cards, charts, reports and recent transactions." },
                { title: "Add Financial Overview", description: "Display key metrics such as total revenue, expenses, profit, assets, liabilities and cash balance." },
                { title: "Add Income Analysis", description: "Display income data by category and time period to help users understand revenue performance." },
                { title: "Add Expense Analysis", description: "Display expenses by category and time period to identify major spending areas." },
                { title: "Create Profit and Loss Report", description: "Calculate and display revenue, expenses and net profit or loss for selected periods." },
                { title: "Add Cash Flow Report", description: "Display cash inflows, cash outflows and net cash flow to monitor the movement of money." },
                { title: "Add Financial Charts", description: "Use line, bar, pie or other suitable charts to visualize financial trends and category breakdowns." },
                { title: "Add Period Comparison", description: "Allow users to compare financial performance between months, quarters or years." },
                { title: "Add Financial Table", description: "Display detailed financial records in a structured table with sorting and useful summary information." },
                { title: "Add Filters", description: "Allow users to filter reports based on date range, category, account and financial period." },
                { title: "Add Report Export", description: "Allow users to export financial reports or summaries for further use." },
                { title: "Responsive Design", description: "Make the Financial Report Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test financial calculations, charts, reports, comparisons, filters, exports and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Financial Report Dashboard." }
            ],
            features: [
                "Financial Dashboard",
                "Revenue Tracking",
                "Expense Tracking",
                "Profit and Loss Report",
                "Cash Flow Report",
                "Financial Overview",
                "Financial Charts",
                "Period Comparison",
                "Financial Tables",
                "Date Range Filters",
                "Category Filters",
                "Report Export",
                "Financial Metrics",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Financial Dashboard",
                "Income",
                "Expenses",
                "Profit and Loss",
                "Cash Flow",
                "Financial Reports",
                "Analytics"
            ],
            expectedResult: "A responsive and interactive Financial Report Dashboard where users can monitor revenue, expenses, profit and cash flow, analyze financial trends, compare different periods and view or export detailed financial reports.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for financial data organization, formulas and report preparation.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for financial dashboards, charts, reports and data analysis.",
                        link: "https://learn.microsoft.com/power-bi/"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for retrieving and managing financial data from databases.",
                        link: "https://www.w3schools.com/sql/"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas and financial data handling",
                    "Basic Power BI dashboard and visualization concepts",
                    "Basic SQL queries and database concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "Microsoft Power BI",
                    "SQL database"
                ]
            }
        }
    },

    {
        id: 40,
        department: "Commerce",
        course: "CA",
        level: "Advanced",
        image: analytics,
        name: "Tax Calculator",
        paragraph: "A calculator application for estimating taxes and organizing financial information",
        Tech_1: "Excel",
        Tech_2: "Python",
        Tech_3: "SQL",
        Days: "8 Days",
        rating: "4.7 ",
        views: "96",
        bg1: "bg-red-200",
        text1: "text-red-600",
        bg2: "bg-orange-200",
        text2: "text-orange-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview: "Build an interactive Tax Calculator where users can enter their income, deductions and applicable tax details to estimate taxable income, tax liability and final tax payable.",
            goal: "Create a simple and user-friendly tax calculator that helps users understand their estimated tax liability through a clear calculation and breakdown.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and tax calculation data." },
                { title: "Build Calculator Interface", description: "Create the main calculator layout with income inputs, deductions, tax options and a result summary." },
                { title: "Add Income Details", description: "Allow users to enter salary, business income, investment income and other applicable sources of income." },
                { title: "Add Deduction Details", description: "Allow users to enter eligible deductions and exemptions that can reduce taxable income." },
                { title: "Calculate Taxable Income", description: "Calculate taxable income after applying the entered deductions and applicable adjustments." },
                { title: "Add Tax Slabs", description: "Apply the selected tax slab structure to calculate the estimated tax based on taxable income." },
                { title: "Calculate Tax Liability", description: "Calculate the estimated tax amount and include applicable additional charges or adjustments." },
                { title: "Add Tax Breakdown", description: "Display a clear breakdown showing income, deductions, taxable income, tax amount and final payable amount." },
                { title: "Add Tax Regime Comparison", description: "Allow users to compare estimated tax liability between available tax calculation options or regimes." },
                { title: "Add Monthly Estimate", description: "Display an estimated monthly tax amount based on the calculated annual tax liability." },
                { title: "Add Reset and Save", description: "Allow users to reset the calculator or save their calculation summary for later reference." },
                { title: "Add Input Validation", description: "Validate income and deduction inputs and display helpful messages for invalid or incomplete values." },
                { title: "Responsive Design", description: "Make the Tax Calculator work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test tax calculations, deductions, tax slabs, comparisons, validation, reset functionality and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Tax Calculator application." }
            ],
            features: [
                "Income Calculator",
                "Deduction Calculator",
                "Taxable Income Calculation",
                "Tax Slab Calculation",
                "Tax Liability Estimation",
                "Tax Breakdown",
                "Tax Regime Comparison",
                "Monthly Tax Estimate",
                "Input Validation",
                "Save Calculation",
                "Reset Calculator",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Tax Calculator",
                "Tax Breakdown",
                "Tax Comparison",
                "Saved Calculations"
            ],
            expectedResult: "A responsive and interactive Tax Calculator where users can enter income and deductions, calculate estimated taxable income and tax liability, compare tax options and view a clear breakdown of their estimated tax payable.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for calculations, financial data organization and tax worksheets.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "Python",
                        learn: "Learn Python for implementing tax calculations, conditions and input processing.",
                        link: "https://www.python.org/about/gettingstarted/"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing and retrieving tax-related records and saved calculations.",
                        link: "https://www.w3schools.com/sql/"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas and calculations",
                    "Python basics, variables, conditions and functions",
                    "Basic SQL concepts and database queries"
                ],
                tools: [
                    "Microsoft Excel",
                    "Python",
                    "SQL database"
                ]
            }
        }
    },

    {
        id: 41,
        department: "Commerce",
        course: "Accounting & Finance",
        level: "Beginner",
        image: e_commerce,
        name: "Expense Tracker",
        paragraph: "An application for tracking daily expenses, income and personal budgets",
        Tech_1: "Excel",
        Tech_2: "SQL",
        Tech_3: "Power BI",
        Days: "6 Days",
        rating: "4.6",
        views: "105",
        bg1: "bg-green-200",
        text1: "text-green-600",
        bg2: "bg-emerald-200",
        text2: "text-emerald-600",
        bg3: "bg-teal-200",
        text3: "text-teal-600",
        brief: {
            overview: "Build an interactive Expense Tracker where users can record, categorize and monitor their daily expenses, understand spending patterns and manage their overall budget.",
            goal: "Create a simple and practical expense management platform that helps users control spending, track expenses and understand where their money is being used.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and expense data." },
                { title: "Build Expense Dashboard", description: "Create a dashboard showing total expenses, today's spending, monthly spending, remaining budget and recent transactions." },
                { title: "Add Expense", description: "Create a form that allows users to record an expense with amount, date, category, description and payment method." },
                { title: "Create Expense List", description: "Display recorded expenses in reusable cards or a structured table with important transaction details." },
                { title: "Add Expense Categories", description: "Organize expenses into categories such as Food, Transport, Shopping, Bills, Education and Entertainment." },
                { title: "Add Budget Management", description: "Allow users to set a spending budget and compare their actual expenses with the planned budget." },
                { title: "Calculate Spending", description: "Calculate total, daily, weekly and monthly expenses automatically from the recorded transactions." },
                { title: "Add Edit and Delete", description: "Allow users to update or remove existing expense records when required." },
                { title: "Add Spending Analysis", description: "Display category-wise spending and spending trends using charts or visual summaries." },
                { title: "Add Search and Filters", description: "Allow users to search expenses and filter them by category, date, payment method or amount." },
                { title: "Add Expense History", description: "Display previous expense records so users can review their spending over different time periods." },
                { title: "Add Saving Tips", description: "Display useful suggestions based on spending categories to encourage better expense management." },
                { title: "Responsive Design", description: "Make the Expense Tracker work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test expense records, calculations, categories, budgets, charts, filters, edit/delete actions and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Expense Tracker application." }
            ],
            features: [
                "Expense Dashboard",
                "Add Expenses",
                "Expense Categories",
                "Budget Management",
                "Daily Spending",
                "Monthly Spending",
                "Expense Calculations",
                "Edit and Delete Expenses",
                "Spending Analysis",
                "Expense Charts",
                "Search and Filters",
                "Expense History",
                "Saving Tips",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Expense Dashboard",
                "Expenses",
                "Add Expense",
                "Expense Details",
                "Budget",
                "Analytics",
                "Expense History"
            ],
            expectedResult: "A responsive and interactive Expense Tracker where users can record and manage expenses, organize spending by category, set budgets, analyze spending patterns and monitor their financial activity through clear summaries and charts.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for recording expenses, performing calculations and organizing budgets.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing and retrieving expense and income records.",
                        link: "https://www.w3schools.com/sql/"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for analyzing spending patterns and creating financial dashboards.",
                        link: "https://learn.microsoft.com/power-bi/"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas and tables",
                    "Basic SQL queries and database concepts",
                    "Basic Power BI visualization concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "SQL database",
                    "Microsoft Power BI"
                ]
            }
        }
    },

    {
        id: 42,
        department: "Commerce",
        course: "Accounting & Finance",
        level: "Advanced",
        image: analytics,
        name: "Budget Analysis Dashboard",
        paragraph: "A dashboard for analyzing budgets, expenses and financial performance",
        Tech_1: "Excel",
        Tech_2: "Power BI",
        Tech_3: "Tableau",
        Days: "12 Days",
        rating: "4.8",
        views: "118",
        bg1: "bg-cyan-200",
        text1: "text-cyan-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-indigo-200",
        text3: "text-indigo-600",
        brief: {
            overview: "Build an interactive Budget Analysis Dashboard where users can monitor income, expenses, savings and budget performance through clear financial metrics, charts and spending analysis.",
            goal: "Create a data-driven dashboard that helps users understand their financial position, compare planned and actual spending, identify spending patterns and make better budgeting decisions.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and budget data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with summary cards, charts, budget sections, transactions and financial insights." },
                { title: "Add Financial Overview", description: "Display total income, total expenses, savings, remaining budget and overall financial status." },
                { title: "Add Income Tracking", description: "Display income sources and allow users to monitor income received during selected periods." },
                { title: "Add Expense Analysis", description: "Display expenses by category and time period to help users understand where their money is being spent." },
                { title: "Add Budget Comparison", description: "Compare planned budget amounts with actual spending for each expense category." },
                { title: "Add Spending Charts", description: "Use suitable charts to visualize income, expenses, savings and category-wise spending." },
                { title: "Add Savings Analysis", description: "Display savings amount, savings rate and progress toward selected savings goals." },
                { title: "Add Financial Trends", description: "Show daily, weekly or monthly financial trends to help users identify changes in income and spending." },
                { title: "Add Budget Alerts", description: "Display warnings when spending approaches or exceeds the planned budget for a category." },
                { title: "Add Transaction Table", description: "Display recent income and expense transactions with date, category, amount and transaction type." },
                { title: "Add Filters", description: "Allow users to filter dashboard data by date range, category, income, expense and budget status." },
                { title: "Add Financial Insights", description: "Generate useful summaries such as highest spending category, budget usage and savings performance." },
                { title: "Responsive Design", description: "Make the Budget Analysis Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test calculations, charts, budget comparisons, filters, alerts, financial insights and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Budget Analysis Dashboard." }
            ],
            features: [
                "Financial Overview",
                "Income Tracking",
                "Expense Tracking",
                "Budget Comparison",
                "Savings Analysis",
                "Spending Charts",
                "Financial Trends",
                "Budget Alerts",
                "Transaction Table",
                "Date Range Filters",
                "Category Filters",
                "Financial Insights",
                "Budget Performance",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Budget Dashboard",
                "Income",
                "Expenses",
                "Budget Analysis",
                "Savings",
                "Transactions",
                "Reports"
            ],
            expectedResult: "A responsive and interactive Budget Analysis Dashboard where users can monitor income, expenses and savings, compare planned and actual spending, analyze financial trends and receive useful insights about their budget performance.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for budget planning, calculations and financial data preparation.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for budget dashboards, financial charts and performance analysis.",
                        link: "https://learn.microsoft.com/power-bi/"
                    },
                    {
                        name: "Tableau",
                        learn: "Learn Tableau for interactive financial dashboards and budget visualizations.",
                        link: "https://www.tableau.com/learn"
                    }
                ],
                prerequisites: [
                    "Basic Excel formulas, tables and budget calculations",
                    "Basic Power BI dashboard and chart concepts",
                    "Basic Tableau visualization concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "Microsoft Power BI",
                    "Tableau"
                ]
            }
        }
    },

    {
        id: 43,
        department: "Commerce",
        course: "BBA",
        level: "Beginner",
        image: task,
        name: "Business Task Manager",
        paragraph: "A task management application for organizing business activities and team work",
        Tech_1: "Excel",
        Tech_2: "Power BI",
        Tech_3: "SQL",
        Days: "7 Days",
        rating: "4.7",
        views: "90",
        bg1: "bg-purple-200",
        text1: "text-purple-600",
        bg2: "bg-pink-200",
        text2: "text-pink-600",
        bg3: "bg-violet-200",
        text3: "text-violet-600",
        brief: {
            overview: "Build an interactive Business Task Manager where businesses and teams can create, assign, organize and track tasks, deadlines and project progress from a centralized workspace.",
            goal: "Create a professional task management platform that helps teams stay organized, track responsibilities, manage deadlines and monitor overall business productivity.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and task data." },
                { title: "Build Business Dashboard", description: "Create a dashboard showing total tasks, completed tasks, pending tasks, overdue tasks and overall team progress." },
                { title: "Create Task Management", description: "Allow users to create tasks with title, description, priority, due date, category and assigned team member." },
                { title: "Create Task Cards", description: "Display reusable task cards showing task details, priority, assignee, deadline and completion status." },
                { title: "Add Task Assignment", description: "Allow managers to assign tasks to specific team members and track their responsibilities." },
                { title: "Add Task Status", description: "Organize tasks into statuses such as To Do, In Progress, Review and Completed." },
                { title: "Add Priority Management", description: "Allow users to set task priorities such as Low, Medium, High and Urgent." },
                { title: "Add Deadlines", description: "Display task deadlines and identify overdue or upcoming tasks." },
                { title: "Build Team Management", description: "Create a team section where users can view members, assigned tasks and individual progress." },
                { title: "Add Project Management", description: "Allow users to organize tasks under different business projects and monitor project progress." },
                { title: "Add Calendar View", description: "Display tasks and deadlines in a calendar-based view for easier planning." },
                { title: "Add Search and Filters", description: "Allow users to search tasks and filter them by project, member, priority, status or deadline." },
                { title: "Add Reports and Analytics", description: "Display task completion, team productivity, project progress and overdue task statistics using charts and summaries." },
                { title: "Responsive Design", description: "Make the Business Task Manager work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test task creation, assignment, status updates, priorities, deadlines, filters, team management, reports and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Business Task Manager application." }
            ],
            features: [
                "Business Dashboard",
                "Task Management",
                "Task Assignment",
                "Task Status",
                "Priority Management",
                "Deadline Tracking",
                "Team Management",
                "Project Management",
                "Calendar View",
                "Search and Filters",
                "Task Reports",
                "Productivity Analytics",
                "Overdue Task Alerts",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Business Dashboard",
                "Tasks",
                "Task Details",
                "Projects",
                "Project Details",
                "Team",
                "Calendar",
                "Reports"
            ],
            expectedResult: "A responsive and interactive Business Task Manager where businesses can create and assign tasks, manage projects and teams, track deadlines and priorities, monitor productivity and analyze overall task performance.",
            requirements: {
                technologies: [
                    {
                        name: "Excel",
                        learn: "Learn Excel for organizing task data, deadlines and business records.",
                        link: "https://support.microsoft.com/excel"
                    },
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for analyzing task completion, productivity and business performance.",
                        link: "https://learn.microsoft.com/power-bi/"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing and managing task, team and project records.",
                        link: "https://www.w3schools.com/sql/"
                    }
                ],
                prerequisites: [
                    "Basic Excel tables, formulas and data organization",
                    "Basic Power BI reports and visualizations",
                    "Basic SQL queries and database concepts"
                ],
                tools: [
                    "Microsoft Excel",
                    "Microsoft Power BI",
                    "SQL database"
                ]
            }
        }
    },

    {
        id: 44,
        department: "Commerce",
        course: "BBA",
        level: "Intermediate",
        image: analytics,
        name: "Sales Analytics Dashboard",
        paragraph: "A dashboard for tracking sales, revenue, customers and business growth",
        Tech_1: "Power BI",
        Tech_2: "SQL",
        Tech_3: "Excel",
        Days: "10 Days",
        rating: "4.8",
        views: "134",
        bg1: "bg-blue-200",
        text1: "text-blue-600",
        bg2: "bg-green-200",
        text2: "text-green-600",
        bg3: "bg-yellow-200",
        text3: "text-yellow-600",
        brief: {
            overview: "Build an interactive Sales Analytics Dashboard where users can monitor sales performance, analyze revenue, track products and customers, and understand sales trends through charts and key business metrics.",
            goal: "Create a professional data-driven sales dashboard that helps businesses understand their sales performance, identify top-performing products and regions, and make better business decisions using clear analytics.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and sales data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with sales metrics, charts, tables, filters and performance summaries." },
                { title: "Add Sales Overview", description: "Display key metrics such as total revenue, total orders, average order value, units sold and sales growth." },
                { title: "Add Revenue Analysis", description: "Display revenue trends across different days, months or years to understand sales performance over time." },
                { title: "Add Sales Charts", description: "Use suitable line, bar, pie and other charts to visualize revenue, orders, products and sales trends." },
                { title: "Add Product Analysis", description: "Display top-selling products, product revenue, units sold and product performance." },
                { title: "Add Customer Analysis", description: "Display customer-related metrics such as total customers, new customers, repeat customers and customer spending." },
                { title: "Add Regional Analysis", description: "Compare sales performance across different regions, cities or locations." },
                { title: "Add Sales Targets", description: "Allow users to compare actual sales with business targets and display overall target achievement." },
                { title: "Add Sales Trends", description: "Identify increasing or decreasing sales patterns and display useful performance indicators." },
                { title: "Add Sales Table", description: "Display detailed sales records with order ID, product, customer, date, amount, region and status." },
                { title: "Add Search and Filters", description: "Allow users to search sales records and filter data by date, product, customer, region or order status." },
                { title: "Add Reports", description: "Create useful sales reports summarizing revenue, products, customers, regions and overall sales performance." },
                { title: "Responsive Design", description: "Make the Sales Analytics Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test sales calculations, charts, filters, tables, target tracking, reports and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Sales Analytics Dashboard." }
            ],
            features: [
                "Sales Dashboard",
                "Revenue Tracking",
                "Order Tracking",
                "Average Order Value",
                "Sales Growth",
                "Sales Charts",
                "Product Analysis",
                "Customer Analysis",
                "Regional Analysis",
                "Sales Targets",
                "Sales Trends",
                "Sales Data Table",
                "Search and Filters",
                "Sales Reports",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Sales Dashboard",
                "Sales",
                "Products",
                "Customers",
                "Regions",
                "Sales Reports",
                "Analytics"
            ],
            expectedResult: "A responsive and interactive Sales Analytics Dashboard where users can monitor revenue and orders, analyze products, customers and regions, compare sales against targets, identify trends and view detailed sales reports.",
            requirements: {
                technologies: [
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for sales dashboards, charts, KPIs and business analysis.",
                        link: "https://learn.microsoft.com/power-bi/"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for retrieving and analyzing sales, customer and product data.",
                        link: "https://www.w3schools.com/sql/"
                    },
                    {
                        name: "Excel",
                        learn: "Learn Excel for sales data preparation, calculations and data organization.",
                        link: "https://support.microsoft.com/excel"
                    }
                ],
                prerequisites: [
                    "Basic Power BI dashboards, charts and data modeling",
                    "Basic SQL queries and database concepts",
                    "Basic Excel formulas, tables and data handling"
                ],
                tools: [
                    "Microsoft Power BI",
                    "SQL database",
                    "Microsoft Excel"
                ]
            }
        }
    },

    {
        id: 45,
        department: "Commerce",
        course: "B.Com",
        level: "Advanced",
        image: analytics,
        name: "Business Finance Dashboard",
        paragraph: "A complete dashboard for monitoring business finance, revenue and expenses",
        Tech_1: "Power BI",
        Tech_2: "SQL",
        Tech_3: "Tableau",
        Days: "14 Days",
        rating: "4.9",
        views: "145",
        bg1: "bg-emerald-200",
        text1: "text-emerald-600",
        bg2: "bg-blue-200",
        text2: "text-blue-600",
        bg3: "bg-indigo-200",
        text3: "text-indigo-600",
        brief: {
            overview: "Build an interactive Business Finance Dashboard where users can monitor revenue, expenses, profit, cash flow, budgets and overall financial performance from a centralized dashboard.",
            goal: "Create a professional finance management dashboard that helps businesses understand their financial position, track performance and make better financial decisions using clear metrics, charts and reports.",
            steps: [
                { title: "Project Setup", description: "Create the project structure and set up the required technologies, components and business finance data." },
                { title: "Build Dashboard Layout", description: "Create the main dashboard with financial summary cards, charts, transactions, budgets and performance sections." },
                { title: "Add Financial Overview", description: "Display key metrics such as total revenue, expenses, profit, cash balance and outstanding amounts." },
                { title: "Add Revenue Tracking", description: "Display revenue from different sources and analyze revenue performance across selected time periods." },
                { title: "Add Expense Tracking", description: "Track business expenses and organize them into categories such as salaries, rent, marketing, operations and utilities." },
                { title: "Add Profit Analysis", description: "Calculate and display gross profit, expenses and net profit with clear financial summaries." },
                { title: "Add Cash Flow Analysis", description: "Display cash inflows, cash outflows and available cash to help users understand business cash flow." },
                { title: "Add Budget Management", description: "Allow users to set budgets for business categories and compare planned budgets with actual spending." },
                { title: "Add Financial Charts", description: "Use suitable charts to visualize revenue, expenses, profit, cash flow and category-wise financial performance." },
                { title: "Add Financial Trends", description: "Display monthly or yearly financial trends to help users identify growth, declining revenue or increasing expenses." },
                { title: "Add Transaction Table", description: "Display recent business transactions with date, description, category, amount and transaction type." },
                { title: "Add Search and Filters", description: "Allow users to search transactions and filter financial data by date, category, account or transaction type." },
                { title: "Add Financial Reports", description: "Create summaries for revenue, expenses, profit, cash flow and budget performance." },
                { title: "Responsive Design", description: "Make the Business Finance Dashboard work properly on mobile, tablet and desktop screens." },
                { title: "Testing", description: "Test financial calculations, charts, budgets, transactions, filters, reports and responsive layouts." },
                { title: "Deployment", description: "Build and deploy the completed Business Finance Dashboard." }
            ],
            features: [
                "Financial Dashboard",
                "Revenue Tracking",
                "Expense Tracking",
                "Profit Analysis",
                "Cash Flow Analysis",
                "Budget Management",
                "Financial Charts",
                "Financial Trends",
                "Transaction Management",
                "Search and Filters",
                "Financial Reports",
                "Budget Performance",
                "Financial Metrics",
                "Responsive Design"
            ],
            pages: [
                "Home",
                "Finance Dashboard",
                "Revenue",
                "Expenses",
                "Transactions",
                "Budget",
                "Cash Flow",
                "Financial Reports",
                "Analytics"
            ],
            expectedResult: "A responsive and interactive Business Finance Dashboard where businesses can monitor revenue, expenses, profit and cash flow, manage budgets, analyze financial trends and view detailed financial reports from one centralized platform.",
            requirements: {
                technologies: [
                    {
                        name: "Power BI",
                        learn: "Learn Power BI for financial dashboards, KPIs, charts and business performance analysis.",
                        link: "https://learn.microsoft.com/power-bi/"
                    },
                    {
                        name: "SQL",
                        learn: "Learn SQL for storing, retrieving and analyzing business financial data.",
                        link: "https://www.w3schools.com/sql/"
                    },
                    {
                        name: "Tableau",
                        learn: "Learn Tableau for advanced financial dashboards, visualizations and business insights.",
                        link: "https://www.tableau.com/learn"
                    }
                ],
                prerequisites: [
                    "Basic Power BI dashboards and financial visualizations",
                    "Basic SQL queries and database concepts",
                    "Basic Tableau charts and dashboard concepts"
                ],
                tools: [
                    "Microsoft Power BI",
                    "SQL database",
                    "Tableau"
                ]
            }
        }
    },

];

const Projects = ({ selectDept, selectCourse, selectLevel, selectTech, selectSort, showAll, setShowAll, setFilteredProjects, setShowStartProject, setSelectedProject,setShowViewDetails

}) => {

    const filterProjects = projects
        .filter((card) => {
            return (
                (selectDept === "" || card.department === selectDept) &&
                (selectCourse === "" || card.course === selectCourse) &&
                (selectLevel === "" || card.level === selectLevel) &&
                (
                    selectTech === "" ||
                    card.Tech_1 === selectTech ||
                    card.Tech_2 === selectTech ||
                    card.Tech_3 === selectTech
                )
            );
        })
        .sort((a, b) => {
            if (selectSort === "Highest Rated") {
                return Number(b.rating) - Number(a.rating);
            }
            if (selectSort === "Most Popular") {
                return Number(b.views) - Number(a.views);
            }

            if (selectSort === "Newest") {
                return b.id - a.id;
            }
            if (selectSort === "Shortest Duration") {
                return parseInt(a.Days) - parseInt(b.Days);
            }

            if (selectSort === "Longest Duration") {
                return parseInt(b.Days) - parseInt(a.Days);
            }

            return 0;
        });
    const showProject = showAll ? filterProjects : filterProjects.slice(0, 4);
    useEffect(() => {
        setFilteredProjects(filterProjects);
    }, [
        selectDept,
        selectCourse,
        selectLevel,
        selectTech,
        selectSort
    ]);
    return (
        <div className="grid grid-cols-4 gap-4 w-full">
            {showProject.map((card) => (
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
                    views={card.views}
                    bg1={card.bg1}
                    text1={card.text1}
                    bg2={card.bg2}
                    text2={card.text2}
                    bg3={card.bg3}
                    text3={card.text3}
                    setShowViewDetails={setShowViewDetails}
                    setShowStartProject={setShowStartProject}
                    setSelectedProject={setSelectedProject}
                    project={card}

                />

            ))}
            <div className='col-span-4 w-full flex justify-center items-center mt-6'>
                {filterProjects.length > 4 && !showAll && (
                    <button className='flex gap-2 bg-blue-800 px-6 py-2 rounded-lg text-[16px] text-white font-semibold' onClick={() => setShowAll(true)}>View All Project
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </button>
                )}
            </div>




        </div>
    );
};

export default Projects;
