import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiMenuAlt, TfiWallet, TfiFile, TfiSettings, TfiStatsUp, TfiMedallAlt } from "react-icons/tfi";
import { AiFillCloud } from "react-icons/ai";
import { WiNightLightning } from "react-icons/wi";
import { HiMail, HiBell } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { MdFilterHdr } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div className='mother' style={{
        width: '260px',
        height: '660px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px 0px rgba(2,2,0,0.5)', // Définition de l'ombre
      }}>
        <h3 className='texte'>
          <AiFillCloud className='nuage1' style={{ color: 'blue', width: '100px', height: '70px', }} />cloudcash
        </h3>
        <br />
        <div className='choices'>
          <h3><TfiStatsUp />broverview</h3>
          <h3><TfiWallet /> cards</h3>
          <h3><TfiMenuAlt />transactions</h3>
          <h3><TfiFile /> invoices</h3>
          <h3><TfiMedallAlt />goals</h3>
          <h3><TfiSettings /> settings</h3>
          <br /><br />
          <h2><WiNightLightning className='nuage2' style={{ color: 'blue', justifyItems: 'fit-content', width: '170px', height: '120px', marginTop:"45px" }} /></h2>
        </div>
      </div>

      <br />

      <div className='header' style={{ width: '100%', height: '45px' }}>
        <div className='texte22'>
          <h3>weekly sumup</h3>
          <h6 className='texte2'>get summary of your weekly online transactions here</h6>
        </div>


        <div className='icon'>
          <HiMail style={{ height: '90px', width: '25px', color:'gray' }} />
          <HiBell style={{ height: '90px', width: '25px' , color:'gray'}} />
          <img
             src={process.env.PUBLIC_URL + '/images/profil.jpg'}
             alt="images"
             style={{
              width: '37px',
              height: '38px',
              borderRadius: '20px',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
             }} 
              ></img> Derson Fyti    
             </div>


        <div className='cards' style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(2,2,0,0.5)',
        }}>
          <IoIosArrowBack />
          <img
            src={process.env.PUBLIC_URL + '/images/carte.jpg'}
            alt="images"
            style={{
              width: '350px',
              height: '270px',
              borderRadius: '8px',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
            }}
            ></img>
            <IoIosArrowForward />

          <div className='transaction' style={{flexDirection:'column', width:'50px', height:'35px', display:'flex'}}>
            <th>$25000,9</th>
          </div>

            </div>


        <th className='but'>GOAL <FaCirclePlus style={{color:'orange'}}/></th>


        <div className='forms' style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(2,2,0,0.5)',
          position: 'relative'
        }}>
         
          <th>$8200</th>
          <th></th>
          <td>12/20/20</td>
          <IoGameController style={{color:'green'}}/>
          <td>Xbox</td>
        </div>

        <div className='forms1' style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(2,2,0,0.5)',
        }}>

           <th>$200</th>
           <th></th>
          <td>12/20/20</td>
          <PiPaintBrushHouseholdFill style={{color:'orange'}} />
          <td>Renovation</td>
        </div>

        <div className='forms2' style={{
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(2,2,0,0.5)',
        }}>
           
           <th>$550</th>
           <th></th>
           <td>12/20/20</td>
           <MdFilterHdr  style={{color:"blue"}}/>  
           <td>Hollydays</td>
        </div>

      </div>

    </div>
    
  );
}

export default App;
