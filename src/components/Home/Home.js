import React from "react";
import "./style/Home.css";
import BottomHome from "./BottomHome";

const img1 =
  "https://images.pexels.com/photos/860538/pexels-photo-860538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img2 =
  "https://images.pexels.com/photos/927017/pexels-photo-927017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const img3 =
  "https://images.pexels.com/photos/1002635/pexels-photo-1002635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const cycleImages = [img1, img2, img3];

class Home extends React.Component {
  state = {
    currentBackground: 0,
    windowHeight: ""
  };
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          currentBackground:
            this.state.currentBackground === cycleImages.length - 1
              ? 0
              : this.state.currentBackground + 1
        }),
      4000
    );
    this.setState({ windowHeight: window.innerHeight });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    console.log(window);
    let { currentBackground, windowHeight } = this.state;
    return (
      <div className="home">
        <div
          className="home__landing"
          style={{
            backgroundImage: `url(${cycleImages[currentBackground]})`
          }}
        >
          <div className="home__landing__opacity" />
          <div
            className="home__landing__image-transition"
            style={{
              backgroundImage: `url(${cycleImages[currentBackground]})`
            }}
          />
          <section
            onClick={() =>
              window.scroll({ top: windowHeight, behavior: "smooth" })
            }
          >
            <i className="fa fa-chevron-down" />
          </section>
        </div>
        <BottomHome />
      </div>
    );
  }
}
export default Home;
