import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import js from './images/js.jpeg';
import CSS3 from './images/CSS3.png';
import html5 from './images/html5.png';
import node from './images/node.png';
import react from './images/react.png';
import me_hot_spring from './images/me_hot_spring.jpg'
import resume from './images/Maxwell_Joyce_Resume.pdf'


function App() {
  return (
    <>
    <header class="d-flex flex-box w-100 bg-dark" style={{ height: '75px' }}>

      <nav class="navbar navbar-expand navbar-dark w-75 h-100">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#about">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
        </ul>

        
      </nav>

      <div class ="w-25 h-100">
            <p class ="text-end p-2" >Maxwell Joyce<br></br>
            maxjoyce99@gmail.com |
            774-278-1935
            </p>
        </div>
    </header>

    <body class="App">
      <section id="about" class="w-75 mx-auto" style={{ height: '300px' }}>
        <div class="d-flex justify-content-center flex-box h-100 p-4">
          <img class ="w-25 h-100" src={me_hot_spring}/>
          <div class="w-50 h-75 m-2">
            <h2 class="w-100 h-25 align-self-center">Hi, I'm Max Joyce!</h2>
            <p class="w-100 h-50 p-2"> I am a fullstack software engineer with experience using 
              Javascript, React, Node.js, HTML, CSS, and MongoDB to create web applications. 
              I also have experience using Docker and Kubernetes to containerize and deploy web applications. 
              Also proficient with SQL, QML, Python,  and C++.</p>
            <div class="w-100 h-25 mt-3 jusfity-content-center">
              <h5>More About Me: </h5>

              <a class="m-2" href={resume} target="_blank"
                      rel="noreferrer">
                      Resume
              </a>

              <a class="m-2" href="https://www.linkedin.com/in/maxwell-joyce-66b753112">
                      LinkedIn
              </a>

            </div>

          </div>
         
        </div>
      </section>

      <section id="skills" class="w-50 mx-auto m-4 " style={{ height: '200px' }}>
        <h2>Skills</h2>
        <div class="row h-75" >

          <div class="col d-flex flex-column align-items-center justify-content-center border border-white h-100 p-2 m-2 rounded">
              <img class ="img-fluid" src={react}/>
              <h6>React</h6>
          </div>

          <div class="col d-flex flex-column align-items-center justify-content-center border border-white h-100 p-2 m-2 rounded">
            <img class ="img-fluid" src={node}/>
            <h6>Node.js</h6>
          </div>

          <div class="col d-flex flex-column align-items-center justify-content-center border border-white h-100 p-2 m-2 rounded">
            <img class ="img-fluid" src={html5}/>
            <h6>HTML</h6>
          </div>  

          <div class="col d-flex flex-column align-items-center justify-content-center border border-white h-100 p-2 m-2 rounded">
            <img class ="img-fluid" src={js}/>
            <h6>JavaScript</h6>
          </div>

          <div class="col d-flex flex-column align-items-center justify-content-center border border-white h-100 p-2 m-2 rounded">
            <img class ="img-fluid" src={CSS3}/>
            <h6>CSS</h6>
          </div>

        </div>
        

      </section>

      <section id="projects" class="w-75 mx-auto mt-4" style={{ height: '500px' }}>
        <h2>Projects</h2>
        <div class="d-flex flex-row justify-content-center justify-content-between">
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
