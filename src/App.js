import logo from './logo.svg';
import './App.css';
import sister from './assets/images/me_and_sister.jpg';
import holly from './assets/images/holly.jpg';


function App() {
  function buttonFunction() {
    alert('You clicked the button!');
  }
  const onChangeFunction = (event) => {
    console.log(event.target.value);
  }
  
  const familyList = ["John", "Mario", "Sydney", "Holly"];
  const familyMap = familyList.map((family) => {
    return (
      <p>My family member's name is {family}</p>
    )
  });
  return (
    
    <div className="App">
      <head>
    <title>About Me</title>
</head>

<body>
    <h1>About Me:</h1>
</body>

<body>
    <div>
        <h2>I am Shelby</h2>

        <div>
            <p>I am from Palm Springs, California. I have a dog named Holly, who is 11 years old. I have a twin sister.
        I really enjoy playing the guitar, playing basketball, and listening to some good music. I'm excited to get 
        started on this course!
            </p>
        </div>
        <div className = "Location">
          <p>Where are you from?</p>
          <input type="text" onChange={onChangeFunction} />
        </div>
    </div>
    
    <div className = "Family">
      <p>{familyMap}</p>
    </div>

    <div>
        <p>Here is a picture of me and my sister, and another picture of my dog!</p>
        <img src={sister}
            width = "500"
            height = "700"/>
        <img src={holly}
            width = "500"
            height = "700"/>
    </div>

    <div className = "ButtonTest">
      <button onClick={buttonFunction}>Click me</button>
    </div>
</body>
    </div>
  );
}

export default App;
