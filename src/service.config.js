const MOCKURL = 'http://www.google.com/';
const REALURL = 'http://localhost:3000/';

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: REALURL + 'user/registUser',
    loginUser: REALURL + 'user/loginUser',
    getTypes: REALURL + 'type/getTypes',
    getProductsByType: REALURL + 'product/getProductsByType',
    getDetail: REALURL + 'product/getDetail',
    addCart: REALURL + 'cart/addCart',
    getCartInfo: REALURL + 'cart/getCartInfo',
    delItem: REALURL + 'cart/delItem'
};

export default URL;