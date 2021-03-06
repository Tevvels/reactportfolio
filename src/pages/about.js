import React from "react";
import Container from "../components/Container"
import myFace from "../images/me.jpg"
import "./style.css"
import '../components/Container/about.css'
function about(){
    return(
        <div>
            <Container className={`container-about`} main={
                <>
                    <h1> Christopher Watkins, Web Dev </h1>
                    <p className={`about-text`}>
                    <img className={`about-img`} src={myFace}/>
                    My name is Christopher Watkins. I am a Developer here in Denver, CO. I have spent several years learning how to code. I am now currently in  Denver University's coding bootcamp for full stack web developement 
                    </p>
                    <p>Phone: 720-498-9054</p>
                    <p>Email: chrisbwatkins@gmail.com</p>


                    <figure class="icons">
                      <a href="https://www.github.com/tevvels" target="_blank">
                          <i class="fab fa-github"></i>
                         <p class="iconName">Github</p>
                      </a>
                    </figure>
                    <figure class="icons">
                     <a href="https://www.linkedin.com/in/christopher-watkins-315547153/" target="_blank">
                        <i class="fab fa-linkedin"></i>
                        <p class="iconName">Linkedin</p>
                    </a>
              </figure>
                </>
            }/> 
                      
            

        </div>
    )
} 

export default about;