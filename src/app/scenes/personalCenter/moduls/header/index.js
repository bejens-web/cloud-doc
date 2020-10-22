import React from 'react';
import {Row, Col} from 'antd';
import './assets/style.less'

export const Header = (props) => {
    return (
        <Row className='header'>
            <Col span={20} className='header_inside'>
                <Row className="head-Img">
                    <Col className="imgParent">
                        <img src={props.userInfos.avatar}/>
                    </Col>
                    <Col className="user-name">{props.userInfos.name}</Col>
                </Row>
            </Col>
            <Col span={4} className="operator">
                <span onClick={()=>props.handleEdit()}>编辑</span>
            </Col>
        </Row>
    )
};