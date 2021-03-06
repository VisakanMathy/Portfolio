import React from "react";
import { Pages } from "../App";
import robo from "../assets/Robo.png";
import hobbies from "../assets/Hobbies.png";
import summer from "../assets/summerShow.png";

interface AboutPageProps {
  page: Pages;
  setPage: (Page: Pages) => void;
  scrollToNode: (node: any) => void;
}
interface AboutPageState {}
export default class ProjectPage extends React.Component<
  AboutPageProps,
  AboutPageState
> {
  educationRef = React.createRef<HTMLDivElement>();
  swltkkRef = React.createRef<HTMLDivElement>();
  hobbiesRef = React.createRef<HTMLDivElement>();
  render() {
    return (
      <div className="ContentHolder scrollSnap">
        <div className="Content limit Center">
          <div className="ContentTitle">My Story</div>
          <div className="ContentDesc text-center">
            <button onClick={() => this.props.scrollToNode(this.educationRef)}>
              EDUCATION
            </button>{" "}
            &nbsp;
            <button onClick={() => this.props.scrollToNode(this.swltkkRef)}>
              SWLTKK
            </button>{" "}
            &nbsp; &nbsp;
            <button onClick={() => this.props.scrollToNode(this.hobbiesRef)}>
              MY HOBBIES
            </button>
          </div>
          <div className="ContentFooter  text-center">
            Scroll to see more...
          </div>
        </div>
        <div className="Content limit" ref={this.educationRef}>
          <div className="ContentTitle sub">Education</div>
          <div className="ContentDesc  text-center container">
            <div className="CDtext">
              I am a British Tamil born in london and went to schools in
              Battersea and Mitcham before going to Tiffin School for my higher
              Education.
              <br></br>
              <br></br>
              At Tiffin I developed my passion for developing products while
              studing Design Technology and decided to become a design engineer
              to broaden my skills.
              <br></br>
              <br></br>
              At Imperial I found my love of robotics and hardware development
              and the integration of design thinking and engineering knolwedge
            </div>
            <div className="CDimage">
              <img
                src={robo}
                alt="Visakan standing next to pepper the robot"
              ></img>
            </div>
          </div>
          <div className="ContentFooter"></div>
        </div>
        <div className="Content limit" ref={this.swltkkRef}>
          <div className="ContentTitle sub">SWLTKK</div>
          <div className="ContentDesc container">
            <div className="CDtext">
              As a British Tamil I regularly involved myslelf within the Tamil
              communities. The place I found myself most at home was with the
              South West London Tamil Kalvikoodam, a charity dedicated to
              teaching tamil.
              <br></br>
              <br></br>
              Having studied here and forged strong relationships for 10 years,
              I became a volunteer at the school and became pivotal in weekly
              operations of the school.
              <br></br>
              <br></br>
              This included arragning and settiung up large school events and
              handling admin and finances
            </div>
            <div className="CDimage"></div>
          </div>
          <div className="ContentFooter"></div>
        </div>

        <div className="Content limit" ref={this.hobbiesRef}>
          <div className="ContentTitle sub">My Hobbies</div>
          <div className="ContentDesc container">
            <div className="CDtext">
              Finally I love getting involved in different activities with a
              particular interest for the outdoor sports. These include,
              climbing, skiing and cycling.
              <br></br>
              <br></br>I also enjoy playing team sports such as football and
              basketball with friends in a relaxed freindly environment.
              <br></br>
              <br></br>
              Finally, I love board games and trialling new and different games
              with my friends and family.
            </div>
            <div className="CDimage">
              <img src={hobbies} alt="Visakan doing his hobbies"></img>
            </div>
          </div>
          <div className="ContentFooter"></div>
        </div>
      </div>
    );
  }
}
