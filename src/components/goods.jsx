import {Col, Image, Row} from 'antd';

const style = {
    padding: '8px 0',
};

const goodsArray = [
    {path: "goods1.jpg"},
    {path: "goods2.jpg"},
    {path: "goods3.jpg"},
    {path: "goods4.jpg"}
]
const goodsMap = goodsArray.map(({path}) => (
    <Col className="gutter-row" span={6}>
        <div style={style}><Image
            height={450}
            src={path}
        /></div>
    </Col>

));
const Goods = () => {
    return (<Row gutter={16}>

        {goodsMap}
        {/*<Col className="gutter-row" span={6}>*/}
        {/*    <div style={style}><Image*/}
        {/*        height={450}*/}
        {/*        src="goods1.jpg"*/}
        {/*    /></div>*/}
        {/*</Col>*/}
        {/*<Col className="gutter-row" span={6}>*/}
        {/*    <div style={style}><Image*/}
        {/*        height={450}*/}
        {/*        src="goods2.jpg"*/}
        {/*    /></div>*/}
        {/*</Col>*/}
        {/*<Col className="gutter-row" span={6}>*/}
        {/*    <div style={style}><Image*/}
        {/*        height={450}*/}
        {/*        src="goods3.jpg"*/}
        {/*    /></div>*/}
        {/*</Col>*/}
        {/*<Col className="gutter-row" span={6}>*/}
        {/*    <div style={style}><Image*/}
        {/*        height={450}*/}
        {/*        src="goods4.jpg"*/}
        {/*    /></div>*/}
        {/*</Col>*/}
    </Row>)
};

export default Goods;