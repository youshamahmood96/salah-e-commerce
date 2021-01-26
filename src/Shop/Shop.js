import fakeData from '../Assets/fakeData'
import ShopComponents from './ShopComponents'
const Shop = () => {
    return(
        <>
        {
            fakeData.map(item=><ShopComponents item={item}></ShopComponents>)
        }
        </>
    )
}
export default Shop