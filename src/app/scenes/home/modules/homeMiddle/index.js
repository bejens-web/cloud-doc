import React from 'react';
import './assets/style.less';
import {Input} from 'antd';
const {Search} = Input;

export class HomeMiddle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onSearch = (value) => {
        console.log(value);
    };

    render() {
        return (
            <React.Fragment>
                <div className="search" ref={(node) => {
                    this.ele = node
                }}>
                    <Search placeholder="请输入关键字" onSearch={this.onSearch} enterButton/>
                </div>
                <ul className="file-items">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((items) => {
                            return (
                                <React.Fragment>
                                    <li className="file-item">
                                            <span className="file-name">
                                                 <i className="iconfont icon-bangongruanjianword"/>
                                                {items}君子六艺
                                            </span>
                                        <span className="file-time">
                                                10/20
                                            </span>
                                    </li>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}
