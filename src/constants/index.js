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
  nodejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Generative AI Engineer",
    icon: web,
  },
  {
    title: "Large Language Model (LLM) Specialist",
    icon: mobile,
  },
  {
    title: "RAG & Agentic Systems Architect",
    icon: backend,
  },
  {
    title: "Full-Stack AI / ML Engineer",
    icon: creator,
  },
  {
    title: "Unity 3D + AI Developer",
    icon: creator,
  },
  {
    title: "AI Technical Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Python",
    icon: html,
  },
  {
    name: "ML/DL",
    icon: html,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Hugging Face",
    icon: html,
  },
  {
    name: "LLM",
    icon: llm,
  },
  {
    name: "RAG",
    icon: html,
  },
  {
    name: "Vector Databases",
    icon: html,
  },
  {
    name: "OpenAI",
    icon: html,
  },
  {
    name: "FastAPI",
    icon: html,
  },
  {
    name: "Unity 3D",
    icon: html,
  },
  {
    name: "C#",
    icon: html,
  },
  {
    name: "Cloud Services(AWS/GCP)",
    icon: html,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "git",
    icon: git,
  },
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


