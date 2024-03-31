import { useContext } from "react";
import { assets } from "../../assets/chatbot/assets";
import logo from "../../assets/chatbot/logo.png";
import "./chatbot.css";
import { chatbotContext } from "../../Context/chatbotContext";
//import { chatbotContext } from "../../Context/chatbotContext";
import ReactMarkdown from "react-markdown"; // Import react-markdown

const Chatbot = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(chatbotContext);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>
          <img src={logo} alt="" />
        </p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User</span>
              </p>
              <p>Ask me about Railways </p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() => handleCardClick("crowded platforms ")}
              >
                <p>crowded platforms </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => handleCardClick("Megablocks timing")}
              >
                <p>Megablocks timing </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("How doubtly can help me during my Exams ? ")
                }
              >
                <p>How doubtly can help me during my Exams ? </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <ReactMarkdown>{resultData}</ReactMarkdown> // Render resultData as markdown
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyPress={handleInputKeyPress}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>Powered by Gemini</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
