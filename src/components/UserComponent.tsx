/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lsGet } from '../../helpers/functions';
import { ValidateUser } from '../../helpers/valiadte';

const { Header, Content, Sider } = Layout;


const menuList = [
  {
    id: 1,
    title: 'Customers',
    childList: [
      {iconScr: '/images/icons/users.svg', id: 'user', link: '/user', title: 'Users'},
      {iconScr: '/images/icons/user-cog.svg', id: 'guarantors', link: '/guarantors', title: 'Guarantors'},
      {iconScr: '/images/icons/sack.svg', id: 'loan', link: '/loans', title: 'Loans'},
      {iconScr: '/images/icons/handshake-regular.svg', id: 'desion-models', link: '/desion-models', title: 'Decision Models'},
      {iconScr: '/images/icons/piggy-bank.svg', id: 'savings', link: '/savings', title: 'Savings'},
      {iconScr: '/images/icons/hand-sack.svg', id: 'loan-requests', link: '/loan-requests', title: 'Loan Requests'},
      {iconScr: '/images/icons/user-check.svg', id: 'whitelist', link: '/whitelists', title: 'Whitelists'},
      {iconScr: '/images/icons/user-uncheck.svg', id: 'karma', link: '/karmas', title: 'Karmas'},
    ]
  },
  {
    id: 2,
    title: 'Businesses',
    childList: [
      {iconScr: '/images/icons/home.svg', id: 'organization', link: '/organization', title: 'Organization'},
      {iconScr: '/images/icons/hand-sack.svg', id: 'loan-product', link: '/loan-product', title: 'Loan Product'},
      {iconScr: '/images/icons/savings-prod.svg', id: 'savings-product', link: '/savings-product', title: 'Savings Product'},
      {iconScr: '/images/icons/coins-solid.svg', id: 'fees-charges', link: '/fees-charges', title: 'Fees and Charges'},
      {iconScr: '/images/icons/trans-icon.svg', id: 'transactions', link: '/transactions', title: 'Transactions'},
      {iconScr: '/images/icons/settings.svg', id: 'services', link: '/services', title: 'Services'},
      {iconScr: '/images/icons/user-cog.svg', id: 'service-account', link: '/service-account', title: 'Service Account'},
      {iconScr: '/images/icons/scroll.svg', id: 'settlements', link: '/settlements', title: 'Settlements'},
      {iconScr: '/images/icons/chart-bar.svg', id: 'reports', link: '/reportss', title: 'Reports'},
    ]
  },
  {
    id: 3,
    title: 'Settings',
    childList: [
      {iconScr: '/images/icons/sliders-h.svg', id: 'preferences', link: '/preferences', title: 'Preferences'},
      {iconScr: '/images/icons/badge-percent.svg', id: 'fees-pricing', link: '/fees-pricing', title: 'Fees and Pricing'},
      {iconScr: '/images/icons/clipboard-list.svg', id: 'audit-logs', link: '/audit-logs', title: 'Audit Logs'},
    ]
  }
]

const UserComponent = (props: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const [user] = React.useState(lsGet('user') || {
    profile: {
      firstName: '',
      avatar: ''
    }
  });

  useEffect(()=> {ValidateUser.validateUser()},[]);

  const handleLogout =()=>{
    ValidateUser.clearToken();
    router.push('/');
  }

  const [ sidebar, setSiderbar ] = useState(true);
  const [ breakpoint, onBreakPoint ] = useState(false);
  

  const router = useRouter();

  return (
    <Layout>
      <Header className="header bg-white h-auto px-2">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <img src="/images/logo.svg" alt="" className='img-fluid w-75'/>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse flex-wrap"
                id="navbarSupportedContent"
              >

                <div className='ms-5 ps-5'>
                  <div className="search-container d-flex">
                    <input
                    className="form-control search-input"
                    type="search"
                    placeholder="Search for anything"
                    aria-label="Search"
                    />
                    <button className="search-btn">
                      <img src="/images/icons/search.svg" className='img-fluid w-20px' alt="" />
                    </button>
                  </div>
                </div>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-underline" aria-current="page" href="#">
                      Docs
                    </a>
                  </li>
                  <li className="nav-item px-4">
                    <a className="nav-link" href="#">
                    <img src="/images/icons/notification-bell.svg" className='img-fluid' alt="" />
                    </a>
                  </li>

                  <div className="account-dropdown d-flex align-items-center">
                    <img src={user?.profile?.avatar} className='img-fluid w-50px rounded-circle' alt="" />
                     <a className="nav-link active" aria-current="page" href="#">
                      {user?.profile?.firstName}
                    </a>
                    <img src="/images/icons/dropdown.svg" className='img-fluid' alt="" />
                  </div>
                </ul>
              </div>
            </div>
          </nav>
      </Header>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0" 
          width={sidebar ? 280 : 0} style={{ background: colorBgContainer }}
          onCollapse={(collapsed, type) => {
            setSiderbar(!collapsed);
          }}
          onBreakpoint={(broken) => {
            console.log(broken);
            onBreakPoint(broken)
          }}
          >
          <div className="sidebar-container">
            <a href='' className="d-flex align-items-center px-4 my-4 pb-4">
              <img src="/images/icons/briefcase.svg" alt="" className="img-fluid" />
              <p className='mb-0 px-2 color-primary'>Switch Organization</p>
              <img src="/images/icons/dropdown-2.svg" alt="" className="img-fluid" />
            </a>
              
            <a href='' className="d-flex align-items-center opacity-5 px-4 mb-5">
              <img src="/images/icons/home.svg" alt="" className="img-fluid" />
              <p className='mb-0 px-2 color-primary'>Dashboard</p>
            </a>

            {menuList.map((menus)=>{
              return (
                <div key={menus.id} className="menus mt-3">
                  <p className='mb-0 color-primary text-uppercase px-4'>{menus.title}</p>
                  {menus.childList.map((list:any)=>{
                    return(
                      <Link key={list.id} href={list.link} className={`d-flex align-items-center w-100 px-4 mt-2 py-2 opacity-5 menu-list ${router.route.includes(list.link) ? 'active-list' : ''}`}>
                          <img src={list.iconScr} alt="" className="img-fluid" />
                          <p className='mb-0 px-2 color-primary'>{list.title}</p>
                      </Link>
                    )})}
                </div>
              )
            })}

          </div>
            
          <a onClick={handleLogout} href='' className="d-flex align-items-center px-4 mb-5">
              <img src="/images/icons/sign-out.svg" alt="" className="img-fluid" />
              <p className='mb-0 px-2 color-primary'>Logout</p>
          </a>
        </Sider>
        <Layout style={{ padding: breakpoint ? "20px" : "60px 30px 60px 60px", display: sidebar && breakpoint ? 'none' : 'block' }}>
            <div  style={{
              paddingLeft: 24,
              paddingRight: 24
            }}></div>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserComponent;