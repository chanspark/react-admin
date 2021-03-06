import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from "pages";
import NoMatch from "components/NoMatch";

import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <h1>Server Side Rendering with Create React App v2</h1> */}
				<Layout>
					<Header>ll</Header>
					<Layout>
						<Sider>
							<Menu
								theme="dark"
								inlineCollapsed="true"
								mode="inline"
							>
							
								<Menu.Item>Menu</Menu.Item>
								
								<SubMenu
									title={
										<span>
											<Icon type="user" /> SubMenu
										</span>
									}
								>
									<Menu.Item>
										<Link to={"/second"}>Second</Link>
									</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						  
						<Content>
							<Switch>
								<Route exact path="/" component={FirstPage} />
								<Route path="/second" component={SecondPage} />
								<Route component={NoMatch} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}
