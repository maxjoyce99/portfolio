import logo from './logo.svg';
import './App.css';

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
      <div>
        <h2>Hi, I'm Max Joyce</h2>
        <p>Fullstack software engineer with experience using Javascript, React, Node.js, HTML, CSS, and MongoDB to create web applications. Experience using Docker and Kubernetes to containerize and deploy web applications. Also proficient with SQL, QML, Python,  and C++.</p>
      </div>
      <section>
        <h2>Skills</h2>
        <div class="all_skills">
          <div class="skill">
            <img src="html_finalprojimages/html5.png"/>
            <h6>HTML</h6>
            <p>2 years experience</p>
          </div>  

          <div class="skill">
            <img src="html_finalprojimages/js.jpeg"/>
            <h6>JavaScript</h6>
            <p>3 years experience</p>
          </div>  
        </div>
        

      </section>

      <div>
        <h2>Projects</h2>
        
        <a href="https://wherehaveibeenfrontend-production.up.railway.app/">WhereHaveIBeen</a>

      </div>
    </body>
    </>
  );
}

export default App;
