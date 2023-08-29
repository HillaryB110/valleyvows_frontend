import React , {useEffect, useState} from "react";
import { getAllDatingPoolUsersAPI } from "../API/datingPoolAPI";
import { getImagesForDatingPool } from "../data/DatingPoolImages";
import { useNavigate } from "react-router-dom";
import "./DatingPool.css";

function DatingPool() {

    let navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAllDatingPoolUsers();
    },[]);

async function getAllDatingPoolUsers() {
    try{
        let {data} = await getAllDatingPoolUsersAPI();
        setData(data);
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
function goToDatingPoolUser(id) {
    navigate(`/dating-pool/${id}`)
}

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((villager) => (
          <div
            key={villager.id}
            className="col-md-4 mb-4"
            onClick={() => goToDatingPoolUser(villager.id)}
          >
            <div className="card">
              <img
                src={getImagesForDatingPool(villager)}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{villager.name}</h5>
              </div>
              <ul className="list-group list-group-flush"></ul>
              <div className="card-body">
                <button
                  className="btn btn-primary"
                  onClick={() => goToDatingPoolUser(villager.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatingPool