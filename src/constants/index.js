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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };


