import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Banner() {
    const history = useHistory();

    function LinkToTeam()
    {
        localStorage.setItem('teamf', "flag");
        history.push("/team");
    }
  return (
    <section className=" pb-3 bg-cover bg-center d-flex align-items-center banner-ctn">
        <div className="container book-ctn">
            <div className="px-4 px-lg-5 book-ctn-1">
                <p className="text-uppercase mb-2">roomus.com</p>
                <h1 className="text-uppercase">WELCOME TO ROOMUS!</h1><a className="btn book-now-btn" href="./shop">Book now! <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "20px"}}/> </a>
            </div>
            <div className='bool-ctn-2'>
                <div className='logo-app'></div>
            </div>
        </div>
        <div className="container py-5 team-ctn" onClick={LinkToTeam}>
            <div className="px-4 px-lg-5 symbol-ctn">
                <div className='symbol-team'> </div>
                <h1>YOUR TEAMS</h1>
            </div>
        </div>
    </section>
  )
}
