import React from "react";
import "./filters.css"

class Filters extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="filters">
                <div className="filters__item">
                    <button className={`filters__item-btn ${this.props.isTurnFilter ? "filters__item-btn_active" : ""}`} onClick={() => this.props.toggleFilter()}>
                        Понравившиеся 
                    </button>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state: any) => {
//     return {
//       users: state.users
//     };
//   };
  
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         userGetData: () => dispatch(userGetData()),
//         likeUserCard: (id: any) => dispatch(likeUserCard(id))
//     };
// };

export default Filters;
