
import React, { useState } from 'react';

const Index = () => {
  // Quiz Data
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correct: 2
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2
    },
    {
      question: "Which country is home to the kangaroo?",
      options: ["New Zealand", "Australia", "South Africa", "Brazil"],
      correct: 1
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      correct: 2
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 3
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      correct: 1
    }
  ];

  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');

  const loadQuestion = () => {
    setSelectedAnswer(null);
  };

  const nextQuestion = () => {
    const correct = quizData[currentQuestion].correct;
    if (selectedAnswer === correct) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectAnswers(prev => prev + 1);
    }
    
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setCurrentScreen('results');
    }
  };

  const startQuiz = () => {
    setCurrentScreen('quiz');
    loadQuestion();
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentScreen('welcome');
  };

  const selectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const currentQuizData = quizData[currentQuestion];

  const getResultsMessage = () => {
    if (score >= 80) return "Excellent! You're a Dalwa quiz master!";
    if (score >= 60) return "Good job! Well done on the Dalwa quiz!";
    if (score >= 40) return "Not bad! Keep learning with Dalwa!";
    return "Keep practicing! Dalwa believes in you!";
  };

  const getResultsIcon = () => {
    if (score >= 80) return "🏆";
    if (score >= 60) return "🎉";
    if (score >= 40) return "👍";
    return "📚";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Quiz App Container */}
        <div className="max-w-4xl mx-auto">
          {/* Header with enhanced animations */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg transform hover:scale-105 transition-all duration-500 animate-bounce">
              Dalwa QuizMaster Pro
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
              Test your knowledge with our interactive quiz powered by Dalwa!
            </p>
            {/* Powered by Dalwa branding */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <span className="text-white text-sm font-medium">Powered by Dalwa</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Quiz Container with enhanced styling */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-500 animate-scale-in">
            {/* Welcome Screen */}
            {currentScreen === 'welcome' && (
              <div className="text-center">
                <div className="animate-bounce mb-6">
                  <div className="text-8xl mb-4">🧠</div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
                  Welcome to Dalwa Quiz!
                </h2>
                <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  Answer 10 questions and test your general knowledge. Each correct answer is worth 10 points.
                </p>
                <button 
                  onClick={startQuiz}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg animate-pulse hover:animate-none relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Quiz</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            )}

            {/* Quiz Screen */}
            {currentScreen === 'quiz' && (
              <div>
                {/* Progress Bar with enhanced animation */}
                <div className="mb-6 animate-slide-in-right">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-700 animate-pulse">
                      {currentQuestion + 1} / {quizData.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 animate-pulse relative"
                      style={{width: `${progress}%`}}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Score Display with animation */}
                <div className="text-right mb-6 animate-fade-in">
                  <span className="text-lg font-semibold text-gray-700">
                    Score: <span className="text-purple-600 animate-bounce inline-block">{score}</span>
                  </span>
                </div>

                {/* Question with enhanced animation */}
                <div className="mb-8 animate-scale-in">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed transform hover:scale-105 transition-all duration-300">
                    {currentQuizData.question}
                  </h3>
                  
                  {/* Answer Options */}
                  <div className="space-y-4">
                    {currentQuizData.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                          selectedAnswer === index
                            ? 'border-purple-500 bg-purple-100 text-purple-700'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="text-center animate-fade-in">
                  <button 
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:rotate-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Next Question</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            )}

            {/* Results Screen */}
            {currentScreen === 'results' && (
              <div className="text-center">
                <div className="mb-8 animate-scale-in">
                  <div className="text-8xl mb-4 animate-bounce">{getResultsIcon()}</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Quiz Complete!</h2>
                  <div className="text-6xl font-bold text-purple-600 mb-4 animate-pulse">
                    <span className="inline-block transform hover:scale-110 transition-transform duration-300">{score}</span>/100
                  </div>
                  <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
                    {getResultsMessage()}
                  </p>
                </div>
                
                {/* Results Breakdown */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Results</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-fade-in">
                      <div className="text-2xl font-bold text-green-600 animate-bounce">{correctAnswers}</div>
                      <div className="text-sm text-gray-600">Correct</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <div className="text-2xl font-bold text-red-600 animate-pulse">{incorrectAnswers}</div>
                      <div className="text-sm text-gray-600">Incorrect</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={restartQuiz}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-lg animate-pulse hover:animate-none relative overflow-hidden group"
                >
                  <span className="relative z-10">Take Quiz Again</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            )}
          </div>

          {/* Footer with Dalwa branding */}
          <div className="text-center animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-white font-semibold">Built with ❤️ by Dalwa</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fade-out {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
          }
          
          @keyframes scale-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scale-in 0.5s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-out forwards;
          }
        `
      }} />
    </div>
  );
};

export default Index;
