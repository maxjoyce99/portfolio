import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import js from './images/js.jpeg';
import CSS3 from './images/CSS3.png';
import html5 from './images/html5.png';
import node from './images/node.png';
import react from './images/react.png';


function App() {
  return (
    <>
    <header>
      <p>Maxwell Joyce
        maxjoyce99@gmail.com
        774-278-1935
      </p>
    </header>

    <body className="App">
      <section class="w-50 mx-auto" style={{ height: '300px' }}>
        <h2>Hi, I'm Max Joyce</h2>
        <p>Fullstack software engineer with experience using Javascript, React, Node.js, HTML, CSS, and MongoDB to create web applications. Experience using Docker and Kubernetes to containerize and deploy web applications. Also proficient with SQL, QML, Python,  and C++.</p>
        <div>
          <h5>More about Me:</h5>
          <ul>
            <li> Resume</li>
            <li>  LinkedIn</li>
            
          </ul>
          </div>
      </section>

      <section class="w-50 mx-auto" style={{ height: '300px' }}>
        <h2>Skills</h2>
        <div class="row justify-content-xl-between h-50" >
          <div class="skills_card col border border-white h-100 p-2 rounded ">
            <img class ="img-fluid" src={html5}/>
            <h6>HTML</h6>
          </div>  

          <div class="col border border-white h-100 p-2 rounded ">
            <img class ="img-fluid" src={js}/>
            <h6>JavaScript</h6>
          </div>

          <div class="col border border-white h-100 p-2 rounded ">
            <img class ="img-fluid" src={node}/>
            <h6>Node.js</h6>
          </div>

          <div class="col border border-white h-100 p-2 rounded ">
            <img class ="img-fluid" src={react}/>
            <h6>React</h6>
          </div>

          <div class="col border border-white h-100 p-2 rounded ">
            <img class ="img-fluid" src={CSS3}/>
            <h6>CSS</h6>
          </div>

        </div>
        

      </section>

      <section class="w-50 mx-auto">
        <h2>Projects</h2>
        <div class="d-flex flex-row mb-3 justify-content-center">
          <div class="w-20 p-2">
            <a href="https://wherehaveibeenfrontend-production.up.railway.app/">WhereHaveIBeen</a>
          </div>

          <div class="p-2">
            <a href="https://wherehaveibeenfrontend-production.up.railway.app/">WhereHaveIBeen</a>
          </div>

        </div>
      </section>
    </body>
    </>
  );
}

export default App;
