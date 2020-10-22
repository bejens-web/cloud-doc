import React from 'react';
import './assets/common.less';
import {action} from './store';
import {connect} from 'react-redux';
import {Row, Col, Spin, Layout} from 'antd' ;

//函数：获取尺寸
function boxHeight() {
    //获取浏览器窗口高度
    let winHeight = 0;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过Document对body进行检测，获取浏览器可视化高度
    document.getElementById("winHeightBox") &&
    (document.getElementById("winHeightBox").style.minHeight = winHeight + "px");
}

window.onresize = boxHeight;

class MenuBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    };

    componentDidMount() {
        boxHeight();
    }

    render() {
        const {loading} = this.props;
        return (
            <Row className="main">
                <Col span={24} className='main-bottom'>
                    <Layout className='absolute-parent-layout'>
                        <Spin spinning={loading}>
                            <Row className='main-area'>
                                <Col span={24} className="main-right">
                                    {this.props.children}
                                </Col>
                            </Row>
                        </Spin>
                    </Layout>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.getIn(['header', 'loading']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBox)
