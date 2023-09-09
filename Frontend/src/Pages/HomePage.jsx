import Navbar from '../Navbar/navbar';
import MainBanner from '../Main/MainBanner';
import Products from '../Sections/Products';
import WomenProducts from '../Sections/WomenProducts';
import Footer from '../Footer/Footer';
import KidsProducts from '../Sections/KidsProducts';
import BackToTop from './BackToTop1.jsx';
import { useApi } from '../Context/ApiContext';
// const API = "http://127.0.0.1:8000/api/posts/";
function HomePage() {
    // const [getData, setData] = useState([]);
    // const getProductData = async (url) => {
    //     const res = await axios.get(url);
    //     console.log(res.data);
    //     setData(res.data?.posts);
    //     // console.log(res.data);
    // }

    // useEffect(() => {
    //     getProductData(API);
    // }, []);
     const { data } = useApi();

    // Use the data in your component
    console.log(data);
    return (
        <>
            <Navbar />
            <MainBanner />
            <Products data = {data}/>
            <WomenProducts data = {data}/>
            <KidsProducts data = {data}/>
            <Footer />
            <BackToTop />
        </>
    )
}
export default HomePage