import { useState } from "react";
import LikeOutline from "../../icons/LikeOutline";
import LikeSolid from "../../icons/LikeSolid";


const CardDetail = ({ detail }) => {

  
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="lg:w-full bg-white">
      <table className="">
        <tbody className="flex">
          <tr className="lg:w-full">
            <td className="mr-2">{detail.id}</td>
            <td className="border-b border-black w-[100px] p-4">
              <img src={detail.image} alt="img" className="lg:w-14 lg:h-14" />
            </td>
            <td className="border-b border-black w-[300px] text-sm lg:text-base font-medium">
              <h3>{detail.title}</h3>
            </td>
            <td className="border-b border-black w-[300px]">
              {
                !isActive ? <button 
                onClick={() => setIsActive(true)}
              ><LikeOutline />
              </button> 
              :
              <button onClick={() => setIsActive(false)}>
                <LikeSolid />
              </button>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardDetail;
