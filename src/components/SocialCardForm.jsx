import React from "react";

export default class SocialCardFrom extends React.Component{
    constructor(){
        super();

        this.state = {
            contect: "default post content",
            inageUrl: ""
        }
    }

    render (){
        return (
            <section className="socialCardForm">
                <label htmlFor="postContent">Post content:</label>
                <input
                    type="text"
                    name="postContent"
                    className="postContent" 
                    value={this.state.content}
                    onChange={(event) => {this.setState({content: event.target.value})}}
                />
            </section>
        )
    }
}