import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  langchain,
  llm,
  python,
  pytorch,
  huggingface,
  openai,
  fastapi,
  unity,
  csharp,
  aws,
  vectordb,
  elasticsearch,
  langgraph,
  agenticai,
  mcp,
  adk,
  asr,
  vad,
  livekit,
  tensorflow,
  genai,
  websocket,
  sql,
  redis,
  cicd,
  microservices,
  nlp,
  nodejs,
  atirathgaming,
  atirath,
} from "../assets";

import { SiLangchain } from "react-icons/si";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Generative AI Engineer",
    icon: genai,
    description: "Building end-to-end AI applications using LLMs, prompt engineering, and generative models to create intelligent, production-ready solutions.",
  },
  {
    title: "Large Language Model (LLM) Specialist",
    icon: llm,
    description: "Expert in deploying and optimizing LLMs including GPT, Claude, Gemini, and open-source models with fine-tuning and advanced prompting strategies.",
  },
  {
    title: "RAG & Agentic Systems Architect",
    icon: agenticai,
    description: "Designing retrieval-augmented generation pipelines and multi-agent systems using LangChain, LangGraph, and vector databases for accurate AI responses.",
  },
  {
    title: "AI Automation Expert",
    icon: adk,
    description: "Automating complex workflows with AI agents, MCP servers, and ADK to build intelligent automation pipelines that reduce manual effort.",
  },
  {
    title: "Voice AI & Speech Systems",
    icon: asr,
    description: "Building real-time voice AI systems with ASR, VAD, and LiveKit for telephony, voicebots, and low-latency live audio streaming applications.",
  },
  {
    title: "Full-Stack AI / ML Engineer",
    icon: python,
    description: "Developing scalable AI-powered web applications with Python, FastAPI, React, and cloud services from backend ML pipelines to frontend interfaces.",
  },
  {
    title: "Unity 3D + AI Developer",
    icon: unity,
    description: "Creating immersive 3D games and AI-powered interactive experiences using Unity, C#, multiplayer architecture, and real-time game mechanics.",
  },
  {
    title: "AI Technical Content Creator",
    icon: nlp,
    description: "Communicating complex AI concepts through technical content, documentation, tutorials, and educational resources for developers and enterprises.",
  },
];

const technologies = [
  // --- AI / LLM Core ---
  { name: "LLM",              icon: llm,          desc: "Building & deploying large language models for real-world AI applications" },
  { name: "OpenAI",           icon: openai,       desc: "Integrating GPT-4, Whisper & Embeddings APIs into production AI systems" },
  { name: "LangChain",        icon: langchain,    desc: "Chaining LLM calls, tools, memory & retrievers to build AI workflows" },
  { name: "LangGraph",        icon: langgraph,    desc: "Designing stateful multi-agent pipelines using graph-based execution flows" },
  { name: "Agentic AI",       icon: agenticai,    desc: "Building autonomous agents that plan, reason & act to complete tasks" },
  { name: "MCP Server",       icon: mcp,          desc: "Connecting AI models to external tools & data via Model Context Protocol" },
  { name: "ADK",              icon: adk,          desc: "Developing intelligent agents using Google's Agent Development Kit" },
  { name: "Hugging Face",     icon: huggingface,  desc: "Using open-source transformers, datasets & model hubs for AI projects" },
  { name: "RAG",              icon: elasticsearch,desc: "Grounding LLM responses with real-time retrieval from knowledge bases" },
  { name: "Vector Databases", icon: vectordb,     desc: "Storing & querying embeddings for fast semantic search in RAG systems" },
  { name: "NLP",              icon: nlp,          desc: "Processing & understanding human language for text-based AI solutions" },
  // --- Voice / Real-time Streaming ---
  { name: "ASR",              icon: asr,          desc: "Converting live speech to text with low latency for voicebot systems" },
  { name: "VAD",              icon: vad,          desc: "Detecting speech segments in audio streams for real-time processing" },
  { name: "LiveKit",          icon: livekit,      desc: "Handling real-time audio/video streaming for live telephony AI apps" },
  { name: "WebSocket",        icon: websocket,    desc: "Enabling bidirectional streaming for real-time AI agent communication" },
  // --- ML Frameworks ---
  { name: "ML/DL",            icon: tensorflow,   desc: "Training & deploying machine learning and deep learning models" },
  { name: "PyTorch",          icon: pytorch,      desc: "Building neural networks & custom model architectures for AI research" },
  // --- Game Dev ---
  { name: "Unity 3D",         icon: unity,        desc: "Developing 3D games with multiplayer, AI behaviour & physics systems" },
  { name: "C#",               icon: csharp,       desc: "Scripting game logic, UI systems & server-side features in Unity" },
  // --- Cloud & Backend ---
  { name: "Cloud Services(AWS/GCP)", icon: aws,   desc: "Deploying & scaling AI applications on cloud infrastructure" },
  { name: "Microservices",    icon: microservices,desc: "Architecting modular AI services that communicate via APIs" },
  { name: "CI/CD",            icon: cicd,         desc: "Automating build, test & deployment pipelines for AI applications" },
  { name: "Redis",            icon: redis,        desc: "Caching responses & managing session state in high-speed AI pipelines" },
  { name: "SQL",              icon: sql,          desc: "Querying & managing relational data for AI application backends" },
  // --- General Programming ---
  { name: "FastAPI",          icon: fastapi,      desc: "Building high-performance REST APIs to serve AI models in production" },
  { name: "Python",           icon: python,       desc: "Primary language for AI/ML development, scripting & automation" },
  { name: "Node.js",          icon: nodejs,       desc: "Building scalable backend services & real-time AI integrations" },
  { name: "React JS",         icon: reactjs,      desc: "Creating interactive frontend interfaces for AI-powered applications" },
  { name: "git",              icon: git,          desc: "Managing source code, versioning & team collaboration in projects" },
];

