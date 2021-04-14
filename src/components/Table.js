import axios from 'axios';
import react, {useState, useEffect} from 'react';

export default function Table(){

    const baseUrl = "http://localhost:8082/api/";

    const [genders, steGenders] = useState([]);

    useEffect(()=>{
        getGeneros();        
    }, []);

    const getGeneros = () => {
        axios.get(`${baseUrl}gender`)
        .then(response => {
            steGenders(response.data)
            console.log(response.data)
        })
        .catch(e =>{
            console.log("Hubo un error" + e);
        })
    }

    return (  
        < >
      <table className="table">
            <thead>
                <tr>
                    <th scope="col">Genero ID</th>
                    <th scope="col">Genero</th>
                </tr>
            </thead>
            <tbody>
                {
                    genders.map(item => 
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                        </tr>
                    )
                }
            </tbody>
      </table>
        </>
    );
}