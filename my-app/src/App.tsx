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
  componentDidMount() {
    const data = JSON.stringify({
      unified_filters: {
        since: "2020-05-18T11:29:18Z",
        till: "2020-05-20T11:29:18Z",
      },
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      "GET",
      "https://staging.fisikal.com/api/unified/media/announcements"
    );
    xhr.setRequestHeader(
      "cookie",
      "visitor_uuid=4357b9b2-62c9-4f34-8945-0881a1a06042; fisikal_v2_session=eU5XOWJrTEJGZnE3Mjh2cGFVRE01VWpXY1BSOVd6dDRiT1BLM25pYndtNXVpZjR5RDBpaVVCU3E4eXNqdTFveDBrMkpFdGZCa1dUdFdTckMvSGlWV3ZYeC9XUURzNXNXOHFkZGVCQXpudTFsYmZkWGozbGttbzllQ25hWjlDMDUtLUJHRU1YMUgzdHhyNXk1WHJwTzUwdVE9PQ%253D%253D--937ae99f2b65511191408a3e45ba7ab9d59bac56"
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      "Bearer cb32fdbf770e09e2c23815cd6f8d9ed1ac81db38da27d10d937c2350a24680bc"
    );
    xhr.setRequestHeader("mode", "no-cors");

    xhr.send(data);
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
