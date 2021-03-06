import React from "react";
import "./css/App.css";
import NavBar from "./views/NavBar";
import SideBar from "./views/SideBar";
import PageContent from "./views/PageContent";
import HomeContent from "./pages/HomeContent";

export enum Pages {
  Home,
  About,
  Contact,
  Projects,
  SpecifiedProject,
}

interface MyProps {}
interface MyState {
  page: Pages; // like this
}

export default class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { page: Pages.Home };
    this.setPage = this.setPage.bind(this);
  }
  private displayBody() {
    if (this.state.page === Pages.Home) {
      return <HomeContent setPage={this.setPage} />;
    } else {
      return (
        <>
          <SideBar page={this.state.page} setPage={this.setPage} />
          <PageContent page={this.state.page} setPage={this.setPage} />
        </>
      );
    }
  }
  private setPage(Page: Pages) {
    this.setState({ page: Page });
  }
  render() {
    return (
      <div className="App">
        <NavBar page={this.state.page} setPage={this.setPage} />

        <div className="Body">{this.displayBody()}</div>
      </div>
    );
  }
}
