export const classOfBadges = [
  // styles with borders (4 clases cada uno)
  "outline outline-1 outline-blue-300 bg-blue-500/30 rounded-bl-lg rounded-tr-lg text-blue-300",
  "outline outline-1 outline-cyan-300 bg-cyan-500/30 rounded-bl-lg rounded-tr-lg text-cyan-300",
  "outline outline-1 outline-red-300 bg-red-500/30 rounded-bl-lg rounded-tr-lg text-red-300",
  "outline outline-1 outline-green-300 bg-green-500/30 rounded-bl-lg rounded-tr-lg text-green-300",
  // Gradient styles without borders (4 clases cada uno)
  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md shadow-sm",
  "bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md shadow-sm",
  "bg-gradient-to-r from-gray-500 to-warm-gray-500 text-white rounded-md shadow-sm",
  "bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md shadow-sm",
  // Solid colors (4 clases cada uno)
  "bg-blue-500 rounded-full text-white shadow-md",
  "bg-red-500 rounded-md text-white shadow-md",
  "bg-green-500 rounded-lg text-white shadow-md",
  "bg-indigo-500 rounded-xl text-white shadow-md",
  // Asymmetrical rounded corners (4 clases cada uno)
  "bg-yellow-500 rounded-tl-lg rounded-br-lg text-white shadow-sm",
  "bg-yellow-600/20 rounded-tl-lg rounded-br-lg text-yellow-200 shadow-sm",
  "bg-yellow-950/40 rounded-tl-lg rounded-br-lg text-yellow-200 shadow-sm",
  "bg-pink-500/70 rounded-bl-lg rounded-tr-lg text-pink-100 shadow-sm",
  // Additional creative styles (4 clases cada uno)
  "bg-gradient-to-b from-cyan-500 to-sky-500 border-b-2 border-cyan-700 text-white",
  "bg-gradient-to-b from-rose-500 to-pink-500 border-b-2 border-rose-700 text-white",
  "bg-gradient-to-r from-emerald-500 to-green-500 border-l-2 border-emerald-700 text-white",
  "bg-gradient-to-r from-amber-500 to-yellow-500 border-r-2 border-amber-700 text-white",
];

