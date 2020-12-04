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
}
export default class ProjectPage extends React.Component<
  ProjectPageProps,
  ProjectPageState
> {
  constructor(props: ProjectPageProps) {
    super(props);
    this.state = {
      selectedProject: 0,
    };
  }

  private ProcessRef = React.createRef<ImageGallery>();
  setSlide(node: React.RefObject<ImageGallery>, index: number) {
    console.log("here");
    if (node.current) {
      console.log(index);
      return node.current.slideToIndex(index);
    } else return;
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
    text: string[];
    video: string;
    images?: { original: string; thumbnail: string }[];
  }) {
    let media: any;
    if (object.video !== "") {
      media = this.displayProjectVideo(object.video);
    } else if (object.image !== "") {
      media = this.displayProjectImage(object.image);
    } else {
      media = this.displayProjectGallery(object.images);
    }
    return (
      <>
        {media}
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
            ref={this.ProcessRef}
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
    return (
      <>
        <div className="ProjectContent">
          <div className="ProjectTitle">{project.title}</div>

          {this.displayProjectSegement(project.Outcome)}
          {project.Process.map((segment, index) => {
            return this.displayProjectSegement(segment);
          })}
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
