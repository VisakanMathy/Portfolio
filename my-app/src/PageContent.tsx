import React from "react";
import { Pages } from "./App";
import "./PageContent.css";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";

interface PageContentProps {
  page: Pages;
  setPage: (Page: Pages) => void;
}
interface PageContentState {}
export default class PageContent extends React.Component<
  PageContentProps,
  PageContentState
> {
  constructor(props: PageContentProps) {
    super(props);
  }
  private scrollToNode(node: any) {
    node.scrollIntoView({ behavior: "smooth" });
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
