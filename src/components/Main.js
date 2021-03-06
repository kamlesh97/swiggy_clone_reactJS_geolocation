import React, { useState } from 'react'
// import './img'
// import '../../public/img/'
function Main() {
    
    const [search, setsearch] = useState('')

    // setsearch()

    return (
        <div>
           <header>
            <nav class="nav row">
                <a href="#"> <i class="fab fa-phoenix-squadron"></i> </a>

                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>

                <ul class="nav_list">
                    <li class="nav_list__item"> <a href="#delivery" class="nav_list__link">Food Delivery</a> </li>
                    <li class="nav_list__item"><a href="#how" class="nav_list__link">How It Works</a></li>
                    <li class="nav_list__item"><a href="#city" class="nav_list__link">Our Cities</a></li>
                    <li class="nav_list__item"><a href="#sign_up" class="nav_list__link">Sign up</a></li>
                </ul>
            </nav>

            <div class="center_content">
                <p class="tag_line">Goodbye junk food. <br /> Hello super healthy meals.</p>
                <div class="btn_container">
                    <a class="btn full" href="#">Order food</a>
                    <a class="btn ghost" href="#">Show me more</a>
                </div>
            </div>
        </header>


        <section class="section-features" id="delivery">
            <div class="row">
                <h2>Get food fast &mdash; not fast food</h2>
                <p class="feature_explanation">Hello, we’re Leafy, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
            </div>
            
            <div class="row delivery_features">                
                 <div class="col">
                    <ion-icon name="planet" class="icon-features"></ion-icon>
                    <h3>365 days</h3>
                    <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                </div>
                
                <div class="col">
                    <ion-icon name="alarm" class="icon-features" ></ion-icon>
                    <h3>Ready in 20 minutes</h3>
                    <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                </div>
                
                <div class="col">
                    <ion-icon name="leaf" class="icon-features"></ion-icon>
                    <h3>100% organic</h3>
                    <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                </div>
                
                <div class="col">
                    <ion-icon name="infinite" class="icon-features"></ion-icon>
                    <h3>Order anything</h3>
                    <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
                </div> 
            </div> 
            <div class="to_top"> <a href="#"><ion-icon name="arrow-up-circle-outline"></ion-icon></a> </div>   
         </section>

         
         <section>
            <h2>Favorite Meals</h2>
            
            <div class="gallary row">
                <div class="gallary_item">
                    <img class="gallary_item__img" src='./img/1.jpg' />
                    <div class="description">Korean bibimbap with egg and vegetables</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/2.jpg" />
                    <div class="description">Simple italian pizza with cherry tomatoes</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/3.jpg" />
                    <div class="description">Chicken breast steak with vegetables</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/4.jpg" />
                    <div class="description">Autumn pumpkin soup</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/5.jpg" />
                    <div class="description">Paleo beef steak with vegetables</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/6.jpg" />
                    <div class="description">Healthy baguette with egg and vegetables</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="../img/7.jpg" />
                    <div class="description">Burger with cheddar and bacon</div>
                </div>
                
                <div class="gallary_item">
                    <img class="gallary_item__img" src="./img/8.jpg" />
                    <div class="description">Granola with cherries and strawberries</div>
                </div>
            </div>
        </section> 
    
    <section id="how">
            <h2>How it works</h2>
            
            <div class="row">
                <div class="how_container">

                    <img class="phone_img" src="./img/app-iPhone.png" class="iphone" />
                
                    
                    <div class="order_steps">
                        <div class="order_step">
                            <div>1</div>
                            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                        </div>
                        <div class="order_step">
                            <div>2</div>
                            <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                        </div>
                        <div class="order_step">
                            <div>3</div>
                            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                        </div>

                        <a href="#"><img src="./img/download-app-android.png" class="download" /> </a>
                        <a href="#"><img src="./img/download-app.svg" class="download" /> </a>
                    </div>

                </div>

            </div> 
        </section>    

    <section id="city">
            <h2>Our Cities</h2>
            
            <div class="row">
               <div class="cities">

                    <div class="city"> 
                        <img src="./img/new_delhi.jpg" class="city_img"/>

                        <div class="description">
                            <p>DELHI<br />2300+ happy eaters<br />110+ top chefs<br />@leafy_delhi</p>
                        </div>
                    </div>
                    
                    <div class="city">
                        <img src="./img/mumbai.jpg" class="city_img" />
                        
                        <div class="description">
                            <p>MUMBAI<br />1600+ happy eaters<br />60+ top chefs<br />@leafy_mumbai</p>
                        </div>
                    </div>
                    
                    <div class="city">
                        <img src="./img/udaipur.jpg" class="city_img"/>
                        
                        <div class="description">
                            <p>UDAIPUR <br /> 1200+ happy eaters<br />50+ top chefs<br />@leafy_udaipur</p>
                        </div>
                    </div>
                    
                    <div class="city">
                        <img src="./img/kolkata.jpg" class="city_img"/>
            
                        <div class="description">
                            <p>KOLKATA<br />3700+ happy eaters<br />160+ top chefs<br />@leafy_kolkata</p>
                        </div>
                    </div>

                </div>
            
            </div>
        </section>


    <section class="customer_testimonials">
            <h2>Our customers can't live without us</h2>

            <div class="row">
                <div class="testimonials_wrapper">
                    <div class="feedback">
                        <blockquote>leafy is just awesome! I just launched a startup which leaves me with no time for cooking, so leafy food delivery is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src="./img/customer-1.jpg" />Vikas Singh</cite>
                        </blockquote>
                    </div>
                    <div class="feedback">
                        <blockquote>Leafy is the best, you dont have to worry about the quality of food anymore. Timely delivery and delicious food is what makes leafy one of the best in market. Love it
                        <cite><img src="./img/customer-2.jpg" />Mojo Jojo</cite>
                        </blockquote>
                    </div>
                    <div class="feedback">
                        <blockquote>I was looking for a quick and easy food delivery service in Udaipur. I tried a lot of them and ended up with leafy. Best food delivery service in the Bay Area. Keep up the great work!
                        <cite><img src="./img/customer-3.jpg" />Rani Keth</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>    

        
    <section id="sign_up">
            <h2>Start eating healthy today</h2>
            
            <div class="row">

                <div class="plans_wrapper">

                    <div class="plan">
                        <div class="plan_name">
                            <h4>Premiun</h4>
                            <p class="plan_rate"> &#8377;6000<span>/month</span></p>
                            <p class="rate_perMeal">That’s only 200&#8377; per meal</p>
                        </div>
                        <div class="plan_features">
                            <ul>
                                
                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>1 meal every day</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Order 24x7</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Access to newest creations</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Free delivery</li>
                            </ul>
                        </div>
                        
                        <div class="signup_btn_wrapper">
                            <a href="#sign_up" class="signup_btn">Sign Up</a>
                        </div>
                        
                    </div>
                    
                    <div class="plan">
                        <div class="plan_name">
                            <h4>Pro</h4>
                            <p class="plan_rate">&#8377;3000<span>/month</span></p>
                            <p class="rate_perMeal">That’s only 300&#8377; per meal</p>
                        </div>
                        <div class="plan_features">
                            <ul>
                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>1 meal 10 days/month</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Order 24x7</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Access to newest creations</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Free delivery</li>
                            </ul>
                        </div>
                        
                        <div class="signup_btn_wrapper">
                            <a href="#sign_up" class="signup_btn">Sign Up</a>
                        </div>
                        
                    </div>
                    
                    <div class="plan">
                        <div class="plan_name">
                            <h4>Starter</h4>
                            <p class="plan_rate">&#8377;550<span>/meal</span></p>
                            <p class="rate_perMeal">&zwnj;</p>
                        </div>
                        <div class="plan_features">
                            <ul>
                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>1 meal</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Order from 8 am to 12 pm</li>
                                
                                <li><ion-icon name="close" class="icon-signUp"></ion-icon>Access to newest creations</li>

                                <li><ion-icon name="checkmark" class="icon-signUp"></ion-icon>Free delivery</li>
                            </ul>
                        </div>
                        
                        <div class="signup_btn_wrapper">
                            <a href="#sign_up" class="signup_btn">Sign Up</a>
                        </div>
                        
                    </div>

                </div>
                

            </div>
        </section>



    <section className="section-form" >
            <h2>We're happy to hear from you</h2>    

            <div className="row">
                <form>
                    <div class="form_element">
                        <label for="name">Name</label>
                        <input class="form_input" type="text" id="name" placeholder="your name" required />
                    </div>

                    <div class="form_element">
                        <label for="email">E-mail</label>
                        <input class="form_input" type="text" id="email" placeholder="your name" required />
                    </div>

                    <div class="form_element">
                        <label for="find-us">How did you find us?</label>
                        <select id="find-us" class="form_input">
                            <option value="friends">Friends</option>
                            <option value="advertisment">Avertisment</option>
                            <option value="newspaper">Newspaper</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form_element newsletter">
                        <label for="newsletter">Newsletter</label>
                        <div class="form_input">
                            <input type="checkbox" id="newsletter" /> Yes, Please
                        </div>   
                    </div>

                    <div class="form_element">
                        <label for="feedback">Drop us a message</label>
                        <textarea class="form_input" type="text" id="feedback" placeholder="your message" rows="4" > </textarea>
                    </div>

                    <div class="form_btn">
                        <button type="submit" >SEND MESSAGE</button>
                    </div>
                </form>
            </div>    
        </section>    


    <footer>
            <div class="row">
                <div class="footer_links_wrapper">
                    <nav class="footer_nav">
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>ios App</li>
                            <li>Android App</li>
                        </ul>
                    </nav>
                    <div class="social_links">
                        <ul>
                            <li><ion-icon name="logo-instagram"></ion-icon></li>
                            <li><ion-icon name="logo-twitter"></ion-icon></li>
                            <li><ion-icon name="logo-facebook"></ion-icon></li>
                            <li><ion-icon name="logo-google"></ion-icon></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <p class="footer_text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            </div>
        </footer>
        

    </div>

    )
}

export default Main
