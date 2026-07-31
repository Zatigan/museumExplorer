import { useParams } from "react-router"

export default function MuseumCard() {
 let params = useParams();

 return (
  <>
   <h1>Bienvenue chez ${museum.name}</h1>
  </>
 )
}