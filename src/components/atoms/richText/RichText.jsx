import Parser from 'html-react-parser';

const RichText = ({ html = '' }) => Parser(html);

export default RichText;
