import './App.css';

function AppColor(props) {
  function changeBackground(e) {
    // Change the background color of the document
    document.body.style.backgroundColor = e.target.value;

    // Display a greeting alert
    alert("Welcome, " + document.getElementById(props.color).value);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <p style={{ color: 'blue', fontSize: '20px' }}>Click the button to change the background color!</p>
      <label>{props.lbl}</label>
      <input id={props.color} type="text" placeholder="Enter your name" />
      <button value={props.color} onClick={changeBackground}>
        Change to {props.color}
      </button>
    </div>
  );
}

export default AppColor;
