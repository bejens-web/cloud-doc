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
                <div className="home-left">
                    <HomeLeft/>
                </div>
                <div className="home-middle" style={{height: clientHeight}}>
                    <HomeMiddle/>
                </div>
                <div className="home-right">
                    <HomeRight/>
                </div>

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
