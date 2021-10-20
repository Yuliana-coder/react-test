import React from "react";
import Card from "../card";
import "./cards.css"
import { likeUserCard, userGetData, deleteUserCard } from "../../redux/actions/users"
import { connect } from "react-redux";
import Filters from "../filters";

class Cards extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state  = {
            isLoaded: false,
            error: null,
            isTurnFilter: false
        }
    }

    componentDidMount() {
        this.props.userGetData();
    }

    likeCard(id: any) {
        this.props.likeUserCard(id);
    }

    deleteCard(id: any) {
        this.props.deleteUserCard(id);
    }

    toggleFilter() {
        this.setState({isTurnFilter: !this.state.isTurnFilter},
        );
    }

    get users(){
        return this.state.isTurnFilter ? this.props.likedUsers : this.props.users;
    }

    render() {
        return (
            <div className="cards-wrapper">
                <div className="cards-filters">
                    <Filters isTurnFilter={this.state.isTurnFilter} toggleFilter={this.toggleFilter.bind(this)} />
                </div>
                {this.users && this.users.length ? <div className="cards">
                    {this.users.map((item: any) => { return <div key={item.id} className="cards__item-wrapper">
                        <div className="cards__item">
                        <Card likeCard={this.likeCard.bind(this)} deleteCard={this.deleteCard.bind(this)} user={item} />
                        </div>
                    </div>})}
                </div> : <span>Список карточек пуст :(</span> }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      users: state.info.users,
      likedUsers: state.info.likedUsers
    };
  };
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        userGetData: () => dispatch(userGetData()),
        likeUserCard: (id: any) => dispatch(likeUserCard(id)),
        deleteUserCard: (id: any) => dispatch(deleteUserCard(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