export const classOfButtons = [
  // Button with outline
  "bg-neutral-950 text-neutral-100 outline outline-1 outline-neutral-200 rounded-md hover:bg-neutral-800 transition duration-200",
  "bg-green-950 text-green-100 outline outline-1 outline-green-200 rounded-md hover:bg-green-800 transition duration-200",
  "bg-teal-950 text-teal-100 outline outline-1 outline-teal-200 rounded-md hover:bg-teal-800 transition duration-200",
  "bg-cyan-950 text-cyan-100 outline outline-1 outline-cyan-200 rounded-md hover:bg-cyan-800 transition duration-200",
  // Button with border circle
  "bg-indigo-300 rounded-full text-indigo-100",
  "bg-pink-300 rounded-full text-pink-100",
  "bg-emerald-300 rounded-full text-emerald-100",
  "bg-yellow-300 rounded-full text-yellow-800",
  // Button with border and shadow
  "border-2 border-orange-400 hover:border-orange-600 text-orange-400 hover:text-orange-600 bg-orange-100 hover:bg-orange-200 rounded-full shadow-inner-md",
  "border-2 border-emerald-400 hover:border-emerald-600 text-emerald-400 hover:text-emerald-600 bg-emerald-100 hover:bg-emerald-200 rounded-full shadow-inner-md",
  "border-2 border-purple-700 hover:border-purple-900 text-purple-700 hover:text-purple-900 bg-purple-200 hover:bg-purple-300 rounded-full shadow-inner-md",
  "border-2 border-red-700 hover:border-red-900 text-red-700 hover:text-red-900 bg-red-200 hover:bg-red-300 rounded-full shadow-inner-md",
  // Button Gradient
  "bg-gradient-to-br from-pink-400 to-purple-500 text-white hover:from-purple-500 to-violet-600 font-bold rounded-lg shadow-md hover:shadow-lg",
  "bg-gradient-to-b from-fuchsia-300 to-purple-400 text-white rounded",
  "bg-gradient-to-r from-lime-300 to-green-400 text-white rounded",
  "bg-gradient-to-t from-amber-300 to-yellow-400 text-white rounded",
  // Button with blur
  "bg-gradient-to-r from-teal-400 to-teal-600 via-teal-500 hover:from-teal-600 to-teal-800 via-teal-700 text-white font-bold rounded blur-sm hover:blur-none",
  "bg-gradient-to-r from-green-400 to-green-600 via-green-500 hover:from-green-600 to-green-800 via-green-700 text-white font-bold rounded blur-sm hover:blur-none",
  "bg-gradient-to-r from-indigo-400 to-indigo-600 via-indigo-500 hover:from-indigo-600 to-indigo-800 via-indigo-700 text-white font-bold rounded blur-sm hover:blur-none",
  "bg-gradient-to-r from-rose-400 to-rose-600 via-rose-500 hover:from-rose-600 to-rose-800 via-rose-700 text-white font-bold rounded blur-sm hover:blur-none",
  // Button neumorphism dark
  "bg-[#1e1e1e] text-white rounded-xl shadow-[8px_8px_15px_#0f0f0f,-8px_-8px_15px_#2e2e2e] hover:shadow-inner transition-all",
  "bg-[#2a2a2a] text-gray-200 rounded-lg shadow-[4px_4px_10px_#1a1a1a,-4px_-4px_10px_#3a3a3a] hover:shadow-[inset_2px_2px_5px_#1a1a1a,inset_-2px_-2px_5px_#3a3a3a] transition-all",
  "bg-neutral-800 text-neutral-100 rounded-full shadow-[6px_6px_12px_#121212,-6px_-6px_12px_#2e2e2e] hover:brightness-110 transition",
  "bg-gray-900 text-white font-semibold rounded-md shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-2px_-2px_5px_rgba(0,0,0,0.2)] hover:shadow-none transition",
  // Button glassmorphism modern
  "bg-white/10 backdrop-blur-md text-pink-100 border border-pink-300/30 rounded-lg hover:bg-pink-200/10 hover:text-white transition",
  "bg-white/10 backdrop-blur-md text-sky-100 border border-sky-300/30 rounded-lg hover:bg-sky-200/10 hover:text-white transition",
  "bg-white/10 backdrop-blur-md text-violet-100 border border-violet-300/30 rounded-lg hover:bg-violet-200/10 hover:text-white transition",
  "bg-white/10 backdrop-blur-md text-lime-100 border border-lime-300/30 rounded-lg hover:bg-lime-200/10 hover:text-white transition",
];

export const classOfInputs = [
  // Categoría 1: Minimalismo Moderno con Efectos de Foco
  "px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-300",
  "px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full transition-all duration-300",
  "px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 w-full transition-all duration-300",
  "px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 w-full transition-all duration-300",

  // Categoría 2: Glassmorphism con Fondo Translúcido
  "px-4 py-2 bg-white/10 text-white border border-white/20 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-cyan-400 w-full transition-all duration-300",
  "px-4 py-2 bg-blue-500/10 text-white border border-blue-500/20 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-blue-400 w-full transition-all duration-300",
  "px-4 py-2 bg-purple-500/10 text-white border border-purple-500/20 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-purple-400 w-full transition-all duration-300",
  "px-4 py-2 bg-green-500/10 text-white border border-green-500/20 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-green-400 w-full transition-all duration-300",

  // Categoría 3: Gradientes Suaves con Sombra
  "px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-900 border border-transparent rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300",
  "px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 text-gray-900 border border-transparent rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300",
  "px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 text-gray-900 border border-transparent rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300",
  "px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 text-gray-900 border border-transparent rounded-lg shadow-sm hover:shadow-md w-full transition-all duration-300",

  // Categoría 4: Estilo Futurista con Efecto Neón
  "px-4 py-2 bg-gray-900 text-white border border-cyan-400 rounded-lg hover:shadow-[0_0_10px_#00f7ff] focus:ring-2 focus:ring-cyan-400 w-full transition-all duration-300",
  "px-4 py-2 bg-gray-900 text-white border border-pink-400 rounded-lg hover:shadow-[0_0_10px_#ff2e91] focus:ring-2 focus:ring-pink-400 w-full transition-all duration-300",
  "px-4 py-2 bg-gray-900 text-white border border-lime-400 rounded-lg hover:shadow-[0_0_10px_#b7ff2e] focus:ring-2 focus:ring-lime-400 w-full transition-all duration-300",
  "px-4 py-2 bg-gray-900 text-white border border-orange-400 rounded-lg hover:shadow-[0_0_10px_#ff8c2e] focus:ring-2 focus:ring-orange-400 w-full transition-all duration-300",
];
