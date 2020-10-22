import React from "react";
import {Row, Col} from "antd";
import {connect} from "react-redux";
import {action} from "./store";
import './assets/style.less'

class PersonalCenter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleEdit = () => {
        this.props.showEdit()
    };


    render() {
        return (
            <div className='personal_center'>
                <Row>
                    <Col span={24} className='personal_center_title'>个人中心</Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCenter)
