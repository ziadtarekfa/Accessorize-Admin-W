import { AiOutlineSearch } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';
import avatar from '../assets/avatar.jpg';
import '../componentStyles/view-table.css';
const ViewTable = ({ text }) => {
    return (
        <>
            <div className='search-container'>
                <input placeholder='Search'></input>
                <AiOutlineSearch fill='#757575' />
                <button>Delete {text}</button>
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
                </tbody>
            </table>
            <div className='pagination'>
                <button>{'<'}</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>{'>'}</button>
            </div>
        </>
    );
}

export default ViewTable;