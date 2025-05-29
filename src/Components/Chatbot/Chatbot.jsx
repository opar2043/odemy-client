import axios from "axios";
import React, { useState } from "react";
import { FaPaperPlane, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaLightbulb,
  FaRobot,
  FaCommentDots,
} from "react-icons/fa";
const Chatbot = () => {
  const [ans, setAns] = useState("");
  const [qus, setQus] = useState("");
  const [preQus, setPreQus] = useState([]);
  const [arr, setArr] = useState([]);

  async function handleChatBot(e) {
    e.preventDefault();
    if (qus) {
      setPreQus((pre) => [...pre, qus]);
    }
    if (ans) {
      setArr((prev) => [...prev, ans]);
    }

    setAns("Loading.......");
    const res = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAq8OKuujcz5YoEqXD0Z6G1f4dg0OX5FDY",
      method: "POST",
      data: {
        contents: [
          {
            parts: [
              {
                text: qus,
              },
            ],
          },
        ],
      },
    });

    // console.log(res?.data?.candidates[0]?.content.parts[0].text);
    setAns(res?.data?.candidates[0]?.content.parts[0].text);

    e.target.reset();
  }

  console.log(arr);
  console.log(preQus);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-black">
      {/* Sidebar */}
      <div className="md:w-64 border-r border-black/10 p-4 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">Odemy AI</h2>
        <ul className="space-y-3">
          <Link to={"/"}>
            <li className="px-3 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">
              Home
            </li>
          </Link>
          <li className="px-3 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">
            My Chats
          </li>
          <li className="px-3 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">
            Settings
          </li>
          <div>
            {preQus &&
              preQus.map((qs) => (
                <li className="px-3 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">
                  <input
                    type="text"
                    onChange={(e) => setQus(e.target.value)}
                    className="bg-transparent text-black border-0 outline-0"
                    placeholder={qs}
                  />
                </li>
              ))}
            {arr &&
              arr.map((ar) => (
                <li className="px-3 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">
                  {ar}
                </li>
              ))}
          </div>
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <h2 className="font-semibold text-lg text-left ml-5 mt-3">
          Hello I'm Odemy AI
        </h2>
        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {!ans ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-black mt-6">
              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow hover:bg-black hover:text-white transition">
                <FaQuestionCircle className="text-2xl" />
                <p>Ask Me Anything</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow hover:bg-black hover:text-white transition">
                <FaLightbulb className="text-2xl" />
                <p>Get Smart Suggestions</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow-lg hover:bg-black hover:text-white transition">
                <FaRobot className="text-2xl" />
                <p>Understand My Abilities</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 border rounded-lg shadow hover:bg-black hover:text-white transition">
                <FaCommentDots className="text-2xl" />
                <p>Start a Conversation</p>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-white text-black rounded-xl shadow  space-y-4  mx-auto">
              {/* Question Section */}
              <div className="flex items-center gap-4">
                <div className="mt-1 text-black">
                  <FaUser className="text-lg" />
                </div>
                <div className="bg-blue-300/30 p-3 rounded-bl-2xl w-full">
                  <p className="text-sm font-medium">{qus}</p>
                </div>
              </div>

              {/* Bot Answer Section */}
              <div className="flex  gap-4">
                <div className="bg-blue-300/30 p-3 rounded-br-2xl w-full whitespace-pre-wrap text-sm leading-relaxed">
                  {ans}
                </div>
                <div>
                  <img
                    src="/Odemy.png"
                    alt="Bot"
                    className="w-8 h-8 rounded-full object-cover border justify-start items-start"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleChatBot}
          className="p-4 border-t border-black/10 flex items-center gap-2"
        >
          <input
            type="text"
            onChange={(e) => setQus(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border border-black/20 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="p-3 rounded-full bg-black text-white hover:scale-105 transition"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
