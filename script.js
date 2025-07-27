    // Array of 100 multiple-choice questions based on the provided document.
    // Each question object contains:
    // - question: The text of the question.
    // - options: An array of strings representing the choices.
    // - correctAnswer: The 0-based index of the correct answer in the options array.
    const questions = [
        {
            question: "What are the '4 Ps' commonly referred to in the marketing mix?",
            options: ["Product, Price, People, Process", "Product, Price, Place, Promotion", "Planning, Pricing, Placement, Promotion", "Purpose, Price, Place, People"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is considered a controllable tactical marketing tool?",
            options: ["Economic Conditions", "Competition", "Marketing Mix", "Customer Attitudes"],
            correctAnswer: 2
        },
        {
            question: "What does 'Product' in the marketing mix refer to?",
            options: ["The cost of the item", "How the item is advertised", "The goods or services offered to the target market", "Where the item is sold"],
            correctAnswer: 2
        },
        {
            question: "Which 'P' involves decisions about distribution channels and market coverage?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 2
        },
        {
            question: "Setting the right value for a product or service is part of which 'P'?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 1
        },
        {
            question: "Activities like advertising, public relations, and sales promotions fall under which 'P'?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 3
        },
        {
            question: "Which of these is an internal factor affecting the marketing mix?",
            options: ["Technological Advances", "Company Objectives/Goals", "Customer Attitudes", "Political and Legal Forces"],
            correctAnswer: 1
        },
        {
            question: "A company aiming for market leadership might focus on aggressive promotion and competitive pricing. This is influenced by which internal factor?",
            options: ["Financial Situation", "Company Policies", "Company Objectives/Goals", "Human Resources"],
            correctAnswer: 2
        },
        {
            question: "Internal rules and guidelines that impact marketing decisions are categorized under which internal factor?",
            options: ["Organizational Structure", "Company Culture", "Company Policies", "Production Capacity"],
            correctAnswer: 2
        },
        {
            question: "The budget available for marketing activities heavily influences the scope and scale of product development. This refers to which internal factor?",
            options: ["Financial Situation/Resources", "Human Resources/Capabilities", "Company Objectives/Goals", "Company Policies"],
            correctAnswer: 0
        },
        {
            question: "The skills, experience, and availability of marketing staff directly impact the execution of marketing strategies. This relates to which internal factor?",
            options: ["Production Capacity", "Human Resources/Capabilities", "Organizational Structure", "Company Culture"],
            correctAnswer: 1
        },
        {
            question: "How a company is organized can affect communication and decision-making regarding the marketing mix. This describes which internal factor?",
            options: ["Company Policies", "Organizational Structure", "Financial Situation", "Company Objectives"],
            correctAnswer: 1
        },
        {
            question: "The ability to produce products and the efficiency of production processes influence product features and quality. This is an aspect of which internal factor?",
            options: ["Company Culture", "Production Capacity and Technology", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "The values and norms of the organization that impact how marketing is approached are part of which internal factor?",
            options: ["Company Objectives", "Organizational Structure", "Company Culture", "Financial Resources"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is an external factor affecting the marketing mix?",
            options: ["Company Policies", "Financial Situation", "Competition", "Organizational Structure"],
            correctAnswer: 2
        },
        {
            question: "Individual feelings, opinions, purchasing habits, and needs of the target market are paramount. This describes which external factor?",
            options: ["Economic Conditions", "Customer Attitudes and Behavior", "Social and Cultural Factors", "Technological Advances"],
            correctAnswer: 1
        },
        {
            question: "Inflation, interest rates, and disposable income are examples of which external factor?",
            options: ["Political and Legal Forces", "Natural/Environmental Forces", "Economic Conditions", "Competition"],
            correctAnswer: 2
        },
        {
            question: "New product innovations, more efficient production methods, and new distribution channels like e-commerce are results of which external factor?",
            options: ["Social and Cultural Factors", "Technological Advances", "Suppliers and Marketing Intermediaries", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Government regulations, laws, and political stability fall under which external factor?",
            options: ["Economic Conditions", "Natural/Environmental Forces", "Political and Legal Forces", "Competition"],
            correctAnswer: 2
        },
        {
            question: "Climate change, natural disasters, and resource availability are examples of which external factor?",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 2
        },
        {
            question: "The actions of competitors (pricing strategies, new product launches) heavily influence a company's marketing mix. This describes which external factor?",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Demographics, lifestyle trends, cultural norms, and societal attitudes are part of which external factor?",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The availability, cost, and reliability of raw materials and distributors affect product quality and production costs. This relates to which external factor?",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is a benefit of a well-managed marketing mix?",
            options: ["Increased production costs", "Achieving Business Objectives", "Reduced customer satisfaction", "Limited market reach"],
            correctAnswer: 1
        },
        {
            question: "Ensuring that the product or service effectively meets customer needs and preferences is a benefit related to which aspect of the marketing mix?",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Meeting Customer Needs", "Improved Decision-Making"],
            correctAnswer: 2
        },
        {
            question: "By differentiating its offering and optimizing pricing, a company can stand out from competitors. This describes which benefit?",
            options: ["Achieving Business Objectives", "Gaining Competitive Advantage", "Better Sales Forecasting", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "A clear marketing mix strategy helps businesses allocate their marketing budget and resources efficiently. This benefit is known as:",
            options: ["Improved Decision-Making", "Enhanced Brand Image", "Optimizing Resource Allocation", "Adaptability to Market Changes"],
            correctAnswer: 2
        },
        {
            question: "The framework of the marketing mix provides a structured approach for making informed decisions. This is a benefit called:",
            options: ["Better Sales Forecasting", "Improved Decision-Making", "Meeting Customer Needs", "Gaining Competitive Advantage"],
            correctAnswer: 1
        },
        {
            question: "A consistent and well-executed marketing mix contributes to a strong brand identity and positive reputation. This benefit is:",
            options: ["Optimizing Resource Allocation", "Enhanced Brand Image and Reputation", "Clear Communication", "Achieving Business Objectives"],
            correctAnswer: 1
        },
        {
            question: "Understanding how different elements of the marketing mix interact to make more accurate sales forecasts relates to which benefit?",
            options: ["Adaptability to Market Changes", "Better Sales Forecasting and Revenue Generation", "Meeting Customer Needs", "Improved Decision-Making"],
            correctAnswer: 1
        },
        {
            question: "Regularly reviewing and adjusting the marketing mix in response to internal and external factors ensures long-term sustainability. This describes which benefit?",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Enhanced Brand Image"],
            correctAnswer: 2
        },
        {
            question: "The marketing mix provides a common language and framework for different departments to coordinate their efforts. This benefit is:",
            options: ["Improved Decision-Making", "Clear Communication and Coordination", "Achieving Business Objectives", "Meeting Customer Needs"],
            correctAnswer: 1
        },
        {
            question: "Which of the 4 Ps deals with the channels used to make the product available to customers?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 2
        },
        {
            question: "When a company decides on its return policies or credit offerings, it is influenced by which internal factor?",
            options: ["Company Objectives", "Financial Situation", "Company Policies", "Human Resources"],
            correctAnswer: 2
        },
        {
            question: "Limited resources might lead to a more targeted and cost-effective marketing mix. This highlights the importance of which internal factor?",
            options: ["Production Capacity", "Organizational Structure", "Financial Situation/Resources", "Company Culture"],
            correctAnswer: 2
        },
        {
            question: "A strong sales team can enhance promotion and distribution. This is an example of the impact of which internal factor?",
            options: ["Company Policies", "Human Resources/Capabilities", "Company Objectives", "Production Capacity"],
            correctAnswer: 1
        },
        {
            question: "A flat organizational structure might allow for quicker adaptation of the marketing mix. This points to the role of which internal factor?",
            options: ["Company Culture", "Organizational Structure", "Financial Situation", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "The efficiency of production processes directly affects product quality. This is a consideration under which internal factor?",
            options: ["Company Objectives", "Production Capacity and Technology", "Company Policies", "Financial Resources"],
            correctAnswer: 1
        },
        {
            question: "A customer-centric culture will naturally prioritize customer needs in the marketing mix. This is an example of the influence of which internal factor?",
            options: ["Organizational Structure", "Company Culture", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "Changes in consumer tastes, trends, and buying power directly influence product design and pricing strategies. This is an impact of which external factor?",
            options: ["Technological Advances", "Economic Conditions", "Customer Attitudes and Behavior", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "During an economic downturn, companies may lower prices or offer more value-oriented products. This is a response to which external factor?",
            options: ["Competition", "Natural/Environmental Forces", "Economic Conditions", "Social and Cultural Factors"],
            correctAnswer: 2
        },
        {
            question: "New technologies leading to AI-driven personalization in promotion is an example of the impact of which external factor?",
            options: ["Suppliers and Marketing Intermediaries", "Technological Advances", "Customer Attitudes", "Political and Legal Forces"],
            correctAnswer: 1
        },
        {
            question: "Product labeling requirements and advertising standards are direct influences of which external factor?",
            options: ["Economic Conditions", "Political and Legal Forces", "Natural/Environmental Forces", "Competition"],
            correctAnswer: 1
        },
        {
            question: "Environmental concerns leading to consumer preferences for eco-friendly products influence product design due to which external factor?",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Customer Attitudes"],
            correctAnswer: 2
        },
        {
            question: "Analyzing competitors to gain a competitive advantage and adjust strategies accordingly is crucial due to which external factor?",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 1
        },
        {
            question: "A growing health-conscious trend leading to new product offerings is an example of the influence of which external factor?",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The reliability of wholesalers and retailers directly affects distribution efficiency. This is influenced by which external factor?",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Which benefit ensures that the product is readily available where and when customers want it?",
            options: ["Achieving Business Objectives", "Meeting Customer Needs", "Gaining Competitive Advantage", "Optimizing Resource Allocation"],
            correctAnswer: 1
        },
        {
            question: "By establishing efficient distribution, a company can stand out. This contributes to which benefit?",
            options: ["Improved Decision-Making", "Enhanced Brand Image", "Gaining Competitive Advantage", "Better Sales Forecasting"],
            correctAnswer: 2
        },
        {
            question: "Focusing resources on what will yield the best results is a direct outcome of which benefit?",
            options: ["Meeting Customer Needs", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "Making informed decisions about product development, pricing, and distribution is a result of which benefit?",
            options: ["Achieving Business Objectives", "Improved Decision-Making", "Gaining Competitive Advantage", "Enhanced Brand Image"],
            correctAnswer: 1
        },
        {
            question: "Building trust and loyalty among customers is a result of which benefit?",
            options: ["Optimizing Resource Allocation", "Enhanced Brand Image and Reputation", "Better Sales Forecasting", "Adaptability to Market Changes"],
            correctAnswer: 1
        },
        {
            question: "Maximizing revenue through understanding how marketing mix elements interact is part of which benefit?",
            options: ["Meeting Customer Needs", "Better Sales Forecasting and Revenue Generation", "Improved Decision-Making", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "Remaining agile and responsive to evolving market conditions is a key aspect of which benefit?",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Enhanced Brand Image"],
            correctAnswer: 2
        },
        {
            question: "Coordinating efforts towards shared marketing goals across different departments is enabled by which benefit?",
            options: ["Improved Decision-Making", "Clear Communication and Coordination", "Achieving Business Objectives", "Meeting Customer Needs"],
            correctAnswer: 1
        },
        {
            question: "The marketing mix is described as a 'dynamic tool' that must be constantly evaluated and adjusted. Why?",
            options: ["To reduce competition", "To increase production costs", "To ensure a company's continued success", "To limit customer feedback"],
            correctAnswer: 2
        },
        {
            question: "Which of the following describes the 'Promotion' aspect of the marketing mix?",
            options: ["The physical location of sales", "Activities that communicate the value of the product to the target market", "The cost of manufacturing a product", "The design and features of the product"],
            correctAnswer: 1
        },
        {
            question: "When a company decides to offer credit to customers, this decision is influenced by which internal factor?",
            options: ["Production Capacity", "Company Policies", "Organizational Structure", "Company Culture"],
            correctAnswer: 1
        },
        {
            question: "A company's aim to achieve profit maximization is an example of which internal factor influencing its marketing mix?",
            options: ["Financial Situation", "Company Objectives/Goals", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "If a company has a limited budget for marketing, it might choose more cost-effective promotional strategies. This is due to which internal factor?",
            options: ["Human Resources/Capabilities", "Financial Situation/Resources", "Production Capacity and Technology", "Company Culture"],
            correctAnswer: 1
        },
        {
            question: "The availability of skilled product development teams impacts the innovation of new products. This is related to which internal factor?",
            options: ["Company Policies", "Organizational Structure", "Human Resources/Capabilities", "Company Objectives"],
            correctAnswer: 2
        },
        {
            question: "A hierarchical organizational structure might lead to slower but more consistent marketing decisions. This is an impact of which internal factor?",
            options: ["Company Culture", "Organizational Structure", "Financial Situation", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "The technology available for production can influence the cost of goods, thereby affecting pricing. This is an aspect of which internal factor?",
            options: ["Company Objectives", "Production Capacity and Technology", "Company Policies", "Financial Resources"],
            correctAnswer: 1
        },
        {
            question: "If an organization values ethical standards highly, it will reflect in its promotional messages. This is due to which internal factor?",
            options: ["Organizational Structure", "Company Culture", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "Consumer buying power directly influences pricing strategies. This is an aspect of which external factor?",
            options: ["Technological Advances", "Economic Conditions", "Customer Attitudes and Behavior", "Political and Legal Forces"],
            correctAnswer: 1
        },
        {
            question: "The rise of e-commerce as a distribution channel is primarily driven by which external factor?",
            options: ["Social and Cultural Factors", "Technological Advances", "Suppliers and Marketing Intermediaries", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Health and safety regulations for products are part of which external factor?",
            options: ["Economic Conditions", "Political and Legal Forces", "Natural/Environmental Forces", "Competition"],
            correctAnswer: 1
        },
        {
            question: "Impacts on supply chains due to natural disasters are an example of which external factor?",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 2
        },
        {
            question: "New product launches by rival companies necessitate adjustments in a company's own marketing mix due to which external factor?",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Changing lifestyle trends, such as a preference for sustainable products, fall under which external factor?",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The cost and availability of raw materials from suppliers directly affect production costs and product quality. This is due to which external factor?",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is NOT one of the 4 Ps of the marketing mix?",
            options: ["Product", "People", "Place", "Promotion"],
            correctAnswer: 1
        },
        {
            question: "What is the primary purpose of the marketing mix?",
            options: ["To reduce employee turnover", "To increase production efficiency", "To produce the response a company wants in the target market", "To minimize advertising costs"],
            correctAnswer: 2
        },
        {
            question: "When a company decides on its pricing strategy, what is it directly influencing?",
            options: ["Product features", "Distribution channels", "The value customers perceive", "Promotional messages"],
            correctAnswer: 2
        },
        {
            question: "The 'Place' aspect of the marketing mix is also known as:",
            options: ["Pricing strategy", "Product development", "Distribution", "Public relations"],
            correctAnswer: 2
        },
        {
            question: "If a company wants to achieve brand awareness, this goal is an example of which internal factor?",
            options: ["Company Policies", "Financial Situation", "Company Objectives/Goals", "Human Resources"],
            correctAnswer: 2
        },
        {
            question: "Employee benefits policies can indirectly influence the marketing mix by affecting employee morale and service quality. This is an example of:",
            options: ["Organizational Structure", "Company Policies", "Company Culture", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "A company's ability to invest in new product development is constrained by its:",
            options: ["Human Resources/Capabilities", "Financial Situation/Resources", "Production Capacity and Technology", "Company Culture"],
            correctAnswer: 1
        },
        {
            question: "The availability of a skilled product development team can lead to innovative products. This is a factor of:",
            options: ["Company Policies", "Organizational Structure", "Human Resources/Capabilities", "Company Objectives"],
            correctAnswer: 2
        },
        {
            question: "A company's internal communication effectiveness regarding marketing plans is influenced by its:",
            options: ["Company Culture", "Organizational Structure", "Financial Situation", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "The efficiency of production processes impacts the cost of goods, which in turn affects the 'Price' component. This is under which internal factor?",
            options: ["Company Objectives", "Production Capacity and Technology", "Company Policies", "Financial Resources"],
            correctAnswer: 1
        },
        {
            question: "If a company has a strong customer-centric approach embedded in its values, it will prioritize customer needs in its product design. This reflects its:",
            options: ["Organizational Structure", "Company Culture", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "Consumer purchasing habits directly influence decisions about product design and promotional messaging. This is an impact of:",
            options: ["Technological Advances", "Economic Conditions", "Customer Attitudes and Behavior", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Recessionary periods can lead to consumers having less spending power, affecting pricing strategies. This is an example of:",
            options: ["Competition", "Natural/Environmental Forces", "Economic Conditions", "Social and Cultural Factors"],
            correctAnswer: 2
        },
        {
            question: "New ways to promote products, such as social media marketing, are enabled by:",
            options: ["Suppliers and Marketing Intermediaries", "Technological Advances", "Customer Attitudes", "Political and Legal Forces"],
            correctAnswer: 1
        },
        {
            question: "Consumer protection laws are a direct influence on the marketing mix from which external factor?",
            options: ["Economic Conditions", "Political and Legal Forces", "Natural/Environmental Forces", "Competition"],
            correctAnswer: 1
        },
        {
            question: "Resource availability impacting supply chains is a concern under which external factor?",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 2
        },
        {
            question: "A competitor's aggressive promotional campaign would force a company to adjust its own 'Promotion' strategy due to which external factor?",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Societal attitudes towards certain products can influence product development and marketing. This is part of:",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The efficiency of marketing intermediaries (like distributors) affects how products reach consumers. This is influenced by:",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "A well-designed marketing mix ensures the product is priced appropriately for its perceived value. This contributes to which benefit?",
            options: ["Achieving Business Objectives", "Meeting Customer Needs", "Gaining Competitive Advantage", "Optimizing Resource Allocation"],
            correctAnswer: 1
        },
        {
            question: "Optimizing pricing to attract more customers is a way to achieve which benefit?",
            options: ["Improved Decision-Making", "Enhanced Brand Image", "Gaining Competitive Advantage", "Better Sales Forecasting"],
            correctAnswer: 2
        },
        {
            question: "Efficient allocation of personnel across different marketing activities falls under which benefit?",
            options: ["Meeting Customer Needs", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "Making informed decisions about communication strategies is a key aspect of which benefit?",
            options: ["Achieving Business Objectives", "Improved Decision-Making", "Gaining Competitive Advantage", "Enhanced Brand Image"],
            correctAnswer: 1
        },
        {
            question: "A positive reputation in the market builds trust and loyalty. This is a result of which benefit?",
            options: ["Optimizing Resource Allocation", "Enhanced Brand Image and Reputation", "Better Sales Forecasting", "Adaptability to Market Changes"],
            correctAnswer: 1
        },
        {
            question: "Developing strategies to maximize revenue is a direct outcome of which benefit?",
            options: ["Meeting Customer Needs", "Better Sales Forecasting and Revenue Generation", "Improved Decision-Making", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "Ensuring long-term sustainability by responding to evolving market conditions is a benefit known as:",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Enhanced Brand Image"],
            correctAnswer: 2
        },
        {
            question: "Providing a common language for different departments to coordinate efforts towards shared marketing goals is a benefit of:",
            options: ["Improved Decision-Making", "Clear Communication and Coordination", "Achieving Business Objectives", "Meeting Customer Needs"],
            correctAnswer: 1
        },
        {
            question: "The marketing mix is a fundamental concept in marketing, often referred to as the 'controllable tactical marketing tools'. True or False?",
            options: ["True", "False"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is NOT a controllable factor for a company?",
            options: ["Company Objectives", "Financial Situation", "Competition", "Human Resources"],
            correctAnswer: 2
        },
        {
            question: "A company's decision to prioritize premium pricing and product differentiation is most likely driven by its focus on:",
            options: ["Market leadership", "Profit maximization", "Brand awareness", "Survival"],
            correctAnswer: 1
        },
        {
            question: "Return policies and credit offerings are examples of internal factors under:",
            options: ["Company Culture", "Company Policies", "Organizational Structure", "Financial Situation"],
            correctAnswer: 1
        },
        {
            question: "The scope and scale of promotional campaigns are heavily influenced by the company's:",
            options: ["Human Resources", "Production Capacity", "Financial Situation/Resources", "Company Objectives"],
            correctAnswer: 2
        },
        {
            question: "The availability of skilled sales teams directly impacts the 'Promotion' and 'Place' aspects of the marketing mix. This is due to:",
            options: ["Company Policies", "Human Resources/Capabilities", "Company Culture", "Organizational Structure"],
            correctAnswer: 1
        },
        {
            question: "A flat organizational structure might lead to faster decision-making regarding the marketing mix. This is a characteristic of:",
            options: ["Company Culture", "Organizational Structure", "Financial Situation", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "The efficiency of production processes affects the product's quality and cost. This is managed by:",
            options: ["Company Objectives", "Production Capacity and Technology", "Company Policies", "Financial Resources"],
            correctAnswer: 1
        },
        {
            question: "A company's values influencing its approach to customer service is an example of the impact of:",
            options: ["Organizational Structure", "Company Culture", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "Changes in consumer preferences for online shopping versus brick-and-mortar stores influence which 'P' of the marketing mix, due to external factors?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 2
        },
        {
            question: "Unemployment rates and their impact on consumer spending are part of which external factor?",
            options: ["Political and Legal Forces", "Natural/Environmental Forces", "Economic Conditions", "Competition"],
            correctAnswer: 2
        },
        {
            question: "The development of AI-driven personalization in marketing is a direct outcome of:",
            options: ["Social and Cultural Factors", "Technological Advances", "Suppliers and Marketing Intermediaries", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Trade policies and their impact on international distribution are part of which external factor?",
            options: ["Economic Conditions", "Political and Legal Forces", "Natural/Environmental Forces", "Competition"],
            correctAnswer: 1
        },
        {
            question: "Scarcity of raw materials due to environmental concerns can impact production costs and product availability. This is due to:",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 2
        },
        {
            question: "A competitor's pricing strategy directly influences a company's own 'Price' decisions due to:",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Customer Attitudes"],
            correctAnswer: 1
        },
        {
            question: "Demographic shifts, such as an aging population, can influence product offerings and promotional messages due to:",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The reliability of suppliers directly affects product quality. This is an external factor under:",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Achieving goals like increasing sales and market share is a direct benefit of:",
            options: ["Optimizing Resource Allocation", "Achieving Business Objectives", "Improved Decision-Making", "Enhanced Brand Image"],
            correctAnswer: 1
        },
        {
            question: "Ensuring the product is promoted in a way that resonates with customers contributes to which benefit?",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Meeting Customer Needs", "Improved Decision-Making"],
            correctAnswer: 2
        },
        {
            question: "Differentiating its offering from competitors is a key aspect of which benefit?",
            options: ["Achieving Business Objectives", "Gaining Competitive Advantage", "Better Sales Forecasting", "Clear Communication"],
            correctAnswer: 1
        },
        {
            question: "Efficiently allocating the marketing budget across different activities is a benefit known as:",
            options: ["Improved Decision-Making", "Enhanced Brand Image", "Optimizing Resource Allocation", "Adaptability to Market Changes"],
            correctAnswer: 2
        },
        {
            question: "Making informed decisions about product development is a result of the framework provided by:",
            options: ["Better Sales Forecasting", "Improved Decision-Making", "Meeting Customer Needs", "Gaining Competitive Advantage"],
            correctAnswer: 1
        },
        {
            question: "A consistent and well-executed marketing mix contributes to a strong brand identity. This is part of:",
            options: ["Optimizing Resource Allocation", "Enhanced Brand Image and Reputation", "Clear Communication", "Achieving Business Objectives"],
            correctAnswer: 1
        },
        {
            question: "More accurate sales forecasts are enabled by understanding the interaction of marketing mix elements. This is a benefit related to:",
            options: ["Adaptability to Market Changes", "Better Sales Forecasting and Revenue Generation", "Meeting Customer Needs", "Improved Decision-Making"],
            correctAnswer: 1
        },
        {
            question: "Remaining responsive to evolving market conditions ensures long-term sustainability. This is a benefit of:",
            options: ["Gaining Competitive Advantage", "Optimizing Resource Allocation", "Adaptability to Market Changes", "Enhanced Brand Image"],
            correctAnswer: 2
        },
        {
            question: "Providing a common language for different departments to coordinate efforts towards shared marketing goals is a benefit of:",
            options: ["Improved Decision-Making", "Clear Communication and Coordination", "Achieving Business Objectives", "Meeting Customer Needs"],
            correctAnswer: 1
        },
        {
            question: "The marketing mix is a dynamic tool that needs constant evaluation and adjustment due to:",
            options: ["Only internal factors", "Only external factors", "A multitude of internal and external forces", "Customer feedback alone"],
            correctAnswer: 2
        },
        {
            question: "Which of the 4 Ps focuses on how the product is communicated to the target audience?",
            options: ["Product", "Price", "Place", "Promotion"],
            correctAnswer: 3
        },
        {
            question: "When a company decides on its customer service policies, it is influencing its marketing mix through which internal factor?",
            options: ["Company Objectives", "Financial Situation", "Company Policies", "Human Resources"],
            correctAnswer: 2
        },
        {
            question: "The availability of funds for research and development impacts product innovation. This is influenced by:",
            options: ["Production Capacity", "Organizational Structure", "Financial Situation/Resources", "Company Culture"],
            correctAnswer: 2
        },
        {
            question: "A skilled marketing team can create compelling promotional messages. This is an example of the impact of:",
            options: ["Company Policies", "Human Resources/Capabilities", "Company Objectives", "Production Capacity"],
            correctAnswer: 1
        },
        {
            question: "A centralized decision-making structure might affect the speed of marketing mix adjustments. This is due to:",
            options: ["Company Culture", "Organizational Structure", "Financial Situation", "Human Resources"],
            correctAnswer: 1
        },
        {
            question: "The efficiency of technology used in production can influence the product's features and quality. This is an aspect of:",
            options: ["Company Objectives", "Production Capacity and Technology", "Company Policies", "Financial Resources"],
            correctAnswer: 1
        },
        {
            question: "If an organization has a culture that encourages innovation, it will likely lead to more unique product offerings. This is due to:",
            options: ["Organizational Structure", "Company Culture", "Human Resources", "Company Policies"],
            correctAnswer: 1
        },
        {
            question: "Changes in consumer needs directly influence product design and promotional messaging. This is an impact of:",
            options: ["Technological Advances", "Economic Conditions", "Customer Attitudes and Behavior", "Political and Legal Forces"],
            correctAnswer: 2
        },
        {
            question: "Interest rates affecting borrowing costs for businesses can impact pricing strategies. This is an example of:",
            options: ["Competition", "Natural/Environmental Forces", "Economic Conditions", "Social and Cultural Factors"],
            correctAnswer: 2
        },
        {
            question: "The emergence of new digital marketing tools is a direct result of:",
            options: ["Suppliers and Marketing Intermediaries", "Technological Advances", "Customer Attitudes", "Political and Legal Forces"],
            correctAnswer: 1
        },
        {
            question: "Advertising standards and regulations are part of which external factor?",
            options: ["Economic Conditions", "Political and Legal Forces", "Natural/Environmental Forces", "Competition"],
            correctAnswer: 1
        },
        {
            question: "Environmental concerns impacting consumer preferences for sustainable products affect product design due to:",
            options: ["Technological Advances", "Social and Cultural Factors", "Natural/Environmental Forces", "Customer Attitudes"],
            correctAnswer: 2
        },
        {
            question: "Competitors' distribution networks can influence a company's own 'Place' decisions due to:",
            options: ["Economic Conditions", "Competition", "Political and Legal Forces", "Suppliers and Marketing Intermediaries"],
            correctAnswer: 1
        },
        {
            question: "Cultural norms and values influencing product acceptance in a market fall under:",
            options: ["Technological Advances", "Natural/Environmental Forces", "Social and Cultural Factors", "Economic Conditions"],
            correctAnswer: 2
        },
        {
            question: "The availability and cost of transportation for distribution are influenced by:",
            options: ["Customer Attitudes", "Competition", "Suppliers and Marketing Intermediaries", "Political and Legal Forces"],
            correctAnswer: 2
        }
    ];

    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    // Removed timeLeft and timerInterval variables
    let userAnswers = new Array(questions.length).fill(null); // To store user's selected answer index for each question

    // DOM elements
    const startScreen = document.getElementById('start-screen');
    const quizArea = document.getElementById('quiz-area');
    const resultArea = document.getElementById('result-area');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionNumberSpan = document.getElementById('current-question-number');
    const totalQuestionsSpan = document.getElementById('total-questions');
    // Removed timeLeftSpan
    const previousBtn = document.getElementById('previous-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const finalScoreSpan = document.getElementById('final-score');
    const totalQuestionsResultSpan = document.getElementById('total-questions-result');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const messageBox = document.getElementById('message-box');

    // Initialize total questions display
    totalQuestionsSpan.textContent = questions.length;
    totalQuestionsResultSpan.textContent = questions.length;

    /**
      * Starts the quiz by hiding the start screen and showing the quiz area.
      * Initializes quiz state and displays the first question.
      */
    function startQuiz() {
        startScreen.style.display = 'none';
        quizArea.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        // Removed timer reset
        userAnswers.fill(null); // Reset user answers
        displayQuestion();
        // Removed startTimer() call
        updateNavigationButtons();
        submitQuizBtn.style.display = 'none'; // Hide submit button initially
        hideMessageBox(); // Hide any previous messages
    }

    /**
      * Displays the current question and its options.
      * Clears previous options and creates new buttons for the current question's options.
      * Highlights the previously selected answer if available.
      */
    function displayQuestion() {
        hideMessageBox(); // Hide message box when new question is displayed
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = ''; // Clear previous options

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            // Add a data attribute to store the index of the option
            button.dataset.optionIndex = index;
            button.onclick = () => selectAnswer(index);

            // If this question was previously answered, highlight the selected option
            if (userAnswers[currentQuestionIndex] === index) {
                button.classList.add('selected');
            }
            optionsContainer.appendChild(button);
        });

        currentQuestionNumberSpan.textContent = currentQuestionIndex + 1;
        updateNavigationButtons();
    }

    /**
      * Handles the selection of an answer.
      * Visually highlights the selected option and stores it in userAnswers.
      * Provides immediate feedback (correct/incorrect).
      * @param {number} selectedOptionIndex - The index of the option selected by the user.
      */
    function selectAnswer(selectedOptionIndex) {
        // Remove 'selected' class and correct/incorrect feedback from all options first
        Array.from(optionsContainer.children).forEach(button => {
            button.classList.remove('selected', 'correct', 'incorrect');
            button.disabled = false; // Re-enable all buttons before processing selection
        });

        const currentQuestion = questions[currentQuestionIndex];
        const selectedButton = optionsContainer.querySelector(`[data-option-index="${selectedOptionIndex}"]`);

        if (selectedButton) {
            selectedButton.classList.add('selected'); // Highlight the selected button

            // Check if the selected answer is correct
            if (selectedOptionIndex === currentQuestion.correctAnswer) {
                selectedButton.classList.add('correct');
                showMessageBox('Correct Answer!', 'bg-green-100 text-green-800');
            } else {
                selectedButton.classList.add('incorrect');
                showMessageBox('Wrong Answer. Try again on the next quiz!', 'bg-red-100 text-red-800');
                // Optionally, highlight the correct answer after a wrong selection
                const correctButton = optionsContainer.querySelector(`[data-option-index="${currentQuestion.correctAnswer}"]`);
                if (correctButton) {
                    correctButton.classList.add('correct');
                }
            }

            // Disable all options after an answer is chosen for immediate feedback
            Array.from(optionsContainer.children).forEach(button => {
                button.disabled = true;
            });
        }

        // Store the user's answer
        userAnswers[currentQuestionIndex] = selectedOptionIndex;
    }

    /**
      * Updates the state of the Previous, Next, and Submit buttons.
      * Disables/enables buttons based on current question index.
      * Shows the Submit button on the last question.
      */
    function updateNavigationButtons() {
        previousBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;

        if (currentQuestionIndex === questions.length - 1) {
            submitQuizBtn.style.display = 'block';
            nextBtn.style.display = 'none'; // Hide next button on last question
        } else {
            submitQuizBtn.style.display = 'none';
            nextBtn.style.display = 'block'; // Show next button on other questions
        }
    }

    /**
      * Navigates to the previous question.
      * If an answer was selected, it will be highlighted upon returning.
      */
    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    }

    /**
      * Navigates to the next question.
      * If an answer was selected, it will be highlighted upon returning.
      */
    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    }

    /**
      * Submits the quiz, calculates the score, and displays the results.
      * Stops the timer and shows correct/incorrect answers for review.
      */
    function submitQuiz() {
        // Removed clearInterval(timerInterval);

        score = 0;
        // Iterate through all questions to check answers
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] !== null && userAnswers[i] === questions[i].correctAnswer) {
                score++;
            }
        }

        // Hide quiz area and show result area
        quizArea.style.display = 'none';
        resultArea.style.display = 'block';
        finalScoreSpan.textContent = score;
    }

    /**
      * Displays a message to the user in the message box.
      * @param {string} message - The message text.
      * @param {string} classes - Tailwind CSS classes for styling the message box (e.g., 'bg-green-100 text-green-800').
      */
    function showMessageBox(message, classes) {
        messageBox.textContent = message;
        messageBox.className = `mt-4 p-3 rounded-lg text-center font-medium ${classes}`;
        messageBox.style.display = 'block';
    }

    /**
      * Hides the message box.
      */
    function hideMessageBox() {
        messageBox.style.display = 'none';
    }

    // Event Listeners
    startQuizBtn.addEventListener('click', startQuiz);
    previousBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitQuizBtn.addEventListener('click', submitQuiz);
    restartQuizBtn.addEventListener('click', startQuiz); // Restart quiz from result screen

    // Initial setup on page load
    window.onload = function() {
        // Ensure only the start screen is visible initially
        startScreen.style.display = 'block';
        quizArea.style.display = 'none';
        resultArea.style.display = 'none';
    };
