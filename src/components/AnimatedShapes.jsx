
import styled from 'styled-components';

const Square = styled.div`
                width:60px;
                height:60px;
                background-color:#FF8000;
                opacity:0.7;
                position:absolute;
                top:-60px;
                left:-60px;
                z-index:-1;

                animation: square 25s linear alternate infinite;

                @keyframes square {
                    to{
                        transform:translate(50vw, 90vh);
                    }
                }
                `;

        const Circle = styled.div`
                width:100px;
                height:100px;
                border-radius:50%;
                background-color:#ff97af;
                
                position:absolute;
                top:500px;
                left:-50px;
                z-index:-1;
                animation: circle 40s linear alternate infinite;

                @keyframes circle {
                    to{
                        transform:translate(100vw, -100vh);
                    }
            }
            `;

            const Rect = styled.div`
                width:80px;
                height:100px;

                background-color: #00FF00;
                opacity:0.5;
                position:absolute;
                top:300px;
                left:-50px;
                z-index:-1;
                animation: rect 30s linear alternate infinite;

                @keyframes rect {
                    to{
                        transform:translate(100vw, -100vh);
                    }
            }
            `;

            const Rect2 = styled.div`
            width:100px;
            height:60px;

            background-color:#ffff00;
            opacity:0.8;
            position:absolute;
            right:0px;
            top:0px;
            z-index:-1;
            animation: rect2 30s linear alternate infinite;

            @keyframes rect2 {
                to{
                    transform:translate(-100vw, 50vh);
                }
        }
        `;


        const Tri = styled.div`
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
      
            opacity:0.8;
            position:absolute;
            right:0px;
            top:500px;
            z-index:-1;
            animation: tri 50s linear alternate infinite;

            @keyframes tri {
                to{
                    transform:translate(-100vw, -50vh);
                }
        }
        `;

const AnimatedShapes = () => {
    return ( 
        <>
        <Square/>
        <Circle/>
        <Rect/>
        <Rect2/>
        <Tri/>
        </>
     );
}
 
export default AnimatedShapes;