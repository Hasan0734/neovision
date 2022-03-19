
const FileCategory = () => {
    return (
        <div className="d-flex gap-3">
            <button className="btn border px-3 rounded-pill d-flex gap-3 text-secondary">
                <span>
                    <i className="fa-solid fa-file-pdf"></i>
                </span>
                PDF</button>
            <button className="btn border px-3 rounded-pill d-flex gap-3 text-secondary">
                <span>
                    <i className="fa-solid fa-file"></i>
                </span>
                Presentation</button>
            <button className="btn border px-3  rounded-pill d-flex gap-3 text-secondary">
                <span>
                    <i className="fa-solid fa-file-image"></i>
                </span>
                Photos</button>
            <button className="btn border active__file px-3 rounded-pill d-flex gap-3 text-secondary">
                <span>
                    <i className="fa-solid fa-file-video"></i>
                </span>
                Videos</button>
        </div>
    );
};

export default FileCategory;