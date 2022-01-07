import './Stats.css'

const Stats = ( props ) => {

   return(

        <header>
            <div className="d-flex justify-content-center align-items-center header-background w-100">
                <div className="d-flex justify-content-around align-items-center w-100">

                    <div className='row statblocks-container'>

                        <div className='col-12'>
                            <h1 className='text-white'>DNA Tests</h1>
                        </div>

                        { props.children }

                    </div>

                </div>
            </div>
        </header>

    )

}

export default Stats