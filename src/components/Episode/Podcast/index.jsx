export const Podcast = ({ num, title, guest }) => {

    return (
        <div className="episodes-list">
            <div className="episode">
            <div className="episode__num">${num}</div>
            <div className="episode__body">
            <div className="episode__title">${title}</div>
            <div className="episode__guest">${guest}</div>
            </div>
        </div>
    </div>
    )
}


