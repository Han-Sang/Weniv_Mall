//data를 불러오는 로직 -> 컴포넌트에서 가져다 씀
import axios from 'axios' 

// 기본 URL
const apiUrl = "https://test.api.weniv.co.kr/";

const instance = axios.create({
    baseURL : apiUrl, 
});



export const getProductData =  async () => {
    // 데이터 불러옴이 성공할 때 try
    try{
    // 게시물 데이터를 가져오기 위해 기본 URL(instance)에  'mall'을  추가
    const response = await instance.get("mall");
    return response.data;
    } 
    //  // 데이터 불러옴이 실패할 때 catch
    catch(error){
        console.log(error);
    }
};



