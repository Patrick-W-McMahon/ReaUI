import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

class MdViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            loaded: false
        }
    }

    componentDidMount() {
        fetch(this.props.path).then(response => response.text()).then(text => {
            this.setState({ content: text, loaded: true });
        });
    }

    render() {
        const { content, loaded} = this.state;
        if(!loaded) {
            return <div>Loading</div>;
        }
        return (
            <Fragment>
                <ReactMarkdown source={content} />
            </Fragment>
        );
    }
}
export default MdViewer;