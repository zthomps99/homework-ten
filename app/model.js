var MODEL = (function(){
    var homeContent = `    <div class="home">
    <div class="hero">
        <div class="heroText">travel.fly</div>
        <div class="heroSubtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
            Fugiat aliquid minus nemo sed est.</div>
        <div class="learn-more">READ MORE</div>
    </div>
    <section class="promo-trips">
        <div class="tour">
            <h1>Israel</h1>
            <div class="price">from $1000</div>
            <div class="learnMore"><a href="tours1.html">LEARN MORE</a></div>
            <div class=toursImage><img src="images/israel.png"></div>
        </div>
        <div class="tour">
            <h1>U.S.A</h1>
            <div class="price">from $1500</div>
            <div class="learnMore"><a href="tours2.html">LEARN MORE</a></div>
            <div class=toursImage><img src="images/usa.png"></div>
        </div>
        <div class="tour">
            <h1>Israel</h1>
            <div class="price">from $1000</div>
            <div class="learnMore"><a href="tours3.html">LEARN MORE</a></div>
            <div class=toursImage><img src="images/australia.png"></div>
        </div>
    </section>
    <section class="booking">
        <div class="bookingWrapper">
            <h1>Booking form</h1>
            <div class="form">
                <div class="rowOne">
                    <input type="text" class="input1" placeholder="name...">
                    <input type="text" class="input1" placeholder="country...">
                </div>
                <div class="rowOne">
                    <input type="text" class="input2" placeholder="email...">
                    <input type="text" class="input2" placeholder="hotel...">
                </div>
            </div>
            <div class="formTwo">
                <label for="check"><span>Check-in</label></span>
                <input id="Check-in" type="month">
                <label for="check">Check-out</label>
                <input id="Check-in" type="month">
            </div>
            <div class="dropdowns">
                <div class="selection">
                    <label for="ages">Ages</label>
                    <select id="ages" name="ages">
                        <option value="18+">18+</option>
                        <option value="25+">25+</option>
                        <option value="35+">35+</option>
                        <option value="45+">45+</option>
                        <option value="55+">55+</option>
                    </select>
                </div>
                <div class="selection">
                    <label for="children">Children</label>
                    <select id="children" name="children">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="selection">
                    <label for="rooms">Rooms</label>
                    <select id="rooms" name="rooms">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div class="messageBox">
                <textarea type="text" placeholder="message..." class="input1"></textarea>
            </div>
            <input class="booking-submit" type="submit" value="SUBMIT"/>
        </div>
    </section>
</div>`;
    var aboutContent = `<section class="about">
    <div class="aboutSection">
        <h1><span>ABOU</span>T:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
</section>
<section class="quotes">
    <h1><span>CLIENT QUO</span>TES:</h1>
    <div class="clientRow">
    <div class="clientImage"><img src="images/client1.png"></div>
        <div class="clientText">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
        <div class="clientName">
            <p>- Miranda Brown</p>
        </div>
    </div>
    <div class="clientRow">
    <div class="clientImage"><img src="images/client2.png"></div>
    <div class="clientText">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
    <div class="clientName">
        <p>- Johnathan Wes</p>
    </div>
</div>
</section>`;
    var toursContent = `<div class="heroWrapper">
    <div class="toursHero">
        <h1>TOURS:</h1>
    </div>
</div>
<div class="toursWrapper">
    <div class="tour">
        <h1>Israel</h1>
        <div class="price">from $1000</div>
        <div class="learnMore"><a id="toursOne" href="toursOne.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/israel.png"></div>
    </div>
    <div class="tour">
        <h1>U.S.A</h1>
        <div class="price">from $1500</div>
        <div class="learnMore"><a href="toursTwo.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/usa.png"></div>
    </div>
    <div class="tour">
        <h1>Australia</h1>
        <div class="price">from $1800</div>
        <div class="learnMore"><a href="toursThree.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/australia.png"></div>
    </div>
    <div class="tour">
        <h1>New Zealand</h1>
        <div class="price">from $1200</div>
        <div class="learnMore"><a href="toursFour.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/new zealand.png"></div>
    </div>
    <div class="tour">
        <h1>France</h1>
        <div class="price">from $2500</div>
        <div class="learnMore"><a href="toursFive.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/france.png"></div>
    </div>
    <div class="tour">
        <h1>Egypt</h1>
        <div class="price">from $900</div>
        <div class="learnMore"><a href="toursSix.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/egypt.png"></div>
    </div>
    <div class="tour">
        <h1>Japan</h1>
        <div class="price">from $1300</div>
        <div class="learnMore"><a href="toursSeven.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/japan.png"></div>
    </div>
    <div class="tour">
        <h1>Canada</h1>
        <div class="price">from $2000</div>
        <div class="learnMore"><a href="toursEight.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/canada.png"></div>
    </div>
        <div class="tour">
        <h1>U.A.E</h1>
        <div class="price">from $3000</div>
        <div class="learnMore"><a href="toursNine.html">LEARN MORE</a></div>
        <div class=toursImage><img src="images/uae.png"></div>
    </div>
</div>`;
    var specialOffersContent = `<div class="offerWrapper">
    <div class="offerContain">
        <h1><span>Special Off</span>er (s):</h1>
        <div class="offerInfo">
            <div class="offerImage">
                <img src="images/f8be878f3e256c54c10350fc7b400f35.png">
            </div>
            <div class="offerHeader"><h1><span>Barcelona,</span> Spain</h1></div>
            <div class="offerAbout">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
            <div class="learnMore">LEARN MORE</div>
        </div>
        <div class="offerInfo">
            <div class="offerImage">
                <img src="images/special-offer-02.png">
            </div>
            <div class="offerHeader"><h1><span>Bangkok, Th</span>ailand</h1></div>
            <div class="offerAbout">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
            <div class="learnMore">LEARN MORE</div>
        </div>
    </div>
    </div>
    </div>`;
    var blogContent = `<section class="blog">
    <div class="blogHeader"><h1><span>BLOG:</span></h1></div>
    <div class="blog1">
        <div class="blogDate">06 <p class="date">JUN</p></div>
        <div class="blogHero">
            <img src="images/9cba108c5ac096ceff2a3d446e0b7b45.png">
        </div>
        <div class="blogLinks">
            <p class="title">Sed et persipiatis unde omnis iste natus</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
    </div>
    <div class="blog1">
        <div class="blogDate">23 <p class="date">JUL</p></div>
        <div class="blogHero">
            <img src="images/9cba108c5ac096ceff2a3d446e0b7b45.png">
        </div>
        <div class="blogLinks">
            <p class="title">Sed et persipiatis unde omnis iste natus</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
    </div>
</section>
</div>`;
    var contactContent = `<div class="contactHeader"><h1><span>CONTACT</span> US:</h1></div>
    <section class="mapContainer">
        <div class="map">
            <img src="images/c9630e6a0d4eea8424c9e77634f917b5.png">
            <div class="contact">
                <p>
                    travel-fly Inc. <br>
                    8901 Marmora Road, <br>
                    Glasgow, D04 89GR. <br>
                    Freephone:+1 800 559 6580 <br>
                    Telephone:+1 800 603 6035 <br>
                    FAX:+1 800 889 9898 <br>
                    E-mail: mail@travelfly.org <br>
                </p>
            </div>
        </div>
        <div class="contactForm">
            <input type="text" class="input1" placeholder="Name...">
            <input type="text" class="input1" placeholder="Email Address...">
            <input type="text" class="input1" placeholder="Company...">
            <div class="messageBox">
                <textarea type="text" placeholder="Message..." class="input1"></textarea>
            </div>
            <input class="contact-submit" type="submit" value="SEND MESSAGE"/>
        </div>
    </section>
    </div>`;



    var _changePageContent = function (pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

        if(pageName == "home") {
            $("#nav-holder").removeClass("aboutBorder");
            $("#logo").removeClass("aboutLogo");
            $("#links").removeClass("aboutLinks");
            $("#logo").addClass("logo");
        } else {
            $("#nav-holder").addClass("aboutBorder");
            $("#logo").addClass("aboutLogo");
            $("#links").addClass("aboutLinks");
            $("#logo").removeClass("logo");
        }

    };

        return {
            changePageContent: _changePageContent,
        };
})();