import {FC} from 'react';

const NotFound : FC = () =>{
    return(
        <section className="Page-component NotFound-section">
            <h1 style={{textAlign: 'center'}}>The requested page does not exist</h1>
        </section>
    );
};

export default NotFound;