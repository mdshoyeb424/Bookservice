import { images } from "../../../data/imageSource"

const BookCard = ({ book }) => {
    return (
        <>
            <div key={book?.id} className="book-card mb-5">
                <div className="book-card-body d-flex flex-column gap-3">
                    <div className="position-relative"><img src={images[Math.floor(Math.random() * images.length)]} className="w-100 " style={{ aspectRatio: "4/3" }} alt="" />
                        <div className="genre-label"><i> {book?.genre}</i></div></div>
                    <div><h6>{book?.title}</h6></div>
                    <div className="d-flex justify-content-between"><small>{book?.author}</small> <span><i> {book?.genre}</i></span></div>
                </div>
            </div>
        </>
    )
}

export default BookCard