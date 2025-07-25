const questions = [
  {
    type: "multiple_choice",
    question: "What concept is often referred to as the '4 Ps'?",
    options: [
      "Financial Situation",
      "Marketing Mix",
      "Company Policies",
      "Organizational Structure"
    ],
    answer: "Marketing Mix",
    citation: "13"
  },
  {
    type: "riddle",
    question: "I am a set of controllable tactical marketing tools. I blend Product, Price, Place, and Promotion to get a desired response. What am I?",
    answer: "The Marketing Mix",
    citation: "13"
  },
  {
    type: "true_false",
    question: "The 4 Ps of the marketing mix are Product, Price, People, and Promotion.",
    answer: false,
    explanation: "The 4 Ps are Product, Price, Place (Distribution), and Promotion.",
    citation: "13"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix includes Product, Price, Place, and _________.",
    answer: "Promotion",
    citation: "13"
  },
  {
    type: "multiple_choice",
    question: "Which of the following is considered an internal factor affecting the marketing mix?",
    options: [
      "Economic Conditions",
      "Company Objectives/Goals",
      "Technological Advances",
      "Competition"
    ],
    answer: "Company Objectives/Goals",
    citation: "15, 16"
  },
  {
    type: "riddle",
    question: "I am a target that a company aims to achieve, like market leadership or profit. I influence the marketing mix. What am I?",
    answer: "Company Objectives/Goals",
    citation: "16"
  },
  {
    type: "true_false",
    question: "Company objectives/goals are external factors affecting the marketing mix.",
    answer: false,
    explanation: "Company objectives/goals are internal factors.",
    citation: "15, 16"
  },
  {
    type: "fill_in_the_blank",
    question: "Internal rules and guidelines that impact marketing decisions are known as Company _________.",
    answer: "Policies",
    citation: "18"
  },
  {
    type: "multiple_choice",
    question: "What internal factor can influence product features, pricing, and promotional messages through rules like return policies or ethical standards?",
    options: [
      "Human Resources/Capabilities",
      "Organizational Structure",
      "Company Policies",
      "Production Capacity and Technology"
    ],
    answer: "Company Policies",
    citation: "19"
  },
  {
    type: "riddle",
    question: "I am an internal rulebook, guiding decisions on customer service and ethics, impacting your product and price. What am I?",
    answer: "Company Policies",
    citation: "18, 19"
  },
  {
    type: "true_false",
    question: "Customer service policies are an example of an internal factor affecting the marketing mix.",
    answer: true,
    citation: "19"
  },
  {
    type: "fill_in_the_blank",
    question: "The budget available for marketing activities is referred to as Financial Situation/_________.",
    answer: "Resources",
    citation: "20"
  },
  {
    type: "multiple_choice",
    question: "Limited resources in a company might lead to what kind of marketing mix?",
    options: [
      "Aggressive and broad",
      "Untargeted and expensive",
      "More targeted and cost-effective",
      "Premium and exclusive"
    ],
    answer: "More targeted and cost-effective",
    citation: "21"
  },
  {
    type: "riddle",
    question: "I am your marketing budget. When I am small, you must be smart and focused. What am I?",
    answer: "Financial Situation/Resources",
    citation: "20, 21"
  },
  {
    type: "true_false",
    question: "Financial situation/resources only influence product development, not promotional campaigns.",
    answer: false,
    explanation: "Financial situation/resources influence product development, promotional campaigns, distribution networks, and pricing flexibility.",
    citation: "20"
  },
  {
    type: "fill_in_the_blank",
    question: "The skills and experience of marketing staff and sales teams are part of Human Resources/_________.",
    answer: "Capabilities",
    citation: "22"
  },
  {
    type: "multiple_choice",
    question: "Which internal factor directly impacts the execution of marketing strategies through the skills and experience of personnel?",
    options: [
      "Company Culture",
      "Human Resources/Capabilities",
      "Organizational Structure",
      "Production Capacity and Technology"
    ],
    answer: "Human Resources/Capabilities",
    citation: "22"
  },
  {
    type: "riddle",
    question: "I am the talent within your company, from your sales team to product developers. I help execute your marketing. What am I?",
    answer: "Human Resources/Capabilities",
    citation: "22, 23"
  },
  {
    type: "true_false",
    question: "A strong sales team can enhance promotion and distribution.",
    answer: true,
    citation: "23"
  },
  {
    type: "fill_in_the_blank",
    question: "How a company is organized can affect communication and decision-making regarding the marketing mix, this is called Organizational _________.",
    answer: "Structure",
    citation: "24"
  },
  {
    type: "multiple_choice",
    question: "A flat organizational structure might allow for what regarding the marketing mix?",
    options: [
      "Slower but more consistent adaptation",
      "Quicker adaptation",
      "Limited decision-making",
      "Strict adherence to hierarchy"
    ],
    answer: "Quicker adaptation",
    citation: "25"
  },
  {
    type: "riddle",
    question: "I am the blueprint of your company, dictating how fast or slow decisions are made about your products and prices. What am I?",
    answer: "Organizational Structure",
    citation: "24, 25"
  },
  {
    type: "true_false",
    question: "A hierarchical organizational structure typically allows for quicker adaptation than a flat structure.",
    answer: false,
    explanation: "A flat structure might allow for quicker adaptation, while a hierarchical one might be slower but more consistent.",
    citation: "25"
  },
  {
    type: "fill_in_the_blank",
    question: "The ability to produce products and the efficiency of production processes fall under Production Capacity and _________.",
    answer: "Technology",
    citation: "26"
  },
  {
    type: "multiple_choice",
    question: "Which internal factor influences product features, quality, and even pricing due to production costs?",
    options: [
      "Company Culture",
      "Company Objectives/Goals",
      "Production Capacity and Technology",
      "Financial Situation/Resources"
    ],
    answer: "Production Capacity and Technology",
    citation: "26"
  },
  {
    type: "riddle",
    question: "I dictate how much you can make and how well you make it, even affecting your price tag. What am I?",
    answer: "Production Capacity and Technology",
    citation: "26"
  },
  {
    type: "true_false",
    question: "Production capacity only impacts product features, not quality or pricing.",
    answer: false,
    explanation: "Production capacity and technology influence product features, quality, and even pricing (due to production costs).",
    citation: "26"
  },
  {
    type: "fill_in_the_blank",
    question: "The values and norms of the organization that impact how marketing is approached is called Company _________.",
    answer: "Culture",
    citation: "27"
  },
  {
    type: "multiple_choice",
    question: "A customer-centric company culture will naturally prioritize what in the marketing mix?",
    options: [
      "Profit maximization",
      "Competitor analysis",
      "Customer needs",
      "Aggressive promotion"
    ],
    answer: "Customer needs",
    citation: "28"
  },
  {
    type: "riddle",
    question: "I am the soul of your company, guiding how you treat your customers and approach your marketing. What am I?",
    answer: "Company Culture",
    citation: "27, 28"
  },
  {
    type: "true_false",
    question: "A customer-centric culture focuses on competitor analysis more than customer needs.",
    answer: false,
    explanation: "A customer-centric culture will naturally prioritize customer needs in the marketing mix.",
    citation: "28"
  },
  {
    type: "multiple_choice",
    question: "Which of the following is an external factor affecting the marketing mix?",
    options: [
      "Company Policies",
      "Production Capacity and Technology",
      "Customer Attitudes and Behavior",
      "Organizational Structure"
    ],
    answer: "Customer Attitudes and Behavior",
    citation: "30, 33"
  },
  {
    type: "riddle",
    question: "I am outside your control, representing the feelings and buying habits of your target market. I change your product design. What am I?",
    answer: "Customer Attitudes and Behavior",
    citation: "33, 34"
  },
  {
    type: "true_false",
    question: "External factors affecting the marketing mix are controllable by the organization.",
    answer: false,
    explanation: "External factors are uncontrollable by the organization.",
    citation: "30, 31"
  },
  {
    type: "fill_in_the_blank",
    question: "Individual feelings, opinions, purchasing habits, needs, and preferences of the target market are known as Customer Attitudes and _________.",
    answer: "Behavior",
    citation: "33"
  },
  {
    type: "multiple_choice",
    question: "Changes in consumer tastes, trends, and buying power directly influence what aspects of the marketing mix?",
    options: [
      "Organizational structure and company culture",
      "Financial resources and human capabilities",
      "Product design, pricing strategies, distribution channels, and promotional messaging",
      "Production capacity and technology"
    ],
    answer: "Product design, pricing strategies, distribution channels, and promotional messaging",
    citation: "34"
  },
  {
    type: "fill_in_the_blank",
    question: "Inflation, interest rates, and unemployment rates are examples of Economic _________.",
    answer: "Conditions",
    citation: "35"
  },
  {
    type: "riddle",
    question: "I represent the economy, dictating if consumers have more or less to spend, influencing your prices. What am I?",
    answer: "Economic Conditions",
    citation: "35, 36"
  },
  {
    type: "true_false",
    question: "During an economic downturn, companies are likely to increase prices.",
    answer: false,
    explanation: "During an economic downturn, consumers may have less spending power, leading companies to lower prices or offer more value-oriented products.",
    citation: "36"
  },
  {
    type: "multiple_choice",
    question: "What external factor can lead to new product innovations, more efficient production, and new distribution channels like e-commerce?",
    options: [
      "Natural/Environmental Forces",
      "Social and Cultural Factors",
      "Technological Advances",
      "Political and Legal Forces"
    ],
    answer: "Technological Advances",
    citation: "37, 38"
  },
  {
    type: "riddle",
    question: "I bring new innovations, from e-commerce to AI marketing. I can change how you make and promote your products. What am I?",
    answer: "Technological Advances",
    citation: "37, 38"
  },
  {
    type: "true_false",
    question: "Technological advances only impact new product innovations, not distribution channels.",
    answer: false,
    explanation: "New technologies can lead to new product innovations, more efficient production methods, new distribution channels (e.g., e-commerce), and new ways to promote products.",
    citation: "38"
  },
  {
    type: "fill_in_the_blank",
    question: "Government regulations, laws, and political stability are categorized as Political and _________ Forces.",
    answer: "Legal",
    citation: "39"
  },
  {
    type: "multiple_choice",
    question: "Which external force includes health and safety regulations, product labeling requirements, and consumer protection laws?",
    options: [
      "Economic Conditions",
      "Political and Legal Forces",
      "Competition",
      "Suppliers and Marketing Intermediaries"
    ],
    answer: "Political and Legal Forces",
    citation: "39, 40"
  },
  {
    type: "riddle",
    question: "I am the law of the land, dictating what you can put on your labels and how you advertise. What am I?",
    answer: "Political and Legal Forces",
    citation: "39, 40"
  },
  {
    type: "true_false",
    question: "Advertising standards are an example of an economic condition affecting the marketing mix.",
    answer: false,
    explanation: "Advertising standards are part of Political and Legal Forces.",
    citation: "40"
  },
  {
    type: "fill_in_the_blank",
    question: "Climate change, natural disasters, and resource availability are examples of Natural/Environmental _________.",
    answer: "Forces",
    citation: "41"
  },
  {
    type: "multiple_choice",
    question: "What external factor can impact supply chains, production costs, and consumer preferences for eco-friendly products?",
    options: [
      "Customer Attitudes and Behavior",
      "Social and Cultural Factors",
      "Natural/Environmental Forces",
      "Technological Advances"
    ],
    answer: "Natural/Environmental Forces",
    citation: "41, 42"
  },
  {
    type: "riddle",
    question: "I am the weather and the planet's health, affecting your supply chain and consumer demand for green products. What am I?",
    answer: "Natural/Environmental Forces",
    citation: "41, 42"
  },
  {
    type: "true_false",
    question: "Environmental concerns are an internal factor affecting the marketing mix.",
    answer: false,
    explanation: "Environmental concerns are part of Natural/Environmental Forces, which are external.",
    citation: "41"
  },
  {
    type: "fill_in_the_blank",
    question: "The actions of competitors heavily influence a company's marketing mix, which is simply referred to as _________.",
    answer: "Competition",
    citation: "43"
  },
  {
    type: "multiple_choice",
    question: "Businesses must constantly analyze competitors to gain what?",
    options: [
      "Internal control",
      "Competitive advantage",
      "Financial stability",
      "Organizational restructuring"
    ],
    answer: "Competitive advantage",
    citation: "44"
  },
  {
    type: "riddle",
    question: "I am the other players in the game, launching new products and setting prices, forcing you to adjust your strategy. What am I?",
    answer: "Competition",
    citation: "43, 44"
  },
  {
    type: "true_false",
    question: "Competitor actions do not influence a company's marketing mix.",
    answer: false,
    explanation: "The actions of competitors heavily influence a company's marketing mix.",
    citation: "43"
  },
  {
    type: "fill_in_the_blank",
    question: "Demographics, lifestyle trends, cultural norms, and societal attitudes are covered by Social and _________ Factors.",
    answer: "Cultural",
    citation: "45"
  },
  {
    type: "multiple_choice",
    question: "What external factor might lead to new product offerings and promotional messages emphasizing health benefits?",
    options: [
      "Economic Conditions",
      "Technological Advances",
      "Social and Cultural Factors",
      "Political and Legal Forces"
    ],
    answer: "Social and Cultural Factors",
    citation: "46"
  },
  {
    type: "riddle",
    question: "I am the pulse of society, reflecting age, gender, and trends, influencing your product messages. What am I?",
    answer: "Social and Cultural Factors",
    citation: "45, 46"
  },
  {
    type: "true_false",
    question: "A growing health-conscious trend is an example of an economic condition.",
    answer: false,
    explanation: "A growing health-conscious trend is an example of a Social and Cultural Factor.",
    citation: "46"
  },
  {
    type: "fill_in_the_blank",
    question: "The availability, cost, and reliability of raw materials come from Suppliers and Marketing _________.",
    answer: "Intermediaries",
    citation: "47"
  },
  {
    type: "multiple_choice",
    question: "Which external factor directly affects product quality, production costs, and distribution efficiency?",
    options: [
      "Company Objectives/Goals",
      "Human Resources/Capabilities",
      "Suppliers and Marketing Intermediaries",
      "Organizational Structure"
    ],
    answer: "Suppliers and Marketing Intermediaries",
    citation: "47"
  },
  {
    type: "riddle",
    question: "I am your source for raw materials and the path to your customers, influencing your costs and availability. What am I?",
    answer: "Suppliers and Marketing Intermediaries",
    citation: "47"
  },
  {
    type: "true_false",
    question: "The reliability of suppliers does not affect product availability.",
    answer: false,
    explanation: "The availability, cost, and reliability of suppliers and marketing intermediaries directly affect product quality, production costs, distribution efficiency, and ultimately, product availability and price.",
    citation: "47"
  },
  {
    type: "multiple_choice",
    question: "What is a benefit of a well-managed marketing mix?",
    options: [
      "Decreased sales forecasting accuracy",
      "Limited adaptability to market changes",
      "Achieving Business Objectives",
      "Poor communication within the organization"
    ],
    answer: "Achieving Business Objectives",
    citation: "48, 51"
  },
  {
    type: "riddle",
    question: "I help you hit your sales targets and gain market share by aligning your P's. What am I?",
    answer: "Achieving Business Objectives",
    citation: "48"
  },
  {
    type: "true_false",
    question: "A well-managed marketing mix helps companies achieve objectives like increasing sales and market share.",
    answer: true,
    citation: "48"
  },
  {
    type: "fill_in_the_blank",
    question: "A well-designed marketing mix ensures that the product or service effectively meets customer _________ and preferences.",
    answer: "needs",
    citation: "49"
  },
  {
    type: "multiple_choice",
    question: "What benefit of a well-managed marketing mix ensures the product is priced appropriately and readily available where customers want it?",
    options: [
      "Gaining Competitive Advantage",
      "Meeting Customer Needs",
      "Optimizing Resource Allocation",
      "Improved Decision-Making"
    ],
    answer: "Meeting Customer Needs",
    citation: "49"
  },
  {
    type: "riddle",
    question: "I ensure your product fits your customer's desires and is available right when they need it. What am I?",
    answer: "Meeting Customer Needs",
    citation: "49"
  },
  {
    type: "true_false",
    question: "Meeting customer needs is not a benefit of a well-managed marketing mix.",
    answer: false,
    explanation: "Meeting Customer Needs is a benefit of a well-managed marketing mix.",
    citation: "49"
  },
  {
    type: "fill_in_the_blank",
    question: "Differentiating its offering, optimizing pricing, and establishing efficient distribution helps a company gain Competitive _________.",
    answer: "Advantage",
    citation: "50"
  },
  {
    type: "multiple_choice",
    question: "By standing out from competitors and attracting more customers, a company benefits from what?",
    options: [
      "Enhanced Brand Image and Reputation",
      "Better Sales Forecasting and Revenue Generation",
      "Gaining Competitive Advantage",
      "Clear Communication and Coordination"
    ],
    answer: "Gaining Competitive Advantage",
    citation: "50"
  },
  {
    type: "riddle",
    question: "I am what you achieve when you stand out from the crowd with your unique offerings and smart pricing. What am I?",
    answer: "Gaining Competitive Advantage",
    citation: "50"
  },
  {
    type: "true_false",
    question: "Optimizing pricing helps a company gain a competitive advantage.",
    answer: true,
    citation: "50"
  },
  {
    type: "fill_in_the_blank",
    question: "A clear marketing mix strategy helps businesses allocate their marketing budget and resources efficiently across different activities, known as Optimizing Resource _________.",
    answer: "Allocation",
    citation: "52"
  },
  {
    type: "multiple_choice",
    question: "Which benefit of a well-managed marketing mix helps businesses focus their budget and resources on what yields the best results?",
    options: [
      "Achieving Business Objectives",
      "Meeting Customer Needs",
      "Optimizing Resource Allocation",
      "Improved Decision-Making"
    ],
    answer: "Optimizing Resource Allocation",
    citation: "52"
  },
  {
    type: "riddle",
    question: "I help you spend your money wisely and use your time efficiently, ensuring you get the most bang for your buck. What am I?",
    answer: "Optimizing Resource Allocation",
    citation: "52"
  },
  {
    type: "true_false",
    question: "Optimizing resource allocation means inefficiently distributing marketing budgets.",
    answer: false,
    explanation: "Optimizing resource allocation means allocating marketing budgets and resources efficiently.",
    citation: "52"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix framework provides a structured approach for making informed decisions, leading to Improved _________.",
    answer: "Decision-Making",
    citation: "53"
  },
  {
    type: "multiple_choice",
    question: "What benefit of the marketing mix provides a structured approach for informed decisions about product development and pricing?",
    options: [
      "Gaining Competitive Advantage",
      "Enhanced Brand Image and Reputation",
      "Improved Decision-Making",
      "Better Sales Forecasting and Revenue Generation"
    ],
    answer: "Improved Decision-Making",
    citation: "53"
  },
  {
    type: "riddle",
    question: "I am the blueprint for smart choices, guiding you in product, price, and promotion. What am I?",
    answer: "Improved Decision-Making",
    citation: "53"
  },
  {
    type: "true_false",
    question: "The marketing mix framework hinders informed decision-making.",
    answer: false,
    explanation: "The framework of the marketing mix provides a structured approach for making informed decisions.",
    citation: "53"
  },
  {
    type: "fill_in_the_blank",
    question: "A consistent and well-executed marketing mix contributes to a strong brand identity and positive _________ in the market.",
    answer: "reputation",
    citation: "54"
  },
  {
    type: "multiple_choice",
    question: "Which benefit of the marketing mix builds trust and loyalty among customers?",
    options: [
      "Optimizing Resource Allocation",
      "Enhanced Brand Image and Reputation",
      "Adaptability to Market Changes",
      "Clear Communication and Coordination"
    ],
    answer: "Enhanced Brand Image and Reputation",
    citation: "54, 55"
  },
  {
    type: "riddle",
    question: "I am the positive perception customers have of your company, building trust and loyalty. What am I?",
    answer: "Enhanced Brand Image and Reputation",
    citation: "54, 55"
  },
  {
    type: "true_false",
    question: "A poorly executed marketing mix enhances brand image.",
    answer: false,
    explanation: "A consistent and well-executed marketing mix contributes to a strong brand identity and positive reputation.",
    citation: "54"
  },
  {
    type: "fill_in_the_blank",
    question: "Understanding how different elements of the marketing mix impact sales leads to Better Sales Forecasting and Revenue _________.",
    answer: "Generation",
    citation: "56"
  },
  {
    type: "multiple_choice",
    question: "What benefit allows businesses to make more accurate sales forecasts and develop strategies to maximize revenue?",
    options: [
      "Achieving Business Objectives",
      "Better Sales Forecasting and Revenue Generation",
      "Meeting Customer Needs",
      "Gaining Competitive Advantage"
    ],
    answer: "Better Sales Forecasting and Revenue Generation",
    citation: "56"
  },
  {
    type: "riddle",
    question: "I help you predict your future sales and find ways to make more money. What am I?",
    answer: "Better Sales Forecasting and Revenue Generation",
    citation: "56"
  },
  {
    type: "true_false",
    question: "The marketing mix helps in making more accurate sales forecasts.",
    answer: true,
    citation: "56"
  },
  {
    type: "fill_in_the_blank",
    question: "Regularly reviewing and adjusting the marketing mix in response to internal and external factors ensures long-term _________.",
    answer: "sustainability",
    citation: "57"
  },
  {
    type: "multiple_choice",
    question: "Which benefit ensures businesses remain agile and responsive to evolving market conditions?",
    options: [
      "Optimizing Resource Allocation",
      "Improved Decision-Making",
      "Adaptability to Market Changes",
      "Enhanced Brand Image and Reputation"
    ],
    answer: "Adaptability to Market Changes",
    citation: "57"
  },
  {
    type: "riddle",
    question: "I keep you flexible and responsive, letting you change course when the market shifts. What am I?",
    answer: "Adaptability to Market Changes",
    citation: "57"
  },
  {
    type: "true_false",
    question: "The marketing mix is a static concept and does not need to be adjusted.",
    answer: false,
    explanation: "The marketing mix is not a static concept but a dynamic tool that must be constantly evaluated and adjusted.",
    citation: "59, 60"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix provides a common language and framework for different departments to coordinate their efforts, leading to Clear Communication and _________.",
    answer: "Coordination",
    citation: "58"
  },
  {
    type: "multiple_choice",
    question: "What benefit helps departments like R&D, production, sales, and marketing work together towards shared goals?",
    options: [
      "Better Sales Forecasting and Revenue Generation",
      "Adaptability to Market Changes",
      "Clear Communication and Coordination",
      "Achieving Business Objectives"
    ],
    answer: "Clear Communication and Coordination",
    citation: "58"
  },
  {
    type: "riddle",
    question: "I ensure everyone in your company is on the same page, speaking the same marketing language. What am I?",
    answer: "Clear Communication and Coordination",
    citation: "58"
  },
  {
    type: "true_false",
    question: "The marketing mix helps different departments coordinate their efforts.",
    answer: true,
    citation: "58"
  },
  {
    type: "multiple_choice",
    question: "Who is one of the members of Group One mentioned in the presentation?",
    options: [
      "John Doe",
      "Garfield Nana Agyekum",
      "Jane Smith",
      "Robert Johnson"
    ],
    answer: "Garfield Nana Agyekum",
    citation: "3"
  },
  {
    type: "true_false",
    question: "Matthew Opare Danso is a member of Group One.",
    answer: true,
    citation: "4"
  },
  {
    type: "fill_in_the_blank",
    question: "Ziyaad _________ is listed as a member of Group One.",
    answer: "Labaran",
    citation: "5"
  },
  {
    type: "multiple_choice",
    question: "Which of the following individuals is NOT listed as a member of Group One?",
    options: [
      "Aida Yussif Zaare",
      "Gabriel Nyantakyi",
      "Raymond O. Adu-Danso",
      "Emily White"
    ],
    answer: "Emily White",
    citation: "6, 7, 8"
  },
  {
    type: "riddle",
    question: "I am one of the names in Group One, starting with 'Aida'. Who am I?",
    answer: "Aida Yussif Zaare",
    citation: "6"
  },
  {
    type: "true_false",
    question: "Gabriel Nyantakyi is a member of Group One.",
    answer: true,
    citation: "7"
  },
  {
    type: "fill_in_the_blank",
    question: "Raymond O. _________ is a member of Group One.",
    answer: "Adu-Danso",
    citation: "8"
  },
  {
    type: "multiple_choice",
    question: "The presentation is about what subject?",
    options: [
      "Finance",
      "Entrepreneurship",
      "Human Resources",
      "Production Management"
    ],
    answer: "Entrepreneurship",
    citation: "1"
  },
  {
    type: "true_false",
    question: "The presentation discusses only internal factors affecting the marketing mix.",
    answer: false,
    explanation: "The presentation discusses both internal and external factors affecting the marketing mix.",
    citation: "14, 15, 29, 30"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix is a fundamental concept in _________.",
    answer: "marketing",
    citation: "13"
  },
  {
    type: "multiple_choice",
    question: "What is the primary purpose of the marketing mix?",
    options: [
      "To control employee benefits",
      "To produce the response a company wants in the target market",
      "To solely focus on profit maximization",
      "To ignore external market changes"
    ],
    answer: "To produce the response a company wants in the target market",
    citation: "13"
  },
  {
    type: "riddle",
    question: "I am a core idea in marketing, a blend of controllable tools to get a desired reaction from customers. What am I?",
    answer: "The Marketing Mix",
    citation: "13"
  },
  {
    type: "true_false",
    question: "The marketing mix consists of uncontrollable tactical marketing tools.",
    answer: false,
    explanation: "The marketing mix consists of controllable tactical marketing tools.",
    citation: "13"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix elements are Product, Price, Place, and _________.",
    answer: "Promotion",
    citation: "13"
  },
  {
    type: "multiple_choice",
    question: "Which of the following is an example of a company policy that could impact marketing decisions?",
    options: [
      "Competitor pricing strategies",
      "Customer return policies",
      "Inflation rates",
      "Technological advancements"
    ],
    answer: "Customer return policies",
    citation: "19"
  },
  {
    type: "riddle",
    question: "I am an internal rule, like how you handle customer returns, and I can shape your product's appeal. What am I?",
    answer: "Company Policy",
    citation: "18, 19"
  },
  {
    type: "true_false",
    question: "Limited financial resources typically lead to a more extensive marketing mix.",
    answer: false,
    explanation: "Limited resources might lead to a more targeted and cost-effective marketing mix.",
    citation: "21"
  },
  {
    type: "fill_in_the_blank",
    question: "The skills and experience of marketing staff are categorized under Human Resources/_________.",
    answer: "Capabilities",
    citation: "22"
  },
  {
    type: "multiple_choice",
    question: "How does a skilled product development team influence the marketing mix?",
    options: [
      "By lowering interest rates",
      "By creating innovative products",
      "By increasing competition",
      "By influencing government regulations"
    ],
    answer: "By creating innovative products",
    citation: "23"
  },
  {
    type: "riddle",
    question: "I am the collective talent that designs new offerings, making your product stand out. Who am I?",
    answer: "Skilled Product Development Team (part of Human Resources/Capabilities)",
    citation: "23"
  },
  {
    type: "true_false",
    question: "A flat organizational structure generally results in slower adaptation to market changes.",
    answer: false,
    explanation: "A flat structure might allow for quicker adaptation.",
    citation: "25"
  },
  {
    type: "fill_in_the_blank",
    question: "The efficiency of production processes is an aspect of Production Capacity and _________.",
    answer: "Technology",
    citation: "26"
  },
  {
    type: "multiple_choice",
    question: "What is an example of how company culture can affect the marketing mix?",
    options: [
      "Ignoring customer feedback",
      "Prioritizing customer needs in the marketing mix",
      "Focusing solely on competitor analysis",
      "Disregarding ethical standards"
    ],
    answer: "Prioritizing customer needs in the marketing mix",
    citation: "28"
  },
  {
    type: "riddle",
    question: "I am the moral compass of your business, guiding whether you put customers first in your marketing efforts. What am I?",
    answer: "Company Culture",
    citation: "27, 28"
  },
  {
    type: "true_false",
    question: "Customer attitudes and behavior are internal factors.",
    answer: false,
    explanation: "Customer attitudes and behavior are external factors.",
    citation: "30, 33"
  },
  {
    type: "fill_in_the_blank",
    question: "Economic conditions include factors like inflation, interest rates, and unemployment _________.",
    answer: "rates",
    citation: "35"
  },
  {
    type: "multiple_choice",
    question: "During an economic recession, what might companies do with their pricing strategies?",
    options: [
      "Increase prices significantly",
      "Maintain premium pricing",
      "Lower prices or offer more value-oriented products",
      "Ignore pricing adjustments"
    ],
    answer: "Lower prices or offer more value-oriented products",
    citation: "36"
  },
  {
    type: "riddle",
    question: "I am the financial climate, and when I turn cold, companies often make their products more affordable. What am I?",
    answer: "Economic Conditions",
    citation: "35, 36"
  },
  {
    type: "true_false",
    question: "New technologies can lead to new product innovations but not new distribution channels.",
    answer: false,
    explanation: "New technologies can lead to new product innovations, more efficient production methods, new distribution channels (e.g., e-commerce), and new ways to promote products.",
    citation: "38"
  },
  {
    type: "fill_in_the_blank",
    question: "Government regulations and trade policies are part of Political and _________ Forces.",
    answer: "Legal",
    citation: "39, 40"
  },
  {
    type: "multiple_choice",
    question: "What type of forces can impact supply chains and consumer preferences for eco-friendly products?",
    options: [
      "Economic Conditions",
      "Social and Cultural Factors",
      "Natural/Environmental Forces",
      "Technological Advances"
    ],
    answer: "Natural/Environmental Forces",
    citation: "41, 42"
  },
  {
    type: "riddle",
    question: "I represent the earth's concerns, pushing for green products and affecting your supply. What am I?",
    answer: "Natural/Environmental Forces",
    citation: "41, 42"
  },
  {
    type: "true_false",
    question: "Competitor actions are an internal factor affecting the marketing mix.",
    answer: false,
    explanation: "Competition is an external factor.",
    citation: "30, 43"
  },
  {
    type: "fill_in_the_blank",
    question: "Demographics such as age, gender, and income are elements of Social and _________ Factors.",
    answer: "Cultural",
    citation: "45"
  },
  {
    type: "multiple_choice",
    question: "How do marketing intermediaries like wholesalers and retailers affect the marketing mix?",
    options: [
      "By dictating company objectives",
      "By influencing product quality and distribution efficiency",
      "By setting company policies",
      "By determining human resource capabilities"
    ],
    answer: "By influencing product quality and distribution efficiency",
    citation: "47"
  },
  {
    type: "riddle",
    question: "I am the middleman, connecting your products to the customers and influencing how smoothly they get there. Who am I?",
    answer: "Marketing Intermediaries",
    citation: "47"
  },
  {
    type: "true_false",
    question: "A key benefit of a well-managed marketing mix is a decrease in brand awareness.",
    answer: false,
    explanation: "A well-managed marketing mix helps achieve goals like increasing brand awareness and contributes to a strong brand identity and positive reputation.",
    citation: "48, 54"
  },
  {
    type: "fill_in_the_blank",
    question: "A well-designed marketing mix ensures the product is priced appropriately for its perceived _________.",
    answer: "value",
    citation: "49"
  },
  {
    type: "multiple_choice",
    question: "What does a company gain by differentiating its offering and executing compelling promotions?",
    options: [
      "Decreased sales",
      "Competitive disadvantage",
      "Customer dissatisfaction",
      "Competitive advantage"
    ],
    answer: "Competitive advantage",
    citation: "50"
  },
  {
    type: "riddle",
    question: "I am the edge you get over your rivals by being unique and promoting effectively. What am I?",
    answer: "Competitive Advantage",
    citation: "50"
  },
  {
    type: "true_false",
    question: "Optimizing resource allocation involves spending without a clear strategy.",
    answer: false,
    explanation: "Optimizing resource allocation involves allocating marketing budget and resources efficiently across different activities, focusing on what will yield the best results.",
    citation: "52"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix framework aids in making informed decisions about product development, pricing, distribution, and communication _________.",
    answer: "strategies",
    citation: "53"
  },
  {
    type: "multiple_choice",
    question: "How does a consistent and well-executed marketing mix contribute to brand image?",
    options: [
      "By confusing customers",
      "By creating a negative reputation",
      "By fostering a strong brand identity and positive reputation",
      "By decreasing customer loyalty"
    ],
    answer: "By fostering a strong brand identity and positive reputation",
    citation: "54, 55"
  },
  {
    type: "riddle",
    question: "I am the positive feeling and recognition customers have for your brand, built by consistent marketing. What am I?",
    answer: "Strong Brand Identity and Positive Reputation",
    citation: "54, 55"
  },
  {
    type: "true_false",
    question: "The marketing mix does not help in better sales forecasting.",
    answer: false,
    explanation: "The marketing mix helps in better sales forecasting and revenue generation.",
    citation: "56"
  },
  {
    type: "fill_in_the_blank",
    question: "By regularly reviewing and adjusting the marketing mix, businesses can remain agile and responsive to evolving market _________.",
    answer: "conditions",
    citation: "57"
  },
  {
    type: "multiple_choice",
    question: "What is the role of the marketing mix in inter-departmental collaboration?",
    options: [
      "To create departmental silos",
      "To hinder communication",
      "To provide a common language and framework for coordination",
      "To encourage isolated decision-making"
    ],
    answer: "To provide a common language and framework for coordination",
    citation: "58"
  },
  {
    type: "riddle",
    question: "I am the shared language that helps your R&D, production, and sales teams work together towards common goals. What am I?",
    answer: "Clear Communication and Coordination",
    citation: "58"
  },
  {
    type: "true_false",
    question: "The marketing mix is a static tool.",
    answer: false,
    explanation: "The marketing mix is not a static concept but a dynamic tool that must be constantly evaluated and adjusted.",
    citation: "59, 60"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix must be constantly evaluated and adjusted in light of a multitude of internal and external _________.",
    answer: "forces",
    citation: "60"
  },
  {
    type: "multiple_choice",
    question: "Who among the following presented the Entrepreneurship Presentation?",
    options: [
      "Only Garfield Nana Agyekum",
      "A group of members including Ziyaad Labaran and Aida Yussif Zaare",
      "Only Matthew Opare Danso",
      "A single individual named Gabriel Nyantakyi"
    ],
    answer: "A group of members including Ziyaad Labaran and Aida Yussif Zaare",
    citation: "3, 4, 5, 6, 7, 8, 9, 10"
  },
  {
    type: "true_false",
    question: "The presentation specifies that the marketing mix focuses only on product development.",
    answer: false,
    explanation: "The marketing mix refers to the '4 Ps' namely; Product, Price, Place (Distribution), and Promotion.",
    citation: "13"
  },
  {
    type: "fill_in_the_blank",
    question: "One of the benefits of a well-managed marketing mix is achieving Business _________.",
    answer: "Objectives",
    citation: "48"
  },
  {
    type: "multiple_choice",
    question: "Which factor is controllable by the organization?",
    options: [
      "Competition",
      "Technological Advances",
      "Company Policies",
      "Economic Conditions"
    ],
    answer: "Company Policies",
    citation: "15, 18"
  },
  {
    type: "riddle",
    question: "I am a factor you can change within your company, like your internal rules. What kind of factor am I?",
    answer: "Internal Factor (Controllable by the Organization)",
    citation: "15"
  },
  {
    type: "true_false",
    question: "Customer attitudes and behavior are controllable by the organization.",
    answer: false,
    explanation: "Customer attitudes and behavior are external factors (uncontrollable by the organization).",
    citation: "30, 31, 33"
  },
  {
    type: "fill_in_the_blank",
    question: "The marketing mix is referred to as the '4 _________'.",
    answer: "Ps",
    citation: "13"
  },
  {
    type: "multiple_choice",
    question: "What is an example of an external factor that influences pricing strategies during an economic downturn?",
    options: [
      "Company Objectives/Goals",
      "Financial Situation/Resources",
      "Economic Conditions",
      "Organizational Structure"
    ],
    answer: "Economic Conditions",
    citation: "35, 36"
  },
  {
    type: "riddle",
    question: "I am the state of the economy, and when I'm down, companies often reconsider their prices. What am I?",
    answer: "Economic Conditions",
    citation: "35, 36"
  },
  {
    type: "true_false",
    question: "The availability of suppliers is an internal factor affecting the marketing mix.",
    answer: false,
    explanation: "Suppliers and Marketing Intermediaries are external factors.",
    citation: "30, 47"
  },
  {
    type: "fill_in_the_blank",
    question: "A company focused on profit might prioritize premium pricing and product _________.",
    answer: "differentiation",
    citation: "17"
  },
  {
    type: "multiple_choice",
    question: "What helps a company achieve long-term sustainability?",
    options: [
      "Ignoring market changes",
      "A rigid marketing mix",
      "Regularly reviewing and adjusting the marketing mix",
      "Focusing only on internal factors"
    ],
    answer: "Regularly reviewing and adjusting the marketing mix",
    citation: "57"
  },
  {
    type: "riddle",
    question: "I am your secret to staying relevant, constantly evolving your marketing as the world changes. What am I?",
    answer: "Adaptability to Market Changes (by reviewing and adjusting the marketing mix)",
    citation: "57"
  },
  {
    type: "true_false",
    question: "The marketing mix provides a common language for departments to work in isolation.",
    answer: false,
    explanation: "The marketing mix provides a common language and framework for different departments to coordinate their efforts towards shared marketing goals.",
    citation: "58"
  }
];

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const finalResultContainer = document.getElementById('final-result-container');
const finalScoreText = document.getElementById('final-score-text');
const finalFeedbackDetails = document.getElementById('final-feedback-details');
const restartButton = document.getElementById('restart-button');
const feedbackMessage = document.getElementById('feedback-message');

