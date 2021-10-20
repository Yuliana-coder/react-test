import React from "react";
import "./card.css"

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="card-wrapper">
                <div onClick={() => {this.props.likeCard(this.props.user.id)}} className={`card-icon ${this.props.user.isLiked ? 'card-icon_liked' : "card-icon_noliked"}`}>
                </div>
                <div className="card">
                    <div className="card__img-wrapper">
                        <img className="card__img" src={this.props.user.avatar} alt="avatar"/>
                    </div>
                    <div className="card__text">
                        <span className="card__text_name">{this.props.user.first_name ? this.props.user.first_name : ""} {this.props.user.last_name ? this.props.user.last_name : ""}</span>
                    </div>
                    <div className="card__text">
                        <a href="mailto:" className="card__text_email">{this.props.user.email}</a>
                    </div>
                </div>
                <div className="card-btn-wrapper">
                    <button onClick={() => {this.props.deleteCard(this.props.user.id)}} className="card-btn">
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;