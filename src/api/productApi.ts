import { FAKE_DATA } from 'data-mock/fake-data'
import { IProducts } from 'models/IProducts';
const getAllProducts = () => {
    return new Promise<IProducts[]>((resolve) => {
        setTimeout(() => {
            resolve(FAKE_DATA)
        }, 2000) ;
    })
}
const PRODUCT_API = {
    getAllProducts
}
export default PRODUCT_API