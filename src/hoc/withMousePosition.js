import React from "react";


const widthMousePosition = (WrapperComponent) => {
    class Hoc extends React.Component {
        state = {
            x: 0,
            y: 0,
        }

        componentDidMount() {
            document.body.addEventListener(
                'mousemove',
                this.updateMousePosition.bind(this))
        }

        updateMousePosition(e) {
            this.setState({
                x: e.pageX, 
                y: e.pageY
            })
        }

        render() {
            return (
                <WrapperComponent
                    mouseX={this.state.x}
                    mouseY={this.state.y}
                    {...this.props} />
            )
        }
    }
    return Hoc;
}

export default widthMousePosition;