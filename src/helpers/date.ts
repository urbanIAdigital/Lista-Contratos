export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "COP",
});
export function timestampToDateBogota(timestamp) {
  // Crear un objeto Date con el timestamp
  const date = new Date(timestamp);

  // Convertir la fecha a la zona horaria de Bogotá (UTC-5)
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // Formatear la fecha en el formato dd/mm/yyyy
  const formattedDate = new Intl.DateTimeFormat("es-CO", options).format(date);

  // Reorganizar la fecha en el formato deseado
  const [day, month, year] = formattedDate.split("/");

  return `${day}/${month}/${year}`;
}
