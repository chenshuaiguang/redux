import React,{ Component } from 'react';
import { Radio,Input,Button,Row, Col,Select ,DatePicker,Layout, Menu, Breadcrumb, Icon ,Table, Divider, Tag} from 'antd';
const { SubMenu } = Menu;
class AntdDEmo extends Component {
	constructor(props){
		super(props)
		this.state={
			loading:false
		}
		this.loading=this.loading.bind(this)
	}
	componentWillMount(){
	}
	loading(){
		this.setState({
			loading:true
		})
	}
	render(){
		const ButtonGroup = Button.Group;
		const { Header, Content, Footer, Sider } = Layout;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text) =>{console.log(text) 
	return (
  <a style={{textDecoration:'none'}} href="javascript:void(0)">{text}</a>)},
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '1111John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
		// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
		return (
				<div>
					<Button type="primary" shape="circle" icon="search" />
					<Button ghost>Ghost</Button>
					<Button onClick={this.loading} type="primary" icon="poweroff" loading={this.state.loading}>
					Loading
					</Button>
					<ButtonGroup>
						<Button>Cancel</Button>
						<Button>OK</Button>
					</ButtonGroup>
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed" ghost>Dashed</Button>
					<Button type="danger" ghost>Danger</Button>
					<Button type="danger">Danger</Button>
					<Row type="flex" >
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={1} lg={{span:3,offset:2}} xl={6} offset="4">
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
					</Row>
					<Layout>
						<Header className="header">
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={['2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
							<Menu.Item key="3">nav 3</Menu.Item>
						</Menu>
						</Header>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
							Content
							</Content>
						</Layout>
  					</Layout>
					  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  <Table columns={columns} dataSource={data} />
				</div>
			)
	}
}
export default AntdDEmo