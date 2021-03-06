import React from "react";
import { Pages } from "../App";
import "../css/PageContent.css";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";

interface PageContentProps {
  page: Pages;
  setPage: (Page: Pages) => void;
}
interface PageContentState {}
export default class PageContent extends React.Component<
  PageContentProps,
  PageContentState
> {
  private scrollToNode(node: any) {
    if (node.current) {
      node.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  private displayPage() {
    switch (this.props.page) {
      case Pages.About:
        return (
          <AboutPage
            page={this.props.page}
            setPage={this.props.setPage}
            scrollToNode={this.scrollToNode}
          />
        );
      case Pages.Contact:
        return (
          <ContactPage
            page={this.props.page}
            setPage={this.props.setPage}
            scrollToNode={this.scrollToNode}
          />
        );
      case Pages.Projects:
        return (
          <ProjectPage
            page={this.props.page}
            setPage={this.props.setPage}
            scrollToNode={this.scrollToNode}
          />
        );
      case Pages.SpecifiedProject:
        return (
          <ProjectPage
            page={this.props.page}
            setPage={this.props.setPage}
            scrollToNode={this.scrollToNode}
          />
        );
      default:
        return <></>;
    }
  }
  render() {
    return this.displayPage();
  }
}
