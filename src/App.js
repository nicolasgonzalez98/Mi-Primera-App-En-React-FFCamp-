import logo from './logo.svg';
import Testimonios from './components/Testimonios';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonios
          foto='Shawn' 
          name='Shawn Wang'
          country='Singapore'
          enterprise='Amazon'
          opinion="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonios
          foto='Sarah' 
          name='Sarah Chima'
          country='Nigeria'
          enterprise='ChatDesk'
          opinion="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonios
          foto='Emma' 
          name='Emma Bostian'
          country='Sweden'
          enterprise='Spotify'
          opinion="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
