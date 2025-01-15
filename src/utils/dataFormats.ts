// Types
import { Timestamp } from "firebase/firestore";

export const numberToCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function getYouTubeVideoID(url: string) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match && match[1] ? match[1] : null;
}

export function stringDateToFormatedDate(date: string) {
  const [ano, mes, dia] = date.split('-');
  
  return `${dia}/${mes}/${ano}`;
}

export function timestampToDateBR(timestamp : Timestamp, oneMoreYear? : boolean) {
  const date = timestamp.toDate();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = oneMoreYear ? date.getFullYear() + 1 : date.getFullYear();

  return `${day}/${month}/${year}`;
}