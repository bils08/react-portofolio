import './index.scss';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';

const layout = () => {
    return (
     <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br/>
        <span className='bottom-tags-html'></span>
        </span>
      </div>
     </div>
    )
}

export default layout;