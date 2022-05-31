import styled from 'styled-components';

const Logo = ()=> {
  return (
    <Logodiv>
        <h2>Covid -India</h2>
        <h2>Covid -India</h2>
    </Logodiv>
  )
}

export default Logo;

const Logodiv = styled.div`
        font-family: 'Poppins', sans-serif;
        display:flex;
        justify-content:center;
        align-items:center;
        height:70px;
        width:400px;
       // background: #090b13;
        position:relative;

        h2{
            position:absolute;
            color:#02c91d;
            transform: translate(-50,-50%);
            font-size: 3em;

        }

        h2:nth-child(1){
            colorL:transparent;
            -webkit-text-stroke:2px #057575;

        }
        h2:nth-child(2){
            colorL:#057575;
            animation: animate 4s ease-in-out infinite;

        }

        @keyframes animate{
            0%,100%
            {
                clip-path: polygon(0 55%, 13% 49%, 23% 47%, 34% 50%, 51% 61%, 64% 66%, 75% 68%, 89% 65%, 100% 57%, 100% 100%, 0 100%);

            }

            50%{
                clip-path: polygon(0 55%, 8% 61%, 20% 65%, 34% 66%, 48% 61%, 60% 55%, 73% 50%, 87% 46%, 99% 47%, 100% 100%, 0 100%);

            }
        }
`