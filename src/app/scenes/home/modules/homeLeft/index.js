import React from 'react';
import './assets/style.less';
import { Menu, Dropdown, Button,Popover } from 'antd';
export class HomeLeft extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const menu = (
            <Menu className='create-file'>
                <Menu.Item>
                    1st menu item
                </Menu.Item>
                <Menu.Item>
                    2nd menu item
                </Menu.Item>
                <Menu.Item>
                    3rd menu item
                </Menu.Item>
            </Menu>
        );
        return (
            <React.Fragment>
                <ul className="file-operation">
                    <li className="operation-item item-first">
                        <img src={require('@/scenes/home/assets/images/banner05-06.png')} alt=""/>
                    </li>
                    <li className="operation-item">
                        <i className="iconfont icon-tongbu"/>
                    </li>
                    <li className="operation-item">
                        <Popover className='create-file-wrap' placement="rightTop" content={menu} trigger="click">
                            <i className="iconfont icon-wendang"/>
                        </Popover>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
