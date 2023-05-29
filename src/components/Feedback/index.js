import { faL } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Component } from "react";

class Feedback extends Component {
  state = {
    isClick: false,
  };

  handleCLick = () => {
    this.setState((b) => ({ isClick: !b.isClick }));
  };
  render() {
    const { emojis, loveEmojiUrl } = this.props.resources;
    const { isClick } = this.state;
    {
      if (!isClick) {
        return (
          <div className="card">
            <h1 className="main-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="button-container">
              {emojis.map((e) => {
                return (
                  <li>
                    <button
                      onClick={this.handleCLick}
                      className="button"
                      key={e.id}
                    >
                      <img
                        src={e.imageUrl}
                        alt={e.name}
                        className="img-details"
                      />
                      <br />
                      <p>{e.name}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else {
        return (
          <div className="card">
            <img src={loveEmojiUrl} alt="love" className="responseImage" />
            <br />
            <h1>Thank You</h1>
            <br />
            <p>
              We will use your feedback to improve our customer support
              performence
            </p>
          </div>
        );
      }
    }
  }
}

export default Feedback;
