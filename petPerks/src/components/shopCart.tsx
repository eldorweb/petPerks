import { useState } from "react";


const ShopCart = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        if (count < 10) {
            setCount(count + 1);
        }
    }
    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <div className="flex flex-col text-center">
            <div className="py-[89px] bg-[#2D0B03CC]">
                <h1 className="text-[#fff] font-[lufga600] text-[40px] mb-[16px]">Cart</h1>
                <p className="text-[#fff] text-[16px] fonr-[lufga400]">Home   {'>'}  Cart</p>
            </div>
            <div className="py-[91px] px-[316px]">
                <table className="w-[60%] text-start">
                    <thead>
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <th className="text-start">Product</th>
                            <th className="text-start">Price</th>
                            <th className="text-start">Quantity</th>
                            <th className="text-start">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px]" />
                                <p>Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td>$40.00</td>
                            <td className="">
                                <div className="flex items-center">
                                    <button className="" onClick={handleDecrement}>-</button>
                                    <div className="">{count}</div>
                                    <button className="" onClick={handleIncrement}>+</button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center">
                                    <p className="">$160.00</p>
                                    <button className="">x</button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                        
                        {/*  */}
                        <tr className="border-b-[1px] border-b-[#00000020]">
                            <td className="">
                                <div className="flex items-center">
                                <img src={'https://m.media-amazon.com/images/I/61qjyzM3+BL._AC_SX148_SY213_QL70_.jpg'} alt="" className="w-[80px] h-[80px]" />
                                <p>Brush for Dogs and Cats</p>
                                </div>
                            </td>
                            <td>$40.00</td>
                            <td className="">
                                <div className="flex items-center">
                                    <button className="" onClick={handleDecrement}>-</button>
                                    <div className="">{count}</div>
                                    <button className="" onClick={handleIncrement}>+</button>
                                </div>
                            </td>
                            <td className="">
                                <div className="flex items-center">
                                    <p className="">$160.00</p>
                                    <button className="">x</button>
                                </div>
                            </td>
                        </tr>
                        {/*  */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShopCart