import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { TiUserAdd } from 'react-icons/ti'
import { BsFillBookmarkFill } from 'react-icons/bs'

export default (props) => {
    return (
        <div className="bg-white border" style={{ borderRadius: "4px" }}>
            <div>
                <Image className="h-100 w-100" src="https://picsum.photos/750/200" style={{ "border-radius": "4px 4px" }} />
                <a href="#" className="flex-column text-center text-dark no-decoration">
                    <Image src="http://via.placeholder.com/64x64" style={{ "position":"relative", "left":"30%", "bottom":"15px", "border-radius": "32px" }}></Image>
                    <h3>User Name</h3>
                    <p>User Job</p>
                </a>
            </div>
            <div className="border-top p-2 shade">
                <a href="#" className="text-left d-flex w-100 justify-content-between text-dark no-decoration">
                    <div className="d-flex flex-column">
                        <span className="font-weight-light small-text">Connections</span>
                        <span className="font-weight-bold small-text">Grow your network</span>
                    </div>
                    <div>
                        <TiUserAdd/>
                    </div>
                </a>
            </div>
            <div className="border-top p-2 shade">
                <a href="#" className="text-dark no-decoration">
                    <div className="d-flex flex-column">    
                        <span className="font-weight-light small-text">Access exclusive tools & insights</span>
                        <span className="font-weight-bold small-text">Try Premium Free for 1 Month</span>
                    </div>
                </a>
            </div>
            <div className="d-flex flex-row border-top p-2 shade">
                    <a href="#" className="text-dark no-decoration">
                        <BsFillBookmarkFill/>
                        <span className="small-text">My items</span>
                    </a>
            </div>
        </div>
    )
}