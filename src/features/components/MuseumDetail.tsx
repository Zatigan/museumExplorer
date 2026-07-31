import { useEffect, useState } from "react"
import type { MuseumInterface } from "../interfaces/MuseumInterface";
import GetMuseum from "../services/GetMuseum";
import { useParams } from "react-router";

export default function MuseumCard() {
 const [museumData, setMuseumData] = useState<MuseumInterface>();

 const { id } = useParams();

 useEffect(() => {
  GetMuseum(id as string)
   .then((data: MuseumInterface) => {
    setMuseumData(data);
    console.log(data);
   })
 }, []);

 return (
  <>
   <h2>{`Bienvenue au ${museumData?.name}`}</h2>
   <img src={`../${museumData?.image}`} alt={`Photo du ${museumData?.name}`} />
   <p>{museumData?.address}</p>
   <p>{museumData?.city}</p>
   <p>{museumData?.description}</p>
   <ul>
    {/* Work in progress pour les expos */}
   </ul>
  </>
 )
}