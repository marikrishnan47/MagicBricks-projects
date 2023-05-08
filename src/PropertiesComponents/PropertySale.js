
import { Button, Card, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import photo from './image/photo.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const PropertySale = () => {
  let Properties=[
    {
      photo:"https://img.staticmb.com/mbphoto/property/cropped_images/2022/Aug/15/Photo_h300_w450/62626313_5_WhatsApp-Image-2022-08-15-at-3-08-37-PM_300_450.jpeg",
      phcon:"krish",
      place:'3 BHK Apartment for Rent in T Nagar',
      val:'Real value',
      toolcon:'STATUS',
      toolcon1:'Ready move',
      tools:'FURNISHING',
      tools1:'900 sqft',
      out:'20 out to 30',
      floor:'floor',
      BHK:'Multistorey apartment is available for rent. It is a good location . Please contact for more detail..',
      firstrupe:'₹74 Lac',
      secondrupe:'₹6,234 pev sqft',
      btn:'View Details',
  },  
  {
    photo:"https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/20/Photo_h180_w240/65862089_17_hoto2_180_240.jpg",
    phcon:" Divya",
    place:'Office Space for Rent in ICF Employees Colony Chennai',
    val:'Real value',
    toolcon:'AVALIBILTY',
    toolcon1:'IMMEDIATELY',
    tools:'TENANT PREFERRED',
    tools1:'Bachelors/Family',
    out:'600 sqt',
    floor:'CAPPT AREA',
    BHK:'The apartment features a unique design with large open plan layouts and dual access f..',
    firstrupe:'₹18,000',
    secondrupe:' ₹400 pev ',
    btn:'View Details',
}, 
{
  photo:"https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/25/Photo_h180_w240/65861599_4_concia4_180_240.jpg",
  phcon:" priya",
  place:'Office Space for Rent in ICF Employees Colony Chennai',
  val:'Real value',
  toolcon:'AVALIBILTY',
  toolcon1:'IMMEDIATELY',
  tools:'TENANT PREFERRED',
  tools1:'Bachelors/Family',
  out:'600 sqt',
  floor:'CAPPT AREA',
  BHK:'The apartment features a unique design with large open plan layouts and dual access f..',
  firstrupe:'₹18,000',
  secondrupe:'₹ 400 pev ',
  btn:'View Details',
}, 
{
  photo:"https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-1-Antonys-Park-Wood-Phase-2-Chennai-5042086_491_1022_310_462.gif",
  phcon:" Pooja",
  place:'O3 BHK For Sale in KK Nagar Kattupakkam, Chennai',
  val:'Real value',
  toolcon:'Carpet Area',
  toolcon1:'IMMEDIATELY',
  tools:'TENANT PREFERRED',
  tools1:'Bachelors/Family',
  out:'900 sqft',
  floor:'CAPPT AREA',
  BHK:'The apartment features a unique design with large open plan layouts and dual access f..',
  firstrupe:'₹1.0 Lac',
  secondrupe:' 13,611/sqft ',
  btn:'View Details',
}, 
{
  photo:"https://img.staticmb.com/mbphoto/property/cropped_images/2023/Apr/22/Photo_h180_w240/66381569_2_Bedroom-18009876969611822646_180_240.JPG",
  phcon:" jegan",
  place:'Office Space for Rent in ICF Employees Colony Chennai',
  val:'Real value',
  toolcon:'AVALIBILTY',
  toolcon1:'IMMEDIATELY',
  tools:'TENANT PREFERRED',
  tools1:'Bachelors/Family',
  out:'600 sqt',
  floor:'CAPPT AREA',
  BHK:'The apartment features a unique design with large open plan layouts and dual access f..',
  firstrupe:'₹18,000',
  secondrupe:' ₹400 pev ',
  btn:'View Details',
}, 
{
  photo:"https://cdn.staticmb.com/property/microsite/mb-banners/00756310/projectspotlight-img.jpg",
  phcon:"Ravi",
  place:'2 BHK 984 Sq-ft Flat For Sale',
  val:'Real value',
  toolcon:'Carpet Area',
  toolcon1:'708 sqft',
  tools:'TENANT PREFERRED',
  tools1:'Bachelors/Family',
  out:'3 (Out of 3 Floors)',
  floor:'CAPPT AREA',
  BHK:'Spacious 2bhk with ample ventillations and lightings...',
  firstrupe:'₹45.4 Lac',
  secondrupe:' ₹4,615 pev sqt',
  btn:'View Details',
}, 
 
  
]
  return (
      <div className='sale'>
        <div className='container'>
          <h1>2162 results | Owner Properties for Rent in Chennai</h1>
          <div className='row'>
            {Properties.map((value,index)=>{
              return <div className='col'>
              <div className='photo' key={index}>
                  <div className='img'>
                  <img src={value.photo}/>
                
                  <div className='upteded'>
                    <p>upteded today</p>
                  </div>
                  </div>
                  <p>owner:<span>{value.phcon}</span></p>
            </div>
            <div className='pro-owner'>
                <div className='owner-con' >
                   <div >
                     <p>{value.place}</p>
                     <a>{value.val}</a>
                   </div>
                    <div className='icons'>
                    <Popup trigger= { <FavoriteBorderIcon className='icon-popup' color="error"/>  } className='popup-form' modal nested>
                         {
                    close => (                     
                        <div className='view-login'>                           
                            <div className='login-form'>
                            <button onClick={() => close()} >
                            <ClearIcon/>
                            </button> 
                              <h1>Login to view Shortlisted Properties later</h1>
                              <p>Access anytime, anywhere!</p>
                            </div>
                             </div>
                              )
                          }
                      </Popup>
                      
                      <ReplyIcon/>
                      <MoreVertIcon/>
                    </div>  
                </div>
                <div className='Icon-sec'>
                  <div className='tools'>
                  <BedIcon/>
                    <div className='tools-con'>
                      <span>{value.tools}</span>
                      <p>{value.tools1}</p>
                    </div>               
                  </div>
                  <div className='tools tools-ex'>
                  <LocationCityOutlinedIcon/>
                    <div className='tools-con'>
                      <span>{value.toolcon}</span>
                      <p>{value.toolcon1}</p>
                    </div>               
                  </div>
                  <div className='tools'>
                  <GrassOutlinedIcon/>
                    <div className='tools-con'>
                      <span>{value.floor}</span>
                      <p>{value.out}</p>
                    </div>               
                  </div>
                  <div className='arrow-icon'>
                  <KeyboardArrowDownIcon/>
                  </div>
                  
                </div>
                <h2>{value.BHK}
            <KeyboardArrowDownIcon/>
            </h2>
            </div>
             <div className='amount'>
                <h3>{value.firstrupe}</h3>
                <p>{value.secondrupe}</p>
               
                <Popup trigger=
                         { <Button className='btn' color="error" >
                          {value.btn}
                          </Button> }
                modal nested>
                {
                    close => (
                      
                        <div className='modal'>
                           
                            <div className='content'>
                            <button onClick={() => close()} className='clear-btn'>
                            <ClearIcon/>
                            </button> 
                               <div className='photo ph-view' key={index} >
                               <p>owner:<span>{value.phcon}</span></p>
                                    <div className='img'>
                                    <img src={value.photo}/>
                                  
                                    <div className='upteded'>
                                      <p>upteded today</p>
                                    </div>
                                    </div>
                                    
                              </div>
                            </div>
                            <div>
                            <div className='pro-owner pro-view'>
                            <div className='owner-con' >
                              <div >
                                <p>{value.place}</p>
                                <a>{value.val}</a>
                              </div>
                                <div className='icons'>
                                  <FavoriteBorderIcon className='icons'/>
                                  <ReplyIcon/>
                                  <MoreVertIcon/>
                                </div>  
                            </div>
                <div className='Icon-sec'>
                  <div className='tools'>
                  <BedIcon/>
                    <div className='tools-con'>
                      <span>{value.tools}</span>
                      <p>{value.tools1}</p>
                    </div>               
                  </div>
                  <div className='tools tools-ex'>
                  <LocationCityOutlinedIcon/>
                    <div className='tools-con'>
                      <span>{value.toolcon}</span>
                      <p>{value.toolcon1}</p>
                    </div>               
                  </div>
                  <div className='tools'>
                  <GrassOutlinedIcon/>
                    <div className='tools-con'>
                      <span>{value.floor}</span>
                      <p>{value.out}</p>
                    </div>               
                  </div>
                  <div className='arrow-icon'>
                  <KeyboardArrowDownIcon/>
                  </div>
                  
                </div>
                <h2>{value.BHK}
            <KeyboardArrowDownIcon/>
            </h2>
                             </div>
                  
               
                            </div>
                        </div>
                    )
                }
            </Popup>
                  
             </div>
             </div>
              
            })}
            
          </div>
        </div>
     </div>
  )
}
