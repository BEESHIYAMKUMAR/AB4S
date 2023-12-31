import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div class="container-fluid features" id="skills">
      <div class="container cf">
      <h2>Skills &amp; Experience</h2>   
      <p>That's a fantastic foundation! Passionate, engaged, caring, and driven individuals can bring a lot of energy and commitment to any endeavor. If you're part of a group with these qualities, you already have a strong basis for success.</p>
      <div class="slider-container">
        <span class="arrow-left"></span>
        <span class="arrow-right"></span>
        <div class="slider" id="slider">          
          <div class="slide active">
              <h3>#1 - Our Mission</h3>
              <p> Our mission is to provide expectional online tutoring that unlocks the full potential of every learner. We are dedicated to fostering a dynamic learning environment where personalized guidance, innovative teaching methods and a commitment to excellence come together.</p>           
          </div>
          <div class="slide next-1">
              <h3>#2 - Our Vision</h3>
              <p>To be the global leader in online education, empowering students to realize their full potential and achieve academic excellence regardless of their geographic location or socio-economic background.</p>
          </div>
          <div class="slide next-2">
            <h3>#3 - Expert tutors</h3>
            <p>Our expert tutors are like superheroes of knowledge, leading the way for students to learn and grow. They're really good at teaching and making sure everyone understands and feels confident in what they're learning.</p>
          </div>
          <div class="slide">            
            <h3>#4 - Share knowledge</h3>
            <p>AB4S offers classes in Math, Physics, Chemistry, and Biology for all curricula, covering IGCSE, GCSE, IBMYP, IBDP, State syllabus, and CBSE from classes 8 to 12. We also provide career counseling to help students navigate their educational journey and future paths.</p>
          </div>
          <div class="slide">
            <h3>#6 - Trust</h3>
            <p>With a commitment to trust, AB4S are dedicated to connecting you with the ideal teacher who embodies passion, expertise, and a genuine commitment to your learning journey.</p>
          </div>
          <div class="slide">
            <h3>#7 - Learn confidently</h3>
            <p>Empower yourself and learn confidently, knowing that your journey is supported by a dedicated and knowledgeable team committed to your success  - AB4S offer the best in education to learn & share confidently.</p>
          </div>
        </div>
      </div>
      </div>  
    </div>
    </section>
  );
}
