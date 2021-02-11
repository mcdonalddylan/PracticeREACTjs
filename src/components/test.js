import { Component } from 'react';

export default class LikeDislike extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dislikes: 25,
            likes: 100,
            disliked: false,
            liked: false
        };
    }
    

    hitLike = () => {
        this.setState({
            dislikes: this.state.disliked ? this.state.dislikes-1 : this.state.dislikes,
            likes: this.state.liked ? this.state.likes-1 : this.state.likes+1,
            disliked: false,
            liked: !this.state.liked
        });
    }

    hitDislike = () => {
        this.setState({
            dislikes: this.state.disliked ? this.state.dislikes-1 : this.state.dislikes+1,
            likes: this.state.liked ? this.state.likes-1 : this.state.likes,
            disliked: !this.state.disliked,
            liked: false
        });
    }

    render() {
        return (
            <>
                <div>
                    <button className={`like-button ${this.state.liked ? "liked" : ""}`} onClick={this.hitLike}>
                        Like | {this.state.likes}
                    </button>

                    <button className={`dislike-button ${this.state.disliked ? "disliked" : ""}`} onClick={this.hitDislike}>
                        Dislike | {this.state.dislikes}
                    </button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}
