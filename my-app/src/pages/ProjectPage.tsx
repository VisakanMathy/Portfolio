import React from "react";
import { Pages } from "../App";
import "../css/Projects.css";
import Content from "../CMS.json";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player/";

interface ProjectPageProps {
  page: Pages;
  setPage: (Page: Pages) => void;
  scrollToNode: (node: any) => void;
}
interface ProjectPageState {
  selectedProject: number;
  processIndex: number;
}
export default class ProjectPage extends React.Component<
  ProjectPageProps,
  ProjectPageState
> {
  constructor(props: ProjectPageProps) {
    super(props);
    this.state = {
      selectedProject: 0,
      processIndex: 0,
    };
    this.setImageIndex = this.setImageIndex.bind(this);
    this.setSlide = this.setSlide.bind(this);
  }

  private ProcessRef = React.createRef<ImageGallery>();
  setSlide(node: React.RefObject<ImageGallery>, index: number) {
    console.log("here");
    if (node.current) {
      console.log(index);
      return node.current.slideToIndex(index);
    } else return;
  }
  private setImageIndex(index: number) {
    this.setState({ processIndex: index });
  }
  private selectProject(projectNo: number) {
    this.setState({ selectedProject: projectNo });
    this.props.setPage(Pages.SpecifiedProject);
  }
  private displayTiles() {
    return (
      <div className="Content">
        {Content.Projects.map((project, index) => {
          return (
            <div
              className="ContentTile"
              onClick={() => {
                this.selectProject(index);
              }}
              key={"Project" + index}
            >
              <img className="CTimage" src={project.image}></img>
              <div className="CTdesc">
                <div className="CTtitle">{project.title}</div>
                <div className="CTtags">
                  <ul>
                    {project.tags.map((tag, tagIndex) => {
                      return (
                        <li key={"project" + index + "tag" + tagIndex}>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  private displayProjectSegement(object: {
    title: string;
    image: string;
    text: string;
    video: string;
  }) {
    let media: any;
    if (object.video !== "") {
      media = <ReactPlayer width="100%" height="100%" url={object.video} />;
    } else media = <img src={object.image} />;
    return (
      <>
        <div className="ProjectMedia">{media}</div>
        <div className="Row">
          <div className="ProjectSummary">
            <h3 className="ProcessSubTitle selected">{object.title}</h3>
            <br></br>
            {object.text}
          </div>
        </div>
      </>
    );
  }

  private displayProjectGallery(
    project: {
      title: string;
      images: { original: string; thumbnail: string };
      text: string[];
    }[] = []
  ) {
    let ProcessImages: { original: string; thumbnail: string }[] = [];
    project.map((process, index) => {
      return ProcessImages.push(process.images);
    });
    return (
      <>
        <div className="ProjectMedia gallery">
          <ImageGallery
            ref={this.ProcessRef}
            items={ProcessImages}
            showPlayButton={false}
            thumbnailPosition="right"
            onBeforeSlide={(index) => this.setImageIndex(index)}
            additionalClass="centerRIG"
          />
          <div />
        </div>
        <div className="Row">
          <div className="ProjectSummary ">
            {project.map((process, index) => {
              let cName = "ProcessSub";
              if (index === this.state.processIndex) {
                cName = "ProcessSub show";
              }
              return (
                <div className={cName}>
                  {project.map((subProcess, subIndex) => {
                    let PSTcName = "ProcessSubTitle";
                    if (subIndex === this.state.processIndex) {
                      PSTcName = "ProcessSubTitle selected";
                    }
                    return (
                      <h3
                        onClick={() => {
                          this.setSlide(this.ProcessRef, subIndex);
                        }}
                        className={PSTcName}
                      >
                        {subProcess.title}
                      </h3>
                    );
                  })}
                  <br></br>
                  {process.text}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  private displayProject() {
    let project = Content.Projects[this.state.selectedProject];
    return (
      <>
        <div className="ProjectContent">
          <div className="ProjectTitle">{project.title}</div>

          {this.displayProjectSegement(project.Outcome)}
          {this.displayProjectGallery(project.Process)}
        </div>
      </>
    );
  }

  render() {
    if (this.props.page === Pages.SpecifiedProject) {
      return (
        <div className="ContentHolder Project"> {this.displayProject()}</div>
      );
    } else return <div className="ContentHolder"> {this.displayTiles()}</div>;
  }
}
