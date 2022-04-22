import React from 'react';
import axios from 'axios';

export default function Assessment2 () {

    const baseURI = 'https://api.publicapis.org/categories';

    const [data, setData] = React.useState([]);
    const [filter,setFilter] = React.useState();
    
    const getData = async () => {
        const response = await axios.get(baseURI);
        const resData = response.data.categories;
        setData(resData);
    }

    React.useEffect(()=> {
        console.log("hello");
        getData()
        .then(()=>{
            console.log("success")
            
        })
        .catch(((err) =>{
            console.log(err);
        }))
    }, [])


    const MapData = (props) => {

        let results = props.result;
        
        if(!results){
           results = data;
        }

        const item = results.map((array)=>{
            return (<Table value={array}/>);
        })
        return item
    }
    
    const Table = (props) =>{
        return (
        <div className="border border-black">
            <h1 id={props.value}>{props.value}</h1>
        </div>)
    }

    const handleFilter = (e) => {   

        let input = e.target.value;

        const result = data.filter(word => {
            const regex = new RegExp(input)
            const test = regex.test(word);
            return test;
        })

        console.log(result);
        setFilter(result);
        
    }
   
    
    return (
        <div className="container mx-auto text-center">
            <div className="mb-5">
            <label>filter</label>
            <input className="border border-black" onChange={handleFilter}/>
            </div>
           <MapData result={filter}/>
        </div>
      
    )
}