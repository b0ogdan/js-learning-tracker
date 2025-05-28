import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Circle, Clock, BookOpen, Trophy, Target, MessageSquare, Save } from 'lucide-react';

const LearningTracker = () => {
  const [completedTasks, setCompletedTasks] = useState({});
  const [currentWeek, setCurrentWeek] = useState(1);
  const [dailyNotes, setDailyNotes] = useState({});
  const [currentNote, setCurrentNote] = useState('');

  const learningPlan = {
    1: {
      title: "JavaScript Fundamentals - Week 1",
      subtitle: "Basic Syntax and Concepts",
      days: {
        1: {
          title: "Setup and Hello World",
          time: "1-1.5 hours",
          tasks: [
            "Set up VS Code with JavaScript extensions",
            "Learn what JavaScript is and where it runs",
            "Write your first 'Hello World' in browser console",
            "Practice: Display your name and age using console.log()"
          ]
        },
        2: {
          title: "Variables and Data Types",
          time: "1-1.5 hours",
          tasks: [
            "Learn about let, const, and why we avoid var",
            "Understand strings, numbers, booleans, null, undefined",
            "Practice: Create variables for personal info",
            "Exercise: Build a simple 'About Me' info display"
          ]
        },
        3: {
          title: "Operators and Basic Math",
          time: "1-1.5 hours",
          tasks: [
            "Arithmetic operators (+, -, *, /, %)",
            "Comparison operators (==, ===, !=, !==, <, >)",
            "Logical operators (&&, ||, !)",
            "Practice: Create a simple calculator"
          ]
        },
        4: {
          title: "Strings and Template Literals",
          time: "1-1.5 hours",
          tasks: [
            "String methods (length, slice, toUpperCase, toLowerCase)",
            "Template literals with backticks",
            "String concatenation vs template literals",
            "Practice: Create a greeting message generator"
          ]
        },
        5: {
          title: "Conditionals (if/else)",
          time: "1-1.5 hours",
          tasks: [
            "if, else if, else statements",
            "Ternary operator (condition ? true : false)",
            "Switch statements",
            "Practice: Build a simple grade calculator (A, B, C, D, F)"
          ]
        },
        6: {
          title: "Loops",
          time: "1-1.5 hours",
          tasks: [
            "for loops, while loops, do-while loops",
            "Breaking out of loops (break, continue)",
            "Practice: Create multiplication tables, count numbers"
          ]
        },
        7: {
          title: "Review and Mini Project",
          time: "1.5-2 hours",
          tasks: [
            "Review all Week 1 concepts",
            "Mini Project: Number guessing game",
            "Debug and improve your code"
          ]
        }
      }
    },
    2: {
      title: "JavaScript Fundamentals - Week 2",
      subtitle: "Functions and Arrays",
      days: {
        8: {
          title: "Functions Basics",
          time: "1-1.5 hours",
          tasks: [
            "Function declarations vs expressions",
            "Parameters and arguments",
            "Return statements",
            "Practice: Create functions for math operations"
          ]
        },
        9: {
          title: "Arrow Functions",
          time: "1-1.5 hours",
          tasks: [
            "Arrow function syntax",
            "When to use arrow functions vs regular functions",
            "Practice: Convert previous functions to arrow functions"
          ]
        },
        10: {
          title: "Arrays Basics",
          time: "1-1.5 hours",
          tasks: [
            "Creating arrays, accessing elements",
            "Array length property",
            "Adding/removing elements (push, pop, shift, unshift)",
            "Practice: Create a shopping list manager"
          ]
        },
        11: {
          title: "Array Methods",
          time: "1-1.5 hours",
          tasks: [
            "forEach, map, filter, find methods",
            "Understanding when to use each method",
            "Practice: Filter numbers, transform data"
          ]
        },
        12: {
          title: "Objects Basics",
          time: "1-1.5 hours",
          tasks: [
            "Creating objects with properties and methods",
            "Accessing object properties (dot vs bracket notation)",
            "Adding and modifying object properties",
            "Practice: Create a person object with methods"
          ]
        },
        13: {
          title: "More Object Concepts",
          time: "1-1.5 hours",
          tasks: [
            "Object destructuring",
            "this keyword basics",
            "Practice: Create a simple car object with methods"
          ]
        },
        14: {
          title: "Week 2 Project",
          time: "1.5-2 hours",
          tasks: [
            "Project: Student Grade Manager - Create student objects",
            "Calculate averages using functions",
            "Filter students by grades",
            "Combine functions and arrays"
          ]
        }
      }
    },
    3: {
      title: "JavaScript Advanced - Week 3",
      subtitle: "Async Programming & APIs",
      days: {
        15: {
          title: "Scope and Hoisting",
          time: "1-1.5 hours",
          tasks: [
            "Global vs local scope",
            "Block scope with let and const",
            "Understanding hoisting",
            "Practice: Debug scope-related issues"
          ]
        },
        16: {
          title: "Error Handling",
          time: "1-1.5 hours",
          tasks: [
            "try/catch/finally blocks",
            "Common error types",
            "Debugging techniques",
            "Practice: Add error handling to previous projects"
          ]
        },
        17: {
          title: "Promises",
          time: "1-1.5 hours",
          tasks: [
            "Understanding synchronous vs asynchronous",
            "What are Promises?",
            ".then() and .catch() methods",
            "Practice: Simulate API calls with setTimeout"
          ]
        },
        18: {
          title: "Async/Await",
          time: "1-1.5 hours",
          tasks: [
            "async/await syntax",
            "Converting Promises to async/await",
            "Error handling with try/catch",
            "Practice: Rewrite promise examples"
          ]
        },
        19: {
          title: "Working with APIs",
          time: "1-1.5 hours",
          tasks: [
            "What are APIs and HTTP requests?",
            "Using fetch() to get data",
            "JSON parsing",
            "Practice: Fetch data from JSONPlaceholder API"
          ]
        },
        20: {
          title: "DOM Manipulation",
          time: "1-1.5 hours",
          tasks: [
            "Selecting elements (getElementById, querySelector)",
            "Changing content and styles",
            "Adding event listeners",
            "Practice: Create interactive buttons and forms"
          ]
        },
        21: {
          title: "Week 3 Project",
          time: "2-2.5 hours",
          tasks: [
            "Project: Weather App - Fetch data from API",
            "Display data on webpage",
            "Add interactive elements",
            "Handle errors gracefully"
          ]
        }
      }
    },
    4: {
      title: "Modern JavaScript - Week 4",
      subtitle: "ES6+ Features",
      days: {
        22: {
          title: "ES6 Features",
          time: "1-1.5 hours",
          tasks: [
            "Destructuring objects and arrays",
            "Spread operator (...)",
            "Rest parameters",
            "Practice: Refactor old code with ES6 features"
          ]
        },
        23: {
          title: "Classes",
          time: "1-1.5 hours",
          tasks: [
            "Class syntax and constructors",
            "Methods and properties",
            "Inheritance basics",
            "Practice: Create a simple class hierarchy"
          ]
        },
        24: {
          title: "Modules",
          time: "1-1.5 hours",
          tasks: [
            "import/export statements",
            "Named vs default exports",
            "Organizing code into modules",
            "Practice: Split a project into multiple files"
          ]
        },
        25: {
          title: "Advanced Array Methods",
          time: "1-1.5 hours",
          tasks: [
            "reduce() method deep dive",
            "some() and every() methods",
            "Chaining array methods",
            "Practice: Complex data transformations"
          ]
        },
        26: {
          title: "Local Storage and JSON",
          time: "1-1.5 hours",
          tasks: [
            "localStorage.setItem() and getItem()",
            "JSON.stringify() and JSON.parse()",
            "Practice: Create a notes app that saves data"
          ]
        },
        27: {
          title: "Review and Debug",
          time: "1-1.5 hours",
          tasks: [
            "Review all JavaScript concepts",
            "Debug and improve previous projects",
            "Identify weak areas for extra practice"
          ]
        },
        28: {
          title: "Final JavaScript Project",
          time: "2-3 hours",
          tasks: [
            "Capstone: Todo List App - Add, edit, delete todos",
            "Mark as complete functionality",
            "Filter todos (all, active, completed)",
            "Save to localStorage with modern JS features"
          ]
        }
      }
    },
    5: {
      title: "React Basics - Week 5",
      subtitle: "Components and State",
      days: {
        29: {
          title: "React Setup",
          time: "1.5-2 hours",
          tasks: [
            "Install Node.js and create React app with Vite",
            "Understand what React is and why it's useful",
            "Create your first functional component",
            "JSX basics and differences from HTML"
          ]
        },
        30: {
          title: "Components and Props",
          time: "1-1.5 hours",
          tasks: [
            "Creating reusable components",
            "Passing data with props",
            "Props destructuring",
            "Practice: Create a profile card component"
          ]
        },
        31: {
          title: "Lists and Keys",
          time: "1-1.5 hours",
          tasks: [
            "Rendering arrays of data",
            "The importance of keys in React",
            "Map function in JSX",
            "Practice: Create a list of users or products"
          ]
        },
        32: {
          title: "State with useState",
          time: "1-1.5 hours",
          tasks: [
            "What is state and why we need it",
            "useState hook basics",
            "Updating state correctly",
            "Practice: Create a counter app and toggle visibility"
          ]
        },
        33: {
          title: "Event Handling",
          time: "1-1.5 hours",
          tasks: [
            "onClick, onChange, onSubmit events",
            "Passing parameters to event handlers",
            "Controlled components (forms)",
            "Practice: Create a simple form with validation"
          ]
        },
        34: {
          title: "Conditional Rendering",
          time: "1-1.5 hours",
          tasks: [
            "Using ternary operators in JSX",
            "&& operator for conditional rendering",
            "Showing/hiding components based on state",
            "Practice: Create a login/logout interface"
          ]
        },
        35: {
          title: "React Project - Part 1",
          time: "1.5-2 hours",
          tasks: [
            "Start Todo App: Component structure planning",
            "Create todo list display component",
            "Add new todo functionality",
            "Basic styling for the app"
          ]
        }
      }
    },
    6: {
      title: "Intermediate React - Week 6",
      subtitle: "Hooks and API Integration",
      days: {
        36: {
          title: "useEffect Hook",
          time: "1-1.5 hours",
          tasks: [
            "What is useEffect and when to use it",
            "Effect dependencies array",
            "Cleanup functions",
            "Practice: Fetch data when component mounts"
          ]
        },
        37: {
          title: "API Integration",
          time: "1-1.5 hours",
          tasks: [
            "Making API calls in useEffect",
            "Loading states and error handling",
            "Displaying fetched data",
            "Practice: Create a posts list from API"
          ]
        },
        38: {
          title: "Form Handling",
          time: "1-1.5 hours",
          tasks: [
            "Controlled vs uncontrolled components",
            "Multiple input fields",
            "Form validation in React",
            "Practice: Create a contact form with validation"
          ]
        },
        39: {
          title: "Component Communication",
          time: "1-1.5 hours",
          tasks: [
            "Passing data up with callback functions",
            "Lifting state up",
            "Props drilling basics",
            "Practice: Parent-child communication exercises"
          ]
        },
        40: {
          title: "React Project - Part 2",
          time: "1.5-2 hours",
          tasks: [
            "Complete Todo App: Edit todo functionality",
            "Delete todos feature",
            "Mark as complete with state updates",
            "Filter todos (all, active, completed)"
          ]
        },
        41: {
          title: "Styling in React",
          time: "1-1.5 hours",
          tasks: [
            "CSS modules in React",
            "Styled-components basics",
            "Conditional classes",
            "Practice: Style your todo app beautifully"
          ]
        },
        42: {
          title: "React Final Project",
          time: "2-3 hours",
          tasks: [
            "Enhanced Todo App with all features",
            "API integration for data persistence",
            "Professional styling and user experience",
            "Error handling and loading states"
          ]
        }
      }
    },
    7: {
      title: "Next.js Basics - Week 7",
      subtitle: "Full-Stack React Framework",
      days: {
        43: {
          title: "Next.js Setup and Routing",
          time: "1.5-2 hours",
          tasks: [
            "What is Next.js and its benefits",
            "Create Next.js project",
            "File-based routing system",
            "Pages and navigation between routes"
          ]
        },
        44: {
          title: "Static Generation and SSR",
          time: "1-1.5 hours",
          tasks: [
            "getStaticProps for static generation",
            "getServerSideProps for SSR",
            "When to use each approach",
            "Practice: Create pages with both methods"
          ]
        },
        45: {
          title: "API Routes",
          time: "1-1.5 hours",
          tasks: [
            "Creating API endpoints in Next.js",
            "Handling different HTTP methods",
            "Connecting frontend to API routes",
            "Practice: Create a simple API for your data"
          ]
        },
        46: {
          title: "Dynamic Routes",
          time: "1-1.5 hours",
          tasks: [
            "Dynamic routing with [id].js",
            "getStaticPaths for dynamic static generation",
            "Nested routes",
            "Practice: Create a blog with individual post pages"
          ]
        },
        47: {
          title: "Styling and Images",
          time: "1-1.5 hours",
          tasks: [
            "CSS Modules in Next.js",
            "Next.js Image component for optimization",
            "Global styles and custom App component",
            "Practice: Style your Next.js app properly"
          ]
        },
        48: {
          title: "Deployment",
          time: "1-1.5 hours",
          tasks: [
            "Deploy to Vercel (easiest option)",
            "Environment variables setup",
            "Build optimization",
            "Practice: Deploy your Next.js project live"
          ]
        },
        49: {
          title: "Final Next.js Project",
          time: "2-3 hours",
          tasks: [
            "Capstone: Personal Portfolio or Blog",
            "Multiple pages with routing",
            "API integration and dynamic routes",
            "Professional styling and deployment"
          ]
        }
      }
    }
  };

  // Load completed tasks and notes from memory on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage?.getItem('learningProgress') || '{}');
    const savedNotes = JSON.parse(localStorage?.getItem('learningNotes') || '{}');
    setCompletedTasks(savedTasks);
    setDailyNotes(savedNotes);
  }, []);

  // Save progress to memory whenever completedTasks changes
  useEffect(() => {
    try {
      localStorage?.setItem('learningProgress', JSON.stringify(completedTasks));
    } catch (e) {
      // Fallback if localStorage is not available
    }
  }, [completedTasks]);

  // Save notes to memory whenever dailyNotes changes
  useEffect(() => {
    try {
      localStorage?.setItem('learningNotes', JSON.stringify(dailyNotes));
    } catch (e) {
      // Fallback if localStorage is not available
    }
  }, [dailyNotes]);

  const saveNote = (week, day) => {
    const key = `${week}-${day}`;
    setDailyNotes(prev => ({
      ...prev,
      [key]: currentNote
    }));
    setCurrentNote('');
  };

  const loadNote = (week, day) => {
    const key = `${week}-${day}`;
    setCurrentNote(dailyNotes[key] || '');
  };

  const toggleTask = (week, day, taskIndex) => {
    const key = `${week}-${day}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getWeekProgress = (weekNum) => {
    const week = learningPlan[weekNum];
    if (!week) return 0;
    
    let totalTasks = 0;
    let completedCount = 0;
    
    Object.keys(week.days).forEach(day => {
      const dayTasks = week.days[day].tasks;
      totalTasks += dayTasks.length;
      
      dayTasks.forEach((_, taskIndex) => {
        const key = `${weekNum}-${day}-${taskIndex}`;
        if (completedTasks[key]) completedCount++;
      });
    });
    
    return Math.round((completedCount / totalTasks) * 100);
  };

  const getDayProgress = (weekNum, dayNum) => {
    const week = learningPlan[weekNum];
    if (!week || !week.days[dayNum]) return 0;
    
    const dayTasks = week.days[dayNum].tasks;
    const completedCount = dayTasks.filter((_, taskIndex) => {
      const key = `${weekNum}-${dayNum}-${taskIndex}`;
      return completedTasks[key];
    }).length;
    
    return Math.round((completedCount / dayTasks.length) * 100);
  };

  const getCurrentDay = () => {
    // Simple logic to suggest current day based on progress
    for (let week = 1; week <= 7; week++) {
      for (let day = 1; day <= 7; day++) {
        if (getDayProgress(week, day) < 100) {
          return { week, day };
        }
      }
    }
    return { week: 7, day: 49 }; // All completed
  };

  const currentDay = getCurrentDay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 JavaScript to Next.js Learning Journey
          </h1>
          <p className="text-lg text-gray-600">
            Your 49-day path from beginner to building real web applications
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-700">Current Progress</h3>
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-blue-600">
              Week {currentDay.week}, Day {currentDay.day}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-700">This Week</h3>
              <Target className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-600">
              {getWeekProgress(currentWeek)}% Complete
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-700">Today's Focus</h3>
              <BookOpen className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-sm font-medium text-purple-600">
              {learningPlan[currentDay.week]?.days[currentDay.day]?.title || "All Done!"}
            </div>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5, 6, 7].map(week => (
            <button
              key={week}
              onClick={() => setCurrentWeek(week)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentWeek === week
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Week {week}
              <div className="text-xs mt-1">
                {getWeekProgress(week)}%
              </div>
            </button>
          ))}
        </div>

        {/* Current Week Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {learningPlan[currentWeek]?.title}
            </h2>
            <p className="text-gray-600">
              {learningPlan[currentWeek]?.subtitle}
            </p>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learningPlan[currentWeek] && Object.keys(learningPlan[currentWeek].days).map(dayNum => {
              const day = learningPlan[currentWeek].days[dayNum];
              const dayProgress = getDayProgress(currentWeek, dayNum);
              const isToday = currentDay.week === currentWeek && currentDay.day == dayNum;
              
              return (
                <div
                  key={dayNum}
                  className={`border rounded-lg p-4 transition-all ${
                    isToday 
                      ? 'border-blue-400 bg-blue-50 shadow-md' 
                      : dayProgress === 100 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        {isToday && <span className="text-blue-600">👉</span>}
                        Day {dayNum}: {day.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Clock className="w-4 h-4" />
                        {day.time}
                      </div>
                    </div>
                    <div className={`text-sm font-medium px-2 py-1 rounded ${
                      dayProgress === 100 
                        ? 'bg-green-100 text-green-700' 
                        : dayProgress > 0 
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      {dayProgress}%
                    </div>
                  </div>

                  <div className="space-y-2">
                    {day.tasks.map((task, taskIndex) => {
                      const key = `${currentWeek}-${dayNum}-${taskIndex}`;
                      const isCompleted = completedTasks[key];
                      
                      return (
                        <div
                          key={taskIndex}
                          className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleTask(currentWeek, dayNum, taskIndex)}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${
                            isCompleted 
                              ? 'text-gray-500 line-through' 
                              : 'text-gray-700'
                          }`}>
                            {task}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Daily Notes Section */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Daily Notes & Reflections</span>
                    </div>
                    
                    {dailyNotes[`${currentWeek}-${dayNum}`] && (
                      <div className="mb-2 p-2 bg-blue-50 rounded text-sm text-gray-700 border-l-2 border-blue-300">
                        <strong>Previous note:</strong> {dailyNotes[`${currentWeek}-${dayNum}`]}
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <textarea
                        placeholder={`Add your notes for Day ${dayNum}... What did you learn? Any challenges? Victories?`}
                        value={currentNote}
                        onChange={(e) => setCurrentNote(e.target.value)}
                        onFocus={() => loadNote(currentWeek, dayNum)}
                        className="flex-1 p-2 border border-gray-300 rounded text-sm resize-none"
                        rows="2"
                      />
                      <button
                        onClick={() => saveNote(currentWeek, dayNum)}
                        disabled={!currentNote.trim()}
                        className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-1"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="font-semibold mb-2">💡 Daily Success Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>• Consistency beats intensity - 1-2 hours daily is perfect</div>
            <div>• Code along with examples, don't just read</div>
            <div>• Debug errors actively - they're learning opportunities</div>
            <div>• Review yesterday's work for 5 minutes before starting</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTracker;