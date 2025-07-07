
import React, { useState } from 'react';

const Index = () => {
  // Expanded Quiz Data with more questions
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
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correct: 2
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: 2
    },
    {
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1
    },
    {
      question: "What is the fastest land animal?",
      options: ["Lion", "Cheetah", "Leopard", "Tiger"],
      correct: 1
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Silver", "Oxygen", "Iron"],
      correct: 2
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      correct: 1
    },
    {
      question: "Which continent is the largest by area?",
      options: ["Africa", "North America", "Asia", "Europe"],
      correct: 2
    },
    {
      question: "What is the smallest unit of matter?",
      options: ["Molecule", "Atom", "Electron", "Proton"],
      correct: 1
    },
    {
      question: "Which country invented pizza?",
      options: ["France", "Spain", "Greece", "Italy"],
      correct: 3
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
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
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);

  const nextQuestion = () => {
    const correct = quizData[currentQuestion].correct;
    const wasCorrect = selectedAnswer === correct;
    
    setIsCorrect(wasCorrect);
    setShowFeedback(true);
    
    setTimeout(() => {
      if (wasCorrect) {
        setScore(prev => prev + 10);
        setCorrectAnswers(prev => prev + 1);
      } else {
        setIncorrectAnswers(prev => prev + 1);
      }
      
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setQuestionKey(prev => prev + 1); // Force re-render with animations
      } else {
        setCurrentScreen('results');
        setShowFeedback(false);
      }
    }, 2000);
  };

  const startQuiz = () => {
    setCurrentScreen('quiz');
    setSelectedAnswer(null);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentScreen('welcome');
    setShowFeedback(false);
    setQuestionKey(0);
  };

  const selectAnswer = (index: number) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
    }
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const currentQuizData = quizData[currentQuestion];

  const getResultsMessage = () => {
    const percentage = (score / (quizData.length * 10)) * 100;
    if (percentage >= 90) return "Outstanding! You're a true Dalwa champion!";
    if (percentage >= 80) return "Excellent! You're a Dalwa quiz master!";
    if (percentage >= 70) return "Great job! Well done on the Dalwa quiz!";
    if (percentage >= 60) return "Good work! Keep learning with Dalwa!";
    if (percentage >= 50) return "Not bad! You're getting there with Dalwa!";
    return "Keep practicing! Dalwa believes in your potential!";
  };

  const getResultsIcon = () => {
    const percentage = (score / (quizData.length * 10)) * 100;
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 70) return "⭐";
    if (percentage >= 60) return "👍";
    if (percentage >= 50) return "🙂";
    return "📚";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Quiz App Container */}
        <div className="max-w-4xl mx-auto">
          {/* Header with enhanced animations */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg transform hover:scale-105 transition-all duration-500 animate-bounce">
              <span className="inline-block animate-pulse">D</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.1s'}}>a</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>l</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.3s'}}>w</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.4s'}}>a</span>
              <span className="mx-2"></span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.5s'}}>Q</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.6s'}}>u</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.7s'}}>i</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.8s'}}>z</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '0.9s'}}>M</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1s'}}>a</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.1s'}}>s</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.2s'}}>t</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.3s'}}>e</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.4s'}}>r</span>
              <span className="mx-2"></span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.5s'}}>P</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.6s'}}>r</span>
              <span className="inline-block animate-pulse" style={{animationDelay: '1.7s'}}>o</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in animate-slide-from-left" style={{animationDelay: '0.5s'}}>
              Test your knowledge with our interactive quiz powered by Dalwa!
            </p>
            {/* Enhanced Powered by Dalwa branding */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 animate-glow">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <span className="text-white text-sm font-medium animate-pulse">Powered by Dalwa</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Quiz Container with enhanced styling */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-500 animate-scale-in animate-float">
            {/* Welcome Screen */}
            {currentScreen === 'welcome' && (
              <div className="text-center">
                <div className="animate-bounce mb-6">
                  <div className="text-8xl mb-4 animate-rotate-slow">🧠</div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in animate-slide-up">
                  Welcome to Dalwa Quiz Challenge!
                </h2>
                <p className="text-lg text-gray-600 mb-8 animate-fade-in animate-slide-up" style={{animationDelay: '0.3s'}}>
                  Answer {quizData.length} challenging questions and test your knowledge. Each correct answer is worth 10 points.
                </p>
                <button 
                  onClick={startQuiz}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg animate-pulse hover:animate-none relative overflow-hidden group animate-rainbow-border"
                >
                  <span className="relative z-10">🚀 Start Quiz Adventure</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            )}

            {/* Quiz Screen */}
            {currentScreen === 'quiz' && (
              <div key={questionKey} className="animate-slide-in-right">
                {/* Enhanced Progress Bar */}
                <div className="mb-6 animate-slide-in-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 animate-pulse">Progress</span>
                    <span className="text-sm font-medium text-gray-700 animate-bounce">
                      {currentQuestion + 1} / {quizData.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 h-4 rounded-full transition-all duration-1000 animate-shimmer relative"
                      style={{width: `${progress}%`}}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-bounce"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Score Display */}
                <div className="text-right mb-6 animate-fade-in">
                  <span className="text-lg font-semibold text-gray-700">
                    Score: <span className="text-purple-600 animate-bounce inline-block bg-purple-100 px-3 py-1 rounded-full">{score}</span>
                  </span>
                </div>

                {/* Question with enhanced animation */}
                <div className="mb-8 animate-scale-in animate-slide-up">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed transform hover:scale-105 transition-all duration-300 animate-typewriter">
                    {currentQuizData.question}
                  </h3>
                  
                  {/* Answer Options with staggered animations */}
                  <div className="space-y-4">
                    {currentQuizData.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        disabled={showFeedback}
                        className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg animate-slide-in-right animate-option-glow ${
                          showFeedback && index === currentQuizData.correct
                            ? 'border-green-500 bg-green-100 text-green-700 animate-correct-pulse'
                            : showFeedback && selectedAnswer === index && index !== currentQuizData.correct
                            ? 'border-red-500 bg-red-100 text-red-700 animate-wrong-shake'
                            : selectedAnswer === index
                            ? 'border-purple-500 bg-purple-100 text-purple-700 animate-selected-glow'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                        } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <span className="flex items-center">
                          <span className="mr-3 text-lg font-bold text-purple-600">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                          {showFeedback && index === currentQuizData.correct && (
                            <span className="ml-auto text-green-600 animate-bounce">✓</span>
                          )}
                          {showFeedback && selectedAnswer === index && index !== currentQuizData.correct && (
                            <span className="ml-auto text-red-600 animate-bounce">✗</span>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Section */}
                {showFeedback && (
                  <div className="text-center mb-6 animate-scale-in">
                    <div className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-600 animate-bounce' : 'text-red-600 animate-shake'}`}>
                      {isCorrect ? '🎉 Correct!' : '❌ Incorrect!'}
                    </div>
                    <div className="text-gray-600">
                      {isCorrect ? 'Great job! +10 points' : `The correct answer was: ${currentQuizData.options[currentQuizData.correct]}`}
                    </div>
                  </div>
                )}

                {/* Next Button with enhanced animation */}
                <div className="text-center animate-fade-in">
                  <button 
                    onClick={nextQuestion}
                    disabled={selectedAnswer === null || showFeedback}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:rotate-0 relative overflow-hidden group animate-next-button-glow"
                  >
                    <span className="relative z-10">
                      {showFeedback ? 'Loading...' : currentQuestion + 1 === quizData.length ? '🏁 Finish Quiz' : '➡️ Next Question'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            )}

            {/* Enhanced Results Screen */}
            {currentScreen === 'results' && (
              <div className="text-center animate-scale-in">
                <div className="mb-8 animate-celebration">
                  <div className="text-8xl mb-4 animate-bounce animate-rotate-slow">{getResultsIcon()}</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in animate-rainbow-text">Quiz Complete!</h2>
                  <div className="text-6xl font-bold text-purple-600 mb-4 animate-pulse animate-scale-bounce">
                    <span className="inline-block transform hover:scale-110 transition-transform duration-300 animate-number-count">{score}</span>/{quizData.length * 10}
                  </div>
                  <p className="text-xl text-gray-600 mb-8 animate-fade-in animate-slide-up" style={{animationDelay: '0.5s'}}>
                    {getResultsMessage()}
                  </p>
                </div>
                
                {/* Enhanced Results Breakdown */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8 animate-slide-in-right animate-gradient-shift" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-bounce">Your Dalwa Quiz Results</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-fade-in animate-card-float shadow-lg">
                      <div className="text-2xl font-bold text-green-600 animate-bounce animate-number-count">{correctAnswers}</div>
                      <div className="text-sm text-gray-600">✅ Correct</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-fade-in animate-card-float shadow-lg" style={{animationDelay: '0.2s'}}>
                      <div className="text-2xl font-bold text-red-600 animate-pulse animate-number-count">{incorrectAnswers}</div>
                      <div className="text-sm text-gray-600">❌ Incorrect</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-fade-in animate-card-float shadow-lg" style={{animationDelay: '0.4s'}}>
                      <div className="text-2xl font-bold text-blue-600 animate-bounce animate-number-count">{Math.round((score / (quizData.length * 10)) * 100)}%</div>
                      <div className="text-sm text-gray-600">📊 Accuracy</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={restartQuiz}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-lg animate-pulse hover:animate-none relative overflow-hidden group animate-restart-glow"
                >
                  <span className="relative z-10">🔄 Take Quiz Again</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            )}
          </div>

          {/* Enhanced Footer with Dalwa branding */}
          <div className="text-center animate-fade-in animate-float" style={{animationDelay: '1s'}}>
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 animate-glow">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-white font-semibold animate-pulse">Built with ❤️ by Dalwa</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS animations */}
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

          @keyframes slide-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-from-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
            50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          @keyframes rainbow-border {
            0% { border-color: #ff0000; }
            16% { border-color: #ff8000; }
            33% { border-color: #ffff00; }
            50% { border-color: #00ff00; }
            66% { border-color: #0080ff; }
            83% { border-color: #8000ff; }
            100% { border-color: #ff0000; }
          }

          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes correct-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }

          @keyframes wrong-shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }

          @keyframes selected-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.3); }
            50% { box-shadow: 0 0 25px rgba(168, 85, 247, 0.5); }
          }

          @keyframes option-glow {
            0%, 100% { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            50% { box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
          }

          @keyframes next-button-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.4); }
            50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
          }

          @keyframes celebration {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(5deg); }
            75% { transform: scale(1.1) rotate(-5deg); }
          }

          @keyframes rainbow-text {
            0% { color: #ff0000; }
            16% { color: #ff8000; }
            33% { color: #ffff00; }
            50% { color: #00ff00; }
            66% { color: #0080ff; }
            83% { color: #8000ff; }
            100% { color: #ff0000; }
          }

          @keyframes scale-bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes number-count {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes card-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }

          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes restart-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
            50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            75% { transform: translateX(3px); }
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

          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-out forwards;
          }

          .animate-slide-up {
            animation: slide-up 0.5s ease-out forwards;
          }

          .animate-slide-from-left {
            animation: slide-from-left 0.8s ease-out forwards;
          }

          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }

          .animate-rainbow-border {
            border: 2px solid;
            animation: rainbow-border 3s linear infinite;
          }

          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typewriter 2s steps(40, end);
          }

          .animate-correct-pulse {
            animation: correct-pulse 0.6s ease-in-out 3;
          }

          .animate-wrong-shake {
            animation: wrong-shake 0.5s ease-in-out 2;
          }

          .animate-selected-glow {
            animation: selected-glow 1.5s ease-in-out infinite;
          }

          .animate-option-glow {
            animation: option-glow 2s ease-in-out infinite;
          }

          .animate-next-button-glow {
            animation: next-button-glow 2s ease-in-out infinite;
          }

          .animate-celebration {
            animation: celebration 1s ease-in-out infinite;
          }

          .animate-rainbow-text {
            animation: rainbow-text 3s linear infinite;
          }

          .animate-scale-bounce {
            animation: scale-bounce 1s ease-in-out infinite;
          }

          .animate-number-count {
            animation: number-count 0.8s ease-out forwards;
          }

          .animate-gradient-shift {
            background: linear-gradient(-45deg, #f8fafc, #e0f2fe, #f8fafc, #ddd6fe);
            background-size: 400% 400%;
            animation: gradient-shift 4s ease infinite;
          }

          .animate-card-float {
            animation: card-float 2s ease-in-out infinite;
          }

          .animate-rotate-slow {
            animation: rotate-slow 10s linear infinite;
          }

          .animate-restart-glow {
            animation: restart-glow 2s ease-in-out infinite;
          }

          .animate-shake {
            animation: shake 0.5s ease-in-out 2;
          }
        `
      }} />
    </div>
  );
};

export default Index;
