import { LOGO_URL, USER_ICON } from "../utils/constant";

const Header = ()=> {
    return (
         
        <div className="w-screen h-20 bg-amber-200 font-extrabold flex justify-between p-2">
            <div className="header-left">
                <img src={LOGO_URL} alt= "logo-image" className="w-14 h-14 cursor-pointer"/>
                <span>LLD </span>
            </div>

            <div className="header-right">
                <img src= {USER_ICON} alt="user-icon"  className="w-14 h-14 cursor-pointer mx-5"/>
            </div>
            
        </div>
   
        
    )
}

export default Header;