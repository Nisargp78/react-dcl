import React, { useState } from "react";
import AccordionCard2 from "./AccordionCard2.jsx";

const questions = [
  {
    id: 1,
    question: "Why is education important?",
    answer:
      "Education is important because it helps people gain knowledge, develop useful skills, and understand the world around them. It also improves confidence, encourages critical thinking, creates better career opportunities, and helps individuals make informed decisions throughout their personal and professional lives.",
  },
  {
    id: 2,
    question: "Why is teamwork important?",
    answer:
      "Teamwork is important because people can combine their different skills, experiences, and ideas to achieve a shared goal. Working together encourages communication, cooperation, creativity, and problem solving. A strong team can also complete difficult tasks more efficiently while supporting each member.",
  },
  {
    id: 3,
    question: "What are the benefits of reading?",
    answer:
      "Reading provides many benefits, including improved vocabulary, stronger concentration, better communication skills, and increased knowledge. It can also reduce stress and encourage creativity by allowing readers to explore different ideas, cultures, experiences, and perspectives through books, articles, stories, and other materials.",
  },
  {
    id: 4,
    question: "Why is exercise important?",
    answer:
      "Exercise is important because it helps maintain physical fitness, strengthens muscles, improves endurance, and supports overall health. Regular physical activity can also improve mood, increase energy levels, reduce stress, and help people maintain healthy daily habits throughout different stages of life.",
  },
  {
    id: 5,
    question: "Why is communication important?",
    answer:
      "Communication is important because it allows people to express their thoughts, feelings, ideas, and needs clearly. Good communication helps prevent misunderstandings, builds stronger relationships, improves teamwork, and makes it easier to solve problems effectively in personal, educational, and professional situations.",
  },
  {
    id: 6,
    question: "How does technology help people?",
    answer:
      "Technology helps people by making communication, learning, transportation, entertainment, and many everyday activities more convenient. It allows individuals to access information quickly, connect with others around the world, complete tasks efficiently, and use digital tools to solve problems in innovative ways.",
  },
  {
    id: 7,
    question: "Why is time management important?",
    answer:
      "Time management is important because it helps people organize their responsibilities and complete important tasks without unnecessary stress. Managing time effectively allows individuals to prioritize activities, meet deadlines, maintain a better balance between work and personal life, and achieve their goals.",
  },
  {
    id: 8,
    question: "What makes a good leader?",
    answer:
      "A good leader listens carefully to others, communicates clearly, takes responsibility, and makes thoughtful decisions. Effective leaders motivate their teams, encourage cooperation, handle challenges calmly, and create an environment where everyone feels respected, valued, and confident about contributing their ideas.",
  },
  {
    id: 9,
    question: "Why is honesty important?",
    answer:
      "Honesty is important because it builds trust between people and creates stronger relationships. Being truthful helps individuals communicate openly, take responsibility for their actions, and solve problems fairly. Honest behavior also creates a positive reputation and encourages others to behave with integrity.",
  },
  {
    id: 10,
    question: "Why should people protect the environment?",
    answer:
      "People should protect the environment because clean air, water, soil, forests, and natural resources are essential for life. Reducing pollution, conserving resources, protecting wildlife, and using sustainable practices can help preserve the planet and create a healthier future for everyone.",
  },
  {
    id: 11,
    question: "What are the benefits of learning new skills?",
    answer:
      "Learning new skills helps people become more confident, adaptable, and independent. New abilities can create career opportunities, improve problem-solving skills, encourage creativity, and make everyday activities easier. Continuous learning also helps individuals remain prepared for changes in technology and society.",
  },
  {
    id: 12,
    question: "Why is friendship important?",
    answer:
      "Friendship is important because good friends provide emotional support, encouragement, companionship, and understanding. Strong friendships can make difficult situations easier to handle and create opportunities for shared experiences. Trusted friends can also help people feel less alone and more confident.",
  },
  {
    id: 13,
    question: "Why is sleep important?",
    answer:
      "Sleep is important because the body and brain use this time to rest, recover, and prepare for the next day. Getting enough quality sleep can improve concentration, memory, mood, energy, and overall daily performance while supporting healthy physical and mental functioning.",
  },
  {
    id: 14,
    question: "How can people stay motivated?",
    answer:
      "People can stay motivated by setting clear goals, breaking large tasks into smaller steps, celebrating progress, and maintaining a positive mindset. Creating routines and remembering the reasons behind a goal can also provide encouragement when challenges or setbacks make progress difficult.",
  },
  {
    id: 15,
    question: "Why is creativity important?",
    answer:
      "Creativity is important because it helps people develop new ideas, solve problems, and approach situations from different perspectives. Creative thinking can be useful in education, business, technology, art, and everyday life because it encourages innovation and provides alternative solutions to challenges.",
  },
  {
    id: 16,
    question: "What is the importance of healthy food?",
    answer:
      "Healthy food provides the body with essential nutrients, vitamins, minerals, protein, carbohydrates, and healthy fats needed for proper functioning. A balanced diet can support energy levels, concentration, growth, and overall well-being while helping people develop healthier eating habits.",
  },
  {
    id: 17,
    question: "Why is problem-solving important?",
    answer:
      "Problem-solving is important because challenges are a natural part of everyday life. Strong problem-solving skills help people understand situations, identify possible solutions, evaluate different choices, and make effective decisions. These skills are valuable at school, work, and in personal situations.",
  },
  {
    id: 18,
    question: "Why is confidence important?",
    answer:
      "Confidence helps people trust their abilities and approach challenges with a positive attitude. When individuals have confidence, they are often more willing to communicate, try new experiences, make decisions, and learn from mistakes without becoming discouraged by temporary failures.",
  },
  {
    id: 19,
    question: "What are the benefits of traveling?",
    answer:
      "Traveling allows people to experience different places, cultures, traditions, foods, and lifestyles. It can broaden perspectives, create memorable experiences, and encourage personal growth. Traveling also gives individuals opportunities to meet new people, learn about history, and develop greater independence.",
  },
  {
    id: 20,
    question: "Why is respect important?",
    answer:
      "Respect is important because it helps people treat one another with kindness, fairness, and understanding. Showing respect creates healthier relationships, encourages cooperation, reduces unnecessary conflict, and makes people feel valued regardless of their background, opinions, experiences, or individual differences.",
  },
];

const AccordionContainer2 = () => {
  let [allData, setAllData] = useState(questions);
  let [isOpen, setIsOpen] = useState(null);

  let handleOpen = (id) => {
    isOpen != id ? setIsOpen(id) : setIsOpen(null);
  };
  return (
    <div>
      {allData.map((el) => {
        return (
          <AccordionCard2 el={el} isOpen={isOpen} handleOpen={handleOpen} />
        );
      })}
    </div>
  );
};

export default AccordionContainer2;