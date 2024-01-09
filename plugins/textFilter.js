const formatCurrency = (value) => {
  if (isNaN(value) || value === null) {
    return 'Rp. 0';
  }

  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);

  return formattedValue;
};

const calculateDayDistance = (startDate, endDate)=> {
    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();
  
    // Calculate the difference in milliseconds
    const timeDifference = endTimestamp - startTimestamp;
  
    // Convert the difference to days
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
    return dayDifference;
  }
  
export default defineNuxtPlugin(nuxtApp => {
    // now available on `nuxtApp.$injected`
    // nuxtApp.provide('formattedValue', (value) => formattedValue(value))
    return {
        provide: {
            formatCurrency: formatCurrency,
            calculateDayDistance
        }
      }
  })