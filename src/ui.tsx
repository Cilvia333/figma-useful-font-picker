import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <div>
      <h2>Rectangle Creator</h2>
      <p>Count:</p>
      <button id="create" className="text-red-500">
        Create
      </button>
      <button>Cancel</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
