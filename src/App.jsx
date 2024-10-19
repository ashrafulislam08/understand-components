function App() {
  return (
    <div
      style={{
        width: "60%",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "10px",
        }}
      >
        <h3>Sing Up</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <form>
        <div>
          <label htmlFor="name">What is your name?</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">What is your email?</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">What is your password?</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
