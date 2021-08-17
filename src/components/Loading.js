const Loading = () => {
    return (
        <div className="loading-card d-flex justify-content-center">
            <button className="btn btn-lgiht w-50 align-self-center" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default Loading;