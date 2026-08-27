const questionbank = {
    cs: {

        "Web": {
            "Basic": {
                "Frontend Foundations": [
                    "What is the difference between ID and Class in CSS?",
                    "Explain the CSS Box Model.",
                    "What is Flex",
                    "What is grid",
                    "what is DOM",
                    "What is Event"
                ],
                "HTML Structures": [
                    "What are semantic HTML tags and why use them?",
                    "Difference between block-level and inline elements?"
                ]
            },
            "Intermediate": {
                "JS Deep Dive": [
                    "Explain ES6 features like Arrow functions and Destructuring.",
                    "What is the difference between let, const, and var?"
                ],
                "React Basics": [
                    "What is the difference between State and Props in React?",
                    "Explain the React Component lifecycle."
                ]
            },
            "Advanced": {
                "API Architecture": [
                    "Explain REST API vs GraphQL.",
                    "What is CORS and how to handle it?"
                ],
                "Deployment & DevOps": [
                    "How to deploy a website on Netlify or Vercel?",
                    "Explain the basics of CI/CD for web apps."
                ]
            }
        },
        "App": {
            "Basic": {
                "Mobile Concepts": [
                    "Difference between Native and Cross-platform development?",
                    "What is an App Lifecycle?"
                ],
                "UI Layouts": [
                    "What is a Widget in Flutter?",
                    "How to use Flexbox in React Native?"
                ]
            },
            "Intermediate": {
                "State Management": [
                    "Explain Redux vs Context API.",
                    "How to manage local state in mobile apps?"
                ],
                "Backend Integration": [
                    "How to connect a mobile app to Firebase?",
                    "Explain how to fetch data from a REST API in mobile."
                ]
            },
            "Advanced": {
                "Performance": [
                    "How to optimize mobile app rendering performance?",
                    "What is Lazy Loading in mobile apps?"
                ],
                "App Store Ops": [
                    "Steps to publish an app on Play Store/App Store.",
                    "How to handle app permissions for iOS and Android?"
                ]
            }
        },
        "AI": {
            "Basic": {
                "Intro to AI": [
                    "Difference between AI, ML, and Deep Learning?",
                    "What is the Turing Test?"
                ],
                "ML Types": [
                    "What is Supervised vs Unsupervised Learning?",
                    "Explain Reinforcement Learning with an example."
                ]
            },
            "Intermediate": {
                "Regression & Stats": [
                    "Explain Linear vs Logistic Regression.",
                    "What is Mean Squared Error (MSE)?"
                ],
                "Classification": [
                    "What is a Confusion Matrix and why is it used?",
                    "How does a Decision Tree algorithm work?"
                ]
            },
            "Advanced": {
                "Neural Networks": [
                    "What is a Convolutional Neural Network (CNN)?",
                    "Explain Backpropagation in Neural Networks."
                ],
                "Modern AI": [
                    "Explain the basics of Large Language Models (LLMs).",
                    "What are Generative Adversarial Networks (GANs)?"
                ]
            }
        },
        "DS": {
            "Basic": {
                "Data Basics": [
                    "What is a DataFrame in Pandas?",
                    "Difference between structured and unstructured data?"
                ],
                "Data Prep": [
                    "Why is Data Cleaning important in Data Science?",
                    "What is Data Normalization?"
                ]
            },
            "Intermediate": {
                "EDA": [
                    "Explain Exploratory Data Analysis (EDA).",
                    "How to handle missing values in a dataset?"
                ],
                "Visualization": [
                    "When to use a Bar Chart vs a Scatter Plot?",
                    "Explain the use of Correlation Heatmaps."
                ]
            },
            "Advanced": {
                "Statistical Modeling": [
                    "What is A/B Testing?",
                    "Explain the P-value in statistics."
                ],
                "ML Ops": [
                    "Explain Principal Component Analysis (PCA).",
                    "How to deploy a Data Science model to production?"
                ]
            }
        },
        "CyberSecurity": {
            "Basic": {
                "Network Security": [
                    "Difference between HTTP and HTTPS?",
                    "What is a Firewall and how does it work?"
                ],
                "Threats": [
                    "What is Phishing and how to prevent it?",
                    "Explain the difference between a Virus and a Worm."
                ]
            },
            "Intermediate": {
                "Web Attacks": [
                    "Explain SQL Injection and how to prevent it.",
                    "What is a Man-in-the-Middle (MITM) attack?"
                ],
                "Auth Systems": [
                    "What is Two-Factor Authentication (2FA)?",
                    "Difference between Authorization and Authentication."
                ]
            },
            "Advanced": {
                "Cryptography": [
                    "Symmetric vs Asymmetric Encryption basics.",
                    "What is a Digital Signature?"
                ],
                "Security Testing": [
                    "What is Penetration Testing?",
                    "Explain Zero-Day Vulnerability."
                ]
            }
        },
        "Cloud": {
            "Basic": {
                "Cloud Models": [
                    "Explain IaaS, PaaS, and SaaS.",
                    "Public vs Private vs Hybrid Cloud differences."
                ],
                "Cloud Storage": [
                    "What is Object Storage vs Block Storage?",
                    "Explain the benefits of Cloud Scalability."
                ]
            },
            "Intermediate": {
                "Containers": [
                    "What is Docker and why is it used?",
                    "Difference between a Virtual Machine and a Container."
                ],
                "DevOps": [
                    "Explain the CI/CD pipeline.",
                    "What is 'Infrastructure as Code' (IaC)?"
                ]
            },
            "Advanced": {
                "Orchestration": [
                    "What is Kubernetes (K8s)?",
                    "Explain Load Balancing in Cloud."
                ],
                "Serverless": [
                    "What is Serverless Computing (AWS Lambda)?",
                    "Explain Microservices Architecture."
                ]
            }
        },
        "python": {
            "Basic": {
                "Data Structures": [
                    "List vs Tuple vs Dictionary in Python.",
                    "What is a Set and how is it different from a List?"
                ],
                "Control Flow": [
                    "How to handle Exceptions using try-except?",
                    "Explain the difference between 'is' and '=='."
                ]
            },
            "Intermediate": {
                "Pythonic Code": [
                    "What are Lambda functions and List Comprehensions?",
                    "Explain the use of 'with' statement in file handling."
                ],
                "Environment": [
                    "Using virtual environments (venv) in Python.",
                    "What is the purpose of requirements.txt?"
                ]
            },
            "Advanced": {
                "OOP Concepts": [
                    "Explain Inheritance and Polymorphism in Python.",
                    "What are Decorators and how do they work?"
                ],
                "Specialized Libraries": [
                    "How to do Web Scraping using BeautifulSoup?",
                    "Explain Multithreading vs Multiprocessing in Python."
                ]
            }
        }
    },
    science: {

        "physics": {
            "Basic": {
                "Foundations": ["What is Physics?", "What are the laws of motion?", "What is force?", "What is energy?", "Difference between speed and velocity?"]
            },
            "Intermediate": {
                "Mechanics & Waves": ["Explain Newton’s laws", "What is thermodynamics?", "What is wave motion?", "Explain optics basics?", "What is electricity?"]
            },
            "Advanced": {
                "Modern Physics": ["What is quantum mechanics?", "Explain relativity?", "What is electromagnetic field?", "Particle physics basics?", "Applications of modern physics?"]
            }
        },
        "chemistry": {
            "Basic": {
                "Elements": ["What is Chemistry?", "What is an atom?", "What is a molecule?", "What is the periodic table?", "Types of chemical reactions?"]
            },
            "Intermediate": {
                "Bonds & Acids": ["Explain bonding", "What is pH scale?", "Organic vs inorganic chemistry?", "What is equilibrium?", "What are acids and bases?"]
            },
            "Advanced": {
                "Kinetics": ["Reaction mechanisms?", "Electrochemistry basics?", "Thermochemistry?", "Chemical kinetics?", "Advanced organic reactions?"]
            }
        },
        "biology": {
            "Basic": {
                "Life Basics": ["What is Biology?", "What is a cell?", "Types of cells?", "What is DNA?", "What is an ecosystem?"]
            },
            "Intermediate": {
                "Genetics": ["Explain genetics", "What is evolution?", "Human body systems?", "What is photosynthesis?", "What is respiration?"]
            },
            "Advanced": {
                "Molecular": ["Molecular biology?", "Gene expression?", "Biotechnology basics?", "Advanced genetics?", "Human physiology deep concepts?"]
            }
        },
        "environmental": {
            "Basic": {
                "Ecology": ["What is environment?", "What is pollution?", "Types of ecosystems?", "What is climate change?", "What is conservation?"]
            },
            "Intermediate": {
                "Sustainability": ["Causes of global warming?", "Sustainable development?", "Waste management?", "Water conservation?", "Biodiversity importance?"]
            },
            "Advanced": {
                "Impact & Policy": ["Environmental impact analysis?", "Climate models?", "Advanced sustainability methods?", "Green technologies?", "Policy and environmental laws?"]
            }
        },
        "astronomy": {
            "Basic": {
                "Solar System": ["What is Astronomy?", "What is solar system?", "What are planets?", "What is a star?", "What is a galaxy?"]
            },
            "Intermediate": {
                "Space Phenomena": ["Life cycle of stars?", "Black holes?", "What is light year?", "Types of galaxies?", "Space exploration basics?"]
            },
            "Advanced": {
                "Cosmology": ["Cosmology basics?", "Dark matter & energy?", "Advanced astrophysics?", "Universe expansion?", "Space-time concepts?"]
            }
        },
        "biotechnology": {
            "Basic": {
                "Intro": ["What is Biotechnology?", "What is DNA technology?", "What is cloning?", "What is fermentation?", "Applications of biotech?"]
            },
            "Intermediate": {
                "Engineering": ["Genetic engineering?", "PCR technique?", "Biotech in medicine?", "Agricultural biotech?", "Bioinformatics?"]
            },
            "Advanced": {
                "CRISPR": ["CRISPR technology?", "Advanced gene editing?", "Synthetic biology?", "Biotech ethics?", "Future of biotechnology?"]
            }
        },
        "neuroscience": {
            "Basic": {
                "Brain Intro": ["What is Neuroscience?", "What is a neuron?", "Parts of the brain?", "What is the nervous system?", "Brain functions?"]
            },
            "Intermediate": {
                "Cognition": ["How neurons communicate?", "What is cognition?", "Brain and behavior?", "Memory process?", "Neurotransmitters?"]
            },
            "Advanced": {
                "Neural Systems": ["Brain disorders?", "Neural networks?", "Cognitive science?", "Advanced brain mapping?", "AI vs brain comparison?"]
            }
        },
        "microbiology": {
            "Basic": {
                "Microbes": ["What is Microbiology?", "What are bacteria?", "What are viruses?", "What are fungi?", "Microorganisms role?"]
            },
            "Intermediate": {
                "Pathogens": ["Bacterial structure?", "Virus replication?", "Immunology basics?", "Pathogens?", "Microbial growth?"]
            },
            "Advanced": {
                "Virology": ["Antibiotic resistance?", "Advanced virology?", "Microbial genetics?", "Industrial microbiology?", "Medical microbiology?"]
            }
        },
        "geology": {
            "Basic": {
                "Earth": ["What is Geology?", "Types of rocks?", "What are minerals?", "Earth structure?", "What is a fossil?"]
            },
            "Intermediate": {
                "Tectonics": ["Plate tectonics?", "Volcano formation?", "Earthquakes?", "Rock cycle?", "Soil formation?"]
            },
            "Advanced": {
                "Mapping": ["Geological mapping?", "Advanced tectonics?", "Mineral exploration?", "Environmental geology?", "Earth history analysis?"]
            }
        }
    },
    arts: {

        "literature": {
            "Basic": {
                "Foundations": ["What is Literature?", "Types of Genres?", "Introduction to Poetry?", "Elements of Fiction?", "Importance of Reading?"],
                "Languages": ["History of Tamil Literature?", "Basics of English Prose?", "Grammar in Creative Writing?", "Literary Devices?", "Classic Authors intro?"]
            },
            "Intermediate": {
                "Poetry & Drama": ["Structure of a Poem?", "Analysis of Sonnets?", "Shakespearean Plays?", "Modern Tamil Poetry?", "Dramatic Techniques?"],
                "Creative Writing": ["Character Development?", "Plot Construction?", "Narrative Styles?", "Writing Short Stories?", "Editing Basics?"]
            },
            "Advanced": {
                "Literary Theory": ["Post-Colonial Literature?", "Feminism in Literature?", "Modernism vs Post-Modernism?", "Comparative Literature?", "Linguistic Analysis?"]
            }
        },
        "history": {
            "Basic": {
                "Ancient Times": ["What is History?", "Indus Valley Civilization?", "Ancient River Civilizations?", "Introduction to Archeology?", "Stone Age Eras?"]
            },
            "Intermediate": {
                "Indian History": ["Mughal Empire overview?", "Chola & Pandya Dynasties?", "British Rule in India?", "Indian Independence Movement?", "Cultural Heritage of India?"]
            },
            "Advanced": {
                "World History": ["The French Revolution?", "Causes of World War I & II?", "Cold War Era?", "History of Modern Europe?", "Ancient Greek Philosophy & Politics?"]
            }
        },
        "geography": {
            "Basic": {
                "Earth Basics": ["Layers of the Earth?", "Continents and Oceans?", "Solar System overview?", "Types of Rocks?", "Latitudes and Longitudes?"]
            },
            "Intermediate": {
                "Climate & Environment": ["Water Cycle process?", "Types of Climates?", "Natural Disasters (Earthquakes, Volcanos)?", "Forestry and Wildlife?", "Indian Monsoon system?"]
            },
            "Advanced": {
                "Human & Technical": ["Population Growth patterns?", "Economic Geography?", "Basics of GIS & Remote Sensing?", "Urbanization challenges?", "Cartography (Map making)?"]
            }
        },
        "psychology": {
            "Basic": {
                "Intro to Mind": ["Definition of Psychology?", "Basic Human Emotions?", "How Memory works?", "Sensation and Perception?", "Nature vs Nurture?"]
            },
            "Intermediate": {
                "Behavior & Development": ["Child Development stages?", "Social Psychology basics?", "Learning Theories (Pavlov/Skinner)?", "Personality Types?", "Stress Management?"]
            },
            "Advanced": {
                "Cognitive & Clinical": ["Cognitive Disorders?", "Brain Anatomy & Function?", "Psychological Research Methods?", "Counseling Techniques?", "Abnormal Psychology?"]
            }
        },
        "politicalscience": {
            "Basic": {
                "Civics": ["What is Democracy?", "Indian Constitution basics?", "Organs of Government?", "Fundamental Rights?", "What is Citizenship?"]
            },
            "Intermediate": {
                "Governance": ["Parliamentary vs Presidential forms?", "Local Self-Government?", "Public Administration?", "Political Parties in India?", "Electoral Systems?"]
            },
            "Advanced": {
                "Theory & Relations": ["Political Ideologies (Marxism, Liberalism)?", "International Relations?", "United Nations & Global Organs?", "Public Policy making?", "Political Philosophy?"]
            }
        },
        "journalism": {
            "Basic": {
                "Reporting": ["Ethics of Journalism?", "News Writing basics?", "Types of Media?", "Role of a Reporter?", "Interviewing Skills?"]
            },
            "Intermediate": {
                "Digital & Broadcasting": ["Television Journalism?", "Radio Production?", "Online News Portals?", "Social Media Reporting?", "Photojournalism?"]
            },
            "Advanced": {
                "Mass Comm & PR": ["Mass Communication Models?", "Public Relations (PR) strategies?", "Advertising basics?", "Media Laws and Censorship?", "Documentary Filmmaking?"]
            }
        },
        "sociology": {
            "Basic": {
                "Social Structure": ["What is Sociology?", "Concept of Family and Kinship?", "Social Groups?", "Culture and Values?", "Introduction to Community?"]
            },
            "Intermediate": {
                "Society Issues": ["Social Stratification (Caste/Class)?", "Gender Roles in Society?", "Religion and Secularism?", "Rural vs Urban Sociology?", "Social Change factors?"]
            },
            "Advanced": {
                "Theory & Research": ["Social Research Methods?", "Karl Marx & Max Weber Theories?", "Criminology basics?", "Industrial Sociology?", "Environmental Sociology?"]
            }
        },
        "economics": {
            "Basic": {
                "Markets": ["Supply and Demand?", "Market Structures?", "Basic Economic Problems?", "Introduction to Money?", "Consumer Behavior?"]
            },
            "Intermediate": {
                "National Economy": ["GDP and National Income?", "Inflation and Deflation?", "Banking System (RBI)?", "Fiscal Policy?", "Unemployment types?"]
            },
            "Advanced": {
                "Global Finance": ["International Trade (WTO)?", "Balance of Payments?", "Economic Development Models?", "Public Finance?", "Environmental Economics?"]
            }
        },
        "philosophy": {
            "Basic": {
                "Thinking": ["What is Philosophy?", "Branches of Philosophy?", "Basics of Logic?", "Critical Thinking?", "Introduction to Ethics?"]
            },
            "Intermediate": {
                "Existence": ["Metaphysics intro?", "Epistemology (Nature of Knowledge)?", "Eastern vs Western Philosophy?", "Moral Philosophy?", "Existentialism basics?"]
            },
            "Advanced": {
                "Logic & Science": ["Symbolic Logic?", "Philosophy of Mind?", "Philosophy of Science?", "Aesthetics (Art Philosophy)?", "Political Philosophy?"]
            }
        }
    },
    maths: {

        "Algebra": {
            "Basic": {
                "Equations & Variables": ["What is a linear equation?", "Solving for X basics?", "What are coefficients?", "Basic arithmetic properties?", "Concept of variables?"],
                "Polynomials": ["What is a polynomial?", "Degree of a polynomial?", "Adding and subtracting polynomials?", "Basic factoring?", "Quadratic equation intro?"]
            },
            "Intermediate": {
                "Matrices": ["What is a matrix?", "Types of matrices?", "Matrix addition and subtraction?", "Scalar multiplication?", "Determinants basics?"],
                "Functions": ["Definition of a function?", "Domain and Range?", "Types of functions (Linear, Quadratic)?", "Composition of functions?", "Inverse functions?"]
            },
            "Advanced": {
                "Abstract Structures": ["Group Theory basics?", "Fields and Rings?", "Vector spaces intro?", "Complex numbers in algebra?", "Polynomial division & Remainder theorem?"]
            }
        },
        "Calculus": {
            "Basic": {
                "Limits & Continuity": ["What is a limit?", "Calculating simple limits?", "Concept of continuity?", "Infinite limits?", "Limits at infinity?"]
            },
            "Intermediate": {
                "Differentiation": ["Rules of differentiation (Power, Product)?", "Chain Rule?", "Derivatives of trig functions?", "Implicit differentiation?", "Tangents and Normals?"]
            },
            "Advanced": {
                "Integration": ["Definite vs Indefinite integrals?", "Integration by parts?", "U-substitution method?", "Applications of integration (Area/Volume)?", "Differential equations intro?"]
            }
        },
        "Geometry": {
            "Basic": {
                "Euclidean Geometry": ["Points, lines, and planes?", "Types of angles?", "Properties of triangles?", "Circles and its parts?", "Perimeter and Area basics?"]
            },
            "Intermediate": {
                "Coordinate Geometry": ["Distance formula?", "Section formula?", "Equation of a straight line?", "Slope of a line?", "Midpoint theorem?"]
            },
            "Advanced": {
                "3D Shapes & Theorems": ["Volume of 3D objects?", "Surface area of spheres and cones?", "Pythagorean theorem applications?", "Congruence and Similarity?", "Non-Euclidean geometry intro?"]
            }
        },
        "Statistics": {
            "Basic": {
                "Data Basics": ["Calculating Mean, Median, and Mode?", "What is Range?", "Types of data sets?", "Frequency distribution?", "Interpreting bar graphs?"]
            },
            "Intermediate": {
                "Variance & SD": ["Calculating Variance?", "What is Standard Deviation?", "Z-scores?", "Normal distribution basics?", "Correlation coefficients?"]
            },
            "Advanced": {
                "Hypothesis Testing": ["Null vs Alternative hypothesis?", "P-values and significance?", "T-tests and ANOVA?", "Linear Regression models?", "Sampling distributions?"]
            }
        },
        "Trigonometry": {
            "Basic": {
                "Trig Ratios": ["Defining Sin, Cos, Tan?", "SOH-CAH-TOA rule?", "Trig values for standard angles?", "Right-angled triangle basics?", "Pythagorean identities?"]
            },
            "Intermediate": {
                "Identities & Graphs": ["Reciprocal identities?", "Double angle formulas?", "Graphing Sin and Cos waves?", "Period and Amplitude?", "Sum and Difference formulas?"]
            },
            "Advanced": {
                "Inverse & Complex": ["Inverse trig functions?", "Solving trig equations?", "Law of Sines and Cosines?", "Polar coordinates?", "Trigonometry in 3D?"]
            }
        },
        "DiscreteMaths": {
            "Basic": {
                "Logic & Sets": ["Truth tables?", "Logical connectives (AND, OR, NOT)?", "What is a Set?", "Venn diagrams?", "Subsets and Power sets?"]
            },
            "Intermediate": {
                "Graph Theory": ["Vertices and Edges?", "Types of graphs?", "Paths and Circuits?", "Trees and Forests?", "Planar graphs?"]
            },
            "Advanced": {
                "Combinatorics": ["Permutations vs Combinations?", "Pigeonhole Principle?", "Mathematical Induction?", "Recurrence relations?", "Algorithm complexity basics?"]
            }
        },
        "NumberTheory": {
            "Basic": {
                "Divisibility": ["Prime vs Composite numbers?", "Sieve of Eratosthenes?", "GCD and LCM calculation?", "Euclidean algorithm?", "Factors and Multiples?"]
            },
            "Intermediate": {
                "Modular Arithmetic": ["Congruence relations?", "Properties of modulo?", "Chinese Remainder Theorem?", "Fermat's Little Theorem?", "Euler's Totient function?"]
            },
            "Advanced": {
                "Cryptography & Patterns": ["Prime number theorem?", "RSA algorithm basics?", "Diophantine equations?", "Goldbach conjecture?", "Perfect numbers?"]
            }
        },
        "Probability": {
            "Basic": {
                "Chance Basics": ["Defining probability?", "Sample space and Events?", "Independent vs Dependent events?", "Mutually exclusive events?", "Basic coin/dice problems?"]
            },
            "Intermediate": {
                "Rules & Theorems": ["Addition and Multiplication rules?", "Conditional probability?", "Bayes' Theorem?", "Bernoulli trials?", "Binomial distribution?"]
            },
            "Advanced": {
                "Distributions": ["Poisson distribution?", "Continuous random variables?", "Central Limit Theorem?", "Expected value and Variance?", "Markov chains intro?"]
            }
        },
        "LinearAlgebra": {
            "Basic": {
                "Vectors": ["Vector addition?", "Dot product?", "Vector magnitude?", "Unit vectors?", "Direction cosines?"]
            },
            "Intermediate": {
                "Transformations": ["Linear transformations?", "Inverse of a matrix?", "System of linear equations?", "Cramer's rule?", "Rank of a matrix?"]
            },
            "Advanced": {
                "Eigenvalues": ["Characteristic equations?", "Eigenvectors calculation?", "Diagonalization?", "Inner product spaces?", "Singular Value Decomposition (SVD)?"]
            }
        }
    },
    engineering: {

        "MechanicalEngineering": {
            "Basic": {
                "Thermodynamics": ["What is the Zeroth Law?", "First Law of Thermodynamics?", "Difference between Open and Closed systems?", "What is Enthalpy?", "Understanding Heat vs Work?"],
                "Engineering Mechanics": ["What is Newton’s Second Law?", "Concept of Friction?", "Resultant of forces?", "What is a Free Body Diagram?", "Scalar vs Vector quantities?"]
            },
            "Intermediate": {
                "Fluid Mechanics": ["Bernoulli’s Principle?", "Laminar vs Turbulent flow?", "What is Viscosity?", "Pascal’s Law applications?", "Concept of Buoyancy?"],
                "Manufacturing Tech": ["Types of Casting?", "What is Lathe machine?", "Milling vs Drilling?", "Welding techniques?", "CNC machine basics?"]
            },
            "Advanced": {
                "CAD/CAM & Robotics": ["Finite Element Analysis (FEA)?", "3D Modeling in SolidWorks?", "Kinematics of robots?", "Rapid Prototyping?", "Industry 4.0 basics?"]
            }
        },
        "CivilEngineering": {
            "Basic": {
                "Surveying": ["What is Chain Surveying?", "Compass surveying basics?", "Concept of Levelling?", "Unit conversions in Civil?", "What is a Contour map?"]
            },
            "Intermediate": {
                "Structural Analysis": ["Bending Moment vs Shear Force?", "Types of Beams?", "Stress-Strain curve?", "Concrete technology basics?", "Foundation types?"]
            },
            "Advanced": {
                "Geotechnical & Transportation": ["Soil compaction?", "Highway pavement design?", "Earthquake resistant structures?", "Smart City infrastructure?", "Environmental impact of construction?"]
            }
        },
        "ElectricalEngineering": {
            "Basic": {
                "Circuit Theory": ["Ohm’s Law?", "Kirchhoff’s Laws (KCL & KVL)?", "Series vs Parallel circuits?", "What is Resistance?", "AC vs DC basics?"]
            },
            "Intermediate": {
                "Electrical Machines": ["Working of a DC Motor?", "Transformer working principle?", "Induction motors?", "Stepper motor basics?", "Speed control methods?"]
            },
            "Advanced": {
                "Power & Control": ["Power Grid stability?", "Smart Grid technology?", "PID Controllers?", "PLC and SCADA basics?", "Renewable energy integration?"]
            }
        },
        "ECE": {
            "Basic": {
                "Electronic Devices": ["P-N Junction diode?", "Working of Transistors?", "What is Rectification?", "Zener diode applications?", "LED vs LCD?"]
            },
            "Intermediate": {
                "Signal Processing": ["Analog vs Digital signals?", "Sampling theorem?", "Frequency modulation?", "Embedded systems basics?", "Microcontroller 8051?"]
            },
            "Advanced": {
                "VLSI & IoT": ["IC Fabrication steps?", "Verilog/VHDL basics?", "IoT architecture?", "Wireless sensor networks?", "Antenna design fundamentals?"]
            }
        },
        "ComputerScience": {
            "Basic": {
                "Programming Basics": ["What is a Variable?", "Loops and Conditions?", "Functions and Scope?", "Object Oriented Programming (OOP)?", "Basic Syntax of Python?"]
            },
            "Intermediate": {
                "Data Structures": ["Array vs Linked List?", "Stack and Queue?", "Binary Search Tree?", "Sorting algorithms?", "Hashing techniques?"]
            },
            "Advanced": {
                "AI & Cloud": ["Neural Networks?", "Supervised vs Unsupervised learning?", "Cloud Deployment models?", "Cybersecurity protocols?", "Big Data architecture?"]
            }
        },
        "ChemicalEngineering": {
            "Basic": {
                "Chemistry Basics": ["Stoichiometry?", "Chemical bonding?", "Periodic table trends?", "PH scale meaning?", "Organic vs Inorganic?"]
            },
            "Intermediate": {
                "Process Design": ["Mass Transfer basics?", "Heat Exchangers?", "Distillation process?", "Reaction Kinetics?", "Fluidization?"]
            },
            "Advanced": {
                "Petroleum & Materials": ["Refining process?", "Polymer science?", "Nano-materials?", "Green chemistry?", "Corrosion control?"]
            }
        },
        "AerospaceEngineering": {
            "Basic": {
                "Flight Mechanics": ["The Four Forces of Flight?", "How Wings generate Lift?", "Newton’s Third Law in Propulsion?", "Aircraft parts?", "What is Airspeed?"]
            },
            "Intermediate": {
                "Aerodynamics": ["Airfoil shapes?", "Supersonic vs Subsonic?", "Drag reduction techniques?", "Wind tunnel testing?", "Boundary layer theory?"]
            },
            "Advanced": {
                "Space Tech": ["Rocket staging?", "Orbital mechanics?", "Satellite communication?", "Spacecraft thermal control?", "Mars rover technology?"]
            }
        },
        "BiomedicalEngineering": {
            "Basic": {
                "Human Anatomy": ["Skeletal system?", "Circulatory system?", "Basic Physiology?", "Cell structure?", "Medical terminology?"]
            },
            "Intermediate": {
                "Medical Devices": ["How ECG works?", "MRI basics?", "Pacemakers?", "Biocompatibility?", "Biosensors?"]
            },
            "Advanced": {
                "Imaging & Prosthetics": ["X-ray vs Ultrasound?", "Artificial Organs?", "Robotic surgery?", "Bio-materials for implants?", "Tissue engineering?"]
            }
        }
    },
    commerce: {

        "Accountancy": {
            "Basic": {
                "Accounting Principles": ["What is Double Entry system?", "Definition of Assets and Liabilities?", "What are Real, Personal, and Nominal accounts?", "Golden rules of accounting?", "What is a Journal entry?"],
                "Bookkeeping": ["Difference between Bookkeeping and Accounting?", "What is a Ledger?", "How to prepare a Trial Balance?", "Purpose of Cash Book?", "What is Depreciation?"]
            },
            "Intermediate": {
                "Financial Statements": ["How to prepare a Profit & Loss account?", "Components of a Balance Sheet?", "What is an Operating Profit?", "Adjustment entries basics?", "Inventory valuation methods (FIFO/LIFO)?"],
                "GST & Tally": ["Basic concepts of GST?", "How to record GST in Tally?", "Voucher types in accounting software?", "Bank Reconciliation Statement (BRS)?", "Rectification of errors?"]
            },
            "Advanced": {
                "Corporate Accounting": ["Issue of Shares and Debentures?", "What is Cash Flow Statement?", "Consolidated financial statements?", "Amalgamation and Reconstruction?", "Analysis of Financial Ratios?"],
                "Auditing": ["Internal vs External Audit?", "Audit planning and program?", "Verification of assets?", "Vouching basics?", "Statutory audit requirements?"]
            }
        },
        "BusinessStudies": {
            "Basic": {
                "Business Basics": ["What is a Sole Proprietorship?", "Difference between Trade and Commerce?", "Objectives of a Business?", "Types of business organizations?", "What is Partnership?"],
                "Management Intro": ["Levels of Management?", "Functions of Management (POSDCORB)?", "Importance of Coordination?", "Management as an Art vs Science?", "Role of a Manager?"]
            },
            "Intermediate": {
                "Organization & Ethics": ["Centralization vs Decentralization?", "Formal vs Informal organization?", "Business Ethics and CSR?", "Principles of Scientific Management?", "Staffing process?"]
            },
            "Advanced": {
                "Entrepreneurship": ["Characteristics of an Entrepreneur?", "Stages of a Startup?", "Business Plan preparation?", "Innovation in business?", "Venture capital basics?"]
            }
        },
        "Economics": {
            "Basic": {
                "Micro Economics": ["Law of Demand?", "Factors affecting Supply?", "What is Opportunity Cost?", "Market Equilibrium basics?", "Elasticity of Demand?"]
            },
            "Intermediate": {
                "Macro Economics": ["What is GDP and GNP?", "Inflation and its types?", "Functions of Money?", "Budgetary policy basics?", "Unemployment types?"]
            },
            "Advanced": {
                "Development & Trade": ["Balance of Payments (BOP)?", "Comparative Advantage theory?", "Foreign Direct Investment (FDI)?", "Economic growth vs Development?", "International Trade organizations?"]
            }
        },
        "Finance": {
            "Basic": {
                "Financial Literacy": ["What is Simple vs Compound interest?", "Importance of Savings?", "Basic Investment avenues?", "Risk-Return trade-off?", "Inflation's impact on money?"]
            },
            "Intermediate": {
                "Investment": ["Mutual Funds vs Stocks?", "Time Value of Money (TVM)?", "Working Capital management?", "Portfolio diversification?", "Fixed income securities?"]
            },
            "Advanced": {
                "Stock Market": ["Technical vs Fundamental analysis?", "Derivatives and Options?", "Capital Asset Pricing Model (CAPM)?", "IPO process?", "Wealth management strategies?"]
            }
        },
        "Banking": {
            "Basic": {
                "Banking Intro": ["Types of Bank Accounts?", "Difference between Savings and Current accounts?", "Functions of Commercial Banks?", "What is a Cheque?", "KYC requirements?"]
            },
            "Intermediate": {
                "RBI & Policy": ["Role of RBI?", "What is Repo Rate and SLR?", "Digital Banking (UPI, NEFT, RTGS)?", "NPA (Non-Performing Assets) basics?", "Credit creation by banks?"]
            },
            "Advanced": {
                "Financial Services": ["Insurance types (Life/General)?", "Merchant Banking?", "Leasing and Hire purchase?", "International Banking basics?", "Microfinance and Rural banking?"]
            }
        },
        "Marketing": {
            "Basic": {
                "Marketing Mix": ["What are the 4Ps of Marketing?", "Consumer vs Customer?", "Importance of Branding?", "Product Life Cycle (PLC)?", "Marketing vs Selling?"]
            },
            "Intermediate": {
                "Digital Marketing": ["SEO and SEM basics?", "Social Media Marketing strategies?", "Content Marketing?", "Email Marketing ROI?", "E-marketing tools?"]
            },
            "Advanced": {
                "Consumer Behavior": ["Factors influencing buying decisions?", "Market Segmentation and Targeting?", "Marketing Research process?", "Public Relations (PR)?", "Global Marketing strategies?"]
            }
        },
        "Taxation": {
            "Basic": {
                "Tax Basics": ["Direct vs Indirect Taxes?", "What is Income Tax?", "Definition of Assessee?", "Tax slabs for individuals?", "PAN and its importance?"]
            },
            "Intermediate": {
                "GST & Filing": ["CGST, SGST, and IGST?", "Input Tax Credit (ITC)?", "How to file ITR?", "TDS (Tax Deducted at Source)?", "Tax planning vs Tax evasion?"]
            },
            "Advanced": {
                "Corporate Tax": ["Taxation for Companies?", "International Taxation?", "Double Taxation Avoidance Agreement (DTAA)?", "Tax audit under Section 44AB?", "Capital Gains tax?"]
            }
        },
        "BusinessStats": {
            "Basic": {
                "Stats Intro": ["Mean, Median, and Mode?", "Types of Data (Primary/Secondary)?", "Sampling methods?", "Data Representation (Charts/Graphs)?", "Importance of Statistics in business?"]
            },
            "Intermediate": {
                "Probability": ["Basic Probability rules?", "Correlation and Regression?", "Index Numbers?", "Time Series analysis?", "Standard Deviation?"]
            },
            "Advanced": {
                "Data Analysis": ["Hypothesis Testing?", "Chi-Square test?", "Excel for Business Analytics?", "Forecasting models?", "ANOVA basics?"]
            }
        },
        "Ecommerce": {
            "Basic": {
                "Online Business": ["B2B vs B2C models?", "Advantages of E-commerce?", "Digital Payment types?", "M-commerce basics?", "Security in online transactions?"]
            },
            "Intermediate": {
                "Operations": ["Supply Chain Management in E-commerce?", "Dropshipping model?", "Inventory management for online stores?", "E-commerce platforms (Shopify/WooCommerce)?", "Customer retention?"]
            },
            "Advanced": {
                "Tech & Trends": ["AI and Chatbots in retail?", "Big Data in E-commerce?", "Global E-commerce logistics?", "Cyber laws in E-commerce?", "Future of Blockchain in payments?"]
            }
        }
    },
    law: {

        "ConstitutionalLaw": {
            "Basic": {
                "Constitution Intro": ["What is a Constitution?", "Preamble meaning?", "Framing of Indian Constitution?", "Salient features?", "State vs Union basics?"],
                "Fundamental Rights": ["What is Article 14?", "Right to Liberty?", "Right against Exploitation?", "Right to Remedies?", "Are rights absolute?"]
            },
            "Intermediate": {
                "Directive Principles": ["Nature of DPSP?", "Socialist principles?", "Gandhian principles?", "Fundamental Duties?", "DPSP vs Fundamental Rights?"],
                "Government Structure": ["President's powers?", "Parliamentary system?", "Role of Prime Minister?", "Governor's role?", "Local self-government?"]
            },
            "Advanced": {
                "Judiciary & Amendments": ["Supreme Court jurisdiction?", "Judicial Review?", "Basic Structure Doctrine?", "Article 368 process?", "Emergency provisions?"],
                "Constitutional Writs": ["Habeas Corpus?", "Mandamus?", "Certiorari?", "Quo Warranto?", "Prohibition?"]
            }
        },
        "CriminalLaw": {
            "Basic": {
                "Crime Basics": ["What is a crime?", "Mens Rea vs Actus Reus?", "Stages of crime?", "Types of punishments?", "Cognizable vs Non-cognizable?"]
            },
            "Intermediate": {
                "Procedures (CrPC)": ["F.I.R process?", "Bailable vs Non-bailable?", "Arrest rules?", "Role of Police?", "Summary trial basics?"]
            },
            "Advanced": {
                "Evidence & Trial": ["Burden of proof?", "Admissibility of evidence?", "Hearsay evidence?", "Examination of witnesses?", "Confession vs Admission?"]
            }
        },
        "CivilLaw": {
            "Basic": {
                "Civil Rights": ["Civil vs Criminal suits?", "Contract basics?", "Agreement vs Contract?", "Property types?", "Tort basics?"]
            },
            "Intermediate": {
                "CPC & Contracts": ["Res Judicata?", "Summons process?", "Breach of contract?", "Specific performance?", "Agency contracts?"]
            },
            "Advanced": {
                "Torts & Property": ["Negligence?", "Strict vs Absolute liability?", "Vicarious liability?", "Transfer of property?", "Lease vs License?"]
            }
        },
        "CorporateLaw": {
            "Basic": {
                "Company Basics": ["What is a company?", "Separate Legal Entity?", "Types of companies?", "MOA vs AOA?", "Shares and Capital?"]
            },
            "Intermediate": {
                "Governance": ["Directors' duties?", "Board meetings?", "Audit basics?", "SEBI regulations?", "Insider trading?"]
            },
            "Advanced": {
                "M&A and Insolvency": ["Mergers process?", "Winding up methods?", "Insolvency & Bankruptcy Code?", "Corporate restructuring?", "CSR laws?"]
            }
        },
        "FamilyLaw": {
            "Basic": {
                "Marriage Laws": ["Marriage requirements?", "Hindu Marriage Act?", "Special Marriage Act?", "Guardianship basics?", "Void vs Voidable marriage?"]
            },
            "Intermediate": {
                "Divorce & Maintenance": ["Grounds for divorce?", "Mutual consent divorce?", "Alimony rules?", "Child custody?", "Restitution of conjugal rights?"]
            },
            "Advanced": {
                "Inheritance": ["Succession types?", "Ancestral property?", "Will vs Gift?", "Uniform Civil Code debate?", "Adoption laws?"]
            }
        },
        "CyberLaw": {
            "Basic": {
                "Digital Basics": ["IT Act overview?", "What is cyber crime?", "Digital signature?", "E-records?", "Online privacy?"]
            },
            "Intermediate": {
                "Offences": ["Hacking penalties?", "Identity theft?", "Phishing?", "Cyber stalking?", "Obscenity laws?"]
            },
            "Advanced": {
                "Data Protection": ["GDPR vs Indian laws?", "Data sovereignty?", "Intermediary liability?", "Electronic evidence tech?", "Blockchain legalities?"]
            }
        },
        "IntellectualProperty": {
            "Basic": {
                "IP Intro": ["What is IP?", "Copyright basics?", "Trademark meaning?", "Patent intro?", "Design protection?"]
            },
            "Intermediate": {
                "Registration": ["Patent filing process?", "Trademark infringement?", "Fair use in copyright?", "Geographical Indications?", "Trade secrets?"]
            },
            "Advanced": {
                "Enforcement": ["IP litigation?", "Passing off actions?", "Traditional knowledge?", "Bio-piracy?", "International IP treaties?"]
            }
        },
        "InternationalLaw": {
            "Basic": {
                "Global Basics": ["Sources of Int. Law?", "State sovereignty?", "Treaty basics?", "UN Charter?", "Subject of Int. Law?"]
            },
            "Intermediate": {
                "Relations": ["Diplomatic immunity?", "Human Rights law?", "Extradition?", "Asylum?", "Sea laws (UNCLOS)?"]
            },
            "Advanced": {
                "Conflict & Trade": ["WTO regulations?", "War crimes?", "International Court of Justice?", "State responsibility?", "Environmental treaties?"]
            }
        },
        "EnvironmentalLaw": {
            "Basic": {
                "Nature Laws": ["Wildlife Act basics?", "Pollution definitions?", "Forest conservation?", "Environment protection?", "Right to clean environment?"]
            },
            "Intermediate": {
                "Control Acts": ["Water Act?", "Air Act?", "National Green Tribunal?", "Environmental Impact Assessment?", "Waste management?"]
            },
            "Advanced": {
                "Principles": ["Polluter Pays principle?", "Precautionary principle?", "Sustainable development?", "Public trust doctrine?", "International climate protocols?"]
            }
        }
    },
    management: {

        "BusinessStrategy": {
            "Basic": {
                "Strategy Fundamentals": ["What is a business mission?", "Difference between vision and goals?", "Strategic vs Operational planning?", "Corporate level strategy basics?", "Business environment analysis?"],
                "SWOT Analysis": ["What is SWOT analysis?", "How to identify Strengths?", "Analyzing Weaknesses?", "Opportunity spotting?", "Threat management?"]
            },
            "Intermediate": {
                "Competitive Frameworks": ["Porter's Five Forces model?", "Value Chain analysis?", "Competitive advantage types?", "Generic strategies (Cost vs Differentiation)?", "Market positioning?"],
                "Growth Strategies": ["Ansoff Matrix basics?", "Vertical vs Horizontal integration?", "Diversification strategies?", "Strategic alliances?", "Mergers and Acquisitions intro?"]
            },
            "Advanced": {
                "Corporate Governance": ["Board of directors role?", "Ethics in business?", "Stakeholder management?", "Corporate Social Responsibility?", "Crisis management strategy?"],
                "Blue Ocean Strategy": ["Red vs Blue oceans?", "Value innovation?", "Creating new market space?", "Strategy canvas?", "Four actions framework?"]
            }
        },
        "MarketingManagement": {
            "Basic": {
                "Marketing Basics": ["What are the 4Ps?", "Difference between Sales and Marketing?", "Market segmentation?", "Targeting strategies?", "Brand awareness basics?"],
                "Consumer Behavior": ["Consumer buying process?", "Factors affecting purchase?", "Types of consumers?", "Customer satisfaction?", "Need vs Want?"]
            },
            "Intermediate": {
                "Branding": ["Brand equity?", "Brand identity vs Image?", "Brand loyalty?", "Positioning statements?", "Co-branding?"],
                "Digital Marketing": ["SEO basics?", "Content marketing?", "Social media strategy?", "Email marketing ROI?", "Pay-per-click basics?"]
            },
            "Advanced": {
                "Market Research": ["Primary vs Secondary research?", "Qualitative vs Quantitative data?", "Sampling techniques?", "Market forecasting?", "Competitor benchmarking?"],
                "CRM Strategy": ["Customer Lifetime Value (CLV)?", "Retention strategies?", "Lead generation?", "Customer journey mapping?", "Marketing automation?"]
            }
        },
        "FinancialManagement": {
            "Basic": {
                "Finance Basics": ["What is Profit vs Cash Flow?", "Time value of money?", "Basic financial statements?", "Liquidity vs Solvency?", "Financial goals?"]
            },
            "Intermediate": {
                "Capital Budgeting": ["Net Present Value (NPV)?", "Internal Rate of Return (IRR)?", "Payback period?", "Risk-return trade-off?", "Cost of capital?"],
                "Investment": ["Stock market basics?", "Bonds vs Equity?", "Portfolio diversification?", "Asset allocation?", "Market indices?"]
            },
            "Advanced": {
                "Risk Management": ["Types of financial risk?", "Hedging techniques?", "Derivatives intro?", "Capital structure theory?", "Working capital optimization?"]
            }
        },
        "HumanResource": {
            "Basic": {
                "HR Basics": ["What is HRM?", "Recruitment process?", "Job analysis?", "Employee onboarding?", "Importance of HR?"]
            },
            "Intermediate": {
                "Training & Development": ["Need for training?", "On-the-job vs Off-the-job?", "Performance appraisal methods?", "Compensation management?", "Employee motivation?"]
            },
            "Advanced": {
                "Organizational Behavior": ["Group dynamics?", "Conflict resolution?", "Change management?", "Labour laws?", "Talent retention strategies?"]
            }
        },
        "OperationsManagement": {
            "Basic": {
                "Operations Basics": ["What is production planning?", "Inventory management basics?", "Operations vs Logistics?", "Process flow?", "Productivity measurement?"]
            },
            "Intermediate": {
                "Supply Chain": ["What is SCM?", "Sourcing and procurement?", "Distribution channels?", "Warehousing?", "Bullwhip effect?"]
            },
            "Advanced": {
                "Quality & Lean": ["Six Sigma basics?", "Lean management (Kaizen)?", "Total Quality Management (TQM)?", "Just-In-Time (JIT)?", "Process optimization?"]
            }
        },
        "Entrepreneurship": {
            "Basic": {
                "Startup Basics": ["Who is an entrepreneur?", "Ideation techniques?", "Business model canvas?", "Feasibility study?", "Problem-solution fit?"]
            },
            "Intermediate": {
                "Business Planning": ["Writing a business plan?", "Pitching to investors?", "Bootstrapping vs Funding?", "Product-market fit?", "Scaling a startup?"]
            },
            "Advanced": {
                "Venture Capital": ["Angel investors?", "VC funding rounds (Series A, B, C)?", "Exit strategies (IPO, Acquisition)?", "Valuation methods?", "Intellectual Property (IP) rights?"]
            }
        },
        "BusinessAnalytics": {
            "Basic": {
                "Data Basics": ["What is descriptive analytics?", "Mean, Median, Mode in business?", "Importance of data?", "Excel for beginners?", "Data visualization basics?"]
            },
            "Intermediate": {
                "Tools & Analysis": ["SQL for data retrieval?", "Tableau dashboards?", "Predictive modeling?", "Trend analysis?", "Data cleaning?"]
            },
            "Advanced": {
                "Strategy & AI": ["Prescriptive analytics?", "Big data in business?", "AI for decision making?", "Machine learning intro?", "A/B testing?"]
            }
        },
        "Leadership": {
            "Basic": {
                "Leadership Intro": ["Leadership vs Management?", "Traits of a leader?", "Team building basics?", "Communication skills?", "Self-awareness?"]
            },
            "Intermediate": {
                "Leadership Styles": ["Democratic vs Autocratic?", "Transformational leadership?", "Servant leadership?", "Emotional intelligence?", "Delegation skills?"]
            },
            "Advanced": {
                "Strategic Leadership": ["Managing organizational culture?", "Ethical leadership?", "Global leadership?", "Succession planning?", "Influencing skills?"]
            }
        },
        "InternationalBusiness": {
            "Basic": {
                "Global Trade": ["What is export-import?", "Globalization basics?", "Foreign exchange intro?", "Cultural differences?", "Global market entry?"]
            },
            "Intermediate": {
                "MNC Strategy": ["Types of MNCs?", "Foreign Direct Investment (FDI)?", "International trade barriers?", "Global supply chain?", "Export documentation?"]
            },
            "Advanced": {
                "Forex & Policy": ["Exchange rate determination?", "International monetary fund (IMF)?", "Trade agreements (WTO)?", "Global risk assessment?", "Hedging in forex?"]
            }
        }
    },
    agri: {

        "CropScience": {
            "Basic": {
                "Plant Anatomy": ["Root system types?", "Photosynthesis process?", "Leaf structure?", "Stems function?", "Flower parts?"],
                "Crop Varieties": ["Kharif crops?", "Rabi crops?", "Zaid crops?", "Cereal examples?", "Pulse crops?"]
            },
            "Intermediate": {
                "Seed Tech": ["Seed germination?", "Dormancy causes?", "Seed treatment?", "Purity testing?", "Storage conditions?"],
                "Agronomy": ["Tillage types?", "Nutrient management?", "Weed control?", "Crop rotation?", "Sowing depth?"]
            },
            "Advanced": {
                "Plant Breeding": ["Hybridization tech?", "Mutation breeding?", "Genetic engineering?", "Tissue culture?", "MAS breeding?"],
                "Precision Agri": ["GIS in farming?", "Variable rate tech?", "Yield mapping?", "Satellite imaging?", "Sensor technology?"]
            }
        },
        "SoilScience": {
            "Basic": {
                "Soil Basics": ["Soil components?", "Soil texture?", "Organic matter?", "Soil pH?", "Soil color?"],
                "Soil Types": ["Alluvial soil?", "Black soil?", "Red soil?", "Laterite soil?", "Sandy soil?"]
            },
            "Intermediate": {
                "Fertility": ["Nitrogen cycle?", "Phosphorus role?", "Potassium benefits?", "Micro-nutrients?", "Fertilizer types?"],
                "Conservation": ["Wind erosion?", "Water erosion?", "Mulching?", "Terrace farming?", "Cover crops?"]
            },
            "Advanced": {
                "Soil Chemistry": ["Cation exchange?", "Soil colloids?", "Clay mineralogy?", "Acidity causes?", "Salinity management?"],
                "Microbiology": ["Rhizobium role?", "Mycorrhiza benefits?", "Soil enzymes?", "Nitrogen fixation?", "Decomposition?"]
            }
        },
        "Horticulture": {
            "Basic": {
                "Classification": ["Fruit types?", "Vegetable categories?", "Ornamental plants?", "Climate zones?", "Growth habits?"],
                "Propagation": ["Cutting methods?", "Layering tech?", "Grafting basics?", "Budding process?", "Seed sowing?"]
            },
            "Intermediate": {
                "Fruit Production": ["Mango cultivation?", "Banana spacing?", "Citrus pruning?", "Grapes training?", "Pollination in fruits?"],
                "Floriculture": ["Rose varieties?", "Jasmine cultivation?", "Greenhouse flowers?", "Flower harvesting?", "Vase life?"]
            },
            "Advanced": {
                "Post Harvest": ["Cold storage?", "Ripening chambers?", "Packaging tech?", "Ethylene role?", "Preservation methods?"],
                "Landscaping": ["Garden styles?", "Lawn making?", "Indoor plants?", "Bonsai tech?", "Xeriscaping?"]
            }
        },
        "AnimalHusbandry": {
            "Basic": {
                "Breeds": ["Cattle breeds?", "Buffalo types?", "Sheep breeds?", "Goat varieties?", "Poultry types?"],
                "Management": ["Feeding basics?", "Housing types?", "Watering?", "Sanitation?", "Grooming?"]
            },
            "Intermediate": {
                "Dairy Farming": ["Milking methods?", "Milk composition?", "Pasteurization?", "Cream separation?", "Butter making?"],
                "Poultry": ["Broiler management?", "Layer farming?", "Incubation?", "Egg quality?", "Poultry feed?"]
            },
            "Advanced": {
                "Veterinary": ["Vaccination schedule?", "Common diseases?", "Parasite control?", "Artificial Insemination?", "Animal nutrition?"]
            }
        },
        "AgriculturalEngineering": {
            "Basic": {
                "Hand Tools": ["Sickle use?", "Spade types?", "Plough basics?", "Harrow types?", "Leveller?"]
            },
            "Intermediate": {
                "Farm Power": ["Tractor systems?", "Engine types?", "Power tiller?", "Combine harvester?", "Sprayer types?"],
                "Irrigation Eng": ["Pump types?", "Drip design?", "Sprinkler tech?", "Canal design?", "Water flow?"]
            },
            "Advanced": {
                "Farm Structures": ["Silo design?", "Greenhouse construction?", "Storage structures?", "Cold storage eng?", "Renewable energy?"]
            }
        },
        "AgriculturalChemistry": {
            "Basic": {
                "Chemicals": ["Fertilizer basics?", "Manure types?", "Pesticide intro?", "Herbicide role?", "Bio-fertilizers?"]
            },
            "Intermediate": {
                "Nutrients": ["Urea production?", "DAP components?", "Potash sources?", "Micro-nutrient mix?", "NPK ratios?"]
            },
            "Advanced": {
                "Biochemistry": ["Plant hormones?", "Enzyme activity?", "Protein synthesis?", "Metabolism?", "Pesticide residue?"]
            }
        },
        "Agribusiness": {
            "Basic": {
                "Markets": ["Local mandis?", "Market types?", "Price basics?", "Wholesale?", "Retail?"]
            },
            "Intermediate": {
                "Management": ["Farm planning?", "Budgeting?", "Resource allocation?", "Risk management?", "Record keeping?"]
            },
            "Advanced": {
                "Economics": ["Supply & Demand?", "Export-Import?", "Cooperative farming?", "Agri-insurance?", "Value chain?"]
            }
        },
        "Entomology": {
            "Basic": {
                "Insects": ["Insects anatomy?", "Metamorphosis?", "Insect orders?", "Common pests?", "Beneficial insects?"]
            },
            "Intermediate": {
                "Pest Control": ["Chemical control?", "Biological control?", "Physical control?", "Cultural methods?", "Traps?"]
            },
            "Advanced": {
                "Toxicology": ["Insecticide mode?", "Resistance?", "IPM strategy?", "Bio-pesticides?", "Safe handling?"]
            }
        }
    }
};