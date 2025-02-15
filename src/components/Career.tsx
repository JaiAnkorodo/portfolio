import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Netschool</h4>
                <h5>Adaptive Network Laboratory</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Netschool is a learning program or group study organized by the
              Adaptive Network Laboratory. This program is specifically designed
              for those who want to explore the world of computer networks,
              especially in the fields of Cisco Networking, the Linux operating
              system, and Python programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Academy</h4>
                <h5>Cyber Physical System</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Cyber Academy is a study group by the Cyber Physical System
              Laboratory, focusing on five key modules: Linux & GitHub, IoT, Web
              Development, Machine Learning, and Pitching Ideas. It aims to
              equip participants with practical skills and prepare them to face
              technological and innovative challenges in the digital era.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology</h4>
                <h5>IEEE Telkom University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Crafting a dynamic and seamless web experience for IEEE SB Telkom
              University, where technology meets innovation. Passionate about
              web development, UI/UX, and optimizing digital interactions for a
              global audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
