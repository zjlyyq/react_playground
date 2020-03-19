"use strict";

const e = React.createElement;
var config = {
    backgroundImageSrc: 'http://localhost:3001/root/imgs/1.jpg'
}

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return "You liked this!";
        }

        // return e(
        //   'button',
        //   { onClick: () => this.setState({ liked: true }) },
        //   'Like'
        // );

        // 使用jsx
        var jsxes = [];
        for(var i = 0;i <3;i ++) {
            jsxes.push(
                <button
                    onClick={() => {
                        this.setState({ liked: true });
                        window.open('http://localhost:3000/')
                    }}
                >
                    Like
                </button>
            )
        }
        var img = <img src={config.backgroundImageSrc}></img>;
        jsxes.push(img);
        return jsxes;
    }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
