import React , { useContext, useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { CheckCircle,XCircle,Loader2 } from 'lucide-react'

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const storedToken = localStorage.getItem("token");
  const { url,clearCart, removeFromCart, setCartItems, token, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");

  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
      <div className=' text-center flex flex-col items-center'>
        {status === "loading" && (
          <div className=' flex flex-col items-center animate-pulse'>
            <Loader2 className=' w-20 h-20 animate-spin text-cyan-400 mb-6' />
            <p className=' text-gray-300 mt-2'>Verifying your order...</p>
          </div>
        )}
        {status === "success" && (
          <div className=' flex flex-col items-center animate-pulse'>
            <CheckCircle className=' w-20 h-20 text-green-500 mb-6' />
            <p className=' text-gray-300 mt-2'>Order verified successfully!</p>
          </div>
        )}
        {status === "error" && (
          <div className=' flex flex-col items-center animate-pulse'>
            <XCircle className=' w-20 h-20 text-red-500 mb-6' />
            <p className=' text-gray-300 mt-2'>Failed to verify order.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Verify
