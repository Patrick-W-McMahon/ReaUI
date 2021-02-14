import { useLocation } from 'react-router-dom';

const getPath = (path, index) => path.split('/').filter((e, i) => i <= index).join('/');

const BreadCrumb = ({capFirst, showHome}) => {
    const path = useLocation().pathname.toString();
    let arr = path.split('/');
    if(showHome) {
        arr[0]='home';
    } else {
        arr.splice(0, 1);
    }
    arr = arr.filter(el => el.length > 0);
    if(capFirst) {
        arr = arr.map(e => e.charAt(0).toUpperCase() + e.slice(1));
    }
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {arr.map((item, index) => <li key={`bc-${item}`} className="breadcrumb-item active" aria-current="page"><a href={getPath(path, index)}>{item}</a></li>)}
            </ol>
        </nav>
    );
}
export default BreadCrumb;