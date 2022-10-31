const Header =(props)=>{
    const header1 = {
        padding: '20px',
        textAlign: 'center',
        background: '#1abc9c',
        color: 'white',
        fontSize: '30px',
    
      }
    return(
         <div className="header" style={header1} >
         <h1>Header</h1>
         <p>my name is khan i am not team member</p>
         </div>
         )
         }
export default Header