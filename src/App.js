import { Layout, Space } from 'antd';
import HeaderApp from "./components/header";
import Goods from "./components/goods";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    paddingInline: 50,
    backgroundColor: '#7dbcea',


    // backgroundColor: 'pink',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
const App = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
        size={[0, 48]}
    >
        <Layout>
            <Header style={headerStyle}><HeaderApp/></Header>
            <Content style={contentStyle}><Goods/></Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Space>
);
export default App;