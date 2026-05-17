import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Corolas AI 教育平台
        </h1>
        <p className="text-xl text-slate-300">edurola.corolas.top</p>
        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <p className="text-slate-400 mb-4">Corolas 子项目初始化完成</p>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors font-medium"
          >
            点击次数: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
