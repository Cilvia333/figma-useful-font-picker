import {h, FunctionComponent as FC, render} from 'preact';
import 'tailwindcss/tailwind.css';

const App: FC = () => {
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

render(<App />, document.getElementById('app') ?? document.body);
