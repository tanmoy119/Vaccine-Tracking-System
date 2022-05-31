import React from 'react';
import styled from 'styled-components';

function Body() {
  return (<>
    <Container1>
        <Humanlogo src='img/home.svg' />

        <div className="content">
                <span>stay home, stay safe</span>
                <h3>protect yourself from covid-19</h3>
                <a href="" className="btn">State_wise Quarantine Regulation</a>
            </div>



    </Container1>
    <About>
        <Aboutlogo src='img/about.svg' />
        <div className="content">
                <h3>What is novel coronavirus?</h3>
                <p>Novel coronavirus (nCoV) is a provisional name given to coronaviruses of medical significance before a permanent name is decided upon. </p>
                <p>Although coronaviruses are endemic in humans and infections normally mild, such as the common cold (caused by human coronaviruses in ~15% of cases), cross-species transmission has produced some unusually virulent strains which can cause viral pneumonia and in serious cases even acute respiratory distress syndrome and death</p>
                <a href="#" className="btn">learn more</a>
            </div>


    </About>
    <Prevent>

    

        <div className="content">

            <div className="box">
                <img src="img/01.png" alt="alt"/>
                <h3>wear a mask</h3>
                <p>Wearing a face mask in public helps prevent the spread of COVID-19 — but only if worn properly, covering both your nose and mouth.</p>
            </div>

            <div className="box">
                <img src="img/02.png" alt="alt"/>
                <h3>wash your hand</h3>
                <p>Washing hands can keep you healthy and prevent the spread of respiratory and diarrheal infections from one person to the next. Germs can spread from other people </p>
            </div>

            <div className="box">
                <img src="img/03.png" alt="alt"/>
                <h3>consult doctor</h3>
                <p>To be worried if you have Covid symptoms and have tested positive is entirely understandable. But please do not panic. And, for your own sake, do not self-diagnose and/or self-medicate. </p>
            </div>

            <div className="box">
                <img src="img/04.png" alt="alt"/>
                <h3>avoid touching</h3>
                <p>Cover all surfaces of your hands and rub them together until they feel dry. Avoid touching your eyes, nose, and mouth with unwashed hands.</p>
            </div>

            <div className="box">
                <img src="img/05.png" alt="alt"/>
                <h3>avoid contact</h3>
                <p>Avoid physical contact like handshakes, hand holding or hugs. Avoid touching surfaces such as table tops, chairs, door handles etc. b) Practice good hygiene Wash your hands frequently using soap and water.</p>
            </div>

            <div className="box">
                <img src="img/06.png" alt="alt"/>
                <h3>clean everyday</h3>
                <p>Cleaning with a household cleaner that contains soap or detergent reduces the amount of germs on surfaces and decreases risk of infection from surfaces.</p>
            </div>

        </div>

    
    </Prevent>


    </>
  )
}

export default Body;


const Container1 = styled.div`
height: 100vh;
width: 100vw;

    .content{
        font-size: 50px;
        position: absolute;
        right: 100px;
        top:400px;
        border-style: none solid solid none;
        padding: 8px 18px;
        border-color: #8bff2b;
        border-width: 2px;

        span{
            color: #04aa6d;
            font-size: 30px;
        }

        .btn{
            font-size: 20px;
            color:white;
            text-decoration: none;
            border-radius: 50px;
            padding: 5px 10px ;
            background-color: #fa9805;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }

        .btn:hover{
            background-color: #04aa6d;

        }
    }


`

const Humanlogo = styled.img`
height:700px;
width:700px;
object-fit: contain;
position: absolute;
left: 300px;
top:100px;

`

const About = styled.div`
height: 100vh;
width: 100vw;

    .content{
        font-size: 50px;
        width: 40%;
        position: absolute;
        left: 100px;
        top:1200px;
        border-style: solid none none solid;
        padding: 8px 18px ;
        border-color: #8bff2b;
        border-width: 2px;
        
        

        p{
            font-size: 20px;
        }

        h3{
            color: #04aa6d;
        }

    .btn{
        font-size: 20px;
        color:white;
        text-decoration: none;
        border-radius: 50px;
        padding: 5px 10px;
        background-color: #fa9805;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    }
    .btn:hover{
        background-color: #04aa6d;

    }


    }

`

const Aboutlogo = styled.img`
height: 600px;
width:600px;
position: absolute;
right: 100px;


`

const Prevent = styled.div`
height: 100vh;
    .content{
        display: grid;
        grid-template-columns: 400px 400px 400px;
        gap:50px;
        justify-content: space-evenly;
        grid-template-rows: auto auto auto;
        margin:0 250px 0 250px;
       
        .box{
            display: flex;
            flex-flow: column;
            justify-content: center;
            background-color: #3b464c;
            text-align: center;
            transition: transform 450ms;

                h3{
                    padding: 0 0 10px 0;
                }

                p{
                    padding: 0 15px 25px 15px;
                }

             img{
                 margin:30px 0 40px 150px;
                 hight: 150px;
                 width:150px;
             }
        }

        .box:hover{
            transform: scale(1.09);
            opacity:1;
        }

        
    }

`