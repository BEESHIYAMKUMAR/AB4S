import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section id="mySkills">
      <div class="container-fluid features" id="skills">
      <div class="container cf">
      <h2>Skills &amp; Experience</h2>   
      <br></br>
      <br></br>
      <br></br>
      <p>That's a fantastic foundation! Passionate, engaged, caring, and driven individuals can bring a lot of energy and commitment to any endeavor. If you're part of a group with these qualities, you already have a strong basis for success.</p>
      <br></br>
      <br></br>
      <div class="slider-container">
        <span class="arrow-left"></span>
        <span class="arrow-right"></span>
        <div class="slider" id="slider">  
          <div class="slide active">
            <h3>#1 - Expert tutors</h3>
            <p>Our expert tutors are like superheroes of knowledge, leading the way for students to learn and grow. They're really good at teaching and making sure everyone understands and feels confident in what they're learning.</p>
          </div>
          <div class="slide next-1">            
            <h3>#2 - Share knowledge</h3>
            <p>AB4S offers classes in Math, Physics, Chemistry, and Biology for all curricula, covering IGCSE, GCSE, IBMYP, IBDP, State syllabus, and CBSE from classes 8 to 12. We also provide career counseling to help students navigate their educational journey and future paths.</p>
          </div>
          <div class="slide next-2">
            <h3>#3 - Trust</h3>
            <p>With a commitment to trust, AB4S are dedicated to connecting you with the ideal teacher who embodies passion, expertise, and a genuine commitment to your learning journey.</p>
          </div>
          <div class="slide">
            <h3>#4 - Learn confidently</h3>
            <p>Empower yourself and learn confidently, knowing that your journey is supported by a dedicated and knowledgeable team committed to your success  - AB4S offer the best in education to learn & share confidently.</p>
          </div>
        </div>
      </div>
      </div>  
    </div>
    </section>
  );
}
