import React from 'react';
import {Row, Col} from 'antd';
import {connect} from 'react-redux';
import {HomeLeft} from './modules/homeLeft'
import HomeRight from './modules/homeRight'
import {HomeMiddle} from './modules/homeMiddle'
import './assets/style.less';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            clientHeight: document.documentElement.clientHeight
        }
    };


    componentDidMount() {
        //监听窗口的变化
        window.addEventListener('resize', this.winHeight)
    }

    componentWillUnmount() {
        //移除监听
        window.removeEventListener('resize', this.winHeight)
    }

    winHeight = () => {
        const clientHeight = document.documentElement.clientHeight;
        this.setState(() => ({
            clientHeight: clientHeight
        }))
    };

    render() {
        const {clientHeight} = this.state;
        return (
            <Row className="home-box">
                <Col span={1} className="home-left">
                    <HomeLeft/>
                </Col>
                <Col span={5} className="home-middle" style={{height: clientHeight}}>
                    <HomeMiddle/>
                </Col>
                <Col span={18} className="home-right">
                    <HomeRight/>
                </Col>

            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        control: state.getIn(['home', 'homeControl']),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
