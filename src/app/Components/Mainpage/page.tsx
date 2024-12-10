import Image from "next/image";
import Link from "next/link";

export default function Mainpage() {
    return(
        <div className="bg-[#0D0D0D]">

                    <div>
                        <h2 className="text-2xl text-center"><span className="text-yellow-600">Food</span>
                        <span className="text-white">tuck</span></h2>
                        </div>
                        <div className="m-6 gap-3 grid sm:grid-col-1 md:grid-cols-2 grid-rows-1">
                        <div><ul className="gap-5 text-white inline-flex">
                                <li className="text-yellow-600">Home</li>
                                <li><Link href="/Components/Menu">Menu</Link></li>
                                <li>Blog</li>
                                <li>Pages</li>
                                <li><Link href="/Components/Aboutus">About</Link></li>
                                <li><Link href="/Components/Ourshop">Shop</Link></li>
                                <li><Link href="/Components/Shop">Contact</Link></li>
                            </ul></div>
                            <div><Image src={"/search.png"} alt="lgo" width={250} height={160} className="w-[160px] h-[50px]"/></div>
                            

                    </div>             


                    <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-1 mt-6">
                    <div><h1 className="text-yellow-600 mt-2">Its Quick & Amusing!</h1>
                        <h2><span className="text-yellow-600 mt-2 text-4xl">Th</span><span className="text-white text-4xl">e Art of speed food Quality</span>
                        food Quality</h2>
                        <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</h2>
                        <button className="bg-yellow-800 text-white mt-2 px-6 py-3 rounded-2xl">See Menu</button>
                     </div>
                     <div><Image src={"/homepic.jpg"} alt="lgo" width={250} height={160} className="w-[450px] h-[350px]"/> </div>
                    </div>

                                {/* 2nd section */}

                    <div className="m-6 gap-3 grid sm:grid-col-1 lg:grid-cols-3 grid-rows-1 mt-6">
                    <div>
                    <h1 className="text-yellow-600 mt-2 italic">About us </h1>
                    <h2><span className="text-yellow-600 mt-2 text-4xl">We </span><span className="text-white text-4xl">
                        Create the best foody product</span></h2>
                        <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
                        <ul className="text-white mt-3">
                            <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
                            <li> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                        <button className="bg-yellow-800 text-white mt-2 px-6 py-3 rounded-2xl">Read More</button>
                     </div>

                     <div className="gap-1 grid sm:grid-col-1 lg:grid-cols-2 grid-rows-1"><div className="col-span-2"><Image src={"/pic1_1.png"} alt="lgo" width={250} height={160} className="w-[350px] h-[150px]"/> </div>
                        <div className="row-span-1"><Image src={"/pic1_2.png"} alt="lgo" width={250} height={160} className="w-[150px] h-[100px]"/> </div>
                        <div className="row-span-1"><Image src={"/pic1_3.png"} alt="lgo" width={250} height={160} className="w-[150px] h-[100px]"/> </div></div>
                    
                    
                    </div>

                        {/* <div className="6-/12 h-[356px] m-6 gap-3 grid grid-col-2 grid-rows-2">
                    
                        </div> */}



                                {/* <div className="w-full h-[550px] flex">
                <div className="w-2/12 h-[356px] m-6">

                </div>
                    <div className="w-4/12 h-[356px] items-center justify-between mt-12"> */}
                
                    {/* <h1 className="text-yellow-600 mt-2 italic">About us </h1>
                    <h2><span className="text-yellow-600 mt-2 text-4xl">We </span><span className="text-white text-4xl">
                        Create the best foody product</span></h2>
                        <h2 className="text-white mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
                        <ul className="text-white mt-3">
                            <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
                            <li> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>

                        <button className="bg-yellow-800 text-white mt-2 px-6 py-3 rounded-2xl">Read More</button>
                    </div>

                        <div className="6-/12 h-[356px] m-6 gap-3 grid grid-col-2 grid-rows-2">
                        <div className="col-span-2"><Image src={"/pic1_1.png"} alt="lgo" width={250} height={160} className="w-[350px] h-[150px]"/> </div>
                        <div className="row-span-1"><Image src={"/pic1_2.png"} alt="lgo" width={250} height={160} className="w-[150px] h-[100px]"/> </div>
                        <div className="row-span-1"><Image src={"/pic1_3.png"} alt="lgo" width={250} height={160} className="w-[150px] h-[100px]"/> </div>
                        </div>
                </div> */}

        </div>
    )
}        