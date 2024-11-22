import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import js from './images/js.jpeg';
import CSS3 from './images/CSS3.png';
import html5 from './images/html5.png';
import node from './images/node.png';
import react from './images/react.png';
import me_hot_spring from './images/me_hot_spring.jpg'


function App() {
  return (
    <>
    <header>
      <p>Maxwell Joyce
        maxjoyce99@gmail.com
        774-278-1935
        Make a menu to scroll down faster
      </p>
    </header>

    <body className="App">
      <section class="w-75 mx-auto" style={{ height: '300px' }}>
        <div class="d-flex flex-box h-100">
          <img class ="w-25 h-100 m-2" src={me_hot_spring}/>
          <div class="w-50 h-75 m-2">
            <h2 class=" w-50 h-25">Hi, I'm Max Joyce!</h2>
            <p class="w-100 h-50"> I am a fullstack software engineer with experience using Javascript, React, Node.js, HTML, CSS, and MongoDB to create web applications. I also have experience using Docker and Kubernetes to containerize and deploy web applications. Also proficient with SQL, QML, Python,  and C++.</p>
            <div class="w-50 h-25">
            <h5>Relevant Links: Resume LinkedIn</h5>
            </div>

          </div>
         
        </div>
      </section>

      <section class="w-50 mx-auto" style={{ height: '300px' }}>
        <h2>Skills</h2>
        <div class="row justify-content-xl-between h-50" >
          <div class="skills_card col border border-white h-100 p-2 m-2 rounded ">
            <img class ="img-fluid" src={html5}/>
            <h6>HTML</h6>
          </div>  

          <div class="col border border-white h-100 p-2 m-2 rounded ">
            <img class ="img-fluid" src={js}/>
            <h6>JavaScript</h6>
          </div>

          <div class="col border border-white h-100 p-2 m-2 rounded ">
            <img class ="img-fluid" src={node}/>
            <h6>Node.js</h6>
          </div>

          <div class="col border border-white h-100 p-2 m-2 rounded ">
            <img class ="img-fluid" src={react}/>
            <h6>React</h6>
          </div>

          <div class="col border border-white h-100 p-2 m-2 rounded ">
            <img class ="img-fluid" src={CSS3}/>
            <h6>CSS</h6>
          </div>

        </div>
        

      </section>

      <section class="w-75 mx-auto" style={{ height: '500px' }}>
        <h2>Projects</h2>
        <div class="d-flex flex-row mb-3 justify-content-center justify-content-between">
          <div class="rounded border w-50 p-2 m-2">
            <a href="https://wherehaveibeenfrontend-production.up.railway.app/">WhereHaveIBeen</a>
            <ul>    
              <li> Created a location-based picture-sharing web application using the MERN stack (MongoDB, React, Node.js, Express) and Leaflet</li>
              <li> Integrated a front end, back end, and database, highlighting full-stack development skills</li>
              <li> Implemented user profiles with maps and image points for each user</li>
              <li> Added functionality for users to connect and befriend each other</li>
              <li> Example Credentials</li>
              </ul>
          </div>

          <div class="rounded border w-50 p-2 m-2">
            <a href="https://google.com">Deadlock build website</a>
            <ul>    
              <li> Created a location-based picture-sharing web application using the MERN stack (MongoDB, React, Node.js, Express) and Leaflet</li>
              <li> Integrated a front end, back end, and database, highlighting full-stack development skills</li>
              <li> Implemented user profiles with maps and image points for each user</li>
              <li> Added functionality for users to connect and befriend each other</li>
              </ul>
          </div>

        </div>

        
      </section>
    </body>
    </>
  );
}

export default App;
