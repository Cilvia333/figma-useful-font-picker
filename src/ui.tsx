import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App: React.FC = () => {
    return (<div>
      <h2>Rectangle Creator</h2>
      <p>Count:</p>
      <button id="create">Create</button>
      <button >Cancel</button>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))