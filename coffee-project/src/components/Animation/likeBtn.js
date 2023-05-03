// import Lottie from "lottie-react";
// import React, { useState } from "react";
// import likeAnimation from "../../assets/Animations/likeAnimation.json";
// import animationData from "../../assets/Animations/likeAnimation.json";

// const LikeBtn = () => {;
// const [isLiked,setLikeState]=useState(false)
// const [animationState, setAnimationState]= useState({
//     isStopped: true, isPaused: false
// })

// const defaultOptions = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

// return(
//     <>
//     <button onClick={()=>{
//         setAnimationState({
//             ...animationState,
//             isStopped:!animationState.isStopped,
//         })
//         setLikeState(!isLiked)}}>

//    <div>
//    <Lottie 
//         options={defaultOptions}
//         height={400}
//         width={400}
//         isStopped={animationState.isStopped}
//         isPaused={animationState.isPaused}/>
//    </div>
//     </button>
//     </>
// )}


// export default LikeBtn;