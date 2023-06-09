export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);
    return formattedDate;
}

export function isoToWIB(isoTime) {
    const date = new Date(isoTime);
  
    date.setHours(date.getHours() + 7);
  
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');
  
    const options = { timeZoneName: 'short' };
    const timeZone = date.toLocaleString('id-ID', options).split(' ')[2];

    return `${hour}:${minute}:${second} ${timeZone}`;
}

export function getOverview(body) {
    if (body.length >= 20) {
        return `${body.substring(0, 100)} ....`
    } else {
        return body
    }
}