let currentQuestionIndex = 0;
let userAnswers = questions.map(() => ({ selectedAnswer: null, isCorrect: null }));

function loadQuestion() {
    enableOptions();
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('text-green-700', 'text-red-700');

    const question = questions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    if (question.type === "multiple_choice" || question.type === "riddle") {
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button', 'w-full', 'p-3', 'text-left', 'bg-gray-100', 'hover:bg-blue-100', 'rounded-md', 'border', 'border-gray-200', 'transition', 'duration-200', 'ease-in-out', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
            button.dataset.optionValue = option; // Store the option text
            button.addEventListener('click', () => selectOption(option));
            optionsContainer.appendChild(button);
        });
    } else if (question.type === "true_false") {
        const trueButton = document.createElement('button');
        trueButton.textContent = "True";
        trueButton.classList.add('option-button', 'w-full', 'p-3', 'text-left', 'bg-gray-100', 'hover:bg-blue-100', 'rounded-md', 'border', 'border-gray-200', 'transition', 'duration-200', 'ease-in-out', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
        trueButton.dataset.optionValue = "true";
        trueButton.addEventListener('click', () => selectOption(true));
        optionsContainer.appendChild(trueButton);

        const falseButton = document.createElement('button');
        falseButton.textContent = "False";
        falseButton.classList.add('option-button', 'w-full', 'p-3', 'text-left', 'bg-gray-100', 'hover:bg-blue-100', 'rounded-md', 'border', 'border-gray-200', 'transition', 'duration-200', 'ease-in-out', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
        falseButton.dataset.optionValue = "false";
        falseButton.addEventListener('click', () => selectOption(false));
        optionsContainer.appendChild(falseButton);
    } else if (question.type === "fill_in_the_blank") {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Type your answer here...';
        input.id = 'fill-in-blank-input';
        input.classList.add('w-full', 'p-3', 'border', 'border-gray-300', 'rounded-md', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
        optionsContainer.appendChild(input);

        const submitAnswerButton = document.createElement('button');
        submitAnswerButton.textContent = 'Submit Answer';
        submitAnswerButton.classList.add('mt-4', 'bg-blue-600', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-6', 'rounded-lg', 'shadow-md', 'transition', 'duration-300', 'ease-in-out');
        submitAnswerButton.addEventListener('click', () => selectOption(input.value));
        optionsContainer.appendChild(submitAnswerButton);
    }

    if (userAnswers[currentQuestionIndex].selectedAnswer !== null) {
        showAnswerFeedback(userAnswers[currentQuestionIndex].selectedAnswer);
        disableOptions();
    }

    updateNavigationButtons();
}

function selectOption(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex].selectedAnswer = selectedAnswer;

    let isCorrect;
    if (question.type === "fill_in_the_blank") {
        isCorrect = selectedAnswer.trim().toLowerCase() === question.answer.toLowerCase();
    } else {
        isCorrect = selectedAnswer === question.answer;
    }
    userAnswers[currentQuestionIndex].isCorrect = isCorrect;

    disableOptions();
    showAnswerFeedback(selectedAnswer);
}

function disableOptions() {
    document.querySelectorAll('.option-button, #fill-in-blank-input, button:has(#fill-in-blank-input) + button').forEach(element => {
        element.disabled = true;
    });
}

function enableOptions() {
    document.querySelectorAll('.option-button').forEach(button => {
        button.disabled = false;
        button.classList.remove('selected', 'correct', 'incorrect');
    });
    const fillInBlankInput = document.getElementById('fill-in-blank-input');
    if (fillInBlankInput) {
        fillInBlankInput.disabled = false;
    }
    const submitAnswerButton = optionsContainer.querySelector('button[data-submit-fill-in-blank]');
    if (submitAnswerButton) {
        submitAnswerButton.disabled = false;
    }
}

function showAnswerFeedback(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-button');
    const fillInBlankInput = document.getElementById('fill-in-blank-input');

    if (question.type === "multiple_choice" || question.type === "riddle" || question.type === "true_false") {
        buttons.forEach(button => {
            const optionValue = (button.dataset.optionValue === "true" || button.dataset.optionValue === "false") ?
                                (button.dataset.optionValue === "true") : button.dataset.optionValue;

            if (optionValue === question.answer) {
                button.classList.add('correct');
            }

            if (selectedAnswer !== null && optionValue === selectedAnswer) {
                if (optionValue === question.answer) {
                    button.classList.add('correct');
                    feedbackMessage.textContent = "Correct!";
                    feedbackMessage.classList.add('text-green-700');
                    feedbackMessage.classList.remove('text-red-700');
                } else {
                    button.classList.add('incorrect');
                    feedbackMessage.textContent = "Incorrect. The correct answer is highlighted.";
                    feedbackMessage.classList.add('text-red-700');
                    feedbackMessage.classList.remove('text-green-700');
                }
            }
        });
    } else if (question.type === "fill_in_the_blank") {
        if (fillInBlankInput) {
            if (selectedAnswer.trim().toLowerCase() === question.answer.toLowerCase()) {
                fillInBlankInput.classList.add('border-green-500');
                feedbackMessage.textContent = "Correct!";
                feedbackMessage.classList.add('text-green-700');
                feedbackMessage.classList.remove('text-red-700');
            } else {
                fillInBlankInput.classList.add('border-red-500');
                feedbackMessage.textContent = `Incorrect. The correct answer was: "${question.answer}".`;
                feedbackMessage.classList.add('text-red-700');
                feedbackMessage.classList.remove('text-green-700');
            }
        }
    }
}

function updateNavigationButtons() {
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}

function showNextQuestion() {
    if (userAnswers[currentQuestionIndex].selectedAnswer !== null) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            submitQuiz();
        }
    } else {
        feedbackMessage.textContent = "Please select an answer or type your answer.";
        feedbackMessage.classList.add('text-red-700');
    }
}

function submitQuiz() {
    let score = 0;
    finalFeedbackDetails.innerHTML = '';

    questions.forEach((question, index) => {
        const userAnswerData = userAnswers[index];
        let userAnswerText;
        if (question.type === "fill_in_the_blank") {
            userAnswerText = userAnswerData.selectedAnswer !== null ? userAnswerData.selectedAnswer : "No answer selected";
        } else if (userAnswerData.selectedAnswer === true) {
             userAnswerText = "True";
        } else if (userAnswerData.selectedAnswer === false) {
            userAnswerText = "False";
        }
        else {
            userAnswerText = userAnswerData.selectedAnswer !== null ? userAnswerData.selectedAnswer : "No answer selected";
        }

        const correctAnswerText = question.answer;
        const isCorrect = userAnswerData.isCorrect;

        if (isCorrect) {
            score++;
        }

        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('p-4', 'rounded-lg', isCorrect ? 'bg-green-100' : 'bg-red-100', 'border', isCorrect ? 'border-green-300' : 'border-red-300');
        feedbackItem.innerHTML = `
            <p class="font-semibold text-gray-800">${index + 1}. ${question.question}</p>
            <p class="${isCorrect ? 'text-green-700' : 'text-red-700'} mt-1">Your Answer: ${userAnswerText} ${isCorrect ? ' (Correct)' : ' (Incorrect)'}</p>
            <p class="text-blue-700">Correct Answer: ${correctAnswerText}</p>
        `;
        finalFeedbackDetails.appendChild(feedbackItem);
    });

    finalScoreText.textContent = `You scored ${score} out of ${questions.length}!`;
    finalResultContainer.classList.remove('hidden');
    document.getElementById('question-display').classList.add('hidden');
    nextButton.classList.add('hidden');
    submitButton.classList.add('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = questions.map(() => ({ selectedAnswer: null, isCorrect: null }));
    finalResultContainer.classList.add('hidden');
    document.getElementById('question-display').classList.remove('hidden');
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('text-green-700', 'text-red-700');
    loadQuestion();
}

// Event Listeners
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', submitQuiz);
restartButton.addEventListener('click', restartQuiz);

// Initial load
loadQuestion();