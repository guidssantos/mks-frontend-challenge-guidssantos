export const currentDateTime = () => {
    const date = new Date();
    date.setHours(date.getHours() - 3); 
    return date.toISOString().split('.')[0]+"Z";
}
