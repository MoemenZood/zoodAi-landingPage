export default function CustomComponent(){
    return(  
        <>  
        {/* section one w-[750px] */}
<div className="flex  px-[150px] my-6 "> 
<div> 
<img className="flex-grow  w-[700px] h-[400px] " src="../../four.jpg" alt="image"/>
</div> 
<div className="flex flex-col justify-center px-[30px] gap-10"> 
    <h2 className="text-5xl font-semibold leading-[50px] ">Stay in Control, Whenever, Wherever</h2>
    <p>Closely manage your business on the go from your tablet. Keep an eye on your sales and inventory at all times and stay on top of your operations.</p>
</div> 
</div>  
{/* section */}
<div className="flex  px-[150px] my-6 mb-[30px]"> 
<div className="flex flex-col justify-center pr-[30px] gap-10"> 
    <h2 className="text-5xl font-semibold leading-[50px] ">Streamline Your Operations Even More with Zood AI</h2>
    <p>Integrate your   front of house & kitchen staff seamlessly leaving no room for unnecessary delays or mistakes.</p>   
</div>
<div> 
<img className="flex-grow  w-[700px] h-[400px]" src="../../dashboard.jpg" alt="image"/>
</div> 
</div>  
{/* section w-[624px] */}
<div className="flex  px-[150px] my-6 mb-[30px] "> 
<div> 
<img className="flex-grow  w-[700px] h-[400px] " src="../../three.webp" alt="image"/>
</div> 
<div className="flex flex-col justify-center  gap-10"> 
    <h2 className="text-5xl font-semibold leading-[50px] ">Know Your Customers, Serve Them Better
    </h2>
    <p>Compile customer data easily and recompense their loyalty with accurately targeted rewards, gift cards and loyalty programs.</p>
</div>
</div> 

        </>
    )
}