import React from 'react';
import {Row, Col} from 'antd';
import './assets/style.less';
import {translateTime2} from '@/services/common'

export const UserInfo = (props) => {
    return (
        <Row className='info_inside'>
            <Col span={24}>
                <span className="title">手机号码：</span>
                <span>{props.userInfos.principal}</span>
            </Col>
            <Col span={24}>
                <span className="title">公司名称：</span>
                <span>{props.userInfos.company}</span>
            </Col>
            <Col span={24}>
                <span className="title">职位：</span>
                <span>{props.userInfos.position}</span>
            </Col>
            <Col span={24}>
                <span className="title">注册时间：</span>
                <span>{translateTime2(props.userInfos.createTime)}</span>
            </Col>
            <Col span={24}>
                <span className="title">最后登录时间：</span>
                <span>{translateTime2(props.userInfos.loginTime)}</span>
            </Col>
        </Row>
    )
};