    import React, { Component } from 'react';
    import upwork from '../../Assessts/Photos/upwork-1.svg'
    import fiver from '../../Assessts/Photos/fiver-1.svg';
    import './FiverUpwrok.css'

    const FiverUpwork=()=>{

    return(

    <>
    <section className='FiverUpwork-sec'>
        <div className='container-fluid'>
            <div className='row py-4 align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12 column-width'>
                    <h4 className='discuss'>Let's Discuss Your Project Now!</h4>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 column-width'>
                    <h4 className='champion'>
                <i className="fa-brands fa-skype"></i>
                    WorkPress Champion</h4>
                </div>
            </div>
            <div className='row fiverUpwork-bg' >
                <div className='col-lg-6 col-md-6 col-sm-12 p-0 m-0 border-end border-bottom ' >
                    <a href="#"><img src={upwork}/></a>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 m-0 p-0 border-bottom'>
                <a href="#"><img src={fiver}/></a>
                </div>
            </div>
        </div>
    </section>
    </>

    )


    }
    export default FiverUpwork