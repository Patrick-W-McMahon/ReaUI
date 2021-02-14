import React, { Component } from 'react';
import '../assets/style.css';

const Title = ({ children }) => <h4 className="block-title">{children}</h4>;
Title.displayName = "Title";
const Content = ({ children, isContainer, contentClasses }) => <div className={`block-content${isContainer?' container-fluid':''}${contentClasses?` ${contentClasses}`:''}`}>{children}</div>;
Content.displayName = "Content";

class Block extends Component {
    render() {
        const { children, color, setColor, sectionName } = this.props;
        const style = setColor ? { backgroundColor: setColor } : null;
        return (
            <section style={style} className={`block${color?` color-${color}`:''}${sectionName?` ${sectionName}`:''}`}>
                {React.Children.map(children, child => {
                    if(child.displayName === 'Title') {
                        return React.cloneElement(child);
                    }
                })}
                {React.Children.map(children, child => {
                    if(child.displayName !== 'Content') {
                        return React.cloneElement(child);
                    }
                })}
            </section>
        );
    }
}
Block.Title = Title;
Block.Content = Content;
export default Block;