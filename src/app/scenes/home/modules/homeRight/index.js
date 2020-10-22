import React from 'react';
import './assets/style.less';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css';
import {connect} from "react-redux";

class HomeRight extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editorState: null,
        }
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    //获取数据
    handleEditorChange = (editorState) => {
        console.log(editorState.toHTML());
        this.setState(() => ({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        }))
    };

    render() {
        const {editorState} = this.state;
        const {control} = this.props;
        const controls = control.toJS();
        return (
            <React.Fragment>
                <div className="home-right-top">君子六艺</div>
                <div className="home-right-bottom">
                    <BraftEditor
                        controls={controls}
                        value={editorState}
                        contentStyle={{height: '600'}}
                        onChange={this.handleEditorChange}
                    />
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeRight)
