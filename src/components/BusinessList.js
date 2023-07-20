import Business from './Business';

export default function BusinessList() {
    const bList = [];
    for (let i = 0; i < 10; i++) {
        bList.push(<li>{Business(i)}</li>);
    }

    return (
        <div>
            {bList}
        </div>
    );
}