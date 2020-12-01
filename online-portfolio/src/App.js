import "./App.css";
import logo from "./assets/Logo.png";
import title from "./assets/Asset6.png";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <img className="logo" src={logo} />
      </div>
      <div className="Body">
        <div className="SideBar">
          <div className="SideContent">
            <div className="SideTitle">
              <img src={title}></img>
            </div>
            <div className="SideText">
              <i>
                I am an adaptable and driven individual with a versatile
                skillset that uniquely binds design and engineering principles.
                <br></br>
                <br></br>I have a passion for developing hardware and software
                of products using my innovative thinking and unique skillset to
                creatively solve problems.
              </i>
            </div>
            <div className="SideFooter">
              <button>RESUME</button>
            </div>
          </div>
        </div>
        <div className="ContentHolder">
          <div className="Content">
            <div className="ContentTitle">My Story</div>
            <div className="ContentText">
              <button>EDUCATION</button> &nbsp;
              <button>SWLTKK</button> &nbsp;
              <button>MY HOBBIES</button> &nbsp;
              <button>THE SUMMER SHOW</button>
            </div>
            <div className="ContentFooter">Scroll to see more...</div>
          </div>
          <div className="Content">
            <div className="ContentTitle">Education</div>
            <div className="ContentText"></div>
            <div className="ContentFooter">Scroll to see more...</div>
          </div>
        </div>
      </div>
      <div className="LinkBar"></div>
    </div>
  );
}

export default App;
