import moment from "moment";

type DateAsTextProps = {
    date: string,
    // format: 
    // @weaklink format shouldn't have to be remembered 
    // @unfinished needs to receive 
}

const DateAsText = (props: DateAsTextProps) => {
    const {date} = props;
    const sortedDate = moment(date).format("ddd MMM DD YYYY");
    return <>{sortedDate}</>
}

export default DateAsText;