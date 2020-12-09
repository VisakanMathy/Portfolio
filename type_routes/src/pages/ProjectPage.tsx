import React from "react";
import { Pages } from "../App";
import "../css/Projects.css";
import Content from "../CMS.json";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player/";
import VizSensor from "react-visibility-sensor";

interface ProjectPageProps {
  page: Pages;
  setPage: (Page: Pages) => void;
  scrollToNode: (node: any) => void;
}
interface ProjectPageState {
  selectedProject: number;
  imgViz: boolean[];
}
export default class ProjectPage extends React.Component<
  ProjectPageProps,
  ProjectPageState
> {
  constructor(props: ProjectPageProps) {
    super(props);
    this.state = {
      selectedProject: 0,
      imgViz: [],
    };
  }
  private selectProject(projectNo: number) {
    this.setState({ selectedProject: projectNo, imgViz: [] });
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
              <div className="CTimageContainer">
                <img className="CTimage" src={project.image}></img>
              </div>
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
                  <div className="CTsummary">{project.summary}</div>
                </div>
              </div>
              <div className="CTseeMore">Click to see more...</div>
            </div>
          );
        })}
      </div>
    );
  }
  private displayProjectSegement(
    refNode: React.Ref<HTMLDivElement>,
    object: {
      title: string;
      image: string;
      text: string[];
      video: string;
      images?: { original: string; thumbnail: string }[];
    },
    pIndex: number
  ) {
    let media: any;
    if (object.video !== "") {
      media = this.displayProjectVideo(object.video);
    } else if (object.image !== "") {
      media = this.displayProjectImage(object.image);
    } else {
      media = this.displayProjectGallery(object.images);
    }
    return (
      <div className="ProjectSegment" ref={refNode}>
        <div className="ProjectTitle">{object.title}</div>
        <VizSensor
          onChange={(isVisible) => {
            let currentState = this.state.imgViz;
            currentState[pIndex] = isVisible;
            this.setState({ imgViz: currentState });
          }}
        >
          {media}
        </VizSensor>
        <div className="Row">
          <div className="ProjectSummary">
            <br></br>
            {object.text.map((textString, index) => {
              let element = textString.split(" ");
              if (element[0] !== "button") {
                return (
                  <React.Fragment key={object.title + "textFragment" + index}>
                    {textString}
                    <br></br>
                  </React.Fragment>
                );
              } else {
                element.shift();
                let url = element.shift();
                return (
                  <button onClick={() => window.open(url, "_blank")}>
                    {element.join(" ")}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
  displayProjectVideo(src: string) {
    return (
      <div className="ProjectMedia">
        <ReactPlayer width="100%" height="100%" url={src} />
      </div>
    );
  }
  displayProjectImage(src: string) {
    return (
      <div className="ProjectMedia">
        <img src={src} />
      </div>
    );
  }
  displayProjectGallery(
    images: {
      original: string;
      thumbnail: string;
    }[] = []
  ) {
    return (
      <>
        <div className="ProjectMedia gallery">
          <ImageGallery
            items={images}
            showPlayButton={false}
            thumbnailPosition="right"
            additionalClass="centerRIG"
          />
        </div>
      </>
    );
  }
  private displayProject() {
    let project = Content.Projects[this.state.selectedProject];
    let refNodes: React.Ref<HTMLDivElement>[] = [];
    return (
      <>
        <div className="ProjectContent">
          {project.Process.map((segment, index) => {
            refNodes.push(React.createRef<HTMLDivElement>());
            return this.displayProjectSegement(refNodes[index], segment, index);
          })}
          <div className="ButtonGroup Nodes">
            {project.Process.map((segment, index) => {
              return (
                <button
                  className={this.state.imgViz[index] ? "selected" : ""}
                  onClick={() => this.props.scrollToNode(refNodes[index])}
                >
                  <div className="circle" />
                  {"  "}
                  <div className="text">
                    {index !== 0 ? segment.title : project.titleShort}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  render() {
    if (this.props.page === Pages.SpecifiedProject) {
      return (
        <div className="ContentHolder Project scrollSnap">
          {this.displayProject()}
        </div>
      );
    } else return <div className="ContentHolder"> {this.displayTiles()}</div>;
  }
}
