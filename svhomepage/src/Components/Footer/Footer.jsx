import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="maincont">
        <div className="maincont1">
          <div className="first">Shuniya Vigyan</div>
          <div className="line"></div>
          <div className="second"> Learn Coding in Hindi and English.....</div>
          <div className="specify">
            <div className="students">
              {" "}
              15000 <br /> Students
            </div>
            <div className="students">
              {" "}
              27+ <br /> Courses
            </div>
            <div className="students">
              {" "}
              20+ <br /> Mentors
            </div>
          </div>
        </div>
        <div className="maincont2">
          <img
            className="image"
            src="https://assets.gocoderz.com/site/wp-content/uploads/2016/07/cute-pupils-in-computer-class-with-teacher-1024x512.jpg"
          />
        </div>
      </div>
      <div className="company">
        <div className="about">About The Company</div>
        <div className="describe">
          " Our company is dedicated to providing comprehensive coding education
          to kids in both Hindi and English. In addition to teaching coding
          concepts,we offer courses in software development,web development,
          machine learning,data analysis,artifical intelligence and robotics.
          giving kids a broad range of skills and experiences that will prepare
          them for a future in tech."
        </div>
      </div>
      <div className="poster">
        <img
          className="kids"
          src="https://www.codingal.com/resources/wp-content/uploads/2021/07/Programming-languages-for-kids_banner-1.png"
        ></img>
        <div className="content">
          "We are here as a solution to teach coding improve people's components
          in getting jobs,increasing income,and starting a professional life"
        </div>
      </div>
      <div className="popular">Popular Courses</div>
      <div>
        <div className="footers">
          <div className=" cards card">
            <img
              src="https://www.analyticsinsight.net/wp-content/uploads/2021/12/The-Future-of-Robotics-Its-Implications-in-2021-and-Beyond.jpg"
              className=" image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Robotics</h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div className=" cards card">
            <img
              src="https://www.flexsin.com/blog/wp-content/uploads/2019/12/Custom-Software-Development.jpg"
              className="  image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">software Development</h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div className=" cards card">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              className="  image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Artifical Intelligence</h5>
              <p className="card-text"></p>

              {/* <a href="#" className="btn btn-primary">App Link</a> */}
            </div>
          </div>
        </div>
        <div className="footers">
          <div className=" cards card">
            <img
              src="https://www.techfunnel.com/wp-content/uploads/2020/12/machine-learning-vs-deep-learning.png"
              className="image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <strong></strong>Machine Learning
              </h5>
              <p className="card-text"></p>
              {/* <a href="#" className="btn btn-primary">App Link</a> */}
            </div>
          </div>
          <div className=" cards card">
            <img
              src="https://www.analyticssteps.com/backend/media/thumbnail/9348738/8128829_1603714947_statistics.jpg"
              className="  image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Data Analysis</h5>
              <p className="card-text"></p>

              {/* <a href="#" className="btn btn-primary">App Link</a> */}
            </div>
          </div>
          <div className=" cards card">
            <img
              src="https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg"
              className="  image_card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="teams">Our Team</div>
      <div className="both">
        <div className="ajay">
          <img src="./ajay.png" className="  " alt="..." />

          <div> Ajay Prakash </div>
          <div>Co-founder NITSurathkal</div>
          <div>
            I am passionate about helping students learn how to code and develop
            their skills in programming. I believe that coding is an essential
            skill in today’s world, and I am committed to providing my students
            with the best possible learning experience.
          </div>
        </div>
        <div className="ankit">
          <img src="../ankit.png" className="  " alt="..." />

          <div> Ankit Kumar </div>
          <div>Co-founder IIT-Kharagpur</div>
          <div>
            I am committed to providing my students with the best possible
            learning experience. Whether you are a beginner or an experienced
            programmer, I am here to help you achieve your goals and take your
            coding skills to the next level
          </div>
        </div>

        {/* <div className='ankit'>Ankit Kumar <br/>Co-founder IIT-Kharagpur</div> */}
      </div>
    </div>
  );
};

export default Footer;
