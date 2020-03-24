
// function Timeer(props) {
//     var now = new Date()
//     return (
//         <p>Now is  {now.getDate()}</p>
//     )
// }

class Timeer extends React.Component {
    render() {
        var now = new Date()
        return (
            <p>Now is  {now.getDate()}</p>
        )
    }
}
function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <Timeer />
        </div>
    );
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(
    <Welcome name="zjl" />,
    domContainer);