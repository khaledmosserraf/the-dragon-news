import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12'>
            <img className='mx-auto' src={logo} alt="" />
            <p className="text-lg mt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl my-3">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;