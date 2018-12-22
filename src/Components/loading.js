import React from "react";


const loading = (props) => {
    console.log(props)
    if (props.error) return <div>error</div>
    else if (props.timedOut) return <div>超时</div>
    else if (props.pastDelay) return <div>Loading...</div>;
    else return <div>null</div>;

}

// const page = Loadable({
//     loader: () => import('./WillFailToLoad'), // oh no!
//     loading: loading,
// });


export default loading