const experiences = [
  {
    title: "AI Travel Planning Chatbot",
    company_name: "Atirath Technologies Private Limited",
    icon: atirath,
    iconBg: "#383E56",
    date: "January 2024 -Present",
    points: [
      "Designed and implemented a LLM-powered chatbot that understands natural language queries about travel plans (destination, budget, dates, number of travellers, etc.).",
      "Used RAG (Retrieval-Augmented Generation) to ground the model on internal travel data such as packages, itineraries, hotels, flights, and offers, so that responses are accurate and up to date.",
      "Integrated LangChain to orchestrate the LLM workflow: prompt templates, tools, retrieval pipeline, and conversation memory.",
      "Connected the chatbot with backend APIs / databases to fetch live package details and personalize recommendations based on user preferences.",
      "Implemented guardrails and prompt strategies to keep responses polite, on-brand, and travel-specific.",
      "Exposed the bot via web/agent tools (e.g., chat widget / internal UI) so that both customers and internal teams can use it for quick travel queries.",
      "Logged and analyzed conversations to iteratively improve prompt quality, retrieval relevance, and response latency."
    ],
  },
  {
    title: "Agent Assist Voicebot for Live Telephony Calls",
    company_name: "Atirath Technologies Private Limited",
    icon: atirath,
    iconBg: "#E6DEDD",
    date: "January 2024 -Present",
    points: [
      "Designed a real-time telephony streaming pipeline where audio from the call is captured and processed continuously.",
      "Implemented VAD (Voice Activity Detection) to detect when the customer or agent is speaking, and to split the audio stream into meaningful segments instead of fixed chunks.",
      "Used ASR (Automatic Speech Recognition) on each segment to convert live audio into text transcripts with minimal latency.",
      "Built a RAG + LLM pipeline on top of the live transcript so the system can:Understand the ongoing conversation.Fetch relevant information from travel knowledge base / package data.Generate live suggestions, replies, FAQs, and next best actions for the agent.",
      "Orchestrated the flow using LangChain to chain:VAD → ASR → Conversation state → Retrieval → LLM response → Agent prompt.",
      "Optimized for low latency so that suggestions reach the agent in near real-time without interrupting the natural call flow.",
      "Added logging and monitoring for each segment (VAD, ASR, LLM response, retrieval quality) for debugging and continuous improvement."
    ],
  },
  {
    title: "Game Developer",
    company_name: "Atirath Gaming Technologies Private Limited",
    icon: atirathgaming,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and optimized a Medieval mid-core strategy multiplayer game.",
      "Designed client–server architecture, implemented core game mechanics, and built real-time multiplayer features using MirrorServer.",
      "Implemented activity systems such as quests and achievements to improve player engagement.",
      "Built and optimized Unity 3D UI: screens, widgets, reusable UI components, and localization for different regions.",
      "Enhanced user engagement with social virality features and ensured smooth gameplay using JSON serialization, efficient data structures, and solid design patterns.",



    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Your limits aren’t real until you decide to stop trying.",
    name: "Naruto Uzumaki",
  },
  {
    testimonial:
      "The biggest risk is not taking any risk.",
    name: "Mark Zuckerberg",
  },
  {
    testimonial:
      "The secret of your success is found in your daily routine.",
    name: "Mike Murdock",
  },
];

const projects = [
  {
    name: "PDF Search Using LLMs",
    description:
      "An intelligent document search application powered by Large Language Models and LangChain. Users can upload PDF documents and perform semantic search queries to extract relevant information using RAG (Retrieval Augmented Generation) architecture with a Streamlit interface.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ranjithayandrapati/PDF_Search_usingLLM",
  },
  {
    name: "VoiceBot: Movie Recommendation",
    description:
      "An AI-powered voice assistant built with LLMs and LiveKit that provides personalized movie recommendations through natural voice conversations. Users can interact via voice to discover movies based on their preferences, mood, and viewing history.",
    tags: [
      {
        name: "LLm",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Livekit",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ranjithayandrapati/Mikasa-VoiceBot",
  },
  {
    name: "3D Portfolio",
    description:
      "A modern, interactive 3D portfolio website built with React.js and Three.js, featuring animated neural network background, gradient-styled cards, EmailJS contact integration, and smooth animations to showcase professional experience and projects.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MailJS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ranjithayandrapati/My_Portfolio_3D_Gen_AI_Dev",
  },
];

export { services, technologies, experiences, testimonials, projects };


