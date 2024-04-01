model.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
    format_url: (url) => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
};