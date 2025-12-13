import './App.css'

function App() {
  return (
    <div>
      <input
        className="title"
        type="text"
        id="title"
        maxLength={20}
        placeholder="Title"
        disabled={false}
      />
    </div>
  )
}

export default App
