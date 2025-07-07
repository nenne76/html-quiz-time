
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      <div className="container mx-auto px-4 py-8">
        {/* Quiz App Container */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              QuizMaster Pro
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Test your knowledge with our interactive quiz!
            </p>
          </div>

          {/* Quiz Container */}
          <div id="quiz-container" className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
            {/* Welcome Screen */}
            <div id="welcome-screen" className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to the Quiz!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Answer 10 questions and test your general knowledge. Each correct answer is worth 10 points.
              </p>
              <button 
                id="start-quiz-btn"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Quiz
              </button>
            </div>

            {/* Quiz Screen */}
            <div id="quiz-screen" className="hidden">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span id="question-counter" className="text-sm font-medium text-gray-700">1 / 10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    id="progress-bar" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{width: '10%'}}
                  ></div>
                </div>
              </div>

              {/* Score Display */}
              <div className="text-right mb-6">
                <span className="text-lg font-semibold text-gray-700">
                  Score: <span id="current-score" className="text-purple-600">0</span>
                </span>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 id="question-text" className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                  Loading question...
                </h3>
                
                {/* Answer Options */}
                <div id="answer-options" className="space-y-4">
                  {/* Options will be populated by JavaScript */}
                </div>
              </div>

              {/* Next Button */}
              <div className="text-center">
                <button 
                  id="next-btn"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled
                >
                  Next Question
                </button>
              </div>
            </div>

            {/* Results Screen */}
            <div id="results-screen" className="hidden text-center">
              <div className="mb-8">
                <div id="results-icon" className="text-8xl mb-4">🎉</div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
                <div className="text-6xl font-bold text-purple-600 mb-4">
                  <span id="final-score">0</span>/100
                </div>
                <p id="results-message" className="text-xl text-gray-600 mb-8">
                  Great job! You've completed the quiz.
                </p>
              </div>
              
              {/* Results Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Results</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600" id="correct-answers">0</div>
                    <div className="text-sm text-gray-600">Correct</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600" id="incorrect-answers">0</div>
                    <div className="text-sm text-gray-600">Incorrect</div>
                  </div>
                </div>
              </div>

              <button 
                id="restart-btn"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
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
          let currentQuestion = 0;
          let score = 0;
          let selectedAnswer = null;
          let correctAnswers = 0;
          let incorrectAnswers = 0;

          // DOM Elements
          const welcomeScreen = document.getElementById('welcome-screen');
          const quizScreen = document.getElementById('quiz-screen');
          const resultsScreen = document.getElementById('results-screen');
          const startBtn = document.getElementById('start-quiz-btn');
          const nextBtn = document.getElementById('next-btn');
          const restartBtn = document.getElementById('restart-btn');
          const questionText = document.getElementById('question-text');
          const answerOptions = document.getElementById('answer-options');
          const progressBar = document.getElementById('progress-bar');
          const questionCounter = document.getElementById('question-counter');
          const currentScoreElement = document.getElementById('current-score');
          const finalScoreElement = document.getElementById('final-score');
          const resultsMessage = document.getElementById('results-message');
          const resultsIcon = document.getElementById('results-icon');
          const correctAnswersElement = document.getElementById('correct-answers');
          const incorrectAnswersElement = document.getElementById('incorrect-answers');

          // Event Listeners
          startBtn.addEventListener('click', startQuiz);
          nextBtn.addEventListener('click', nextQuestion);
          restartBtn.addEventListener('click', restartQuiz);

          function startQuiz() {
            welcomeScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            loadQuestion();
          }

          function loadQuestion() {
            const question = quizData[currentQuestion];
            questionText.textContent = question.question;
            
            // Update progress
            const progress = ((currentQuestion + 1) / quizData.length) * 100;
            progressBar.style.width = progress + '%';
            questionCounter.textContent = (currentQuestion + 1) + ' / ' + quizData.length;
            
            // Clear previous options
            answerOptions.innerHTML = '';
            selectedAnswer = null;
            nextBtn.disabled = true;
            
            // Create answer options
            question.options.forEach((option, index) => {
              const button = document.createElement('button');
              button.className = 'w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 transform hover:scale-[1.02]';
              button.textContent = option;
              button.addEventListener('click', () => selectAnswer(index, button));
              answerOptions.appendChild(button);
            });
          }

          function selectAnswer(answerIndex, buttonElement) {
            // Remove previous selection
            const allButtons = answerOptions.querySelectorAll('button');
            allButtons.forEach(btn => {
              btn.classList.remove('border-purple-500', 'bg-purple-100', 'text-purple-700');
              btn.classList.add('border-gray-200');
            });
            
            // Highlight selected answer
            buttonElement.classList.remove('border-gray-200');
            buttonElement.classList.add('border-purple-500', 'bg-purple-100', 'text-purple-700');
            
            selectedAnswer = answerIndex;
            nextBtn.disabled = false;
          }

          function nextQuestion() {
            // Check if answer is correct
            const correct = quizData[currentQuestion].correct;
            if (selectedAnswer === correct) {
              score += 10;
              correctAnswers++;
              currentScoreElement.textContent = score;
            } else {
              incorrectAnswers++;
            }
            
            currentQuestion++;
            
            if (currentQuestion < quizData.length) {
              loadQuestion();
            } else {
              showResults();
            }
          }

          function showResults() {
            quizScreen.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            finalScoreElement.textContent = score;
            correctAnswersElement.textContent = correctAnswers;
            incorrectAnswersElement.textContent = incorrectAnswers;
            
            // Set results message and icon based on score
            if (score >= 80) {
              resultsMessage.textContent = "Excellent! You're a quiz master!";
              resultsIcon.textContent = "🏆";
            } else if (score >= 60) {
              resultsMessage.textContent = "Good job! Well done!";
              resultsIcon.textContent = "🎉";
            } else if (score >= 40) {
              resultsMessage.textContent = "Not bad! Keep learning!";
              resultsIcon.textContent = "👍";
            } else {
              resultsMessage.textContent = "Keep practicing! You'll do better next time!";
              resultsIcon.textContent = "📚";
            }
          }

          function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            correctAnswers = 0;
            incorrectAnswers = 0;
            
            currentScoreElement.textContent = '0';
            
            resultsScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
          }
        `
      }} />
    </div>
  );
};

export default Index;
