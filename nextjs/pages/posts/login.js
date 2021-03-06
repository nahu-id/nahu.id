// import Image from 'next/image'
import { GoMail } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import Link from 'next/link';

export default function Login(){
    const providers = ['twitter', 'github'];
    // const redirect = window.location.origin;

    return(
    <>
        <div className="flex h-screen justify-center item-center">
            {/* input section */}
            <div className='w-1/2 h-full px-32 pt-12'>
                <div className='w-full flex justify-center'>
                <img
                    src={"/logo.svg"}
                    alt="Nahu.id"
                    width="120px" height="120px"
                    className='w-full justify-center'
                />
                </div>
                <p className='text-2xl font-medium'>Sign in</p>
                <p className='mt-4'>If you don’t have an account register</p>
                <span className='inline-block'>You can <Link href='/posts/signup' ><a className='text-purple font-semibold'>Register here!</a></Link></span>

                <form className='mt-16'>
                    
                    {/* EMAIL INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Email</label>
                    <div className='flex items-center mb-12'>
                        <GoMail className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="text" placeholder='Enter your email address'></input>
                    </div>

                    {/* PASSWORD INPUT */}
                    <label className='block mb-1 text-sm text-gray'>Password</label>
                    <div className='flex items-center'>
                        <FiLock className='absolute ml-2'/>
                        <input className='pl-8 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-light focus:ring-0 focus:border-black' type="password" placeholder='Enter your password'></input>
                    </div>

                    <div className='flex justify-between mt-2'>
                        <div>
                            <input className='
                            rounded
                            border-gray
                            text-indigo-600
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-offset-0
                            focus:ring-purple
                            focus:ring-opacity-50
                            ' type="checkbox"></input>
                            <span className='ml-2 text-sm'>Remember me</span>
                        </div>
                        <span className='text-sm mt-1 font-thin'>Forgot password?</span>
                        
                    </div>

                    <button type="submit" className="w-full mt-12 shadow-md shadow-purple rounded-full px-5 py-2.5 text-sm font-medium text-center text-white bg-purple hover:text-black">
                        Login
                    </button>

                </form>

                {/* <div className="menu-list auth">
                    {!userInfo &&
                    providers.map((provider) => (
                        <a key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
                        {provider}
                        </a>
                    ))}
                    {userInfo && <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
                </div> */}
            </div>
            {/* image section */}
            <div className='w-1/2 h-full'>
                <img
                    src={"/bg-login.png"}
                    alt="Picture of the author"
                    width="100%" height="100%" layout="responsive" objectFit="cover"
                    className='w-full'
                />
            </div>
        
        </div>
    </>
    );
}