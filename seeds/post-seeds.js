const { Post } = require('../models');

const postData = [
    {
        title: "Breakthrough in Natural Language Processing: AI Translations Reach Human-Level Accuracy",
        post_content: "Researchers have achieved a major breakthrough in the field of natural language processing (NLP) by developing an AI system that can accurately translate between languages at a level comparable to human translators. By leveraging advanced neural networks and massive datasets, the system has overcome many of the challenges associated with language translation, including idiomatic expressions, cultural nuances, and context-based understanding. This advancement has far-reaching implications for global communication and cross-cultural understanding.",
        user_id: 5
    },
    {
        title: "Revolutionizing Transportation: Autonomous Flying Taxis Take Flight",
        post_content: "A leading transportation company has successfully conducted test flights of its autonomous flying taxis, bringing us one step closer to a future of airborne urban mobility. These electric vertical takeoff and landing (eVTOL) vehicles offer a safe, efficient, and environmentally friendly mode of transportation that can bypass traffic congestion on the ground. With advanced autopilot systems, robust safety features, and smart navigation capabilities, these flying taxis are set to transform the way people travel within cities.",
        user_id: 4
    },

    {
        title: "Quantum Computing Breakthrough: Major Advancements in Quantum Algorithm Development",
        post_content: "Researchers at a leading tech company have made significant progress in the development of quantum algorithms, paving the way for faster and more efficient quantum computations. By leveraging innovative techniques and novel mathematical approaches, they have achieved a significant reduction in the complexity of quantum algorithms, making them more practical and accessible for a wide range of applications. This breakthrough brings us one step closer to realizing the full potential of quantum computing.",
        user_id: 2

    },
    {
        title: "Next-Generation Robotics: Advanced Humanoid Robot Unveiled",
        post_content: "A robotics company has unveiled its latest creation: an advanced humanoid robot capable of performing complex tasks with human-like dexterity and agility. Equipped with state-of-the-art sensors, advanced AI algorithms, and a wide range of interactive capabilities, this robot represents a significant leap forward in the field of robotics. Its versatile design and advanced features make it suitable for various industries, including manufacturing, healthcare, and personal assistance.",
        user_id: 5
    },
    {
        title: "New AI-powered personal assistant launched!",
        post_content: "AssistantAI is an advanced personal assistant app that utilizes artificial intelligence to provide users with a wide range of features and functionalities. From scheduling appointments and managing tasks to answering queries and providing personalized recommendations, AssistantAI aims to revolutionize the way people interact with their digital assistants. The app is now available for download on iOS and Android devices, offering a seamless and intuitive user experience.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;