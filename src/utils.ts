// format a date to string
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    // const userLocale = navigator.language;  // 獲取使用者的瀏覽器語言
    // return new Date(date).toLocaleDateString(userLocale, options);
    // return new Date(date).toLocaleDateString('undefined', options);
    return new Date(date).toLocaleDateString('en-US', options);
  }


// Captialize the first letter
function capitalize(str: string): string{
  if (typeof str !== 'string' || str.length === 0){
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  export {
    formatDate, capitalize
  };