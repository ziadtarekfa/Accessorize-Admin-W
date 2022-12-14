import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../pageStyles/user.css';


import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';
import avatar from '../assets/avatar.jpg';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';

const User = () => {
    return (
        <div className='seller'>
            <Header />
            <div>
                <Sidebar />
                <div className='user-content'>
                    <div className='user-stats'>
                        <CurrentStats />
                        <NewStats />
                    </div>
                    <p>Users</p>
                    <div className='search-container'>
                        <input placeholder='Search'></input>
                        <AiOutlineSearch fill='#757575' />
                        <button>Delete User</button>
                    </div>


                    <table>
                        <thead>
                            <tr>
                                <th style={{ 'textAlign': 'center' }}>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ 'textAlign': 'center' }}>
                                    <img src={avatar} alt='profile' className='avatar' />
                                </td>
                                <td >Ziad Tarek Farouk</td>
                                <td >ziadtarekfa@gmail.com</td>
                                <td >+201066324579</td>
                                <td >Male</td>
                                <td>
                                    <AiOutlineEye size='25px' />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ 'textAlign': 'center' }}>
                                    <img src={avatar} alt='profile' className='avatar' />
                                </td>
                                <td >Ziad Tarek Farouk</td>
                                <td >ziadtarekfa@gmail.com</td>
                                <td >+201066324579</td>
                                <td >Male</td>
                                <td>
                                    <AiOutlineEye size='25px' />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ 'textAlign': 'center' }}>
                                    <img src={avatar} alt='profile' className='avatar' />
                                </td>
                                <td >Ziad Tarek Farouk</td>
                                <td >ziadtarekfa@gmail.com</td>
                                <td >+201066324579</td>
                                <td >Male</td>
                                <td>
                                    <AiOutlineEye size='25px' />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ 'textAlign': 'center' }}>
                                    <img src={avatar} alt='profile' className='avatar' />
                                </td>
                                <td >Ziad Tarek Farouk</td>
                                <td >ziadtarekfa@gmail.com</td>
                                <td >+201066324579</td>
                                <td >Male</td>
                                <td>
                                    <AiOutlineEye size='25px' />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ 'textAlign': 'center' }}>
                                    <img src={avatar} alt='profile' className='avatar' />
                                </td>
                                <td >Ziad Tarek Farouk</td>
                                <td >ziadtarekfa@gmail.com</td>
                                <td >+201066324579</td>
                                <td >Male</td>
                                <td>
                                    <AiOutlineEye size='25px' />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' />
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    );
}

export default User;