function str_limit(str, limit=10)
{
    str = str.replace(/<[^]>*/g,"");
    str = str.trim();
    str = str.replace(/\s+/g," ");
    str = str.toLowerCase();
    const arr = str.split(" ");
    const newarr = arr.slice(0,limit);
    str = newarr.join(" ");
    return str;
}

let str = `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.`;
console.log(str.length);

str = str_limit(str);
console.log(str);