import React, {Component} from 'react';
import { connect } from 'react-redux';

class TitleComponent extends Component {
    render () {
        return(
            <div>
                <p style ={{ fontSize: 'large', fontWeight: 'bold'}}>
                    {this.props.title}
                </p>
            </div>
        );
    }


    constructor(props) {
        super(props);
        const data = this.props.data;
        //this.state = {title : data.title, text: data.text};
    };

    componentDidMount(){
        if (this.props.sendInfo)
            this.props.sendInfo({info:'Esta información viene desde el hijo'});
    };
}

const mapStateToProps = (state) => {
    return {
        title: state.uiReducer.title
    }
}

export default connect(mapStateToProps)(TitleComponent);