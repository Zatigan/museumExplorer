import { useParams } from "react-router";

export default async function GetMuseum() {

 const id = useParams();

 const API_URL = `https://museumapi.hackeuse.fr/museums/${id}`;

 try {
  const response = await fetch(API_URL)
  if (!response.ok) {
   throw new Error('Échec lors de la tentative de connexion à l\'API');
  }
  const result = await response.json();
  return result;
 } catch (error) {
  console.error("Une erreur se balade du côté de l'appel API");
 }
}