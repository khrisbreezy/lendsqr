/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Pagination } from 'antd';
import UserComponent from '@/components/UserComponent';
import Link from 'next/link';
import { useUserContext } from '@/context/UserContext';
import moment from 'moment'


const userGroupCard = [
  {title: 'Users', imgSrc: '/images/icons/users-group.svg', count: '2,453', id: 1},
  {title: 'Active Users', imgSrc: '/images/icons/active-users.svg', count: '2,453', id: 2},
  {title: 'Users with loans', imgSrc: '/images/icons/users-loan.svg', count: '12,453', id: 3},
  {title: 'Users with savings', imgSrc: '/images/icons/users-savings.svg', count: '102,453', id: 4}
]

const User = () => {

  const [ showFilter, setShowFilter ] = React.useState(false);
  const [showMoredetails, setShowMoreDetails] = React.useState('');
  const {usersState, setUsersState}=useUserContext() || [];
  const [current, setCurrent] = React.useState(1)
  const [postsPerPage] = React.useState(10)

  const toggleMoreDetails = (val:string)=>{
    
    if (showMoredetails && val) {
      setShowMoreDetails('')
    }
    if (showMoredetails !== val) {
      setShowMoreDetails(val)
      
    }
  }

  const indexOfLastPage = current * postsPerPage
  const indexOfFirstPost = indexOfLastPage - postsPerPage
  const filteredUsers = usersState
  const currentUsers = usersState.length > 0 ? usersState.slice(indexOfFirstPost, indexOfLastPage) : [];

  const paginate = (pageNumber:any) => {
    setCurrent(pageNumber)
  }

  return (
    <UserComponent>
      <>
      
      <h2 className='color-primary mb-5'>Users</h2>
        <div className="row">
          {userGroupCard.map((card:any)=>{
            return (
              <div key={card.id} className="col-md-3">
                <div className="card p-4 user-card">
                  <img src={card.imgSrc} className='img-fluid w-40px ' alt="" />
                  <p className='user-card-text mt-3'>{card.title}</p>
                  <h3 className='user-card-number color-primary mb-0'>{card.count}</h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="user-table card user-card mt-5 p-4">
          <table className="table p-relative ">
            <thead>
              <tr>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Organization <img src="/images/icons/filter.svg" className='img-fluid' /></th>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Username <img src="/images/icons/filter.svg" className='img-fluid' /></th>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Email <img src="/images/icons/filter.svg" className='img-fluid' /></th>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Phone Number <img src="/images/icons/filter.svg" className='img-fluid' /></th>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Date Joined <img src="/images/icons/filter.svg" className='img-fluid' /></th>
                <th onClick={()=> setShowFilter(!showFilter)} className='cursor-pointer' scope="col">Status <img src="/images/icons/filter.svg" className='img-fluid' /></th>
              </tr>
            </thead>

            <tbody>  
              {currentUsers.map((users:any)=>{
                return(
                  <tr key={users.id}>
                    <td scope="row">{users?.orgName}</td>
                    <td>{users.userName}</td>
                    <td>{users.email}</td>
                    <td>{users.phoneNumber}</td>
                    <td>{moment(users.createdAt).format('MMM DD, YYYY hh:mm A')}</td>
                    <td><span className='active-card status'>Active</span></td>
                    <td onClick={()=>toggleMoreDetails(users.id)} className='more-select cursor-pointer'> 
                      <img src="/images/icons/table-dropdown.svg" className='img-fluid' />
                      <span className={`more-details ${showMoredetails === users.id ? 'd-block' : 'd-none' }`}>
                        <li><Link href={`/users/${users.id}`}><img src="/images/icons/view.svg" className='img-fluid pe-2' /> {" "} View Details</Link></li>
                        <li><img src="/images/icons/delete-user.svg" className='img-fluid pe-2'  /> Blacklist User</li>
                        <li><img src="/images/icons/activate-user.svg" className='img-fluid pe-2'  /> Activate User</li>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>

            <div className={`card filter-card ${showFilter ? 'd-block' : 'd-none'}`}>
              <p className='mb-0'>Organizaion</p>
              <select className='mb-3'>
                <option value="">Select</option>
              </select>
              <p  className='mb-0'>Username</p>
              <input type="text" placeholder='User' className='mb-3' />
              <p className='mb-0'>Email</p>
              <input type="email" placeholder='User' className='mb-3'/>
              <p  className='mb-0'>Date</p>
              <div className='p-relative mb-3'>
                <input type="text" placeholder='Date' />
                <img className='img-fluid date-icon' src='/images/icons/date.svg' />
              </div>

              <p className='mb-0'>Phone Number</p>
              <input type="text" placeholder='Phone Number' className='mb-3'/>

              <p className='mb-0'>Status</p>
              <select className='mb-3'>
                <option value="">Select</option>
              </select>

              <div className="d-flex align-items-center justify-content-between">
                <button className='reset filter-class '>Reset</button>
                <button className='filter filter-class '>Filter</button>
              </div>
            </div>

          </table>
        </div>

        <div className="pagination mt-3 d-flex align-items-center justify-content-between">
          <div className="more-options">
            <p className='mb-0 color-primary '>Showing <select onChange={(e)=>paginate(e.target.value)} className='select-options'>
              <option value={postsPerPage}>{postsPerPage}</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              </select> {" "}
              out of {usersState.length}</p>
          </div>
          <Pagination 
            defaultCurrent={1} 
            total={filteredUsers.length}
            defaultPageSize={postsPerPage}
            onChange={paginate}
            />
        </div>
      </>
    </UserComponent>
  );
};

export default User;