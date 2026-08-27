const question = {
    cs: {
        Web: {
            Easy: [
                { q: "What is HTML and why is it used?", a: "HTML is used to structure web pages." },
                { q: "Difference between div and span?", a: "<div> is block-level, <span> is inline element." },
                { q: "What is CSS?", a: "CSS is used to style web pages." }
            ],
            Medium: [
                { q: "Difference between display: none and visibility: hidden?", a: "display:none removes element, visibility:hidden hides but keeps space." },
                { q: "What is Flexbox?", a: "Flexbox is a layout system for arranging elements in rows or columns." },
                { q: "Difference between margin and padding?", a: "Margin is outer space, padding is inner space." }
            ],
            Hard: [
                { q: "Synchronous vs Asynchronous JavaScript?", a: "Sync runs line by line, async runs without blocking." },
                { q: "What is a closure?", a: "A closure is a function that remembers its outer variables." },
                { q: "Event bubbling and capturing?", a: "Bubbling is bottom to top, capturing is top to bottom." }
            ]
        },

        App: {
            Easy: [
                { q: "What is mobile app development?", a: "It is the process of creating applications for mobile devices." },
                { q: "Difference between native and hybrid apps?", a: "Native apps are platform-specific, hybrid apps work on multiple platforms." },
                { q: "What is Android Studio?", a: "It is an IDE used to develop Android apps." }
            ],
            Medium: [
                { q: "What is Flutter?", a: "Flutter is a framework by Google to build cross-platform apps." },
                { q: "Difference between iOS and Android development?", a: "iOS uses Swift, Android uses Java/Kotlin." },
                { q: "What is API integration?", a: "Connecting app with external services using APIs." }
            ],
            Hard: [
                { q: "What is lifecycle in Android apps?", a: "Stages like onCreate, onStart, onResume etc." },
                { q: "What is REST API?", a: "A web service using HTTP methods." },
                { q: "What is performance optimization?", a: "Improving speed and efficiency of app." }
            ]
        },

        AI: {
            Easy: [
                { q: "What is AI?", a: "Simulation of human intelligence by machines." },
                { q: "What is ML?", a: "Machines learning from data." },
                { q: "AI vs ML?", a: "ML is a subset of AI." }
            ],
            Medium: [
                { q: "Supervised learning?", a: "Learning using labeled data." },
                { q: "Unsupervised learning?", a: "Learning without labels." },
                { q: "Overfitting?", a: "Model performs well on training but not on new data." }
            ],
            Hard: [
                { q: "Deep learning?", a: "ML using neural networks." },
                { q: "Neural network?", a: "Model inspired by brain neurons." },
                { q: "Backpropagation?", a: "Algorithm to update weights." }
            ]
        },

        DS: {
            Easy: [
                { q: "What is Data Science?", a: "Field of analyzing data for insights." },
                { q: "What is data analysis?", a: "Process of inspecting data." },
                { q: "What is dataset?", a: "Collection of data." }
            ],
            Medium: [
                { q: "What is Pandas?", a: "Python library for data analysis." },
                { q: "What is NumPy?", a: "Library for numerical operations." },
                { q: "What is data cleaning?", a: "Removing errors from data." }
            ],
            Hard: [
                { q: "Machine learning in DS?", a: "Using algorithms to learn patterns." },
                { q: "Regression?", a: "Predicting continuous values." },
                { q: "Classification?", a: "Predicting categories." }
            ]
        },

        CyberSecurity: {
            Easy: [
                { q: "What is cybersecurity?", a: "Protecting systems from attacks." },
                { q: "What is a virus?", a: "Malicious software." },
                { q: "What is firewall?", a: "Security system controlling traffic." }
            ],
            Medium: [
                { q: "What is phishing?", a: "Fake emails to steal data." },
                { q: "What is encryption?", a: "Converting data into secure form." },
                { q: "What is HTTPS?", a: "Secure version of HTTP." }
            ],
            Hard: [
                { q: "Ethical hacking?", a: "Legal hacking to find vulnerabilities." },
                { q: "Penetration testing?", a: "Testing system security." },
                { q: "SQL injection?", a: "Attack using database queries." }
            ]
        },

        Cloud: {
            Easy: [
                { q: "Cloud computing?", a: "Using internet-based services." },
                { q: "AWS?", a: "Amazon cloud platform." },
                { q: "Hosting?", a: "Storing website on server." }
            ],
            Medium: [
                { q: "Docker?", a: "Containerization tool." },
                { q: "CI/CD?", a: "Continuous integration & deployment." },
                { q: "Kubernetes?", a: "Container orchestration tool." }
            ],
            Hard: [
                { q: "Microservices?", a: "Small independent services." },
                { q: "Load balancing?", a: "Distributing traffic." },
                { q: "Scalability?", a: "Handling increased load." }
            ]
        },

        python: {
            Easy: [
                { q: "What is Python?", a: "Programming language." },
                { q: "Variable?", a: "Stores value." },
                { q: "List?", a: "Collection of items." }
            ],
            Medium: [
                { q: "Dictionary?", a: "Key-value pairs." },
                { q: "OOP?", a: "Object oriented programming." },
                { q: "Module?", a: "File with functions." }
            ],
            Hard: [
                { q: "Multithreading?", a: "Running multiple threads." },
                { q: "Generator?", a: "Function that yields values." },
                { q: "Decorator?", a: "Function modifying another function." }
            ]
        }
    },
    science: {
        physics: {
            Easy: [
                { q: "What is the formula for speed?", a: "Speed = Distance / Time." },
                { q: "What is the SI unit of force?", a: "Newton (N)." },
                { q: "What is the value of gravity on Earth?", a: "9.8 m/s²." }
            ],
            Medium: [
                { q: "Define work and write its formula.", a: "Work = Force × Distance." },
                { q: "Explain Newton’s Second Law.", a: "Force equals mass times acceleration (F = ma)." },
                { q: "Kinetic vs Potential energy?", a: "Kinetic is motion energy, potential is stored energy." }
            ],
            Hard: [
                { q: "Projectile motion?", a: "Object motion under gravity in a curved path." },
                { q: "Maxwell’s equations?", a: "Set of equations describing electromagnetism." },
                { q: "Relativity?", a: "Time and space depend on speed and observer." }
            ]
        },

        chemistry: {
            Easy: [
                { q: "What is an atom?", a: "Smallest unit of matter." },
                { q: "What is pH range?", a: "0 to 14." },
                { q: "Formula of water?", a: "H₂O." }
            ],
            Medium: [
                { q: "Ionic vs Covalent bond?", a: "Ionic = electron transfer, covalent = sharing." },
                { q: "Periodic trends?", a: "Patterns in elements like size and reactivity." },
                { q: "Oxidation & Reduction?", a: "Loss and gain of electrons." }
            ],
            Hard: [
                { q: "Hybridization?", a: "Mixing of atomic orbitals." },
                { q: "Le Chatelier’s principle?", a: "System shifts to maintain equilibrium." },
                { q: "Reaction kinetics?", a: "Study of reaction rates." }
            ]
        },

        biology: {
            Easy: [
                { q: "What is a cell?", a: "Basic unit of life." },
                { q: "Full form of DNA?", a: "Deoxyribonucleic Acid." },
                { q: "Photosynthesis?", a: "Plants making food using sunlight." }
            ],
            Medium: [
                { q: "Mitosis vs Meiosis?", a: "Mitosis = same cells, meiosis = reproductive cells." },
                { q: "Digestive system?", a: "Breaks food into nutrients." },
                { q: "Enzymes?", a: "Proteins that speed up reactions." }
            ],
            Hard: [
                { q: "Gene expression?", a: "DNA → RNA → Protein process." },
                { q: "Immune system?", a: "Defends body from pathogens." },
                { q: "Darwin theory?", a: "Evolution by natural selection." }
            ]
        },

        evs: {
            Easy: [
                { q: "What is pollution?", a: "Contamination of environment." },
                { q: "Renewable energy?", a: "Energy from natural sources like sun." },
                { q: "Ecosystem?", a: "Living + non-living interaction." }
            ],
            Medium: [
                { q: "Global warming?", a: "Increase in Earth temperature." },
                { q: "Food chain?", a: "Flow of energy between organisms." },
                { q: "Carbon cycle?", a: "Movement of carbon in nature." }
            ],
            Hard: [
                { q: "Climate change impacts?", a: "Rising sea levels, weather changes." },
                { q: "Biodiversity importance?", a: "Maintains ecosystem balance." },
                { q: "Sustainable development?", a: "Using resources without harming future." }
            ]
        },

        astronomy: {
            Easy: [
                { q: "Is Sun a star?", a: "Yes." },
                { q: "Earth’s satellite?", a: "Moon." },
                { q: "Galaxy?", a: "Collection of stars." }
            ],
            Medium: [
                { q: "Solar system?", a: "Sun and planets." },
                { q: "Black hole?", a: "Strong gravity region." },
                { q: "Light-year?", a: "Distance light travels in a year." }
            ],
            Hard: [
                { q: "Big Bang?", a: "Origin of universe." },
                { q: "Dark matter?", a: "Invisible matter." },
                { q: "Exoplanets?", a: "Planets outside solar system." }
            ]
        },

        biotechnology: {
            Easy: [
                { q: "Biotechnology?", a: "Using biology for technology." },
                { q: "DNA use?", a: "Stores genetic info." },
                { q: "GMO?", a: "Genetically modified organism." }
            ],
            Medium: [
                { q: "PCR?", a: "DNA amplification technique." },
                { q: "Genetic engineering?", a: "Modifying genes." },
                { q: "Cloning?", a: "Creating identical copy." }
            ],
            Hard: [
                { q: "CRISPR?", a: "Gene editing tool." },
                { q: "Recombinant DNA?", a: "Combining DNA from sources." },
                { q: "Stem cells?", a: "Cells that can become any type." }
            ]
        },

        neuroscience: {
            Easy: [
                { q: "Brain function?", a: "Controls body activities." },
                { q: "Neuron?", a: "Nerve cell." },
                { q: "CNS?", a: "Brain and spinal cord." }
            ],
            Medium: [
                { q: "Synapse?", a: "Connection between neurons." },
                { q: "Brain parts?", a: "Control different functions." },
                { q: "Reflex action?", a: "Quick automatic response." }
            ],
            Hard: [
                { q: "Neurotransmitters?", a: "Chemical signals." },
                { q: "Brain plasticity?", a: "Brain adapting ability." },
                { q: "Memory formation?", a: "Storage of information." }
            ]
        },

        microbiology: {
            Easy: [
                { q: "Microorganisms?", a: "Tiny living organisms." },
                { q: "Example bacteria?", a: "E.coli." },
                { q: "Virus?", a: "Infectious particle." }
            ],
            Medium: [
                { q: "Bacteria vs virus?", a: "Bacteria are living, viruses need host." },
                { q: "Sterilization?", a: "Removing microbes." },
                { q: "Antibiotics?", a: "Kill bacteria." }
            ],
            Hard: [
                { q: "Pathogenesis?", a: "Disease development." },
                { q: "Growth curve?", a: "Phases of microbial growth." },
                { q: "Immunology?", a: "Study of immune system." }
            ]
        },

        geology: {
            Easy: [
                { q: "Rock?", a: "Solid Earth material." },
                { q: "Types of rocks?", a: "Igneous, sedimentary, metamorphic." },
                { q: "Earth layers?", a: "Crust, mantle, core." }
            ],
            Medium: [
                { q: "Plate tectonics?", a: "Movement of Earth plates." },
                { q: "Volcano formation?", a: "Magma eruption." },
                { q: "Earthquakes?", a: "Plate movement shaking." }
            ],
            Hard: [
                { q: "Rock cycle?", a: "Transformation of rocks." },
                { q: "Geological time scale?", a: "History of Earth timeline." },
                { q: "Minerals?", a: "Natural solid substances." }
            ]
        }
    },
    arts: {
        literature: {
            Easy: [
                { q: "What is poetry?", a: "Poetry is a form of writing that uses rhythm, emotions, and expressive language." },
                { q: "Name one famous Tamil poet.", a: "Subramania Bharati." },
                { q: "What is a novel?", a: "A long fictional story written in prose." }
            ],
            Medium: [
                { q: "Difference between prose and poetry?", a: "Prose is normal writing; poetry uses rhythm and structure." },
                { q: "What is a theme?", a: "The main idea or message of a story." },
                { q: "What are literary devices?", a: "Tools like metaphor, simile, alliteration used in writing." }
            ],
            Hard: [
                { q: "What is symbolism?", a: "Using symbols to represent deeper meanings." },
                { q: "Classical vs Modern literature?", a: "Classical = traditional; Modern = contemporary style and themes." },
                { q: "What is postmodern literature?", a: "Literature that breaks traditional rules and mixes styles." }
            ]
        },

        history: {
            Easy: [
                { q: "First Prime Minister of India?", a: "Jawaharlal Nehru." },
                { q: "What is history?", a: "Study of past events." },
                { q: "When did WWII end?", a: "1945." }
            ],
            Medium: [
                { q: "Causes of WWI?", a: "Alliances, nationalism, imperialism, assassination." },
                { q: "Indus Valley Civilization?", a: "One of the earliest urban civilizations in India." },
                { q: "Freedom struggle?", a: "India’s fight against British rule." }
            ],
            Hard: [
                { q: "Impact of colonialism?", a: "Economic exploitation and cultural changes." },
                { q: "WWI vs WWII?", a: "WWII was more global and destructive." },
                { q: "Cold War causes?", a: "Political tension between USA and USSR." }
            ]
        },

        geography: {
            Easy: [
                { q: "What is a continent?", a: "A large landmass." },
                { q: "Largest ocean?", a: "Pacific Ocean." },
                { q: "What is climate?", a: "Long-term weather pattern." }
            ],
            Medium: [
                { q: "Types of rainfall?", a: "Convectional, orographic, cyclonic." },
                { q: "Population density?", a: "People per unit area." },
                { q: "Physical vs Human geography?", a: "Natural features vs human activities." }
            ],
            Hard: [
                { q: "Plate tectonics?", a: "Movement of Earth’s plates." },
                { q: "Climate change effects?", a: "Rising temperature, sea levels." },
                { q: "GIS?", a: "Geographic Information System for mapping data." }
            ]
        },

        psychology: {
            Easy: [
                { q: "What is psychology?", a: "Study of mind and behavior." },
                { q: "What is behavior?", a: "Actions of a person." },
                { q: "What are emotions?", a: "Feelings like happiness, anger." }
            ],
            Medium: [
                { q: "Types of memory?", a: "Short-term and long-term." },
                { q: "What is personality?", a: "Unique traits of a person." },
                { q: "What is stress?", a: "Mental pressure." }
            ],
            Hard: [
                { q: "Cognitive development?", a: "Growth of thinking ability." },
                { q: "Freud theory?", a: "Id, ego, superego." },
                { q: "Scientific behavior study?", a: "Through experiments and observation." }
            ]
        },

        politicalscience: {
            Easy: [
                { q: "What is democracy?", a: "Government by people." },
                { q: "What is constitution?", a: "Set of laws." },
                { q: "President of India?", a: "Changes over time." }
            ],
            Medium: [
                { q: "Types of government?", a: "Democracy, monarchy, dictatorship." },
                { q: "Separation of powers?", a: "Legislative, executive, judiciary." },
                { q: "Fundamental rights?", a: "Basic rights of citizens." }
            ],
            Hard: [
                { q: "Political ideologies?", a: "Beliefs like socialism, capitalism." },
                { q: "International relations?", a: "Relations between countries." },
                { q: "Public policy?", a: "Government decisions for society." }
            ]
        },

        journalism: {
            Easy: [
                { q: "What is journalism?", a: "Reporting news." },
                { q: "What is news?", a: "Information about events." },
                { q: "What is media?", a: "Communication channels." }
            ],
            Medium: [
                { q: "Types of journalism?", a: "Print, digital, broadcast." },
                { q: "Digital media?", a: "Online platforms." },
                { q: "Reporting?", a: "Collecting and presenting news." }
            ],
            Hard: [
                { q: "Ethics in journalism?", a: "Truth and fairness." },
                { q: "Media role?", a: "Inform public." },
                { q: "Fake news impact?", a: "Misleads people." }
            ]
        },

        sociology: {
            Easy: [
                { q: "What is society?", a: "Group of people." },
                { q: "What is culture?", a: "Traditions and beliefs." },
                { q: "What is family?", a: "Basic social unit." }
            ],
            Medium: [
                { q: "Social groups?", a: "Groups with interaction." },
                { q: "Socialization?", a: "Learning norms." },
                { q: "Inequality?", a: "Unequal opportunities." }
            ],
            Hard: [
                { q: "Social theories?", a: "Ideas explaining society." },
                { q: "Gender inequality?", a: "Unequal treatment." },
                { q: "Institutions?", a: "Organized systems like school." }
            ]
        },

        economics: {
            Easy: [
                { q: "What is economics?", a: "Study of money and resources." },
                { q: "What is money?", a: "Medium of exchange." },
                { q: "What is demand?", a: "Desire to buy." }
            ],
            Medium: [
                { q: "Supply & demand?", a: "Price depends on both." },
                { q: "Inflation?", a: "Rise in prices." },
                { q: "GDP?", a: "Total production." }
            ],
            Hard: [
                { q: "Economic growth?", a: "Increase in production." },
                { q: "Fiscal policy?", a: "Government tax and spending." },
                { q: "Globalization?", a: "Global trade connection." }
            ]
        },

        philosophy: {
            Easy: [
                { q: "What is philosophy?", a: "Study of ideas and truth." },
                { q: "What is ethics?", a: "Right and wrong." },
                { q: "What is truth?", a: "Fact or reality." }
            ],
            Medium: [
                { q: "What is logic?", a: "Reasoning process." },
                { q: "What is knowledge?", a: "Understanding information." },
                { q: "What is morality?", a: "Principles of behavior." }
            ],
            Hard: [
                { q: "What is metaphysics?", a: "Study of reality." },
                { q: "What is existentialism?", a: "Focus on human existence." },
                { q: "What is epistemology?", a: "Study of knowledge." }
            ]
        }
    },
    maths: {
        algebra: {
            Easy: [
                { q: "What is an equation?", a: "A mathematical statement with '=' sign." },
                { q: "What is a variable?", a: "A symbol representing a value (e.g., x)." },
                { q: "Solve: x + 5 = 10", a: "x = 5" }
            ],
            Medium: [
                { q: "What is a polynomial?", a: "Expression with variables and powers." },
                { q: "Solve: 2x = 8", a: "x = 4" },
                { q: "What is a function?", a: "Relation where each input has one output." }
            ],
            Hard: [
                { q: "Solve: x² - 5x + 6 = 0", a: "x = 2, 3" },
                { q: "What is a matrix?", a: "Rectangular array of numbers." },
                { q: "Factorize: x² - 9", a: "(x - 3)(x + 3)" }
            ]
        },

        calculus: {
            Easy: [
                { q: "What is a limit?", a: "Value a function approaches." },
                { q: "What is a derivative?", a: "Rate of change." },
                { q: "d/dx (x²)?", a: "2x" }
            ],
            Medium: [
                { q: "What is integration?", a: "Reverse of differentiation." },
                { q: "∫x dx?", a: "x²/2 + C" },
                { q: "Limit of x→0 (x²)?", a: "0" }
            ],
            Hard: [
                { q: "d/dx (sin x)?", a: "cos x" },
                { q: "∫cos x dx?", a: "sin x + C" },
                { q: "Application of calculus?", a: "Used in motion, optimization." }
            ]
        },

        geometry: {
            Easy: [
                { q: "What is a triangle?", a: "A 3-sided shape." },
                { q: "Sum of angles in triangle?", a: "180°" },
                { q: "What is a circle?", a: "Set of points equidistant from center." }
            ],
            Medium: [
                { q: "What is Pythagoras theorem?", a: "a² + b² = c²" },
                { q: "Area of rectangle?", a: "length × breadth" },
                { q: "What is coordinate geometry?", a: "Geometry using graph." }
            ],
            Hard: [
                { q: "Distance formula?", a: "√[(x₂-x₁)² + (y₂-y₁)²]" },
                { q: "Equation of circle?", a: "(x-h)² + (y-k)² = r²" },
                { q: "3D shapes?", a: "Shapes with volume (cube, sphere)." }
            ]
        },

        statistics: {
            Easy: [
                { q: "What is mean?", a: "Average value." },
                { q: "What is median?", a: "Middle value." },
                { q: "What is data?", a: "Collection of values." }
            ],
            Medium: [
                { q: "What is mode?", a: "Most frequent value." },
                { q: "What is range?", a: "Max - Min" },
                { q: "What is distribution?", a: "Data pattern." }
            ],
            Hard: [
                { q: "What is variance?", a: "Measure of spread." },
                { q: "What is standard deviation?", a: "Square root of variance." },
                { q: "What is regression?", a: "Relationship between variables." }
            ]
        },

        trigonometry: {
            Easy: [
                { q: "sin 0° = ?", a: "0" },
                { q: "cos 0° = ?", a: "1" },
                { q: "tan 45° = ?", a: "1" }
            ],
            Medium: [
                { q: "Trigonometric identity?", a: "sin²θ + cos²θ = 1" },
                { q: "tan θ = ?", a: "sin θ / cos θ" },
                { q: "sin 90° = ?", a: "1" }
            ],
            Hard: [
                { q: "cos 60° = ?", a: "1/2" },
                { q: "tan 0° = ?", a: "0" },
                { q: "What is inverse trigonometry?", a: "Reverse trig functions." }
            ]
        },

        discrete: {
            Easy: [
                { q: "What is a set?", a: "Collection of elements." },
                { q: "What is logic?", a: "Study of reasoning." },
                { q: "What is binary?", a: "Base-2 system." }
            ],
            Medium: [
                { q: "Types of sets?", a: "Finite, infinite." },
                { q: "What is a graph?", a: "Nodes and edges." },
                { q: "What is a truth table?", a: "Logical results table." }
            ],
            Hard: [
                { q: "What is combinatorics?", a: "Counting methods." },
                { q: "What is permutation?", a: "Arrangement of objects." },
                { q: "What is recursion?", a: "Function calling itself." }
            ]
        },

        numbertheory: {
            Easy: [
                { q: "What is a prime number?", a: "Divisible only by 1 and itself." },
                { q: "Example of prime number?", a: "2" },
                { q: "What is an even number?", a: "Divisible by 2." }
            ],
            Medium: [
                { q: "What is GCD?", a: "Greatest common divisor." },
                { q: "What is LCM?", a: "Least common multiple." },
                { q: "What is a divisibility rule?", a: "Rule to check division." }
            ],
            Hard: [
                { q: "What is modular arithmetic?", a: "Arithmetic with remainders." },
                { q: "What is a theorem?", a: "Proven statement." },
                { q: "What is prime factorization?", a: "Breaking number into primes." }
            ]
        },

        probability: {
            Easy: [
                { q: "What is probability?", a: "Chance of an event." },
                { q: "Probability range?", a: "0 to 1" },
                { q: "Example event?", a: "Tossing a coin." }
            ],
            Medium: [
                { q: "Probability formula?", a: "Favorable / Total outcomes" },
                { q: "Independent events?", a: "Events not affecting each other." },
                { q: "Sample space?", a: "All possible outcomes." }
            ],
            Hard: [
                { q: "Conditional probability?", a: "Probability with condition." },
                { q: "Bayes theorem?", a: "Updating probability." },
                { q: "Expected value?", a: "Average outcome." }
            ]
        },

        linearalgebra: {
            Easy: [
                { q: "What is a vector?", a: "Quantity with magnitude and direction." },
                { q: "What is a matrix?", a: "Array of numbers." },
                { q: "What is dimension?", a: "Size of matrix." }
            ],
            Medium: [
                { q: "Matrix addition?", a: "Add corresponding elements." },
                { q: "Dot product?", a: "Multiply and sum vectors." },
                { q: "Identity matrix?", a: "Matrix with 1s on diagonal." }
            ],
            Hard: [
                { q: "What is eigenvalue?", a: "Scalar related to matrix." },
                { q: "What is transformation?", a: "Change in space." },
                { q: "Determinant?", a: "Value from matrix." }
            ]
        }
    },
    engineering: {
        mechanical: {
            Easy: [
                { q: "What is a machine?", a: "A device that makes work easier." },
                { q: "What is force?", a: "Push or pull acting on an object." },
                { q: "What is energy?", a: "Ability to do work." }
            ],
            Medium: [
                { q: "What is thermodynamics?", a: "Study of heat and energy transfer." },
                { q: "What is fluid mechanics?", a: "Study of fluids in motion." },
                { q: "What is CAD?", a: "Computer-Aided Design for modeling." }
            ],
            Hard: [
                { q: "What is entropy?", a: "Measure of disorder in a system." },
                { q: "What is Bernoulli’s principle?", a: "Pressure decreases as velocity increases." },
                { q: "What is manufacturing process?", a: "Converting raw materials into products." }
            ]
        },

        civil: {
            Easy: [
                { q: "What is a structure?", a: "Something built (bridge, building)." },
                { q: "What is concrete?", a: "Mixture of cement, sand, gravel, water." },
                { q: "What is a foundation?", a: "Base of a structure." }
            ],
            Medium: [
                { q: "What is surveying?", a: "Measuring land." },
                { q: "What is load?", a: "Force acting on structure." },
                { q: "What is soil testing?", a: "Checking soil strength." }
            ],
            Hard: [
                { q: "What is stress?", a: "Force per unit area." },
                { q: "What is strain?", a: "Deformation due to stress." },
                { q: "What is structural analysis?", a: "Study of forces in structures." }
            ]
        },

        electrical: {
            Easy: [
                { q: "What is current?", a: "Flow of electric charge." },
                { q: "Unit of voltage?", a: "Volt." },
                { q: "What is a circuit?", a: "Path for current flow." }
            ],
            Medium: [
                { q: "What is Ohm’s Law?", a: "V = I × R" },
                { q: "What is power?", a: "Work done per unit time." },
                { q: "What is resistance?", a: "Opposition to current." }
            ],
            Hard: [
                { q: "What is AC and DC?", a: "AC changes direction, DC is constant." },
                { q: "What is a transformer?", a: "Device to change voltage." },
                { q: "What is a control system?", a: "System that manages outputs." }
            ]
        },

        ece: {
            Easy: [
                { q: "What is an electronic circuit?", a: "Circuit using electronic components." },
                { q: "What is a signal?", a: "Information carrier." },
                { q: "What is a diode?", a: "Allows current in one direction." }
            ],
            Medium: [
                { q: "What is an amplifier?", a: "Increases signal strength." },
                { q: "What is modulation?", a: "Changing signal for transmission." },
                { q: "What is IoT?", a: "Internet-connected devices." }
            ],
            Hard: [
                { q: "What is VLSI?", a: "Very Large Scale Integration of circuits." },
                { q: "What is an embedded system?", a: "Dedicated computing system." },
                { q: "What is signal processing?", a: "Analyzing signals." }
            ]
        },

        cse: {
            Easy: [
                { q: "What is a computer?", a: "Machine that processes data." },
                { q: "What is programming?", a: "Writing instructions for computer." },
                { q: "What is software?", a: "Programs running on computer." }
            ],
            Medium: [
                { q: "What is data structure?", a: "Way to organize data." },
                { q: "What is algorithm?", a: "Step-by-step solution." },
                { q: "What is cloud computing?", a: "Online data storage/service." }
            ],
            Hard: [
                { q: "What is AI?", a: "Machines simulating intelligence." },
                { q: "What is machine learning?", a: "Systems learning from data." },
                { q: "What is database?", a: "Organized data storage." }
            ]
        },

        chemical: {
            Easy: [
                { q: "What is a chemical process?", a: "Conversion of substances." },
                { q: "What is a reaction?", a: "Chemical change." },
                { q: "What is a catalyst?", a: "Speeds up reaction." }
            ],
            Medium: [
                { q: "What is thermodynamics?", a: "Energy and heat study." },
                { q: "What is process design?", a: "Planning production system." },
                { q: "What is distillation?", a: "Separation using boiling point." }
            ],
            Hard: [
                { q: "What is reaction engineering?", a: "Study of chemical reactors." },
                { q: "What is mass transfer?", a: "Movement of substances." },
                { q: "What is petroleum refining?", a: "Processing crude oil." }
            ]
        },

        aerospace: {
            Easy: [
                { q: "What is aircraft?", a: "Flying machine." },
                { q: "What is lift?", a: "Force that keeps plane in air." },
                { q: "What is drag?", a: "Air resistance." }
            ],
            Medium: [
                { q: "What is aerodynamics?", a: "Study of air flow." },
                { q: "What is propulsion?", a: "Force to move aircraft." },
                { q: "What is avionics?", a: "Electronic systems in aircraft." }
            ],
            Hard: [
                { q: "What is rocket propulsion?", a: "Movement using thrust." },
                { q: "What is orbital motion?", a: "Movement around Earth." },
                { q: "What is space technology?", a: "Tech used in space missions." }
            ]
        },

        biomedical: {
            Easy: [
                { q: "What is biomedical engineering?", a: "Engineering applied to medicine." },
                { q: "What is a medical device?", a: "Tool used in healthcare." },
                { q: "What is prosthetics?", a: "Artificial body parts." }
            ],
            Medium: [
                { q: "What is biomechanics?", a: "Study of body movement." },
                { q: "What is medical imaging?", a: "Techniques like X-ray." },
                { q: "What is ECG?", a: "Heart signal recording." }
            ],
            Hard: [
                { q: "What is bioinstrumentation?", a: "Devices measuring body signals." },
                { q: "What is tissue engineering?", a: "Growing tissues artificially." },
                { q: "What is rehabilitation engineering?", a: "Helping disabled patients." }
            ]
        }
    },
    commerce: {
        accountancy: {
            Easy: [
                { q: "What is accounting?", a: "Recording financial transactions." },
                { q: "What is a ledger?", a: "Book of accounts." },
                { q: "What is debit and credit?", a: "Debit = entry on left, Credit = entry on right." }
            ],
            Medium: [
                { q: "What is a balance sheet?", a: "Statement of assets and liabilities." },
                { q: "What is bookkeeping?", a: "Recording daily transactions." },
                { q: "What is GST?", a: "Goods and Services Tax." }
            ],
            Hard: [
                { q: "What is double entry system?", a: "Every transaction has two entries." },
                { q: "What is trial balance?", a: "Check accuracy of accounts." },
                { q: "What is financial statement?", a: "Summary of financial performance." }
            ]
        },

        business: {
            Easy: [
                { q: "What is business?", a: "Activity of buying and selling." },
                { q: "What is management?", a: "Planning and controlling work." },
                { q: "What is organization?", a: "Structure of a company." }
            ],
            Medium: [
                { q: "What is leadership?", a: "Guiding a team." },
                { q: "What is entrepreneurship?", a: "Starting a business." },
                { q: "What is planning?", a: "Deciding future actions." }
            ],
            Hard: [
                { q: "What is decision making?", a: "Choosing best option." },
                { q: "What is coordination?", a: "Aligning activities." },
                { q: "What is business environment?", a: "External factors affecting business." }
            ]
        },

        economics: {
            Easy: [
                { q: "What is economics?", a: "Study of resources." },
                { q: "What is demand?", a: "Desire to buy." },
                { q: "What is supply?", a: "Quantity available." }
            ],
            Medium: [
                { q: "What is inflation?", a: "Rise in prices." },
                { q: "What is GDP?", a: "Total production." },
                { q: "What is market?", a: "Place of exchange." }
            ],
            Hard: [
                { q: "What is fiscal policy?", a: "Government spending/tax policy." },
                { q: "What is globalization?", a: "Global trade connection." },
                { q: "What is economic growth?", a: "Increase in output." }
            ]
        },

        finance: {
            Easy: [
                { q: "What is finance?", a: "Management of money." },
                { q: "What is investment?", a: "Putting money for returns." },
                { q: "What is stock market?", a: "Place to buy/sell shares." }
            ],
            Medium: [
                { q: "What are mutual funds?", a: "Pooled investments." },
                { q: "What is risk?", a: "Chance of loss." },
                { q: "What is return?", a: "Profit from investment." }
            ],
            Hard: [
                { q: "What is portfolio?", a: "Collection of investments." },
                { q: "What is diversification?", a: "Spreading risk." },
                { q: "What is financial planning?", a: "Managing money for future." }
            ]
        },

        banking: {
            Easy: [
                { q: "What is a bank?", a: "Institution handling money." },
                { q: "What is deposit?", a: "Money kept in bank." },
                { q: "What is loan?", a: "Borrowed money." }
            ],
            Medium: [
                { q: "What is RBI?", a: "Central bank of India." },
                { q: "What is interest?", a: "Cost of borrowing." },
                { q: "What is digital banking?", a: "Online banking services." }
            ],
            Hard: [
                { q: "What is monetary policy?", a: "Control of money supply." },
                { q: "What is credit system?", a: "Lending system." },
                { q: "What is insurance?", a: "Protection against loss." }
            ]
        },

        marketing: {
            Easy: [
                { q: "What is marketing?", a: "Promoting products." },
                { q: "What is branding?", a: "Creating product identity." },
                { q: "What is advertising?", a: "Promoting through media." }
            ],
            Medium: [
                { q: "What is digital marketing?", a: "Online promotion." },
                { q: "What is SEO?", a: "Search engine optimization." },
                { q: "What is consumer behavior?", a: "Buying behavior of customers." }
            ],
            Hard: [
                { q: "What is market segmentation?", a: "Dividing customers into groups." },
                { q: "What is marketing mix?", a: "Product, Price, Place, Promotion." },
                { q: "What is brand strategy?", a: "Long-term brand planning." }
            ]
        },

        taxation: {
            Easy: [
                { q: "What is tax?", a: "Money paid to government." },
                { q: "What is income tax?", a: "Tax on income." },
                { q: "What is GST?", a: "Goods and Services Tax." }
            ],
            Medium: [
                { q: "What is tax filing?", a: "Submitting tax details." },
                { q: "What is direct tax?", a: "Paid directly (income tax)." },
                { q: "What is indirect tax?", a: "Paid indirectly (GST)." }
            ],
            Hard: [
                { q: "What is corporate tax?", a: "Tax on companies." },
                { q: "What is tax evasion?", a: "Illegal non-payment." },
                { q: "What is tax planning?", a: "Legal way to reduce tax." }
            ]
        },

        statistics: {
            Easy: [
                { q: "What is data?", a: "Collection of values." },
                { q: "What is mean?", a: "Average." },
                { q: "What is median?", a: "Middle value." }
            ],
            Medium: [
                { q: "What is probability?", a: "Chance of event." },
                { q: "What is distribution?", a: "Data pattern." },
                { q: "What is analysis?", a: "Studying data." }
            ],
            Hard: [
                { q: "What is forecasting?", a: "Predicting future trends." },
                { q: "What is regression?", a: "Relationship between variables." },
                { q: "What is hypothesis testing?", a: "Testing assumptions." }
            ]
        },

        ecommerce: {
            Easy: [
                { q: "What is e-commerce?", a: "Online buying/selling." },
                { q: "What is digital payment?", a: "Online payment method." },
                { q: "What is online business?", a: "Business on internet." }
            ],
            Medium: [
                { q: "What is supply chain?", a: "Flow of goods." },
                { q: "What is dropshipping?", a: "Selling without stock." },
                { q: "What is payment gateway?", a: "Online payment system." }
            ],
            Hard: [
                { q: "What is logistics?", a: "Managing delivery." },
                { q: "What is customer experience?", a: "User satisfaction." },
                { q: "What is e-commerce platform?", a: "Website/app for selling." }
            ]
        }
    },
    law: {
        constitutional: {
            Easy: [
                { q: "What is the Constitution?", a: "Supreme law of a country." },
                { q: "What are Fundamental Rights?", a: "Basic rights given to citizens." },
                { q: "What is a duty?", a: "Responsibility of a citizen." }
            ],
            Medium: [
                { q: "What are Directive Principles?", a: "Guidelines for government policies." },
                { q: "What is amendment?", a: "Change in Constitution." },
                { q: "What is judiciary?", a: "System of courts." }
            ],
            Hard: [
                { q: "What is judicial review?", a: "Courts check laws' validity." },
                { q: "What is federalism?", a: "Power division between center & states." },
                { q: "What is separation of powers?", a: "Division into legislative, executive, judiciary." }
            ]
        },

        criminal: {
            Easy: [
                { q: "What is crime?", a: "Act against law." },
                { q: "What is IPC?", a: "Indian Penal Code." },
                { q: "What is punishment?", a: "Penalty for crime." }
            ],
            Medium: [
                { q: "What is CrPC?", a: "Criminal Procedure Code." },
                { q: "What is bail?", a: "Temporary release of accused." },
                { q: "What is evidence?", a: "Proof in court." }
            ],
            Hard: [
                { q: "What is trial?", a: "Court process to decide guilt." },
                { q: "What is mens rea?", a: "Guilty mind." },
                { q: "What is actus reus?", a: "Guilty act." }
            ]
        },

        civil: {
            Easy: [
                { q: "What is civil law?", a: "Law for disputes between people." },
                { q: "What is contract?", a: "Legal agreement." },
                { q: "What is property?", a: "Owned assets." }
            ],
            Medium: [
                { q: "What is CPC?", a: "Civil Procedure Code." },
                { q: "What is tort?", a: "Civil wrong." },
                { q: "What is damages?", a: "Compensation for loss." }
            ],
            Hard: [
                { q: "What is breach of contract?", a: "Breaking agreement." },
                { q: "What is injunction?", a: "Court order to stop action." },
                { q: "What is liability?", a: "Legal responsibility." }
            ]
        },

        corporate: {
            Easy: [
                { q: "What is a company?", a: "Legal business entity." },
                { q: "What is shareholder?", a: "Owner of company shares." },
                { q: "What is SEBI?", a: "Regulator of stock market." }
            ],
            Medium: [
                { q: "What is Companies Act?", a: "Law governing companies." },
                { q: "What is merger?", a: "Joining two companies." },
                { q: "What is acquisition?", a: "Buying another company." }
            ],
            Hard: [
                { q: "What is insolvency?", a: "Inability to pay debts." },
                { q: "What is corporate governance?", a: "Rules for managing company." },
                { q: "What is compliance?", a: "Following legal rules." }
            ]
        },

        family: {
            Easy: [
                { q: "What is marriage?", a: "Legal union of two people." },
                { q: "What is divorce?", a: "Legal separation." },
                { q: "What is adoption?", a: "Taking child legally." }
            ],
            Medium: [
                { q: "What is inheritance?", a: "Passing property after death." },
                { q: "What is maintenance?", a: "Financial support." },
                { q: "What is guardianship?", a: "Legal care of minor." }
            ],
            Hard: [
                { q: "What is personal law?", a: "Laws based on religion." },
                { q: "What is alimony?", a: "Financial support after divorce." },
                { q: "What is succession law?", a: "Law of property transfer." }
            ]
        },

        cyber: {
            Easy: [
                { q: "What is cyber law?", a: "Law for internet activities." },
                { q: "What is cyber crime?", a: "Crime using internet." },
                { q: "What is hacking?", a: "Unauthorized access." }
            ],
            Medium: [
                { q: "What is IT Act?", a: "Law for digital activities." },
                { q: "What is data privacy?", a: "Protection of personal data." },
                { q: "What is phishing?", a: "Fake attempt to steal data." }
            ],
            Hard: [
                { q: "What is digital signature?", a: "Electronic authentication." },
                { q: "What is cyber security?", a: "Protection of systems." },
                { q: "What is cyber fraud?", a: "Online cheating." }
            ]
        },

        ip: {
            Easy: [
                { q: "What is IP?", a: "Rights for creations." },
                { q: "What is patent?", a: "Protection for invention." },
                { q: "What is trademark?", a: "Brand identity symbol." }
            ],
            Medium: [
                { q: "What is copyright?", a: "Protection for creative work." },
                { q: "What is trade secret?", a: "Confidential business info." },
                { q: "What is infringement?", a: "Unauthorized use." }
            ],
            Hard: [
                { q: "What is licensing?", a: "Permission to use IP." },
                { q: "What is IP rights?", a: "Legal rights for creators." },
                { q: "What is industrial design?", a: "Protection for design." }
            ]
        },

        international: {
            Easy: [
                { q: "What is international law?", a: "Law between countries." },
                { q: "What is treaty?", a: "Agreement between nations." },
                { q: "What is UN?", a: "United Nations organization." }
            ],
            Medium: [
                { q: "What are human rights?", a: "Basic rights globally." },
                { q: "What is trade law?", a: "Rules for global trade." },
                { q: "What is diplomacy?", a: "Managing relations." }
            ],
            Hard: [
                { q: "What is jurisdiction?", a: "Legal authority." },
                { q: "What is sovereignty?", a: "Supreme power of state." },
                { q: "What is arbitration?", a: "Dispute resolution method." }
            ]
        },

        environmental: {
            Easy: [
                { q: "What is environmental law?", a: "Laws to protect nature." },
                { q: "What is pollution?", a: "Harm to environment." },
                { q: "What is wildlife protection?", a: "Protecting animals." }
            ],
            Medium: [
                { q: "What is pollution control?", a: "Reducing pollution." },
                { q: "What is forest law?", a: "Protection of forests." },
                { q: "What is green tribunal?", a: "Environmental court." }
            ],
            Hard: [
                { q: "What is sustainable development?", a: "Development without harm." },
                { q: "What is environmental impact?", a: "Effect on nature." },
                { q: "What is climate law?", a: "Laws for climate protection." }
            ]
        }
    },
    mba: {
        strategy: {
            Easy: [
                { q: "What is business strategy?", a: "Plan to achieve business goals." },
                { q: "What is SWOT analysis?", a: "Strengths, Weaknesses, Opportunities, Threats." },
                { q: "What is competition?", a: "Rival businesses in market." }
            ],
            Medium: [
                { q: "What is Porter’s 5 Forces?", a: "Model to analyze competition." },
                { q: "What is strategic planning?", a: "Planning long-term goals." },
                { q: "What is competitive advantage?", a: "Unique strength over rivals." }
            ],
            Hard: [
                { q: "What is cost leadership?", a: "Competing with lowest cost." },
                { q: "What is differentiation strategy?", a: "Offering unique products." },
                { q: "What is business expansion?", a: "Growing into new markets." }
            ]
        },

        marketing: {
            Easy: [
                { q: "What is marketing?", a: "Promoting products/services." },
                { q: "What is branding?", a: "Creating product identity." },
                { q: "What is customer?", a: "Person buying product." }
            ],
            Medium: [
                { q: "What are 4Ps?", a: "Product, Price, Place, Promotion." },
                { q: "What is consumer behavior?", a: "Buying decisions of customers." },
                { q: "What is digital marketing?", a: "Online promotion." }
            ],
            Hard: [
                { q: "What is market segmentation?", a: "Dividing customers into groups." },
                { q: "What is positioning?", a: "Creating product image." },
                { q: "What is marketing research?", a: "Collecting market data." }
            ]
        },

        finance: {
            Easy: [
                { q: "What is finance?", a: "Managing money." },
                { q: "What is budget?", a: "Plan for income and expenses." },
                { q: "What is investment?", a: "Putting money for returns." }
            ],
            Medium: [
                { q: "What is capital structure?", a: "Mix of debt and equity." },
                { q: "What is risk?", a: "Chance of loss." },
                { q: "What is profit?", a: "Income minus expenses." }
            ],
            Hard: [
                { q: "What is financial planning?", a: "Managing future finances." },
                { q: "What is working capital?", a: "Daily operational funds." },
                { q: "What is dividend?", a: "Profit shared with shareholders." }
            ]
        },

        hrm: {
            Easy: [
                { q: "What is HRM?", a: "Managing employees." },
                { q: "What is recruitment?", a: "Hiring employees." },
                { q: "What is training?", a: "Teaching skills." }
            ],
            Medium: [
                { q: "What is performance management?", a: "Evaluating employee work." },
                { q: "What is motivation?", a: "Encouraging employees." },
                { q: "What is labour law?", a: "Laws for workers." }
            ],
            Hard: [
                { q: "What is organizational culture?", a: "Values in company." },
                { q: "What is employee engagement?", a: "Employee involvement." },
                { q: "What is conflict resolution?", a: "Solving workplace issues." }
            ]
        },

        operations: {
            Easy: [
                { q: "What is operations?", a: "Production of goods/services." },
                { q: "What is supply chain?", a: "Flow of goods." },
                { q: "What is production?", a: "Making products." }
            ],
            Medium: [
                { q: "What is quality control?", a: "Maintaining product quality." },
                { q: "What is inventory?", a: "Stored goods." },
                { q: "What is lean management?", a: "Reducing waste." }
            ],
            Hard: [
                { q: "What is Six Sigma?", a: "Quality improvement method." },
                { q: "What is process optimization?", a: "Improving efficiency." },
                { q: "What is logistics?", a: "Managing transportation." }
            ]
        },

        entrepreneurship: {
            Easy: [
                { q: "What is entrepreneurship?", a: "Starting a business." },
                { q: "What is startup?", a: "New business." },
                { q: "What is idea?", a: "Business concept." }
            ],
            Medium: [
                { q: "What is business plan?", a: "Plan for business." },
                { q: "What is funding?", a: "Getting money." },
                { q: "What is innovation?", a: "New ideas/products." }
            ],
            Hard: [
                { q: "What is venture capital?", a: "Investment in startups." },
                { q: "What is scaling?", a: "Growing business." },
                { q: "What is risk-taking?", a: "Taking uncertain decisions." }
            ]
        },

        analytics: {
            Easy: [
                { q: "What is data?", a: "Information collected." },
                { q: "What is analysis?", a: "Studying data." },
                { q: "What is Excel?", a: "Tool for data." }
            ],
            Medium: [
                { q: "What is SQL?", a: "Database query language." },
                { q: "What is dashboard?", a: "Data visualization." },
                { q: "What is trend?", a: "Pattern over time." }
            ],
            Hard: [
                { q: "What is predictive analysis?", a: "Forecasting future." },
                { q: "What is data mining?", a: "Finding patterns in data." },
                { q: "What is KPI?", a: "Key performance indicator." }
            ]
        },

        leadership: {
            Easy: [
                { q: "What is leadership?", a: "Guiding people." },
                { q: "What is team?", a: "Group working together." },
                { q: "What is motivation?", a: "Driving force." }
            ],
            Medium: [
                { q: "What are leadership styles?", a: "Different ways of leading." },
                { q: "What is team building?", a: "Creating strong teams." },
                { q: "What is communication?", a: "Sharing information." }
            ],
            Hard: [
                { q: "What is organizational behavior?", a: "Study of behavior in organization." },
                { q: "What is emotional intelligence?", a: "Managing emotions." },
                { q: "What is conflict management?", a: "Handling disputes." }
            ]
        },

        international: {
            Easy: [
                { q: "What is international business?", a: "Business across countries." },
                { q: "What is export?", a: "Selling goods abroad." },
                { q: "What is import?", a: "Buying from other countries." }
            ],
            Medium: [
                { q: "What is global trade?", a: "Trade between nations." },
                { q: "What is forex?", a: "Foreign exchange." },
                { q: "What is MNC?", a: "Multinational company." }
            ],
            Hard: [
                { q: "What is trade policy?", a: "Rules for trade." },
                { q: "What is globalization?", a: "Global integration." },
                { q: "What is trade barrier?", a: "Restrictions on trade." }
            ]
        }
    },
    agri: {
        CropScience: {
            Easy: [
                { q: "What is crop production?", a: "Growing crops for food." },
                { q: "What is seed?", a: "Part used to grow plants." },
                { q: "What is agronomy?", a: "Study of crop cultivation." }
            ],
            Medium: [
                { q: "What is plant breeding?", a: "Improving crop varieties." },
                { q: "What is irrigation?", a: "Supplying water to crops." },
                { q: "What is fertilizer?", a: "Nutrients for plant growth." }
            ],
            Hard: [
                { q: "What is hybrid crop?", a: "Cross-bred plant variety." },
                { q: "What is crop rotation?", a: "Changing crops in seasons." },
                { q: "What is yield?", a: "Amount of crop produced." }
            ]
        },

        SoilScience: {
            Easy: [
                { q: "What is soil?", a: "Upper layer of earth." },
                { q: "What is soil fertility?", a: "Ability to support plants." },
                { q: "What is compost?", a: "Organic fertilizer." }
            ],
            Medium: [
                { q: "What are soil types?", a: "Sand, clay, loam." },
                { q: "What is soil erosion?", a: "Loss of topsoil." },
                { q: "What is conservation?", a: "Protecting soil." }
            ],
            Hard: [
                { q: "What is soil profile?", a: "Layers of soil." },
                { q: "What is pH of soil?", a: "Acidity or alkalinity." },
                { q: "What is soil management?", a: "Maintaining soil health." }
            ]
        },

        Horticulture: {
            Easy: [
                { q: "What is horticulture?", a: "Growing fruits and flowers." },
                { q: "What is floriculture?", a: "Growing flowers." },
                { q: "What are vegetables?", a: "Edible plant parts." }
            ],
            Medium: [
                { q: "What is landscaping?", a: "Designing gardens." },
                { q: "What is pruning?", a: "Cutting plant parts." },
                { q: "What is nursery?", a: "Place to grow plants." }
            ],
            Hard: [
                { q: "What is grafting?", a: "Joining plant parts." },
                { q: "What is propagation?", a: "Plant reproduction method." },
                { q: "What is orchard?", a: "Land of fruit trees." }
            ]
        },

        AnimalHusbandry: {
            Easy: [
                { q: "What is livestock?", a: "Farm animals." },
                { q: "What is dairy farming?", a: "Milk production." },
                { q: "What is poultry?", a: "Rearing birds." }
            ],
            Medium: [
                { q: "What is breeding?", a: "Producing offspring." },
                { q: "What is feed?", a: "Animal food." },
                { q: "What is veterinary?", a: "Animal healthcare." }
            ],
            Hard: [
                { q: "What is disease control?", a: "Preventing animal diseases." },
                { q: "What is artificial insemination?", a: "Assisted reproduction." },
                { q: "What is animal management?", a: "Caring for animals." }
            ]
        },

        AgriculturalEngineering: {
            Easy: [
                { q: "What is farm machinery?", a: "Tools for farming." },
                { q: "What is tractor?", a: "Farming vehicle." },
                { q: "What is irrigation system?", a: "Water supply system." }
            ],
            Medium: [
                { q: "What is mechanization?", a: "Using machines in farming." },
                { q: "What is post-harvest?", a: "After crop harvest process." },
                { q: "What is drainage?", a: "Removing excess water." }
            ],
            Hard: [
                { q: "What is precision farming?", a: "Tech-based farming." },
                { q: "What is automation?", a: "Machine-controlled tasks." },
                { q: "What is energy use in farming?", a: "Power for machines." }
            ]
        },

        AgriculturalChemistry: {
            Easy: [
                { q: "What is fertilizer?", a: "Plant nutrient." },
                { q: "What is pesticide?", a: "Kills pests." },
                { q: "What is soil chemistry?", a: "Chemical properties of soil." }
            ],
            Medium: [
                { q: "What is nitrogen cycle?", a: "Movement of nitrogen." },
                { q: "What is organic farming?", a: "Chemical-free farming." },
                { q: "What is biochemistry?", a: "Chemistry of living things." }
            ],
            Hard: [
                { q: "What is nutrient deficiency?", a: "Lack of nutrients." },
                { q: "What is chemical reaction in soil?", a: "Interaction of elements." },
                { q: "What is agrochemicals?", a: "Chemicals used in farming." }
            ]
        },

        Agribusiness: {
            Easy: [
                { q: "What is agribusiness?", a: "Farming-related business." },
                { q: "What is market?", a: "Place of selling goods." },
                { q: "What is farm management?", a: "Managing farm activities." }
            ],
            Medium: [
                { q: "What is supply chain?", a: "Movement of goods." },
                { q: "What is rural economy?", a: "Economy of villages." },
                { q: "What is demand?", a: "Need for product." }
            ],
            Hard: [
                { q: "What is agribusiness management?", a: "Managing agricultural business." },
                { q: "What is pricing strategy?", a: "Setting product price." },
                { q: "What is agricultural marketing?", a: "Selling farm products." }
            ]
        },

        Irrigation: {
            Easy: [
                { q: "What is irrigation?", a: "Supplying water." },
                { q: "What is water conservation?", a: "Saving water." },
                { q: "What is canal?", a: "Water channel." }
            ],
            Medium: [
                { q: "What is drip irrigation?", a: "Water drops to roots." },
                { q: "What is sprinkler system?", a: "Water spraying system." },
                { q: "What is watershed?", a: "Water collection area." }
            ],
            Hard: [
                { q: "What is water management?", a: "Efficient water use." },
                { q: "What is groundwater?", a: "Water under earth." },
                { q: "What is irrigation planning?", a: "Planning water usage." }
            ]
        },

        Entomology: {
            Easy: [
                { q: "What is entomology?", a: "Study of insects." },
                { q: "What is pest?", a: "Harmful insect." },
                { q: "What is crop protection?", a: "Protecting crops." }
            ],
            Medium: [
                { q: "What is biological control?", a: "Using natural enemies." },
                { q: "What is insect life cycle?", a: "Stages of insect growth." },
                { q: "What is pesticide use?", a: "Killing pests." }
            ],
            Hard: [
                { q: "What is integrated pest management?", a: "Combined pest control methods." },
                { q: "What is beneficial insect?", a: "Helpful insect." },
                { q: "What is pest resistance?", a: "Pest survival ability." }
            ]
        }
    }

}
function generateOptions(correctAnswer, allAnswers) {
    const wrong = allAnswers
        .filter(a => a !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const fallback = [
        "None of the above.",
        "Not applicable.",
        "All of the above.",
        "Cannot be determined.",
        "Data not available.",
        "Depends on context.",
    ];

    while (wrong.length < 3) {
        const f = fallback[Math.floor(Math.random() * fallback.length)];
        if (!wrong.includes(f) && f !== correctAnswer) wrong.push(f);
    }

    const options = [correctAnswer, ...wrong.slice(0, 3)];
    return options.sort(() => Math.random() - 0.5);
}

// ==========================
// URL PARAMS
// ==========================
// ========================================================
// 📌 MULTI-PAGE CONFIGURATION & PARAMETER EXTRACTION ENGINE
// ========================================================
const params = new URLSearchParams(window.location.search);
const dept = params.get('dept') || 'cs';
const topicParam = params.get('topic') || 'Web';

// Ensure the local database target object reference existence layer safety check (Handles questions / question structural variants)
const coreDatabaseObject = (typeof questions !== 'undefined') ? questions : ((typeof question !== 'undefined') ? question : {});

// ✅ Case-safe topic match
const topicKey = Object.keys(coreDatabaseObject[dept] || {})
    .find(t => t.toLowerCase() === topicParam.toLowerCase());

// ✅ Topic data extraction rules
const topicData = coreDatabaseObject[dept]?.[topicKey];

// ==========================
// UI DATA CONSTANTS
// ==========================
const deptNames = {
    cs: 'CS', science: 'Science', arts: 'Arts', maths: 'Maths',
    engineering: 'Engineering', commerce: 'Commerce', law: 'Law',
    mba: 'Management', agri: 'Agriculture'
};

const topicIcons = {
    Web: '🌐', App: '📱', AI: '🤖', DS: '📊',
    CyberSecurity: '🔒', Cloud: '☁️', python: '🐍'
};

// ==========================
// PREPARE QUESTIONS BUNDLE ARRAY
// ==========================
let allQ = [];

if (topicData) {
    const allAnswers = [
        ...(topicData.Easy || []),
        ...(topicData.Medium || []),
        ...(topicData.Hard || [])
    ].map(q => q.a);

    (topicData.Easy || []).forEach(q =>
        allQ.push({ ...q, diff: 'Easy', options: generateOptions(q.a, allAnswers) })
    );

    (topicData.Medium || []).forEach(q =>
        allQ.push({ ...q, diff: 'Medium', options: generateOptions(q.a, allAnswers) })
    );

    (topicData.Hard || []).forEach(q =>
        allQ.push({ ...q, diff: 'Hard', options: generateOptions(q.a, allAnswers) })
    );
}

// ==========================
// 📌 REAL-TIME APP SCORING & PROGRESS SYSTEM
// ==========================
let quizTracker = {
    correctCount: 0,
    answeredIndices: new Set()
};

// ==========================
// PAGE SETUP (With Safety Check ✨)
// ==========================
const breadcrumbDeptNode = document.getElementById('breadcrumb-dept');

if (breadcrumbDeptNode) {
    breadcrumbDeptNode.textContent = deptNames[dept] || dept;

    if (document.getElementById('breadcrumb-topic')) {
        document.getElementById('breadcrumb-topic').textContent = topicKey || topicParam;
    }
    if (document.getElementById('topic-badge')) {
        document.getElementById('topic-badge').textContent = (topicIcons[topicKey] || '📚') + ' ' + (topicKey || topicParam);
    }
    if (document.getElementById('topic-desc')) {
        document.getElementById('topic-desc').textContent = 'Test your knowledge - ' + (topicKey || topicParam);
    }
    if (document.getElementById('total-count')) {
        document.getElementById('total-count').textContent = allQ.length;
    }
    if (document.getElementById('easy-count')) {
        document.getElementById('easy-count').textContent = allQ.filter(q => q.diff === 'Easy').length;
    }
    if (document.getElementById('medium-count')) {
        document.getElementById('medium-count').textContent = allQ.filter(q => q.diff === 'Medium').length;
    }
    if (document.getElementById('hard-count')) {
        document.getElementById('hard-count').textContent = allQ.filter(q => q.diff === 'Hard').length;
    }
}

// ==========================
// MAIN DOM LOAD INITIALIZATION
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Safety Check: Execute layout cards render logic ONLY if the container element is present on screen
    const targetQuestionsContainer = document.getElementById('questions-container');

    if (targetQuestionsContainer) {
        // Loading Delay Override
        setTimeout(() => {
            renderQuestions(allQ);
        }, 2000);

        // Filter Tabs Configuration
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const filter = this.dataset.filter.toLowerCase();
                let filteredQ;

                if (filter === 'all') {
                    filteredQ = allQ;
                } else {
                    filteredQ = allQ.filter(q => q.diff.toLowerCase() === filter);
                }
                renderQuestions(filteredQ);
            });
        });
    }
});

// ==========================
// RENDER FUNCTION
// ==========================
function renderQuestions(questions) {
    const container = document.getElementById('questions-container');
    if (!container) return; // Guard clause fallback

    container.innerHTML = '';

    if (!questions || questions.length === 0) {
        container.innerHTML = `<div class="no-questions">❌ No questions found</div>`;
        return;
    }

    const labels = ['A', 'B', 'C', 'D'];

    questions.forEach((q, index) => {
        const correctIndex = q.options.indexOf(q.a);

        const optionsHTML = q.options.map((opt, i) => `
          <div class="option" data-correct="${i === correctIndex}">
            <span class="option-label">${labels[i]}</span> ${opt}
          </div>
        `).join('');

        const card = document.createElement('div');
        card.className = `question-card ${q.diff.toLowerCase()}`;

        card.innerHTML = `
          <div class="question-top">
            <span class="question-number">Q${index + 1}</span>
            <span class="question-text">${q.q}</span>
            <span class="diff-badge">${q.diff}</span>
          </div>
          <div class="options-grid">${optionsHTML}</div>
          <div class="answer-reveal" id="reveal-${index}">✅ Answer: ${q.a}</div>
        `;

        container.appendChild(card);

        card.querySelectorAll('.option').forEach(opt => {
            opt.addEventListener('click', function () {
                if (card.querySelector('.option.correct') || card.querySelector('.option.wrong')) return;

                const isCorrect = this.dataset.correct === 'true';
                this.classList.add(isCorrect ? 'correct' : 'wrong');

                if (isCorrect) {
                    quizTracker.correctCount++;
                }

                quizTracker.answeredIndices.add(index);

                if (!isCorrect) {
                    card.querySelectorAll('.option').forEach(o => {
                        if (o.dataset.correct === 'true') o.classList.add('correct');
                    });
                }

                const targetRevealNode = document.getElementById(`reveal-${index}`);
                if (targetRevealNode) {
                    targetRevealNode.style.display = 'block';
                }

                updateLiveUI(questions.length);
            });
        });
    });

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'complete-action-area';
    btnWrapper.style.cssText = 'text-align: center; margin-top: 40px; padding-bottom: 50px; width: 100%;';

    btnWrapper.innerHTML = `
        <button id="btn-quiz-complete" class="complete-btn" style="
            background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
            color: #ffffff;
            border: none;
            padding: 14px 35px;
            border-radius: 12px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 1px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
            transition: all 0.3s ease;
        ">
            Complete Assessment ✓
        </button>
    `;

    container.appendChild(btnWrapper);

    document.getElementById('btn-quiz-complete').addEventListener('click', function () {
        const totalQsCount = questions.length || 9;
        const attendedQsCount = quizTracker.answeredIndices.size;

        if (attendedQsCount < totalQsCount) {
            const confirmExit = confirm(`You have answered only ${attendedQsCount}/${totalQsCount} questions. Do you want to complete and view your score?`);
            if (!confirmExit) return;
        }

        launchDynamicScorecardOverlay(totalQsCount);
    });

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// ==========================
// LIVE REAL-TIME UI UPDATE
// ==========================
function updateLiveUI(totalQuestionsCount) {
    if (totalQuestionsCount === 0) totalQuestionsCount = 9;

    const progressFill = document.querySelector('.progress-fill');
    const progressInfoText = document.querySelector('.progress-info span:last-child');

    if (progressInfoText) {
        progressInfoText.innerText = `${quizTracker.correctCount} / ${totalQuestionsCount}`;
    }

    const attendedCount = quizTracker.answeredIndices.size;
    const fillPercentage = Math.min((attendedCount / totalQuestionsCount) * 100, 100);

    if (progressFill) {
        progressFill.style.width = `${fillPercentage}%`;
    }
}

// ========================================================
// 📊 REAL TIME APP SCORE BASED MULTI-AVATAR ENGINE (SAFE LAUNCH)
// ========================================================
function launchDynamicScorecardOverlay(totalQsCount) {
    const finalCalculatedPercentage = Math.round((quizTracker.correctCount / totalQsCount) * 100);

    const mainWrap = document.getElementById('questions-container');
    if (mainWrap) {
        mainWrap.classList.add('assessment-active-blur-mode');
    } else {
        document.body.classList.add('assessment-active-blur-mode');
    }

    const targetOverlayWrapperNode = document.getElementById('assessment-score-overlay');
    if (targetOverlayWrapperNode) {
        targetOverlayWrapperNode.classList.remove('hide');
    }

    const arcTotalTrackLength = 236;
    const computeStrokeOffsetVal = arcTotalTrackLength - ((finalCalculatedPercentage / 100) * arcTotalTrackLength);
    const computeMechanicalRotatorAngle = -90 + ((finalCalculatedPercentage / 100) * 180);

    let liveBubbleMsgText = "Keep going! 💪";
    let liveBannerActionText = "👍 Good Work! (Retake)";
    let avatarImageFileSrc = "happy-boy.png";
    let zoneClassName = "class-high-zone";

    if (finalCalculatedPercentage >= 75) {
        liveBubbleMsgText = "Awesome Job! 🌟 Superb!";
        liveBannerActionText = "👍 Good Work! (Retake)";
        avatarImageFileSrc = "happy-boy.png";
        zoneClassName = "class-high-zone";
    } else if (finalCalculatedPercentage >= 40) {
        liveBubbleMsgText = "Practice more! 📖 Good try!";
        liveBannerActionText = "💪 Keep Trying! (Retake)";
        avatarImageFileSrc = "thinking-boy.png";
        zoneClassName = "class-mid-zone";
    } else {
        liveBubbleMsgText = "Don't give up! 🔥 Try again!";
        liveBannerActionText = "🏃‍♂️ Try Again! (Retake)";
        avatarImageFileSrc = "sad-boy.png";
        zoneClassName = "class-low-zone";
    }

    setTimeout(() => {
        const progressArc = document.getElementById('gauge-progress');
        const rotatorNeedle = document.getElementById('gauge-rotator-group');
        const bubbleNode = document.getElementById('avatar-speech-bubble');
        const bannerBtnNode = document.getElementById('score-status-banner-btn');
        const avatarGraphicBox = document.getElementById('avatar-render-graphics');
        const avatarImageTag = document.getElementById('avatar-img');

        if (progressArc) {
            progressArc.style.transition = "stroke-dashoffset 1.5s ease-in-out";
            progressArc.style.strokeDashoffset = computeStrokeOffsetVal;
        }
        if (rotatorNeedle) {
            rotatorNeedle.style.transition = "transform 1.5s ease-in-out";
            rotatorNeedle.style.transform = `rotate(${computeMechanicalRotatorAngle}deg)`;
        }
        if (bubbleNode) bubbleNode.innerText = liveBubbleMsgText;
        if (bannerBtnNode) bannerBtnNode.innerText = liveBannerActionText;

        if (avatarGraphicBox) {
            avatarGraphicBox.className = `avatar-dynamic-graphic-box ${zoneClassName}`;
        }

        if (avatarImageTag) {
            avatarImageTag.src = `./assets/images/${avatarImageFileSrc}`;
        }

        let countStartMarker = 0;
        const totalDurationWindow = 1500;
        const tickerSpeedIntervalDelay = Math.max(Math.round(totalDurationWindow / (finalCalculatedPercentage || 1)), 25);
        const txtValueNode = document.getElementById('score-percentage-text');

        if (txtValueNode) {
            const scoreCounterProgressInterval = setInterval(() => {
                if (countStartMarker >= finalCalculatedPercentage) {
                    clearInterval(scoreCounterProgressInterval);
                    txtValueNode.innerText = `${finalCalculatedPercentage}%`;
                } else {
                    countStartMarker++;
                    txtValueNode.innerText = `${countStartMarker}%`;
                }
            }, tickerSpeedIntervalDelay);
        }

    }, 200);
}