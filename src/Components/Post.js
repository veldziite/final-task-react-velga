import moment from 'moment';

function PostEntry ({ entry }) {
    const timeStamp = entry.createdAt;
    const time = moment(timeStamp).startOf('hour').fromNow();
      
    return (
        <li className="list-group-item">
            <div>
                {entry.user_name}
                <span>{time}</span>
            </div>
            <div>
                {entry.message}
            </div>
        </li>
    )
}

export default PostEntry;