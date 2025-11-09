
// assets/js/main.js
document.addEventListener('DOMContentLoaded', ()=>{

  // Typewriter for the message on accueil
  const message = `Hyati Mn nhar 3rftk w 9lbi wlla 3ndo ma3na jdid. Kola nhar m3ak kaybda m3ak w kaytsala m3ak bklma zwina mnk. Kat3rfi, nti li dkhlti lhyati obdltiha wli kant dalma  waliti nti nnoor.
M3ak 3rft achno howa ihsas chi had hnin fik, M3ak walit kan7ss blamn, w kola mara kandwi m3ak, kan9ol f rasi hmd yaaarbi 3la 3awdk lya yarbi , dhktk ktnsini w9t 3ya, w klma mnk kt9dar t9lb nhari.knb5iiik amariem Nti li kat3rfi tkouni dawa dyali fw9t chda.Rani ana anmoot m3aak , wbritk whd l9lb li byd osafii mn l5dr. Ghanb9a m3ak f kol 7ala, f lfar7 w f l7zn, f skt w f d7k, 7it knb5ik oknmot 3lik Kantmna had lktaba twsl l9lbk, b nafs lihsas li ktbto biha amariem . 7it nti li knb5ik bklchi li fik, w 7it mlli kanfkr fik knhmd rbi hit l9ani bik.Bghitk, w bghitk tsm3iha mn 9lbRani m3ak dima w tnmot`;

  const el = document.querySelector('.typewriter');
  if(el){
    let i=0;
    function step(){
      if(i<=message.length){
        el.textContent = message.slice(0,i);
        i++;
        setTimeout(step, 20);
      } else {
        // stop cursor
      }
    }
    step();
  }

  // Heart game: heart moves when mouse tries to click it
  const heart = document.getElementById('play-heart');
  if(heart){
    heart.addEventListener('mouseenter', ()=>{
      const x = Math.random()*70 - 35;
      const y = Math.random()*40 - 20;
      heart.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    });
    heart.addEventListener('click', ()=>{
      alert('Bravo! 3jbk l9lb ❤️
Mariem, hadi lik men ' + (document.getElementById('site-owner')?.textContent || '...'));
    });
  }

  // Simple quiz logic
  const quizForm = document.getElementById('quiz-form');
  if(quizForm){
    quizForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const answers = new FormData(quizForm);
      let score = 0;
      if(answers.get('q1') === 'you') score++;
      if(answers.get('q2') === '26/10') score++;
      const out = document.getElementById('quiz-result');
      out.textContent = `نتيجة: ${score} / 2`;
    });
  }

  // Images slideshow on souvenirs page
  let idx = 0;
  const slides = document.querySelectorAll('.slideshow img');
  if(slides.length){
    setInterval(()=>{
      slides.forEach((s,i)=> s.style.display = (i===idx?'block':'none'));
      idx = (idx+1)%slides.length;
    }, 3000);
  }
});
