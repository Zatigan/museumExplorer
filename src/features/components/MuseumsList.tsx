import { useEffect, useState } from "react"
import type { MuseumInterface } from "../interfaces/MuseumInterface";
import GetAllMuseums from "../services/GetAllMuseums";
import { Link } from "react-router";

export default function MuseumList() {
 const [museumsList, setMuseumsLists] = useState<MuseumInterface[]>([]);

 useEffect(() => {
  GetAllMuseums()
   .then((data: MuseumInterface[]) => {
    setMuseumsLists(data);
    console.log(data);
   })
 }, []);

 return (
  <ul>
   {
    museumsList.map((museum) =>
     <Link to={`details/${museum.id}`} >
      <li key={museum.id}>
       <p>{museum.name}</p>
       <p>{museum.city}</p>
       <img src={`../${museum.image}`} alt={`Photo du ${museum.name}`} />
      </li>
     </Link>
    )
   }
  </ul>
 )
}