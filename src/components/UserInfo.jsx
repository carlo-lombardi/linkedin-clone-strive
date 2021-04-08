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



{/* <div id="ember925" class="artdeco-card overflow-hidden mb2 feed-identity-module ember-view"><!---->
<div class="feed-identity-module__actor-meta profile-rail-card__actor-meta break-words">
        <div class="feed-identity-module__default-bg profile-rail-card__default-bg
      feed-identity-module__member-bg-image profile-rail-card__member-bg-image
      
    ">
            <!---->  </div>

        <a href="/in/juan-jose-arana-fu-136b6920a/" id="ember926" class="block ember-view">    <div data-control-name="identity_profile_photo">
            <img width="64" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" loading="lazy" height="64" alt="" id="ember927" class="feed-identity-module__member-photo profile-rail-card__member-photo EntityPhoto-circle-5 lazy-image ghost-person ember-view">
    </div>
            <div class="profile-rail-card__actor-link t-16 t-black t-bold" data-control-name="identity_welcome_message">
                Welcome, Juan Jose!
    </div>
</a>
            <a data-control-name="identity_add_photo" href="/in/juan-jose-arana-fu-136b6920a/guided/add-photo/photo/?contextType=FEED" id="ember928" class="feed-identity-module__action ember-view">      <div class="t-12 t-normal mt1">
                <span>Add a photo</span></div>

            </a></div>

        <div class="feed-identity-module__widgets mv3">
            <div id="ember929" class="feed-identity-module__entity-list entity-list-wrapper ember-view">
                <ul class="entity-list row">
                    <li class=" entity-list-item">
                        <div id="ember930" class="entity-item ember-view">  <a href="/mynetwork/" id="ember931" class="ember-view full-width">
                            <div id="ember932" class="ember-view"><div class="display-flex align-items-baseline">
                                <div class="text-align-left">
                                    <div class="t-12 t-black--light t-bold mr2">
                                        <span>Connections</span></div>

                                    <div class="t-12 t-black t-bold">
                                        <span>Grow your network</span></div>

                                </div>
                                <div class="feed-identity-widget-item__icon-stat t-12 t-black t-bold flex-1">
                                    <li-icon type="connect-icon" class="v-align-middle" size="small" role="img" aria-label="Grow your network by adding connections."><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                    </svg></li-icon>
                                </div>
                            </div>
                            </div>
                        </a>

                        </div>
                    </li>
                </ul>

                <!---->
</div>
        </div>


        <div class="premium-upsell-link">
            <a class="app-aware-link link-without-visited-state feed-identity-module__anchored-widget feed-identity-module__anchored-widget--premium-upsell t-12 t-black t-bold link-without-hover-state text-align-left premium-upsell-link--extra-long" href="https://www.linkedin.com/premium/products?upsellOrderOrigin=premium_homepage_identity_upsell&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue">

                <h3 class="t-12 t-black--light t-normal">
                    Access exclusive tools &amp; insights
        </h3>
                <span class="display-flex">
                    <li-icon aria-hidden="true" type="premium-app-icon" class="feed-identity-module__premium-icon mr1 flex-shrink-zero"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                        <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                    </svg></li-icon>
                    <span class="feed-identity-module__anchored-widget-text--premium-upsell">
                        Try Premium Free for 1 Month
          </span>
                </span>

            </a>
        </div>

        <a data-control-name="identity_my_items" href="/my-items/" id="ember933" class="feed-identity-module__anchored-widget link-without-hover-state p3 text-align-left ember-view">    <span class="t-12 t-black t-bold v-align-middle block"> */}
    //         <li-icon aria-hidden="true" type="ribbon-filled-icon" class="t-black--light v-align-middle mr1" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
    //             <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
    //         </svg></li-icon> My items
    // </span>
    //     </a></div>